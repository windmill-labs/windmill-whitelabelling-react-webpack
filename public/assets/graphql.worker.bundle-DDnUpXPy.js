var YD = Object.defineProperty;
var zD = ($r, gn, Ni) => gn in $r ? YD($r, gn, { enumerable: !0, configurable: !0, writable: !0, value: Ni }) : $r[gn] = Ni;
var ot = ($r, gn, Ni) => zD($r, typeof gn != "symbol" ? gn + "" : gn, Ni);
var I2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, R2 = {}, O2;
function XD() {
  return O2 || (O2 = 1, (() => {
    var dr, hi, hr, jn, fi, pi, sa, fr, pr, mi, f2, p2, m2, qn, an, Gn, gi, g2, Kt, mr, ft, Rt, oa, Hn, Ei, Ur, Ne, gr, Nt, Wn, Ct, Jt, In, Pr;
    var $r = Object.create, gn = Object.defineProperty, Ni = Object.getOwnPropertyDescriptor, q2 = Object.getOwnPropertyNames, G2 = Object.getPrototypeOf, H2 = Object.prototype.hasOwnProperty, W2 = (e, t) => () => (e && (t = e(e = 0)), t), _r = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Y2 = (e, t) => {
      for (var n in t) gn(e, n, { get: t[n], enumerable: !0 });
    }, z2 = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of q2(t)) !H2.call(e, i) && i !== n && gn(e, i, { get: () => t[i], enumerable: !(r = Ni(t, i)) || r.enumerable });
      return e;
    }, $o = (e, t, n) => (n = e != null ? $r(G2(e)) : {}, z2(!e || !e.__esModule ? gn(n, "default", { value: e, enumerable: !0 }) : n, e)), X2 = _r((e, t) => {
      function n(r, i) {
        if (r != null) return r;
        var a = new Error(i !== void 0 ? i : "Got unexpected " + r);
        throw a.framesToPop = 1, a;
      }
      t.exports = n, t.exports.default = n, Object.defineProperty(t.exports, "__esModule", { value: !0 });
    }), as = _r((e, t) => {
      var n = "\\\\/", r = `[^${n}]`, i = "\\.", a = "\\+", s = "\\?", o = "\\/", l = "(?=.)", u = "[^/]", c = `(?:${o}|$)`, d = `(?:^|${o})`, p = `${i}{1,2}${c}`, m = `(?!${i})`, g = `(?!${d}${p})`, _ = `(?!${i}{0,1}${c})`, L = `(?!${p})`, A = `[^.${o}]`, F = `${u}*?`, C = "/", x = { DOT_LITERAL: i, PLUS_LITERAL: a, QMARK_LITERAL: s, SLASH_LITERAL: o, ONE_CHAR: l, QMARK: u, END_ANCHOR: c, DOTS_SLASH: p, NO_DOT: m, NO_DOTS: g, NO_DOT_SLASH: _, NO_DOTS_SLASH: L, QMARK_NO_DOT: A, STAR: F, START_ANCHOR: d, SEP: C }, U = { ...x, SLASH_LITERAL: `[${n}]`, QMARK: r, STAR: `${r}*?`, DOTS_SLASH: `${i}{1,2}(?:[${n}]|$)`, NO_DOT: `(?!${i})`, NO_DOTS: `(?!(?:^|[${n}])${i}{1,2}(?:[${n}]|$))`, NO_DOT_SLASH: `(?!${i}{0,1}(?:[${n}]|$))`, NO_DOTS_SLASH: `(?!${i}{1,2}(?:[${n}]|$))`, QMARK_NO_DOT: `[^.${n}]`, START_ANCHOR: `(?:^|[${n}])`, END_ANCHOR: `(?:[${n}]|$)`, SEP: "\\" }, q = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      t.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: q, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(I) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${I.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(I) {
        return I === !0 ? U : x;
      } };
    }), Vo = _r((e) => {
      var { REGEX_BACKSLASH: t, REGEX_REMOVE_BACKSLASH: n, REGEX_SPECIAL_CHARS: r, REGEX_SPECIAL_CHARS_GLOBAL: i } = as();
      e.isObject = (a) => a !== null && typeof a == "object" && !Array.isArray(a), e.hasRegexChars = (a) => r.test(a), e.isRegexChar = (a) => a.length === 1 && e.hasRegexChars(a), e.escapeRegex = (a) => a.replace(i, "\\$1"), e.toPosixSlashes = (a) => a.replace(t, "/"), e.removeBackslashes = (a) => a.replace(n, (s) => s === "\\" ? "" : s), e.supportsLookbehinds = () => {
        let a = process.version.slice(1).split(".").map(Number);
        return a.length === 3 && a[0] >= 9 || a[0] === 8 && a[1] >= 10;
      }, e.escapeLast = (a, s, o) => {
        let l = a.lastIndexOf(s, o);
        return l === -1 ? a : a[l - 1] === "\\" ? e.escapeLast(a, s, l - 1) : `${a.slice(0, l)}\\${a.slice(l)}`;
      }, e.removePrefix = (a, s = {}) => {
        let o = a;
        return o.startsWith("./") && (o = o.slice(2), s.prefix = "./"), o;
      }, e.wrapOutput = (a, s = {}, o = {}) => {
        let l = o.contains ? "" : "^", u = o.contains ? "" : "$", c = `${l}(?:${a})${u}`;
        return s.negated === !0 && (c = `(?:^(?!${c}).*$)`), c;
      }, e.basename = (a, { windows: s } = {}) => s ? a.replace(/[\\/]$/, "").replace(/.*[\\/]/, "") : a.replace(/\/$/, "").replace(/.*\//, "");
    }), J2 = _r((e, t) => {
      var n = Vo(), { CHAR_ASTERISK: r, CHAR_AT: i, CHAR_BACKWARD_SLASH: a, CHAR_COMMA: s, CHAR_DOT: o, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: c, CHAR_LEFT_PARENTHESES: d, CHAR_LEFT_SQUARE_BRACKET: p, CHAR_PLUS: m, CHAR_QUESTION_MARK: g, CHAR_RIGHT_CURLY_BRACE: _, CHAR_RIGHT_PARENTHESES: L, CHAR_RIGHT_SQUARE_BRACKET: A } = as(), F = (U) => U === u || U === a, C = (U) => {
        U.isPrefix !== !0 && (U.depth = U.isGlobstar ? 1 / 0 : 1);
      }, x = (U, q) => {
        let I = q || {}, B = U.length - 1, S = I.parts === !0 || I.scanToEnd === !0, K = [], V = [], xe = [], Z = U, G = -1, J = 0, ne = 0, oe = !1, de = !1, ue = !1, Ie = !1, ke = !1, y = !1, ee = !1, z = !1, re = !1, M = 0, P, le, _e = { value: "", depth: 0, isGlob: !1 }, Xe = () => G >= B, Tt = () => Z.charCodeAt(G + 1), Se = () => (P = le, Z.charCodeAt(++G));
        for (; G < B; ) {
          le = Se();
          let De;
          if (le === a) {
            ee = _e.backslashes = !0, le = Se(), le === c && (y = !0);
            continue;
          }
          if (y === !0 || le === c) {
            for (M++; Xe() !== !0 && (le = Se()); ) {
              if (le === a) {
                ee = _e.backslashes = !0, Se();
                continue;
              }
              if (le === c) {
                M++;
                continue;
              }
              if (y !== !0 && le === o && (le = Se()) === o) {
                if (oe = _e.isBrace = !0, ue = _e.isGlob = !0, re = !0, S === !0) continue;
                break;
              }
              if (y !== !0 && le === s) {
                if (oe = _e.isBrace = !0, ue = _e.isGlob = !0, re = !0, S === !0) continue;
                break;
              }
              if (le === _ && (M--, M === 0)) {
                y = !1, oe = _e.isBrace = !0, re = !0;
                break;
              }
            }
            if (S === !0) continue;
            break;
          }
          if (le === u) {
            if (K.push(G), V.push(_e), _e = { value: "", depth: 0, isGlob: !1 }, re === !0) continue;
            if (P === o && G === J + 1) {
              J += 2;
              continue;
            }
            ne = G + 1;
            continue;
          }
          if (I.noext !== !0 && (le === m || le === i || le === r || le === g || le === l) && Tt() === d) {
            if (ue = _e.isGlob = !0, Ie = _e.isExtglob = !0, re = !0, S === !0) {
              for (; Xe() !== !0 && (le = Se()); ) {
                if (le === a) {
                  ee = _e.backslashes = !0, le = Se();
                  continue;
                }
                if (le === L) {
                  ue = _e.isGlob = !0, re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (le === r) {
            if (P === r && (ke = _e.isGlobstar = !0), ue = _e.isGlob = !0, re = !0, S === !0) continue;
            break;
          }
          if (le === g) {
            if (ue = _e.isGlob = !0, re = !0, S === !0) continue;
            break;
          }
          if (le === p) for (; Xe() !== !0 && (De = Se()); ) {
            if (De === a) {
              ee = _e.backslashes = !0, Se();
              continue;
            }
            if (De === A) {
              if (de = _e.isBracket = !0, ue = _e.isGlob = !0, re = !0, S === !0) continue;
              break;
            }
          }
          if (I.nonegate !== !0 && le === l && G === J) {
            z = _e.negated = !0, J++;
            continue;
          }
          if (I.noparen !== !0 && le === d) {
            if (ue = _e.isGlob = !0, S === !0) {
              for (; Xe() !== !0 && (le = Se()); ) {
                if (le === d) {
                  ee = _e.backslashes = !0, le = Se();
                  continue;
                }
                if (le === L) {
                  re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (ue === !0) {
            if (re = !0, S === !0) continue;
            break;
          }
        }
        I.noext === !0 && (Ie = !1, ue = !1);
        let Je = Z, _i = "", sn = "";
        J > 0 && (_i = Z.slice(0, J), Z = Z.slice(J), ne -= J), Je && ue === !0 && ne > 0 ? (Je = Z.slice(0, ne), sn = Z.slice(ne)) : ue === !0 ? (Je = "", sn = Z) : Je = Z, Je && Je !== "" && Je !== "/" && Je !== Z && F(Je.charCodeAt(Je.length - 1)) && (Je = Je.slice(0, -1)), I.unescape === !0 && (sn && (sn = n.removeBackslashes(sn)), Je && ee === !0 && (Je = n.removeBackslashes(Je)));
        let Ot = { prefix: _i, input: U, start: J, base: Je, glob: sn, isBrace: oe, isBracket: de, isGlob: ue, isExtglob: Ie, isGlobstar: ke, negated: z };
        if (I.tokens === !0 && (Ot.maxDepth = 0, F(le) || V.push(_e), Ot.tokens = V), I.parts === !0 || I.tokens === !0) {
          let De;
          for (let at = 0; at < K.length; at++) {
            let Yn = De ? De + 1 : J, ae = K[at], Be = U.slice(Yn, ae);
            I.tokens && (at === 0 && J !== 0 ? (V[at].isPrefix = !0, V[at].value = _i) : V[at].value = Be, C(V[at]), Ot.maxDepth += V[at].depth), (at !== 0 || Be !== "") && xe.push(Be), De = ae;
          }
          if (De && De + 1 < U.length) {
            let at = U.slice(De + 1);
            xe.push(at), I.tokens && (V[V.length - 1].value = at, C(V[V.length - 1]), Ot.maxDepth += V[V.length - 1].depth);
          }
          Ot.slashes = K, Ot.parts = xe;
        }
        return Ot;
      };
      t.exports = x;
    }), Q2 = _r((e, t) => {
      var n = as(), r = Vo(), { MAX_LENGTH: i, POSIX_REGEX_SOURCE: a, REGEX_NON_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_BACKREF: o, REPLACEMENTS: l } = n, u = (p, m) => {
        if (typeof m.expandRange == "function") return m.expandRange(...p, m);
        p.sort();
        let g = `[${p.join("-")}]`;
        try {
          new RegExp(g);
        } catch {
          return p.map((_) => r.escapeRegex(_)).join("..");
        }
        return g;
      }, c = (p, m) => `Missing ${p}: "${m}" - use "\\\\${m}" to match literal characters`, d = (p, m) => {
        if (typeof p != "string") throw new TypeError("Expected a string");
        p = l[p] || p;
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, L = p.length;
        if (L > _) throw new SyntaxError(`Input length: ${L}, exceeds maximum allowed length: ${_}`);
        let A = { type: "bos", value: "", output: g.prepend || "" }, F = [A], C = g.capture ? "" : "?:", x = n.globChars(g.windows), U = n.extglobChars(x), { DOT_LITERAL: q, PLUS_LITERAL: I, SLASH_LITERAL: B, ONE_CHAR: S, DOTS_SLASH: K, NO_DOT: V, NO_DOT_SLASH: xe, NO_DOTS_SLASH: Z, QMARK: G, QMARK_NO_DOT: J, STAR: ne, START_ANCHOR: oe } = x, de = (ae) => `(${C}(?:(?!${oe}${ae.dot ? K : q}).)*?)`, ue = g.dot ? "" : V, Ie = g.dot ? G : J, ke = g.bash === !0 ? de(g) : ne;
        g.capture && (ke = `(${ke})`), typeof g.noext == "boolean" && (g.noextglob = g.noext);
        let y = { input: p, index: -1, start: 0, dot: g.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: F };
        p = r.removePrefix(p, y), L = p.length;
        let ee = [], z = [], re = [], M = A, P, le = () => y.index === L - 1, _e = y.peek = (ae = 1) => p[y.index + ae], Xe = y.advance = () => p[++y.index], Tt = () => p.slice(y.index + 1), Se = (ae = "", Be = 0) => {
          y.consumed += ae, y.index += Be;
        }, Je = (ae) => {
          y.output += ae.output != null ? ae.output : ae.value, Se(ae.value);
        }, _i = () => {
          let ae = 1;
          for (; _e() === "!" && (_e(2) !== "(" || _e(3) === "?"); ) Xe(), y.start++, ae++;
          return ae % 2 === 0 ? !1 : (y.negated = !0, y.start++, !0);
        }, sn = (ae) => {
          y[ae]++, re.push(ae);
        }, Ot = (ae) => {
          y[ae]--, re.pop();
        }, De = (ae) => {
          if (M.type === "globstar") {
            let Be = y.braces > 0 && (ae.type === "comma" || ae.type === "brace"), te = ae.extglob === !0 || ee.length && (ae.type === "pipe" || ae.type === "paren");
            ae.type !== "slash" && ae.type !== "paren" && !Be && !te && (y.output = y.output.slice(0, -M.output.length), M.type = "star", M.value = "*", M.output = ke, y.output += M.output);
          }
          if (ee.length && ae.type !== "paren" && !U[ae.value] && (ee[ee.length - 1].inner += ae.value), (ae.value || ae.output) && Je(ae), M && M.type === "text" && ae.type === "text") {
            M.value += ae.value, M.output = (M.output || "") + ae.value;
            return;
          }
          ae.prev = M, F.push(ae), M = ae;
        }, at = (ae, Be) => {
          let te = { ...U[Be], conditions: 1, inner: "" };
          te.prev = M, te.parens = y.parens, te.output = y.output;
          let Le = (g.capture ? "(" : "") + te.open;
          sn("parens"), De({ type: ae, value: Be, output: y.output ? "" : S }), De({ type: "paren", extglob: !0, value: Xe(), output: Le }), ee.push(te);
        }, Yn = (ae) => {
          let Be = ae.close + (g.capture ? ")" : "");
          if (ae.type === "negate") {
            let te = ke;
            ae.inner && ae.inner.length > 1 && ae.inner.includes("/") && (te = de(g)), (te !== ke || le() || /^\)+$/.test(Tt())) && (Be = ae.close = `)$))${te}`), ae.prev.type === "bos" && le() && (y.negatedExtglob = !0);
          }
          De({ type: "paren", extglob: !0, value: P, output: Be }), Ot("parens");
        };
        if (g.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(p)) {
          let ae = !1, Be = p.replace(o, (te, Le, pt, xt, st, on) => xt === "\\" ? (ae = !0, te) : xt === "?" ? Le ? Le + xt + (st ? G.repeat(st.length) : "") : on === 0 ? Ie + (st ? G.repeat(st.length) : "") : G.repeat(pt.length) : xt === "." ? q.repeat(pt.length) : xt === "*" ? Le ? Le + xt + (st ? ke : "") : ke : Le ? te : `\\${te}`);
          return ae === !0 && (g.unescape === !0 ? Be = Be.replace(/\\/g, "") : Be = Be.replace(/\\+/g, (te) => te.length % 2 === 0 ? "\\\\" : te ? "\\" : "")), Be === p && g.contains === !0 ? (y.output = p, y) : (y.output = r.wrapOutput(Be, y, m), y);
        }
        for (; !le(); ) {
          if (P = Xe(), P === "\0") continue;
          if (P === "\\") {
            let te = _e();
            if (te === "/" && g.bash !== !0 || te === "." || te === ";") continue;
            if (!te) {
              P += "\\", De({ type: "text", value: P });
              continue;
            }
            let Le = /^\\+/.exec(Tt()), pt = 0;
            if (Le && Le[0].length > 2 && (pt = Le[0].length, y.index += pt, pt % 2 !== 0 && (P += "\\")), g.unescape === !0 ? P = Xe() || "" : P += Xe() || "", y.brackets === 0) {
              De({ type: "text", value: P });
              continue;
            }
          }
          if (y.brackets > 0 && (P !== "]" || M.value === "[" || M.value === "[^")) {
            if (g.posix !== !1 && P === ":") {
              let te = M.value.slice(1);
              if (te.includes("[") && (M.posix = !0, te.includes(":"))) {
                let Le = M.value.lastIndexOf("["), pt = M.value.slice(0, Le), xt = M.value.slice(Le + 2), st = a[xt];
                if (st) {
                  M.value = pt + st, y.backtrack = !0, Xe(), !A.output && F.indexOf(M) === 1 && (A.output = S);
                  continue;
                }
              }
            }
            (P === "[" && _e() !== ":" || P === "-" && _e() === "]") && (P = `\\${P}`), P === "]" && (M.value === "[" || M.value === "[^") && (P = `\\${P}`), g.posix === !0 && P === "!" && M.value === "[" && (P = "^"), M.value += P, Je({ value: P });
            continue;
          }
          if (y.quotes === 1 && P !== '"') {
            P = r.escapeRegex(P), M.value += P, Je({ value: P });
            continue;
          }
          if (P === '"') {
            y.quotes = y.quotes === 1 ? 0 : 1, g.keepQuotes === !0 && De({ type: "text", value: P });
            continue;
          }
          if (P === "(") {
            sn("parens"), De({ type: "paren", value: P });
            continue;
          }
          if (P === ")") {
            if (y.parens === 0 && g.strictBrackets === !0) throw new SyntaxError(c("opening", "("));
            let te = ee[ee.length - 1];
            if (te && y.parens === te.parens + 1) {
              Yn(ee.pop());
              continue;
            }
            De({ type: "paren", value: P, output: y.parens ? ")" : "\\)" }), Ot("parens");
            continue;
          }
          if (P === "[") {
            if (g.nobracket === !0 || !Tt().includes("]")) {
              if (g.nobracket !== !0 && g.strictBrackets === !0) throw new SyntaxError(c("closing", "]"));
              P = `\\${P}`;
            } else sn("brackets");
            De({ type: "bracket", value: P });
            continue;
          }
          if (P === "]") {
            if (g.nobracket === !0 || M && M.type === "bracket" && M.value.length === 1) {
              De({ type: "text", value: P, output: `\\${P}` });
              continue;
            }
            if (y.brackets === 0) {
              if (g.strictBrackets === !0) throw new SyntaxError(c("opening", "["));
              De({ type: "text", value: P, output: `\\${P}` });
              continue;
            }
            Ot("brackets");
            let te = M.value.slice(1);
            if (M.posix !== !0 && te[0] === "^" && !te.includes("/") && (P = `/${P}`), M.value += P, Je({ value: P }), g.literalBrackets === !1 || r.hasRegexChars(te)) continue;
            let Le = r.escapeRegex(M.value);
            if (y.output = y.output.slice(0, -M.value.length), g.literalBrackets === !0) {
              y.output += Le, M.value = Le;
              continue;
            }
            M.value = `(${C}${Le}|${M.value})`, y.output += M.value;
            continue;
          }
          if (P === "{" && g.nobrace !== !0) {
            sn("braces");
            let te = { type: "brace", value: P, output: "(", outputIndex: y.output.length, tokensIndex: y.tokens.length };
            z.push(te), De(te);
            continue;
          }
          if (P === "}") {
            let te = z[z.length - 1];
            if (g.nobrace === !0 || !te) {
              De({ type: "text", value: P, output: P });
              continue;
            }
            let Le = ")";
            if (te.dots === !0) {
              let pt = F.slice(), xt = [];
              for (let st = pt.length - 1; st >= 0 && (F.pop(), pt[st].type !== "brace"); st--) pt[st].type !== "dots" && xt.unshift(pt[st].value);
              Le = u(xt, g), y.backtrack = !0;
            }
            if (te.comma !== !0 && te.dots !== !0) {
              let pt = y.output.slice(0, te.outputIndex), xt = y.tokens.slice(te.tokensIndex);
              te.value = te.output = "\\{", P = Le = "\\}", y.output = pt;
              for (let st of xt) y.output += st.output || st.value;
            }
            De({ type: "brace", value: P, output: Le }), Ot("braces"), z.pop();
            continue;
          }
          if (P === "|") {
            ee.length > 0 && ee[ee.length - 1].conditions++, De({ type: "text", value: P });
            continue;
          }
          if (P === ",") {
            let te = P, Le = z[z.length - 1];
            Le && re[re.length - 1] === "braces" && (Le.comma = !0, te = "|"), De({ type: "comma", value: P, output: te });
            continue;
          }
          if (P === "/") {
            if (M.type === "dot" && y.index === y.start + 1) {
              y.start = y.index + 1, y.consumed = "", y.output = "", F.pop(), M = A;
              continue;
            }
            De({ type: "slash", value: P, output: B });
            continue;
          }
          if (P === ".") {
            if (y.braces > 0 && M.type === "dot") {
              M.value === "." && (M.output = q);
              let te = z[z.length - 1];
              M.type = "dots", M.output += P, M.value += P, te.dots = !0;
              continue;
            }
            if (y.braces + y.parens === 0 && M.type !== "bos" && M.type !== "slash") {
              De({ type: "text", value: P, output: q });
              continue;
            }
            De({ type: "dot", value: P, output: q });
            continue;
          }
          if (P === "?") {
            if (!(M && M.value === "(") && g.noextglob !== !0 && _e() === "(" && _e(2) !== "?") {
              at("qmark", P);
              continue;
            }
            if (M && M.type === "paren") {
              let te = _e(), Le = P;
              if (te === "<" && !r.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              (M.value === "(" && !/[!=<:]/.test(te) || te === "<" && !/<([!=]|\w+>)/.test(Tt())) && (Le = `\\${P}`), De({ type: "text", value: P, output: Le });
              continue;
            }
            if (g.dot !== !0 && (M.type === "slash" || M.type === "bos")) {
              De({ type: "qmark", value: P, output: J });
              continue;
            }
            De({ type: "qmark", value: P, output: G });
            continue;
          }
          if (P === "!") {
            if (g.noextglob !== !0 && _e() === "(" && (_e(2) !== "?" || !/[!=<:]/.test(_e(3)))) {
              at("negate", P);
              continue;
            }
            if (g.nonegate !== !0 && y.index === 0) {
              _i();
              continue;
            }
          }
          if (P === "+") {
            if (g.noextglob !== !0 && _e() === "(" && _e(2) !== "?") {
              at("plus", P);
              continue;
            }
            if (M && M.value === "(" || g.regex === !1) {
              De({ type: "plus", value: P, output: I });
              continue;
            }
            if (M && (M.type === "bracket" || M.type === "paren" || M.type === "brace") || y.parens > 0) {
              De({ type: "plus", value: P });
              continue;
            }
            De({ type: "plus", value: I });
            continue;
          }
          if (P === "@") {
            if (g.noextglob !== !0 && _e() === "(" && _e(2) !== "?") {
              De({ type: "at", extglob: !0, value: P, output: "" });
              continue;
            }
            De({ type: "text", value: P });
            continue;
          }
          if (P !== "*") {
            (P === "$" || P === "^") && (P = `\\${P}`);
            let te = s.exec(Tt());
            te && (P += te[0], y.index += te[0].length), De({ type: "text", value: P });
            continue;
          }
          if (M && (M.type === "globstar" || M.star === !0)) {
            M.type = "star", M.star = !0, M.value += P, M.output = ke, y.backtrack = !0, y.globstar = !0, Se(P);
            continue;
          }
          let ae = Tt();
          if (g.noextglob !== !0 && /^\([^?]/.test(ae)) {
            at("star", P);
            continue;
          }
          if (M.type === "star") {
            if (g.noglobstar === !0) {
              Se(P);
              continue;
            }
            let te = M.prev, Le = te.prev, pt = te.type === "slash" || te.type === "bos", xt = Le && (Le.type === "star" || Le.type === "globstar");
            if (g.bash === !0 && (!pt || ae[0] && ae[0] !== "/")) {
              De({ type: "star", value: P, output: "" });
              continue;
            }
            let st = y.braces > 0 && (te.type === "comma" || te.type === "brace"), on = ee.length && (te.type === "pipe" || te.type === "paren");
            if (!pt && te.type !== "paren" && !st && !on) {
              De({ type: "star", value: P, output: "" });
              continue;
            }
            for (; ae.slice(0, 3) === "/**"; ) {
              let la = p[y.index + 4];
              if (la && la !== "/") break;
              ae = ae.slice(3), Se("/**", 3);
            }
            if (te.type === "bos" && le()) {
              M.type = "globstar", M.value += P, M.output = de(g), y.output = M.output, y.globstar = !0, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && !xt && le()) {
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = de(g) + (g.strictSlashes ? ")" : "|$)"), M.value += P, y.globstar = !0, y.output += te.output + M.output, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && ae[0] === "/") {
              let la = ae[1] !== void 0 ? "|$" : "";
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = `${de(g)}${B}|${B}${la})`, M.value += P, y.output += te.output + M.output, y.globstar = !0, Se(P + Xe()), De({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (te.type === "bos" && ae[0] === "/") {
              M.type = "globstar", M.value += P, M.output = `(?:^|${B}|${de(g)}${B})`, y.output = M.output, y.globstar = !0, Se(P + Xe()), De({ type: "slash", value: "/", output: "" });
              continue;
            }
            y.output = y.output.slice(0, -M.output.length), M.type = "globstar", M.output = de(g), M.value += P, y.output += M.output, y.globstar = !0, Se(P);
            continue;
          }
          let Be = { type: "star", value: P, output: ke };
          if (g.bash === !0) {
            Be.output = ".*?", (M.type === "bos" || M.type === "slash") && (Be.output = ue + Be.output), De(Be);
            continue;
          }
          if (M && (M.type === "bracket" || M.type === "paren") && g.regex === !0) {
            Be.output = P, De(Be);
            continue;
          }
          (y.index === y.start || M.type === "slash" || M.type === "dot") && (M.type === "dot" ? (y.output += xe, M.output += xe) : g.dot === !0 ? (y.output += Z, M.output += Z) : (y.output += ue, M.output += ue), _e() !== "*" && (y.output += S, M.output += S)), De(Be);
        }
        for (; y.brackets > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "]"));
          y.output = r.escapeLast(y.output, "["), Ot("brackets");
        }
        for (; y.parens > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", ")"));
          y.output = r.escapeLast(y.output, "("), Ot("parens");
        }
        for (; y.braces > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "}"));
          y.output = r.escapeLast(y.output, "{"), Ot("braces");
        }
        if (g.strictSlashes !== !0 && (M.type === "star" || M.type === "bracket") && De({ type: "maybe_slash", value: "", output: `${B}?` }), y.backtrack === !0) {
          y.output = "";
          for (let ae of y.tokens) y.output += ae.output != null ? ae.output : ae.value, ae.suffix && (y.output += ae.suffix);
        }
        return y;
      };
      d.fastpaths = (p, m) => {
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, L = p.length;
        if (L > _) throw new SyntaxError(`Input length: ${L}, exceeds maximum allowed length: ${_}`);
        p = l[p] || p;
        let { DOT_LITERAL: A, SLASH_LITERAL: F, ONE_CHAR: C, DOTS_SLASH: x, NO_DOT: U, NO_DOTS: q, NO_DOTS_SLASH: I, STAR: B, START_ANCHOR: S } = n.globChars(g.windows), K = g.dot ? q : U, V = g.dot ? I : U, xe = g.capture ? "" : "?:", Z = { negated: !1, prefix: "" }, G = g.bash === !0 ? ".*?" : B;
        g.capture && (G = `(${G})`);
        let J = (ue) => ue.noglobstar === !0 ? G : `(${xe}(?:(?!${S}${ue.dot ? x : A}).)*?)`, ne = (ue) => {
          switch (ue) {
            case "*":
              return `${K}${C}${G}`;
            case ".*":
              return `${A}${C}${G}`;
            case "*.*":
              return `${K}${G}${A}${C}${G}`;
            case "*/*":
              return `${K}${G}${F}${C}${V}${G}`;
            case "**":
              return K + J(g);
            case "**/*":
              return `(?:${K}${J(g)}${F})?${V}${C}${G}`;
            case "**/*.*":
              return `(?:${K}${J(g)}${F})?${V}${G}${A}${C}${G}`;
            case "**/.*":
              return `(?:${K}${J(g)}${F})?${A}${C}${G}`;
            default: {
              let Ie = /^(.*?)\.(\w+)$/.exec(ue);
              if (!Ie) return;
              let ke = ne(Ie[1]);
              return ke ? ke + A + Ie[2] : void 0;
            }
          }
        }, oe = r.removePrefix(p, Z), de = ne(oe);
        return de && g.strictSlashes !== !0 && (de += `${F}?`), de;
      }, t.exports = d;
    }), Z2 = _r((e, t) => {
      var n = J2(), r = Q2(), i = Vo(), a = as(), s = (l) => l && typeof l == "object" && !Array.isArray(l), o = (l, u, c = !1) => {
        if (Array.isArray(l)) {
          let F = l.map((C) => o(C, u, c));
          return (C) => {
            for (let x of F) {
              let U = x(C);
              if (U) return U;
            }
            return !1;
          };
        }
        let d = s(l) && l.tokens && l.input;
        if (l === "" || typeof l != "string" && !d) throw new TypeError("Expected pattern to be a non-empty string");
        let p = u || {}, m = p.windows, g = d ? o.compileRe(l, u) : o.makeRe(l, u, !1, !0), _ = g.state;
        delete g.state;
        let L = () => !1;
        if (p.ignore) {
          let F = { ...u, ignore: null, onMatch: null, onResult: null };
          L = o(p.ignore, F, c);
        }
        let A = (F, C = !1) => {
          let { isMatch: x, match: U, output: q } = o.test(F, g, u, { glob: l, posix: m }), I = { glob: l, state: _, regex: g, posix: m, input: F, output: q, match: U, isMatch: x };
          return typeof p.onResult == "function" && p.onResult(I), x === !1 ? (I.isMatch = !1, C ? I : !1) : L(F) ? (typeof p.onIgnore == "function" && p.onIgnore(I), I.isMatch = !1, C ? I : !1) : (typeof p.onMatch == "function" && p.onMatch(I), C ? I : !0);
        };
        return c && (A.state = _), A;
      };
      o.test = (l, u, c, { glob: d, posix: p } = {}) => {
        if (typeof l != "string") throw new TypeError("Expected input to be a string");
        if (l === "") return { isMatch: !1, output: "" };
        let m = c || {}, g = m.format || (p ? i.toPosixSlashes : null), _ = l === d, L = _ && g ? g(l) : l;
        return _ === !1 && (L = g ? g(l) : l, _ = L === d), (_ === !1 || m.capture === !0) && (m.matchBase === !0 || m.basename === !0 ? _ = o.matchBase(l, u, c, p) : _ = u.exec(L)), { isMatch: !!_, match: _, output: L };
      }, o.matchBase = (l, u, c) => (u instanceof RegExp ? u : o.makeRe(u, c)).test(i.basename(l)), o.isMatch = (l, u, c) => o(u, c)(l), o.parse = (l, u) => Array.isArray(l) ? l.map((c) => o.parse(c, u)) : r(l, { ...u, fastpaths: !1 }), o.scan = (l, u) => n(l, u), o.compileRe = (l, u, c = !1, d = !1) => {
        if (c === !0) return l.output;
        let p = u || {}, m = p.contains ? "" : "^", g = p.contains ? "" : "$", _ = `${m}(?:${l.output})${g}`;
        l && l.negated === !0 && (_ = `^(?!${_}).*$`);
        let L = o.toRegex(_, u);
        return d === !0 && (L.state = l), L;
      }, o.makeRe = (l, u, c = !1, d = !1) => {
        if (!l || typeof l != "string") throw new TypeError("Expected a non-empty string");
        let p = u || {}, m = { negated: !1, fastpaths: !0 }, g = "", _;
        return l.startsWith("./") && (l = l.slice(2), g = m.prefix = "./"), p.fastpaths !== !1 && (l[0] === "." || l[0] === "*") && (_ = r.fastpaths(l, u)), _ === void 0 ? (m = r(l, u), m.prefix = g + (m.prefix || "")) : m.output = _, o.compileRe(m, u, c, d);
      }, o.toRegex = (l, u) => {
        try {
          let c = u || {};
          return new RegExp(l, c.flags || (c.nocase ? "i" : ""));
        } catch (c) {
          if (u && u.debug === !0) throw c;
          return /$^/;
        }
      }, o.constants = a, t.exports = o;
    }), eg = _r((e, t) => {
      t.exports = Z2();
    }), S1 = {};
    Y2(S1, { __debug: () => Ul, check: () => mc, default: () => Id, doc: () => Is, format: () => rl, formatWithCursor: () => Us, getSupportInfo: () => Ml, util: () => Rs, version: () => xl });
    function On() {
    }
    function L1(e, t, n, r, i) {
      for (var a = [], s; t; ) a.push(t), s = t.previousComponent, delete t.previousComponent, t = s;
      a.reverse();
      for (var o = 0, l = a.length, u = 0, c = 0; o < l; o++) {
        var d = a[o];
        if (d.removed) d.value = e.join(r.slice(c, c + d.count)), c += d.count;
        else {
          if (!d.added && i) {
            var p = n.slice(u, u + d.count);
            p = p.map(function(m, g) {
              var _ = r[c + g];
              return _.length > m.length ? _ : m;
            }), d.value = e.join(p);
          } else d.value = e.join(n.slice(u, u + d.count));
          u += d.count, d.added || (c += d.count);
        }
      }
      return a;
    }
    function F1(e, t) {
      var n;
      for (n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
      return e.slice(0, n);
    }
    function I1(e, t) {
      var n;
      if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
      for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
      return e.slice(-n);
    }
    function Ko(e, t, n) {
      if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
      return n + e.slice(t.length);
    }
    function jo(e, t, n) {
      if (!t) return e + n;
      if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
      return e.slice(0, -t.length) + n;
    }
    function Ea(e, t) {
      return Ko(e, t, "");
    }
    function ss(e, t) {
      return jo(e, t, "");
    }
    function R1(e, t) {
      return t.slice(0, tg(e, t));
    }
    function tg(e, t) {
      var n = 0;
      e.length > t.length && (n = e.length - t.length);
      var r = t.length;
      e.length < t.length && (r = e.length);
      var i = Array(r), a = 0;
      i[0] = 0;
      for (var s = 1; s < r; s++) {
        for (t[s] == t[a] ? i[s] = i[a] : i[s] = a; a > 0 && t[s] != t[a]; ) a = i[a];
        t[s] == t[a] && a++;
      }
      a = 0;
      for (var o = n; o < e.length; o++) {
        for (; a > 0 && e[o] != t[a]; ) a = i[a];
        e[o] == t[a] && a++;
      }
      return a;
    }
    function O1(e, t, n, r) {
      if (t && n) {
        var i = t.value.match(/^\s*/)[0], a = t.value.match(/\s*$/)[0], s = n.value.match(/^\s*/)[0], o = n.value.match(/\s*$/)[0];
        if (e) {
          var l = F1(i, s);
          e.value = jo(e.value, s, l), t.value = Ea(t.value, l), n.value = Ea(n.value, l);
        }
        if (r) {
          var u = I1(a, o);
          r.value = Ko(r.value, o, u), t.value = ss(t.value, u), n.value = ss(n.value, u);
        }
      } else if (n) e && (n.value = n.value.replace(/^\s*/, "")), r && (r.value = r.value.replace(/^\s*/, ""));
      else if (e && r) {
        var c = r.value.match(/^\s*/)[0], d = t.value.match(/^\s*/)[0], p = t.value.match(/\s*$/)[0], m = F1(c, d);
        t.value = Ea(t.value, m);
        var g = I1(Ea(c, m), p);
        t.value = ss(t.value, g), r.value = Ko(r.value, c, g), e.value = jo(e.value, c, c.slice(0, c.length - g.length));
      } else if (r) {
        var _ = r.value.match(/^\s*/)[0], L = t.value.match(/\s*$/)[0], A = R1(L, _);
        t.value = ss(t.value, A);
      } else if (e) {
        var F = e.value.match(/\s*$/)[0], C = t.value.match(/^\s*/)[0], x = R1(F, C);
        t.value = Ea(t.value, x);
      }
    }
    function qo(e) {
      "@babel/helpers - typeof";
      return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, qo(e);
    }
    function Go(e, t, n, r, i) {
      t = t || [], n = n || [], r && (e = r(i, e));
      var a;
      for (a = 0; a < t.length; a += 1) if (t[a] === e) return n[a];
      var s;
      if (Object.prototype.toString.call(e) === "[object Array]") {
        for (t.push(e), s = new Array(e.length), n.push(s), a = 0; a < e.length; a += 1) s[a] = Go(e[a], t, n, r, i);
        return t.pop(), n.pop(), s;
      }
      if (e && e.toJSON && (e = e.toJSON()), qo(e) === "object" && e !== null) {
        t.push(e), s = {}, n.push(s);
        var o = [], l;
        for (l in e) Object.prototype.hasOwnProperty.call(e, l) && o.push(l);
        for (o.sort(), a = 0; a < o.length; a += 1) l = o[a], s[l] = Go(e[l], t, n, r, l);
        t.pop(), n.pop();
      } else s = e;
      return s;
    }
    function ng(e, t, n) {
      return Ca.diff(e, t, n);
    }
    function rg(e) {
      let t = e.indexOf("\r");
      return t !== -1 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
    }
    function Ho(e) {
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
    function x1(e, t) {
      let n;
      switch (t) {
        case `
`:
          n = /\n/gu;
          break;
        case "\r":
          n = /\r/gu;
          break;
        case `\r
`:
          n = /\r\n/gu;
          break;
        default:
          throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
      }
      let r = e.match(n);
      return r ? r.length : 0;
    }
    function ig(e) {
      return ba(!1, e, /\r\n?/gu, `
`);
    }
    function ag(e) {
      if (typeof e == "string") return Dr;
      if (Array.isArray(e)) return xn;
      if (!e) return;
      let { type: t } = e;
      if (ol.has(t)) return t;
    }
    function sg(e) {
      let t = e === null ? "null" : typeof e;
      if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (br(e)) throw new Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
      let r = Ic([...ol].map((i) => `'${i}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }
    function og(e, t, n, r) {
      let i = [e];
      for (; i.length > 0; ) {
        let a = i.pop();
        if (a === ll) {
          n(i.pop());
          continue;
        }
        n && i.push(a, ll);
        let s = br(a);
        if (!s) throw new Kr(a);
        if ((t == null ? void 0 : t(a)) !== !1) switch (s) {
          case xn:
          case En: {
            let o = s === xn ? a : a.parts;
            for (let l = o.length, u = l - 1; u >= 0; --u) i.push(o[u]);
            break;
          }
          case Gt:
            i.push(a.flatContents, a.breakContents);
            break;
          case Ut:
            if (r && a.expandedStates) for (let o = a.expandedStates.length, l = o - 1; l >= 0; --l) i.push(a.expandedStates[l]);
            else i.push(a.contents);
            break;
          case Mn:
          case kn:
          case Pn:
          case _n:
          case Bn:
            i.push(a.contents);
            break;
          case Dr:
          case vr:
          case Un:
          case $n:
          case _t:
          case Zt:
            break;
          default:
            throw new Kr(a);
        }
      }
    }
    function os(e, t) {
      if (typeof e == "string") return t(e);
      let n = /* @__PURE__ */ new Map();
      return r(e);
      function r(a) {
        if (n.has(a)) return n.get(a);
        let s = i(a);
        return n.set(a, s), s;
      }
      function i(a) {
        switch (br(a)) {
          case xn:
            return t(a.map(r));
          case En:
            return t({ ...a, parts: a.parts.map(r) });
          case Gt:
            return t({ ...a, breakContents: r(a.breakContents), flatContents: r(a.flatContents) });
          case Ut: {
            let { expandedStates: s, contents: o } = a;
            return s ? (s = s.map(r), o = s[0]) : o = r(o), t({ ...a, contents: o, expandedStates: s });
          }
          case Mn:
          case kn:
          case Pn:
          case _n:
          case Bn:
            return t({ ...a, contents: r(a.contents) });
          case Dr:
          case vr:
          case Un:
          case $n:
          case _t:
          case Zt:
            return t(a);
          default:
            throw new Kr(a);
        }
      }
    }
    function Wo(e, t, n) {
      let r = n, i = !1;
      function a(s) {
        if (i) return !1;
        let o = t(s);
        o !== void 0 && (i = !0, r = o);
      }
      return Ds(e, a), r;
    }
    function lg(e) {
      if (e.type === Ut && e.break || e.type === _t && e.hard || e.type === Zt) return !0;
    }
    function ug(e) {
      return Wo(e, lg, !1);
    }
    function k1(e) {
      if (e.length > 0) {
        let t = gt(!1, e, -1);
        !t.expandedStates && !t.break && (t.break = "propagated");
      }
      return null;
    }
    function cg(e) {
      let t = /* @__PURE__ */ new Set(), n = [];
      function r(a) {
        if (a.type === Zt && k1(n), a.type === Ut) {
          if (n.push(a), t.has(a)) return !1;
          t.add(a);
        }
      }
      function i(a) {
        a.type === Ut && n.pop().break && k1(n);
      }
      Ds(e, r, i, !0);
    }
    function dg(e) {
      return e.type === _t && !e.hard ? e.soft ? "" : " " : e.type === Gt ? e.flatContents : e;
    }
    function hg(e) {
      return os(e, dg);
    }
    function M1(e) {
      for (e = [...e]; e.length >= 2 && gt(!1, e, -2).type === _t && gt(!1, e, -1).type === Zt; ) e.length -= 2;
      if (e.length > 0) {
        let t = _a(gt(!1, e, -1));
        e[e.length - 1] = t;
      }
      return e;
    }
    function _a(e) {
      switch (br(e)) {
        case kn:
        case Pn:
        case Ut:
        case Bn:
        case _n: {
          let t = _a(e.contents);
          return { ...e, contents: t };
        }
        case Gt:
          return { ...e, breakContents: _a(e.breakContents), flatContents: _a(e.flatContents) };
        case En:
          return { ...e, parts: M1(e.parts) };
        case xn:
          return M1(e);
        case Dr:
          return e.replace(/[\n\r]*$/u, "");
        case Mn:
        case vr:
        case Un:
        case $n:
        case _t:
        case Zt:
          break;
        default:
          throw new Kr(e);
      }
      return e;
    }
    function U1(e) {
      return _a(pg(e));
    }
    function fg(e) {
      switch (br(e)) {
        case En:
          if (e.parts.every((t) => t === "")) return "";
          break;
        case Ut:
          if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
          if (e.contents.type === Ut && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
          break;
        case Mn:
        case kn:
        case Pn:
        case Bn:
          if (!e.contents) return "";
          break;
        case Gt:
          if (!e.flatContents && !e.breakContents) return "";
          break;
        case xn: {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [r, ...i] = Array.isArray(n) ? n : [n];
            typeof r == "string" && typeof gt(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...i);
          }
          return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
        }
        case Dr:
        case vr:
        case Un:
        case $n:
        case _t:
        case _n:
        case Zt:
          break;
        default:
          throw new Kr(e);
      }
      return e;
    }
    function pg(e) {
      return os(e, (t) => fg(t));
    }
    function mg(e, t = hl) {
      return os(e, (n) => typeof n == "string" ? B1(t, n.split(`
`)) : n);
    }
    function gg(e) {
      if (e.type === _t) return !0;
    }
    function Eg(e) {
      return Wo(e, gg, !1);
    }
    function ls(e, t) {
      return e.type === _n ? { ...e, contents: t(e.contents) } : t(e);
    }
    function us(e) {
      return Dn(e), { type: kn, contents: e };
    }
    function Ci(e, t) {
      return Dn(t), { type: Mn, contents: t, n: e };
    }
    function P1(e, t = {}) {
      return Dn(e), ul(t.expandedStates, !0), { type: Ut, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
    }
    function _g(e) {
      return Ci(Number.NEGATIVE_INFINITY, e);
    }
    function Dg(e) {
      return Ci({ type: "root" }, e);
    }
    function vg(e) {
      return Ci(-1, e);
    }
    function bg(e, t) {
      return P1(e[0], { ...t, expandedStates: e });
    }
    function yg(e) {
      return Oc(e), { type: En, parts: e };
    }
    function Ng(e, t = "", n = {}) {
      return Dn(e), t !== "" && Dn(t), { type: Gt, breakContents: e, flatContents: t, groupId: n.groupId };
    }
    function Cg(e, t) {
      return Dn(e), { type: Pn, contents: e, groupId: t.groupId, negate: t.negate };
    }
    function Yo(e) {
      return Dn(e), { type: Bn, contents: e };
    }
    function B1(e, t) {
      Dn(e), ul(t);
      let n = [];
      for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
      return n;
    }
    function $1(e, t, n) {
      Dn(e);
      let r = e;
      if (t > 0) {
        for (let i = 0; i < Math.floor(t / n); ++i) r = us(r);
        r = Ci(t % n, r), r = Ci(Number.NEGATIVE_INFINITY, r);
      }
      return r;
    }
    function Tg(e, t) {
      return Dn(t), e ? { type: _n, label: e, contents: t } : t;
    }
    function Xn(e) {
      var t;
      if (!e) return "";
      if (Array.isArray(e)) {
        let n = [];
        for (let r of e) if (Array.isArray(r)) n.push(...Xn(r));
        else {
          let i = Xn(r);
          i !== "" && n.push(i);
        }
        return n;
      }
      return e.type === Gt ? { ...e, breakContents: Xn(e.breakContents), flatContents: Xn(e.flatContents) } : e.type === Ut ? { ...e, contents: Xn(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(Xn) } : e.type === En ? { type: "fill", parts: e.parts.map(Xn) } : e.contents ? { ...e, contents: Xn(e.contents) } : e;
    }
    function wg(e) {
      let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
      return r(Xn(e));
      function r(a, s, o) {
        var l, u;
        if (typeof a == "string") return JSON.stringify(a);
        if (Array.isArray(a)) {
          let c = a.map(r).filter(Boolean);
          return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
        }
        if (a.type === _t) {
          let c = ((l = o == null ? void 0 : o[s + 1]) == null ? void 0 : l.type) === Zt;
          return a.literal ? c ? "literalline" : "literallineWithoutBreakParent" : a.hard ? c ? "hardline" : "hardlineWithoutBreakParent" : a.soft ? "softline" : "line";
        }
        if (a.type === Zt) return ((u = o == null ? void 0 : o[s - 1]) == null ? void 0 : u.type) === _t && o[s - 1].hard ? void 0 : "breakParent";
        if (a.type === Un) return "trim";
        if (a.type === kn) return "indent(" + r(a.contents) + ")";
        if (a.type === Mn) return a.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(a.contents) + ")" : a.n < 0 ? "dedent(" + r(a.contents) + ")" : a.n.type === "root" ? "markAsRoot(" + r(a.contents) + ")" : "align(" + JSON.stringify(a.n) + ", " + r(a.contents) + ")";
        if (a.type === Gt) return "ifBreak(" + r(a.breakContents) + (a.flatContents ? ", " + r(a.flatContents) : "") + (a.groupId ? (a.flatContents ? "" : ', ""') + `, { groupId: ${i(a.groupId)} }` : "") + ")";
        if (a.type === Pn) {
          let c = [];
          a.negate && c.push("negate: true"), a.groupId && c.push(`groupId: ${i(a.groupId)}`);
          let d = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return `indentIfBreak(${r(a.contents)}${d})`;
        }
        if (a.type === Ut) {
          let c = [];
          a.break && a.break !== "propagated" && c.push("shouldBreak: true"), a.id && c.push(`id: ${i(a.id)}`);
          let d = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return a.expandedStates ? `conditionalGroup([${a.expandedStates.map((p) => r(p)).join(",")}]${d})` : `group(${r(a.contents)}${d})`;
        }
        if (a.type === En) return `fill([${a.parts.map((c) => r(c)).join(", ")}])`;
        if (a.type === Bn) return "lineSuffix(" + r(a.contents) + ")";
        if (a.type === $n) return "lineSuffixBoundary";
        if (a.type === _n) return `label(${JSON.stringify(a.label)}, ${r(a.contents)})`;
        throw new Error("Unknown doc type " + a.type);
      }
      function i(a) {
        if (typeof a != "symbol") return JSON.stringify(String(a));
        if (a in t) return t[a];
        let s = a.description || "symbol";
        for (let o = 0; ; o++) {
          let l = s + (o > 0 ? ` #${o}` : "");
          if (!n.has(l)) return n.add(l), t[a] = `Symbol.for(${JSON.stringify(l)})`;
        }
      }
    }
    function Ag(e) {
      return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
    }
    function Sg(e) {
      return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
    }
    function Lg(e) {
      if (!e) return 0;
      if (!Bc.test(e)) return e.length;
      e = e.replace(Uc(), "  ");
      let t = 0;
      for (let n of e) {
        let r = n.codePointAt(0);
        r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += Pc(r) ? 1 : 2);
      }
      return t;
    }
    function V1() {
      return { value: "", length: 0, queue: [] };
    }
    function Fg(e, t) {
      return zo(e, { type: "indent" }, t);
    }
    function Ig(e, t, n) {
      return t === Number.NEGATIVE_INFINITY ? e.root || V1() : t < 0 ? zo(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : zo(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
    }
    function zo(e, t, n) {
      let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], i = "", a = 0, s = 0, o = 0;
      for (let g of r) switch (g.type) {
        case "indent":
          c(), n.useTabs ? l(1) : u(n.tabWidth);
          break;
        case "stringAlign":
          c(), i += g.n, a += g.n.length;
          break;
        case "numberAlign":
          s += 1, o += g.n;
          break;
        default:
          throw new Error(`Unexpected type '${g.type}'`);
      }
      return p(), { ...e, value: i, length: a, queue: r };
      function l(g) {
        i += "	".repeat(g), a += n.tabWidth * g;
      }
      function u(g) {
        i += " ".repeat(g), a += g;
      }
      function c() {
        n.useTabs ? d() : p();
      }
      function d() {
        s > 0 && l(s), m();
      }
      function p() {
        o > 0 && u(o), m();
      }
      function m() {
        s = 0, o = 0;
      }
    }
    function Xo(e) {
      let t = 0, n = 0, r = e.length;
      e: for (; r--; ) {
        let i = e[r];
        if (i === jr) {
          n++;
          continue;
        }
        for (let a = i.length - 1; a >= 0; a--) {
          let s = i[a];
          if (s === " " || s === "	") t++;
          else {
            e[r] = i.slice(0, a + 1);
            break e;
          }
        }
      }
      if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(jr);
      return t;
    }
    function cs(e, t, n, r, i, a) {
      if (n === Number.POSITIVE_INFINITY) return !0;
      let s = t.length, o = [e], l = [];
      for (; n >= 0; ) {
        if (o.length === 0) {
          if (s === 0) return !0;
          o.push(t[--s]);
          continue;
        }
        let { mode: u, doc: c } = o.pop(), d = br(c);
        switch (d) {
          case Dr:
            l.push(c), n -= ys(c);
            break;
          case xn:
          case En: {
            let p = d === xn ? c : c.parts, m = c[Ns] ?? 0;
            for (let g = p.length - 1; g >= m; g--) o.push({ mode: u, doc: p[g] });
            break;
          }
          case kn:
          case Mn:
          case Pn:
          case _n:
            o.push({ mode: u, doc: c.contents });
            break;
          case Un:
            n += Xo(l);
            break;
          case Ut: {
            if (a && c.break) return !1;
            let p = c.break ? Pt : u, m = c.expandedStates && p === Pt ? gt(!1, c.expandedStates, -1) : c.contents;
            o.push({ mode: p, doc: m });
            break;
          }
          case Gt: {
            let p = (c.groupId ? i[c.groupId] || vn : u) === Pt ? c.breakContents : c.flatContents;
            p && o.push({ mode: u, doc: p });
            break;
          }
          case _t:
            if (u === Pt || c.hard) return !0;
            c.soft || (l.push(" "), n--);
            break;
          case Bn:
            r = !0;
            break;
          case $n:
            if (r) return !1;
            break;
        }
      }
      return !1;
    }
    function ds(e, t) {
      let n = {}, r = t.printWidth, i = Ho(t.endOfLine), a = 0, s = [{ ind: V1(), mode: Pt, doc: e }], o = [], l = !1, u = [], c = 0;
      for (cg(e); s.length > 0; ) {
        let { ind: p, mode: m, doc: g } = s.pop();
        switch (br(g)) {
          case Dr: {
            let _ = i !== `
` ? ba(!1, g, `
`, i) : g;
            o.push(_), s.length > 0 && (a += ys(_));
            break;
          }
          case xn:
            for (let _ = g.length - 1; _ >= 0; _--) s.push({ ind: p, mode: m, doc: g[_] });
            break;
          case vr:
            if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
            o.push(jr), c++;
            break;
          case kn:
            s.push({ ind: Fg(p, t), mode: m, doc: g.contents });
            break;
          case Mn:
            s.push({ ind: Ig(p, g.n, t), mode: m, doc: g.contents });
            break;
          case Un:
            a -= Xo(o);
            break;
          case Ut:
            switch (m) {
              case vn:
                if (!l) {
                  s.push({ ind: p, mode: g.break ? Pt : vn, doc: g.contents });
                  break;
                }
              case Pt: {
                l = !1;
                let _ = { ind: p, mode: vn, doc: g.contents }, L = r - a, A = u.length > 0;
                if (!g.break && cs(_, s, L, A, n)) s.push(_);
                else if (g.expandedStates) {
                  let F = gt(!1, g.expandedStates, -1);
                  if (g.break) {
                    s.push({ ind: p, mode: Pt, doc: F });
                    break;
                  } else for (let C = 1; C < g.expandedStates.length + 1; C++) if (C >= g.expandedStates.length) {
                    s.push({ ind: p, mode: Pt, doc: F });
                    break;
                  } else {
                    let x = g.expandedStates[C], U = { ind: p, mode: vn, doc: x };
                    if (cs(U, s, L, A, n)) {
                      s.push(U);
                      break;
                    }
                  }
                } else s.push({ ind: p, mode: Pt, doc: g.contents });
                break;
              }
            }
            g.id && (n[g.id] = gt(!1, s, -1).mode);
            break;
          case En: {
            let _ = r - a, L = g[Ns] ?? 0, { parts: A } = g, F = A.length - L;
            if (F === 0) break;
            let C = A[L + 0], x = A[L + 1], U = { ind: p, mode: vn, doc: C }, q = { ind: p, mode: Pt, doc: C }, I = cs(U, [], _, u.length > 0, n, !0);
            if (F === 1) {
              I ? s.push(U) : s.push(q);
              break;
            }
            let B = { ind: p, mode: vn, doc: x }, S = { ind: p, mode: Pt, doc: x };
            if (F === 2) {
              I ? s.push(B, U) : s.push(S, q);
              break;
            }
            let K = A[L + 2], V = { ind: p, mode: m, doc: { ...g, [Ns]: L + 2 } };
            cs({ ind: p, mode: vn, doc: [C, x, K] }, [], _, u.length > 0, n, !0) ? s.push(V, B, U) : I ? s.push(V, S, U) : s.push(V, S, q);
            break;
          }
          case Gt:
          case Pn: {
            let _ = g.groupId ? n[g.groupId] : m;
            if (_ === Pt) {
              let L = g.type === Gt ? g.breakContents : g.negate ? g.contents : us(g.contents);
              L && s.push({ ind: p, mode: m, doc: L });
            }
            if (_ === vn) {
              let L = g.type === Gt ? g.flatContents : g.negate ? us(g.contents) : g.contents;
              L && s.push({ ind: p, mode: m, doc: L });
            }
            break;
          }
          case Bn:
            u.push({ ind: p, mode: m, doc: g.contents });
            break;
          case $n:
            u.length > 0 && s.push({ ind: p, mode: m, doc: bs });
            break;
          case _t:
            switch (m) {
              case vn:
                if (g.hard) l = !0;
                else {
                  g.soft || (o.push(" "), a += 1);
                  break;
                }
              case Pt:
                if (u.length > 0) {
                  s.push({ ind: p, mode: m, doc: g }, ...u.reverse()), u.length = 0;
                  break;
                }
                g.literal ? p.root ? (o.push(i, p.root.value), a = p.root.length) : (o.push(i), a = 0) : (a -= Xo(o), o.push(i + p.value), a = p.length);
                break;
            }
            break;
          case _n:
            s.push({ ind: p, mode: m, doc: g.contents });
            break;
          case Zt:
            break;
          default:
            throw new Kr(g);
        }
        s.length === 0 && u.length > 0 && (s.push(...u.reverse()), u.length = 0);
      }
      let d = o.indexOf(jr);
      if (d !== -1) {
        let p = o.indexOf(jr, d + 1);
        if (p === -1) return { formatted: o.filter((L) => L !== jr).join("") };
        let m = o.slice(0, d).join(""), g = o.slice(d + 1, p).join(""), _ = o.slice(p + 1).join("");
        return { formatted: m + g + _, cursorNodeStart: m.length, cursorNodeText: g };
      }
      return { formatted: o.join("") };
    }
    function Rg(e, t, n = 0) {
      let r = 0;
      for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
      return r;
    }
    function Og(e) {
      return e !== null && typeof e == "object";
    }
    function* hs(e, t) {
      let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (a) => Kc(a) && r(a);
      for (let a of n(e)) {
        let s = e[a];
        if (Array.isArray(s)) for (let o of s) i(o) && (yield o);
        else i(s) && (yield s);
      }
    }
    function* xg(e, t) {
      let n = [e];
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (let a of hs(i, t)) yield a, n.push(a);
      }
    }
    function kg(e, t) {
      return hs(e, t).next().done;
    }
    function Da(e) {
      return (t, n, r) => {
        let i = !!(r != null && r.backwards);
        if (n === !1) return !1;
        let { length: a } = t, s = n;
        for (; s >= 0 && s < a; ) {
          let o = t.charAt(s);
          if (e instanceof RegExp) {
            if (!e.test(o)) return s;
          } else if (!e.includes(o)) return s;
          i ? s-- : s++;
        }
        return s === -1 || s === a ? s : !1;
      };
    }
    function Mg(e, t, n) {
      let r = !!(n != null && n.backwards);
      if (t === !1) return !1;
      let i = e.charAt(t);
      if (r) {
        if (e.charAt(t - 1) === "\r" && i === `
`) return t - 2;
        if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029") return t - 1;
      } else {
        if (i === "\r" && e.charAt(t + 1) === `
`) return t + 2;
        if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029") return t + 1;
      }
      return t;
    }
    function Ug(e, t, n = {}) {
      let r = Jn(e, n.backwards ? t - 1 : t, n), i = Cr(e, r, n);
      return r !== i;
    }
    function Pg(e) {
      return Array.isArray(e) && e.length > 0;
    }
    function Bg(e) {
      return e ? (t) => e(t, El) : Gc;
    }
    function $g(e) {
      let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
      return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
    }
    function Jo(e, t) {
      (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = $g(e);
    }
    function Ti(e, t) {
      t.leading = !0, t.trailing = !1, Jo(e, t);
    }
    function fs(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), Jo(e, t);
    }
    function wi(e, t) {
      t.leading = !1, t.trailing = !0, Jo(e, t);
    }
    function Qo(e, t) {
      if (As.has(e)) return As.get(e);
      let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i }, locStart: a, locEnd: s } = t;
      if (!r) return [];
      let o = ((n == null ? void 0 : n(e, t)) ?? [...hs(e, { getVisitorKeys: wa(i) })]).flatMap((l) => r(l) ? [l] : Qo(l, t));
      return o.sort((l, u) => a(l) - a(u) || s(l) - s(u)), As.set(e, o), o;
    }
    function K1(e, t, n, r) {
      let { locStart: i, locEnd: a } = n, s = i(t), o = a(t), l = Qo(e, n), u, c, d = 0, p = l.length;
      for (; d < p; ) {
        let m = d + p >> 1, g = l[m], _ = i(g), L = a(g);
        if (_ <= s && o <= L) return K1(g, t, n, g);
        if (L <= s) {
          u = g, d = m + 1;
          continue;
        }
        if (o <= _) {
          c = g, p = m;
          continue;
        }
        throw new Error("Comment location overlaps with node location");
      }
      if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
        let { quasis: m } = r, g = Zo(m, t, n);
        u && Zo(m, u, n) !== g && (u = null), c && Zo(m, c, n) !== g && (c = null);
      }
      return { enclosingNode: r, precedingNode: u, followingNode: c };
    }
    function Vg(e, t) {
      let { comments: n } = e;
      if (delete e.comments, !qc(n) || !t.printer.canAttachComment) return;
      let r = [], { locStart: i, locEnd: a, printer: { experimentalFeatures: { avoidAstMutation: s = !1 } = {}, handleComments: o = {} }, originalText: l } = t, { ownLine: u = Ss, endOfLine: c = Ss, remaining: d = Ss } = o, p = n.map((m, g) => ({ ...K1(e, m, t), comment: m, text: l, options: t, ast: e, isLastComment: n.length - 1 === g }));
      for (let [m, g] of p.entries()) {
        let { comment: _, precedingNode: L, enclosingNode: A, followingNode: F, text: C, options: x, ast: U, isLastComment: q } = g;
        if (x.parser === "json" || x.parser === "json5" || x.parser === "jsonc" || x.parser === "__js_expression" || x.parser === "__ts_expression" || x.parser === "__vue_expression" || x.parser === "__vue_ts_expression") {
          if (i(_) - i(U) <= 0) {
            Ti(U, _);
            continue;
          }
          if (a(_) - a(U) >= 0) {
            wi(U, _);
            continue;
          }
        }
        let I;
        if (s ? I = [g] : (_.enclosingNode = A, _.precedingNode = L, _.followingNode = F, I = [_, C, x, U, q]), Kg(C, x, p, m)) _.placement = "ownLine", u(...I) || (F ? Ti(F, _) : L ? wi(L, _) : fs(A || U, _));
        else if (jg(C, x, p, m)) _.placement = "endOfLine", c(...I) || (L ? wi(L, _) : F ? Ti(F, _) : fs(A || U, _));
        else if (_.placement = "remaining", !d(...I)) if (L && F) {
          let B = r.length;
          B > 0 && r[B - 1].followingNode !== F && j1(r, x), r.push(g);
        } else L ? wi(L, _) : F ? Ti(F, _) : fs(A || U, _);
      }
      if (j1(r, t), !s) for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
    }
    function Kg(e, t, n, r) {
      let { comment: i, precedingNode: a } = n[r], { locStart: s, locEnd: o } = t, l = s(i);
      if (a) for (let u = r - 1; u >= 0; u--) {
        let { comment: c, precedingNode: d } = n[u];
        if (d !== a || !_l(e.slice(o(c), l))) break;
        l = s(c);
      }
      return Qn(e, l, { backwards: !0 });
    }
    function jg(e, t, n, r) {
      let { comment: i, followingNode: a } = n[r], { locStart: s, locEnd: o } = t, l = o(i);
      if (a) for (let u = r + 1; u < n.length; u++) {
        let { comment: c, followingNode: d } = n[u];
        if (d !== a || !_l(e.slice(l, s(c)))) break;
        l = o(c);
      }
      return Qn(e, l);
    }
    function j1(e, t) {
      var n, r;
      let i = e.length;
      if (i === 0) return;
      let { precedingNode: a, followingNode: s } = e[0], o = t.locStart(s), l;
      for (l = i; l > 0; --l) {
        let { comment: u, precedingNode: c, followingNode: d } = e[l - 1];
        ws.strictEqual(c, a), ws.strictEqual(d, s);
        let p = t.originalText.slice(t.locEnd(u), o);
        if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, p, t)) ?? /^[\s(]*$/u.test(p)) o = t.locStart(u);
        else break;
      }
      for (let [u, { comment: c }] of e.entries()) u < l ? wi(a, c) : Ti(s, c);
      for (let u of [a, s]) u.comments && u.comments.length > 1 && u.comments.sort((c, d) => t.locStart(c) - t.locStart(d));
      e.length = 0;
    }
    function Zo(e, t, n) {
      let r = n.locStart(t) - 1;
      for (let i = 1; i < e.length; ++i) if (r < n.locStart(e[i])) return i - 1;
      return 0;
    }
    function qg(e, t) {
      let n = t - 1;
      n = Jn(e, n, { backwards: !0 }), n = Cr(e, n, { backwards: !0 }), n = Jn(e, n, { backwards: !0 });
      let r = Cr(e, n, { backwards: !0 });
      return n !== r;
    }
    function q1(e, t) {
      let n = e.node;
      return n.printed = !0, t.printer.printComment(e, t);
    }
    function Gg(e, t) {
      var n;
      let r = e.node, i = [q1(e, t)], { printer: a, originalText: s, locStart: o, locEnd: l } = t;
      if ((n = a.isBlockComment) != null && n.call(a, r)) {
        let c = Qn(s, l(r)) ? Qn(s, o(r), { backwards: !0 }) ? yr : dl : " ";
        i.push(c);
      } else i.push(yr);
      let u = Cr(s, Jn(s, l(r)));
      return u !== !1 && Qn(s, u) && i.push(yr), i;
    }
    function Hg(e, t, n) {
      var r;
      let i = e.node, a = q1(e, t), { printer: s, originalText: o, locStart: l } = t, u = (r = s.isBlockComment) == null ? void 0 : r.call(s, i);
      if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || Qn(o, l(i), { backwards: !0 })) {
        let c = Ls(o, l(i));
        return { doc: Yo([yr, c ? yr : "", a]), isBlock: u, hasLineSuffix: !0 };
      }
      return !u || n != null && n.hasLineSuffix ? { doc: [Yo([" ", a]), Ta], isBlock: u, hasLineSuffix: !0 } : { doc: [" ", a], isBlock: u, hasLineSuffix: !1 };
    }
    function Wg(e, t) {
      let n = e.node;
      if (!n) return {};
      let r = t[Symbol.for("printedComments")];
      if ((n.comments || []).filter((o) => !r.has(o)).length === 0) return { leading: "", trailing: "" };
      let i = [], a = [], s;
      return e.each(() => {
        let o = e.node;
        if (r != null && r.has(o)) return;
        let { leading: l, trailing: u } = o;
        l ? i.push(Gg(e, t)) : u && (s = Hg(e, t, s), a.push(s.doc));
      }, "comments"), { leading: i, trailing: a };
    }
    function Yg(e, t, n) {
      let { leading: r, trailing: i } = Wg(e, n);
      return !r && !i ? t : ls(t, (a) => [r, a, i]);
    }
    function zg(e) {
      let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
      for (let r of t) {
        if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
        delete r.printed;
      }
    }
    function Xg(e) {
      return () => {
      };
    }
    function G1({ plugins: e = [], showDeprecated: t = !1 } = {}) {
      let n = e.flatMap((i) => i.languages ?? []), r = [];
      for (let i of Qg(Object.assign({}, ...e.map(({ options: a }) => a), Wc))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((a) => !a.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...Jg(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter((a) => {
        var s;
        return ((s = a.defaultOptions) == null ? void 0 : s[i.name]) !== void 0;
      }).map((a) => [a.name, a.defaultOptions[i.name]])), r.push(i));
      return { languages: n, options: r };
    }
    function* Jg(e, t, n) {
      let r = new Set(e.map((i) => i.value));
      for (let i of t) if (i.parsers) {
        for (let a of i.parsers) if (!r.has(a)) {
          r.add(a);
          let s = n.find((l) => l.parsers && Object.prototype.hasOwnProperty.call(l.parsers, a)), o = i.name;
          s != null && s.name && (o += ` (plugin: ${s.name})`), yield { value: a, description: o };
        }
      }
    }
    function Qg(e) {
      let t = [];
      for (let [n, r] of Object.entries(e)) {
        let i = { name: n, ...r };
        Array.isArray(i.default) && (i.default = gt(!1, i.default, -1).value), t.push(i);
      }
      return t;
    }
    function H1(e, t) {
      if (!t) return;
      let n = Yc(t).toLowerCase();
      return e.find(({ filenames: r }) => r == null ? void 0 : r.some((i) => i.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((i) => n.endsWith(i)));
    }
    function Zg(e, t) {
      if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
    }
    function e4(e, t) {
      let n = e.plugins.flatMap((i) => i.languages ?? []), r = Zg(n, t.language) ?? H1(n, t.physicalFile) ?? H1(n, t.file) ?? (t.physicalFile, void 0);
      return r == null ? void 0 : r.parsers[0];
    }
    function W1(e, t, n, r) {
      return [`Invalid ${Hr.default.red(r.key(e))} value.`, `Expected ${Hr.default.blue(n)},`, `but received ${t === yl ? Hr.default.gray("nothing") : Hr.default.red(r.value(t))}.`].join(" ");
    }
    function Y1({ text: e, list: t }, n) {
      let r = [];
      return e && r.push(`- ${Hr.default.blue(e)}`), t && r.push([`- ${Hr.default.blue(t.title)}:`].concat(t.values.map((i) => Y1(i, n - Nl.length).replace(/^|\n/g, `$&${Nl}`))).join(`
`)), z1(r, n);
    }
    function z1(e, t) {
      if (e.length === 1) return e[0];
      let [n, r] = e, [i, a] = e.map((s) => s.split(`
`, 1)[0].length);
      return i > t && i > a ? r : n;
    }
    function t4(e, t) {
      if (e === t) return 0;
      let n = e;
      e.length > t.length && (e = t, t = n);
      let r = e.length, i = t.length;
      for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--;
      let a = 0;
      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
      if (r -= a, i -= a, r === 0) return i;
      let s, o, l, u, c = 0, d = 0;
      for (; c < r; ) Tl[c] = e.charCodeAt(a + c), Fs[c] = ++c;
      for (; d < i; ) for (s = t.charCodeAt(a + d), l = d++, o = d, c = 0; c < r; c++) u = s === Tl[c] ? l : l + 1, l = Fs[c], o = Fs[c] = l > o ? u > o ? o + 1 : u : u > l ? l + 1 : u;
      return o;
    }
    function n4(e, t) {
      let n = new e(t), r = Object.create(n);
      for (let i of Qc) i in t && (r[i] = r4(t[i], n, Zn.prototype[i].length));
      return r;
    }
    function r4(e, t, n) {
      return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
    }
    function X1({ from: e, to: t }) {
      return { from: [e], to: t };
    }
    function i4(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) {
        let i = r[t];
        if (n[i]) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n[i] = r;
      }
      return n;
    }
    function a4(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = r[t];
        if (n.has(i)) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n.set(i, r);
      }
      return n;
    }
    function s4() {
      let e = /* @__PURE__ */ Object.create(null);
      return (t) => {
        let n = JSON.stringify(t);
        return e[n] ? !0 : (e[n] = !0, !1);
      };
    }
    function o4(e, t) {
      let n = [], r = [];
      for (let i of e) t(i) ? n.push(i) : r.push(i);
      return [n, r];
    }
    function l4(e) {
      return e === Math.floor(e);
    }
    function u4(e, t) {
      if (e === t) return 0;
      let n = typeof e, r = typeof t, i = ["undefined", "object", "boolean", "number", "string"];
      return n !== r ? i.indexOf(n) - i.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
    }
    function c4(e) {
      return (...t) => {
        let n = e(...t);
        return typeof n == "string" ? new Error(n) : n;
      };
    }
    function J1(e) {
      return e === void 0 ? {} : e;
    }
    function Q1(e) {
      if (typeof e == "string") return { text: e };
      let { text: t, list: n } = e;
      return d4((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(Q1) } } : { text: t };
    }
    function Z1(e, t) {
      return e === !0 ? !0 : e === !1 ? { value: t } : e;
    }
    function ec(e, t, n = !1) {
      return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
    }
    function tc(e, t) {
      return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
    }
    function el(e, t) {
      return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => tc(n, t)) : [tc(e, t)];
    }
    function nc(e, t) {
      let n = el(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
      return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
    }
    function d4(e, t) {
      if (!e) throw new Error(t);
    }
    function h4(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: a, descriptor: s } = {}) {
      if (r) {
        if (!a) throw new Error("'FlagSchema' option is required.");
        if (!s) throw new Error("'descriptor' option is required.");
      } else s = Gr;
      let o = i ? Array.isArray(i) ? (p, m) => i.includes(p) ? { [p]: m } : void 0 : (p, m) => ({ [p]: m }) : (p, m, g) => {
        let { _, ...L } = g.schemas;
        return wl(p, m, { ...g, schemas: L });
      }, l = f4(t, { isCLI: r, FlagSchema: a }), u = new cd(l, { logger: n, unknown: o, descriptor: s }), c = n !== !1;
      c && Sl && (u._hasDeprecationWarned = Sl);
      let d = u.normalize(e);
      return c && (Sl = u._hasDeprecationWarned), d;
    }
    function f4(e, { isCLI: t, FlagSchema: n }) {
      let r = [];
      t && r.push(ed.create({ name: "_" }));
      for (let i of e) r.push(p4(i, { isCLI: t, optionInfos: e, FlagSchema: n })), i.alias && t && r.push(Zc.create({ name: i.alias, sourceName: i.name }));
      return r;
    }
    function p4(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
      let { name: i } = e, a = { name: i }, s, o = {};
      switch (e.type) {
        case "int":
          s = ad, t && (a.preprocess = Number);
          break;
        case "string":
          s = Al;
          break;
        case "choice":
          s = rd, a.choices = e.choices.map((l) => l != null && l.redirect ? { ...l, redirect: { to: { key: e.name, value: l.redirect } } } : l);
          break;
        case "boolean":
          s = nd;
          break;
        case "flag":
          s = r, a.flags = n.flatMap((l) => [l.alias, l.description && l.name, l.oppositeDescription && `no-${l.name}`].filter(Boolean));
          break;
        case "path":
          s = Al;
          break;
        default:
          throw new Error(`Unexpected type ${e.type}`);
      }
      if (e.exception ? a.validate = (l, u, c) => e.exception(l) || u.validate(l, c) : a.validate = (l, u, c) => l === void 0 || u.validate(l, c), e.redirect && (o.redirect = (l) => l ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (o.deprecated = !0), t && !e.array) {
        let l = a.preprocess || ((u) => u);
        a.preprocess = (u, c, d) => c.preprocess(l(Array.isArray(u) ? gt(!1, u, -1) : u), d);
      }
      return e.array ? td.create({ ...t ? { preprocess: (l) => Array.isArray(l) ? l : [l] } : {}, ...o, valueSchema: s.create(a) }) : s.create({ ...a, ...o });
    }
    function rc(e, t) {
      if (!t) throw new Error("parserName is required.");
      let n = Ll(!1, e, (i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, t));
      if (n) return n;
      let r = `Couldn't resolve parser "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new Dl(r);
    }
    function m4(e, t) {
      if (!t) throw new Error("astFormat is required.");
      let n = Ll(!1, e, (i) => i.printers && Object.prototype.hasOwnProperty.call(i.printers, t));
      if (n) return n;
      let r = `Couldn't find plugin for AST format "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new Dl(r);
    }
    function ic({ plugins: e, parser: t }) {
      let n = rc(e, t);
      return ac(n, t);
    }
    function ac(e, t) {
      let n = e.parsers[t];
      return typeof n == "function" ? n() : n;
    }
    function g4(e, t) {
      let n = e.printers[t];
      return typeof n == "function" ? n() : n;
    }
    async function E4(e, t = {}) {
      var n;
      let r = { ...e };
      if (!r.parser) if (r.filepath) {
        if (r.parser = zc(r, { physicalFile: r.filepath }), !r.parser) throw new vl(`No parser could be inferred for file "${r.filepath}".`);
      } else throw new vl("No parser and no file path given, couldn't infer a parser.");
      let i = G1({ plugins: e.plugins, showDeprecated: !0 }).options, a = { ...Fl, ...Object.fromEntries(i.filter((p) => p.default !== void 0).map((p) => [p.name, p.default])) }, s = rc(r.plugins, r.parser), o = await ac(s, r.parser);
      r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
      let l = (n = s.printers) != null && n[o.astFormat] ? s : m4(r.plugins, o.astFormat), u = await g4(l, o.astFormat);
      r.printer = u;
      let c = l.defaultOptions ? Object.fromEntries(Object.entries(l.defaultOptions).filter(([, p]) => p !== void 0)) : {}, d = { ...a, ...c };
      for (let [p, m] of Object.entries(d)) (r[p] === null || r[p] === void 0) && (r[p] = m);
      return r.parser === "json" && (r.trailingComma = "none"), dd(r, i, { passThrough: Object.keys(Fl), ...t });
    }
    async function _4(e, t) {
      let n = await ic(t), r = n.preprocess ? n.preprocess(e, t) : e;
      t.originalText = r;
      let i;
      try {
        i = await n.parse(r, t, t);
      } catch (a) {
        D4(a, e);
      }
      return { text: r, ast: i };
    }
    function D4(e, t) {
      let { loc: n } = e;
      if (n) {
        let r = (0, fd.codeFrameColumns)(t, n, { highlightCode: !0 });
        throw e.message += `
` + r, e.codeFrame = r, e;
      }
      throw e;
    }
    async function v4(e, t, n, r, i) {
      let { embeddedLanguageFormatting: a, printer: { embed: s, hasPrettierIgnore: o = () => !1, getVisitorKeys: l } } = n;
      if (!s || a !== "auto") return;
      if (s.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
      let u = wa(s.getVisitorKeys ?? l), c = [];
      m();
      let d = e.stack;
      for (let { print: g, node: _, pathStack: L } of c) try {
        e.stack = L;
        let A = await g(p, t, e, n);
        A && i.set(_, A);
      } catch (A) {
        if (globalThis.PRETTIER_DEBUG) throw A;
      }
      e.stack = d;
      function p(g, _) {
        return b4(g, _, n, r);
      }
      function m() {
        let { node: g } = e;
        if (g === null || typeof g != "object" || o(e)) return;
        for (let L of u(g)) Array.isArray(g[L]) ? e.each(m, L) : e.call(m, L);
        let _ = s(e, n);
        if (_) {
          if (typeof _ == "function") {
            c.push({ print: _, node: g, pathStack: [...e.stack] });
            return;
          }
          i.set(g, _);
        }
      }
    }
    async function b4(e, t, n, r) {
      let i = await Wr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: a } = await Li(e, i), s = await r(a, i);
      return U1(s);
    }
    function y4(e, t) {
      let { originalText: n, [Symbol.for("comments")]: r, locStart: i, locEnd: a, [Symbol.for("printedComments")]: s } = t, { node: o } = e, l = i(o), u = a(o);
      for (let c of r) i(c) >= l && a(c) <= u && s.add(c);
      return n.slice(l, u);
    }
    async function ps(e, t) {
      ({ ast: e } = await oc(e, t));
      let n = /* @__PURE__ */ new Map(), r = new Vc(e), i = Hc(t), a = /* @__PURE__ */ new Map();
      await v4(r, o, t, ps, a);
      let s = await sc(r, t, o, void 0, a);
      if (zg(t), t.nodeAfterCursor && !t.nodeBeforeCursor) return [Nr, s];
      if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [s, Nr];
      return s;
      function o(u, c) {
        return u === void 0 || u === r ? l(c) : Array.isArray(u) ? r.call(() => l(c), ...u) : r.call(() => l(c), u);
      }
      function l(u) {
        i(r);
        let c = r.node;
        if (c == null) return "";
        let d = c && typeof c == "object" && u === void 0;
        if (d && n.has(c)) return n.get(c);
        let p = sc(r, t, o, u, a);
        return d && n.set(c, p), p;
      }
    }
    function sc(e, t, n, r, i) {
      var a;
      let { node: s } = e, { printer: o } = t, l;
      switch ((a = o.hasPrettierIgnore) != null && a.call(o, e) ? l = pd(e, t) : i.has(s) ? l = i.get(s) : l = o.print(e, t, n, r), s) {
        case t.cursorNode:
          l = ls(l, (u) => [Nr, u, Nr]);
          break;
        case t.nodeBeforeCursor:
          l = ls(l, (u) => [u, Nr]);
          break;
        case t.nodeAfterCursor:
          l = ls(l, (u) => [Nr, u]);
          break;
      }
      return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) && (l = Yg(e, l, t)), l;
    }
    async function oc(e, t) {
      let n = e.comments ?? [];
      t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Vg(e, t);
      let { printer: { preprocess: r } } = t;
      return e = r ? await r(e, t) : e, { ast: e, comments: n };
    }
    function N4(e, t) {
      let { cursorOffset: n, locStart: r, locEnd: i } = t, a = wa(t.printer.getVisitorKeys), s = (m) => r(m) <= n && i(m) >= n, o = e, l = [e];
      for (let m of xg(e, { getVisitorKeys: a, filter: s })) l.push(m), o = m;
      if (kg(o, { getVisitorKeys: a })) return { cursorNode: o };
      let u, c, d = -1, p = Number.POSITIVE_INFINITY;
      for (; l.length > 0 && (u === void 0 || c === void 0); ) {
        o = l.pop();
        let m = u !== void 0, g = c !== void 0;
        for (let _ of hs(o, { getVisitorKeys: a })) {
          if (!m) {
            let L = i(_);
            L <= n && L > d && (u = _, d = L);
          }
          if (!g) {
            let L = r(_);
            L >= n && L < p && (c = _, p = L);
          }
        }
      }
      return { nodeBeforeCursor: u, nodeAfterCursor: c };
    }
    function C4(e, t) {
      let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
      if (!n) return e;
      let i = wa(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
      return s(e);
      function s(o, l) {
        if (!(o !== null && typeof o == "object")) return o;
        if (Array.isArray(o)) return o.map((p) => s(p, l)).filter(Boolean);
        let u = {}, c = new Set(i(o));
        for (let p in o) !Object.prototype.hasOwnProperty.call(o, p) || a.has(p) || (c.has(p) ? u[p] = s(o[p], o) : u[p] = o[p]);
        let d = n(o, u, l);
        if (d !== null) return d ?? u;
      }
    }
    function T4(e, t) {
      let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
      return n.find((i) => Il.has(i.type) && r.has(i));
    }
    function lc(e) {
      let t = _d(!1, e, (n) => n.type !== "Program" && n.type !== "File");
      return t === -1 ? e : e.slice(0, t + 1);
    }
    function w4(e, t, { locStart: n, locEnd: r }) {
      let i = e.node, a = t.node;
      if (i === a) return { startNode: i, endNode: a };
      let s = n(e.node);
      for (let l of lc(t.parentNodes)) if (n(l) >= s) a = l;
      else break;
      let o = r(t.node);
      for (let l of lc(e.parentNodes)) {
        if (r(l) <= o) i = l;
        else break;
        if (i === a) break;
      }
      return { startNode: i, endNode: a };
    }
    function tl(e, t, n, r, i = [], a) {
      let { locStart: s, locEnd: o } = n, l = s(e), u = o(e);
      if (!(t > u || t < l || a === "rangeEnd" && t === l || a === "rangeStart" && t === u)) {
        for (let c of Qo(e, n)) {
          let d = tl(c, t, n, r, [e, ...i], a);
          if (d) return d;
        }
        if (!r || r(e, i[0])) return { node: e, parentNodes: i };
      }
    }
    function A4(e, t) {
      return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
    }
    function uc(e, t, n) {
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
          return A4(t.type, n == null ? void 0 : n.type);
        case "json":
        case "json5":
        case "jsonc":
        case "json-stringify":
          return Il.has(t.type);
        case "graphql":
          return vd.has(t.kind);
        case "vue":
          return t.tag !== "root";
      }
      return !1;
    }
    function S4(e, t, n) {
      let { rangeStart: r, rangeEnd: i, locStart: a, locEnd: s } = t;
      ws.ok(i > r);
      let o = e.slice(r, i).search(/\S/u), l = o === -1;
      if (!l) for (r += o; i > r && !/\S/u.test(e[i - 1]); --i) ;
      let u = tl(n, r, t, (m, g) => uc(t, m, g), [], "rangeStart"), c = l ? u : tl(n, i, t, (m) => uc(t, m), [], "rangeEnd");
      if (!u || !c) return { rangeStart: 0, rangeEnd: 0 };
      let d, p;
      if (Dd(t)) {
        let m = T4(u, c);
        d = m, p = m;
      } else ({ startNode: d, endNode: p } = w4(u, c, t));
      return { rangeStart: Math.min(a(d), a(p)), rangeEnd: Math.max(s(d), s(p)) };
    }
    async function cc(e, t, n = 0) {
      if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
      let { ast: r, text: i } = await Li(e, t);
      t.cursorOffset >= 0 && (t = { ...t, ...md(r, t) });
      let a = await ps(r, t);
      n > 0 && (a = $1([yr, a], n, t.tabWidth));
      let s = ds(a, t);
      if (n > 0) {
        let l = s.formatted.trim();
        s.cursorNodeStart !== void 0 && (s.cursorNodeStart -= s.formatted.indexOf(l), s.cursorNodeStart < 0 && (s.cursorNodeStart = 0, s.cursorNodeText = s.cursorNodeText.trimStart()), s.cursorNodeStart + s.cursorNodeText.length > l.length && (s.cursorNodeText = s.cursorNodeText.trimEnd())), s.formatted = l + Ho(t.endOfLine);
      }
      let o = t[Symbol.for("comments")];
      if (t.cursorOffset >= 0) {
        let l, u, c, d;
        if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && s.cursorNodeText) if (c = s.cursorNodeStart, d = s.cursorNodeText, t.cursorNode) l = t.locStart(t.cursorNode), u = i.slice(l, t.locEnd(t.cursorNode));
        else {
          if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
          l = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
          let A = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : i.length;
          u = i.slice(l, A);
        }
        else l = 0, u = i, c = 0, d = s.formatted;
        let p = t.cursorOffset - l;
        if (u === d) return { formatted: s.formatted, cursorOffset: c + p, comments: o };
        let m = u.split("");
        m.splice(p, 0, Ol);
        let g = d.split(""), _ = ng(m, g), L = c;
        for (let A of _) if (A.removed) {
          if (A.value.includes(Ol)) break;
        } else L += A.count;
        return { formatted: s.formatted, cursorOffset: L, comments: o };
      }
      return { formatted: s.formatted, cursorOffset: -1, comments: o };
    }
    async function L4(e, t) {
      let { ast: n, text: r } = await Li(e, t), { rangeStart: i, rangeEnd: a } = S4(r, t, n), s = r.slice(i, a), o = Math.min(i, r.lastIndexOf(`
`, i) + 1), l = r.slice(o, i).match(/^\s*/u)[0], u = Cs(l, t.tabWidth), c = await cc(s, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > i && t.cursorOffset <= a ? t.cursorOffset - i : -1, endOfLine: "lf" }, u), d = c.formatted.trimEnd(), { cursorOffset: p } = t;
      p > a ? p += d.length - s.length : c.cursorOffset >= 0 && (p = c.cursorOffset + i);
      let m = r.slice(0, i) + d + r.slice(a);
      if (t.endOfLine !== "lf") {
        let g = Ho(t.endOfLine);
        p >= 0 && g === `\r
` && (p += x1(m.slice(0, p), `
`)), m = ba(!1, m, `
`, g);
      }
      return { formatted: m, cursorOffset: p, comments: c.comments };
    }
    function nl(e, t, n) {
      return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
    }
    function dc(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
      return n = nl(e, n, -1), r = nl(e, r, 0), i = nl(e, i, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i };
    }
    function hc(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a } = dc(e, t), s = e.charAt(0) === Rl;
      if (s && (e = e.slice(1), n--, r--, i--), a === "auto" && (a = rg(e)), e.includes("\r")) {
        let o = (l) => x1(e.slice(0, Math.max(l, 0)), `\r
`);
        n -= o(n), r -= o(r), i -= o(i), e = ig(e);
      }
      return { hasBOM: s, text: e, options: dc(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a }) };
    }
    async function fc(e, t) {
      let n = await ic(t);
      return !n.hasPragma || n.hasPragma(e);
    }
    async function pc(e, t) {
      let { hasBOM: n, text: r, options: i } = hc(e, await Wr(t));
      if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await fc(r, i)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
      let a;
      return i.rangeStart > 0 || i.rangeEnd < r.length ? a = await L4(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await fc(r, i) && (r = i.printer.insertPragma(r)), a = await cc(r, i)), n && (a.formatted = Rl + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
    }
    async function F4(e, t, n) {
      let { text: r, options: i } = hc(e, await Wr(t)), a = await Li(r, i);
      return n && (n.preprocessForPrint && (a.ast = await oc(a.ast, i)), n.massage && (a.ast = gd(a.ast, i))), a;
    }
    async function I4(e, t) {
      t = await Wr(t);
      let n = await ps(e, t);
      return ds(n, t);
    }
    async function R4(e, t) {
      let n = wg(e), { formatted: r } = await pc(n, { ...t, parser: "__js_expression" });
      return r;
    }
    async function O4(e, t) {
      t = await Wr(t);
      let { ast: n } = await Li(e, t);
      return ps(n, t);
    }
    async function x4(e, t) {
      return ds(e, await Wr(t));
    }
    function k4(e, t) {
      if (t === !1) return !1;
      if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
        for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
      }
      return t;
    }
    function M4(e, t) {
      return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? gl(e, t) : t;
    }
    function U4(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = Jn(e, r), r = Os(e, r), r = xs(e, r), r = Cr(e, r);
      return r;
    }
    function P4(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = ml(e, r), r = Os(e, r), r = Jn(e, r);
      return r = xs(e, r), r = Cr(e, r), r !== !1 && Qn(e, r);
    }
    function B4(e, t) {
      let n = e.lastIndexOf(`
`);
      return n === -1 ? 0 : Cs(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
    }
    function $4(e) {
      if (typeof e != "string") throw new TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function V4(e, t) {
      let n = e.match(new RegExp(`(${$4(t)})+`, "gu"));
      return n === null ? 0 : n.reduce((r, i) => Math.max(r, i.length / t.length), 0);
    }
    function K4(e, t) {
      let n = ks(e, t);
      return n === !1 ? "" : e.charAt(n);
    }
    function j4(e, t) {
      let n = t === !0 || t === Sa ? Sa : kl, r = n === Sa ? kl : Sa, i = 0, a = 0;
      for (let s of e) s === n ? i++ : s === r && a++;
      return i > a ? r : n;
    }
    function q4(e, t, n) {
      for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
      return !1;
    }
    function G4(e, t, n = {}) {
      return Jn(e, n.backwards ? t - 1 : t, n) !== t;
    }
    function H4(e, t, n) {
      let r = t === '"' ? "'" : '"', i = ba(!1, e, /\\(.)|(["'])/gsu, (a, s, o) => s === r ? s : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
      return t + i + t;
    }
    function W4(e, t, n) {
      return ks(e, n(t));
    }
    function Y4(e, t) {
      return arguments.length === 2 || typeof t == "number" ? ks(e, t) : W4(...arguments);
    }
    function z4(e, t, n) {
      return Ls(e, n(t));
    }
    function X4(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Ls(e, t) : z4(...arguments);
    }
    function J4(e, t, n) {
      return Ms(e, n(t));
    }
    function Q4(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Ms(e, t) : J4(...arguments);
    }
    function Vr(e, t = 1) {
      return async (...n) => {
        let r = n[t] ?? {}, i = r.plugins ?? [];
        return n[t] = { ...r, plugins: Array.isArray(i) ? i : Object.values(i) }, e(...n);
      };
    }
    async function rl(e, t) {
      let { formatted: n } = await Us(e, { ...t, cursorOffset: -1 });
      return n;
    }
    async function mc(e, t) {
      return await rl(e, t) === e;
    }
    var gc, ms, Ec, _c, Dc, vc, il, al, gs, bc, va, yc, Nc, Ai, Es, Cc, sl, Tc, ba, ya, wc, Na, Ac, _s, Sc, Lc, Si, Ca, Dr, xn, vr, kn, Mn, Un, Ut, En, Gt, Pn, Bn, $n, _t, _n, Zt, ol, Fc, gt, br, Ic, Rc, Kr, ll, Ds, vs, Dn, ul, Oc, xc, Ta, kc, bs, cl, dl, Mc, yr, hl, Nr, Uc, Pc, Bc, ys, Pt, vn, jr, Ns, Cs, qr, fl, Ts, $c, Vc, pl, ws, Kc, jc, Jn, ml, gl, Cr, Qn, qc, El, Gc, wa, As, Ss, _l, Ls, Hc, Dl, vl, Wc, Yc, zc, Gr, bl, Xc, Hr, yl, Aa, Nl, Jc, Cl, Fs, Tl, wl, Qc, Zn, Zc, ed, td, nd, rd, id, ad, Al, sd, od, ld, ud, cd, Sl, dd, hd, Ll, Fl, Wr, fd, Li, pd, md, gd, Ed, _d, Dd, Il, vd, Rl, Ol, Is, bd, yd, Nd, xl, Rs, Os, xs, ks, Ms, Cd, Td, wd, Sa, kl, Ad, Sd, Ld, Fd, Us, Ml, Ul, Id, Z4 = W2(() => {
      gc = Object.create, ms = Object.defineProperty, Ec = Object.getOwnPropertyDescriptor, _c = Object.getOwnPropertyNames, Dc = Object.getPrototypeOf, vc = Object.prototype.hasOwnProperty, il = (e) => {
        throw TypeError(e);
      }, al = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), gs = (e, t) => {
        for (var n in t) ms(e, n, { get: t[n], enumerable: !0 });
      }, bc = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of _c(t)) !vc.call(e, i) && i !== n && ms(e, i, { get: () => t[i], enumerable: !(r = Ec(t, i)) || r.enumerable });
        return e;
      }, va = (e, t, n) => (n = e != null ? gc(Dc(e)) : {}, bc(t || !e || !e.__esModule ? ms(n, "default", { value: e, enumerable: !0 }) : n, e)), yc = (e, t, n) => t.has(e) || il("Cannot " + n), Nc = (e, t, n) => t.has(e) ? il("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ai = (e, t, n) => (yc(e, t, "access private method"), n), Es = al((e, t) => {
        var n = new Proxy(String, { get: () => n });
        t.exports = n;
      }), Cc = al((e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        function t() {
          return new Proxy({}, { get: () => (a) => a });
        }
        var n = /\r\n|[\n\r\u2028\u2029]/;
        function r(a, s, o) {
          let l = Object.assign({ column: 0, line: -1 }, a.start), u = Object.assign({}, l, a.end), { linesAbove: c = 2, linesBelow: d = 3 } = o || {}, p = l.line, m = l.column, g = u.line, _ = u.column, L = Math.max(p - (c + 1), 0), A = Math.min(s.length, g + d);
          p === -1 && (L = 0), g === -1 && (A = s.length);
          let F = g - p, C = {};
          if (F) for (let x = 0; x <= F; x++) {
            let U = x + p;
            if (!m) C[U] = !0;
            else if (x === 0) {
              let q = s[U - 1].length;
              C[U] = [m, q - m + 1];
            } else if (x === F) C[U] = [0, _];
            else {
              let q = s[U - x].length;
              C[U] = [0, q];
            }
          }
          else m === _ ? m ? C[p] = [m, 0] : C[p] = !0 : C[p] = [m, _ - m];
          return { start: L, end: A, markerLines: C };
        }
        function i(a, s, o = {}) {
          let l = t(), u = a.split(n), { start: c, end: d, markerLines: p } = r(s, u, o), m = s.start && typeof s.start.column == "number", g = String(d).length, _ = a.split(n, d).slice(c, d).map((L, A) => {
            let F = c + 1 + A, C = ` ${` ${F}`.slice(-g)} |`, x = p[F], U = !p[F + 1];
            if (x) {
              let q = "";
              if (Array.isArray(x)) {
                let I = L.slice(0, Math.max(x[0] - 1, 0)).replace(/[^\t]/g, " "), B = x[1] || 1;
                q = [`
 `, l.gutter(C.replace(/\d/g, " ")), " ", I, l.marker("^").repeat(B)].join(""), U && o.message && (q += " " + l.message(o.message));
              }
              return [l.marker(">"), l.gutter(C), L.length > 0 ? ` ${L}` : "", q].join("");
            } else return ` ${l.gutter(C)}${L.length > 0 ? ` ${L}` : ""}`;
          }).join(`
`);
          return o.message && !m && (_ = `${" ".repeat(g + 1)}${o.message}
${_}`), _;
        }
        e.codeFrameColumns = i;
      }), sl = {}, gs(sl, { __debug: () => Ul, check: () => mc, doc: () => Is, format: () => rl, formatWithCursor: () => Us, getSupportInfo: () => Ml, util: () => Rs, version: () => xl }), Tc = (e, t, n, r) => {
        if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
      }, ba = Tc, On.prototype = { diff: function(e, t) {
        var n, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.callback;
        typeof r == "function" && (i = r, r = {});
        var a = this;
        function s(C) {
          return C = a.postProcess(C, r), i ? (setTimeout(function() {
            i(C);
          }, 0), !0) : C;
        }
        e = this.castInput(e, r), t = this.castInput(t, r), e = this.removeEmpty(this.tokenize(e, r)), t = this.removeEmpty(this.tokenize(t, r));
        var o = t.length, l = e.length, u = 1, c = o + l;
        r.maxEditLength != null && (c = Math.min(c, r.maxEditLength));
        var d = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, p = Date.now() + d, m = [{ oldPos: -1, lastComponent: void 0 }], g = this.extractCommon(m[0], t, e, 0, r);
        if (m[0].oldPos + 1 >= l && g + 1 >= o) return s(L1(a, m[0].lastComponent, t, e, a.useLongestToken));
        var _ = -1 / 0, L = 1 / 0;
        function A() {
          for (var C = Math.max(_, -u); C <= Math.min(L, u); C += 2) {
            var x = void 0, U = m[C - 1], q = m[C + 1];
            U && (m[C - 1] = void 0);
            var I = !1;
            if (q) {
              var B = q.oldPos - C;
              I = q && 0 <= B && B < o;
            }
            var S = U && U.oldPos + 1 < l;
            if (!I && !S) {
              m[C] = void 0;
              continue;
            }
            if (!S || I && U.oldPos < q.oldPos ? x = a.addToPath(q, !0, !1, 0, r) : x = a.addToPath(U, !1, !0, 1, r), g = a.extractCommon(x, t, e, C, r), x.oldPos + 1 >= l && g + 1 >= o) return s(L1(a, x.lastComponent, t, e, a.useLongestToken));
            m[C] = x, x.oldPos + 1 >= l && (L = Math.min(L, C - 1)), g + 1 >= o && (_ = Math.max(_, C + 1));
          }
          u++;
        }
        if (i) (function C() {
          setTimeout(function() {
            if (u > c || Date.now() > p) return i();
            A() || C();
          }, 0);
        })();
        else for (; u <= c && Date.now() <= p; ) {
          var F = A();
          if (F) return F;
        }
      }, addToPath: function(e, t, n, r, i) {
        var a = e.lastComponent;
        return a && !i.oneChangePerToken && a.added === t && a.removed === n ? { oldPos: e.oldPos + r, lastComponent: { count: a.count + 1, added: t, removed: n, previousComponent: a.previousComponent } } : { oldPos: e.oldPos + r, lastComponent: { count: 1, added: t, removed: n, previousComponent: a } };
      }, extractCommon: function(e, t, n, r, i) {
        for (var a = t.length, s = n.length, o = e.oldPos, l = o - r, u = 0; l + 1 < a && o + 1 < s && this.equals(n[o + 1], t[l + 1], i); ) l++, o++, u++, i.oneChangePerToken && (e.lastComponent = { count: 1, previousComponent: e.lastComponent, added: !1, removed: !1 });
        return u && !i.oneChangePerToken && (e.lastComponent = { count: u, previousComponent: e.lastComponent, added: !1, removed: !1 }), e.oldPos = o, l;
      }, equals: function(e, t, n) {
        return n.comparator ? n.comparator(e, t) : e === t || n.ignoreCase && e.toLowerCase() === t.toLowerCase();
      }, removeEmpty: function(e) {
        for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
        return t;
      }, castInput: function(e) {
        return e;
      }, tokenize: function(e) {
        return Array.from(e);
      }, join: function(e) {
        return e.join("");
      }, postProcess: function(e) {
        return e;
      } }, ya = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", wc = new RegExp("[".concat(ya, "]+|\\s+|[^").concat(ya, "]"), "ug"), Na = new On(), Na.equals = function(e, t, n) {
        return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
      }, Na.tokenize = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
        if (t.intlSegmenter) {
          if (t.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
          n = Array.from(t.intlSegmenter.segment(e), function(a) {
            return a.segment;
          });
        } else n = e.match(wc) || [];
        var r = [], i = null;
        return n.forEach(function(a) {
          /\s/.test(a) ? i == null ? r.push(a) : r.push(r.pop() + a) : /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + a) : r.push(i + a) : r.push(a), i = a;
        }), r;
      }, Na.join = function(e) {
        return e.map(function(t, n) {
          return n == 0 ? t : t.replace(/^\s+/, "");
        }).join("");
      }, Na.postProcess = function(e, t) {
        if (!e || t.oneChangePerToken) return e;
        var n = null, r = null, i = null;
        return e.forEach(function(a) {
          a.added ? r = a : a.removed ? i = a : ((r || i) && O1(n, i, r, a), n = a, r = null, i = null);
        }), (r || i) && O1(n, i, r, null), e;
      }, Ac = new On(), Ac.tokenize = function(e) {
        var t = new RegExp("(\\r?\\n)|[".concat(ya, "]+|[^\\S\\n\\r]+|[^").concat(ya, "]"), "ug");
        return e.match(t) || [];
      }, _s = new On(), _s.tokenize = function(e, t) {
        t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
        var n = [], r = e.split(/(\n|\r\n)/);
        r[r.length - 1] || r.pop();
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          i % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a);
        }
        return n;
      }, _s.equals = function(e, t, n) {
        return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), On.prototype.equals.call(this, e, t, n);
      }, Sc = new On(), Sc.tokenize = function(e) {
        return e.split(/(\S.+?[.!?])(?=\s+|$)/);
      }, Lc = new On(), Lc.tokenize = function(e) {
        return e.split(/([{}:;,]|\s+)/);
      }, Si = new On(), Si.useLongestToken = !0, Si.tokenize = _s.tokenize, Si.castInput = function(e, t) {
        var n = t.undefinedReplacement, r = t.stringifyReplacer, i = r === void 0 ? function(a, s) {
          return typeof s > "u" ? n : s;
        } : r;
        return typeof e == "string" ? e : JSON.stringify(Go(e, null, null, i), i, "  ");
      }, Si.equals = function(e, t, n) {
        return On.prototype.equals.call(Si, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
      }, Ca = new On(), Ca.tokenize = function(e) {
        return e.slice();
      }, Ca.join = Ca.removeEmpty = function(e) {
        return e;
      }, Dr = "string", xn = "array", vr = "cursor", kn = "indent", Mn = "align", Un = "trim", Ut = "group", En = "fill", Gt = "if-break", Pn = "indent-if-break", Bn = "line-suffix", $n = "line-suffix-boundary", _t = "line", _n = "label", Zt = "break-parent", ol = /* @__PURE__ */ new Set([vr, kn, Mn, Un, Ut, En, Gt, Pn, Bn, $n, _t, _n, Zt]), Fc = (e, t, n) => {
        if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
      }, gt = Fc, br = ag, Ic = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), Rc = class extends Error {
        constructor(t) {
          super(sg(t));
          ot(this, "name", "InvalidDocError");
          this.doc = t;
        }
      }, Kr = Rc, ll = {}, Ds = og, vs = () => {
      }, Dn = vs, ul = vs, Oc = vs, xc = { type: $n }, Ta = { type: Zt }, kc = { type: Un }, bs = { type: _t, hard: !0 }, cl = { type: _t, hard: !0, literal: !0 }, dl = { type: _t }, Mc = { type: _t, soft: !0 }, yr = [bs, Ta], hl = [cl, Ta], Nr = { type: vr }, Uc = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, Pc = (e) => !(Ag(e) || Sg(e)), Bc = /[^\x20-\x7F]/u, ys = Lg, Pt = Symbol("MODE_BREAK"), vn = Symbol("MODE_FLAT"), jr = Symbol("cursor"), Ns = Symbol("DOC_FILL_PRINTED_LENGTH"), Cs = Rg, $c = class {
        constructor(e) {
          Nc(this, qr), this.stack = [e];
        }
        get key() {
          let { stack: e, siblings: t } = this;
          return gt(!1, e, t === null ? -2 : -4) ?? null;
        }
        get index() {
          return this.siblings === null ? null : gt(!1, this.stack, -2);
        }
        get node() {
          return gt(!1, this.stack, -1);
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
          let { stack: e } = this, t = gt(!1, e, -3);
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
          return [...Ai(this, qr, Ts).call(this)];
        }
        getName() {
          let { stack: e } = this, { length: t } = e;
          return t > 1 ? gt(!1, e, -2) : null;
        }
        getValue() {
          return gt(!1, this.stack, -1);
        }
        getNode(e = 0) {
          let t = Ai(this, qr, fl).call(this, e);
          return t === -1 ? null : this.stack[t];
        }
        getParentNode(e = 0) {
          return this.getNode(e + 1);
        }
        call(e, ...t) {
          let { stack: n } = this, { length: r } = n, i = gt(!1, n, -1);
          for (let a of t) i = i[a], n.push(a, i);
          try {
            return e(this);
          } finally {
            n.length = r;
          }
        }
        callParent(e, t = 0) {
          let n = Ai(this, qr, fl).call(this, t + 1), r = this.stack.splice(n + 1);
          try {
            return e(this);
          } finally {
            this.stack.push(...r);
          }
        }
        each(e, ...t) {
          let { stack: n } = this, { length: r } = n, i = gt(!1, n, -1);
          for (let a of t) i = i[a], n.push(a, i);
          try {
            for (let a = 0; a < i.length; ++a) n.push(a, i[a]), e(this, a, i), n.length -= 2;
          } finally {
            n.length = r;
          }
        }
        map(e, ...t) {
          let n = [];
          return this.each((r, i, a) => {
            n[i] = e(r, i, a);
          }, ...t), n;
        }
        match(...e) {
          let t = this.stack.length - 1, n = null, r = this.stack[t--];
          for (let i of e) {
            if (r === void 0) return !1;
            let a = null;
            if (typeof n == "number" && (a = n, n = this.stack[t--], r = this.stack[t--]), i && !i(r, n, a)) return !1;
            n = this.stack[t--], r = this.stack[t--];
          }
          return !0;
        }
        findAncestor(e) {
          for (let t of Ai(this, qr, Ts).call(this)) if (e(t)) return t;
        }
        hasAncestor(e) {
          for (let t of Ai(this, qr, Ts).call(this)) if (e(t)) return !0;
          return !1;
        }
      }, qr = /* @__PURE__ */ new WeakSet(), fl = function(e) {
        let { stack: t } = this;
        for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
        return -1;
      }, Ts = function* () {
        let { stack: e } = this;
        for (let t = e.length - 3; t >= 0; t -= 2) {
          let n = e[t];
          Array.isArray(n) || (yield n);
        }
      }, Vc = $c, pl = new Proxy(() => {
      }, { get: () => pl }), ws = pl, Kc = Og, jc = Da(/\s/u), Jn = Da(" 	"), ml = Da(",; 	"), gl = Da(/[^\n\r]/u), Cr = Mg, Qn = Ug, qc = Pg, El = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), Gc = (e) => Object.keys(e).filter((t) => !El.has(t)), wa = Bg, As = /* @__PURE__ */ new WeakMap(), Ss = () => !1, _l = (e) => !/[\S\n\u2028\u2029]/u.test(e), Ls = qg, Hc = Xg, Dl = class extends Error {
        constructor() {
          super(...arguments);
          ot(this, "name", "ConfigError");
        }
      }, vl = class extends Error {
        constructor() {
          super(...arguments);
          ot(this, "name", "UndefinedParserError");
        }
      }, Wc = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, Yc = (e) => String(e).split(/[/\\]/u).pop(), zc = e4, Gr = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
        if (e === null || typeof e != "object") return JSON.stringify(e);
        if (Array.isArray(e)) return `[${e.map((n) => Gr.value(n)).join(", ")}]`;
        let t = Object.keys(e);
        return t.length === 0 ? "{}" : `{ ${t.map((n) => `${Gr.key(n)}: ${Gr.value(e[n])}`).join(", ")} }`;
      }, pair: ({ key: e, value: t }) => Gr.value({ [e]: t }) }, bl = va(Es(), 1), Xc = (e, t, { descriptor: n }) => {
        let r = [`${bl.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
        return t && r.push(`we now treat it as ${bl.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
      }, Hr = va(Es(), 1), yl = Symbol.for("vnopts.VALUE_NOT_EXIST"), Aa = Symbol.for("vnopts.VALUE_UNCHANGED"), Nl = " ".repeat(2), Jc = (e, t, n) => {
        let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
        return r && a.push(W1(e, t, r, n.descriptor)), i && a.push([W1(e, t, i.title, n.descriptor)].concat(i.values.map((s) => Y1(s, n.loggerPrintWidth))).join(`
`)), z1(a, n.loggerPrintWidth);
      }, Cl = va(Es(), 1), Fs = [], Tl = [], wl = (e, t, { descriptor: n, logger: r, schemas: i }) => {
        let a = [`Ignored unknown option ${Cl.default.yellow(n.pair({ key: e, value: t }))}.`], s = Object.keys(i).sort().find((o) => t4(e, o) < 3);
        s && a.push(`Did you mean ${Cl.default.blue(n.key(s))}?`), r.warn(a.join(" "));
      }, Qc = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"], Zn = class {
        static create(e) {
          return n4(this, e);
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
          return Aa;
        }
      }, Zc = class extends Zn {
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
      }, ed = class extends Zn {
        expected() {
          return "anything";
        }
        validate() {
          return !0;
        }
      }, td = class extends Zn {
        constructor({ valueSchema: e, name: t = e.name, ...n }) {
          super({ ...n, name: t }), this._valueSchema = e;
        }
        expected(e) {
          let { text: t, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
          return { text: t && `an array of ${t}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
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
            i !== !1 && n.push(...i.map(({ value: a }) => ({ value: [a] })));
          }
          return n;
        }
        forward(e, t) {
          let n = [];
          for (let r of e) {
            let i = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
            n.push(...i.map(X1));
          }
          return n;
        }
        redirect(e, t) {
          let n = [], r = [];
          for (let i of e) {
            let a = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
            "remain" in a && n.push(a.remain), r.push(...a.redirect.map(X1));
          }
          return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
        }
        overlap(e, t) {
          return e.concat(t);
        }
      }, nd = class extends Zn {
        expected() {
          return "true or false";
        }
        validate(e) {
          return typeof e == "boolean";
        }
      }, rd = class extends Zn {
        constructor(e) {
          super(e), this._choices = a4(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
        }
        expected({ descriptor: e }) {
          let t = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(u4).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
          return { text: n.concat(r.join(" or ")).join(", "), list: { title: "one of the following values", values: t } };
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
      }, id = class extends Zn {
        expected() {
          return "a number";
        }
        validate(e, t) {
          return typeof e == "number";
        }
      }, ad = class extends id {
        expected() {
          return "an integer";
        }
        validate(e, t) {
          return t.normalizeValidateResult(super.validate(e, t), e) === !0 && l4(e);
        }
      }, Al = class extends Zn {
        expected() {
          return "a string";
        }
        validate(e) {
          return typeof e == "string";
        }
      }, sd = Gr, od = wl, ld = Jc, ud = Xc, cd = class {
        constructor(e, t) {
          let { logger: n = console, loggerPrintWidth: r = 80, descriptor: i = sd, unknown: a = od, invalid: s = ld, deprecated: o = ud, missing: l = () => !1, required: u = () => !1, preprocess: c = (p) => p, postprocess: d = () => Aa } = t || {};
          this._utils = { descriptor: i, logger: n || { warn: () => {
          } }, loggerPrintWidth: r, schemas: i4(e, "name"), normalizeDefaultResult: J1, normalizeExpectedResult: Q1, normalizeDeprecatedResult: ec, normalizeForwardResult: el, normalizeRedirectResult: nc, normalizeValidateResult: Z1 }, this._unknownHandler = a, this._invalidHandler = c4(s), this._deprecatedHandler = o, this._identifyMissing = (p, m) => !(p in m) || l(p, m), this._identifyRequired = u, this._preprocess = c, this._postprocess = d, this.cleanHistory();
        }
        cleanHistory() {
          this._hasDeprecationWarned = s4();
        }
        normalize(e) {
          let t = {}, n = [this._preprocess(e, this._utils)], r = () => {
            for (; n.length !== 0; ) {
              let i = n.shift(), a = this._applyNormalization(i, t);
              n.push(...a);
            }
          };
          r();
          for (let i of Object.keys(this._utils.schemas)) {
            let a = this._utils.schemas[i];
            if (!(i in t)) {
              let s = J1(a.default(this._utils));
              "value" in s && n.push({ [i]: s.value });
            }
          }
          r();
          for (let i of Object.keys(this._utils.schemas)) {
            if (!(i in t)) continue;
            let a = this._utils.schemas[i], s = t[i], o = a.postprocess(s, this._utils);
            o !== Aa && (this._applyValidation(o, i, a), t[i] = o);
          }
          return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
        }
        _applyNormalization(e, t) {
          let n = [], { knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(e);
          for (let a of r) {
            let s = this._utils.schemas[a], o = s.preprocess(e[a], this._utils);
            this._applyValidation(o, a, s);
            let l = ({ from: d, to: p }) => {
              n.push(typeof p == "string" ? { [p]: d } : { [p.key]: p.value });
            }, u = ({ value: d, redirectTo: p }) => {
              let m = ec(s.deprecated(d, this._utils), o, !0);
              if (m !== !1) if (m === !0) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
              else for (let { value: g } of m) {
                let _ = { key: a, value: g };
                if (!this._hasDeprecationWarned(_)) {
                  let L = typeof p == "string" ? { key: p, value: g } : p;
                  this._utils.logger.warn(this._deprecatedHandler(_, L, this._utils));
                }
              }
            };
            el(s.forward(o, this._utils), o).forEach(l);
            let c = nc(s.redirect(o, this._utils), o);
            if (c.redirect.forEach(l), "remain" in c) {
              let d = c.remain;
              t[a] = a in t ? s.overlap(t[a], d, this._utils) : d, u({ value: d });
            }
            for (let { from: d, to: p } of c.redirect) u({ value: d, redirectTo: p });
          }
          for (let a of i) {
            let s = e[a];
            this._applyUnknownHandler(a, s, t, (o, l) => {
              n.push({ [o]: l });
            });
          }
          return n;
        }
        _applyRequiredCheck(e) {
          for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, yl, this._utils);
        }
        _partitionOptionKeys(e) {
          let [t, n] = o4(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
          return { knownKeys: t, unknownKeys: n };
        }
        _applyValidation(e, t, n) {
          let r = Z1(n.validate(e, this._utils), e);
          if (r !== !0) throw this._invalidHandler(t, r.value, this._utils);
        }
        _applyUnknownHandler(e, t, n, r) {
          let i = this._unknownHandler(e, t, this._utils);
          if (i) for (let a of Object.keys(i)) {
            if (this._identifyMissing(a, i)) continue;
            let s = i[a];
            a in this._utils.schemas ? r(a, s) : n[a] = s;
          }
        }
        _applyPostprocess(e) {
          let t = this._postprocess(e, this._utils);
          if (t !== Aa) {
            if (t.delete) for (let n of t.delete) delete e[n];
            if (t.override) {
              let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override);
              for (let i of n) {
                let a = t.override[i];
                this._applyValidation(a, i, this._utils.schemas[i]), e[i] = a;
              }
              for (let i of r) {
                let a = t.override[i];
                this._applyUnknownHandler(i, a, e, (s, o) => {
                  let l = this._utils.schemas[s];
                  this._applyValidation(o, s, l), e[s] = o;
                });
              }
            }
          }
        }
      }, dd = h4, hd = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLast) return t.findLast(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return i;
          }
        }
      }, Ll = hd, Fl = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null }, Wr = E4, fd = va(Cc(), 1), Li = _4, pd = y4, md = N4, gd = C4, Ed = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLastIndex) return t.findLastIndex(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return r;
          }
          return -1;
        }
      }, _d = Ed, Dd = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify", Il = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), vd = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]), Rl = "\uFEFF", Ol = Symbol("cursor"), Is = {}, gs(Is, { builders: () => bd, printer: () => yd, utils: () => Nd }), bd = { join: B1, line: dl, softline: Mc, hardline: yr, literalline: hl, group: P1, conditionalGroup: bg, fill: yg, lineSuffix: Yo, lineSuffixBoundary: xc, cursor: Nr, breakParent: Ta, ifBreak: Ng, trim: kc, indent: us, indentIfBreak: Cg, align: Ci, addAlignmentToDoc: $1, markAsRoot: Dg, dedentToRoot: _g, dedent: vg, hardlineWithoutBreakParent: bs, literallineWithoutBreakParent: cl, label: Tg, concat: (e) => e }, yd = { printDocToString: ds }, Nd = { willBreak: ug, traverseDoc: Ds, findInDoc: Wo, mapDoc: os, removeLines: hg, stripTrailingHardline: U1, replaceEndOfLine: mg, canBreak: Eg }, xl = "3.5.3", Rs = {}, gs(Rs, { addDanglingComment: () => fs, addLeadingComment: () => Ti, addTrailingComment: () => wi, getAlignmentSize: () => Cs, getIndentSize: () => Cd, getMaxContinuousCount: () => Td, getNextNonSpaceNonCommentCharacter: () => wd, getNextNonSpaceNonCommentCharacterIndex: () => Y4, getPreferredQuote: () => Ad, getStringWidth: () => ys, hasNewline: () => Qn, hasNewlineInRange: () => Sd, hasSpaces: () => Ld, isNextLineEmpty: () => Q4, isNextLineEmptyAfterIndex: () => Ms, isPreviousLineEmpty: () => X4, makeString: () => Fd, skip: () => Da, skipEverythingButNewLine: () => gl, skipInlineComment: () => Os, skipNewline: () => Cr, skipSpaces: () => Jn, skipToLineEnd: () => ml, skipTrailingComment: () => xs, skipWhitespace: () => jc }), Os = k4, xs = M4, ks = U4, Ms = P4, Cd = B4, Td = V4, wd = K4, Sa = "'", kl = '"', Ad = j4, Sd = q4, Ld = G4, Fd = H4, Us = Vr(pc), Ml = Vr(G1, 0), Ul = { parse: Vr(F4), formatAST: Vr(I4), formatDoc: Vr(R4), printToDoc: Vr(O4), printDocToString: Vr(x4) }, Id = sl;
    }), e5 = _r((e, t) => {
      (function(n) {
        function r() {
          var a = n();
          return a.default || a;
        }
        if (typeof e == "object" && typeof t == "object") t.exports = r();
        else {
          var i = typeof globalThis < "u" ? globalThis : typeof I2 < "u" ? I2 : typeof self < "u" ? self : this || {};
          i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.graphql = r();
        }
      })(function() {
        var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, s = (f, E) => {
          for (var D in E) n(f, D, { get: E[D], enumerable: !0 });
        }, o = (f, E, D, w) => {
          if (E && typeof E == "object" || typeof E == "function") for (let N of i(E)) !a.call(f, N) && N !== D && n(f, N, { get: () => E[N], enumerable: !(w = r(E, N)) || w.enumerable });
          return f;
        }, l = (f) => o(n({}, "__esModule", { value: !0 }), f), u = {};
        s(u, { languages: () => aD, options: () => lD, parsers: () => D2, printers: () => WD });
        var c = (f, E, D, w) => {
          if (!(f && E == null)) return E.replaceAll ? E.replaceAll(D, w) : D.global ? E.replace(D, w) : E.split(D).join(w);
        }, d = c, p = "indent", m = "group", g = "if-break", _ = "line", L = "break-parent", A = () => {
        }, F = A;
        function C(f) {
          return { type: p, contents: f };
        }
        function x(f, E = {}) {
          return F(E.expandedStates), { type: m, id: E.id, contents: f, break: !!E.shouldBreak, expandedStates: E.expandedStates };
        }
        function U(f, E = "", D = {}) {
          return { type: g, breakContents: f, flatContents: E, groupId: D.groupId };
        }
        var q = { type: L }, I = { type: _, hard: !0 }, B = { type: _ }, S = { type: _, soft: !0 }, K = [I, q];
        function V(f, E) {
          let D = [];
          for (let w = 0; w < E.length; w++) w !== 0 && D.push(f), D.push(E[w]);
          return D;
        }
        function xe(f) {
          return (E, D, w) => {
            let N = !!(w != null && w.backwards);
            if (D === !1) return !1;
            let { length: $ } = E, ge = D;
            for (; ge >= 0 && ge < $; ) {
              let Pe = E.charAt(ge);
              if (f instanceof RegExp) {
                if (!f.test(Pe)) return ge;
              } else if (!f.includes(Pe)) return ge;
              N ? ge-- : ge++;
            }
            return ge === -1 || ge === $ ? ge : !1;
          };
        }
        var Z = xe(" 	"), G = xe(",; 	"), J = xe(/[^\n\r]/u);
        function ne(f, E, D) {
          let w = !!(D != null && D.backwards);
          if (E === !1) return !1;
          let N = f.charAt(E);
          if (w) {
            if (f.charAt(E - 1) === "\r" && N === `
`) return E - 2;
            if (N === `
` || N === "\r" || N === "\u2028" || N === "\u2029") return E - 1;
          } else {
            if (N === "\r" && f.charAt(E + 1) === `
`) return E + 2;
            if (N === `
` || N === "\r" || N === "\u2028" || N === "\u2029") return E + 1;
          }
          return E;
        }
        var oe = ne;
        function de(f, E, D = {}) {
          let w = Z(f, D.backwards ? E - 1 : E, D), N = oe(f, w, D);
          return w !== N;
        }
        var ue = de;
        function Ie(f, E) {
          if (E === !1) return !1;
          if (f.charAt(E) === "/" && f.charAt(E + 1) === "*") {
            for (let D = E + 2; D < f.length; ++D) if (f.charAt(D) === "*" && f.charAt(D + 1) === "/") return D + 2;
          }
          return E;
        }
        var ke = Ie;
        function y(f, E) {
          return E === !1 ? !1 : f.charAt(E) === "/" && f.charAt(E + 1) === "/" ? J(f, E) : E;
        }
        var ee = y;
        function z(f, E) {
          let D = null, w = E;
          for (; w !== D; ) D = w, w = G(f, w), w = ke(f, w), w = Z(f, w);
          return w = ee(f, w), w = oe(f, w), w !== !1 && ue(f, w);
        }
        var re = z;
        function M(f) {
          return Array.isArray(f) && f.length > 0;
        }
        var P = M, le = class extends Error {
          constructor(E, D, w = "type") {
            super(`Unexpected ${D} node ${w}: ${JSON.stringify(E[w])}.`);
            ot(this, "name", "UnexpectedNodeError");
            this.node = E;
          }
        }, _e = le, Xe = null;
        function Tt(f) {
          if (Xe !== null && typeof Xe.property) {
            let E = Xe;
            return Xe = Tt.prototype = null, E;
          }
          return Xe = Tt.prototype = f ?? /* @__PURE__ */ Object.create(null), new Tt();
        }
        var Se = 10;
        for (let f = 0; f <= Se; f++) Tt();
        function Je(f) {
          return Tt(f);
        }
        function _i(f, E = "type") {
          Je(f);
          function D(w) {
            let N = w[E], $ = f[N];
            if (!Array.isArray($)) throw Object.assign(new Error(`Missing visitor keys for '${N}'.`), { node: w });
            return $;
          }
          return D;
        }
        var sn = _i, Ot = class {
          constructor(f, E, D) {
            this.start = f.start, this.end = E.end, this.startToken = f, this.endToken = E, this.source = D;
          }
          get [Symbol.toStringTag]() {
            return "Location";
          }
          toJSON() {
            return { start: this.start, end: this.end };
          }
        }, De = class {
          constructor(f, E, D, w, N, $) {
            this.kind = f, this.start = E, this.end = D, this.line = w, this.column = N, this.value = $, this.prev = null, this.next = null;
          }
          get [Symbol.toStringTag]() {
            return "Token";
          }
          toJSON() {
            return { kind: this.kind, value: this.value, line: this.line, column: this.column };
          }
        }, at = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] };
        new Set(Object.keys(at));
        var Yn;
        (function(f) {
          f.QUERY = "query", f.MUTATION = "mutation", f.SUBSCRIPTION = "subscription";
        })(Yn || (Yn = {}));
        var ae = sn(at, "kind"), Be = ae;
        function te(f) {
          return f.loc.start;
        }
        function Le(f) {
          return f.loc.end;
        }
        function pt(f) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(f);
        }
        function xt(f) {
          return `# @format

` + f;
        }
        function st(f, E, D) {
          let { node: w } = f;
          if (!w.description) return "";
          let N = [D("description")];
          return w.kind === "InputValueDefinition" && !w.description.block ? N.push(B) : N.push(K), N;
        }
        var on = st;
        function la(f, E, D) {
          let { node: w } = f;
          switch (w.kind) {
            case "Document":
              return [...V(K, zn(f, E, D, "definitions")), K];
            case "OperationDefinition": {
              let N = E.originalText[te(w)] !== "{", $ = !!w.name;
              return [N ? w.operation : "", N && $ ? [" ", D("name")] : "", N && !$ && P(w.variableDefinitions) ? " " : "", E2(f, D), jt(f, D, w), !N && !$ ? "" : " ", D("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", D("name"), E2(f, D), " on ", D("typeCondition"), jt(f, D, w), " ", D("selectionSet")];
            case "SelectionSet":
              return ["{", C([K, V(K, zn(f, E, D, "selections"))]), K, "}"];
            case "Field":
              return x([w.alias ? [D("alias"), ": "] : "", D("name"), w.arguments.length > 0 ? x(["(", C([S, V([U("", ", "), S], zn(f, E, D, "arguments"))]), S, ")"]) : "", jt(f, D, w), w.selectionSet ? " " : "", D("selectionSet")]);
            case "Name":
              return w.value;
            case "StringValue":
              if (w.block) {
                let N = d(!1, w.value, '"""', String.raw`\"""`).split(`
`);
                return N.length === 1 && (N[0] = N[0].trim()), N.every(($) => $ === "") && (N.length = 0), V(K, ['"""', ...N, '"""']);
              }
              return ['"', d(!1, d(!1, w.value, /["\\]/gu, String.raw`\$&`), `
`, String.raw`\n`), '"'];
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return w.value;
            case "BooleanValue":
              return w.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", D("name")];
            case "ListValue":
              return x(["[", C([S, V([U("", ", "), S], f.map(D, "values"))]), S, "]"]);
            case "ObjectValue": {
              let N = E.bracketSpacing && w.fields.length > 0 ? " " : "";
              return x(["{", N, C([S, V([U("", ", "), S], f.map(D, "fields"))]), S, U("", N), "}"]);
            }
            case "ObjectField":
            case "Argument":
              return [D("name"), ": ", D("value")];
            case "Directive":
              return ["@", D("name"), w.arguments.length > 0 ? x(["(", C([S, V([U("", ", "), S], zn(f, E, D, "arguments"))]), S, ")"]) : ""];
            case "NamedType":
              return D("name");
            case "VariableDefinition":
              return [D("variable"), ": ", D("type"), w.defaultValue ? [" = ", D("defaultValue")] : "", jt(f, D, w)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition": {
              let { kind: N } = w, $ = [];
              return N.endsWith("TypeDefinition") ? $.push(on(f, E, D)) : $.push("extend "), N.startsWith("ObjectType") ? $.push("type") : N.startsWith("InputObjectType") ? $.push("input") : $.push("interface"), $.push(" ", D("name")), !N.startsWith("InputObjectType") && w.interfaces.length > 0 && $.push(" implements ", ...tD(f, E, D)), $.push(jt(f, D, w)), w.fields.length > 0 && $.push([" {", C([K, V(K, zn(f, E, D, "fields"))]), K, "}"]), $;
            }
            case "FieldDefinition":
              return [on(f, E, D), D("name"), w.arguments.length > 0 ? x(["(", C([S, V([U("", ", "), S], zn(f, E, D, "arguments"))]), S, ")"]) : "", ": ", D("type"), jt(f, D, w)];
            case "DirectiveDefinition":
              return [on(f, E, D), "directive ", "@", D("name"), w.arguments.length > 0 ? x(["(", C([S, V([U("", ", "), S], zn(f, E, D, "arguments"))]), S, ")"]) : "", w.repeatable ? " repeatable" : "", " on ", ...V(" | ", f.map(D, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [on(f, E, D), w.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), jt(f, D, w), w.values.length > 0 ? [" {", C([K, V(K, zn(f, E, D, "values"))]), K, "}"] : ""];
            case "EnumValueDefinition":
              return [on(f, E, D), D("name"), jt(f, D, w)];
            case "InputValueDefinition":
              return [on(f, E, D), D("name"), ": ", D("type"), w.defaultValue ? [" = ", D("defaultValue")] : "", jt(f, D, w)];
            case "SchemaExtension":
              return ["extend schema", jt(f, D, w), ...w.operationTypes.length > 0 ? [" {", C([K, V(K, zn(f, E, D, "operationTypes"))]), K, "}"] : []];
            case "SchemaDefinition":
              return [on(f, E, D), "schema", jt(f, D, w), " {", w.operationTypes.length > 0 ? C([K, V(K, zn(f, E, D, "operationTypes"))]) : "", K, "}"];
            case "OperationTypeDefinition":
              return [w.operation, ": ", D("type")];
            case "FragmentSpread":
              return ["...", D("name"), jt(f, D, w)];
            case "InlineFragment":
              return ["...", w.typeCondition ? [" on ", D("typeCondition")] : "", jt(f, D, w), " ", D("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return x([on(f, E, D), x([w.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), jt(f, D, w), w.types.length > 0 ? [" =", U("", " "), C([U([B, "| "]), V([B, "| "], f.map(D, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [on(f, E, D), w.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), jt(f, D, w)];
            case "NonNullType":
              return [D("type"), "!"];
            case "ListType":
              return ["[", D("type"), "]"];
            default:
              throw new _e(w, "Graphql", "kind");
          }
        }
        function jt(f, E, D) {
          if (D.directives.length === 0) return "";
          let w = V(B, f.map(E, "directives"));
          return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? x([B, w]) : [" ", x(C([S, w]))];
        }
        function zn(f, E, D, w) {
          return f.map(({ isLast: N, node: $ }) => {
            let ge = D();
            return !N && re(E.originalText, Le($)) ? [ge, K] : ge;
          }, w);
        }
        function Z_(f) {
          return f.kind !== "Comment";
        }
        function eD(f) {
          let E = f.node;
          if (E.kind === "Comment") return "#" + E.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(E));
        }
        function tD(f, E, D) {
          let { node: w } = f, N = [], { interfaces: $ } = w, ge = f.map(D, "interfaces");
          for (let Pe = 0; Pe < $.length; Pe++) {
            let et = $[Pe];
            N.push(ge[Pe]);
            let Qt = $[Pe + 1];
            if (Qt) {
              let At = E.originalText.slice(et.loc.end, Qt.loc.start).includes("#");
              N.push(" &", At ? B : " ");
            }
          }
          return N;
        }
        function E2(f, E) {
          let { node: D } = f;
          return P(D.variableDefinitions) ? x(["(", C([S, V([U("", ", "), S], f.map(E, "variableDefinitions"))]), S, ")"]) : "";
        }
        function _2(f, E) {
          f.kind === "StringValue" && f.block && !f.value.includes(`
`) && (E.value = f.value.trim());
        }
        _2.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function nD(f) {
          var E;
          let { node: D } = f;
          return (E = D == null ? void 0 : D.comments) == null ? void 0 : E.some((w) => w.value.trim() === "prettier-ignore");
        }
        var rD = { print: la, massageAstNode: _2, hasPrettierIgnore: nD, insertPragma: xt, printComment: eD, canAttachComment: Z_, getVisitorKeys: Be }, iD = rD, aD = [{ linguistLanguageId: 139, name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }], sD = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." } }, oD = { bracketSpacing: sD.bracketSpacing }, lD = oD, D2 = {};
        s(D2, { graphql: () => HD });
        function uD(f) {
          return typeof f == "object" && f !== null;
        }
        function cD(f, E) {
          throw new Error("Unexpected invariant triggered.");
        }
        var dD = /\r\n|[\n\r]/g;
        function v1(f, E) {
          let D = 0, w = 1;
          for (let N of f.body.matchAll(dD)) {
            if (typeof N.index == "number" || cD(), N.index >= E) break;
            D = N.index + N[0].length, w += 1;
          }
          return { line: w, column: E + 1 - D };
        }
        function hD(f) {
          return v2(f.source, v1(f.source, f.start));
        }
        function v2(f, E) {
          let D = f.locationOffset.column - 1, w = "".padStart(D) + f.body, N = E.line - 1, $ = f.locationOffset.line - 1, ge = E.line + $, Pe = E.line === 1 ? D : 0, et = E.column + Pe, Qt = `${f.name}:${ge}:${et}
`, At = w.split(/\r\n|[\n\r]/g), ca = At[N];
          if (ca.length > 120) {
            let Rn = Math.floor(et / 80), C1 = et % 80, qt = [];
            for (let da = 0; da < ca.length; da += 80) qt.push(ca.slice(da, da + 80));
            return Qt + b2([[`${ge} |`, qt[0]], ...qt.slice(1, Rn + 1).map((da) => ["|", da]), ["|", "^".padStart(C1)], ["|", qt[Rn + 1]]]);
          }
          return Qt + b2([[`${ge - 1} |`, At[N - 1]], [`${ge} |`, ca], ["|", "^".padStart(et)], [`${ge + 1} |`, At[N + 1]]]);
        }
        function b2(f) {
          let E = f.filter(([w, N]) => N !== void 0), D = Math.max(...E.map(([w]) => w.length));
          return E.map(([w, N]) => w.padStart(D) + (N ? " " + N : "")).join(`
`);
        }
        function fD(f) {
          let E = f[0];
          return E == null || "kind" in E || "length" in E ? { nodes: E, source: f[1], positions: f[2], path: f[3], originalError: f[4], extensions: f[5] } : E;
        }
        var pD = class x2 extends Error {
          constructor(E, ...D) {
            var w, N, $;
            let { nodes: ge, source: Pe, positions: et, path: Qt, originalError: At, extensions: ca } = fD(D);
            super(E), this.name = "GraphQLError", this.path = Qt ?? void 0, this.originalError = At ?? void 0, this.nodes = y2(Array.isArray(ge) ? ge : ge ? [ge] : void 0);
            let Rn = y2((w = this.nodes) === null || w === void 0 ? void 0 : w.map((qt) => qt.loc).filter((qt) => qt != null));
            this.source = Pe ?? (Rn == null || (N = Rn[0]) === null || N === void 0 ? void 0 : N.source), this.positions = et ?? (Rn == null ? void 0 : Rn.map((qt) => qt.start)), this.locations = et && Pe ? et.map((qt) => v1(Pe, qt)) : Rn == null ? void 0 : Rn.map((qt) => v1(qt.source, qt.start));
            let C1 = uD(At == null ? void 0 : At.extensions) ? At == null ? void 0 : At.extensions : void 0;
            this.extensions = ($ = ca ?? C1) !== null && $ !== void 0 ? $ : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), At != null && At.stack ? Object.defineProperty(this, "stack", { value: At.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, x2) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
          }
          get [Symbol.toStringTag]() {
            return "GraphQLError";
          }
          toString() {
            let E = this.message;
            if (this.nodes) for (let D of this.nodes) D.loc && (E += `

` + hD(D.loc));
            else if (this.source && this.locations) for (let D of this.locations) E += `

` + v2(this.source, D);
            return E;
          }
          toJSON() {
            let E = { message: this.message };
            return this.locations != null && (E.locations = this.locations), this.path != null && (E.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (E.extensions = this.extensions), E;
          }
        };
        function y2(f) {
          return f === void 0 || f.length === 0 ? void 0 : f;
        }
        function wt(f, E, D) {
          return new pD(`Syntax Error: ${D}`, { source: f, positions: [E] });
        }
        var b1;
        (function(f) {
          f.QUERY = "QUERY", f.MUTATION = "MUTATION", f.SUBSCRIPTION = "SUBSCRIPTION", f.FIELD = "FIELD", f.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", f.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", f.INLINE_FRAGMENT = "INLINE_FRAGMENT", f.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", f.SCHEMA = "SCHEMA", f.SCALAR = "SCALAR", f.OBJECT = "OBJECT", f.FIELD_DEFINITION = "FIELD_DEFINITION", f.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", f.INTERFACE = "INTERFACE", f.UNION = "UNION", f.ENUM = "ENUM", f.ENUM_VALUE = "ENUM_VALUE", f.INPUT_OBJECT = "INPUT_OBJECT", f.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
        })(b1 || (b1 = {}));
        var ve;
        (function(f) {
          f.NAME = "Name", f.DOCUMENT = "Document", f.OPERATION_DEFINITION = "OperationDefinition", f.VARIABLE_DEFINITION = "VariableDefinition", f.SELECTION_SET = "SelectionSet", f.FIELD = "Field", f.ARGUMENT = "Argument", f.FRAGMENT_SPREAD = "FragmentSpread", f.INLINE_FRAGMENT = "InlineFragment", f.FRAGMENT_DEFINITION = "FragmentDefinition", f.VARIABLE = "Variable", f.INT = "IntValue", f.FLOAT = "FloatValue", f.STRING = "StringValue", f.BOOLEAN = "BooleanValue", f.NULL = "NullValue", f.ENUM = "EnumValue", f.LIST = "ListValue", f.OBJECT = "ObjectValue", f.OBJECT_FIELD = "ObjectField", f.DIRECTIVE = "Directive", f.NAMED_TYPE = "NamedType", f.LIST_TYPE = "ListType", f.NON_NULL_TYPE = "NonNullType", f.SCHEMA_DEFINITION = "SchemaDefinition", f.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", f.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", f.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", f.FIELD_DEFINITION = "FieldDefinition", f.INPUT_VALUE_DEFINITION = "InputValueDefinition", f.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", f.UNION_TYPE_DEFINITION = "UnionTypeDefinition", f.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", f.ENUM_VALUE_DEFINITION = "EnumValueDefinition", f.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", f.DIRECTIVE_DEFINITION = "DirectiveDefinition", f.SCHEMA_EXTENSION = "SchemaExtension", f.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", f.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", f.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", f.UNION_TYPE_EXTENSION = "UnionTypeExtension", f.ENUM_TYPE_EXTENSION = "EnumTypeExtension", f.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
        })(ve || (ve = {}));
        function mD(f) {
          return f === 9 || f === 32;
        }
        function ns(f) {
          return f >= 48 && f <= 57;
        }
        function N2(f) {
          return f >= 97 && f <= 122 || f >= 65 && f <= 90;
        }
        function C2(f) {
          return N2(f) || f === 95;
        }
        function gD(f) {
          return N2(f) || ns(f) || f === 95;
        }
        function ED(f) {
          var E;
          let D = Number.MAX_SAFE_INTEGER, w = null, N = -1;
          for (let ge = 0; ge < f.length; ++ge) {
            var $;
            let Pe = f[ge], et = _D(Pe);
            et !== Pe.length && (w = ($ = w) !== null && $ !== void 0 ? $ : ge, N = ge, ge !== 0 && et < D && (D = et));
          }
          return f.map((ge, Pe) => Pe === 0 ? ge : ge.slice(D)).slice((E = w) !== null && E !== void 0 ? E : 0, N + 1);
        }
        function _D(f) {
          let E = 0;
          for (; E < f.length && mD(f.charCodeAt(E)); ) ++E;
          return E;
        }
        var W;
        (function(f) {
          f.SOF = "<SOF>", f.EOF = "<EOF>", f.BANG = "!", f.DOLLAR = "$", f.AMP = "&", f.PAREN_L = "(", f.PAREN_R = ")", f.SPREAD = "...", f.COLON = ":", f.EQUALS = "=", f.AT = "@", f.BRACKET_L = "[", f.BRACKET_R = "]", f.BRACE_L = "{", f.PIPE = "|", f.BRACE_R = "}", f.NAME = "Name", f.INT = "Int", f.FLOAT = "Float", f.STRING = "String", f.BLOCK_STRING = "BlockString", f.COMMENT = "Comment";
        })(W || (W = {}));
        var DD = class {
          constructor(f) {
            let E = new De(W.SOF, 0, 0, 0, 0);
            this.source = f, this.lastToken = E, this.token = E, this.line = 1, this.lineStart = 0;
          }
          get [Symbol.toStringTag]() {
            return "Lexer";
          }
          advance() {
            return this.lastToken = this.token, this.token = this.lookahead();
          }
          lookahead() {
            let f = this.token;
            if (f.kind !== W.EOF) do
              if (f.next) f = f.next;
              else {
                let E = bD(this, f.end);
                f.next = E, E.prev = f, f = E;
              }
            while (f.kind === W.COMMENT);
            return f;
          }
        };
        function vD(f) {
          return f === W.BANG || f === W.DOLLAR || f === W.AMP || f === W.PAREN_L || f === W.PAREN_R || f === W.SPREAD || f === W.COLON || f === W.EQUALS || f === W.AT || f === W.BRACKET_L || f === W.BRACKET_R || f === W.BRACE_L || f === W.PIPE || f === W.BRACE_R;
        }
        function ua(f) {
          return f >= 0 && f <= 55295 || f >= 57344 && f <= 1114111;
        }
        function ko(f, E) {
          return T2(f.charCodeAt(E)) && w2(f.charCodeAt(E + 1));
        }
        function T2(f) {
          return f >= 55296 && f <= 56319;
        }
        function w2(f) {
          return f >= 56320 && f <= 57343;
        }
        function Di(f, E) {
          let D = f.source.body.codePointAt(E);
          if (D === void 0) return W.EOF;
          if (D >= 32 && D <= 126) {
            let w = String.fromCodePoint(D);
            return w === '"' ? `'"'` : `"${w}"`;
          }
          return "U+" + D.toString(16).toUpperCase().padStart(4, "0");
        }
        function mt(f, E, D, w, N) {
          let $ = f.line, ge = 1 + D - f.lineStart;
          return new De(E, D, w, $, ge, N);
        }
        function bD(f, E) {
          let D = f.source.body, w = D.length, N = E;
          for (; N < w; ) {
            let $ = D.charCodeAt(N);
            switch ($) {
              case 65279:
              case 9:
              case 32:
              case 44:
                ++N;
                continue;
              case 10:
                ++N, ++f.line, f.lineStart = N;
                continue;
              case 13:
                D.charCodeAt(N + 1) === 10 ? N += 2 : ++N, ++f.line, f.lineStart = N;
                continue;
              case 35:
                return yD(f, N);
              case 33:
                return mt(f, W.BANG, N, N + 1);
              case 36:
                return mt(f, W.DOLLAR, N, N + 1);
              case 38:
                return mt(f, W.AMP, N, N + 1);
              case 40:
                return mt(f, W.PAREN_L, N, N + 1);
              case 41:
                return mt(f, W.PAREN_R, N, N + 1);
              case 46:
                if (D.charCodeAt(N + 1) === 46 && D.charCodeAt(N + 2) === 46) return mt(f, W.SPREAD, N, N + 3);
                break;
              case 58:
                return mt(f, W.COLON, N, N + 1);
              case 61:
                return mt(f, W.EQUALS, N, N + 1);
              case 64:
                return mt(f, W.AT, N, N + 1);
              case 91:
                return mt(f, W.BRACKET_L, N, N + 1);
              case 93:
                return mt(f, W.BRACKET_R, N, N + 1);
              case 123:
                return mt(f, W.BRACE_L, N, N + 1);
              case 124:
                return mt(f, W.PIPE, N, N + 1);
              case 125:
                return mt(f, W.BRACE_R, N, N + 1);
              case 34:
                return D.charCodeAt(N + 1) === 34 && D.charCodeAt(N + 2) === 34 ? SD(f, N) : CD(f, N);
            }
            if (ns($) || $ === 45) return ND(f, N, $);
            if (C2($)) return LD(f, N);
            throw wt(f.source, N, $ === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ua($) || ko(D, N) ? `Unexpected character: ${Di(f, N)}.` : `Invalid character: ${Di(f, N)}.`);
          }
          return mt(f, W.EOF, w, w);
        }
        function yD(f, E) {
          let D = f.source.body, w = D.length, N = E + 1;
          for (; N < w; ) {
            let $ = D.charCodeAt(N);
            if ($ === 10 || $ === 13) break;
            if (ua($)) ++N;
            else if (ko(D, N)) N += 2;
            else break;
          }
          return mt(f, W.COMMENT, E, N, D.slice(E + 1, N));
        }
        function ND(f, E, D) {
          let w = f.source.body, N = E, $ = D, ge = !1;
          if ($ === 45 && ($ = w.charCodeAt(++N)), $ === 48) {
            if ($ = w.charCodeAt(++N), ns($)) throw wt(f.source, N, `Invalid number, unexpected digit after 0: ${Di(f, N)}.`);
          } else N = y1(f, N, $), $ = w.charCodeAt(N);
          if ($ === 46 && (ge = !0, $ = w.charCodeAt(++N), N = y1(f, N, $), $ = w.charCodeAt(N)), ($ === 69 || $ === 101) && (ge = !0, $ = w.charCodeAt(++N), ($ === 43 || $ === 45) && ($ = w.charCodeAt(++N)), N = y1(f, N, $), $ = w.charCodeAt(N)), $ === 46 || C2($)) throw wt(f.source, N, `Invalid number, expected digit but got: ${Di(f, N)}.`);
          return mt(f, ge ? W.FLOAT : W.INT, E, N, w.slice(E, N));
        }
        function y1(f, E, D) {
          if (!ns(D)) throw wt(f.source, E, `Invalid number, expected digit but got: ${Di(f, E)}.`);
          let w = f.source.body, N = E + 1;
          for (; ns(w.charCodeAt(N)); ) ++N;
          return N;
        }
        function CD(f, E) {
          let D = f.source.body, w = D.length, N = E + 1, $ = N, ge = "";
          for (; N < w; ) {
            let Pe = D.charCodeAt(N);
            if (Pe === 34) return ge += D.slice($, N), mt(f, W.STRING, E, N + 1, ge);
            if (Pe === 92) {
              ge += D.slice($, N);
              let et = D.charCodeAt(N + 1) === 117 ? D.charCodeAt(N + 2) === 123 ? TD(f, N) : wD(f, N) : AD(f, N);
              ge += et.value, N += et.size, $ = N;
              continue;
            }
            if (Pe === 10 || Pe === 13) break;
            if (ua(Pe)) ++N;
            else if (ko(D, N)) N += 2;
            else throw wt(f.source, N, `Invalid character within String: ${Di(f, N)}.`);
          }
          throw wt(f.source, N, "Unterminated string.");
        }
        function TD(f, E) {
          let D = f.source.body, w = 0, N = 3;
          for (; N < 12; ) {
            let $ = D.charCodeAt(E + N++);
            if ($ === 125) {
              if (N < 5 || !ua(w)) break;
              return { value: String.fromCodePoint(w), size: N };
            }
            if (w = w << 4 | rs($), w < 0) break;
          }
          throw wt(f.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + N)}".`);
        }
        function wD(f, E) {
          let D = f.source.body, w = A2(D, E + 2);
          if (ua(w)) return { value: String.fromCodePoint(w), size: 6 };
          if (T2(w) && D.charCodeAt(E + 6) === 92 && D.charCodeAt(E + 7) === 117) {
            let N = A2(D, E + 8);
            if (w2(N)) return { value: String.fromCodePoint(w, N), size: 12 };
          }
          throw wt(f.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + 6)}".`);
        }
        function A2(f, E) {
          return rs(f.charCodeAt(E)) << 12 | rs(f.charCodeAt(E + 1)) << 8 | rs(f.charCodeAt(E + 2)) << 4 | rs(f.charCodeAt(E + 3));
        }
        function rs(f) {
          return f >= 48 && f <= 57 ? f - 48 : f >= 65 && f <= 70 ? f - 55 : f >= 97 && f <= 102 ? f - 87 : -1;
        }
        function AD(f, E) {
          let D = f.source.body;
          switch (D.charCodeAt(E + 1)) {
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
              return { value: `
`, size: 2 };
            case 114:
              return { value: "\r", size: 2 };
            case 116:
              return { value: "	", size: 2 };
          }
          throw wt(f.source, E, `Invalid character escape sequence: "${D.slice(E, E + 2)}".`);
        }
        function SD(f, E) {
          let D = f.source.body, w = D.length, N = f.lineStart, $ = E + 3, ge = $, Pe = "", et = [];
          for (; $ < w; ) {
            let Qt = D.charCodeAt($);
            if (Qt === 34 && D.charCodeAt($ + 1) === 34 && D.charCodeAt($ + 2) === 34) {
              Pe += D.slice(ge, $), et.push(Pe);
              let At = mt(f, W.BLOCK_STRING, E, $ + 3, ED(et).join(`
`));
              return f.line += et.length - 1, f.lineStart = N, At;
            }
            if (Qt === 92 && D.charCodeAt($ + 1) === 34 && D.charCodeAt($ + 2) === 34 && D.charCodeAt($ + 3) === 34) {
              Pe += D.slice(ge, $), ge = $ + 1, $ += 4;
              continue;
            }
            if (Qt === 10 || Qt === 13) {
              Pe += D.slice(ge, $), et.push(Pe), Qt === 13 && D.charCodeAt($ + 1) === 10 ? $ += 2 : ++$, Pe = "", ge = $, N = $;
              continue;
            }
            if (ua(Qt)) ++$;
            else if (ko(D, $)) $ += 2;
            else throw wt(f.source, $, `Invalid character within String: ${Di(f, $)}.`);
          }
          throw wt(f.source, $, "Unterminated string.");
        }
        function LD(f, E) {
          let D = f.source.body, w = D.length, N = E + 1;
          for (; N < w; ) {
            let $ = D.charCodeAt(N);
            if (gD($)) ++N;
            else break;
          }
          return mt(f, W.NAME, E, N, D.slice(E, N));
        }
        function N1(f, E) {
          throw new Error(E);
        }
        function S2(f) {
          return Mo(f, []);
        }
        function Mo(f, E) {
          switch (typeof f) {
            case "string":
              return JSON.stringify(f);
            case "function":
              return f.name ? `[function ${f.name}]` : "[function]";
            case "object":
              return FD(f, E);
            default:
              return String(f);
          }
        }
        function FD(f, E) {
          if (f === null) return "null";
          if (E.includes(f)) return "[Circular]";
          let D = [...E, f];
          if (ID(f)) {
            let w = f.toJSON();
            if (w !== f) return typeof w == "string" ? w : Mo(w, D);
          } else if (Array.isArray(f)) return OD(f, D);
          return RD(f, D);
        }
        function ID(f) {
          return typeof f.toJSON == "function";
        }
        function RD(f, E) {
          let D = Object.entries(f);
          return D.length === 0 ? "{}" : E.length > 2 ? "[" + xD(f) + "]" : "{ " + D.map(([w, N]) => w + ": " + Mo(N, E)).join(", ") + " }";
        }
        function OD(f, E) {
          if (f.length === 0) return "[]";
          if (E.length > 2) return "[Array]";
          let D = Math.min(10, f.length), w = f.length - D, N = [];
          for (let $ = 0; $ < D; ++$) N.push(Mo(f[$], E));
          return w === 1 ? N.push("... 1 more item") : w > 1 && N.push(`... ${w} more items`), "[" + N.join(", ") + "]";
        }
        function xD(f) {
          let E = Object.prototype.toString.call(f).replace(/^\[object /, "").replace(/]$/, "");
          if (E === "Object" && typeof f.constructor == "function") {
            let D = f.constructor.name;
            if (typeof D == "string" && D !== "") return D;
          }
          return E;
        }
        var kD = globalThis.process && !0, MD = kD ? function(f, E) {
          return f instanceof E;
        } : function(f, E) {
          if (f instanceof E) return !0;
          if (typeof f == "object" && f !== null) {
            var D;
            let w = E.prototype[Symbol.toStringTag], N = Symbol.toStringTag in f ? f[Symbol.toStringTag] : (D = f.constructor) === null || D === void 0 ? void 0 : D.name;
            if (w === N) {
              let $ = S2(f);
              throw new Error(`Cannot use ${w} "${$}" from another module or realm.

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
        }, L2 = class {
          constructor(f, E = "GraphQL request", D = { line: 1, column: 1 }) {
            typeof f == "string" || N1(!1, `Body must be a string. Received: ${S2(f)}.`), this.body = f, this.name = E, this.locationOffset = D, this.locationOffset.line > 0 || N1(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || N1(!1, "column in locationOffset is 1-indexed and must be positive.");
          }
          get [Symbol.toStringTag]() {
            return "Source";
          }
        };
        function UD(f) {
          return MD(f, L2);
        }
        function PD(f, E) {
          let D = new BD(f, E), w = D.parseDocument();
          return Object.defineProperty(w, "tokenCount", { enumerable: !1, value: D.tokenCount }), w;
        }
        var BD = class {
          constructor(f, E = {}) {
            let D = UD(f) ? f : new L2(f);
            this._lexer = new DD(D), this._options = E, this._tokenCounter = 0;
          }
          get tokenCount() {
            return this._tokenCounter;
          }
          parseName() {
            let f = this.expectToken(W.NAME);
            return this.node(f, { kind: ve.NAME, value: f.value });
          }
          parseDocument() {
            return this.node(this._lexer.token, { kind: ve.DOCUMENT, definitions: this.many(W.SOF, this.parseDefinition, W.EOF) });
          }
          parseDefinition() {
            if (this.peek(W.BRACE_L)) return this.parseOperationDefinition();
            let f = this.peekDescription(), E = f ? this._lexer.lookahead() : this._lexer.token;
            if (E.kind === W.NAME) {
              switch (E.value) {
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
              if (f) throw wt(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
              switch (E.value) {
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
            throw this.unexpected(E);
          }
          parseOperationDefinition() {
            let f = this._lexer.token;
            if (this.peek(W.BRACE_L)) return this.node(f, { kind: ve.OPERATION_DEFINITION, operation: Yn.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
            let E = this.parseOperationType(), D;
            return this.peek(W.NAME) && (D = this.parseName()), this.node(f, { kind: ve.OPERATION_DEFINITION, operation: E, name: D, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseOperationType() {
            let f = this.expectToken(W.NAME);
            switch (f.value) {
              case "query":
                return Yn.QUERY;
              case "mutation":
                return Yn.MUTATION;
              case "subscription":
                return Yn.SUBSCRIPTION;
            }
            throw this.unexpected(f);
          }
          parseVariableDefinitions() {
            return this.optionalMany(W.PAREN_L, this.parseVariableDefinition, W.PAREN_R);
          }
          parseVariableDefinition() {
            return this.node(this._lexer.token, { kind: ve.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(W.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(W.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
          }
          parseVariable() {
            let f = this._lexer.token;
            return this.expectToken(W.DOLLAR), this.node(f, { kind: ve.VARIABLE, name: this.parseName() });
          }
          parseSelectionSet() {
            return this.node(this._lexer.token, { kind: ve.SELECTION_SET, selections: this.many(W.BRACE_L, this.parseSelection, W.BRACE_R) });
          }
          parseSelection() {
            return this.peek(W.SPREAD) ? this.parseFragment() : this.parseField();
          }
          parseField() {
            let f = this._lexer.token, E = this.parseName(), D, w;
            return this.expectOptionalToken(W.COLON) ? (D = E, w = this.parseName()) : w = E, this.node(f, { kind: ve.FIELD, alias: D, name: w, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(W.BRACE_L) ? this.parseSelectionSet() : void 0 });
          }
          parseArguments(f) {
            let E = f ? this.parseConstArgument : this.parseArgument;
            return this.optionalMany(W.PAREN_L, E, W.PAREN_R);
          }
          parseArgument(f = !1) {
            let E = this._lexer.token, D = this.parseName();
            return this.expectToken(W.COLON), this.node(E, { kind: ve.ARGUMENT, name: D, value: this.parseValueLiteral(f) });
          }
          parseConstArgument() {
            return this.parseArgument(!0);
          }
          parseFragment() {
            let f = this._lexer.token;
            this.expectToken(W.SPREAD);
            let E = this.expectOptionalKeyword("on");
            return !E && this.peek(W.NAME) ? this.node(f, { kind: ve.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1) }) : this.node(f, { kind: ve.INLINE_FRAGMENT, typeCondition: E ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseFragmentDefinition() {
            let f = this._lexer.token;
            return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(f, { kind: ve.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() }) : this.node(f, { kind: ve.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseFragmentName() {
            if (this._lexer.token.value === "on") throw this.unexpected();
            return this.parseName();
          }
          parseValueLiteral(f) {
            let E = this._lexer.token;
            switch (E.kind) {
              case W.BRACKET_L:
                return this.parseList(f);
              case W.BRACE_L:
                return this.parseObject(f);
              case W.INT:
                return this.advanceLexer(), this.node(E, { kind: ve.INT, value: E.value });
              case W.FLOAT:
                return this.advanceLexer(), this.node(E, { kind: ve.FLOAT, value: E.value });
              case W.STRING:
              case W.BLOCK_STRING:
                return this.parseStringLiteral();
              case W.NAME:
                switch (this.advanceLexer(), E.value) {
                  case "true":
                    return this.node(E, { kind: ve.BOOLEAN, value: !0 });
                  case "false":
                    return this.node(E, { kind: ve.BOOLEAN, value: !1 });
                  case "null":
                    return this.node(E, { kind: ve.NULL });
                  default:
                    return this.node(E, { kind: ve.ENUM, value: E.value });
                }
              case W.DOLLAR:
                if (f) if (this.expectToken(W.DOLLAR), this._lexer.token.kind === W.NAME) {
                  let D = this._lexer.token.value;
                  throw wt(this._lexer.source, E.start, `Unexpected variable "$${D}" in constant value.`);
                } else throw this.unexpected(E);
                return this.parseVariable();
              default:
                throw this.unexpected();
            }
          }
          parseConstValueLiteral() {
            return this.parseValueLiteral(!0);
          }
          parseStringLiteral() {
            let f = this._lexer.token;
            return this.advanceLexer(), this.node(f, { kind: ve.STRING, value: f.value, block: f.kind === W.BLOCK_STRING });
          }
          parseList(f) {
            let E = () => this.parseValueLiteral(f);
            return this.node(this._lexer.token, { kind: ve.LIST, values: this.any(W.BRACKET_L, E, W.BRACKET_R) });
          }
          parseObject(f) {
            let E = () => this.parseObjectField(f);
            return this.node(this._lexer.token, { kind: ve.OBJECT, fields: this.any(W.BRACE_L, E, W.BRACE_R) });
          }
          parseObjectField(f) {
            let E = this._lexer.token, D = this.parseName();
            return this.expectToken(W.COLON), this.node(E, { kind: ve.OBJECT_FIELD, name: D, value: this.parseValueLiteral(f) });
          }
          parseDirectives(f) {
            let E = [];
            for (; this.peek(W.AT); ) E.push(this.parseDirective(f));
            return E;
          }
          parseConstDirectives() {
            return this.parseDirectives(!0);
          }
          parseDirective(f) {
            let E = this._lexer.token;
            return this.expectToken(W.AT), this.node(E, { kind: ve.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(f) });
          }
          parseTypeReference() {
            let f = this._lexer.token, E;
            if (this.expectOptionalToken(W.BRACKET_L)) {
              let D = this.parseTypeReference();
              this.expectToken(W.BRACKET_R), E = this.node(f, { kind: ve.LIST_TYPE, type: D });
            } else E = this.parseNamedType();
            return this.expectOptionalToken(W.BANG) ? this.node(f, { kind: ve.NON_NULL_TYPE, type: E }) : E;
          }
          parseNamedType() {
            return this.node(this._lexer.token, { kind: ve.NAMED_TYPE, name: this.parseName() });
          }
          peekDescription() {
            return this.peek(W.STRING) || this.peek(W.BLOCK_STRING);
          }
          parseDescription() {
            if (this.peekDescription()) return this.parseStringLiteral();
          }
          parseSchemaDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("schema");
            let D = this.parseConstDirectives(), w = this.many(W.BRACE_L, this.parseOperationTypeDefinition, W.BRACE_R);
            return this.node(f, { kind: ve.SCHEMA_DEFINITION, description: E, directives: D, operationTypes: w });
          }
          parseOperationTypeDefinition() {
            let f = this._lexer.token, E = this.parseOperationType();
            this.expectToken(W.COLON);
            let D = this.parseNamedType();
            return this.node(f, { kind: ve.OPERATION_TYPE_DEFINITION, operation: E, type: D });
          }
          parseScalarTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("scalar");
            let D = this.parseName(), w = this.parseConstDirectives();
            return this.node(f, { kind: ve.SCALAR_TYPE_DEFINITION, description: E, name: D, directives: w });
          }
          parseObjectTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("type");
            let D = this.parseName(), w = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), $ = this.parseFieldsDefinition();
            return this.node(f, { kind: ve.OBJECT_TYPE_DEFINITION, description: E, name: D, interfaces: w, directives: N, fields: $ });
          }
          parseImplementsInterfaces() {
            return this.expectOptionalKeyword("implements") ? this.delimitedMany(W.AMP, this.parseNamedType) : [];
          }
          parseFieldsDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseFieldDefinition, W.BRACE_R);
          }
          parseFieldDefinition() {
            let f = this._lexer.token, E = this.parseDescription(), D = this.parseName(), w = this.parseArgumentDefs();
            this.expectToken(W.COLON);
            let N = this.parseTypeReference(), $ = this.parseConstDirectives();
            return this.node(f, { kind: ve.FIELD_DEFINITION, description: E, name: D, arguments: w, type: N, directives: $ });
          }
          parseArgumentDefs() {
            return this.optionalMany(W.PAREN_L, this.parseInputValueDef, W.PAREN_R);
          }
          parseInputValueDef() {
            let f = this._lexer.token, E = this.parseDescription(), D = this.parseName();
            this.expectToken(W.COLON);
            let w = this.parseTypeReference(), N;
            this.expectOptionalToken(W.EQUALS) && (N = this.parseConstValueLiteral());
            let $ = this.parseConstDirectives();
            return this.node(f, { kind: ve.INPUT_VALUE_DEFINITION, description: E, name: D, type: w, defaultValue: N, directives: $ });
          }
          parseInterfaceTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("interface");
            let D = this.parseName(), w = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), $ = this.parseFieldsDefinition();
            return this.node(f, { kind: ve.INTERFACE_TYPE_DEFINITION, description: E, name: D, interfaces: w, directives: N, fields: $ });
          }
          parseUnionTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("union");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseUnionMemberTypes();
            return this.node(f, { kind: ve.UNION_TYPE_DEFINITION, description: E, name: D, directives: w, types: N });
          }
          parseUnionMemberTypes() {
            return this.expectOptionalToken(W.EQUALS) ? this.delimitedMany(W.PIPE, this.parseNamedType) : [];
          }
          parseEnumTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("enum");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseEnumValuesDefinition();
            return this.node(f, { kind: ve.ENUM_TYPE_DEFINITION, description: E, name: D, directives: w, values: N });
          }
          parseEnumValuesDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseEnumValueDefinition, W.BRACE_R);
          }
          parseEnumValueDefinition() {
            let f = this._lexer.token, E = this.parseDescription(), D = this.parseEnumValueName(), w = this.parseConstDirectives();
            return this.node(f, { kind: ve.ENUM_VALUE_DEFINITION, description: E, name: D, directives: w });
          }
          parseEnumValueName() {
            if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw wt(this._lexer.source, this._lexer.token.start, `${Uo(this._lexer.token)} is reserved and cannot be used for an enum value.`);
            return this.parseName();
          }
          parseInputObjectTypeDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("input");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseInputFieldsDefinition();
            return this.node(f, { kind: ve.INPUT_OBJECT_TYPE_DEFINITION, description: E, name: D, directives: w, fields: N });
          }
          parseInputFieldsDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseInputValueDef, W.BRACE_R);
          }
          parseTypeSystemExtension() {
            let f = this._lexer.lookahead();
            if (f.kind === W.NAME) switch (f.value) {
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
            throw this.unexpected(f);
          }
          parseSchemaExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("schema");
            let E = this.parseConstDirectives(), D = this.optionalMany(W.BRACE_L, this.parseOperationTypeDefinition, W.BRACE_R);
            if (E.length === 0 && D.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.SCHEMA_EXTENSION, directives: E, operationTypes: D });
          }
          parseScalarTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("scalar");
            let E = this.parseName(), D = this.parseConstDirectives();
            if (D.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.SCALAR_TYPE_EXTENSION, name: E, directives: D });
          }
          parseObjectTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("type");
            let E = this.parseName(), D = this.parseImplementsInterfaces(), w = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && w.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.OBJECT_TYPE_EXTENSION, name: E, interfaces: D, directives: w, fields: N });
          }
          parseInterfaceTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("interface");
            let E = this.parseName(), D = this.parseImplementsInterfaces(), w = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && w.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.INTERFACE_TYPE_EXTENSION, name: E, interfaces: D, directives: w, fields: N });
          }
          parseUnionTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("union");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseUnionMemberTypes();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.UNION_TYPE_EXTENSION, name: E, directives: D, types: w });
          }
          parseEnumTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("enum");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseEnumValuesDefinition();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.ENUM_TYPE_EXTENSION, name: E, directives: D, values: w });
          }
          parseInputObjectTypeExtension() {
            let f = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("input");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseInputFieldsDefinition();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(f, { kind: ve.INPUT_OBJECT_TYPE_EXTENSION, name: E, directives: D, fields: w });
          }
          parseDirectiveDefinition() {
            let f = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("directive"), this.expectToken(W.AT);
            let D = this.parseName(), w = this.parseArgumentDefs(), N = this.expectOptionalKeyword("repeatable");
            this.expectKeyword("on");
            let $ = this.parseDirectiveLocations();
            return this.node(f, { kind: ve.DIRECTIVE_DEFINITION, description: E, name: D, arguments: w, repeatable: N, locations: $ });
          }
          parseDirectiveLocations() {
            return this.delimitedMany(W.PIPE, this.parseDirectiveLocation);
          }
          parseDirectiveLocation() {
            let f = this._lexer.token, E = this.parseName();
            if (Object.prototype.hasOwnProperty.call(b1, E.value)) return E;
            throw this.unexpected(f);
          }
          node(f, E) {
            return this._options.noLocation !== !0 && (E.loc = new Ot(f, this._lexer.lastToken, this._lexer.source)), E;
          }
          peek(f) {
            return this._lexer.token.kind === f;
          }
          expectToken(f) {
            let E = this._lexer.token;
            if (E.kind === f) return this.advanceLexer(), E;
            throw wt(this._lexer.source, E.start, `Expected ${F2(f)}, found ${Uo(E)}.`);
          }
          expectOptionalToken(f) {
            return this._lexer.token.kind === f ? (this.advanceLexer(), !0) : !1;
          }
          expectKeyword(f) {
            let E = this._lexer.token;
            if (E.kind === W.NAME && E.value === f) this.advanceLexer();
            else throw wt(this._lexer.source, E.start, `Expected "${f}", found ${Uo(E)}.`);
          }
          expectOptionalKeyword(f) {
            let E = this._lexer.token;
            return E.kind === W.NAME && E.value === f ? (this.advanceLexer(), !0) : !1;
          }
          unexpected(f) {
            let E = f ?? this._lexer.token;
            return wt(this._lexer.source, E.start, `Unexpected ${Uo(E)}.`);
          }
          any(f, E, D) {
            this.expectToken(f);
            let w = [];
            for (; !this.expectOptionalToken(D); ) w.push(E.call(this));
            return w;
          }
          optionalMany(f, E, D) {
            if (this.expectOptionalToken(f)) {
              let w = [];
              do
                w.push(E.call(this));
              while (!this.expectOptionalToken(D));
              return w;
            }
            return [];
          }
          many(f, E, D) {
            this.expectToken(f);
            let w = [];
            do
              w.push(E.call(this));
            while (!this.expectOptionalToken(D));
            return w;
          }
          delimitedMany(f, E) {
            this.expectOptionalToken(f);
            let D = [];
            do
              D.push(E.call(this));
            while (this.expectOptionalToken(f));
            return D;
          }
          advanceLexer() {
            let { maxTokens: f } = this._options, E = this._lexer.advance();
            if (E.kind !== W.EOF && (++this._tokenCounter, f !== void 0 && this._tokenCounter > f)) throw wt(this._lexer.source, E.start, `Document contains more that ${f} tokens. Parsing aborted.`);
          }
        };
        function Uo(f) {
          let E = f.value;
          return F2(f.kind) + (E != null ? ` "${E}"` : "");
        }
        function F2(f) {
          return vD(f) ? `"${f}"` : f;
        }
        function $D(f, E) {
          let D = new SyntaxError(f + " (" + E.loc.start.line + ":" + E.loc.start.column + ")");
          return Object.assign(D, E);
        }
        var VD = $D;
        function KD(f) {
          let E = [], { startToken: D, endToken: w } = f.loc;
          for (let N = D; N !== w; N = N.next) N.kind === "Comment" && E.push({ ...N, loc: { start: N.start, end: N.end } });
          return E;
        }
        var jD = { allowLegacyFragmentVariables: !0 };
        function qD(f) {
          if ((f == null ? void 0 : f.name) === "GraphQLError") {
            let { message: E, locations: [D] } = f;
            return VD(E, { loc: { start: D }, cause: f });
          }
          return f;
        }
        function GD(f) {
          let E;
          try {
            E = PD(f, jD);
          } catch (D) {
            throw qD(D);
          }
          return E.comments = KD(E), E;
        }
        var HD = { parse: GD, astFormat: "graphql", hasPragma: pt, locStart: te, locEnd: Le }, WD = { graphql: iD };
        return l(u);
      });
    }), R;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
    })(R || (R = {}));
    var t5 = class {
      constructor() {
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
          setTimeout(() => {
            throw e.stack ? $l.isErrorNoTelemetry(e) ? new $l(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
          }, 0);
        };
      }
      addListener(e) {
        return this.listeners.push(e), () => {
          this._removeListener(e);
        };
      }
      emit(e) {
        this.listeners.forEach((t) => {
          t(e);
        });
      }
      _removeListener(e) {
        this.listeners.splice(this.listeners.indexOf(e), 1);
      }
      setUnexpectedErrorHandler(e) {
        this.unexpectedErrorHandler = e;
      }
      getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
      }
      onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e);
      }
      onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
      }
    }, n5 = new t5();
    function La(e) {
      r5(e) || n5.onUnexpectedError(e);
    }
    function Pl(e) {
      if (e instanceof Error) {
        let { name: t, message: n, cause: r } = e, i = e.stacktrace || e.stack;
        return { $isError: !0, name: t, message: n, stack: i, noTelemetry: $l.isErrorNoTelemetry(e), cause: r ? Pl(r) : void 0, code: e.code };
      }
      return e;
    }
    var Bl = "Canceled";
    function r5(e) {
      return e instanceof i5 ? !0 : e instanceof Error && e.name === Bl && e.message === Bl;
    }
    var i5 = class extends Error {
      constructor() {
        super(Bl), this.name = this.message;
      }
    };
    dr = class extends Error {
      static is(t) {
        return t instanceof dr || t instanceof Error && t.name === dr._name;
      }
      constructor(t) {
        super(t), this.name = dr._name;
      }
    }, dr._name = "PendingMigrationError";
    var $l = class T1 extends Error {
      constructor(t) {
        super(t), this.name = "CodeExpectedError";
      }
      static fromError(t) {
        if (t instanceof T1) return t;
        let n = new T1();
        return n.message = t.message, n.stack = t.stack, n;
      }
      static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
      }
    }, ut = class k2 extends Error {
      constructor(t) {
        super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, k2.prototype);
      }
    };
    function a5(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) {
        let i = t(r), a = n[i];
        a || (a = n[i] = []), a.push(r);
      }
      return n;
    }
    function s5(e, t) {
      let n = this, r = !1, i;
      return function() {
        return r || (r = !0, t || (i = e.apply(n, arguments))), i;
      };
    }
    function Fi(e, t) {
      let n = Ii(e, t);
      return n === -1 ? void 0 : e[n];
    }
    function Ii(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? i = s + 1 : a = s;
      }
      return i - 1;
    }
    function o5(e, t) {
      let n = Vl(e, t);
      return n === e.length ? void 0 : e[n];
    }
    function Vl(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? a = s : i = s + 1;
      }
      return i;
    }
    var Rd = (hi = class {
      constructor(t) {
        this._array = t, this._findLastMonotonousLastIdx = 0;
      }
      findLastMonotonous(t) {
        if (hi.assertInvariants) {
          if (this._prevFindLastPredicate) {
            for (let r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
          this._prevFindLastPredicate = t;
        }
        let n = Ii(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
      }
    }, hi.assertInvariants = !1, hi);
    function Od(e, t, n = (r, i) => r === i) {
      if (e === t) return !0;
      if (!e || !t || e.length !== t.length) return !1;
      for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
      return !0;
    }
    function* l5(e, t) {
      let n, r;
      for (let i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
      n && (yield n);
    }
    function u5(e, t) {
      for (let n = 0; n <= e.length; n++) t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
    }
    function c5(e, t) {
      for (let n = 0; n < e.length; n++) t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
    }
    function d5(e, t) {
      for (let n of t) e.push(n);
    }
    var Kl;
    (function(e) {
      function t(a) {
        return a < 0;
      }
      e.isLessThan = t;
      function n(a) {
        return a <= 0;
      }
      e.isLessThanOrEqual = n;
      function r(a) {
        return a > 0;
      }
      e.isGreaterThan = r;
      function i(a) {
        return a === 0;
      }
      e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
    })(Kl || (Kl = {}));
    function Yr(e, t) {
      return (n, r) => t(e(n), e(r));
    }
    var Ri = (e, t) => e - t;
    function h5(e) {
      return (t, n) => -e(t, n);
    }
    hr = class {
      constructor(t) {
        this.iterate = t;
      }
      forEach(t) {
        this.iterate((n) => (t(n), !0));
      }
      toArray() {
        let t = [];
        return this.iterate((n) => (t.push(n), !0)), t;
      }
      filter(t) {
        return new hr((n) => this.iterate((r) => t(r) ? n(r) : !0));
      }
      map(t) {
        return new hr((n) => this.iterate((r) => n(t(r))));
      }
      some(t) {
        let n = !1;
        return this.iterate((r) => (n = t(r), !n)), n;
      }
      findFirst(t) {
        let n;
        return this.iterate((r) => t(r) ? (n = r, !1) : !0), n;
      }
      findLast(t) {
        let n;
        return this.iterate((r) => (t(r) && (n = r), !0)), n;
      }
      findLastMaxBy(t) {
        let n, r = !0;
        return this.iterate((i) => ((r || Kl.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
      }
    }, hr.empty = new hr((t) => {
    });
    function f5(e, t) {
      return e.reduce((n, r) => n + t(r), 0);
    }
    var xd, kd, p5 = class {
      constructor(e, t) {
        this.uri = e, this.value = t;
      }
    };
    function m5(e) {
      return Array.isArray(e);
    }
    var g5 = (jn = class {
      constructor(t, n) {
        if (this[xd] = "ResourceMap", t instanceof jn) this.map = new Map(t.map), this.toKey = n ?? jn.defaultToKey;
        else if (m5(t)) {
          this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? jn.defaultToKey;
          for (let [r, i] of t) this.set(r, i);
        } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? jn.defaultToKey;
      }
      set(t, n) {
        return this.map.set(this.toKey(t), new p5(t, n)), this;
      }
      get(t) {
        var n;
        return (n = this.map.get(this.toKey(t))) == null ? void 0 : n.value;
      }
      has(t) {
        return this.map.has(this.toKey(t));
      }
      get size() {
        return this.map.size;
      }
      clear() {
        this.map.clear();
      }
      delete(t) {
        return this.map.delete(this.toKey(t));
      }
      forEach(t, n) {
        typeof n < "u" && (t = t.bind(n));
        for (let [r, i] of this.map) t(i.value, i.uri, this);
      }
      *values() {
        for (let t of this.map.values()) yield t.value;
      }
      *keys() {
        for (let t of this.map.values()) yield t.uri;
      }
      *entries() {
        for (let t of this.map.values()) yield [t.uri, t.value];
      }
      *[(xd = Symbol.toStringTag, Symbol.iterator)]() {
        for (let [, t] of this.map) yield [t.uri, t.value];
      }
    }, jn.defaultToKey = (t) => t.toString(), jn), kt;
    (function(e) {
      e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
    })(kt || (kt = {}));
    var E5 = class {
      constructor() {
        this[kd] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
      get(e, t = kt.None) {
        let n = this._map.get(e);
        if (n) return t !== kt.None && this.touch(n, t), n.value;
      }
      set(e, t, n = kt.None) {
        let r = this._map.get(e);
        if (r) r.value = t, n !== kt.None && this.touch(r, n);
        else {
          switch (r = { key: e, value: t, next: void 0, previous: void 0 }, n) {
            case kt.None:
              this.addItemLast(r);
              break;
            case kt.AsOld:
              this.addItemFirst(r);
              break;
            case kt.AsNew:
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
          if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
          r = r.next;
        }
      }
      keys() {
        let e = this, t = this._state, n = this._head, r = { [Symbol.iterator]() {
          return r;
        }, next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: n.key, done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        } };
        return r;
      }
      values() {
        let e = this, t = this._state, n = this._head, r = { [Symbol.iterator]() {
          return r;
        }, next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: n.value, done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        } };
        return r;
      }
      entries() {
        let e = this, t = this._state, n = this._head, r = { [Symbol.iterator]() {
          return r;
        }, next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (n) {
            let i = { value: [n.key, n.value], done: !1 };
            return n = n.next, i;
          } else return { value: void 0, done: !0 };
        } };
        return r;
      }
      [(kd = Symbol.toStringTag, Symbol.iterator)]() {
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
        if (!(t !== kt.AsOld && t !== kt.AsNew)) {
          if (t === kt.AsOld) {
            if (e === this._head) return;
            let n = e.next, r = e.previous;
            e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
          } else if (t === kt.AsNew) {
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
    }, _5 = class extends E5 {
      constructor(e, t = 1) {
        super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(e) {
        this._limit = e, this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(e) {
        this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
      }
      get(e, t = kt.AsNew) {
        return super.get(e, t);
      }
      peek(e) {
        return super.get(e, kt.None);
      }
      set(e, t) {
        return super.set(e, t, kt.AsNew), this;
      }
      checkTrim() {
        this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
      }
    }, D5 = class extends _5 {
      constructor(e, t = 1) {
        super(e, t);
      }
      trim(e) {
        this.trimOld(e);
      }
      set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
      }
    }, Md = class {
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
    function v5(e, t = "Unreachable") {
      throw new Error(t);
    }
    function b5(e, t = "unexpected state") {
      if (!e) throw typeof t == "string" ? new ut(`Assertion Failed: ${t}`) : t;
    }
    function Fa(e) {
      if (!e()) {
        debugger;
        e(), La(new ut("Assertion Failed"));
      }
    }
    function jl(e, t) {
      let n = 0;
      for (; n < e.length - 1; ) {
        let r = e[n], i = e[n + 1];
        if (!t(r, i)) return !1;
        n++;
      }
      return !0;
    }
    function y5(e) {
      return typeof e == "string";
    }
    function N5(e) {
      return !!e && typeof e[Symbol.iterator] == "function";
    }
    var Ps;
    (function(e) {
      function t(I) {
        return !!I && typeof I == "object" && typeof I[Symbol.iterator] == "function";
      }
      e.is = t;
      let n = Object.freeze([]);
      function r() {
        return n;
      }
      e.empty = r;
      function* i(I) {
        yield I;
      }
      e.single = i;
      function a(I) {
        return t(I) ? I : i(I);
      }
      e.wrap = a;
      function s(I) {
        return I || n;
      }
      e.from = s;
      function* o(I) {
        for (let B = I.length - 1; B >= 0; B--) yield I[B];
      }
      e.reverse = o;
      function l(I) {
        return !I || I[Symbol.iterator]().next().done === !0;
      }
      e.isEmpty = l;
      function u(I) {
        return I[Symbol.iterator]().next().value;
      }
      e.first = u;
      function c(I, B) {
        let S = 0;
        for (let K of I) if (B(K, S++)) return !0;
        return !1;
      }
      e.some = c;
      function d(I, B) {
        let S = 0;
        for (let K of I) if (!B(K, S++)) return !1;
        return !0;
      }
      e.every = d;
      function p(I, B) {
        for (let S of I) if (B(S)) return S;
      }
      e.find = p;
      function* m(I, B) {
        for (let S of I) B(S) && (yield S);
      }
      e.filter = m;
      function* g(I, B) {
        let S = 0;
        for (let K of I) yield B(K, S++);
      }
      e.map = g;
      function* _(I, B) {
        let S = 0;
        for (let K of I) yield* B(K, S++);
      }
      e.flatMap = _;
      function* L(...I) {
        for (let B of I) N5(B) ? yield* B : yield B;
      }
      e.concat = L;
      function A(I, B, S) {
        let K = S;
        for (let V of I) K = B(K, V);
        return K;
      }
      e.reduce = A;
      function F(I) {
        let B = 0;
        for (let S of I) B++;
        return B;
      }
      e.length = F;
      function* C(I, B, S = I.length) {
        for (B < -I.length && (B = 0), B < 0 && (B += I.length), S < 0 ? S += I.length : S > I.length && (S = I.length); B < S; B++) yield I[B];
      }
      e.slice = C;
      function x(I, B = Number.POSITIVE_INFINITY) {
        let S = [];
        if (B === 0) return [S, I];
        let K = I[Symbol.iterator]();
        for (let V = 0; V < B; V++) {
          let xe = K.next();
          if (xe.done) return [S, e.empty()];
          S.push(xe.value);
        }
        return [S, { [Symbol.iterator]() {
          return K;
        } }];
      }
      e.consume = x;
      async function U(I) {
        let B = [];
        for await (let S of I) B.push(S);
        return B;
      }
      e.asyncToArray = U;
      async function q(I) {
        let B = [];
        for await (let S of I) B = B.concat(S);
        return B;
      }
      e.asyncToArrayFlat = q;
    })(Ps || (Ps = {})), fi = class {
      constructor() {
        this.livingDisposables = /* @__PURE__ */ new Map();
      }
      getDisposableData(t) {
        let n = this.livingDisposables.get(t);
        return n || (n = { parent: null, source: null, isSingleton: !1, value: t, idx: fi.idx++ }, this.livingDisposables.set(t, n)), n;
      }
      trackDisposable(t) {
        let n = this.getDisposableData(t);
        n.source || (n.source = new Error().stack);
      }
      setParent(t, n) {
        let r = this.getDisposableData(t);
        r.parent = n;
      }
      markAsDisposed(t) {
        this.livingDisposables.delete(t);
      }
      markAsSingleton(t) {
        this.getDisposableData(t).isSingleton = !0;
      }
      getRootParent(t, n) {
        let r = n.get(t);
        if (r) return r;
        let i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
        return n.set(t, i), i;
      }
      getTrackedDisposables() {
        let t = /* @__PURE__ */ new Map();
        return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, t).isSingleton).flatMap(([n]) => n);
      }
      computeLeakingDisposables(t = 10, n) {
        let r;
        if (n) r = n;
        else {
          let l = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((d) => d.source !== null && !this.getRootParent(d, l).isSingleton);
          if (u.length === 0) return;
          let c = new Set(u.map((d) => d.value));
          if (r = u.filter((d) => !(d.parent && c.has(d.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
        }
        if (!r) return;
        function i(l) {
          function u(d, p) {
            for (; d.length > 0 && p.some((m) => typeof m == "string" ? m === d[0] : d[0].match(m)); ) d.shift();
          }
          let c = l.source.split(`
`).map((d) => d.trim().replace("at ", "")).filter((d) => d !== "");
          return u(c, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), c.reverse();
        }
        let a = new Md();
        for (let l of r) {
          let u = i(l);
          for (let c = 0; c <= u.length; c++) a.add(u.slice(0, c).join(`
`), l);
        }
        r.sort(Yr((l) => l.idx, Ri));
        let s = "", o = 0;
        for (let l of r.slice(0, t)) {
          o++;
          let u = i(l), c = [];
          for (let d = 0; d < u.length; d++) {
            let p = u[d];
            p = `(shared with ${a.get(u.slice(0, d + 1).join(`
`)).size}/${r.length} leaks) at ${p}`;
            let m = a.get(u.slice(0, d).join(`
`)), g = a5([...m].map((_) => i(_)[d]), (_) => _);
            delete g[u[d]];
            for (let [_, L] of Object.entries(g)) c.unshift(`    - stacktraces of ${L.length} other leaks continue with ${_}`);
            c.unshift(p);
          }
          s += `


==================== Leaking disposable ${o}/${r.length}: ${l.value.constructor.name} ====================
${c.join(`
`)}
============================================================

`;
        }
        return r.length > t && (s += `


... and ${r.length - t} more leaking disposables

`), { leaks: r, details: s };
      }
    }, fi.idx = 0;
    function JD(e) {
      return e;
    }
    function QD(e, t) {
    }
    function Ud(e) {
      if (Ps.is(e)) {
        let t = [];
        for (let n of e) if (n) try {
          n.dispose();
        } catch (r) {
          t.push(r);
        }
        if (t.length === 1) throw t[0];
        if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e;
      } else if (e) return e.dispose(), e;
    }
    function C5(...e) {
      return Ia(() => Ud(e));
    }
    function Ia(e) {
      return { dispose: s5(() => {
        e();
      }) };
    }
    var ql = (pi = class {
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
        if (this._toDispose.size !== 0) try {
          Ud(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
      }
      add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._isDisposed ? pi.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t;
      }
      delete(t) {
        if (t) {
          if (t === this) throw new Error("Cannot dispose a disposable on itself!");
          this._toDispose.delete(t), t.dispose();
        }
      }
      deleteAndLeak(t) {
        t && this._toDispose.has(t) && (this._toDispose.delete(t), void 0);
      }
    }, pi.DISABLE_DISPOSED_WARNING = !1, pi), Bs = (sa = class {
      constructor() {
        this._store = new ql(), this._store;
      }
      dispose() {
        this._store.dispose();
      }
      _register(t) {
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(t);
      }
    }, sa.None = Object.freeze({ dispose() {
    } }), sa), ze = (fr = class {
      constructor(t) {
        this.element = t, this.next = fr.Undefined, this.prev = fr.Undefined;
      }
    }, fr.Undefined = new fr(void 0), fr), T5 = class {
      constructor() {
        this._first = ze.Undefined, this._last = ze.Undefined, this._size = 0;
      }
      get size() {
        return this._size;
      }
      isEmpty() {
        return this._first === ze.Undefined;
      }
      clear() {
        let e = this._first;
        for (; e !== ze.Undefined; ) {
          let t = e.next;
          e.prev = ze.Undefined, e.next = ze.Undefined, e = t;
        }
        this._first = ze.Undefined, this._last = ze.Undefined, this._size = 0;
      }
      unshift(e) {
        return this._insert(e, !1);
      }
      push(e) {
        return this._insert(e, !0);
      }
      _insert(e, t) {
        let n = new ze(e);
        if (this._first === ze.Undefined) this._first = n, this._last = n;
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
        if (this._first !== ze.Undefined) {
          let e = this._first.element;
          return this._remove(this._first), e;
        }
      }
      pop() {
        if (this._last !== ze.Undefined) {
          let e = this._last.element;
          return this._remove(this._last), e;
        }
      }
      _remove(e) {
        if (e.prev !== ze.Undefined && e.next !== ze.Undefined) {
          let t = e.prev;
          t.next = e.next, e.next.prev = t;
        } else e.prev === ze.Undefined && e.next === ze.Undefined ? (this._first = ze.Undefined, this._last = ze.Undefined) : e.next === ze.Undefined ? (this._last = this._last.prev, this._last.next = ze.Undefined) : e.prev === ze.Undefined && (this._first = this._first.next, this._first.prev = ze.Undefined);
        this._size -= 1;
      }
      *[Symbol.iterator]() {
        let e = this._first;
        for (; e !== ze.Undefined; ) yield e.element, e = e.next;
      }
    }, w5 = globalThis.performance.now.bind(globalThis.performance), Pd = class M2 {
      static create(t) {
        return new M2(t);
      }
      constructor(t) {
        this._now = t === !1 ? Date.now : w5, this._startTime = this._now(), this._stopTime = -1;
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
    }, $s;
    (function(e) {
      e.None = () => Bs.None;
      function t(Z, G) {
        return p(Z, () => {
        }, 0, void 0, !0, void 0, G);
      }
      e.defer = t;
      function n(Z) {
        return (G, J = null, ne) => {
          let oe = !1, de;
          return de = Z((ue) => {
            if (!oe) return de ? de.dispose() : oe = !0, G.call(J, ue);
          }, null, ne), oe && de.dispose(), de;
        };
      }
      e.once = n;
      function r(Z, G) {
        return e.once(e.filter(Z, G));
      }
      e.onceIf = r;
      function i(Z, G, J) {
        return c((ne, oe = null, de) => Z((ue) => ne.call(oe, G(ue)), null, de), J);
      }
      e.map = i;
      function a(Z, G, J) {
        return c((ne, oe = null, de) => Z((ue) => {
          G(ue), ne.call(oe, ue);
        }, null, de), J);
      }
      e.forEach = a;
      function s(Z, G, J) {
        return c((ne, oe = null, de) => Z((ue) => G(ue) && ne.call(oe, ue), null, de), J);
      }
      e.filter = s;
      function o(Z) {
        return Z;
      }
      e.signal = o;
      function l(...Z) {
        return (G, J = null, ne) => {
          let oe = C5(...Z.map((de) => de((ue) => G.call(J, ue))));
          return d(oe, ne);
        };
      }
      e.any = l;
      function u(Z, G, J, ne) {
        let oe = J;
        return i(Z, (de) => (oe = G(oe, de), oe), ne);
      }
      e.reduce = u;
      function c(Z, G) {
        let J, ne = { onWillAddFirstListener() {
          J = Z(oe.fire, oe);
        }, onDidRemoveLastListener() {
          J == null || J.dispose();
        } }, oe = new un(ne);
        return G == null || G.add(oe), oe.event;
      }
      function d(Z, G) {
        return G instanceof Array ? G.push(Z) : G && G.add(Z), Z;
      }
      function p(Z, G, J = 100, ne = !1, oe = !1, de, ue) {
        let Ie, ke, y, ee = 0, z, re = { leakWarningThreshold: de, onWillAddFirstListener() {
          Ie = Z((P) => {
            ee++, ke = G(ke, P), ne && !y && (M.fire(ke), ke = void 0), z = () => {
              let le = ke;
              ke = void 0, y = void 0, (!ne || ee > 1) && M.fire(le), ee = 0;
            }, typeof J == "number" ? (y && clearTimeout(y), y = setTimeout(z, J)) : y === void 0 && (y = null, queueMicrotask(z));
          });
        }, onWillRemoveListener() {
          oe && ee > 0 && (z == null || z());
        }, onDidRemoveLastListener() {
          z = void 0, Ie.dispose();
        } }, M = new un(re);
        return ue == null || ue.add(M), M.event;
      }
      e.debounce = p;
      function m(Z, G = 0, J) {
        return e.debounce(Z, (ne, oe) => ne ? (ne.push(oe), ne) : [oe], G, void 0, !0, void 0, J);
      }
      e.accumulate = m;
      function g(Z, G = (ne, oe) => ne === oe, J) {
        let ne = !0, oe;
        return s(Z, (de) => {
          let ue = ne || !G(de, oe);
          return ne = !1, oe = de, ue;
        }, J);
      }
      e.latch = g;
      function _(Z, G, J) {
        return [e.filter(Z, G, J), e.filter(Z, (ne) => !G(ne), J)];
      }
      e.split = _;
      function L(Z, G = !1, J = [], ne) {
        let oe = J.slice(), de = Z((ke) => {
          oe ? oe.push(ke) : Ie.fire(ke);
        });
        ne && ne.add(de);
        let ue = () => {
          oe == null || oe.forEach((ke) => Ie.fire(ke)), oe = null;
        }, Ie = new un({ onWillAddFirstListener() {
          de || (de = Z((ke) => Ie.fire(ke)), ne && ne.add(de));
        }, onDidAddFirstListener() {
          oe && (G ? setTimeout(ue) : ue());
        }, onDidRemoveLastListener() {
          de && de.dispose(), de = null;
        } });
        return ne && ne.add(Ie), Ie.event;
      }
      e.buffer = L;
      function A(Z, G) {
        return (J, ne, oe) => {
          let de = G(new C());
          return Z(function(ue) {
            let Ie = de.evaluate(ue);
            Ie !== F && J.call(ne, Ie);
          }, void 0, oe);
        };
      }
      e.chain = A;
      let F = Symbol("HaltChainable");
      class C {
        constructor() {
          this.steps = [];
        }
        map(G) {
          return this.steps.push(G), this;
        }
        forEach(G) {
          return this.steps.push((J) => (G(J), J)), this;
        }
        filter(G) {
          return this.steps.push((J) => G(J) ? J : F), this;
        }
        reduce(G, J) {
          let ne = J;
          return this.steps.push((oe) => (ne = G(ne, oe), ne)), this;
        }
        latch(G = (J, ne) => J === ne) {
          let J = !0, ne;
          return this.steps.push((oe) => {
            let de = J || !G(oe, ne);
            return J = !1, ne = oe, de ? oe : F;
          }), this;
        }
        evaluate(G) {
          for (let J of this.steps) if (G = J(G), G === F) break;
          return G;
        }
      }
      function x(Z, G, J = (ne) => ne) {
        let ne = (...Ie) => ue.fire(J(...Ie)), oe = () => Z.on(G, ne), de = () => Z.removeListener(G, ne), ue = new un({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return ue.event;
      }
      e.fromNodeEventEmitter = x;
      function U(Z, G, J = (ne) => ne) {
        let ne = (...Ie) => ue.fire(J(...Ie)), oe = () => Z.addEventListener(G, ne), de = () => Z.removeEventListener(G, ne), ue = new un({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return ue.event;
      }
      e.fromDOMEventEmitter = U;
      function q(Z, G) {
        let J, ne = new Promise((oe, de) => {
          let ue = n(Z)(oe, null, G);
          J = () => ue.dispose();
        });
        return ne.cancel = J, ne;
      }
      e.toPromise = q;
      function I(Z) {
        let G = new un();
        return Z.then((J) => {
          G.fire(J);
        }, () => {
          G.fire(void 0);
        }).finally(() => {
          G.dispose();
        }), G.event;
      }
      e.fromPromise = I;
      function B(Z, G) {
        return Z((J) => G.fire(J));
      }
      e.forward = B;
      function S(Z, G, J) {
        return G(J), Z((ne) => G(ne));
      }
      e.runAndSubscribe = S;
      class K {
        constructor(G, J) {
          this._observable = G, this._counter = 0, this._hasChanged = !1;
          let ne = { onWillAddFirstListener: () => {
            G.addObserver(this), this._observable.reportChanges();
          }, onDidRemoveLastListener: () => {
            G.removeObserver(this);
          } };
          this.emitter = new un(ne), J && J.add(this.emitter);
        }
        beginUpdate(G) {
          this._counter++;
        }
        handlePossibleChange(G) {
        }
        handleChange(G, J) {
          this._hasChanged = !0;
        }
        endUpdate(G) {
          this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
      }
      function V(Z, G) {
        return new K(Z, G).emitter.event;
      }
      e.fromObservable = V;
      function xe(Z) {
        return (G, J, ne) => {
          let oe = 0, de = !1, ue = { beginUpdate() {
            oe++;
          }, endUpdate() {
            oe--, oe === 0 && (Z.reportChanges(), de && (de = !1, G.call(J)));
          }, handlePossibleChange() {
          }, handleChange() {
            de = !0;
          } };
          Z.addObserver(ue), Z.reportChanges();
          let Ie = { dispose() {
            Z.removeObserver(ue);
          } };
          return ne instanceof ql ? ne.add(Ie) : Array.isArray(ne) && ne.push(Ie), Ie;
        };
      }
      e.fromObservableLight = xe;
    })($s || ($s = {}));
    var A5 = (pr = class {
      constructor(t) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${pr._idPool++}`, pr.all.add(this);
      }
      start(t) {
        this._stopWatch = new Pd(), this.listenerCount = t;
      }
      stop() {
        if (this._stopWatch) {
          let t = this._stopWatch.elapsed();
          this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
      }
    }, pr.all = /* @__PURE__ */ new Set(), pr._idPool = 0, pr), S5 = -1, L5 = (mi = class {
      constructor(t, n, r = (mi._idPool++).toString(16).padStart(3, "0")) {
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
          let [a, s] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${s}):`;
          console.warn(o), console.warn(a);
          let l = new I5(o, a);
          this._errorHandler(l);
        }
        return () => {
          let a = this._stacks.get(t.value) || 0;
          this._stacks.set(t.value, a - 1);
        };
      }
      getMostFrequentStack() {
        if (!this._stacks) return;
        let t, n = 0;
        for (let [r, i] of this._stacks) (!t || n < i) && (t = [r, i], n = i);
        return t;
      }
    }, mi._idPool = 1, mi), F5 = class U2 {
      static create() {
        let t = new Error();
        return new U2(t.stack ?? "");
      }
      constructor(t) {
        this.value = t;
      }
      print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
      }
    }, I5 = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerLeakError", this.stack = t;
      }
    }, R5 = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerRefusalError", this.stack = t;
      }
    }, O5 = 0, Gl = class {
      constructor(e) {
        this.value = e, this.id = O5++;
      }
    }, x5 = 2, un = class {
      constructor(e) {
        var t, n, r, i;
        this._size = 0, this._options = e, this._leakageMon = (t = this._options) != null && t.leakWarningThreshold ? new L5((e == null ? void 0 : e.onListenerError) ?? La, ((n = this._options) == null ? void 0 : n.leakWarningThreshold) ?? S5) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new A5(this._options._profName) : void 0, this._deliveryQueue = (i = this._options) == null ? void 0 : i.deliveryQueue;
      }
      dispose() {
        var e, t, n, r;
        this._disposed || (this._disposed = !0, ((e = this._deliveryQueue) == null ? void 0 : e.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (n = (t = this._options) == null ? void 0 : t.onDidRemoveLastListener) == null || n.call(t), (r = this._leakageMon) == null || r.dispose());
      }
      get event() {
        return this._event ?? (this._event = (e, t, n) => {
          var s, o, l, u, c, d, p;
          if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
            let m = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
            console.warn(m);
            let g = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], _ = new R5(`${m}. HINT: Stack shows most frequent listener (${g[1]}-times)`, g[0]);
            return (((s = this._options) == null ? void 0 : s.onListenerError) || La)(_), Bs.None;
          }
          if (this._disposed) return Bs.None;
          t && (e = e.bind(t));
          let r = new Gl(e), i;
          this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = F5.create(), i = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Gl ? (this._deliveryQueue ?? (this._deliveryQueue = new k5()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((l = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || l.call(o, this), this._listeners = r, (c = (u = this._options) == null ? void 0 : u.onDidAddFirstListener) == null || c.call(u, this)), (p = (d = this._options) == null ? void 0 : d.onDidAddListener) == null || p.call(d, this), this._size++;
          let a = Ia(() => {
            i == null || i(), this._removeListener(r);
          });
          return n instanceof ql ? n.add(a) : Array.isArray(n) && n.push(a), a;
        }), this._event;
      }
      _removeListener(e) {
        var i, a, s, o;
        if ((a = (i = this._options) == null ? void 0 : i.onWillRemoveListener) == null || a.call(i, this), !this._listeners) return;
        if (this._size === 1) {
          this._listeners = void 0, (o = (s = this._options) == null ? void 0 : s.onDidRemoveLastListener) == null || o.call(s, this), this._size = 0;
          return;
        }
        let t = this._listeners, n = t.indexOf(e);
        if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[n] = void 0;
        let r = this._deliveryQueue.current === this;
        if (this._size * x5 <= t.length) {
          let l = 0;
          for (let u = 0; u < t.length; u++) t[u] ? t[l++] = t[u] : r && l < this._deliveryQueue.end && (this._deliveryQueue.end--, l < this._deliveryQueue.i && this._deliveryQueue.i--);
          t.length = l;
        }
      }
      _deliver(e, t) {
        var r;
        if (!e) return;
        let n = ((r = this._options) == null ? void 0 : r.onListenerError) || La;
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
        if ((t = this._deliveryQueue) != null && t.current && (this._deliverQueue(this._deliveryQueue), (n = this._perfMon) == null || n.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof Gl) this._deliver(this._listeners, e);
        else {
          let a = this._deliveryQueue;
          a.enqueue(this, e, this._listeners.length), this._deliverQueue(a);
        }
        (i = this._perfMon) == null || i.stop();
      }
      hasListeners() {
        return this._size > 0;
      }
    }, k5 = class {
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
    function M5() {
      return globalThis._VSCODE_NLS_MESSAGES;
    }
    function Bd() {
      return globalThis._VSCODE_NLS_LANGUAGE;
    }
    var U5 = Bd() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
    function P5(e, t) {
      let n;
      return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
        let a = i[0], s = t[a], o = r;
        return typeof s == "string" ? o = s : (typeof s == "number" || typeof s == "boolean" || s === void 0 || s === null) && (o = String(s)), o;
      }), U5 && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
    }
    function me(e, t, ...n) {
      return P5(typeof e == "number" ? B5(e, t) : t, n);
    }
    function B5(e, t) {
      var r;
      let n = (r = M5()) == null ? void 0 : r[e];
      if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
      }
      return n;
    }
    var Oi = "en", Ra = !1, Oa = !1, Vs = !1, $d = !1, Hl = !1, Vd = !1, Ks, js = Oi, Kd = Oi, $5, bn, er = globalThis, St;
    typeof er.vscode < "u" && typeof er.vscode.process < "u" ? St = er.vscode.process : typeof process < "u" && typeof ((f2 = process == null ? void 0 : process.versions) == null ? void 0 : f2.node) == "string" && (St = process);
    var V5 = typeof ((p2 = St == null ? void 0 : St.versions) == null ? void 0 : p2.electron) == "string", K5 = V5 && (St == null ? void 0 : St.type) === "renderer";
    if (typeof St == "object") {
      Ra = St.platform === "win32", Oa = St.platform === "darwin", Vs = St.platform === "linux", Vs && St.env.SNAP && St.env.SNAP_REVISION, St.env.CI || St.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Ks = Oi, js = Oi;
      let e = St.env.VSCODE_NLS_CONFIG;
      if (e) try {
        let t = JSON.parse(e);
        Ks = t.userLocale, Kd = t.osLocale, js = t.resolvedLanguage || Oi, $5 = (m2 = t.languagePack) == null ? void 0 : m2.translationsConfigFile;
      } catch {
      }
      $d = !0;
    } else typeof navigator == "object" && !K5 ? (bn = navigator.userAgent, Ra = bn.indexOf("Windows") >= 0, Oa = bn.indexOf("Macintosh") >= 0, Vd = (bn.indexOf("Macintosh") >= 0 || bn.indexOf("iPad") >= 0 || bn.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Vs = bn.indexOf("Linux") >= 0, (bn == null ? void 0 : bn.indexOf("Mobi")) >= 0, Hl = !0, js = Bd() || Oi, Ks = navigator.language.toLowerCase(), Kd = Ks) : console.error("Unable to resolve platform.");
    var xi;
    (function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    })(xi || (xi = {})), xi.Web, Oa ? xi.Mac : Ra ? xi.Windows : Vs && xi.Linux;
    var ki = Ra, j5 = Oa, q5 = $d, G5 = Hl, H5 = Hl && typeof er.importScripts == "function", W5 = H5 ? er.origin : void 0, Vn = bn, Tr = js, jd;
    (function(e) {
      function t() {
        return Tr;
      }
      e.value = t;
      function n() {
        return Tr.length === 2 ? Tr === "en" : Tr.length >= 3 ? Tr[0] === "e" && Tr[1] === "n" && Tr[2] === "-" : !1;
      }
      e.isDefaultVariant = n;
      function r() {
        return Tr === "en";
      }
      e.isDefault = r;
    })(jd || (jd = {}));
    var Y5 = typeof er.postMessage == "function" && !er.importScripts;
    (() => {
      if (Y5) {
        let e = [];
        er.addEventListener("message", (n) => {
          if (n.data && n.data.vscodeScheduleAsyncWork) for (let r = 0, i = e.length; r < i; r++) {
            let a = e[r];
            if (a.id === n.data.vscodeScheduleAsyncWork) {
              e.splice(r, 1), a.callback();
              return;
            }
          }
        });
        let t = 0;
        return (n) => {
          let r = ++t;
          e.push({ id: r, callback: n }), er.postMessage({ vscodeScheduleAsyncWork: r }, "*");
        };
      }
      return (e) => setTimeout(e);
    })();
    var xa;
    (function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
    })(xa || (xa = {})), Oa || Vd ? xa.Macintosh : Ra ? xa.Windows : xa.Linux;
    var z5 = !!(Vn && Vn.indexOf("Chrome") >= 0);
    Vn && Vn.indexOf("Firefox") >= 0, !z5 && Vn && Vn.indexOf("Safari") >= 0, Vn && Vn.indexOf("Edg/") >= 0, Vn && Vn.indexOf("Android") >= 0;
    var qd = Object.freeze(function(e, t) {
      let n = setTimeout(e.bind(t), 0);
      return { dispose() {
        clearTimeout(n);
      } };
    }), qs;
    (function(e) {
      function t(n) {
        return n === e.None || n === e.Cancelled || n instanceof Gs ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
      }
      e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: $s.None }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: qd });
    })(qs || (qs = {}));
    var Gs = class {
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
        return this._isCancelled ? qd : (this._emitter || (this._emitter = new un()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
      }
    }, X5 = class {
      constructor(e) {
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
      }
      get token() {
        return this._token || (this._token = new Gs()), this._token;
      }
      cancel() {
        this._token ? this._token instanceof Gs && this._token.cancel() : this._token = qs.Cancelled;
      }
      dispose(e = !1) {
        var t;
        e && this.cancel(), (t = this._parentListener) == null || t.dispose(), this._token ? this._token instanceof Gs && this._token.dispose() : this._token = qs.None;
      }
    };
    function J5(e) {
      return e;
    }
    var Q5 = class {
      constructor(e, t) {
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = J5) : (this._fn = t, this._computeKey = e.getCacheKey);
      }
      get(e) {
        let t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
      }
    }, Gd = class {
      constructor(e) {
        this.executor = e, this._didRun = !1;
      }
      get hasValue() {
        return this._didRun;
      }
      get value() {
        if (!this._didRun) try {
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
    }, cn;
    (function(e) {
      e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
    })(cn || (cn = {}));
    function Hd(e) {
      return e < 0 ? 0 : e > cn.MAX_UINT_8 ? cn.MAX_UINT_8 : e | 0;
    }
    function Mi(e) {
      return e < 0 ? 0 : e > cn.MAX_UINT_32 ? cn.MAX_UINT_32 : e | 0;
    }
    function Z5(e) {
      return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
    }
    function e7(e) {
      return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
    }
    function Wd(e) {
      return e.split(/\r\n|\r|\n/);
    }
    function t7(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        let r = e.charCodeAt(t);
        if (r !== R.Space && r !== R.Tab) return t;
      }
      return -1;
    }
    function n7(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        let r = e.charCodeAt(n);
        if (r !== R.Space && r !== R.Tab) return n;
      }
      return -1;
    }
    function r7(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    function i7(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let l = e.charCodeAt(n), u = t.charCodeAt(i);
        if (l < u) return -1;
        if (l > u) return 1;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function Yd(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let l = e.charCodeAt(n), u = t.charCodeAt(i);
        if (l === u) continue;
        if (l >= 128 || u >= 128) return i7(e.toLowerCase(), t.toLowerCase(), n, r, i, a);
        zd(l) && (l -= 32), zd(u) && (u -= 32);
        let c = l - u;
        if (c !== 0) return c;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function zd(e) {
      return e >= R.a && e <= R.z;
    }
    function Xd(e) {
      return e >= R.A && e <= R.Z;
    }
    function a7(e, t) {
      return e.length === t.length && Yd(e, t) === 0;
    }
    function s7(e, t) {
      let n = t.length;
      return t.length > e.length ? !1 : Yd(e, t, 0, n) === 0;
    }
    function Hs(e, t) {
      let n = Math.min(e.length, t.length), r;
      for (r = 0; r < n; r++) if (e.charCodeAt(r) !== t.charCodeAt(r)) return r;
      return n;
    }
    function Wl(e, t) {
      let n = Math.min(e.length, t.length), r, i = e.length - 1, a = t.length - 1;
      for (r = 0; r < n; r++) if (e.charCodeAt(i - r) !== t.charCodeAt(a - r)) return r;
      return n;
    }
    function Yl(e) {
      return 55296 <= e && e <= 56319;
    }
    function o7(e) {
      return 56320 <= e && e <= 57343;
    }
    function l7(e, t) {
      return (e - 55296 << 10) + (t - 56320) + 65536;
    }
    function u7(e, t, n) {
      let r = e.charCodeAt(n);
      if (Yl(r) && n + 1 < t) {
        let i = e.charCodeAt(n + 1);
        if (o7(i)) return l7(r, i);
      }
      return r;
    }
    var c7 = /^[\t\n\r\x20-\x7E]*$/;
    function d7(e) {
      return c7.test(e);
    }
    String.fromCharCode(R.UTF8_BOM);
    var zr;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
    })(zr || (zr = {})), qn = class {
      static getInstance() {
        return qn._INSTANCE || (qn._INSTANCE = new qn()), qn._INSTANCE;
      }
      constructor() {
        this._data = h7();
      }
      getGraphemeBreakType(t) {
        if (t < 32) return t === R.LineFeed ? zr.LF : t === R.CarriageReturn ? zr.CR : zr.Control;
        if (t < 127) return zr.Other;
        let n = this._data, r = n.length / 3, i = 1;
        for (; i <= r; ) if (t < n[3 * i]) i = 2 * i;
        else if (t > n[3 * i + 1]) i = 2 * i + 1;
        else return n[3 * i + 2];
        return zr.Other;
      }
    }, qn._INSTANCE = null;
    function h7() {
      return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
    }
    var zl;
    (function(e) {
      e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
    })(zl || (zl = {}));
    var Xl = (an = class {
      static getInstance(t) {
        return an.cache.get(Array.from(t));
      }
      static getLocales() {
        return an._locales.value;
      }
      constructor(t) {
        this.confusableDictionary = t;
      }
      isAmbiguous(t) {
        return this.confusableDictionary.has(t);
      }
      containsAmbiguousCharacter(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t.codePointAt(n);
          if (typeof r == "number" && this.isAmbiguous(r)) return !0;
        }
        return !1;
      }
      getPrimaryConfusable(t) {
        return this.confusableDictionary.get(t);
      }
      getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys());
      }
    }, an.ambiguousCharacterData = new Gd(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), an.cache = new Q5({ getCacheKey: JSON.stringify }, (t) => {
      function n(c) {
        let d = /* @__PURE__ */ new Map();
        for (let p = 0; p < c.length; p += 2) d.set(c[p], c[p + 1]);
        return d;
      }
      function r(c, d) {
        let p = new Map(c);
        for (let [m, g] of d) p.set(m, g);
        return p;
      }
      function i(c, d) {
        if (!c) return d;
        let p = /* @__PURE__ */ new Map();
        for (let [m, g] of c) d.has(m) && p.set(m, g);
        return p;
      }
      let a = an.ambiguousCharacterData.value, s = t.filter((c) => !c.startsWith("_") && c in a);
      s.length === 0 && (s = ["_default"]);
      let o;
      for (let c of s) {
        let d = n(a[c]);
        o = i(o, d);
      }
      let l = n(a._common), u = r(l, o);
      return new an(u);
    }), an._locales = new Gd(() => Object.keys(an.ambiguousCharacterData.value).filter((t) => !t.startsWith("_"))), an), Jl = (Gn = class {
      static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
      }
      static getData() {
        return this._data || (this._data = new Set([...Object.values(Gn.getRawData())].flat())), this._data;
      }
      static isInvisibleCharacter(t) {
        return Gn.getData().has(t);
      }
      static containsInvisibleCharacter(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t.codePointAt(n);
          if (typeof r == "number" && (Gn.isInvisibleCharacter(r) || r === zl.space)) return !0;
        }
        return !1;
      }
      static get codePoints() {
        return Gn.getData();
      }
    }, Gn._data = void 0, Gn), Ql = "default", f7 = "$initialize", Ht;
    (function(e) {
      e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
    })(Ht || (Ht = {}));
    var p7 = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.method = r, this.args = i, this.type = Ht.Request;
      }
    }, Jd = class {
      constructor(e, t, n, r) {
        this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = Ht.Reply;
      }
    }, m7 = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.eventName = r, this.arg = i, this.type = Ht.SubscribeEvent;
      }
    }, g7 = class {
      constructor(e, t, n) {
        this.vsWorker = e, this.req = t, this.event = n, this.type = Ht.Event;
      }
    }, E7 = class {
      constructor(e, t) {
        this.vsWorker = e, this.req = t, this.type = Ht.UnsubscribeEvent;
      }
    }, _7 = class {
      constructor(e) {
        this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
      }
      setWorkerId(e) {
        this._workerId = e;
      }
      sendMessage(e, t, n) {
        let r = String(++this._lastSentReq);
        return new Promise((i, a) => {
          this._pendingReplies[r] = { resolve: i, reject: a }, this._send(new p7(this._workerId, r, e, t, n));
        });
      }
      listen(e, t, n) {
        let r = null, i = new un({ onWillAddFirstListener: () => {
          r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new m7(this._workerId, r, e, t, n));
        }, onDidRemoveLastListener: () => {
          this._pendingEmitters.delete(r), this._send(new E7(this._workerId, r)), r = null;
        } });
        return i.event;
      }
      handleMessage(e) {
        !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
      }
      createProxyToRemoteChannel(e, t) {
        let n = { get: (r, i) => (typeof i == "string" && !r[i] && (Zd(i) ? r[i] = (a) => this.listen(e, i, a) : Qd(i) ? r[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === R.DollarSign && (r[i] = async (...a) => (await (t == null ? void 0 : t()), this.sendMessage(e, i, a)))), r[i]) };
        return new Proxy(/* @__PURE__ */ Object.create(null), n);
      }
      _handleMessage(e) {
        switch (e.type) {
          case Ht.Reply:
            return this._handleReplyMessage(e);
          case Ht.Request:
            return this._handleRequestMessage(e);
          case Ht.SubscribeEvent:
            return this._handleSubscribeEventMessage(e);
          case Ht.Event:
            return this._handleEventMessage(e);
          case Ht.UnsubscribeEvent:
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
        this._handler.handleMessage(e.channel, e.method, e.args).then((n) => {
          this._send(new Jd(this._workerId, t, n, void 0));
        }, (n) => {
          n.detail instanceof Error && (n.detail = Pl(n.detail)), this._send(new Jd(this._workerId, t, void 0, Pl(n)));
        });
      }
      _handleSubscribeEventMessage(e) {
        let t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((r) => {
          this._send(new g7(this._workerId, t, r));
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
        if (e.type === Ht.Request) for (let n = 0; n < e.args.length; n++) e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
        else e.type === Ht.Reply && e.res instanceof ArrayBuffer && t.push(e.res);
        this._handler.sendMessage(e, t);
      }
    };
    function Qd(e) {
      return e[0] === "o" && e[1] === "n" && Xd(e.charCodeAt(2));
    }
    function Zd(e) {
      return /^onDynamic/.test(e) && Xd(e.charCodeAt(9));
    }
    var D7 = class {
      constructor(e, t) {
        this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new _7({ sendMessage: (n, r) => {
          e(n, r);
        }, handleMessage: (n, r, i) => this._handleMessage(n, r, i), handleEvent: (n, r, i) => this._handleEvent(n, r, i) }), this.requestHandler = t(this);
      }
      onmessage(e) {
        this._protocol.handleMessage(e);
      }
      _handleMessage(e, t, n) {
        if (e === Ql && t === f7) return this.initialize(n[0]);
        let r = e === Ql ? this.requestHandler : this._localChannels.get(e);
        if (!r) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
        if (typeof r[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
        try {
          return Promise.resolve(r[t].apply(r, n));
        } catch (i) {
          return Promise.reject(i);
        }
      }
      _handleEvent(e, t, n) {
        let r = e === Ql ? this.requestHandler : this._localChannels.get(e);
        if (!r) throw new Error(`Missing channel ${e} on worker thread`);
        if (Zd(t)) {
          let i = r[t].call(r, n);
          if (typeof i != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
          return i;
        }
        if (Qd(t)) {
          let i = r[t];
          if (typeof i != "function") throw new Error(`Missing event ${t} on request handler.`);
          return i;
        }
        throw new Error(`Malformed event name ${t}`);
      }
      setChannel(e, t) {
        this._localChannels.set(e, t);
      }
      getChannel(e) {
        if (!this._remoteChannels.has(e)) {
          let t = this._protocol.createProxyToRemoteChannel(e);
          this._remoteChannels.set(e, t);
        }
        return this._remoteChannels.get(e);
      }
      async initialize(e) {
        this._protocol.setWorkerId(e);
      }
    }, Zl = !1;
    function eh(e) {
      if (Zl) throw new Error("WebWorker already initialized!");
      Zl = !0;
      let t = new D7((n) => globalThis.postMessage(n), (n) => e(n));
      return globalThis.onmessage = (n) => {
        t.onmessage(n.data);
      }, t;
    }
    function v7(e) {
      globalThis.onmessage = (t) => {
        Zl || eh(e);
      };
    }
    var wr = class {
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
    function th(e, t) {
      return (t << 5) - t + e | 0;
    }
    function b7(e, t) {
      t = th(149417, t);
      for (let n = 0, r = e.length; n < r; n++) t = th(e.charCodeAt(n), t);
      return t;
    }
    var nh;
    (function(e) {
      e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
    })(nh || (nh = {}));
    var rh = class {
      constructor(e) {
        this.source = e;
      }
      getElements() {
        let e = this.source, t = new Int32Array(e.length);
        for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
        return t;
      }
    };
    function y7(e, t, n) {
      return new ah(new rh(e), new rh(t)).ComputeDiff(n).changes;
    }
    var Ui = class {
      static Assert(e, t) {
        if (!e) throw new Error(t);
      }
    }, Pi = class {
      static Copy(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
      static Copy2(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
    }, tr;
    (function(e) {
      e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
    })(tr || (tr = {}));
    var ih = class {
      constructor() {
        this.m_changes = [], this.m_originalStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
      }
      MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new wr(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = cn.MAX_SAFE_SMALL_INTEGER;
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
    }, ah = class ha {
      constructor(t, n, r = null) {
        this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
        let [i, a, s] = ha._getElements(t), [o, l, u] = ha._getElements(n);
        this._hasStrings = s && u, this._originalStringElements = i, this._originalElementsOrHash = a, this._modifiedStringElements = o, this._modifiedElementsOrHash = l, this.m_forwardHistory = [], this.m_reverseHistory = [];
      }
      static _isStringArray(t) {
        return t.length > 0 && typeof t[0] == "string";
      }
      static _getElements(t) {
        let n = t.getElements();
        if (ha._isStringArray(n)) {
          let r = new Int32Array(n.length);
          for (let i = 0, a = n.length; i < a; i++) r[i] = b7(n[i], 0);
          return [n, r, !0];
        }
        return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
      }
      ElementsAreEqual(t, n) {
        return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
      }
      ElementsAreStrictEqual(t, n) {
        if (!this.ElementsAreEqual(t, n)) return !1;
        let r = ha._getStrictElement(this._originalSequence, t), i = ha._getStrictElement(this._modifiedSequence, n);
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
        return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
      }
      _ComputeDiff(t, n, r, i, a) {
        let s = [!1], o = this.ComputeDiffRecursive(t, n, r, i, s);
        return a && (o = this.PrettifyChanges(o)), { quitEarly: s[0], changes: o };
      }
      ComputeDiffRecursive(t, n, r, i, a) {
        for (a[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); ) t++, r++;
        for (; n >= t && i >= r && this.ElementsAreEqual(n, i); ) n--, i--;
        if (t > n || r > i) {
          let d;
          return r <= i ? (Ui.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), d = [new wr(t, 0, r, i - r + 1)]) : t <= n ? (Ui.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), d = [new wr(t, n - t + 1, r, 0)]) : (Ui.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), Ui.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), d = []), d;
        }
        let s = [0], o = [0], l = this.ComputeRecursionPoint(t, n, r, i, s, o, a), u = s[0], c = o[0];
        if (l !== null) return l;
        if (!a[0]) {
          let d = this.ComputeDiffRecursive(t, u, r, c, a), p = [];
          return a[0] ? p = [new wr(u + 1, n - (u + 1) + 1, c + 1, i - (c + 1) + 1)] : p = this.ComputeDiffRecursive(u + 1, n, c + 1, i, a), this.ConcatenateChanges(d, p);
        }
        return [new wr(t, n - t + 1, r, i - r + 1)];
      }
      WALKTRACE(t, n, r, i, a, s, o, l, u, c, d, p, m, g, _, L, A, F) {
        let C = null, x = null, U = new ih(), q = n, I = r, B = m[0] - L[0] - i, S = cn.MIN_SAFE_SMALL_INTEGER, K = this.m_forwardHistory.length - 1;
        do {
          let V = B + t;
          V === q || V < I && u[V - 1] < u[V + 1] ? (d = u[V + 1], g = d - B - i, d < S && U.MarkNextChange(), S = d, U.AddModifiedElement(d + 1, g), B = V + 1 - t) : (d = u[V - 1] + 1, g = d - B - i, d < S && U.MarkNextChange(), S = d - 1, U.AddOriginalElement(d, g + 1), B = V - 1 - t), K >= 0 && (u = this.m_forwardHistory[K], t = u[0], q = 1, I = u.length - 1);
        } while (--K >= -1);
        if (C = U.getReverseChanges(), F[0]) {
          let V = m[0] + 1, xe = L[0] + 1;
          if (C !== null && C.length > 0) {
            let Z = C[C.length - 1];
            V = Math.max(V, Z.getOriginalEnd()), xe = Math.max(xe, Z.getModifiedEnd());
          }
          x = [new wr(V, p - V + 1, xe, _ - xe + 1)];
        } else {
          U = new ih(), q = s, I = o, B = m[0] - L[0] - l, S = cn.MAX_SAFE_SMALL_INTEGER, K = A ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
          do {
            let V = B + a;
            V === q || V < I && c[V - 1] >= c[V + 1] ? (d = c[V + 1] - 1, g = d - B - l, d > S && U.MarkNextChange(), S = d + 1, U.AddOriginalElement(d + 1, g + 1), B = V + 1 - a) : (d = c[V - 1], g = d - B - l, d > S && U.MarkNextChange(), S = d, U.AddModifiedElement(d + 1, g + 1), B = V - 1 - a), K >= 0 && (c = this.m_reverseHistory[K], a = c[0], q = 1, I = c.length - 1);
          } while (--K >= -1);
          x = U.getChanges();
        }
        return this.ConcatenateChanges(C, x);
      }
      ComputeRecursionPoint(t, n, r, i, a, s, o) {
        let l = 0, u = 0, c = 0, d = 0, p = 0, m = 0;
        t--, r--, a[0] = 0, s[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        let g = n - t + (i - r), _ = g + 1, L = new Int32Array(_), A = new Int32Array(_), F = i - r, C = n - t, x = t - r, U = n - i, q = (C - F) % 2 === 0;
        L[F] = t, A[C] = n, o[0] = !1;
        for (let I = 1; I <= g / 2 + 1; I++) {
          let B = 0, S = 0;
          c = this.ClipDiagonalBound(F - I, I, F, _), d = this.ClipDiagonalBound(F + I, I, F, _);
          for (let V = c; V <= d; V += 2) {
            V === c || V < d && L[V - 1] < L[V + 1] ? l = L[V + 1] : l = L[V - 1] + 1, u = l - (V - F) - x;
            let xe = l;
            for (; l < n && u < i && this.ElementsAreEqual(l + 1, u + 1); ) l++, u++;
            if (L[V] = l, l + u > B + S && (B = l, S = u), !q && Math.abs(V - C) <= I - 1 && l >= A[V]) return a[0] = l, s[0] = u, xe <= A[V] && tr.MaxDifferencesHistory > 0 && I <= tr.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, d, x, C, p, m, U, L, A, l, n, a, u, i, s, q, o) : null;
          }
          let K = (B - t + (S - r) - I) / 2;
          if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(B, K)) return o[0] = !0, a[0] = B, s[0] = S, K > 0 && tr.MaxDifferencesHistory > 0 && I <= tr.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, d, x, C, p, m, U, L, A, l, n, a, u, i, s, q, o) : (t++, r++, [new wr(t, n - t + 1, r, i - r + 1)]);
          p = this.ClipDiagonalBound(C - I, I, C, _), m = this.ClipDiagonalBound(C + I, I, C, _);
          for (let V = p; V <= m; V += 2) {
            V === p || V < m && A[V - 1] >= A[V + 1] ? l = A[V + 1] - 1 : l = A[V - 1], u = l - (V - C) - U;
            let xe = l;
            for (; l > t && u > r && this.ElementsAreEqual(l, u); ) l--, u--;
            if (A[V] = l, q && Math.abs(V - F) <= I && l <= L[V]) return a[0] = l, s[0] = u, xe >= L[V] && tr.MaxDifferencesHistory > 0 && I <= tr.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, d, x, C, p, m, U, L, A, l, n, a, u, i, s, q, o) : null;
          }
          if (I <= tr.MaxDifferencesHistory) {
            let V = new Int32Array(d - c + 2);
            V[0] = F - c + 1, Pi.Copy2(L, c, V, 1, d - c + 1), this.m_forwardHistory.push(V), V = new Int32Array(m - p + 2), V[0] = C - p + 1, Pi.Copy2(A, p, V, 1, m - p + 1), this.m_reverseHistory.push(V);
          }
        }
        return this.WALKTRACE(F, c, d, x, C, p, m, U, L, A, l, n, a, u, i, s, q, o);
      }
      PrettifyChanges(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t[n], i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, a = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, s = r.originalLength > 0, o = r.modifiedLength > 0;
          for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < a && (!s || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!o || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
            let u = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
            if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !u) break;
            r.originalStart++, r.modifiedStart++;
          }
          let l = [null];
          if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], l)) {
            t[n] = l[0], t.splice(n + 1, 1), n--;
            continue;
          }
        }
        for (let n = t.length - 1; n >= 0; n--) {
          let r = t[n], i = 0, a = 0;
          if (n > 0) {
            let d = t[n - 1];
            i = d.originalStart + d.originalLength, a = d.modifiedStart + d.modifiedLength;
          }
          let s = r.originalLength > 0, o = r.modifiedLength > 0, l = 0, u = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
          for (let d = 1; ; d++) {
            let p = r.originalStart - d, m = r.modifiedStart - d;
            if (p < i || m < a || s && !this.OriginalElementsAreEqual(p, p + r.originalLength) || o && !this.ModifiedElementsAreEqual(m, m + r.modifiedLength)) break;
            let g = (p === i && m === a ? 5 : 0) + this._boundaryScore(p, r.originalLength, m, r.modifiedLength);
            g > u && (u = g, l = d);
          }
          r.originalStart -= l, r.modifiedStart -= l;
          let c = [null];
          if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], c)) {
            t[n - 1] = c[0], t.splice(n, 1), n++;
            continue;
          }
        }
        if (this._hasStrings) for (let n = 1, r = t.length; n < r; n++) {
          let i = t[n - 1], a = t[n], s = a.originalStart - i.originalStart - i.originalLength, o = i.originalStart, l = a.originalStart + a.originalLength, u = l - o, c = i.modifiedStart, d = a.modifiedStart + a.modifiedLength, p = d - c;
          if (s < 5 && u < 20 && p < 20) {
            let m = this._findBetterContiguousSequence(o, u, c, p, s);
            if (m) {
              let [g, _] = m;
              (g !== i.originalStart + i.originalLength || _ !== i.modifiedStart + i.modifiedLength) && (i.originalLength = g - i.originalStart, i.modifiedLength = _ - i.modifiedStart, a.originalStart = g + s, a.modifiedStart = _ + s, a.originalLength = l - a.originalStart, a.modifiedLength = d - a.modifiedStart);
            }
          }
        }
        return t;
      }
      _findBetterContiguousSequence(t, n, r, i, a) {
        if (n < a || i < a) return null;
        let s = t + n - a + 1, o = r + i - a + 1, l = 0, u = 0, c = 0;
        for (let d = t; d < s; d++) for (let p = r; p < o; p++) {
          let m = this._contiguousSequenceScore(d, p, a);
          m > 0 && m > l && (l = m, u = d, c = p);
        }
        return l > 0 ? [u, c] : null;
      }
      _contiguousSequenceScore(t, n, r) {
        let i = 0;
        for (let a = 0; a < r; a++) {
          if (!this.ElementsAreEqual(t + a, n + a)) return 0;
          i += this._originalStringElements[t + a].length;
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
        let a = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, s = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0;
        return a + s;
      }
      ConcatenateChanges(t, n) {
        let r = [];
        if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
        if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
          let i = new Array(t.length + n.length - 1);
          return Pi.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], Pi.Copy(n, 1, i, t.length, n.length - 1), i;
        } else {
          let i = new Array(t.length + n.length);
          return Pi.Copy(t, 0, i, 0, t.length), Pi.Copy(n, 0, i, t.length, n.length), i;
        }
      }
      ChangesOverlap(t, n, r) {
        if (Ui.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Ui.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
          let i = t.originalStart, a = t.originalLength, s = t.modifiedStart, o = t.modifiedLength;
          return t.originalStart + t.originalLength >= n.originalStart && (a = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (o = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new wr(i, a, s, o), !0;
        } else return r[0] = null, !1;
      }
      ClipDiagonalBound(t, n, r, i) {
        if (t >= 0 && t < i) return t;
        let a = r, s = i - r - 1, o = n % 2 === 0;
        if (t < 0) {
          let l = a % 2 === 0;
          return o === l ? 0 : 1;
        } else {
          let l = s % 2 === 0;
          return o === l ? i - 1 : i - 2;
        }
      }
    }, Te = class vi {
      constructor(t, n) {
        this.lineNumber = t, this.column = n;
      }
      with(t = this.lineNumber, n = this.column) {
        return t === this.lineNumber && n === this.column ? this : new vi(t, n);
      }
      delta(t = 0, n = 0) {
        return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
      }
      equals(t) {
        return vi.equals(this, t);
      }
      static equals(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
      }
      isBefore(t) {
        return vi.isBefore(this, t);
      }
      static isBefore(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
      }
      isBeforeOrEqual(t) {
        return vi.isBeforeOrEqual(this, t);
      }
      static isBeforeOrEqual(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
      }
      static compare(t, n) {
        let r = t.lineNumber | 0, i = n.lineNumber | 0;
        if (r === i) {
          let a = t.column | 0, s = n.column | 0;
          return a - s;
        }
        return r - i;
      }
      clone() {
        return new vi(this.lineNumber, this.column);
      }
      toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
      }
      static lift(t) {
        return new vi(t.lineNumber, t.column);
      }
      static isIPosition(t) {
        return t && typeof t.lineNumber == "number" && typeof t.column == "number";
      }
      toJSON() {
        return { lineNumber: this.lineNumber, column: this.column };
      }
    }, fe = class lt {
      constructor(t, n, r, i) {
        t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
      }
      isEmpty() {
        return lt.isEmpty(this);
      }
      static isEmpty(t) {
        return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
      }
      containsPosition(t) {
        return lt.containsPosition(this, t);
      }
      static containsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
      }
      static strictContainsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
      }
      containsRange(t) {
        return lt.containsRange(this, t);
      }
      static containsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
      }
      strictContainsRange(t) {
        return lt.strictContainsRange(this, t);
      }
      static strictContainsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
      }
      plusRange(t) {
        return lt.plusRange(this, t);
      }
      static plusRange(t, n) {
        let r, i, a, s;
        return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (a = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (a = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (a = t.endLineNumber, s = t.endColumn), new lt(r, i, a, s);
      }
      intersectRanges(t) {
        return lt.intersectRanges(this, t);
      }
      static intersectRanges(t, n) {
        let r = t.startLineNumber, i = t.startColumn, a = t.endLineNumber, s = t.endColumn, o = n.startLineNumber, l = n.startColumn, u = n.endLineNumber, c = n.endColumn;
        return r < o ? (r = o, i = l) : r === o && (i = Math.max(i, l)), a > u ? (a = u, s = c) : a === u && (s = Math.min(s, c)), r > a || r === a && i > s ? null : new lt(r, i, a, s);
      }
      equalsRange(t) {
        return lt.equalsRange(this, t);
      }
      static equalsRange(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
      }
      getEndPosition() {
        return lt.getEndPosition(this);
      }
      static getEndPosition(t) {
        return new Te(t.endLineNumber, t.endColumn);
      }
      getStartPosition() {
        return lt.getStartPosition(this);
      }
      static getStartPosition(t) {
        return new Te(t.startLineNumber, t.startColumn);
      }
      toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
      }
      setEndPosition(t, n) {
        return new lt(this.startLineNumber, this.startColumn, t, n);
      }
      setStartPosition(t, n) {
        return new lt(t, n, this.endLineNumber, this.endColumn);
      }
      collapseToStart() {
        return lt.collapseToStart(this);
      }
      static collapseToStart(t) {
        return new lt(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
      }
      collapseToEnd() {
        return lt.collapseToEnd(this);
      }
      static collapseToEnd(t) {
        return new lt(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
      }
      delta(t) {
        return new lt(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
      }
      isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
      }
      static fromPositions(t, n = t) {
        return new lt(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static lift(t) {
        return t ? new lt(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
      static areOnlyIntersecting(t, n) {
        return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
      }
      static compareRangesUsingStarts(t, n) {
        if (t && n) {
          let r = t.startLineNumber | 0, i = n.startLineNumber | 0;
          if (r === i) {
            let a = t.startColumn | 0, s = n.startColumn | 0;
            if (a === s) {
              let o = t.endLineNumber | 0, l = n.endLineNumber | 0;
              if (o === l) {
                let u = t.endColumn | 0, c = n.endColumn | 0;
                return u - c;
              }
              return o - l;
            }
            return a - s;
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
    }, N7 = class P2 {
      constructor(t) {
        let n = Hd(t);
        this._defaultValue = n, this._asciiMap = P2._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
      }
      static _createAsciiMap(t) {
        let n = new Uint8Array(256);
        return n.fill(t), n;
      }
      set(t, n) {
        let r = Hd(n);
        t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
      }
      get(t) {
        return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
      }
      clear() {
        this._asciiMap.fill(this._defaultValue), this._map.clear();
      }
    }, sh;
    (function(e) {
      e[e.False = 0] = "False", e[e.True = 1] = "True";
    })(sh || (sh = {}));
    var pe;
    (function(e) {
      e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
    })(pe || (pe = {}));
    var C7 = class {
      constructor(e, t, n) {
        let r = new Uint8Array(e * t);
        for (let i = 0, a = e * t; i < a; i++) r[i] = n;
        this._data = r, this.rows = e, this.cols = t;
      }
      get(e, t) {
        return this._data[e * this.cols + t];
      }
      set(e, t, n) {
        this._data[e * this.cols + t] = n;
      }
    }, T7 = class {
      constructor(e) {
        let t = 0, n = pe.Invalid;
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, l] = e[i];
          o > t && (t = o), s > n && (n = s), l > n && (n = l);
        }
        t++, n++;
        let r = new C7(n, t, pe.Invalid);
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, l] = e[i];
          r.set(s, o, l);
        }
        this._states = r, this._maxCharCode = t;
      }
      nextState(e, t) {
        return t < 0 || t >= this._maxCharCode ? pe.Invalid : this._states.get(e, t);
      }
    }, eu = null;
    function w7() {
      return eu === null && (eu = new T7([[pe.Start, R.h, pe.H], [pe.Start, R.H, pe.H], [pe.Start, R.f, pe.F], [pe.Start, R.F, pe.F], [pe.H, R.t, pe.HT], [pe.H, R.T, pe.HT], [pe.HT, R.t, pe.HTT], [pe.HT, R.T, pe.HTT], [pe.HTT, R.p, pe.HTTP], [pe.HTT, R.P, pe.HTTP], [pe.HTTP, R.s, pe.BeforeColon], [pe.HTTP, R.S, pe.BeforeColon], [pe.HTTP, R.Colon, pe.AfterColon], [pe.F, R.i, pe.FI], [pe.F, R.I, pe.FI], [pe.FI, R.l, pe.FIL], [pe.FI, R.L, pe.FIL], [pe.FIL, R.e, pe.BeforeColon], [pe.FIL, R.E, pe.BeforeColon], [pe.BeforeColon, R.Colon, pe.AfterColon], [pe.AfterColon, R.Slash, pe.AlmostThere], [pe.AlmostThere, R.Slash, pe.End]])), eu;
    }
    var $e;
    (function(e) {
      e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
    })($e || ($e = {}));
    var ka = null;
    function A7() {
      if (ka === null) {
        ka = new N7($e.None);
        let e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
        for (let n = 0; n < e.length; n++) ka.set(e.charCodeAt(n), $e.ForceTermination);
        let t = ".,;:";
        for (let n = 0; n < t.length; n++) ka.set(t.charCodeAt(n), $e.CannotEndIn);
      }
      return ka;
    }
    var S7 = class w1 {
      static _createLink(t, n, r, i, a) {
        let s = a - 1;
        do {
          let o = n.charCodeAt(s);
          if (t.get(o) !== $e.CannotEndIn) break;
          s--;
        } while (s > i);
        if (i > 0) {
          let o = n.charCodeAt(i - 1), l = n.charCodeAt(s);
          (o === R.OpenParen && l === R.CloseParen || o === R.OpenSquareBracket && l === R.CloseSquareBracket || o === R.OpenCurlyBrace && l === R.CloseCurlyBrace) && s--;
        }
        return { range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: s + 2 }, url: n.substring(i, s + 1) };
      }
      static computeLinks(t, n = w7()) {
        let r = A7(), i = [];
        for (let a = 1, s = t.getLineCount(); a <= s; a++) {
          let o = t.getLineContent(a), l = o.length, u = 0, c = 0, d = 0, p = pe.Start, m = !1, g = !1, _ = !1, L = !1;
          for (; u < l; ) {
            let A = !1, F = o.charCodeAt(u);
            if (p === pe.Accept) {
              let C;
              switch (F) {
                case R.OpenParen:
                  m = !0, C = $e.None;
                  break;
                case R.CloseParen:
                  C = m ? $e.None : $e.ForceTermination;
                  break;
                case R.OpenSquareBracket:
                  _ = !0, g = !0, C = $e.None;
                  break;
                case R.CloseSquareBracket:
                  _ = !1, C = g ? $e.None : $e.ForceTermination;
                  break;
                case R.OpenCurlyBrace:
                  L = !0, C = $e.None;
                  break;
                case R.CloseCurlyBrace:
                  C = L ? $e.None : $e.ForceTermination;
                  break;
                case R.SingleQuote:
                case R.DoubleQuote:
                case R.BackTick:
                  d === F ? C = $e.ForceTermination : d === R.SingleQuote || d === R.DoubleQuote || d === R.BackTick ? C = $e.None : C = $e.ForceTermination;
                  break;
                case R.Asterisk:
                  C = d === R.Asterisk ? $e.ForceTermination : $e.None;
                  break;
                case R.Pipe:
                  C = d === R.Pipe ? $e.ForceTermination : $e.None;
                  break;
                case R.Space:
                  C = _ ? $e.None : $e.ForceTermination;
                  break;
                default:
                  C = r.get(F);
              }
              C === $e.ForceTermination && (i.push(w1._createLink(r, o, a, c, u)), A = !0);
            } else if (p === pe.End) {
              let C;
              F === R.OpenSquareBracket ? (g = !0, C = $e.None) : C = r.get(F), C === $e.ForceTermination ? A = !0 : p = pe.Accept;
            } else p = n.nextState(p, F), p === pe.Invalid && (A = !0);
            A && (p = pe.Start, m = !1, g = !1, L = !1, c = u + 1, d = F), u++;
          }
          p === pe.Accept && i.push(w1._createLink(r, o, a, c, l));
        }
        return i;
      }
    };
    function L7(e) {
      return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : S7.computeLinks(e);
    }
    var F7 = (gi = class {
      constructor() {
        this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
      }
      navigateValueSet(t, n, r, i, a) {
        if (t && n) {
          let s = this.doNavigateValueSet(n, a);
          if (s) return { range: t, value: s };
        }
        if (r && i) {
          let s = this.doNavigateValueSet(i, a);
          if (s) return { range: r, value: s };
        }
        return null;
      }
      doNavigateValueSet(t, n) {
        let r = this.numberReplace(t, n);
        return r !== null ? r : this.textReplace(t, n);
      }
      numberReplace(t, n) {
        let r = Math.pow(10, t.length - (t.lastIndexOf(".") + 1)), i = Number(t), a = parseFloat(t);
        return !isNaN(i) && !isNaN(a) && i === a ? i === 0 && !n ? null : (i = Math.floor(i * r), i += n ? r : -r, String(i / r)) : null;
      }
      textReplace(t, n) {
        return this.valueSetsReplace(this._defaultValueSet, t, n);
      }
      valueSetsReplace(t, n, r) {
        let i = null;
        for (let a = 0, s = t.length; i === null && a < s; a++) i = this.valueSetReplace(t[a], n, r);
        return i;
      }
      valueSetReplace(t, n, r) {
        let i = t.indexOf(n);
        return i >= 0 ? (i += r ? 1 : -1, i < 0 ? i = t.length - 1 : i %= t.length, t[i]) : null;
      }
    }, gi.INSTANCE = new gi(), gi), b;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(b || (b = {}));
    var T;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
    })(T || (T = {}));
    var tu = class {
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
        return this._strToKeyCode[e.toLowerCase()] || b.Unknown;
      }
    }, Ws = new tu(), nu = new tu(), ru = new tu(), I7 = new Array(230), R7 = /* @__PURE__ */ Object.create(null), O7 = /* @__PURE__ */ Object.create(null), iu = [];
    for (let e = 0; e <= T.MAX_VALUE; e++) b.DependsOnKbLayout;
    for (let e = 0; e <= b.MAX_VALUE; e++) iu[e] = T.DependsOnKbLayout;
    (function() {
      let e = "", t = [[1, T.None, "None", b.Unknown, "unknown", 0, "VK_UNKNOWN", e, e], [1, T.Hyper, "Hyper", b.Unknown, e, 0, e, e, e], [1, T.Super, "Super", b.Unknown, e, 0, e, e, e], [1, T.Fn, "Fn", b.Unknown, e, 0, e, e, e], [1, T.FnLock, "FnLock", b.Unknown, e, 0, e, e, e], [1, T.Suspend, "Suspend", b.Unknown, e, 0, e, e, e], [1, T.Resume, "Resume", b.Unknown, e, 0, e, e, e], [1, T.Turbo, "Turbo", b.Unknown, e, 0, e, e, e], [1, T.Sleep, "Sleep", b.Unknown, e, 0, "VK_SLEEP", e, e], [1, T.WakeUp, "WakeUp", b.Unknown, e, 0, e, e, e], [0, T.KeyA, "KeyA", b.KeyA, "A", 65, "VK_A", e, e], [0, T.KeyB, "KeyB", b.KeyB, "B", 66, "VK_B", e, e], [0, T.KeyC, "KeyC", b.KeyC, "C", 67, "VK_C", e, e], [0, T.KeyD, "KeyD", b.KeyD, "D", 68, "VK_D", e, e], [0, T.KeyE, "KeyE", b.KeyE, "E", 69, "VK_E", e, e], [0, T.KeyF, "KeyF", b.KeyF, "F", 70, "VK_F", e, e], [0, T.KeyG, "KeyG", b.KeyG, "G", 71, "VK_G", e, e], [0, T.KeyH, "KeyH", b.KeyH, "H", 72, "VK_H", e, e], [0, T.KeyI, "KeyI", b.KeyI, "I", 73, "VK_I", e, e], [0, T.KeyJ, "KeyJ", b.KeyJ, "J", 74, "VK_J", e, e], [0, T.KeyK, "KeyK", b.KeyK, "K", 75, "VK_K", e, e], [0, T.KeyL, "KeyL", b.KeyL, "L", 76, "VK_L", e, e], [0, T.KeyM, "KeyM", b.KeyM, "M", 77, "VK_M", e, e], [0, T.KeyN, "KeyN", b.KeyN, "N", 78, "VK_N", e, e], [0, T.KeyO, "KeyO", b.KeyO, "O", 79, "VK_O", e, e], [0, T.KeyP, "KeyP", b.KeyP, "P", 80, "VK_P", e, e], [0, T.KeyQ, "KeyQ", b.KeyQ, "Q", 81, "VK_Q", e, e], [0, T.KeyR, "KeyR", b.KeyR, "R", 82, "VK_R", e, e], [0, T.KeyS, "KeyS", b.KeyS, "S", 83, "VK_S", e, e], [0, T.KeyT, "KeyT", b.KeyT, "T", 84, "VK_T", e, e], [0, T.KeyU, "KeyU", b.KeyU, "U", 85, "VK_U", e, e], [0, T.KeyV, "KeyV", b.KeyV, "V", 86, "VK_V", e, e], [0, T.KeyW, "KeyW", b.KeyW, "W", 87, "VK_W", e, e], [0, T.KeyX, "KeyX", b.KeyX, "X", 88, "VK_X", e, e], [0, T.KeyY, "KeyY", b.KeyY, "Y", 89, "VK_Y", e, e], [0, T.KeyZ, "KeyZ", b.KeyZ, "Z", 90, "VK_Z", e, e], [0, T.Digit1, "Digit1", b.Digit1, "1", 49, "VK_1", e, e], [0, T.Digit2, "Digit2", b.Digit2, "2", 50, "VK_2", e, e], [0, T.Digit3, "Digit3", b.Digit3, "3", 51, "VK_3", e, e], [0, T.Digit4, "Digit4", b.Digit4, "4", 52, "VK_4", e, e], [0, T.Digit5, "Digit5", b.Digit5, "5", 53, "VK_5", e, e], [0, T.Digit6, "Digit6", b.Digit6, "6", 54, "VK_6", e, e], [0, T.Digit7, "Digit7", b.Digit7, "7", 55, "VK_7", e, e], [0, T.Digit8, "Digit8", b.Digit8, "8", 56, "VK_8", e, e], [0, T.Digit9, "Digit9", b.Digit9, "9", 57, "VK_9", e, e], [0, T.Digit0, "Digit0", b.Digit0, "0", 48, "VK_0", e, e], [1, T.Enter, "Enter", b.Enter, "Enter", 13, "VK_RETURN", e, e], [1, T.Escape, "Escape", b.Escape, "Escape", 27, "VK_ESCAPE", e, e], [1, T.Backspace, "Backspace", b.Backspace, "Backspace", 8, "VK_BACK", e, e], [1, T.Tab, "Tab", b.Tab, "Tab", 9, "VK_TAB", e, e], [1, T.Space, "Space", b.Space, "Space", 32, "VK_SPACE", e, e], [0, T.Minus, "Minus", b.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"], [0, T.Equal, "Equal", b.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"], [0, T.BracketLeft, "BracketLeft", b.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"], [0, T.BracketRight, "BracketRight", b.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"], [0, T.Backslash, "Backslash", b.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"], [0, T.IntlHash, "IntlHash", b.Unknown, e, 0, e, e, e], [0, T.Semicolon, "Semicolon", b.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"], [0, T.Quote, "Quote", b.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"], [0, T.Backquote, "Backquote", b.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"], [0, T.Comma, "Comma", b.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"], [0, T.Period, "Period", b.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"], [0, T.Slash, "Slash", b.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"], [1, T.CapsLock, "CapsLock", b.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e], [1, T.F1, "F1", b.F1, "F1", 112, "VK_F1", e, e], [1, T.F2, "F2", b.F2, "F2", 113, "VK_F2", e, e], [1, T.F3, "F3", b.F3, "F3", 114, "VK_F3", e, e], [1, T.F4, "F4", b.F4, "F4", 115, "VK_F4", e, e], [1, T.F5, "F5", b.F5, "F5", 116, "VK_F5", e, e], [1, T.F6, "F6", b.F6, "F6", 117, "VK_F6", e, e], [1, T.F7, "F7", b.F7, "F7", 118, "VK_F7", e, e], [1, T.F8, "F8", b.F8, "F8", 119, "VK_F8", e, e], [1, T.F9, "F9", b.F9, "F9", 120, "VK_F9", e, e], [1, T.F10, "F10", b.F10, "F10", 121, "VK_F10", e, e], [1, T.F11, "F11", b.F11, "F11", 122, "VK_F11", e, e], [1, T.F12, "F12", b.F12, "F12", 123, "VK_F12", e, e], [1, T.PrintScreen, "PrintScreen", b.Unknown, e, 0, e, e, e], [1, T.ScrollLock, "ScrollLock", b.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e], [1, T.Pause, "Pause", b.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e], [1, T.Insert, "Insert", b.Insert, "Insert", 45, "VK_INSERT", e, e], [1, T.Home, "Home", b.Home, "Home", 36, "VK_HOME", e, e], [1, T.PageUp, "PageUp", b.PageUp, "PageUp", 33, "VK_PRIOR", e, e], [1, T.Delete, "Delete", b.Delete, "Delete", 46, "VK_DELETE", e, e], [1, T.End, "End", b.End, "End", 35, "VK_END", e, e], [1, T.PageDown, "PageDown", b.PageDown, "PageDown", 34, "VK_NEXT", e, e], [1, T.ArrowRight, "ArrowRight", b.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e], [1, T.ArrowLeft, "ArrowLeft", b.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e], [1, T.ArrowDown, "ArrowDown", b.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e], [1, T.ArrowUp, "ArrowUp", b.UpArrow, "UpArrow", 38, "VK_UP", "Up", e], [1, T.NumLock, "NumLock", b.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e], [1, T.NumpadDivide, "NumpadDivide", b.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e], [1, T.NumpadMultiply, "NumpadMultiply", b.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e], [1, T.NumpadSubtract, "NumpadSubtract", b.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e], [1, T.NumpadAdd, "NumpadAdd", b.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e], [1, T.NumpadEnter, "NumpadEnter", b.Enter, e, 0, e, e, e], [1, T.Numpad1, "Numpad1", b.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e], [1, T.Numpad2, "Numpad2", b.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e], [1, T.Numpad3, "Numpad3", b.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e], [1, T.Numpad4, "Numpad4", b.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e], [1, T.Numpad5, "Numpad5", b.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e], [1, T.Numpad6, "Numpad6", b.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e], [1, T.Numpad7, "Numpad7", b.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e], [1, T.Numpad8, "Numpad8", b.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e], [1, T.Numpad9, "Numpad9", b.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e], [1, T.Numpad0, "Numpad0", b.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e], [1, T.NumpadDecimal, "NumpadDecimal", b.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e], [0, T.IntlBackslash, "IntlBackslash", b.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e], [1, T.ContextMenu, "ContextMenu", b.ContextMenu, "ContextMenu", 93, e, e, e], [1, T.Power, "Power", b.Unknown, e, 0, e, e, e], [1, T.NumpadEqual, "NumpadEqual", b.Unknown, e, 0, e, e, e], [1, T.F13, "F13", b.F13, "F13", 124, "VK_F13", e, e], [1, T.F14, "F14", b.F14, "F14", 125, "VK_F14", e, e], [1, T.F15, "F15", b.F15, "F15", 126, "VK_F15", e, e], [1, T.F16, "F16", b.F16, "F16", 127, "VK_F16", e, e], [1, T.F17, "F17", b.F17, "F17", 128, "VK_F17", e, e], [1, T.F18, "F18", b.F18, "F18", 129, "VK_F18", e, e], [1, T.F19, "F19", b.F19, "F19", 130, "VK_F19", e, e], [1, T.F20, "F20", b.F20, "F20", 131, "VK_F20", e, e], [1, T.F21, "F21", b.F21, "F21", 132, "VK_F21", e, e], [1, T.F22, "F22", b.F22, "F22", 133, "VK_F22", e, e], [1, T.F23, "F23", b.F23, "F23", 134, "VK_F23", e, e], [1, T.F24, "F24", b.F24, "F24", 135, "VK_F24", e, e], [1, T.Open, "Open", b.Unknown, e, 0, e, e, e], [1, T.Help, "Help", b.Unknown, e, 0, e, e, e], [1, T.Select, "Select", b.Unknown, e, 0, e, e, e], [1, T.Again, "Again", b.Unknown, e, 0, e, e, e], [1, T.Undo, "Undo", b.Unknown, e, 0, e, e, e], [1, T.Cut, "Cut", b.Unknown, e, 0, e, e, e], [1, T.Copy, "Copy", b.Unknown, e, 0, e, e, e], [1, T.Paste, "Paste", b.Unknown, e, 0, e, e, e], [1, T.Find, "Find", b.Unknown, e, 0, e, e, e], [1, T.AudioVolumeMute, "AudioVolumeMute", b.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e], [1, T.AudioVolumeUp, "AudioVolumeUp", b.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e], [1, T.AudioVolumeDown, "AudioVolumeDown", b.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e], [1, T.NumpadComma, "NumpadComma", b.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e], [0, T.IntlRo, "IntlRo", b.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e], [1, T.KanaMode, "KanaMode", b.Unknown, e, 0, e, e, e], [0, T.IntlYen, "IntlYen", b.Unknown, e, 0, e, e, e], [1, T.Convert, "Convert", b.Unknown, e, 0, e, e, e], [1, T.NonConvert, "NonConvert", b.Unknown, e, 0, e, e, e], [1, T.Lang1, "Lang1", b.Unknown, e, 0, e, e, e], [1, T.Lang2, "Lang2", b.Unknown, e, 0, e, e, e], [1, T.Lang3, "Lang3", b.Unknown, e, 0, e, e, e], [1, T.Lang4, "Lang4", b.Unknown, e, 0, e, e, e], [1, T.Lang5, "Lang5", b.Unknown, e, 0, e, e, e], [1, T.Abort, "Abort", b.Unknown, e, 0, e, e, e], [1, T.Props, "Props", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenLeft, "NumpadParenLeft", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenRight, "NumpadParenRight", b.Unknown, e, 0, e, e, e], [1, T.NumpadBackspace, "NumpadBackspace", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryStore, "NumpadMemoryStore", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryRecall, "NumpadMemoryRecall", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryClear, "NumpadMemoryClear", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryAdd, "NumpadMemoryAdd", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemorySubtract, "NumpadMemorySubtract", b.Unknown, e, 0, e, e, e], [1, T.NumpadClear, "NumpadClear", b.Clear, "Clear", 12, "VK_CLEAR", e, e], [1, T.NumpadClearEntry, "NumpadClearEntry", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e], [1, T.None, e, b.Shift, "Shift", 16, "VK_SHIFT", e, e], [1, T.None, e, b.Alt, "Alt", 18, "VK_MENU", e, e], [1, T.None, e, b.Meta, "Meta", 91, "VK_COMMAND", e, e], [1, T.ControlLeft, "ControlLeft", b.Ctrl, e, 0, "VK_LCONTROL", e, e], [1, T.ShiftLeft, "ShiftLeft", b.Shift, e, 0, "VK_LSHIFT", e, e], [1, T.AltLeft, "AltLeft", b.Alt, e, 0, "VK_LMENU", e, e], [1, T.MetaLeft, "MetaLeft", b.Meta, e, 0, "VK_LWIN", e, e], [1, T.ControlRight, "ControlRight", b.Ctrl, e, 0, "VK_RCONTROL", e, e], [1, T.ShiftRight, "ShiftRight", b.Shift, e, 0, "VK_RSHIFT", e, e], [1, T.AltRight, "AltRight", b.Alt, e, 0, "VK_RMENU", e, e], [1, T.MetaRight, "MetaRight", b.Meta, e, 0, "VK_RWIN", e, e], [1, T.BrightnessUp, "BrightnessUp", b.Unknown, e, 0, e, e, e], [1, T.BrightnessDown, "BrightnessDown", b.Unknown, e, 0, e, e, e], [1, T.MediaPlay, "MediaPlay", b.Unknown, e, 0, e, e, e], [1, T.MediaRecord, "MediaRecord", b.Unknown, e, 0, e, e, e], [1, T.MediaFastForward, "MediaFastForward", b.Unknown, e, 0, e, e, e], [1, T.MediaRewind, "MediaRewind", b.Unknown, e, 0, e, e, e], [1, T.MediaTrackNext, "MediaTrackNext", b.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e], [1, T.MediaTrackPrevious, "MediaTrackPrevious", b.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e], [1, T.MediaStop, "MediaStop", b.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e], [1, T.Eject, "Eject", b.Unknown, e, 0, e, e, e], [1, T.MediaPlayPause, "MediaPlayPause", b.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e], [1, T.MediaSelect, "MediaSelect", b.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e], [1, T.LaunchMail, "LaunchMail", b.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e], [1, T.LaunchApp2, "LaunchApp2", b.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e], [1, T.LaunchApp1, "LaunchApp1", b.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e], [1, T.SelectTask, "SelectTask", b.Unknown, e, 0, e, e, e], [1, T.LaunchScreenSaver, "LaunchScreenSaver", b.Unknown, e, 0, e, e, e], [1, T.BrowserSearch, "BrowserSearch", b.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e], [1, T.BrowserHome, "BrowserHome", b.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e], [1, T.BrowserBack, "BrowserBack", b.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e], [1, T.BrowserForward, "BrowserForward", b.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e], [1, T.BrowserStop, "BrowserStop", b.Unknown, e, 0, "VK_BROWSER_STOP", e, e], [1, T.BrowserRefresh, "BrowserRefresh", b.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e], [1, T.BrowserFavorites, "BrowserFavorites", b.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e], [1, T.ZoomToggle, "ZoomToggle", b.Unknown, e, 0, e, e, e], [1, T.MailReply, "MailReply", b.Unknown, e, 0, e, e, e], [1, T.MailForward, "MailForward", b.Unknown, e, 0, e, e, e], [1, T.MailSend, "MailSend", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e], [1, T.None, e, b.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e], [1, T.None, e, b.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANGUL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_JUNJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_FINAL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANJI", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONCONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ACCEPT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_MODECHANGE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SELECT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PRINT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXECUTE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SNAPSHOT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HELP", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_APPS", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PROCESSKEY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PACKET", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ATTN", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CRSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EREOF", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PLAY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ZOOM", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONAME", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PA1", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_OEM_CLEAR", e, e]], n = [], r = [];
      for (let i of t) {
        let [a, s, o, l, u, c, d, p, m] = i;
        if (r[s] || (r[s] = !0, R7[o] = s, O7[o.toLowerCase()] = s, a && l !== b.Unknown && l !== b.Enter && l !== b.Ctrl && l !== b.Shift && l !== b.Alt && l !== b.Meta && (iu[l] = s)), !n[l]) {
          if (n[l] = !0, !u) throw new Error(`String representation missing for key code ${l} around scan code ${o}`);
          Ws.define(l, u), nu.define(l, p || u), ru.define(l, m || p || u);
        }
        c && (I7[c] = l);
      }
      iu[b.Enter] = T.Enter;
    })();
    var oh;
    (function(e) {
      function t(o) {
        return Ws.keyCodeToStr(o);
      }
      e.toString = t;
      function n(o) {
        return Ws.strToKeyCode(o);
      }
      e.fromString = n;
      function r(o) {
        return nu.keyCodeToStr(o);
      }
      e.toUserSettingsUS = r;
      function i(o) {
        return ru.keyCodeToStr(o);
      }
      e.toUserSettingsGeneral = i;
      function a(o) {
        return nu.strToKeyCode(o) || ru.strToKeyCode(o);
      }
      e.fromUserSettings = a;
      function s(o) {
        if (o >= b.Numpad0 && o <= b.NumpadDivide) return null;
        switch (o) {
          case b.UpArrow:
            return "Up";
          case b.DownArrow:
            return "Down";
          case b.LeftArrow:
            return "Left";
          case b.RightArrow:
            return "Right";
        }
        return Ws.keyCodeToStr(o);
      }
      e.toElectronAccelerator = s;
    })(oh || (oh = {}));
    var Bi;
    (function(e) {
      e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
    })(Bi || (Bi = {}));
    function x7(e, t) {
      let n = (t & 65535) << 16 >>> 0;
      return (e | n) >>> 0;
    }
    var au;
    (function(e) {
      e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart";
    })(au || (au = {}));
    var Xr, su = globalThis.vscode;
    if (typeof su < "u" && typeof su.process < "u") {
      let e = su.process;
      Xr = { get platform() {
        return e.platform;
      }, get arch() {
        return e.arch;
      }, get env() {
        return e.env;
      }, cwd() {
        return e.cwd();
      } };
    } else typeof process < "u" && typeof ((g2 = process == null ? void 0 : process.versions) == null ? void 0 : g2.node) == "string" ? Xr = { get platform() {
      return process.platform;
    }, get arch() {
      return process.arch;
    }, get env() {
      return process.env;
    }, cwd() {
      return process.env.VSCODE_CWD || process.cwd();
    } } : Xr = { get platform() {
      return ki ? "win32" : j5 ? "darwin" : "linux";
    }, get arch() {
    }, get env() {
      return {};
    }, cwd() {
      return "/";
    } };
    var Ys = Xr.cwd, k7 = Xr.env, M7 = Xr.platform;
    Xr.arch;
    var U7 = 65, P7 = 97, B7 = 90, $7 = 122, Jr = 46, Dt = 47, Wt = 92, nr = 58, V7 = 63, lh = class extends Error {
      constructor(e, t, n) {
        let r;
        typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
        let i = e.indexOf(".") !== -1 ? "property" : "argument", a = `The "${e}" ${i} ${r} of type ${t}`;
        a += `. Received type ${typeof n}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
      }
    };
    function K7(e, t) {
      if (e === null || typeof e != "object") throw new lh(t, "Object", e);
    }
    function Qe(e, t) {
      if (typeof e != "string") throw new lh(t, "string", e);
    }
    var yn = M7 === "win32";
    function ye(e) {
      return e === Dt || e === Wt;
    }
    function ou(e) {
      return e === Dt;
    }
    function rr(e) {
      return e >= U7 && e <= B7 || e >= P7 && e <= $7;
    }
    function zs(e, t, n, r) {
      let i = "", a = 0, s = -1, o = 0, l = 0;
      for (let u = 0; u <= e.length; ++u) {
        if (u < e.length) l = e.charCodeAt(u);
        else {
          if (r(l)) break;
          l = Dt;
        }
        if (r(l)) {
          if (!(s === u - 1 || o === 1)) if (o === 2) {
            if (i.length < 2 || a !== 2 || i.charCodeAt(i.length - 1) !== Jr || i.charCodeAt(i.length - 2) !== Jr) {
              if (i.length > 2) {
                let c = i.lastIndexOf(n);
                c === -1 ? (i = "", a = 0) : (i = i.slice(0, c), a = i.length - 1 - i.lastIndexOf(n)), s = u, o = 0;
                continue;
              } else if (i.length !== 0) {
                i = "", a = 0, s = u, o = 0;
                continue;
              }
            }
            t && (i += i.length > 0 ? `${n}..` : "..", a = 2);
          } else i.length > 0 ? i += `${n}${e.slice(s + 1, u)}` : i = e.slice(s + 1, u), a = u - s - 1;
          s = u, o = 0;
        } else l === Jr && o !== -1 ? ++o : o = -1;
      }
      return i;
    }
    function j7(e) {
      return e ? `${e[0] === "." ? "" : "."}${e}` : "";
    }
    function uh(e, t) {
      K7(t, "pathObject");
      let n = t.dir || t.root, r = t.base || `${t.name || ""}${j7(t.ext)}`;
      return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
    }
    var vt = { resolve(...e) {
      let t = "", n = "", r = !1;
      for (let i = e.length - 1; i >= -1; i--) {
        let a;
        if (i >= 0) {
          if (a = e[i], Qe(a, `paths[${i}]`), a.length === 0) continue;
        } else t.length === 0 ? a = Ys() : (a = k7[`=${t}`] || Ys(), (a === void 0 || a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === Wt) && (a = `${t}\\`));
        let s = a.length, o = 0, l = "", u = !1, c = a.charCodeAt(0);
        if (s === 1) ye(c) && (o = 1, u = !0);
        else if (ye(c)) if (u = !0, ye(a.charCodeAt(1))) {
          let d = 2, p = d;
          for (; d < s && !ye(a.charCodeAt(d)); ) d++;
          if (d < s && d !== p) {
            let m = a.slice(p, d);
            for (p = d; d < s && ye(a.charCodeAt(d)); ) d++;
            if (d < s && d !== p) {
              for (p = d; d < s && !ye(a.charCodeAt(d)); ) d++;
              (d === s || d !== p) && (l = `\\\\${m}\\${a.slice(p, d)}`, o = d);
            }
          }
        } else o = 1;
        else rr(c) && a.charCodeAt(1) === nr && (l = a.slice(0, 2), o = 2, s > 2 && ye(a.charCodeAt(2)) && (u = !0, o = 3));
        if (l.length > 0) if (t.length > 0) {
          if (l.toLowerCase() !== t.toLowerCase()) continue;
        } else t = l;
        if (r) {
          if (t.length > 0) break;
        } else if (n = `${a.slice(o)}\\${n}`, r = u, u && t.length > 0) break;
      }
      return n = zs(n, !r, "\\", ye), r ? `${t}\\${n}` : `${t}${n}` || ".";
    }, normalize(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = 0, r, i = !1, a = e.charCodeAt(0);
      if (t === 1) return ou(a) ? "\\" : e;
      if (ye(a)) if (i = !0, ye(e.charCodeAt(1))) {
        let o = 2, l = o;
        for (; o < t && !ye(e.charCodeAt(o)); ) o++;
        if (o < t && o !== l) {
          let u = e.slice(l, o);
          for (l = o; o < t && ye(e.charCodeAt(o)); ) o++;
          if (o < t && o !== l) {
            for (l = o; o < t && !ye(e.charCodeAt(o)); ) o++;
            if (o === t) return `\\\\${u}\\${e.slice(l)}\\`;
            o !== l && (r = `\\\\${u}\\${e.slice(l, o)}`, n = o);
          }
        }
      } else n = 1;
      else rr(a) && e.charCodeAt(1) === nr && (r = e.slice(0, 2), n = 2, t > 2 && ye(e.charCodeAt(2)) && (i = !0, n = 3));
      let s = n < t ? zs(e.slice(n), !i, "\\", ye) : "";
      if (s.length === 0 && !i && (s = "."), s.length > 0 && ye(e.charCodeAt(t - 1)) && (s += "\\"), !i && r === void 0 && e.includes(":")) {
        if (s.length >= 2 && rr(s.charCodeAt(0)) && s.charCodeAt(1) === nr) return `.\\${s}`;
        let o = e.indexOf(":");
        do
          if (o === t - 1 || ye(e.charCodeAt(o + 1))) return `.\\${s}`;
        while ((o = e.indexOf(":", o + 1)) !== -1);
      }
      return r === void 0 ? i ? `\\${s}` : s : i ? `${r}\\${s}` : `${r}${s}`;
    }, isAbsolute(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return !1;
      let n = e.charCodeAt(0);
      return ye(n) || t > 2 && rr(n) && e.charCodeAt(1) === nr && ye(e.charCodeAt(2));
    }, join(...e) {
      if (e.length === 0) return ".";
      let t, n;
      for (let a = 0; a < e.length; ++a) {
        let s = e[a];
        Qe(s, "path"), s.length > 0 && (t === void 0 ? t = n = s : t += `\\${s}`);
      }
      if (t === void 0) return ".";
      let r = !0, i = 0;
      if (typeof n == "string" && ye(n.charCodeAt(0))) {
        ++i;
        let a = n.length;
        a > 1 && ye(n.charCodeAt(1)) && (++i, a > 2 && (ye(n.charCodeAt(2)) ? ++i : r = !1));
      }
      if (r) {
        for (; i < t.length && ye(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = `\\${t.slice(i)}`);
      }
      return vt.normalize(t);
    }, relative(e, t) {
      if (Qe(e, "from"), Qe(t, "to"), e === t) return "";
      let n = vt.resolve(e), r = vt.resolve(t);
      if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
      if (n.length !== e.length || r.length !== t.length) {
        let g = n.split("\\"), _ = r.split("\\");
        g[g.length - 1] === "" && g.pop(), _[_.length - 1] === "" && _.pop();
        let L = g.length, A = _.length, F = L < A ? L : A, C;
        for (C = 0; C < F && g[C].toLowerCase() === _[C].toLowerCase(); C++) ;
        return C === 0 ? r : C === F ? A > F ? _.slice(C).join("\\") : L > F ? "..\\".repeat(L - 1 - C) + ".." : "" : "..\\".repeat(L - C) + _.slice(C).join("\\");
      }
      let i = 0;
      for (; i < e.length && e.charCodeAt(i) === Wt; ) i++;
      let a = e.length;
      for (; a - 1 > i && e.charCodeAt(a - 1) === Wt; ) a--;
      let s = a - i, o = 0;
      for (; o < t.length && t.charCodeAt(o) === Wt; ) o++;
      let l = t.length;
      for (; l - 1 > o && t.charCodeAt(l - 1) === Wt; ) l--;
      let u = l - o, c = s < u ? s : u, d = -1, p = 0;
      for (; p < c; p++) {
        let g = e.charCodeAt(i + p);
        if (g !== t.charCodeAt(o + p)) break;
        g === Wt && (d = p);
      }
      if (p !== c) {
        if (d === -1) return r;
      } else {
        if (u > c) {
          if (t.charCodeAt(o + p) === Wt) return r.slice(o + p + 1);
          if (p === 2) return r.slice(o + p);
        }
        s > c && (e.charCodeAt(i + p) === Wt ? d = p : p === 2 && (d = 3)), d === -1 && (d = 0);
      }
      let m = "";
      for (p = i + d + 1; p <= a; ++p) (p === a || e.charCodeAt(p) === Wt) && (m += m.length === 0 ? ".." : "\\..");
      return o += d, m.length > 0 ? `${m}${r.slice(o, l)}` : (r.charCodeAt(o) === Wt && ++o, r.slice(o, l));
    }, toNamespacedPath(e) {
      if (typeof e != "string" || e.length === 0) return e;
      let t = vt.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === Wt) {
        if (t.charCodeAt(1) === Wt) {
          let n = t.charCodeAt(2);
          if (n !== V7 && n !== Jr) return `\\\\?\\UNC\\${t.slice(2)}`;
        }
      } else if (rr(t.charCodeAt(0)) && t.charCodeAt(1) === nr && t.charCodeAt(2) === Wt) return `\\\\?\\${t}`;
      return t;
    }, dirname(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = -1, r = 0, i = e.charCodeAt(0);
      if (t === 1) return ye(i) ? e : ".";
      if (ye(i)) {
        if (n = r = 1, ye(e.charCodeAt(1))) {
          let o = 2, l = o;
          for (; o < t && !ye(e.charCodeAt(o)); ) o++;
          if (o < t && o !== l) {
            for (l = o; o < t && ye(e.charCodeAt(o)); ) o++;
            if (o < t && o !== l) {
              for (l = o; o < t && !ye(e.charCodeAt(o)); ) o++;
              if (o === t) return e;
              o !== l && (n = r = o + 1);
            }
          }
        }
      } else rr(i) && e.charCodeAt(1) === nr && (n = t > 2 && ye(e.charCodeAt(2)) ? 3 : 2, r = n);
      let a = -1, s = !0;
      for (let o = t - 1; o >= r; --o) if (ye(e.charCodeAt(o))) {
        if (!s) {
          a = o;
          break;
        }
      } else s = !1;
      if (a === -1) {
        if (n === -1) return ".";
        a = n;
      }
      return e.slice(0, a);
    }, basename(e, t) {
      t !== void 0 && Qe(t, "suffix"), Qe(e, "path");
      let n = 0, r = -1, i = !0, a;
      if (e.length >= 2 && rr(e.charCodeAt(0)) && e.charCodeAt(1) === nr && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let s = t.length - 1, o = -1;
        for (a = e.length - 1; a >= n; --a) {
          let l = e.charCodeAt(a);
          if (ye(l)) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else o === -1 && (i = !1, o = a + 1), s >= 0 && (l === t.charCodeAt(s) ? --s === -1 && (r = a) : (s = -1, r = o));
        }
        return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (a = e.length - 1; a >= n; --a) if (ye(e.charCodeAt(a))) {
        if (!i) {
          n = a + 1;
          break;
        }
      } else r === -1 && (i = !1, r = a + 1);
      return r === -1 ? "" : e.slice(n, r);
    }, extname(e) {
      Qe(e, "path");
      let t = 0, n = -1, r = 0, i = -1, a = !0, s = 0;
      e.length >= 2 && e.charCodeAt(1) === nr && rr(e.charCodeAt(0)) && (t = r = 2);
      for (let o = e.length - 1; o >= t; --o) {
        let l = e.charCodeAt(o);
        if (ye(l)) {
          if (!a) {
            r = o + 1;
            break;
          }
          continue;
        }
        i === -1 && (a = !1, i = o + 1), l === Jr ? n === -1 ? n = o : s !== 1 && (s = 1) : n !== -1 && (s = -1);
      }
      return n === -1 || i === -1 || s === 0 || s === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
    }, format: uh.bind(null, "\\"), parse(e) {
      Qe(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.length, r = 0, i = e.charCodeAt(0);
      if (n === 1) return ye(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
      if (ye(i)) {
        if (r = 1, ye(e.charCodeAt(1))) {
          let d = 2, p = d;
          for (; d < n && !ye(e.charCodeAt(d)); ) d++;
          if (d < n && d !== p) {
            for (p = d; d < n && ye(e.charCodeAt(d)); ) d++;
            if (d < n && d !== p) {
              for (p = d; d < n && !ye(e.charCodeAt(d)); ) d++;
              d === n ? r = d : d !== p && (r = d + 1);
            }
          }
        }
      } else if (rr(i) && e.charCodeAt(1) === nr) {
        if (n <= 2) return t.root = t.dir = e, t;
        if (r = 2, ye(e.charCodeAt(2))) {
          if (n === 3) return t.root = t.dir = e, t;
          r = 3;
        }
      }
      r > 0 && (t.root = e.slice(0, r));
      let a = -1, s = r, o = -1, l = !0, u = e.length - 1, c = 0;
      for (; u >= r; --u) {
        if (i = e.charCodeAt(u), ye(i)) {
          if (!l) {
            s = u + 1;
            break;
          }
          continue;
        }
        o === -1 && (l = !1, o = u + 1), i === Jr ? a === -1 ? a = u : c !== 1 && (c = 1) : a !== -1 && (c = -1);
      }
      return o !== -1 && (a === -1 || c === 0 || c === 1 && a === o - 1 && a === s + 1 ? t.base = t.name = e.slice(s, o) : (t.name = e.slice(s, a), t.base = e.slice(s, o), t.ext = e.slice(a, o))), s > 0 && s !== r ? t.dir = e.slice(0, s - 1) : t.dir = t.root, t;
    }, sep: "\\", delimiter: ";", win32: null, posix: null }, q7 = (() => {
      if (yn) {
        let e = /\\/g;
        return () => {
          let t = Ys().replace(e, "/");
          return t.slice(t.indexOf("/"));
        };
      }
      return () => Ys();
    })(), Ve = { resolve(...e) {
      let t = "", n = !1;
      for (let r = e.length - 1; r >= 0 && !n; r--) {
        let i = e[r];
        Qe(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === Dt);
      }
      if (!n) {
        let r = q7();
        t = `${r}/${t}`, n = r.charCodeAt(0) === Dt;
      }
      return t = zs(t, !n, "/", ou), n ? `/${t}` : t.length > 0 ? t : ".";
    }, normalize(e) {
      if (Qe(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === Dt, n = e.charCodeAt(e.length - 1) === Dt;
      return e = zs(e, !t, "/", ou), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    }, isAbsolute(e) {
      return Qe(e, "path"), e.length > 0 && e.charCodeAt(0) === Dt;
    }, join(...e) {
      if (e.length === 0) return ".";
      let t = [];
      for (let n = 0; n < e.length; ++n) {
        let r = e[n];
        Qe(r, "path"), r.length > 0 && t.push(r);
      }
      return t.length === 0 ? "." : Ve.normalize(t.join("/"));
    }, relative(e, t) {
      if (Qe(e, "from"), Qe(t, "to"), e === t || (e = Ve.resolve(e), t = Ve.resolve(t), e === t)) return "";
      let n = 1, r = e.length, i = r - n, a = 1, s = t.length - a, o = i < s ? i : s, l = -1, u = 0;
      for (; u < o; u++) {
        let d = e.charCodeAt(n + u);
        if (d !== t.charCodeAt(a + u)) break;
        d === Dt && (l = u);
      }
      if (u === o) if (s > o) {
        if (t.charCodeAt(a + u) === Dt) return t.slice(a + u + 1);
        if (u === 0) return t.slice(a + u);
      } else i > o && (e.charCodeAt(n + u) === Dt ? l = u : u === 0 && (l = 0));
      let c = "";
      for (u = n + l + 1; u <= r; ++u) (u === r || e.charCodeAt(u) === Dt) && (c += c.length === 0 ? ".." : "/..");
      return `${c}${t.slice(a + l)}`;
    }, toNamespacedPath(e) {
      return e;
    }, dirname(e) {
      if (Qe(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === Dt, n = -1, r = !0;
      for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === Dt) {
        if (!r) {
          n = i;
          break;
        }
      } else r = !1;
      return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
    }, basename(e, t) {
      t !== void 0 && Qe(t, "suffix"), Qe(e, "path");
      let n = 0, r = -1, i = !0, a;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let s = t.length - 1, o = -1;
        for (a = e.length - 1; a >= 0; --a) {
          let l = e.charCodeAt(a);
          if (l === Dt) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else o === -1 && (i = !1, o = a + 1), s >= 0 && (l === t.charCodeAt(s) ? --s === -1 && (r = a) : (s = -1, r = o));
        }
        return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (a = e.length - 1; a >= 0; --a) if (e.charCodeAt(a) === Dt) {
        if (!i) {
          n = a + 1;
          break;
        }
      } else r === -1 && (i = !1, r = a + 1);
      return r === -1 ? "" : e.slice(n, r);
    }, extname(e) {
      Qe(e, "path");
      let t = -1, n = 0, r = -1, i = !0, a = 0;
      for (let s = e.length - 1; s >= 0; --s) {
        let o = e[s];
        if (o === "/") {
          if (!i) {
            n = s + 1;
            break;
          }
          continue;
        }
        r === -1 && (i = !1, r = s + 1), o === "." ? t === -1 ? t = s : a !== 1 && (a = 1) : t !== -1 && (a = -1);
      }
      return t === -1 || r === -1 || a === 0 || a === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    }, format: uh.bind(null, "/"), parse(e) {
      Qe(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.charCodeAt(0) === Dt, r;
      n ? (t.root = "/", r = 1) : r = 0;
      let i = -1, a = 0, s = -1, o = !0, l = e.length - 1, u = 0;
      for (; l >= r; --l) {
        let c = e.charCodeAt(l);
        if (c === Dt) {
          if (!o) {
            a = l + 1;
            break;
          }
          continue;
        }
        s === -1 && (o = !1, s = l + 1), c === Jr ? i === -1 ? i = l : u !== 1 && (u = 1) : i !== -1 && (u = -1);
      }
      if (s !== -1) {
        let c = a === 0 && n ? 1 : a;
        i === -1 || u === 0 || u === 1 && i === s - 1 && i === a + 1 ? t.base = t.name = e.slice(c, s) : (t.name = e.slice(c, i), t.base = e.slice(c, s), t.ext = e.slice(i, s));
      }
      return a > 0 ? t.dir = e.slice(0, a - 1) : n && (t.dir = "/"), t;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    Ve.win32 = vt.win32 = vt, Ve.posix = vt.posix = Ve;
    var G7 = yn ? vt.normalize : Ve.normalize;
    yn ? vt.isAbsolute : Ve.isAbsolute;
    var H7 = yn ? vt.join : Ve.join, W7 = yn ? vt.resolve : Ve.resolve, Y7 = yn ? vt.relative : Ve.relative, z7 = yn ? vt.dirname : Ve.dirname;
    yn ? vt.basename : Ve.basename, yn ? vt.extname : Ve.extname, yn ? vt.parse : Ve.parse;
    var Xs = yn ? vt.sep : Ve.sep, X7 = /^\w[\w\d+.-]*$/, J7 = /^\//, Q7 = /^\/\//;
    function Z7(e, t) {
      if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
      if (e.scheme && !X7.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (e.path) {
        if (e.authority) {
          if (!J7.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (Q7.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    function e9(e, t) {
      return !e && !t ? "file" : e;
    }
    function t9(e, t) {
      switch (e) {
        case "https":
        case "http":
        case "file":
          t ? t[0] !== Nn && (t = Nn + t) : t = Nn;
          break;
      }
      return t;
    }
    var Ke = "", Nn = "/", n9 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Yt = class Po {
      static isUri(t) {
        return t instanceof Po ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
      }
      constructor(t, n, r, i, a, s = !1) {
        typeof t == "object" ? (this.scheme = t.scheme || Ke, this.authority = t.authority || Ke, this.path = t.path || Ke, this.query = t.query || Ke, this.fragment = t.fragment || Ke) : (this.scheme = e9(t, s), this.authority = n || Ke, this.path = t9(this.scheme, r || Ke), this.query = i || Ke, this.fragment = a || Ke, Z7(this, s));
      }
      get fsPath() {
        return Js(this, !1);
      }
      with(t) {
        if (!t) return this;
        let { scheme: n, authority: r, path: i, query: a, fragment: s } = t;
        return n === void 0 ? n = this.scheme : n === null && (n = Ke), r === void 0 ? r = this.authority : r === null && (r = Ke), i === void 0 ? i = this.path : i === null && (i = Ke), a === void 0 ? a = this.query : a === null && (a = Ke), s === void 0 ? s = this.fragment : s === null && (s = Ke), n === this.scheme && r === this.authority && i === this.path && a === this.query && s === this.fragment ? this : new $i(n, r, i, a, s);
      }
      static parse(t, n = !1) {
        let r = n9.exec(t);
        return r ? new $i(r[2] || Ke, Qs(r[4] || Ke), Qs(r[5] || Ke), Qs(r[7] || Ke), Qs(r[9] || Ke), n) : new $i(Ke, Ke, Ke, Ke, Ke);
      }
      static file(t) {
        let n = Ke;
        if (ki && (t = t.replace(/\\/g, Nn)), t[0] === Nn && t[1] === Nn) {
          let r = t.indexOf(Nn, 2);
          r === -1 ? (n = t.substring(2), t = Nn) : (n = t.substring(2, r), t = t.substring(r) || Nn);
        }
        return new $i("file", n, t, Ke, Ke);
      }
      static from(t, n) {
        return new $i(t.scheme, t.authority, t.path, t.query, t.fragment, n);
      }
      static joinPath(t, ...n) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let r;
        return ki && t.scheme === "file" ? r = Po.file(vt.join(Js(t, !0), ...n)).path : r = Ve.join(t.path, ...n), t.with({ path: r });
      }
      toString(t = !1) {
        return lu(this, t);
      }
      toJSON() {
        return this;
      }
      static revive(t) {
        if (t) {
          if (t instanceof Po) return t;
          {
            let n = new $i(t);
            return n._formatted = t.external ?? null, n._fsPath = t._sep === ch ? t.fsPath ?? null : null, n;
          }
        } else return t;
      }
      [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
      }
    }, ch = ki ? 1 : void 0, $i = class extends Yt {
      constructor() {
        super(...arguments), this._formatted = null, this._fsPath = null;
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = Js(this, !1)), this._fsPath;
      }
      toString(e = !1) {
        return e ? lu(this, !0) : (this._formatted || (this._formatted = lu(this, !1)), this._formatted);
      }
      toJSON() {
        let e = { $mid: au.Uri };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = ch), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }
    }, dh = { [R.Colon]: "%3A", [R.Slash]: "%2F", [R.QuestionMark]: "%3F", [R.Hash]: "%23", [R.OpenSquareBracket]: "%5B", [R.CloseSquareBracket]: "%5D", [R.AtSign]: "%40", [R.ExclamationMark]: "%21", [R.DollarSign]: "%24", [R.Ampersand]: "%26", [R.SingleQuote]: "%27", [R.OpenParen]: "%28", [R.CloseParen]: "%29", [R.Asterisk]: "%2A", [R.Plus]: "%2B", [R.Comma]: "%2C", [R.Semicolon]: "%3B", [R.Equals]: "%3D", [R.Space]: "%20" };
    function hh(e, t, n) {
      let r, i = -1;
      for (let a = 0; a < e.length; a++) {
        let s = e.charCodeAt(a);
        if (s >= R.a && s <= R.z || s >= R.A && s <= R.Z || s >= R.Digit0 && s <= R.Digit9 || s === R.Dash || s === R.Period || s === R.Underline || s === R.Tilde || t && s === R.Slash || n && s === R.OpenSquareBracket || n && s === R.CloseSquareBracket || n && s === R.Colon) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
        else {
          r === void 0 && (r = e.substr(0, a));
          let o = dh[s];
          o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += o) : i === -1 && (i = a);
        }
      }
      return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
    }
    function r9(e) {
      let t;
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        r === R.Hash || r === R.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += dh[r]) : t !== void 0 && (t += e[n]);
      }
      return t !== void 0 ? t : e;
    }
    function Js(e, t) {
      let n;
      return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === R.Slash && (e.path.charCodeAt(1) >= R.A && e.path.charCodeAt(1) <= R.Z || e.path.charCodeAt(1) >= R.a && e.path.charCodeAt(1) <= R.z) && e.path.charCodeAt(2) === R.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, ki && (n = n.replace(/\//g, "\\")), n;
    }
    function lu(e, t) {
      let n = t ? r9 : hh, r = "", { scheme: i, authority: a, path: s, query: o, fragment: l } = e;
      if (i && (r += i, r += ":"), (a || i === "file") && (r += Nn, r += Nn), a) {
        let u = a.indexOf("@");
        if (u !== -1) {
          let c = a.substr(0, u);
          a = a.substr(u + 1), u = c.lastIndexOf(":"), u === -1 ? r += n(c, !1, !1) : (r += n(c.substr(0, u), !1, !1), r += ":", r += n(c.substr(u + 1), !1, !0)), r += "@";
        }
        a = a.toLowerCase(), u = a.lastIndexOf(":"), u === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, u), !1, !0), r += a.substr(u));
      }
      if (s) {
        if (s.length >= 3 && s.charCodeAt(0) === R.Slash && s.charCodeAt(2) === R.Colon) {
          let u = s.charCodeAt(1);
          u >= R.A && u <= R.Z && (s = `/${String.fromCharCode(u + 32)}:${s.substr(3)}`);
        } else if (s.length >= 2 && s.charCodeAt(1) === R.Colon) {
          let u = s.charCodeAt(0);
          u >= R.A && u <= R.Z && (s = `${String.fromCharCode(u + 32)}:${s.substr(2)}`);
        }
        r += n(s, !0, !1);
      }
      return o && (r += "?", r += n(o, !1, !1)), l && (r += "#", r += t ? l : hh(l, !1, !1)), r;
    }
    function fh(e) {
      try {
        return decodeURIComponent(e);
      } catch {
        return e.length > 3 ? e.substr(0, 3) + fh(e.substr(3)) : e;
      }
    }
    var ph = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function Qs(e) {
      return e.match(ph) ? e.replace(ph, (t) => fh(t)) : e;
    }
    var Ar;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(Ar || (Ar = {}));
    var i9 = class mn extends fe {
      constructor(t, n, r, i) {
        super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
      }
      toString() {
        return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
      }
      equalsSelection(t) {
        return mn.selectionsEqual(this, t);
      }
      static selectionsEqual(t, n) {
        return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
      }
      getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? Ar.LTR : Ar.RTL;
      }
      setEndPosition(t, n) {
        return this.getDirection() === Ar.LTR ? new mn(this.startLineNumber, this.startColumn, t, n) : new mn(t, n, this.startLineNumber, this.startColumn);
      }
      getPosition() {
        return new Te(this.positionLineNumber, this.positionColumn);
      }
      getSelectionStart() {
        return new Te(this.selectionStartLineNumber, this.selectionStartColumn);
      }
      setStartPosition(t, n) {
        return this.getDirection() === Ar.LTR ? new mn(t, n, this.endLineNumber, this.endColumn) : new mn(this.endLineNumber, this.endColumn, t, n);
      }
      static fromPositions(t, n = t) {
        return new mn(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static fromRange(t, n) {
        return n === Ar.LTR ? new mn(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new mn(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
      }
      static liftSelection(t) {
        return new mn(t.selectionStartLineNumber, t.selectionStartColumn, t.positionLineNumber, t.positionColumn);
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
      static createWithDirection(t, n, r, i, a) {
        return a === Ar.LTR ? new mn(t, n, r, i) : new mn(r, i, t, n);
      }
    }, mh = /* @__PURE__ */ Object.create(null);
    function h(e, t) {
      if (y5(t)) {
        let n = mh[t];
        if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
        t = n;
      }
      return mh[e] = t, { id: e };
    }
    var a9 = { add: h("add", 6e4), plus: h("plus", 6e4), gistNew: h("gist-new", 6e4), repoCreate: h("repo-create", 6e4), lightbulb: h("lightbulb", 60001), lightBulb: h("light-bulb", 60001), repo: h("repo", 60002), repoDelete: h("repo-delete", 60002), gistFork: h("gist-fork", 60003), repoForked: h("repo-forked", 60003), gitPullRequest: h("git-pull-request", 60004), gitPullRequestAbandoned: h("git-pull-request-abandoned", 60004), recordKeys: h("record-keys", 60005), keyboard: h("keyboard", 60005), tag: h("tag", 60006), gitPullRequestLabel: h("git-pull-request-label", 60006), tagAdd: h("tag-add", 60006), tagRemove: h("tag-remove", 60006), person: h("person", 60007), personFollow: h("person-follow", 60007), personOutline: h("person-outline", 60007), personFilled: h("person-filled", 60007), gitBranch: h("git-branch", 60008), gitBranchCreate: h("git-branch-create", 60008), gitBranchDelete: h("git-branch-delete", 60008), sourceControl: h("source-control", 60008), mirror: h("mirror", 60009), mirrorPublic: h("mirror-public", 60009), star: h("star", 60010), starAdd: h("star-add", 60010), starDelete: h("star-delete", 60010), starEmpty: h("star-empty", 60010), comment: h("comment", 60011), commentAdd: h("comment-add", 60011), alert: h("alert", 60012), warning: h("warning", 60012), search: h("search", 60013), searchSave: h("search-save", 60013), logOut: h("log-out", 60014), signOut: h("sign-out", 60014), logIn: h("log-in", 60015), signIn: h("sign-in", 60015), eye: h("eye", 60016), eyeUnwatch: h("eye-unwatch", 60016), eyeWatch: h("eye-watch", 60016), circleFilled: h("circle-filled", 60017), primitiveDot: h("primitive-dot", 60017), closeDirty: h("close-dirty", 60017), debugBreakpoint: h("debug-breakpoint", 60017), debugBreakpointDisabled: h("debug-breakpoint-disabled", 60017), debugHint: h("debug-hint", 60017), terminalDecorationSuccess: h("terminal-decoration-success", 60017), primitiveSquare: h("primitive-square", 60018), edit: h("edit", 60019), pencil: h("pencil", 60019), info: h("info", 60020), issueOpened: h("issue-opened", 60020), gistPrivate: h("gist-private", 60021), gitForkPrivate: h("git-fork-private", 60021), lock: h("lock", 60021), mirrorPrivate: h("mirror-private", 60021), close: h("close", 60022), removeClose: h("remove-close", 60022), x: h("x", 60022), repoSync: h("repo-sync", 60023), sync: h("sync", 60023), clone: h("clone", 60024), desktopDownload: h("desktop-download", 60024), beaker: h("beaker", 60025), microscope: h("microscope", 60025), vm: h("vm", 60026), deviceDesktop: h("device-desktop", 60026), file: h("file", 60027), fileText: h("file-text", 60027), more: h("more", 60028), ellipsis: h("ellipsis", 60028), kebabHorizontal: h("kebab-horizontal", 60028), mailReply: h("mail-reply", 60029), reply: h("reply", 60029), organization: h("organization", 60030), organizationFilled: h("organization-filled", 60030), organizationOutline: h("organization-outline", 60030), newFile: h("new-file", 60031), fileAdd: h("file-add", 60031), newFolder: h("new-folder", 60032), fileDirectoryCreate: h("file-directory-create", 60032), trash: h("trash", 60033), trashcan: h("trashcan", 60033), history: h("history", 60034), clock: h("clock", 60034), folder: h("folder", 60035), fileDirectory: h("file-directory", 60035), symbolFolder: h("symbol-folder", 60035), logoGithub: h("logo-github", 60036), markGithub: h("mark-github", 60036), github: h("github", 60036), terminal: h("terminal", 60037), console: h("console", 60037), repl: h("repl", 60037), zap: h("zap", 60038), symbolEvent: h("symbol-event", 60038), error: h("error", 60039), stop: h("stop", 60039), variable: h("variable", 60040), symbolVariable: h("symbol-variable", 60040), array: h("array", 60042), symbolArray: h("symbol-array", 60042), symbolModule: h("symbol-module", 60043), symbolPackage: h("symbol-package", 60043), symbolNamespace: h("symbol-namespace", 60043), symbolObject: h("symbol-object", 60043), symbolMethod: h("symbol-method", 60044), symbolFunction: h("symbol-function", 60044), symbolConstructor: h("symbol-constructor", 60044), symbolBoolean: h("symbol-boolean", 60047), symbolNull: h("symbol-null", 60047), symbolNumeric: h("symbol-numeric", 60048), symbolNumber: h("symbol-number", 60048), symbolStructure: h("symbol-structure", 60049), symbolStruct: h("symbol-struct", 60049), symbolParameter: h("symbol-parameter", 60050), symbolTypeParameter: h("symbol-type-parameter", 60050), symbolKey: h("symbol-key", 60051), symbolText: h("symbol-text", 60051), symbolReference: h("symbol-reference", 60052), goToFile: h("go-to-file", 60052), symbolEnum: h("symbol-enum", 60053), symbolValue: h("symbol-value", 60053), symbolRuler: h("symbol-ruler", 60054), symbolUnit: h("symbol-unit", 60054), activateBreakpoints: h("activate-breakpoints", 60055), archive: h("archive", 60056), arrowBoth: h("arrow-both", 60057), arrowDown: h("arrow-down", 60058), arrowLeft: h("arrow-left", 60059), arrowRight: h("arrow-right", 60060), arrowSmallDown: h("arrow-small-down", 60061), arrowSmallLeft: h("arrow-small-left", 60062), arrowSmallRight: h("arrow-small-right", 60063), arrowSmallUp: h("arrow-small-up", 60064), arrowUp: h("arrow-up", 60065), bell: h("bell", 60066), bold: h("bold", 60067), book: h("book", 60068), bookmark: h("bookmark", 60069), debugBreakpointConditionalUnverified: h("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: h("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: h("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: h("debug-breakpoint-data-unverified", 60072), debugBreakpointData: h("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: h("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: h("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: h("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: h("debug-breakpoint-log-disabled", 60075), briefcase: h("briefcase", 60076), broadcast: h("broadcast", 60077), browser: h("browser", 60078), bug: h("bug", 60079), calendar: h("calendar", 60080), caseSensitive: h("case-sensitive", 60081), check: h("check", 60082), checklist: h("checklist", 60083), chevronDown: h("chevron-down", 60084), chevronLeft: h("chevron-left", 60085), chevronRight: h("chevron-right", 60086), chevronUp: h("chevron-up", 60087), chromeClose: h("chrome-close", 60088), chromeMaximize: h("chrome-maximize", 60089), chromeMinimize: h("chrome-minimize", 60090), chromeRestore: h("chrome-restore", 60091), circleOutline: h("circle-outline", 60092), circle: h("circle", 60092), debugBreakpointUnverified: h("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: h("terminal-decoration-incomplete", 60092), circleSlash: h("circle-slash", 60093), circuitBoard: h("circuit-board", 60094), clearAll: h("clear-all", 60095), clippy: h("clippy", 60096), closeAll: h("close-all", 60097), cloudDownload: h("cloud-download", 60098), cloudUpload: h("cloud-upload", 60099), code: h("code", 60100), collapseAll: h("collapse-all", 60101), colorMode: h("color-mode", 60102), commentDiscussion: h("comment-discussion", 60103), creditCard: h("credit-card", 60105), dash: h("dash", 60108), dashboard: h("dashboard", 60109), database: h("database", 60110), debugContinue: h("debug-continue", 60111), debugDisconnect: h("debug-disconnect", 60112), debugPause: h("debug-pause", 60113), debugRestart: h("debug-restart", 60114), debugStart: h("debug-start", 60115), debugStepInto: h("debug-step-into", 60116), debugStepOut: h("debug-step-out", 60117), debugStepOver: h("debug-step-over", 60118), debugStop: h("debug-stop", 60119), debug: h("debug", 60120), deviceCameraVideo: h("device-camera-video", 60121), deviceCamera: h("device-camera", 60122), deviceMobile: h("device-mobile", 60123), diffAdded: h("diff-added", 60124), diffIgnored: h("diff-ignored", 60125), diffModified: h("diff-modified", 60126), diffRemoved: h("diff-removed", 60127), diffRenamed: h("diff-renamed", 60128), diff: h("diff", 60129), diffSidebyside: h("diff-sidebyside", 60129), discard: h("discard", 60130), editorLayout: h("editor-layout", 60131), emptyWindow: h("empty-window", 60132), exclude: h("exclude", 60133), extensions: h("extensions", 60134), eyeClosed: h("eye-closed", 60135), fileBinary: h("file-binary", 60136), fileCode: h("file-code", 60137), fileMedia: h("file-media", 60138), filePdf: h("file-pdf", 60139), fileSubmodule: h("file-submodule", 60140), fileSymlinkDirectory: h("file-symlink-directory", 60141), fileSymlinkFile: h("file-symlink-file", 60142), fileZip: h("file-zip", 60143), files: h("files", 60144), filter: h("filter", 60145), flame: h("flame", 60146), foldDown: h("fold-down", 60147), foldUp: h("fold-up", 60148), fold: h("fold", 60149), folderActive: h("folder-active", 60150), folderOpened: h("folder-opened", 60151), gear: h("gear", 60152), gift: h("gift", 60153), gistSecret: h("gist-secret", 60154), gist: h("gist", 60155), gitCommit: h("git-commit", 60156), gitCompare: h("git-compare", 60157), compareChanges: h("compare-changes", 60157), gitMerge: h("git-merge", 60158), githubAction: h("github-action", 60159), githubAlt: h("github-alt", 60160), globe: h("globe", 60161), grabber: h("grabber", 60162), graph: h("graph", 60163), gripper: h("gripper", 60164), heart: h("heart", 60165), home: h("home", 60166), horizontalRule: h("horizontal-rule", 60167), hubot: h("hubot", 60168), inbox: h("inbox", 60169), issueReopened: h("issue-reopened", 60171), issues: h("issues", 60172), italic: h("italic", 60173), jersey: h("jersey", 60174), json: h("json", 60175), kebabVertical: h("kebab-vertical", 60176), key: h("key", 60177), law: h("law", 60178), lightbulbAutofix: h("lightbulb-autofix", 60179), linkExternal: h("link-external", 60180), link: h("link", 60181), listOrdered: h("list-ordered", 60182), listUnordered: h("list-unordered", 60183), liveShare: h("live-share", 60184), loading: h("loading", 60185), location: h("location", 60186), mailRead: h("mail-read", 60187), mail: h("mail", 60188), markdown: h("markdown", 60189), megaphone: h("megaphone", 60190), mention: h("mention", 60191), milestone: h("milestone", 60192), gitPullRequestMilestone: h("git-pull-request-milestone", 60192), mortarBoard: h("mortar-board", 60193), move: h("move", 60194), multipleWindows: h("multiple-windows", 60195), mute: h("mute", 60196), noNewline: h("no-newline", 60197), note: h("note", 60198), octoface: h("octoface", 60199), openPreview: h("open-preview", 60200), package: h("package", 60201), paintcan: h("paintcan", 60202), pin: h("pin", 60203), play: h("play", 60204), run: h("run", 60204), plug: h("plug", 60205), preserveCase: h("preserve-case", 60206), preview: h("preview", 60207), project: h("project", 60208), pulse: h("pulse", 60209), question: h("question", 60210), quote: h("quote", 60211), radioTower: h("radio-tower", 60212), reactions: h("reactions", 60213), references: h("references", 60214), refresh: h("refresh", 60215), regex: h("regex", 60216), remoteExplorer: h("remote-explorer", 60217), remote: h("remote", 60218), remove: h("remove", 60219), replaceAll: h("replace-all", 60220), replace: h("replace", 60221), repoClone: h("repo-clone", 60222), repoForcePush: h("repo-force-push", 60223), repoPull: h("repo-pull", 60224), repoPush: h("repo-push", 60225), report: h("report", 60226), requestChanges: h("request-changes", 60227), rocket: h("rocket", 60228), rootFolderOpened: h("root-folder-opened", 60229), rootFolder: h("root-folder", 60230), rss: h("rss", 60231), ruby: h("ruby", 60232), saveAll: h("save-all", 60233), saveAs: h("save-as", 60234), save: h("save", 60235), screenFull: h("screen-full", 60236), screenNormal: h("screen-normal", 60237), searchStop: h("search-stop", 60238), server: h("server", 60240), settingsGear: h("settings-gear", 60241), settings: h("settings", 60242), shield: h("shield", 60243), smiley: h("smiley", 60244), sortPrecedence: h("sort-precedence", 60245), splitHorizontal: h("split-horizontal", 60246), splitVertical: h("split-vertical", 60247), squirrel: h("squirrel", 60248), starFull: h("star-full", 60249), starHalf: h("star-half", 60250), symbolClass: h("symbol-class", 60251), symbolColor: h("symbol-color", 60252), symbolConstant: h("symbol-constant", 60253), symbolEnumMember: h("symbol-enum-member", 60254), symbolField: h("symbol-field", 60255), symbolFile: h("symbol-file", 60256), symbolInterface: h("symbol-interface", 60257), symbolKeyword: h("symbol-keyword", 60258), symbolMisc: h("symbol-misc", 60259), symbolOperator: h("symbol-operator", 60260), symbolProperty: h("symbol-property", 60261), wrench: h("wrench", 60261), wrenchSubaction: h("wrench-subaction", 60261), symbolSnippet: h("symbol-snippet", 60262), tasklist: h("tasklist", 60263), telescope: h("telescope", 60264), textSize: h("text-size", 60265), threeBars: h("three-bars", 60266), thumbsdown: h("thumbsdown", 60267), thumbsup: h("thumbsup", 60268), tools: h("tools", 60269), triangleDown: h("triangle-down", 60270), triangleLeft: h("triangle-left", 60271), triangleRight: h("triangle-right", 60272), triangleUp: h("triangle-up", 60273), twitter: h("twitter", 60274), unfold: h("unfold", 60275), unlock: h("unlock", 60276), unmute: h("unmute", 60277), unverified: h("unverified", 60278), verified: h("verified", 60279), versions: h("versions", 60280), vmActive: h("vm-active", 60281), vmOutline: h("vm-outline", 60282), vmRunning: h("vm-running", 60283), watch: h("watch", 60284), whitespace: h("whitespace", 60285), wholeWord: h("whole-word", 60286), window: h("window", 60287), wordWrap: h("word-wrap", 60288), zoomIn: h("zoom-in", 60289), zoomOut: h("zoom-out", 60290), listFilter: h("list-filter", 60291), listFlat: h("list-flat", 60292), listSelection: h("list-selection", 60293), selection: h("selection", 60293), listTree: h("list-tree", 60294), debugBreakpointFunctionUnverified: h("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: h("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: h("debug-breakpoint-function-disabled", 60296), debugStackframeActive: h("debug-stackframe-active", 60297), circleSmallFilled: h("circle-small-filled", 60298), debugStackframeDot: h("debug-stackframe-dot", 60298), terminalDecorationMark: h("terminal-decoration-mark", 60298), debugStackframe: h("debug-stackframe", 60299), debugStackframeFocused: h("debug-stackframe-focused", 60299), debugBreakpointUnsupported: h("debug-breakpoint-unsupported", 60300), symbolString: h("symbol-string", 60301), debugReverseContinue: h("debug-reverse-continue", 60302), debugStepBack: h("debug-step-back", 60303), debugRestartFrame: h("debug-restart-frame", 60304), debugAlt: h("debug-alt", 60305), callIncoming: h("call-incoming", 60306), callOutgoing: h("call-outgoing", 60307), menu: h("menu", 60308), expandAll: h("expand-all", 60309), feedback: h("feedback", 60310), gitPullRequestReviewer: h("git-pull-request-reviewer", 60310), groupByRefType: h("group-by-ref-type", 60311), ungroupByRefType: h("ungroup-by-ref-type", 60312), account: h("account", 60313), gitPullRequestAssignee: h("git-pull-request-assignee", 60313), bellDot: h("bell-dot", 60314), debugConsole: h("debug-console", 60315), library: h("library", 60316), output: h("output", 60317), runAll: h("run-all", 60318), syncIgnored: h("sync-ignored", 60319), pinned: h("pinned", 60320), githubInverted: h("github-inverted", 60321), serverProcess: h("server-process", 60322), serverEnvironment: h("server-environment", 60323), pass: h("pass", 60324), issueClosed: h("issue-closed", 60324), stopCircle: h("stop-circle", 60325), playCircle: h("play-circle", 60326), record: h("record", 60327), debugAltSmall: h("debug-alt-small", 60328), vmConnect: h("vm-connect", 60329), cloud: h("cloud", 60330), merge: h("merge", 60331), export: h("export", 60332), graphLeft: h("graph-left", 60333), magnet: h("magnet", 60334), notebook: h("notebook", 60335), redo: h("redo", 60336), checkAll: h("check-all", 60337), pinnedDirty: h("pinned-dirty", 60338), passFilled: h("pass-filled", 60339), circleLargeFilled: h("circle-large-filled", 60340), circleLarge: h("circle-large", 60341), circleLargeOutline: h("circle-large-outline", 60341), combine: h("combine", 60342), gather: h("gather", 60342), table: h("table", 60343), variableGroup: h("variable-group", 60344), typeHierarchy: h("type-hierarchy", 60345), typeHierarchySub: h("type-hierarchy-sub", 60346), typeHierarchySuper: h("type-hierarchy-super", 60347), gitPullRequestCreate: h("git-pull-request-create", 60348), runAbove: h("run-above", 60349), runBelow: h("run-below", 60350), notebookTemplate: h("notebook-template", 60351), debugRerun: h("debug-rerun", 60352), workspaceTrusted: h("workspace-trusted", 60353), workspaceUntrusted: h("workspace-untrusted", 60354), workspaceUnknown: h("workspace-unknown", 60355), terminalCmd: h("terminal-cmd", 60356), terminalDebian: h("terminal-debian", 60357), terminalLinux: h("terminal-linux", 60358), terminalPowershell: h("terminal-powershell", 60359), terminalTmux: h("terminal-tmux", 60360), terminalUbuntu: h("terminal-ubuntu", 60361), terminalBash: h("terminal-bash", 60362), arrowSwap: h("arrow-swap", 60363), copy: h("copy", 60364), personAdd: h("person-add", 60365), filterFilled: h("filter-filled", 60366), wand: h("wand", 60367), debugLineByLine: h("debug-line-by-line", 60368), inspect: h("inspect", 60369), layers: h("layers", 60370), layersDot: h("layers-dot", 60371), layersActive: h("layers-active", 60372), compass: h("compass", 60373), compassDot: h("compass-dot", 60374), compassActive: h("compass-active", 60375), azure: h("azure", 60376), issueDraft: h("issue-draft", 60377), gitPullRequestClosed: h("git-pull-request-closed", 60378), gitPullRequestDraft: h("git-pull-request-draft", 60379), debugAll: h("debug-all", 60380), debugCoverage: h("debug-coverage", 60381), runErrors: h("run-errors", 60382), folderLibrary: h("folder-library", 60383), debugContinueSmall: h("debug-continue-small", 60384), beakerStop: h("beaker-stop", 60385), graphLine: h("graph-line", 60386), graphScatter: h("graph-scatter", 60387), pieChart: h("pie-chart", 60388), bracket: h("bracket", 60175), bracketDot: h("bracket-dot", 60389), bracketError: h("bracket-error", 60390), lockSmall: h("lock-small", 60391), azureDevops: h("azure-devops", 60392), verifiedFilled: h("verified-filled", 60393), newline: h("newline", 60394), layout: h("layout", 60395), layoutActivitybarLeft: h("layout-activitybar-left", 60396), layoutActivitybarRight: h("layout-activitybar-right", 60397), layoutPanelLeft: h("layout-panel-left", 60398), layoutPanelCenter: h("layout-panel-center", 60399), layoutPanelJustify: h("layout-panel-justify", 60400), layoutPanelRight: h("layout-panel-right", 60401), layoutPanel: h("layout-panel", 60402), layoutSidebarLeft: h("layout-sidebar-left", 60403), layoutSidebarRight: h("layout-sidebar-right", 60404), layoutStatusbar: h("layout-statusbar", 60405), layoutMenubar: h("layout-menubar", 60406), layoutCentered: h("layout-centered", 60407), target: h("target", 60408), indent: h("indent", 60409), recordSmall: h("record-small", 60410), errorSmall: h("error-small", 60411), terminalDecorationError: h("terminal-decoration-error", 60411), arrowCircleDown: h("arrow-circle-down", 60412), arrowCircleLeft: h("arrow-circle-left", 60413), arrowCircleRight: h("arrow-circle-right", 60414), arrowCircleUp: h("arrow-circle-up", 60415), layoutSidebarRightOff: h("layout-sidebar-right-off", 60416), layoutPanelOff: h("layout-panel-off", 60417), layoutSidebarLeftOff: h("layout-sidebar-left-off", 60418), blank: h("blank", 60419), heartFilled: h("heart-filled", 60420), map: h("map", 60421), mapHorizontal: h("map-horizontal", 60421), foldHorizontal: h("fold-horizontal", 60421), mapFilled: h("map-filled", 60422), mapHorizontalFilled: h("map-horizontal-filled", 60422), foldHorizontalFilled: h("fold-horizontal-filled", 60422), circleSmall: h("circle-small", 60423), bellSlash: h("bell-slash", 60424), bellSlashDot: h("bell-slash-dot", 60425), commentUnresolved: h("comment-unresolved", 60426), gitPullRequestGoToChanges: h("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: h("git-pull-request-new-changes", 60428), searchFuzzy: h("search-fuzzy", 60429), commentDraft: h("comment-draft", 60430), send: h("send", 60431), sparkle: h("sparkle", 60432), insert: h("insert", 60433), mic: h("mic", 60434), thumbsdownFilled: h("thumbsdown-filled", 60435), thumbsupFilled: h("thumbsup-filled", 60436), coffee: h("coffee", 60437), snake: h("snake", 60438), game: h("game", 60439), vr: h("vr", 60440), chip: h("chip", 60441), piano: h("piano", 60442), music: h("music", 60443), micFilled: h("mic-filled", 60444), repoFetch: h("repo-fetch", 60445), copilot: h("copilot", 60446), lightbulbSparkle: h("lightbulb-sparkle", 60447), robot: h("robot", 60448), sparkleFilled: h("sparkle-filled", 60449), diffSingle: h("diff-single", 60450), diffMultiple: h("diff-multiple", 60451), surroundWith: h("surround-with", 60452), share: h("share", 60453), gitStash: h("git-stash", 60454), gitStashApply: h("git-stash-apply", 60455), gitStashPop: h("git-stash-pop", 60456), vscode: h("vscode", 60457), vscodeInsiders: h("vscode-insiders", 60458), codeOss: h("code-oss", 60459), runCoverage: h("run-coverage", 60460), runAllCoverage: h("run-all-coverage", 60461), coverage: h("coverage", 60462), githubProject: h("github-project", 60463), mapVertical: h("map-vertical", 60464), foldVertical: h("fold-vertical", 60464), mapVerticalFilled: h("map-vertical-filled", 60465), foldVerticalFilled: h("fold-vertical-filled", 60465), goToSearch: h("go-to-search", 60466), percentage: h("percentage", 60467), sortPercentage: h("sort-percentage", 60467), attach: h("attach", 60468), goToEditingSession: h("go-to-editing-session", 60469), editSession: h("edit-session", 60470), codeReview: h("code-review", 60471), copilotWarning: h("copilot-warning", 60472), python: h("python", 60473), copilotLarge: h("copilot-large", 60474), copilotWarningLarge: h("copilot-warning-large", 60475), keyboardTab: h("keyboard-tab", 60476), copilotBlocked: h("copilot-blocked", 60477), copilotNotConnected: h("copilot-not-connected", 60478), flag: h("flag", 60479), lightbulbEmpty: h("lightbulb-empty", 60480), symbolMethodArrow: h("symbol-method-arrow", 60481), copilotUnavailable: h("copilot-unavailable", 60482), repoPinned: h("repo-pinned", 60483), keyboardTabAbove: h("keyboard-tab-above", 60484), keyboardTabBelow: h("keyboard-tab-below", 60485), gitPullRequestDone: h("git-pull-request-done", 60486), mcp: h("mcp", 60487), extensionsLarge: h("extensions-large", 60488), layoutPanelDock: h("layout-panel-dock", 60489), layoutSidebarLeftDock: h("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: h("layout-sidebar-right-dock", 60491), copilotInProgress: h("copilot-in-progress", 60492), copilotError: h("copilot-error", 60493), copilotSuccess: h("copilot-success", 60494), chatSparkle: h("chat-sparkle", 60495), searchSparkle: h("search-sparkle", 60496), editSparkle: h("edit-sparkle", 60497), copilotSnooze: h("copilot-snooze", 60498) }, s9 = { dialogError: h("dialog-error", "error"), dialogWarning: h("dialog-warning", "warning"), dialogInfo: h("dialog-info", "info"), dialogClose: h("dialog-close", "close"), treeItemExpanded: h("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: h("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: h("tree-filter-on-type-off", "list-selection"), treeFilterClear: h("tree-filter-clear", "close"), treeItemLoading: h("tree-item-loading", "loading"), menuSelection: h("menu-selection", "check"), menuSubmenu: h("menu-submenu", "chevron-right"), menuBarMore: h("menubar-more", "more"), scrollbarButtonLeft: h("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: h("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: h("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: h("scrollbar-button-down", "triangle-down"), toolBarMore: h("toolbar-more", "more"), quickInputBack: h("quick-input-back", "arrow-left"), dropDownButton: h("drop-down-button", 60084), symbolCustomColor: h("symbol-customcolor", 60252), exportIcon: h("export", 60332), workspaceUnspecified: h("workspace-unspecified", 60355), newLine: h("newline", 60394), thumbsDownFilled: h("thumbsdown-filled", 60435), thumbsUpFilled: h("thumbsup-filled", 60436), gitFetch: h("git-fetch", 60445), lightbulbSparkleAutofix: h("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: h("debug-breakpoint-pending", 60377) }, he = { ...a9, ...s9 }, gh;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
    })(gh || (gh = {}));
    var Eh;
    (function(e) {
      e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
    })(Eh || (Eh = {}));
    var Zs;
    (function(e) {
      e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
    })(Zs || (Zs = {}));
    var _h;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
    })(_h || (_h = {}));
    var Dh;
    (function(e) {
      e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
    })(Dh || (Dh = {}));
    var o9 = class {
      constructor() {
        this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new un(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
      }
      handleChange(e) {
        this._onDidChange.fire({ changedLanguages: e, changedColorMap: !1 });
      }
      register(e, t) {
        return this._tokenizationSupports.set(e, t), this.handleChange([e]), Ia(() => {
          this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
        });
      }
      get(e) {
        return this._tokenizationSupports.get(e) || null;
      }
      registerFactory(e, t) {
        var r;
        (r = this._factories.get(e)) == null || r.dispose();
        let n = new l9(this, e, t);
        return this._factories.set(e, n), Ia(() => {
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
        this._colorMap = e, this._onDidChange.fire({ changedLanguages: Array.from(this._tokenizationSupports.keys()), changedColorMap: !0 });
      }
      getColorMap() {
        return this._colorMap;
      }
      getDefaultBackground() {
        return this._colorMap && this._colorMap.length > Zs.DefaultBackground ? this._colorMap[Zs.DefaultBackground] : null;
      }
    }, l9 = class extends Bs {
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
    }, u9 = class {
      constructor(e, t, n) {
        this.offset = e, this.type = t, this.language = n, this._tokenBrand = void 0;
      }
      toString() {
        return "(" + this.offset + ", " + this.type + ")";
      }
    }, vh;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(vh || (vh = {}));
    var j;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(j || (j = {}));
    var bh;
    (function(e) {
      let t = /* @__PURE__ */ new Map();
      t.set(j.Method, he.symbolMethod), t.set(j.Function, he.symbolFunction), t.set(j.Constructor, he.symbolConstructor), t.set(j.Field, he.symbolField), t.set(j.Variable, he.symbolVariable), t.set(j.Class, he.symbolClass), t.set(j.Struct, he.symbolStruct), t.set(j.Interface, he.symbolInterface), t.set(j.Module, he.symbolModule), t.set(j.Property, he.symbolProperty), t.set(j.Event, he.symbolEvent), t.set(j.Operator, he.symbolOperator), t.set(j.Unit, he.symbolUnit), t.set(j.Value, he.symbolValue), t.set(j.Enum, he.symbolEnum), t.set(j.Constant, he.symbolConstant), t.set(j.Enum, he.symbolEnum), t.set(j.EnumMember, he.symbolEnumMember), t.set(j.Keyword, he.symbolKeyword), t.set(j.Snippet, he.symbolSnippet), t.set(j.Text, he.symbolText), t.set(j.Color, he.symbolColor), t.set(j.File, he.symbolFile), t.set(j.Reference, he.symbolReference), t.set(j.Customcolor, he.symbolCustomColor), t.set(j.Folder, he.symbolFolder), t.set(j.TypeParameter, he.symbolTypeParameter), t.set(j.User, he.account), t.set(j.Issue, he.issues), t.set(j.Tool, he.tools);
      function n(s) {
        let o = t.get(s);
        return o || (console.info("No codicon found for CompletionItemKind " + s), o = he.symbolProperty), o;
      }
      e.toIcon = n;
      function r(s) {
        switch (s) {
          case j.Method:
            return me(776, "Method");
          case j.Function:
            return me(777, "Function");
          case j.Constructor:
            return me(778, "Constructor");
          case j.Field:
            return me(779, "Field");
          case j.Variable:
            return me(780, "Variable");
          case j.Class:
            return me(781, "Class");
          case j.Struct:
            return me(782, "Struct");
          case j.Interface:
            return me(783, "Interface");
          case j.Module:
            return me(784, "Module");
          case j.Property:
            return me(785, "Property");
          case j.Event:
            return me(786, "Event");
          case j.Operator:
            return me(787, "Operator");
          case j.Unit:
            return me(788, "Unit");
          case j.Value:
            return me(789, "Value");
          case j.Constant:
            return me(790, "Constant");
          case j.Enum:
            return me(791, "Enum");
          case j.EnumMember:
            return me(792, "Enum Member");
          case j.Keyword:
            return me(793, "Keyword");
          case j.Text:
            return me(794, "Text");
          case j.Color:
            return me(795, "Color");
          case j.File:
            return me(796, "File");
          case j.Reference:
            return me(797, "Reference");
          case j.Customcolor:
            return me(798, "Custom Color");
          case j.Folder:
            return me(799, "Folder");
          case j.TypeParameter:
            return me(800, "Type Parameter");
          case j.User:
            return me(801, "User");
          case j.Issue:
            return me(802, "Issue");
          case j.Tool:
            return me(803, "Tool");
          case j.Snippet:
            return me(804, "Snippet");
          default:
            return "";
        }
      }
      e.toLabel = r;
      let i = /* @__PURE__ */ new Map();
      i.set("method", j.Method), i.set("function", j.Function), i.set("constructor", j.Constructor), i.set("field", j.Field), i.set("variable", j.Variable), i.set("class", j.Class), i.set("struct", j.Struct), i.set("interface", j.Interface), i.set("module", j.Module), i.set("property", j.Property), i.set("event", j.Event), i.set("operator", j.Operator), i.set("unit", j.Unit), i.set("value", j.Value), i.set("constant", j.Constant), i.set("enum", j.Enum), i.set("enum-member", j.EnumMember), i.set("enumMember", j.EnumMember), i.set("keyword", j.Keyword), i.set("snippet", j.Snippet), i.set("text", j.Text), i.set("color", j.Color), i.set("file", j.File), i.set("reference", j.Reference), i.set("customcolor", j.Customcolor), i.set("folder", j.Folder), i.set("type-parameter", j.TypeParameter), i.set("typeParameter", j.TypeParameter), i.set("account", j.User), i.set("issue", j.Issue), i.set("tool", j.Tool);
      function a(s, o) {
        let l = i.get(s);
        return typeof l > "u" && !o && (l = j.Property), l;
      }
      e.fromString = a;
    })(bh || (bh = {}));
    var yh;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(yh || (yh = {}));
    var Nh;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })(Nh || (Nh = {}));
    var Ch;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(Ch || (Ch = {}));
    var Th;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(Th || (Th = {}));
    var wh;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(wh || (wh = {}));
    var Ah;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(Ah || (Ah = {}));
    var Sh;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(Sh || (Sh = {}));
    var Lh;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
    })(Lh || (Lh = {}));
    var Fh;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(Fh || (Fh = {}));
    var Ih;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(Ih || (Ih = {}));
    var ie;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(ie || (ie = {})), ie.Array + "", me(805, "array"), ie.Boolean + "", me(806, "boolean"), ie.Class + "", me(807, "class"), ie.Constant + "", me(808, "constant"), ie.Constructor + "", me(809, "constructor"), ie.Enum + "", me(810, "enumeration"), ie.EnumMember + "", me(811, "enumeration member"), ie.Event + "", me(812, "event"), ie.Field + "", me(813, "field"), ie.File + "", me(814, "file"), ie.Function + "", me(815, "function"), ie.Interface + "", me(816, "interface"), ie.Key + "", me(817, "key"), ie.Method + "", me(818, "method"), ie.Module + "", me(819, "module"), ie.Namespace + "", me(820, "namespace"), ie.Null + "", me(821, "null"), ie.Number + "", me(822, "number"), ie.Object + "", me(823, "object"), ie.Operator + "", me(824, "operator"), ie.Package + "", me(825, "package"), ie.Property + "", me(826, "property"), ie.String + "", me(827, "string"), ie.Struct + "", me(828, "struct"), ie.TypeParameter + "", me(829, "type parameter"), ie.Variable + "", me(830, "variable");
    var Rh;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Rh || (Rh = {}));
    var Oh;
    (function(e) {
      let t = /* @__PURE__ */ new Map();
      t.set(ie.File, he.symbolFile), t.set(ie.Module, he.symbolModule), t.set(ie.Namespace, he.symbolNamespace), t.set(ie.Package, he.symbolPackage), t.set(ie.Class, he.symbolClass), t.set(ie.Method, he.symbolMethod), t.set(ie.Property, he.symbolProperty), t.set(ie.Field, he.symbolField), t.set(ie.Constructor, he.symbolConstructor), t.set(ie.Enum, he.symbolEnum), t.set(ie.Interface, he.symbolInterface), t.set(ie.Function, he.symbolFunction), t.set(ie.Variable, he.symbolVariable), t.set(ie.Constant, he.symbolConstant), t.set(ie.String, he.symbolString), t.set(ie.Number, he.symbolNumber), t.set(ie.Boolean, he.symbolBoolean), t.set(ie.Array, he.symbolArray), t.set(ie.Object, he.symbolObject), t.set(ie.Key, he.symbolKey), t.set(ie.Null, he.symbolNull), t.set(ie.EnumMember, he.symbolEnumMember), t.set(ie.Struct, he.symbolStruct), t.set(ie.Event, he.symbolEvent), t.set(ie.Operator, he.symbolOperator), t.set(ie.TypeParameter, he.symbolTypeParameter);
      function n(a) {
        let s = t.get(a);
        return s || (console.info("No codicon found for SymbolKind " + a), s = he.symbolProperty), s;
      }
      e.toIcon = n;
      let r = /* @__PURE__ */ new Map();
      r.set(ie.File, j.File), r.set(ie.Module, j.Module), r.set(ie.Namespace, j.Module), r.set(ie.Package, j.Module), r.set(ie.Class, j.Class), r.set(ie.Method, j.Method), r.set(ie.Property, j.Property), r.set(ie.Field, j.Field), r.set(ie.Constructor, j.Constructor), r.set(ie.Enum, j.Enum), r.set(ie.Interface, j.Interface), r.set(ie.Function, j.Function), r.set(ie.Variable, j.Variable), r.set(ie.Constant, j.Constant), r.set(ie.String, j.Text), r.set(ie.Number, j.Value), r.set(ie.Boolean, j.Value), r.set(ie.Array, j.Value), r.set(ie.Object, j.Value), r.set(ie.Key, j.Keyword), r.set(ie.Null, j.Value), r.set(ie.EnumMember, j.EnumMember), r.set(ie.Struct, j.Struct), r.set(ie.Event, j.Event), r.set(ie.Operator, j.Operator), r.set(ie.TypeParameter, j.TypeParameter);
      function i(a) {
        let s = r.get(a);
        return s === void 0 && (console.info("No completion kind found for SymbolKind " + a), s = j.File), s;
      }
      e.toCompletionKind = i;
    })(Oh || (Oh = {})), Kt = class {
      static fromValue(t) {
        switch (t) {
          case "comment":
            return Kt.Comment;
          case "imports":
            return Kt.Imports;
          case "region":
            return Kt.Region;
        }
        return new Kt(t);
      }
      constructor(t) {
        this.value = t;
      }
    }, Kt.Comment = new Kt("comment"), Kt.Imports = new Kt("imports"), Kt.Region = new Kt("region");
    var xh;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(xh || (xh = {}));
    var kh;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(kh || (kh = {}));
    var Mh;
    (function(e) {
      function t(n) {
        return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
      }
      e.is = t;
    })(Mh || (Mh = {}));
    var Uh;
    (function(e) {
      e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
    })(Uh || (Uh = {}));
    var Ph;
    (function(e) {
      e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
    })(Ph || (Ph = {}));
    var Bh;
    (function(e) {
      e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
    })(Bh || (Bh = {}));
    var $h;
    (function(e) {
      e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
    })($h || ($h = {}));
    var Vh;
    (function(e) {
      e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
    })(Vh || (Vh = {}));
    var Kh;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(Kh || (Kh = {})), new o9();
    var jh;
    (function(e) {
      e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
    })(jh || (jh = {}));
    var qh;
    (function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
    })(qh || (qh = {}));
    var Gh;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(Gh || (Gh = {}));
    var Hh;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })(Hh || (Hh = {}));
    var Wh;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(Wh || (Wh = {}));
    var Yh;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Yh || (Yh = {}));
    var zh;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(zh || (zh = {}));
    var Xh;
    (function(e) {
      e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
    })(Xh || (Xh = {}));
    var Jh;
    (function(e) {
      e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
    })(Jh || (Jh = {}));
    var Qh;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Qh || (Qh = {}));
    var Zh;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(Zh || (Zh = {}));
    var ef;
    (function(e) {
      e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
    })(ef || (ef = {}));
    var tf;
    (function(e) {
      e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowVariableLineHeights = 4] = "allowVariableLineHeights", e[e.allowVariableFonts = 5] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 6] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 7] = "ariaLabel", e[e.ariaRequired = 8] = "ariaRequired", e[e.autoClosingBrackets = 9] = "autoClosingBrackets", e[e.autoClosingComments = 10] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 11] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 12] = "autoClosingDelete", e[e.autoClosingOvertype = 13] = "autoClosingOvertype", e[e.autoClosingQuotes = 14] = "autoClosingQuotes", e[e.autoIndent = 15] = "autoIndent", e[e.autoIndentOnPaste = 16] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 17] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 18] = "automaticLayout", e[e.autoSurround = 19] = "autoSurround", e[e.bracketPairColorization = 20] = "bracketPairColorization", e[e.guides = 21] = "guides", e[e.codeLens = 22] = "codeLens", e[e.codeLensFontFamily = 23] = "codeLensFontFamily", e[e.codeLensFontSize = 24] = "codeLensFontSize", e[e.colorDecorators = 25] = "colorDecorators", e[e.colorDecoratorsLimit = 26] = "colorDecoratorsLimit", e[e.columnSelection = 27] = "columnSelection", e[e.comments = 28] = "comments", e[e.contextmenu = 29] = "contextmenu", e[e.copyWithSyntaxHighlighting = 30] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 31] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 32] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 33] = "cursorStyle", e[e.cursorSurroundingLines = 34] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 35] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 36] = "cursorWidth", e[e.disableLayerHinting = 37] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 38] = "disableMonospaceOptimizations", e[e.domReadOnly = 39] = "domReadOnly", e[e.dragAndDrop = 40] = "dragAndDrop", e[e.dropIntoEditor = 41] = "dropIntoEditor", e[e.editContext = 42] = "editContext", e[e.emptySelectionClipboard = 43] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 44] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 45] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 46] = "extraEditorClassName", e[e.fastScrollSensitivity = 47] = "fastScrollSensitivity", e[e.find = 48] = "find", e[e.fixedOverflowWidgets = 49] = "fixedOverflowWidgets", e[e.folding = 50] = "folding", e[e.foldingStrategy = 51] = "foldingStrategy", e[e.foldingHighlight = 52] = "foldingHighlight", e[e.foldingImportsByDefault = 53] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 54] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 55] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 56] = "fontFamily", e[e.fontInfo = 57] = "fontInfo", e[e.fontLigatures = 58] = "fontLigatures", e[e.fontSize = 59] = "fontSize", e[e.fontWeight = 60] = "fontWeight", e[e.fontVariations = 61] = "fontVariations", e[e.formatOnPaste = 62] = "formatOnPaste", e[e.formatOnType = 63] = "formatOnType", e[e.glyphMargin = 64] = "glyphMargin", e[e.gotoLocation = 65] = "gotoLocation", e[e.hideCursorInOverviewRuler = 66] = "hideCursorInOverviewRuler", e[e.hover = 67] = "hover", e[e.inDiffEditor = 68] = "inDiffEditor", e[e.inlineSuggest = 69] = "inlineSuggest", e[e.letterSpacing = 70] = "letterSpacing", e[e.lightbulb = 71] = "lightbulb", e[e.lineDecorationsWidth = 72] = "lineDecorationsWidth", e[e.lineHeight = 73] = "lineHeight", e[e.lineNumbers = 74] = "lineNumbers", e[e.lineNumbersMinChars = 75] = "lineNumbersMinChars", e[e.linkedEditing = 76] = "linkedEditing", e[e.links = 77] = "links", e[e.matchBrackets = 78] = "matchBrackets", e[e.minimap = 79] = "minimap", e[e.mouseStyle = 80] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 81] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 82] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 83] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 84] = "multiCursorModifier", e[e.multiCursorPaste = 85] = "multiCursorPaste", e[e.multiCursorLimit = 86] = "multiCursorLimit", e[e.occurrencesHighlight = 87] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 88] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 89] = "overtypeCursorStyle", e[e.overtypeOnPaste = 90] = "overtypeOnPaste", e[e.overviewRulerBorder = 91] = "overviewRulerBorder", e[e.overviewRulerLanes = 92] = "overviewRulerLanes", e[e.padding = 93] = "padding", e[e.pasteAs = 94] = "pasteAs", e[e.parameterHints = 95] = "parameterHints", e[e.peekWidgetDefaultFocus = 96] = "peekWidgetDefaultFocus", e[e.placeholder = 97] = "placeholder", e[e.definitionLinkOpensInPeek = 98] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 99] = "quickSuggestions", e[e.quickSuggestionsDelay = 100] = "quickSuggestionsDelay", e[e.readOnly = 101] = "readOnly", e[e.readOnlyMessage = 102] = "readOnlyMessage", e[e.renameOnType = 103] = "renameOnType", e[e.renderControlCharacters = 104] = "renderControlCharacters", e[e.renderFinalNewline = 105] = "renderFinalNewline", e[e.renderLineHighlight = 106] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 107] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 108] = "renderValidationDecorations", e[e.renderWhitespace = 109] = "renderWhitespace", e[e.revealHorizontalRightPadding = 110] = "revealHorizontalRightPadding", e[e.roundedSelection = 111] = "roundedSelection", e[e.rulers = 112] = "rulers", e[e.scrollbar = 113] = "scrollbar", e[e.scrollBeyondLastColumn = 114] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 115] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 116] = "scrollPredominantAxis", e[e.selectionClipboard = 117] = "selectionClipboard", e[e.selectionHighlight = 118] = "selectionHighlight", e[e.selectOnLineNumbers = 119] = "selectOnLineNumbers", e[e.showFoldingControls = 120] = "showFoldingControls", e[e.showUnused = 121] = "showUnused", e[e.snippetSuggestions = 122] = "snippetSuggestions", e[e.smartSelect = 123] = "smartSelect", e[e.smoothScrolling = 124] = "smoothScrolling", e[e.stickyScroll = 125] = "stickyScroll", e[e.stickyTabStops = 126] = "stickyTabStops", e[e.stopRenderingLineAfter = 127] = "stopRenderingLineAfter", e[e.suggest = 128] = "suggest", e[e.suggestFontSize = 129] = "suggestFontSize", e[e.suggestLineHeight = 130] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 131] = "suggestOnTriggerCharacters", e[e.suggestSelection = 132] = "suggestSelection", e[e.tabCompletion = 133] = "tabCompletion", e[e.tabIndex = 134] = "tabIndex", e[e.unicodeHighlighting = 135] = "unicodeHighlighting", e[e.unusualLineTerminators = 136] = "unusualLineTerminators", e[e.useShadowDOM = 137] = "useShadowDOM", e[e.useTabStops = 138] = "useTabStops", e[e.wordBreak = 139] = "wordBreak", e[e.wordSegmenterLocales = 140] = "wordSegmenterLocales", e[e.wordSeparators = 141] = "wordSeparators", e[e.wordWrap = 142] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 143] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 144] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 145] = "wordWrapColumn", e[e.wordWrapOverride1 = 146] = "wordWrapOverride1", e[e.wordWrapOverride2 = 147] = "wordWrapOverride2", e[e.wrappingIndent = 148] = "wrappingIndent", e[e.wrappingStrategy = 149] = "wrappingStrategy", e[e.showDeprecated = 150] = "showDeprecated", e[e.inlayHints = 151] = "inlayHints", e[e.effectiveCursorStyle = 152] = "effectiveCursorStyle", e[e.editorClassName = 153] = "editorClassName", e[e.pixelRatio = 154] = "pixelRatio", e[e.tabFocusMode = 155] = "tabFocusMode", e[e.layoutInfo = 156] = "layoutInfo", e[e.wrappingInfo = 157] = "wrappingInfo", e[e.defaultColorDecorators = 158] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 159] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 160] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 161] = "effectiveEditContext", e[e.scrollOnMiddleClick = 162] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 163] = "effectiveAllowVariableFonts";
    })(tf || (tf = {}));
    var nf;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(nf || (nf = {}));
    var rf;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })(rf || (rf = {}));
    var af;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(af || (af = {}));
    var sf;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(sf || (sf = {}));
    var of;
    (function(e) {
      e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
    })(of || (of = {}));
    var lf;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(lf || (lf = {}));
    var uf;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(uf || (uf = {}));
    var cf;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(cf || (cf = {}));
    var df;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(df || (df = {}));
    var uu;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(uu || (uu = {}));
    var cu;
    (function(e) {
      e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
    })(cu || (cu = {}));
    var du;
    (function(e) {
      e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
    })(du || (du = {}));
    var hf;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(hf || (hf = {}));
    var ff;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(ff || (ff = {}));
    var pf;
    (function(e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
    })(pf || (pf = {}));
    var mf;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(mf || (mf = {}));
    var gf;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(gf || (gf = {}));
    var Ef;
    (function(e) {
      e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
    })(Ef || (Ef = {}));
    var _f;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(_f || (_f = {}));
    var Df;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(Df || (Df = {}));
    var vf;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(vf || (vf = {}));
    var bf;
    (function(e) {
      e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
    })(bf || (bf = {}));
    var yf;
    (function(e) {
      e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
    })(yf || (yf = {}));
    var Nf;
    (function(e) {
      e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
    })(Nf || (Nf = {}));
    var Cf;
    (function(e) {
      e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
    })(Cf || (Cf = {}));
    var hu;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(hu || (hu = {}));
    var Tf;
    (function(e) {
      e.Off = "off", e.OnCode = "onCode", e.On = "on";
    })(Tf || (Tf = {}));
    var wf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(wf || (wf = {}));
    var Af;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(Af || (Af = {}));
    var Sf;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Sf || (Sf = {}));
    var Lf;
    (function(e) {
      e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
    })(Lf || (Lf = {}));
    var Ff;
    (function(e) {
      e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
    })(Ff || (Ff = {}));
    var If;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(If || (If = {}));
    var Rf;
    (function(e) {
      e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
    })(Rf || (Rf = {}));
    var c9 = (mr = class {
      static chord(t, n) {
        return x7(t, n);
      }
    }, mr.CtrlCmd = Bi.CtrlCmd, mr.Shift = Bi.Shift, mr.Alt = Bi.Alt, mr.WinCtrl = Bi.WinCtrl, mr);
    function d9() {
      return { editor: void 0, languages: void 0, CancellationTokenSource: X5, Emitter: un, KeyCode: uu, KeyMod: c9, Position: Te, Range: fe, Selection: i9, SelectionDirection: hu, MarkerSeverity: cu, MarkerTag: du, Uri: Yt, Token: u9 };
    }
    var Vi;
    (function(e) {
      e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
    })(Vi || (Vi = {})), new D5(10);
    var Of;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(Of || (Of = {}));
    var xf;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(xf || (xf = {}));
    var kf;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(kf || (kf = {}));
    var Mf;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(Mf || (Mf = {}));
    var Uf;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(Uf || (Uf = {}));
    var Pf;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Pf || (Pf = {}));
    var Bf;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Bf || (Bf = {}));
    var $f;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })($f || ($f = {}));
    var Vf;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(Vf || (Vf = {}));
    var Kf;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(Kf || (Kf = {}));
    var jf;
    (function(e) {
      e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
    })(jf || (jf = {}));
    function h9(e) {
      if (!e || e.length === 0) return !1;
      for (let t = 0, n = e.length; t < n; t++) {
        let r = e.charCodeAt(t);
        if (r === R.LineFeed) return !0;
        if (r === R.Backslash) {
          if (t++, t >= n) break;
          let i = e.charCodeAt(t);
          if (i === R.n || i === R.r || i === R.W) return !0;
        }
      }
      return !1;
    }
    function f9(e, t, n, r, i) {
      if (r === 0) return !0;
      let a = t.charCodeAt(r - 1);
      if (e.get(a) !== Vi.Regular || a === R.CarriageReturn || a === R.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r);
        if (e.get(s) !== Vi.Regular) return !0;
      }
      return !1;
    }
    function p9(e, t, n, r, i) {
      if (r + i === n) return !0;
      let a = t.charCodeAt(r + i);
      if (e.get(a) !== Vi.Regular || a === R.CarriageReturn || a === R.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r + i - 1);
        if (e.get(s) !== Vi.Regular) return !0;
      }
      return !1;
    }
    function m9(e, t, n, r, i) {
      return f9(e, t, n, r, i) && p9(e, t, n, r, i);
    }
    var g9 = class {
      constructor(e, t) {
        this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
      }
      reset(e) {
        this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
      }
      next(e) {
        let t = e.length, n;
        do {
          if (this._prevMatchStartIndex + this._prevMatchLength === t || (n = this._searchRegex.exec(e), !n)) return null;
          let r = n.index, i = n[0].length;
          if (r === this._prevMatchStartIndex && i === this._prevMatchLength) {
            if (i === 0) {
              u7(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
              continue;
            }
            return null;
          }
          if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || m9(this._wordSeparators, e, t, r, i)) return n;
        } while (n);
        return null;
      }
    }, E9 = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function _9(e = "") {
      let t = "(-?\\d*\\.\\d\\w*)|([^";
      for (let n of E9) e.indexOf(n) >= 0 || (t += "\\" + n);
      return t += "\\s]+)", new RegExp(t, "g");
    }
    var qf = _9();
    function Gf(e) {
      let t = qf;
      if (e && e instanceof RegExp) if (e.global) t = e;
      else {
        let n = "g";
        e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
      }
      return t.lastIndex = 0, t;
    }
    var Hf = new T5();
    Hf.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
    function fu(e, t, n, r, i) {
      if (t = Gf(t), i || (i = Ps.first(Hf)), n.length > i.maxLen) {
        let u = e - i.maxLen / 2;
        return u < 0 ? u = 0 : r += u, n = n.substring(u, e + i.maxLen / 2), fu(e, t, n, r, i);
      }
      let a = Date.now(), s = e - 1 - r, o = -1, l = null;
      for (let u = 1; !(Date.now() - a >= i.timeBudget); u++) {
        let c = s - i.windowSize * u;
        t.lastIndex = Math.max(0, c);
        let d = D9(t, n, s, o);
        if (!d && l || (l = d, c <= 0)) break;
        o = c;
      }
      if (l) {
        let u = { word: l[0], startColumn: r + 1 + l.index, endColumn: r + 1 + l.index + l[0].length };
        return t.lastIndex = 0, u;
      }
      return null;
    }
    function D9(e, t, n, r) {
      let i;
      for (; i = e.exec(t); ) {
        let a = i.index || 0;
        if (a <= n && e.lastIndex >= n) return i;
        if (r > 0 && a > r) return null;
      }
      return null;
    }
    var v9 = class {
      static computeUnicodeHighlights(e, t, n) {
        let r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : e.getLineCount(), a = new Wf(t), s = a.getCandidateCodePoints(), o;
        s === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${b9(Array.from(s))}`, "g");
        let l = new g9(null, o), u = [], c = !1, d, p = 0, m = 0, g = 0;
        e: for (let _ = r, L = i; _ <= L; _++) {
          let A = e.getLineContent(_), F = A.length;
          l.reset(0);
          do
            if (d = l.next(A), d) {
              let C = d.index, x = d.index + d[0].length;
              if (C > 0) {
                let B = A.charCodeAt(C - 1);
                Yl(B) && C--;
              }
              if (x + 1 < F) {
                let B = A.charCodeAt(x - 1);
                Yl(B) && x++;
              }
              let U = A.substring(C, x), q = fu(C + 1, qf, A, 0);
              q && q.endColumn <= C + 1 && (q = null);
              let I = a.shouldHighlightNonBasicASCII(U, q ? q.word : null);
              if (I !== Mt.None) {
                if (I === Mt.Ambiguous ? p++ : I === Mt.Invisible ? m++ : I === Mt.NonBasicASCII ? g++ : v5(), u.length >= 1e3) {
                  c = !0;
                  break e;
                }
                u.push(new fe(_, C + 1, _, x + 1));
              }
            }
          while (d);
        }
        return { ranges: u, hasMore: c, ambiguousCharacterCount: p, invisibleCharacterCount: m, nonBasicAsciiCharacterCount: g };
      }
      static computeUnicodeHighlightReason(e, t) {
        let n = new Wf(t);
        switch (n.shouldHighlightNonBasicASCII(e, null)) {
          case Mt.None:
            return null;
          case Mt.Invisible:
            return { kind: Ma.Invisible };
          case Mt.Ambiguous: {
            let r = e.codePointAt(0), i = n.ambiguousCharacters.getPrimaryConfusable(r), a = Xl.getLocales().filter((s) => !Xl.getInstance(/* @__PURE__ */ new Set([...t.allowedLocales, s])).isAmbiguous(r));
            return { kind: Ma.Ambiguous, confusableWith: String.fromCodePoint(i), notAmbiguousInLocales: a };
          }
          case Mt.NonBasicASCII:
            return { kind: Ma.NonBasicAscii };
        }
      }
    };
    function b9(e, t) {
      return `[${Z5(e.map((n) => String.fromCodePoint(n)).join(""))}]`;
    }
    var Ma;
    (function(e) {
      e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
    })(Ma || (Ma = {}));
    var Wf = class {
      constructor(e) {
        this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = Xl.getInstance(new Set(e.allowedLocales));
      }
      getCandidateCodePoints() {
        if (this.options.nonBasicASCII) return "allNonBasicAscii";
        let e = /* @__PURE__ */ new Set();
        if (this.options.invisibleCharacters) for (let t of Jl.codePoints) Yf(String.fromCodePoint(t)) || e.add(t);
        if (this.options.ambiguousCharacters) for (let t of this.ambiguousCharacters.getConfusableCodePoints()) e.add(t);
        for (let t of this.allowedCodePoints) e.delete(t);
        return e;
      }
      shouldHighlightNonBasicASCII(e, t) {
        let n = e.codePointAt(0);
        if (this.allowedCodePoints.has(n)) return Mt.None;
        if (this.options.nonBasicASCII) return Mt.NonBasicASCII;
        let r = !1, i = !1;
        if (t) for (let a of t) {
          let s = a.codePointAt(0), o = d7(a);
          r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(s) && !Jl.isInvisibleCharacter(s) && (i = !0);
        }
        return !r && i ? Mt.None : this.options.invisibleCharacters && !Yf(e) && Jl.isInvisibleCharacter(n) ? Mt.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? Mt.Ambiguous : Mt.None;
      }
    };
    function Yf(e) {
      return e === " " || e === `
` || e === "	";
    }
    var Mt;
    (function(e) {
      e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
    })(Mt || (Mt = {}));
    var eo = class {
      constructor(e, t, n) {
        this.changes = e, this.moves = t, this.hitTimeout = n;
      }
    }, y9 = class B2 {
      constructor(t, n) {
        this.lineRangeMapping = t, this.changes = n;
      }
      flip() {
        return new B2(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
      }
    }, Ee = class ln {
      static fromTo(t, n) {
        return new ln(t, n);
      }
      static addRange(t, n) {
        let r = 0;
        for (; r < n.length && n[r].endExclusive < t.start; ) r++;
        let i = r;
        for (; i < n.length && n[i].start <= t.endExclusive; ) i++;
        if (r === i) n.splice(r, 0, t);
        else {
          let a = Math.min(t.start, n[r].start), s = Math.max(t.endExclusive, n[i - 1].endExclusive);
          n.splice(r, i - r, new ln(a, s));
        }
      }
      static tryCreate(t, n) {
        if (!(t > n)) return new ln(t, n);
      }
      static ofLength(t) {
        return new ln(0, t);
      }
      static ofStartAndLength(t, n) {
        return new ln(t, t + n);
      }
      static emptyAt(t) {
        return new ln(t, t);
      }
      constructor(t, n) {
        if (this.start = t, this.endExclusive = n, t > n) throw new ut(`Invalid range: ${this.toString()}`);
      }
      get isEmpty() {
        return this.start === this.endExclusive;
      }
      delta(t) {
        return new ln(this.start + t, this.endExclusive + t);
      }
      deltaStart(t) {
        return new ln(this.start + t, this.endExclusive);
      }
      deltaEnd(t) {
        return new ln(this.start, this.endExclusive + t);
      }
      get length() {
        return this.endExclusive - this.start;
      }
      toString() {
        return `[${this.start}, ${this.endExclusive})`;
      }
      equals(t) {
        return this.start === t.start && this.endExclusive === t.endExclusive;
      }
      containsRange(t) {
        return this.start <= t.start && t.endExclusive <= this.endExclusive;
      }
      contains(t) {
        return this.start <= t && t < this.endExclusive;
      }
      join(t) {
        return new ln(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
      }
      intersect(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        if (n <= r) return new ln(n, r);
      }
      intersectionLength(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        return Math.max(0, r - n);
      }
      intersects(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        return n < r;
      }
      intersectsOrTouches(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        return n <= r;
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
        if (this.isEmpty) throw new ut(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, t));
      }
      clipCyclic(t) {
        if (this.isEmpty) throw new ut(`Invalid clipping range: ${this.toString()}`);
        return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
      }
      map(t) {
        let n = [];
        for (let r = this.start; r < this.endExclusive; r++) n.push(t(r));
        return n;
      }
      forEach(t) {
        for (let n = this.start; n < this.endExclusive; n++) t(n);
      }
      joinRightTouching(t) {
        if (this.endExclusive !== t.start) throw new ut(`Invalid join: ${this.toString()} and ${t.toString()}`);
        return new ln(this.start, t.endExclusive);
      }
    }, Fe = (ft = class {
      static ofLength(t, n) {
        return new ft(t, t + n);
      }
      static fromRange(t) {
        return new ft(t.startLineNumber, t.endLineNumber);
      }
      static fromRangeInclusive(t) {
        return new ft(t.startLineNumber, t.endLineNumber + 1);
      }
      static subtract(t, n) {
        return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [new ft(t.startLineNumber, n.startLineNumber), new ft(n.endLineNumberExclusive, t.endLineNumberExclusive)] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new ft(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)] : [new ft(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
      }
      static joinMany(t) {
        if (t.length === 0) return [];
        let n = new to(t[0].slice());
        for (let r = 1; r < t.length; r++) n = n.getUnion(new to(t[r].slice()));
        return n.ranges;
      }
      static join(t) {
        if (t.length === 0) throw new ut("lineRanges cannot be empty");
        let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
        for (let i = 1; i < t.length; i++) n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
        return new ft(n, r);
      }
      static deserialize(t) {
        return new ft(t[0], t[1]);
      }
      constructor(t, n) {
        if (t > n) throw new ut(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
        this.startLineNumber = t, this.endLineNumberExclusive = n;
      }
      contains(t) {
        return this.startLineNumber <= t && t < this.endLineNumberExclusive;
      }
      containsRange(t) {
        return this.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= this.endLineNumberExclusive;
      }
      get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
      }
      delta(t) {
        return new ft(this.startLineNumber + t, this.endLineNumberExclusive + t);
      }
      deltaLength(t) {
        return new ft(this.startLineNumber, this.endLineNumberExclusive + t);
      }
      get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
      }
      join(t) {
        return new ft(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
      }
      toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
      }
      intersect(t) {
        let n = Math.max(this.startLineNumber, t.startLineNumber), r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
        if (n <= r) return new ft(n, r);
      }
      intersectsStrict(t) {
        return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
      }
      intersectsOrTouches(t) {
        return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
      }
      equals(t) {
        return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
      }
      toInclusiveRange() {
        return this.isEmpty ? null : new fe(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
      }
      toExclusiveRange() {
        return new fe(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
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
      toOffsetRange() {
        return new Ee(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
      }
      distanceToRange(t) {
        return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
      }
      distanceToLine(t) {
        return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
      }
      addMargin(t, n) {
        return new ft(this.startLineNumber - t, this.endLineNumberExclusive + n);
      }
    }, ft.compareByStart = Yr((t) => t.startLineNumber, Ri), ft), to = class fa {
      constructor(t = []) {
        this._normalizedRanges = t;
      }
      get ranges() {
        return this._normalizedRanges;
      }
      addRange(t) {
        if (t.length === 0) return;
        let n = Vl(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = Ii(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
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
        let n = Fi(this._normalizedRanges, (r) => r.startLineNumber <= t);
        return !!n && n.endLineNumberExclusive > t;
      }
      intersects(t) {
        let n = Fi(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
        return !!n && n.endLineNumberExclusive > t.startLineNumber;
      }
      getUnion(t) {
        if (this._normalizedRanges.length === 0) return t;
        if (t._normalizedRanges.length === 0) return this;
        let n = [], r = 0, i = 0, a = null;
        for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length; ) {
          let s = null;
          if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
            let o = this._normalizedRanges[r], l = t._normalizedRanges[i];
            o.startLineNumber < l.startLineNumber ? (s = o, r++) : (s = l, i++);
          } else r < this._normalizedRanges.length ? (s = this._normalizedRanges[r], r++) : (s = t._normalizedRanges[i], i++);
          a === null ? a = s : a.endLineNumberExclusive >= s.startLineNumber ? a = new Fe(a.startLineNumber, Math.max(a.endLineNumberExclusive, s.endLineNumberExclusive)) : (n.push(a), a = s);
        }
        return a !== null && n.push(a), new fa(n);
      }
      subtractFrom(t) {
        let n = Vl(this._normalizedRanges, (s) => s.endLineNumberExclusive >= t.startLineNumber), r = Ii(this._normalizedRanges, (s) => s.startLineNumber <= t.endLineNumberExclusive) + 1;
        if (n === r) return new fa([t]);
        let i = [], a = t.startLineNumber;
        for (let s = n; s < r; s++) {
          let o = this._normalizedRanges[s];
          o.startLineNumber > a && i.push(new Fe(a, o.startLineNumber)), a = o.endLineNumberExclusive;
        }
        return a < t.endLineNumberExclusive && i.push(new Fe(a, t.endLineNumberExclusive)), new fa(i);
      }
      toString() {
        return this._normalizedRanges.map((t) => t.toString()).join(", ");
      }
      getIntersection(t) {
        let n = [], r = 0, i = 0;
        for (; r < this._normalizedRanges.length && i < t._normalizedRanges.length; ) {
          let a = this._normalizedRanges[r], s = t._normalizedRanges[i], o = a.intersect(s);
          o && !o.isEmpty && n.push(o), a.endLineNumberExclusive < s.endLineNumberExclusive ? r++ : i++;
        }
        return new fa(n);
      }
      getWithDelta(t) {
        return new fa(this._normalizedRanges.map((n) => n.delta(t)));
      }
    }, Ua = (Rt = class {
      static lengthDiffNonNegative(t, n) {
        return n.isLessThan(t) ? Rt.zero : t.lineCount === n.lineCount ? new Rt(0, n.columnCount - t.columnCount) : new Rt(n.lineCount - t.lineCount, n.columnCount);
      }
      static betweenPositions(t, n) {
        return t.lineNumber === n.lineNumber ? new Rt(0, n.column - t.column) : new Rt(n.lineNumber - t.lineNumber, n.column - 1);
      }
      static fromPosition(t) {
        return new Rt(t.lineNumber - 1, t.column - 1);
      }
      static ofRange(t) {
        return Rt.betweenPositions(t.getStartPosition(), t.getEndPosition());
      }
      static ofText(t) {
        let n = 0, r = 0;
        for (let i of t) i === `
` ? (n++, r = 0) : r++;
        return new Rt(n, r);
      }
      constructor(t, n) {
        this.lineCount = t, this.columnCount = n;
      }
      isZero() {
        return this.lineCount === 0 && this.columnCount === 0;
      }
      isLessThan(t) {
        return this.lineCount !== t.lineCount ? this.lineCount < t.lineCount : this.columnCount < t.columnCount;
      }
      isGreaterThan(t) {
        return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount > t.columnCount;
      }
      isGreaterThanOrEqualTo(t) {
        return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount >= t.columnCount;
      }
      equals(t) {
        return this.lineCount === t.lineCount && this.columnCount === t.columnCount;
      }
      compare(t) {
        return this.lineCount !== t.lineCount ? this.lineCount - t.lineCount : this.columnCount - t.columnCount;
      }
      add(t) {
        return t.lineCount === 0 ? new Rt(this.lineCount, this.columnCount + t.columnCount) : new Rt(this.lineCount + t.lineCount, t.columnCount);
      }
      createRange(t) {
        return this.lineCount === 0 ? new fe(t.lineNumber, t.column, t.lineNumber, t.column + this.columnCount) : new fe(t.lineNumber, t.column, t.lineNumber + this.lineCount, this.columnCount + 1);
      }
      toRange() {
        return new fe(1, 1, this.lineCount + 1, this.columnCount + 1);
      }
      toLineRange() {
        return Fe.ofLength(1, this.lineCount + 1);
      }
      addToPosition(t) {
        return this.lineCount === 0 ? new Te(t.lineNumber, t.column + this.columnCount) : new Te(t.lineNumber + this.lineCount, this.columnCount + 1);
      }
      addToRange(t) {
        return fe.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
      }
      toString() {
        return `${this.lineCount},${this.columnCount}`;
      }
    }, Rt.zero = new Rt(0, 0), Rt), N9 = class {
      getOffsetRange(e) {
        return new Ee(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
      }
      getRange(e) {
        return fe.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
      }
      getStringEdit(e) {
        let t = e.replacements.map((n) => this.getStringReplacement(n));
        return new Qr.deps.StringEdit(t);
      }
      getStringReplacement(e) {
        return new Qr.deps.StringReplacement(this.getOffsetRange(e.range), e.text);
      }
      getSingleTextEdit(e) {
        return new Qr.deps.TextReplacement(this.getRange(e.replaceRange), e.newText);
      }
      getTextEdit(e) {
        let t = e.replacements.map((n) => this.getSingleTextEdit(n));
        return new Qr.deps.TextEdit(t);
      }
    }, Qr = (oa = class {
      static get deps() {
        if (!this._deps) throw new Error("Dependencies not set. Call _setDependencies first.");
        return this._deps;
      }
    }, oa._deps = void 0, oa);
    function C9(e) {
      Qr._deps = e;
    }
    var zf = class extends N9 {
      constructor(e) {
        super(), this.text = e, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
        for (let t = 0; t < e.length; t++) e.charAt(t) === `
` && (this.lineStartOffsetByLineIdx.push(t + 1), t > 0 && e.charAt(t - 1) === "\r" ? this.lineEndOffsetByLineIdx.push(t - 1) : this.lineEndOffsetByLineIdx.push(t));
        this.lineEndOffsetByLineIdx.push(e.length);
      }
      getOffset(e) {
        let t = this._validatePosition(e);
        return this.lineStartOffsetByLineIdx[t.lineNumber - 1] + t.column - 1;
      }
      _validatePosition(e) {
        if (e.lineNumber < 1) return new Te(1, 1);
        let t = this.textLength.lineCount + 1;
        if (e.lineNumber > t) {
          let r = this.getLineLength(t);
          return new Te(t, r + 1);
        }
        if (e.column < 1) return new Te(e.lineNumber, 1);
        let n = this.getLineLength(e.lineNumber);
        return e.column - 1 > n ? new Te(e.lineNumber, n + 1) : e;
      }
      getPosition(e) {
        let t = Ii(this.lineStartOffsetByLineIdx, (i) => i <= e), n = t + 1, r = e - this.lineStartOffsetByLineIdx[t] + 1;
        return new Te(n, r);
      }
      getTextLength(e) {
        return Qr.deps.TextLength.ofRange(this.getRange(e));
      }
      get textLength() {
        let e = this.lineStartOffsetByLineIdx.length - 1;
        return new Qr.deps.TextLength(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
      }
      getLineLength(e) {
        return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
      }
    }, Xf = class {
      constructor() {
        this._transformer = void 0;
      }
      get endPositionExclusive() {
        return this.length.addToPosition(new Te(1, 1));
      }
      get lineRange() {
        return this.length.toLineRange();
      }
      getValue() {
        return this.getValueOfRange(this.length.toRange());
      }
      getLineLength(e) {
        return this.getValueOfRange(new fe(e, 1, e, Number.MAX_SAFE_INTEGER)).length;
      }
      getTransformer() {
        return this._transformer || (this._transformer = new zf(this.getValue())), this._transformer;
      }
      getLineAt(e) {
        return this.getValueOfRange(new fe(e, 1, e, Number.MAX_SAFE_INTEGER));
      }
      getLines() {
        let e = this.getValue();
        return Wd(e);
      }
      getLinesOfRange(e) {
        return e.mapToLineArray((t) => this.getLineAt(t));
      }
      equals(e) {
        return this === e ? !0 : this.getValue() === e.getValue();
      }
    }, T9 = class extends Xf {
      constructor(e, t) {
        b5(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
      }
      getValueOfRange(e) {
        if (e.startLineNumber === e.endLineNumber) return this._getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
        let t = this._getLineContent(e.startLineNumber).substring(e.startColumn - 1);
        for (let n = e.startLineNumber + 1; n < e.endLineNumber; n++) t += `
` + this._getLineContent(n);
        return t += `
` + this._getLineContent(e.endLineNumber).substring(0, e.endColumn - 1), t;
      }
      getLineLength(e) {
        return this._getLineContent(e).length;
      }
      get length() {
        let e = this._getLineContent(this._lineCount);
        return new Ua(this._lineCount - 1, e.length);
      }
    }, no = class extends T9 {
      constructor(e) {
        super((t) => e[t - 1], e.length);
      }
    }, Pa = class extends Xf {
      constructor(e) {
        super(), this.value = e, this._t = new zf(this.value);
      }
      getValueOfRange(e) {
        return this._t.getOffsetRange(e).substring(this.value);
      }
      get length() {
        return this._t.textLength;
      }
    }, pu = class Br {
      static fromStringEdit(t, n) {
        let r = t.replacements.map((i) => ir.fromStringReplacement(i, n));
        return new Br(r);
      }
      static replace(t, n) {
        return new Br([new ir(t, n)]);
      }
      static delete(t) {
        return new Br([new ir(t, "")]);
      }
      static insert(t, n) {
        return new Br([new ir(fe.fromPositions(t, t), n)]);
      }
      static fromParallelReplacementsUnsorted(t) {
        let n = t.slice().sort(Yr((r) => r.range, fe.compareRangesUsingStarts));
        return new Br(n);
      }
      constructor(t) {
        this.replacements = t, Fa(() => jl(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
      }
      normalize() {
        let t = [];
        for (let n of this.replacements) if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
          let r = t[t.length - 1];
          t[t.length - 1] = new ir(r.range.plusRange(n.range), r.text + n.text);
        } else n.isEmpty || t.push(n);
        return new Br(t);
      }
      mapPosition(t) {
        let n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = a.range.getStartPosition();
          if (t.isBeforeOrEqual(s)) break;
          let o = a.range.getEndPosition(), l = Ua.ofText(a.text);
          if (t.isBefore(o)) {
            let u = new Te(s.lineNumber + n, s.column + (s.lineNumber + n === r ? i : 0)), c = l.addToPosition(u);
            return ro(u, c);
          }
          s.lineNumber + n !== r && (i = 0), n += l.lineCount - (a.range.endLineNumber - a.range.startLineNumber), l.lineCount === 0 ? o.lineNumber !== s.lineNumber ? i += l.columnCount - (o.column - 1) : i += l.columnCount - (o.column - s.column) : i = l.columnCount, r = o.lineNumber + n;
        }
        return new Te(t.lineNumber + n, t.column + (t.lineNumber + n === r ? i : 0));
      }
      mapRange(t) {
        function n(s) {
          return s instanceof Te ? s : s.getStartPosition();
        }
        function r(s) {
          return s instanceof Te ? s : s.getEndPosition();
        }
        let i = n(this.mapPosition(t.getStartPosition())), a = r(this.mapPosition(t.getEndPosition()));
        return ro(i, a);
      }
      inverseMapPosition(t, n) {
        return this.inverse(n).mapPosition(t);
      }
      inverseMapRange(t, n) {
        return this.inverse(n).mapRange(t);
      }
      apply(t) {
        let n = "", r = new Te(1, 1);
        for (let a of this.replacements) {
          let s = a.range, o = s.getStartPosition(), l = s.getEndPosition(), u = ro(r, o);
          u.isEmpty() || (n += t.getValueOfRange(u)), n += a.text, r = l;
        }
        let i = ro(r, t.endPositionExclusive);
        return i.isEmpty() || (n += t.getValueOfRange(i)), n;
      }
      applyToString(t) {
        let n = new Pa(t);
        return this.apply(n);
      }
      inverse(t) {
        let n = this.getNewRanges();
        return new Br(this.replacements.map((r, i) => new ir(n[i], t.getValueOfRange(r.range))));
      }
      getNewRanges() {
        let t = [], n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = Ua.ofText(a.text), o = Te.lift({ lineNumber: a.range.startLineNumber + r, column: a.range.startColumn + (a.range.startLineNumber === n ? i : 0) }), l = s.createRange(o);
          t.push(l), r = l.endLineNumber - a.range.endLineNumber, i = l.endColumn - a.range.endColumn, n = a.range.endLineNumber;
        }
        return t;
      }
      toReplacement(t) {
        if (this.replacements.length === 0) throw new ut();
        if (this.replacements.length === 1) return this.replacements[0];
        let n = this.replacements[0].range.getStartPosition(), r = this.replacements[this.replacements.length - 1].range.getEndPosition(), i = "";
        for (let a = 0; a < this.replacements.length; a++) {
          let s = this.replacements[a];
          if (i += s.text, a < this.replacements.length - 1) {
            let o = this.replacements[a + 1], l = fe.fromPositions(s.range.getEndPosition(), o.range.getStartPosition()), u = t.getValueOfRange(l);
            i += u;
          }
        }
        return new ir(fe.fromPositions(n, r), i);
      }
      equals(t) {
        return Od(this.replacements, t.replacements, (n, r) => n.equals(r));
      }
      toString(t) {
        return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new Pa(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
          let r = t.getValueOfRange(n.range), i = fe.fromPositions(new Te(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition()), a = t.getValueOfRange(i);
          a.length > 10 && (a = "..." + a.substring(a.length - 10));
          let s = fe.fromPositions(n.range.getEndPosition(), new Te(n.range.endLineNumber + 1, 1)), o = t.getValueOfRange(s);
          o.length > 10 && (o = o.substring(0, 10) + "...");
          let l = r;
          if (l.length > 10) {
            let c = Math.floor(5);
            l = l.substring(0, c) + "..." + l.substring(l.length - c);
          }
          let u = n.text;
          if (u.length > 10) {
            let c = Math.floor(5);
            u = u.substring(0, c) + "..." + u.substring(u.length - c);
          }
          return l.length === 0 ? `${a}❰${u}❱${o}` : `${a}❰${l}↦${u}❱${o}`;
        }).join(`
`);
      }
    }, ir = class bi {
      static joinReplacements(t, n) {
        if (t.length === 0) throw new ut();
        if (t.length === 1) return t[0];
        let r = t[0].range.getStartPosition(), i = t[t.length - 1].range.getEndPosition(), a = "";
        for (let s = 0; s < t.length; s++) {
          let o = t[s];
          if (a += o.text, s < t.length - 1) {
            let l = t[s + 1], u = fe.fromPositions(o.range.getEndPosition(), l.range.getStartPosition()), c = n.getValueOfRange(u);
            a += c;
          }
        }
        return new bi(fe.fromPositions(r, i), a);
      }
      static fromStringReplacement(t, n) {
        return new bi(n.getTransformer().getRange(t.replaceRange), t.newText);
      }
      static delete(t) {
        return new bi(t, "");
      }
      constructor(t, n) {
        this.range = t, this.text = n;
      }
      get isEmpty() {
        return this.range.isEmpty() && this.text.length === 0;
      }
      static equals(t, n) {
        return t.range.equalsRange(n.range) && t.text === n.text;
      }
      toSingleEditOperation() {
        return { range: this.range, text: this.text };
      }
      toEdit() {
        return new pu([this]);
      }
      equals(t) {
        return bi.equals(this, t);
      }
      extendToCoverRange(t, n) {
        if (this.range.containsRange(t)) return this;
        let r = this.range.plusRange(t), i = n.getValueOfRange(fe.fromPositions(r.getStartPosition(), this.range.getStartPosition())), a = n.getValueOfRange(fe.fromPositions(this.range.getEndPosition(), r.getEndPosition())), s = i + this.text + a;
        return new bi(r, s);
      }
      extendToFullLine(t) {
        let n = new fe(this.range.startLineNumber, 1, this.range.endLineNumber, t.getTransformer().getLineLength(this.range.endLineNumber) + 1);
        return this.extendToCoverRange(n, t);
      }
      removeCommonPrefix(t) {
        let n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = Hs(n, r), a = Ua.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), s = r.substring(i), o = fe.fromPositions(a, this.range.getEndPosition());
        return new bi(o, s);
      }
      isEffectiveDeletion(t) {
        let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = Hs(n, r);
        n = n.substring(i), r = r.substring(i);
        let a = Wl(n, r);
        return n = n.substring(0, n.length - a), r = r.substring(0, r.length - a), n === "";
      }
    };
    function ro(e, t) {
      if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER) return fe.fromPositions(t, t);
      if (!e.isBeforeOrEqual(t)) throw new ut("start must be before end");
      return new fe(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    var Ki = class pa {
      static inverse(t, n, r) {
        let i = [], a = 1, s = 1;
        for (let l of t) {
          let u = new pa(new Fe(a, l.original.startLineNumber), new Fe(s, l.modified.startLineNumber));
          u.modified.isEmpty || i.push(u), a = l.original.endLineNumberExclusive, s = l.modified.endLineNumberExclusive;
        }
        let o = new pa(new Fe(a, n + 1), new Fe(s, r + 1));
        return o.modified.isEmpty || i.push(o), i;
      }
      static clip(t, n, r) {
        let i = [];
        for (let a of t) {
          let s = a.original.intersect(n), o = a.modified.intersect(r);
          s && !s.isEmpty && o && !o.isEmpty && i.push(new pa(s, o));
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
        return new pa(this.modified, this.original);
      }
      join(t) {
        return new pa(this.original.join(t.original), this.modified.join(t.modified));
      }
      get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
      }
      toRangeMapping() {
        let t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
        if (t && n) return new ar(t, n);
        if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
          if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new ut("not a valid diff");
          return new ar(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        } else return new ar(new fe(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new fe(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
      }
      toRangeMapping2(t, n) {
        if (Jf(this.original.endLineNumberExclusive, t) && Jf(this.modified.endLineNumberExclusive, n)) return new ar(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new ar(fe.fromPositions(new Te(this.original.startLineNumber, 1), ji(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(new Te(this.modified.startLineNumber, 1), ji(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new ar(fe.fromPositions(ji(new Te(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), ji(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(ji(new Te(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), ji(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        throw new ut();
      }
    };
    function ji(e, t) {
      if (e.lineNumber < 1) return new Te(1, 1);
      if (e.lineNumber > t.length) return new Te(t.length, t[t.length - 1].length + 1);
      let n = t[e.lineNumber - 1];
      return e.column > n.length + 1 ? new Te(e.lineNumber, n.length + 1) : e;
    }
    function Jf(e, t) {
      return e >= 1 && e <= t.length;
    }
    var qi = class Bo extends Ki {
      static toTextEdit(t, n) {
        let r = [];
        for (let i of t) for (let a of i.innerChanges ?? []) {
          let s = a.toTextEdit(n);
          r.push(s);
        }
        return new pu(r);
      }
      static fromRangeMappings(t) {
        let n = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.originalRange))), r = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.modifiedRange)));
        return new Bo(n, r, t);
      }
      constructor(t, n, r) {
        super(t, n), this.innerChanges = r;
      }
      flip() {
        var t;
        return new Bo(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
      }
      withInnerChangesFromLineRanges() {
        return new Bo(this.original, this.modified, [this.toRangeMapping()]);
      }
    }, ar = class ma {
      static fromEdit(t) {
        let n = t.getNewRanges();
        return t.replacements.map((r, i) => new ma(r.range, n[i]));
      }
      static fromEditJoin(t) {
        let n = t.getNewRanges(), r = t.replacements.map((i, a) => new ma(i.range, n[a]));
        return ma.join(r);
      }
      static join(t) {
        if (t.length === 0) throw new ut("Cannot join an empty list of range mappings");
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.join(t[r]);
        return n;
      }
      static assertSorted(t) {
        for (let n = 1; n < t.length; n++) {
          let r = t[n - 1], i = t[n];
          if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition()))) throw new ut("Range mappings must be sorted");
        }
      }
      constructor(t, n) {
        this.originalRange = t, this.modifiedRange = n;
      }
      toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
      }
      flip() {
        return new ma(this.modifiedRange, this.originalRange);
      }
      toTextEdit(t) {
        let n = t.getValueOfRange(this.modifiedRange);
        return new ir(this.originalRange, n);
      }
      join(t) {
        return new ma(this.originalRange.plusRange(t.originalRange), this.modifiedRange.plusRange(t.modifiedRange));
      }
    };
    function Qf(e, t, n, r = !1) {
      let i = [];
      for (let a of l5(e.map((s) => w9(s, t, n)), (s, o) => s.original.intersectsOrTouches(o.original) || s.modified.intersectsOrTouches(o.modified))) {
        let s = a[0], o = a[a.length - 1];
        i.push(new qi(s.original.join(o.original), s.modified.join(o.modified), a.map((l) => l.innerChanges[0])));
      }
      return Fa(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : jl(i, (a, s) => s.original.startLineNumber - a.original.endLineNumberExclusive === s.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < s.original.startLineNumber && a.modified.endLineNumberExclusive < s.modified.startLineNumber)), i;
    }
    function w9(e, t, n) {
      let r = 0, i = 0;
      e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
      let a = new Fe(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i), s = new Fe(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i);
      return new qi(a, s, [e]);
    }
    var A9 = 3, S9 = class {
      computeDiff(e, t, n) {
        var s;
        let r = new t0(e, t, { maxComputationTime: n.maxComputationTimeMs, shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace, shouldComputeCharChanges: !0, shouldMakePrettyDiff: !0, shouldPostProcessCharChanges: !0 }).computeDiff(), i = [], a = null;
        for (let o of r.changes) {
          let l;
          o.originalEndLineNumber === 0 ? l = new Fe(o.originalStartLineNumber + 1, o.originalStartLineNumber + 1) : l = new Fe(o.originalStartLineNumber, o.originalEndLineNumber + 1);
          let u;
          o.modifiedEndLineNumber === 0 ? u = new Fe(o.modifiedStartLineNumber + 1, o.modifiedStartLineNumber + 1) : u = new Fe(o.modifiedStartLineNumber, o.modifiedEndLineNumber + 1);
          let c = new qi(l, u, (s = o.charChanges) == null ? void 0 : s.map((d) => new ar(new fe(d.originalStartLineNumber, d.originalStartColumn, d.originalEndLineNumber, d.originalEndColumn), new fe(d.modifiedStartLineNumber, d.modifiedStartColumn, d.modifiedEndLineNumber, d.modifiedEndColumn))));
          a && (a.modified.endLineNumberExclusive === c.modified.startLineNumber || a.original.endLineNumberExclusive === c.original.startLineNumber) && (c = new qi(a.original.join(c.original), a.modified.join(c.modified), a.innerChanges && c.innerChanges ? a.innerChanges.concat(c.innerChanges) : void 0), i.pop()), i.push(c), a = c;
        }
        return Fa(() => jl(i, (o, l) => l.original.startLineNumber - o.original.endLineNumberExclusive === l.modified.startLineNumber - o.modified.endLineNumberExclusive && o.original.endLineNumberExclusive < l.original.startLineNumber && o.modified.endLineNumberExclusive < l.modified.startLineNumber)), new eo(i, [], r.quitEarly);
      }
    };
    function Zf(e, t, n, r) {
      return new ah(e, t, n).ComputeDiff(r);
    }
    var e0 = class {
      constructor(e) {
        let t = [], n = [];
        for (let r = 0, i = e.length; r < i; r++) t[r] = gu(e[r], 1), n[r] = Eu(e[r], 1);
        this.lines = e, this._startColumns = t, this._endColumns = n;
      }
      getElements() {
        let e = [];
        for (let t = 0, n = this.lines.length; t < n; t++) e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
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
        let r = [], i = [], a = [], s = 0;
        for (let o = t; o <= n; o++) {
          let l = this.lines[o], u = e ? this._startColumns[o] : 1, c = e ? this._endColumns[o] : l.length + 1;
          for (let d = u; d < c; d++) r[s] = l.charCodeAt(d - 1), i[s] = o + 1, a[s] = d, s++;
          !e && o < n && (r[s] = R.LineFeed, i[s] = o + 1, a[s] = l.length + 1, s++);
        }
        return new L9(r, i, a);
      }
    }, L9 = class {
      constructor(e, t, n) {
        this._charCodes = e, this._lineNumbers = t, this._columns = n;
      }
      toString() {
        return "[" + this._charCodes.map((e, t) => (e === R.LineFeed ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`).join(", ") + "]";
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
        return e === -1 ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), this._charCodes[e] === R.LineFeed ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
      }
      getStartColumn(e) {
        return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
      }
      getEndColumn(e) {
        return e === -1 ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), this._charCodes[e] === R.LineFeed ? 1 : this._columns[e] + 1);
      }
    }, io = class $2 {
      constructor(t, n, r, i, a, s, o, l) {
        this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = a, this.modifiedStartColumn = s, this.modifiedEndLineNumber = o, this.modifiedEndColumn = l;
      }
      static createFromDiffChange(t, n, r) {
        let i = n.getStartLineNumber(t.originalStart), a = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), o = n.getEndColumn(t.originalStart + t.originalLength - 1), l = r.getStartLineNumber(t.modifiedStart), u = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), d = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
        return new $2(i, a, s, o, l, u, c, d);
      }
    };
    function F9(e) {
      if (e.length <= 1) return e;
      let t = [e[0]], n = t[0];
      for (let r = 1, i = e.length; r < i; r++) {
        let a = e[r], s = a.originalStart - (n.originalStart + n.originalLength), o = a.modifiedStart - (n.modifiedStart + n.modifiedLength);
        Math.min(s, o) < A9 ? (n.originalLength = a.originalStart + a.originalLength - n.originalStart, n.modifiedLength = a.modifiedStart + a.modifiedLength - n.modifiedStart) : (t.push(a), n = a);
      }
      return t;
    }
    var mu = class V2 {
      constructor(t, n, r, i, a) {
        this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = a;
      }
      static createFromDiffResult(t, n, r, i, a, s, o) {
        let l, u, c, d, p;
        if (n.originalLength === 0 ? (l = r.getStartLineNumber(n.originalStart) - 1, u = 0) : (l = r.getStartLineNumber(n.originalStart), u = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = i.getStartLineNumber(n.modifiedStart) - 1, d = 0) : (c = i.getStartLineNumber(n.modifiedStart), d = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && a()) {
          let m = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
          if (m.getElements().length > 0 && g.getElements().length > 0) {
            let _ = Zf(m, g, a, !0).changes;
            o && (_ = F9(_)), p = [];
            for (let L = 0, A = _.length; L < A; L++) p.push(io.createFromDiffChange(_[L], m, g));
          }
        }
        return new V2(l, u, c, d, p);
      }
    }, t0 = class {
      constructor(e, t, n) {
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new e0(e), this.modified = new e0(t), this.continueLineDiff = n0(n.maxComputationTime), this.continueCharDiff = n0(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
      }
      computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: !1, changes: [] } : { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: void 0 }] };
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: void 0 }] };
        let e = Zf(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
          let s = [];
          for (let o = 0, l = t.length; o < l; o++) s.push(mu.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          return { quitEarly: n, changes: s };
        }
        let r = [], i = 0, a = 0;
        for (let s = -1, o = t.length; s < o; s++) {
          let l = s + 1 < o ? t[s + 1] : null, u = l ? l.originalStart : this.originalLines.length, c = l ? l.modifiedStart : this.modifiedLines.length;
          for (; i < u && a < c; ) {
            let d = this.originalLines[i], p = this.modifiedLines[a];
            if (d !== p) {
              {
                let m = gu(d, 1), g = gu(p, 1);
                for (; m > 1 && g > 1; ) {
                  let _ = d.charCodeAt(m - 2), L = p.charCodeAt(g - 2);
                  if (_ !== L) break;
                  m--, g--;
                }
                (m > 1 || g > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, m, a + 1, 1, g);
              }
              {
                let m = Eu(d, 1), g = Eu(p, 1), _ = d.length + 1, L = p.length + 1;
                for (; m < _ && g < L; ) {
                  let A = d.charCodeAt(m - 1), F = d.charCodeAt(g - 1);
                  if (A !== F) break;
                  m++, g++;
                }
                (m < _ || g < L) && this._pushTrimWhitespaceCharChange(r, i + 1, m, _, a + 1, g, L);
              }
            }
            i++, a++;
          }
          l && (r.push(mu.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += l.originalLength, a += l.modifiedLength);
        }
        return { quitEarly: n, changes: r };
      }
      _pushTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s)) return;
        let o;
        this.shouldComputeCharChanges && (o = [new io(t, n, t, r, i, a, i, s)]), e.push(new mu(t, t, i, i, o));
      }
      _mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        let o = e.length;
        if (o === 0) return !1;
        let l = e[o - 1];
        return l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0 ? !1 : l.originalEndLineNumber === t && l.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new io(t, n, t, r, i, a, i, s)), !0) : l.originalEndLineNumber + 1 === t && l.modifiedEndLineNumber + 1 === i ? (l.originalEndLineNumber = t, l.modifiedEndLineNumber = i, this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new io(t, n, t, r, i, a, i, s)), !0) : !1;
      }
    };
    function gu(e, t) {
      let n = t7(e);
      return n === -1 ? t : n + 1;
    }
    function Eu(e, t) {
      let n = n7(e);
      return n === -1 ? t : n + 2;
    }
    function n0(e) {
      if (e === 0) return () => !0;
      let t = Date.now();
      return () => Date.now() - t < e;
    }
    var Gi = class A1 {
      static trivial(t, n) {
        return new A1([new zt(Ee.ofLength(t.length), Ee.ofLength(n.length))], !1);
      }
      static trivialTimedOut(t, n) {
        return new A1([new zt(Ee.ofLength(t.length), Ee.ofLength(n.length))], !0);
      }
      constructor(t, n) {
        this.diffs = t, this.hitTimeout = n;
      }
    }, zt = class Er {
      static invert(t, n) {
        let r = [];
        return u5(t, (i, a) => {
          r.push(Er.fromOffsetPairs(i ? i.getEndExclusives() : Zr.zero, a ? a.getStarts() : new Zr(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)));
        }), r;
      }
      static fromOffsetPairs(t, n) {
        return new Er(new Ee(t.offset1, n.offset1), new Ee(t.offset2, n.offset2));
      }
      static assertSorted(t) {
        let n;
        for (let r of t) {
          if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start)) throw new ut("Sequence diffs must be sorted");
          n = r;
        }
      }
      constructor(t, n) {
        this.seq1Range = t, this.seq2Range = n;
      }
      swap() {
        return new Er(this.seq2Range, this.seq1Range);
      }
      toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
      }
      join(t) {
        return new Er(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
      }
      delta(t) {
        return t === 0 ? this : new Er(this.seq1Range.delta(t), this.seq2Range.delta(t));
      }
      deltaStart(t) {
        return t === 0 ? this : new Er(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
      }
      deltaEnd(t) {
        return t === 0 ? this : new Er(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
      }
      intersectsOrTouches(t) {
        return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
      }
      intersect(t) {
        let n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
        if (!(!n || !r)) return new Er(n, r);
      }
      getStarts() {
        return new Zr(this.seq1Range.start, this.seq2Range.start);
      }
      getEndExclusives() {
        return new Zr(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
      }
    }, Zr = (Hn = class {
      constructor(t, n) {
        this.offset1 = t, this.offset2 = n;
      }
      toString() {
        return `${this.offset1} <-> ${this.offset2}`;
      }
      delta(t) {
        return t === 0 ? this : new Hn(this.offset1 + t, this.offset2 + t);
      }
      equals(t) {
        return this.offset1 === t.offset1 && this.offset2 === t.offset2;
      }
    }, Hn.zero = new Hn(0, 0), Hn.max = new Hn(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), Hn), _u = (Ei = class {
      isValid() {
        return !0;
      }
    }, Ei.instance = new Ei(), Ei), I9 = class {
      constructor(e) {
        if (this.timeout = e, this.startTime = Date.now(), this.valid = !0, e <= 0) throw new ut("timeout must be positive");
      }
      isValid() {
        return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
      }
      disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
      }
    }, Du = class {
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
    function vu(e) {
      return e === R.Space || e === R.Tab;
    }
    var r0 = (Ur = class {
      static getKey(t) {
        let n = this.chrKeys.get(t);
        return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
      }
      constructor(t, n, r) {
        this.range = t, this.lines = n, this.source = r, this.histogram = [];
        let i = 0;
        for (let a = t.startLineNumber - 1; a < t.endLineNumberExclusive - 1; a++) {
          let s = n[a];
          for (let l = 0; l < s.length; l++) {
            i++;
            let u = s[l], c = Ur.getKey(u);
            this.histogram[c] = (this.histogram[c] || 0) + 1;
          }
          i++;
          let o = Ur.getKey(`
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
    }, Ur.chrKeys = /* @__PURE__ */ new Map(), Ur), R9 = class {
      compute(e, t, n = _u.instance, r) {
        if (e.length === 0 || t.length === 0) return Gi.trivial(e, t);
        let i = new Du(e.length, t.length), a = new Du(e.length, t.length), s = new Du(e.length, t.length);
        for (let m = 0; m < e.length; m++) for (let g = 0; g < t.length; g++) {
          if (!n.isValid()) return Gi.trivialTimedOut(e, t);
          let _ = m === 0 ? 0 : i.get(m - 1, g), L = g === 0 ? 0 : i.get(m, g - 1), A;
          e.getElement(m) === t.getElement(g) ? (m === 0 || g === 0 ? A = 0 : A = i.get(m - 1, g - 1), m > 0 && g > 0 && a.get(m - 1, g - 1) === 3 && (A += s.get(m - 1, g - 1)), A += r ? r(m, g) : 1) : A = -1;
          let F = Math.max(_, L, A);
          if (F === A) {
            let C = m > 0 && g > 0 ? s.get(m - 1, g - 1) : 0;
            s.set(m, g, C + 1), a.set(m, g, 3);
          } else F === _ ? (s.set(m, g, 0), a.set(m, g, 1)) : F === L && (s.set(m, g, 0), a.set(m, g, 2));
          i.set(m, g, F);
        }
        let o = [], l = e.length, u = t.length;
        function c(m, g) {
          (m + 1 !== l || g + 1 !== u) && o.push(new zt(new Ee(m + 1, l), new Ee(g + 1, u))), l = m, u = g;
        }
        let d = e.length - 1, p = t.length - 1;
        for (; d >= 0 && p >= 0; ) a.get(d, p) === 3 ? (c(d, p), d--, p--) : a.get(d, p) === 1 ? d-- : p--;
        return c(-1, -1), o.reverse(), new Gi(o, !1);
      }
    }, i0 = class {
      compute(e, t, n = _u.instance) {
        if (e.length === 0 || t.length === 0) return Gi.trivial(e, t);
        let r = e, i = t;
        function a(g, _) {
          for (; g < r.length && _ < i.length && r.getElement(g) === i.getElement(_); ) g++, _++;
          return g;
        }
        let s = 0, o = new O9();
        o.set(0, a(0, 0));
        let l = new x9();
        l.set(0, o.get(0) === 0 ? null : new a0(null, 0, 0, o.get(0)));
        let u = 0;
        e: for (; ; ) {
          if (s++, !n.isValid()) return Gi.trivialTimedOut(r, i);
          let g = -Math.min(s, i.length + s % 2), _ = Math.min(s, r.length + s % 2);
          for (u = g; u <= _; u += 2) {
            let L = u === _ ? -1 : o.get(u + 1), A = u === g ? -1 : o.get(u - 1) + 1, F = Math.min(Math.max(L, A), r.length), C = F - u;
            if (F > r.length || C > i.length) continue;
            let x = a(F, C);
            o.set(u, x);
            let U = F === L ? l.get(u + 1) : l.get(u - 1);
            if (l.set(u, x !== F ? new a0(U, F, C, x - F) : U), o.get(u) === r.length && o.get(u) - u === i.length) break e;
          }
        }
        let c = l.get(u), d = [], p = r.length, m = i.length;
        for (; ; ) {
          let g = c ? c.x + c.length : 0, _ = c ? c.y + c.length : 0;
          if ((g !== p || _ !== m) && d.push(new zt(new Ee(g, p), new Ee(_, m))), !c) break;
          p = c.x, m = c.y, c = c.prev;
        }
        return d.reverse(), new Gi(d, !1);
      }
    }, a0 = class {
      constructor(e, t, n, r) {
        this.prev = e, this.x = t, this.y = n, this.length = r;
      }
    }, O9 = class {
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
    }, x9 = class {
      constructor() {
        this.positiveArr = [], this.negativeArr = [];
      }
      get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
      }
      set(e, t) {
        e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
      }
    }, ao = class {
      constructor(e, t, n) {
        this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
          let i = e[r - 1], a = 0;
          r === this.range.startLineNumber && this.range.startColumn > 1 && (a = this.range.startColumn - 1, i = i.substring(a)), this.lineStartOffsets.push(a);
          let s = 0;
          if (!n) {
            let l = i.trimStart();
            s = i.length - l.length, i = l.trimEnd();
          }
          this.trimmedWsLengthsByLineIdx.push(s);
          let o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - a - s, i.length) : i.length;
          for (let l = 0; l < o; l++) this.elements.push(i.charCodeAt(l));
          r < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
        }
      }
      toString() {
        return `Slice: "${this.text}"`;
      }
      get text() {
        return this.getText(new Ee(0, this.length));
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
        let t = l0(e > 0 ? this.elements[e - 1] : -1), n = l0(e < this.elements.length ? this.elements[e] : -1);
        if (t === We.LineBreakCR && n === We.LineBreakLF) return 0;
        if (t === We.LineBreakLF) return 150;
        let r = 0;
        return t !== n && (r += 10, t === We.WordLower && n === We.WordUpper && (r += 1)), r += o0(t), r += o0(n), r;
      }
      translateOffset(e, t = "right") {
        let n = Ii(this.firstElementOffsetByLineIdx, (i) => i <= e), r = e - this.firstElementOffsetByLineIdx[n];
        return new Te(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (r === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
      }
      translateRange(e) {
        let t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
        return n.isBefore(t) ? fe.fromPositions(n, n) : fe.fromPositions(t, n);
      }
      findWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Hi(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Hi(this.elements[t - 1]); ) t--;
        let n = e;
        for (; n < this.elements.length && Hi(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      findSubWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Hi(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Hi(this.elements[t - 1]) && !s0(this.elements[t]); ) t--;
        let n = e;
        for (; n < this.elements.length && Hi(this.elements[n]) && !s0(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      countLinesIn(e) {
        return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
      }
      isStronglyEqual(e, t) {
        return this.elements[e] === this.elements[t];
      }
      extendToFullLines(e) {
        let t = Fi(this.firstElementOffsetByLineIdx, (r) => r <= e.start) ?? 0, n = o5(this.firstElementOffsetByLineIdx, (r) => e.endExclusive <= r) ?? this.elements.length;
        return new Ee(t, n);
      }
    };
    function Hi(e) {
      return e >= R.a && e <= R.z || e >= R.A && e <= R.Z || e >= R.Digit0 && e <= R.Digit9;
    }
    function s0(e) {
      return e >= R.A && e <= R.Z;
    }
    var We;
    (function(e) {
      e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
    })(We || (We = {}));
    var k9 = { [We.WordLower]: 0, [We.WordUpper]: 0, [We.WordNumber]: 0, [We.End]: 10, [We.Other]: 2, [We.Separator]: 30, [We.Space]: 3, [We.LineBreakCR]: 10, [We.LineBreakLF]: 10 };
    function o0(e) {
      return k9[e];
    }
    function l0(e) {
      return e === R.LineFeed ? We.LineBreakLF : e === R.CarriageReturn ? We.LineBreakCR : vu(e) ? We.Space : e >= R.a && e <= R.z ? We.WordLower : e >= R.A && e <= R.Z ? We.WordUpper : e >= R.Digit0 && e <= R.Digit9 ? We.WordNumber : e === -1 ? We.End : e === R.Comma || e === R.Semicolon ? We.Separator : We.Other;
    }
    function M9(e, t, n, r, i, a) {
      let { moves: s, excludedChanges: o } = P9(e, t, n, a);
      if (!a.isValid()) return [];
      let l = e.filter((c) => !o.has(c)), u = B9(l, r, i, t, n, a);
      return d5(s, u), s = $9(s), s = s.filter((c) => {
        let d = c.original.toOffsetRange().slice(t).map((p) => p.trim());
        return d.join(`
`).length >= 15 && U9(d, (p) => p.length >= 2) >= 2;
      }), s = V9(e, s), s;
    }
    function U9(e, t) {
      let n = 0;
      for (let r of e) t(r) && n++;
      return n;
    }
    function P9(e, t, n, r) {
      let i = [], a = e.filter((l) => l.modified.isEmpty && l.original.length >= 3).map((l) => new r0(l.original, t, l)), s = new Set(e.filter((l) => l.original.isEmpty && l.modified.length >= 3).map((l) => new r0(l.modified, n, l))), o = /* @__PURE__ */ new Set();
      for (let l of a) {
        let u = -1, c;
        for (let d of s) {
          let p = l.computeSimilarity(d);
          p > u && (u = p, c = d);
        }
        if (u > 0.9 && c && (s.delete(c), i.push(new Ki(l.range, c.range)), o.add(l.source), o.add(c.source)), !r.isValid()) return { moves: i, excludedChanges: o };
      }
      return { moves: i, excludedChanges: o };
    }
    function B9(e, t, n, r, i, a) {
      let s = [], o = new Md();
      for (let p of e) for (let m = p.original.startLineNumber; m < p.original.endLineNumberExclusive - 2; m++) {
        let g = `${t[m - 1]}:${t[m + 1 - 1]}:${t[m + 2 - 1]}`;
        o.add(g, { range: new Fe(m, m + 3) });
      }
      let l = [];
      e.sort(Yr((p) => p.modified.startLineNumber, Ri));
      for (let p of e) {
        let m = [];
        for (let g = p.modified.startLineNumber; g < p.modified.endLineNumberExclusive - 2; g++) {
          let _ = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`, L = new Fe(g, g + 3), A = [];
          o.forEach(_, ({ range: F }) => {
            for (let x of m) if (x.originalLineRange.endLineNumberExclusive + 1 === F.endLineNumberExclusive && x.modifiedLineRange.endLineNumberExclusive + 1 === L.endLineNumberExclusive) {
              x.originalLineRange = new Fe(x.originalLineRange.startLineNumber, F.endLineNumberExclusive), x.modifiedLineRange = new Fe(x.modifiedLineRange.startLineNumber, L.endLineNumberExclusive), A.push(x);
              return;
            }
            let C = { modifiedLineRange: L, originalLineRange: F };
            l.push(C), A.push(C);
          }), m = A;
        }
        if (!a.isValid()) return [];
      }
      l.sort(h5(Yr((p) => p.modifiedLineRange.length, Ri)));
      let u = new to(), c = new to();
      for (let p of l) {
        let m = p.modifiedLineRange.startLineNumber - p.originalLineRange.startLineNumber, g = u.subtractFrom(p.modifiedLineRange), _ = c.subtractFrom(p.originalLineRange).getWithDelta(m), L = g.getIntersection(_);
        for (let A of L.ranges) {
          if (A.length < 3) continue;
          let F = A, C = A.delta(-m);
          s.push(new Ki(C, F)), u.addRange(F), c.addRange(C);
        }
      }
      s.sort(Yr((p) => p.original.startLineNumber, Ri));
      let d = new Rd(e);
      for (let p = 0; p < s.length; p++) {
        let m = s[p], g = d.findLastMonotonous((q) => q.original.startLineNumber <= m.original.startLineNumber), _ = Fi(e, (q) => q.modified.startLineNumber <= m.modified.startLineNumber), L = Math.max(m.original.startLineNumber - g.original.startLineNumber, m.modified.startLineNumber - _.modified.startLineNumber), A = d.findLastMonotonous((q) => q.original.startLineNumber < m.original.endLineNumberExclusive), F = Fi(e, (q) => q.modified.startLineNumber < m.modified.endLineNumberExclusive), C = Math.max(A.original.endLineNumberExclusive - m.original.endLineNumberExclusive, F.modified.endLineNumberExclusive - m.modified.endLineNumberExclusive), x;
        for (x = 0; x < L; x++) {
          let q = m.original.startLineNumber - x - 1, I = m.modified.startLineNumber - x - 1;
          if (q > r.length || I > i.length || u.contains(I) || c.contains(q) || !u0(r[q - 1], i[I - 1], a)) break;
        }
        x > 0 && (c.addRange(new Fe(m.original.startLineNumber - x, m.original.startLineNumber)), u.addRange(new Fe(m.modified.startLineNumber - x, m.modified.startLineNumber)));
        let U;
        for (U = 0; U < C; U++) {
          let q = m.original.endLineNumberExclusive + U, I = m.modified.endLineNumberExclusive + U;
          if (q > r.length || I > i.length || u.contains(I) || c.contains(q) || !u0(r[q - 1], i[I - 1], a)) break;
        }
        U > 0 && (c.addRange(new Fe(m.original.endLineNumberExclusive, m.original.endLineNumberExclusive + U)), u.addRange(new Fe(m.modified.endLineNumberExclusive, m.modified.endLineNumberExclusive + U))), (x > 0 || U > 0) && (s[p] = new Ki(new Fe(m.original.startLineNumber - x, m.original.endLineNumberExclusive + U), new Fe(m.modified.startLineNumber - x, m.modified.endLineNumberExclusive + U)));
      }
      return s;
    }
    function u0(e, t, n) {
      if (e.trim() === t.trim()) return !0;
      if (e.length > 300 && t.length > 300) return !1;
      let r = new i0().compute(new ao([e], new fe(1, 1, 1, e.length), !1), new ao([t], new fe(1, 1, 1, t.length), !1), n), i = 0, a = zt.invert(r.diffs, e.length);
      for (let l of a) l.seq1Range.forEach((u) => {
        vu(e.charCodeAt(u)) || i++;
      });
      function s(l) {
        let u = 0;
        for (let c = 0; c < e.length; c++) vu(l.charCodeAt(c)) || u++;
        return u;
      }
      let o = s(e.length > t.length ? e : t);
      return i / o > 0.6 && o > 10;
    }
    function $9(e) {
      if (e.length === 0) return e;
      e.sort(Yr((n) => n.original.startLineNumber, Ri));
      let t = [e[0]];
      for (let n = 1; n < e.length; n++) {
        let r = t[t.length - 1], i = e[n], a = i.original.startLineNumber - r.original.endLineNumberExclusive, s = i.modified.startLineNumber - r.modified.endLineNumberExclusive;
        if (a >= 0 && s >= 0 && a + s <= 2) {
          t[t.length - 1] = r.join(i);
          continue;
        }
        t.push(i);
      }
      return t;
    }
    function V9(e, t) {
      let n = new Rd(e);
      return t = t.filter((r) => {
        let i = n.findLastMonotonous((s) => s.original.startLineNumber < r.original.endLineNumberExclusive) || new Ki(new Fe(1, 1), new Fe(1, 1)), a = Fi(e, (s) => s.modified.startLineNumber < r.modified.endLineNumberExclusive);
        return i !== a;
      }), t;
    }
    function c0(e, t, n) {
      let r = n;
      return r = d0(e, t, r), r = d0(e, t, r), r = K9(e, t, r), r;
    }
    function d0(e, t, n) {
      if (n.length === 0) return n;
      let r = [];
      r.push(n[0]);
      for (let a = 1; a < n.length; a++) {
        let s = r[r.length - 1], o = n[a];
        if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
          let l = o.seq1Range.start - s.seq1Range.endExclusive, u;
          for (u = 1; u <= l && !(e.getElement(o.seq1Range.start - u) !== e.getElement(o.seq1Range.endExclusive - u) || t.getElement(o.seq2Range.start - u) !== t.getElement(o.seq2Range.endExclusive - u)); u++) ;
          if (u--, u === l) {
            r[r.length - 1] = new zt(new Ee(s.seq1Range.start, o.seq1Range.endExclusive - l), new Ee(s.seq2Range.start, o.seq2Range.endExclusive - l));
            continue;
          }
          o = o.delta(-u);
        }
        r.push(o);
      }
      let i = [];
      for (let a = 0; a < r.length - 1; a++) {
        let s = r[a + 1], o = r[a];
        if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
          let l = s.seq1Range.start - o.seq1Range.endExclusive, u;
          for (u = 0; u < l && !(!e.isStronglyEqual(o.seq1Range.start + u, o.seq1Range.endExclusive + u) || !t.isStronglyEqual(o.seq2Range.start + u, o.seq2Range.endExclusive + u)); u++) ;
          if (u === l) {
            r[a + 1] = new zt(new Ee(o.seq1Range.start + l, s.seq1Range.endExclusive), new Ee(o.seq2Range.start + l, s.seq2Range.endExclusive));
            continue;
          }
          u > 0 && (o = o.delta(u));
        }
        i.push(o);
      }
      return r.length > 0 && i.push(r[r.length - 1]), i;
    }
    function K9(e, t, n) {
      if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
      for (let r = 0; r < n.length; r++) {
        let i = r > 0 ? n[r - 1] : void 0, a = n[r], s = r + 1 < n.length ? n[r + 1] : void 0, o = new Ee(i ? i.seq1Range.endExclusive + 1 : 0, s ? s.seq1Range.start - 1 : e.length), l = new Ee(i ? i.seq2Range.endExclusive + 1 : 0, s ? s.seq2Range.start - 1 : t.length);
        a.seq1Range.isEmpty ? n[r] = h0(a, e, t, o, l) : a.seq2Range.isEmpty && (n[r] = h0(a.swap(), t, e, l, o).swap());
      }
      return n;
    }
    function h0(e, t, n, r, i) {
      let a = 1;
      for (; e.seq1Range.start - a >= r.start && e.seq2Range.start - a >= i.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100; ) a++;
      a--;
      let s = 0;
      for (; e.seq1Range.start + s < r.endExclusive && e.seq2Range.endExclusive + s < i.endExclusive && n.isStronglyEqual(e.seq2Range.start + s, e.seq2Range.endExclusive + s) && s < 100; ) s++;
      if (a === 0 && s === 0) return e;
      let o = 0, l = -1;
      for (let u = -a; u <= s; u++) {
        let c = e.seq2Range.start + u, d = e.seq2Range.endExclusive + u, p = e.seq1Range.start + u, m = t.getBoundaryScore(p) + n.getBoundaryScore(c) + n.getBoundaryScore(d);
        m > l && (l = m, o = u);
      }
      return e.delta(o);
    }
    function j9(e, t, n) {
      let r = [];
      for (let i of n) {
        let a = r[r.length - 1];
        if (!a) {
          r.push(i);
          continue;
        }
        i.seq1Range.start - a.seq1Range.endExclusive <= 2 || i.seq2Range.start - a.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new zt(a.seq1Range.join(i.seq1Range), a.seq2Range.join(i.seq2Range)) : r.push(i);
      }
      return r;
    }
    function f0(e, t, n, r, i = !1) {
      let a = zt.invert(n, e.length), s = [], o = new Zr(0, 0);
      function l(u, c) {
        if (u.offset1 < o.offset1 || u.offset2 < o.offset2) return;
        let d = r(e, u.offset1), p = r(t, u.offset2);
        if (!d || !p) return;
        let m = new zt(d, p), g = m.intersect(c), _ = g.seq1Range.length, L = g.seq2Range.length;
        for (; a.length > 0; ) {
          let A = a[0];
          if (!(A.seq1Range.intersects(m.seq1Range) || A.seq2Range.intersects(m.seq2Range))) break;
          let F = r(e, A.seq1Range.start), C = r(t, A.seq2Range.start), x = new zt(F, C), U = x.intersect(A);
          if (_ += U.seq1Range.length, L += U.seq2Range.length, m = m.join(x), m.seq1Range.endExclusive >= A.seq1Range.endExclusive) a.shift();
          else break;
        }
        (i && _ + L < m.seq1Range.length + m.seq2Range.length || _ + L < (m.seq1Range.length + m.seq2Range.length) * 2 / 3) && s.push(m), o = m.getEndExclusives();
      }
      for (; a.length > 0; ) {
        let u = a.shift();
        u.seq1Range.isEmpty || (l(u.getStarts(), u), l(u.getEndExclusives().delta(-1), u));
      }
      return q9(n, s);
    }
    function q9(e, t) {
      let n = [];
      for (; e.length > 0 || t.length > 0; ) {
        let r = e[0], i = t[0], a;
        r && (!i || r.seq1Range.start < i.seq1Range.start) ? a = e.shift() : a = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= a.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(a) : n.push(a);
      }
      return n;
    }
    function G9(e, t, n) {
      let r = n;
      if (r.length === 0) return r;
      let i = 0, a;
      do {
        a = !1;
        let s = [r[0]];
        for (let o = 1; o < r.length; o++) {
          let l = function(d, p) {
            let m = new Ee(c.seq1Range.endExclusive, u.seq1Range.start);
            return e.getText(m).replace(/\s/g, "").length <= 4 && (d.seq1Range.length + d.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
          }, u = r[o], c = s[s.length - 1];
          l(c, u) ? (a = !0, s[s.length - 1] = s[s.length - 1].join(u)) : s.push(u);
        }
        r = s;
      } while (i++ < 10 && a);
      return r;
    }
    function H9(e, t, n) {
      let r = n;
      if (r.length === 0) return r;
      let i = 0, a;
      do {
        a = !1;
        let o = [r[0]];
        for (let l = 1; l < r.length; l++) {
          let u = function(p, m) {
            let g = new Ee(d.seq1Range.endExclusive, c.seq1Range.start);
            if (e.countLinesIn(g) > 5 || g.length > 500) return !1;
            let _ = e.getText(g).trim();
            if (_.length > 20 || _.split(/\r\n|\r|\n/).length > 1) return !1;
            let L = e.countLinesIn(p.seq1Range), A = p.seq1Range.length, F = t.countLinesIn(p.seq2Range), C = p.seq2Range.length, x = e.countLinesIn(m.seq1Range), U = m.seq1Range.length, q = t.countLinesIn(m.seq2Range), I = m.seq2Range.length, B = 2 * 40 + 50;
            function S(K) {
              return Math.min(K, B);
            }
            return Math.pow(Math.pow(S(L * 40 + A), 1.5) + Math.pow(S(F * 40 + C), 1.5), 1.5) + Math.pow(Math.pow(S(x * 40 + U), 1.5) + Math.pow(S(q * 40 + I), 1.5), 1.5) > (B ** 1.5) ** 1.5 * 1.3;
          }, c = r[l], d = o[o.length - 1];
          u(d, c) ? (a = !0, o[o.length - 1] = o[o.length - 1].join(c)) : o.push(c);
        }
        r = o;
      } while (i++ < 10 && a);
      let s = [];
      return c5(r, (o, l, u) => {
        let c = l;
        function d(A) {
          return A.length > 0 && A.trim().length <= 3 && l.seq1Range.length + l.seq2Range.length > 100;
        }
        let p = e.extendToFullLines(l.seq1Range), m = e.getText(new Ee(p.start, l.seq1Range.start));
        d(m) && (c = c.deltaStart(-m.length));
        let g = e.getText(new Ee(l.seq1Range.endExclusive, p.endExclusive));
        d(g) && (c = c.deltaEnd(g.length));
        let _ = zt.fromOffsetPairs(o ? o.getEndExclusives() : Zr.zero, u ? u.getStarts() : Zr.max), L = c.intersect(_);
        s.length > 0 && L.getStarts().equals(s[s.length - 1].getEndExclusives()) ? s[s.length - 1] = s[s.length - 1].join(L) : s.push(L);
      }), s;
    }
    var p0 = class {
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
        let t = e === 0 ? 0 : m0(this.lines[e - 1]), n = e === this.lines.length ? 0 : m0(this.lines[e]);
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
    function m0(e) {
      let t = 0;
      for (; t < e.length && (e.charCodeAt(t) === R.Space || e.charCodeAt(t) === R.Tab); ) t++;
      return t;
    }
    var W9 = class {
      constructor() {
        this.dynamicProgrammingDiffing = new R9(), this.myersDiffingAlgorithm = new i0();
      }
      computeDiff(e, t, n) {
        if (e.length <= 1 && Od(e, t, (q, I) => q === I)) return new eo([], [], !1);
        if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0) return new eo([new qi(new Fe(1, e.length + 1), new Fe(1, t.length + 1), [new ar(new fe(1, 1, e.length, e[e.length - 1].length + 1), new fe(1, 1, t.length, t[t.length - 1].length + 1))])], [], !1);
        let r = n.maxComputationTimeMs === 0 ? _u.instance : new I9(n.maxComputationTimeMs), i = !n.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
        function s(q) {
          let I = a.get(q);
          return I === void 0 && (I = a.size, a.set(q, I)), I;
        }
        let o = e.map((q) => s(q.trim())), l = t.map((q) => s(q.trim())), u = new p0(o, e), c = new p0(l, t), d = u.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(u, c, r, (q, I) => e[q] === t[I] ? t[I].length === 0 ? 0.1 : 1 + Math.log(1 + t[I].length) : 0.99) : this.myersDiffingAlgorithm.compute(u, c, r), p = d.diffs, m = d.hitTimeout;
        p = c0(u, c, p), p = G9(u, c, p);
        let g = [], _ = (q) => {
          if (i) for (let I = 0; I < q; I++) {
            let B = L + I, S = A + I;
            if (e[B] !== t[S]) {
              let K = this.refineDiff(e, t, new zt(new Ee(B, B + 1), new Ee(S, S + 1)), r, i, n);
              for (let V of K.mappings) g.push(V);
              K.hitTimeout && (m = !0);
            }
          }
        }, L = 0, A = 0;
        for (let q of p) {
          Fa(() => q.seq1Range.start - L === q.seq2Range.start - A);
          let I = q.seq1Range.start - L;
          _(I), L = q.seq1Range.endExclusive, A = q.seq2Range.endExclusive;
          let B = this.refineDiff(e, t, q, r, i, n);
          B.hitTimeout && (m = !0);
          for (let S of B.mappings) g.push(S);
        }
        _(e.length - L);
        let F = new no(e), C = new no(t), x = Qf(g, F, C), U = [];
        return n.computeMoves && (U = this.computeMoves(x, e, t, o, l, r, i, n)), Fa(() => {
          function q(B, S) {
            if (B.lineNumber < 1 || B.lineNumber > S.length) return !1;
            let K = S[B.lineNumber - 1];
            return !(B.column < 1 || B.column > K.length + 1);
          }
          function I(B, S) {
            return !(B.startLineNumber < 1 || B.startLineNumber > S.length + 1 || B.endLineNumberExclusive < 1 || B.endLineNumberExclusive > S.length + 1);
          }
          for (let B of x) {
            if (!B.innerChanges) return !1;
            for (let S of B.innerChanges) if (!(q(S.modifiedRange.getStartPosition(), t) && q(S.modifiedRange.getEndPosition(), t) && q(S.originalRange.getStartPosition(), e) && q(S.originalRange.getEndPosition(), e))) return !1;
            if (!I(B.modified, t) || !I(B.original, e)) return !1;
          }
          return !0;
        }), new eo(x, U, m);
      }
      computeMoves(e, t, n, r, i, a, s, o) {
        return M9(e, t, n, r, i, a).map((l) => {
          let u = this.refineDiff(t, n, new zt(l.original.toOffsetRange(), l.modified.toOffsetRange()), a, s, o), c = Qf(u.mappings, new no(t), new no(n), !0);
          return new y9(l, c);
        });
      }
      refineDiff(e, t, n, r, i, a) {
        let s = Y9(n).toRangeMapping2(e, t), o = new ao(e, s.originalRange, i), l = new ao(t, s.modifiedRange, i), u = o.length + l.length < 500 ? this.dynamicProgrammingDiffing.compute(o, l, r) : this.myersDiffingAlgorithm.compute(o, l, r), c = u.diffs;
        return c = c0(o, l, c), c = f0(o, l, c, (d, p) => d.findWordContaining(p)), a.extendToSubwords && (c = f0(o, l, c, (d, p) => d.findSubWordContaining(p), !0)), c = j9(o, l, c), c = H9(o, l, c), { mappings: c.map((d) => new ar(o.translateRange(d.seq1Range), l.translateRange(d.seq2Range))), hitTimeout: u.hitTimeout };
      }
    };
    function Y9(e) {
      return new Ki(new Fe(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new Fe(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
    }
    var Ba = { getLegacy: () => new S9(), getDefault: () => new W9() };
    function Sr(e, t) {
      let n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    var O = class {
      constructor(e, t, n, r = 1) {
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = Sr(Math.max(Math.min(1, r), 0), 3);
      }
      static equals(e, t) {
        return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
      }
    }, ei = class is {
      constructor(t, n, r, i) {
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Sr(Math.max(Math.min(1, n), 0), 3), this.l = Sr(Math.max(Math.min(1, r), 0), 3), this.a = Sr(Math.max(Math.min(1, i), 0), 3);
      }
      static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
      }
      static fromRGBA(t) {
        let n = t.r / 255, r = t.g / 255, i = t.b / 255, a = t.a, s = Math.max(n, r, i), o = Math.min(n, r, i), l = 0, u = 0, c = (o + s) / 2, d = s - o;
        if (d > 0) {
          switch (u = Math.min(c <= 0.5 ? d / (2 * c) : d / (2 - 2 * c), 1), s) {
            case n:
              l = (r - i) / d + (r < i ? 6 : 0);
              break;
            case r:
              l = (i - n) / d + 2;
              break;
            case i:
              l = (n - r) / d + 4;
              break;
          }
          l *= 60, l = Math.round(l);
        }
        return new is(l, u, c, a);
      }
      static _hue2rgb(t, n, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
      }
      static toRGBA(t) {
        let n = t.h / 360, { s: r, l: i, a } = t, s, o, l;
        if (r === 0) s = o = l = i;
        else {
          let u = i < 0.5 ? i * (1 + r) : i + r - i * r, c = 2 * i - u;
          s = is._hue2rgb(c, u, n + 1 / 3), o = is._hue2rgb(c, u, n), l = is._hue2rgb(c, u, n - 1 / 3);
        }
        return new O(Math.round(s * 255), Math.round(o * 255), Math.round(l * 255), a);
      }
    }, so = class K2 {
      constructor(t, n, r, i) {
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Sr(Math.max(Math.min(1, n), 0), 3), this.v = Sr(Math.max(Math.min(1, r), 0), 3), this.a = Sr(Math.max(Math.min(1, i), 0), 3);
      }
      static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
      }
      static fromRGBA(t) {
        let n = t.r / 255, r = t.g / 255, i = t.b / 255, a = Math.max(n, r, i), s = Math.min(n, r, i), o = a - s, l = a === 0 ? 0 : o / a, u;
        return o === 0 ? u = 0 : a === n ? u = ((r - i) / o % 6 + 6) % 6 : a === r ? u = (i - n) / o + 2 : u = (n - r) / o + 4, new K2(Math.round(u * 60), l, a, t.a);
      }
      static toRGBA(t) {
        let { h: n, s: r, v: i, a } = t, s = i * r, o = s * (1 - Math.abs(n / 60 % 2 - 1)), l = i - s, [u, c, d] = [0, 0, 0];
        return n < 60 ? (u = s, c = o) : n < 120 ? (u = o, c = s) : n < 180 ? (c = s, d = o) : n < 240 ? (c = o, d = s) : n < 300 ? (u = o, d = s) : n <= 360 && (u = s, d = o), u = Math.round((u + l) * 255), c = Math.round((c + l) * 255), d = Math.round((d + l) * 255), new O(u, c, d, a);
      }
    }, oo = (Ne = class {
      static fromHex(t) {
        return Ne.Format.CSS.parseHex(t) || Ne.red;
      }
      static equals(t, n) {
        return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
      }
      get hsla() {
        return this._hsla ? this._hsla : ei.fromRGBA(this.rgba);
      }
      get hsva() {
        return this._hsva ? this._hsva : so.fromRGBA(this.rgba);
      }
      constructor(t) {
        if (t) if (t instanceof O) this.rgba = t;
        else if (t instanceof ei) this._hsla = t, this.rgba = ei.toRGBA(t);
        else if (t instanceof so) this._hsva = t, this.rgba = so.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
      }
      equals(t) {
        return !!t && O.equals(this.rgba, t.rgba) && ei.equals(this.hsla, t.hsla) && so.equals(this.hsva, t.hsva);
      }
      getRelativeLuminance() {
        let t = Ne._relativeLuminanceForComponent(this.rgba.r), n = Ne._relativeLuminanceForComponent(this.rgba.g), r = Ne._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
        return Sr(i, 4);
      }
      reduceRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r > 0 || i > 0 || a > 0); ) r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), a -= Math.max(0, Math.ceil(a * 0.1)), s = this.getContrastRatio(new Ne(new O(r, i, a)));
        return new Ne(new O(r, i, a));
      }
      increaseRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r < 255 || i < 255 || a < 255); ) r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), a = Math.min(255, a + Math.ceil((255 - a) * 0.1)), s = this.getContrastRatio(new Ne(new O(r, i, a)));
        return new Ne(new O(r, i, a));
      }
      static _relativeLuminanceForComponent(t) {
        let n = t / 255;
        return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
      }
      getContrastRatio(t) {
        let n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
        return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
      }
      isDarker() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
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
      ensureConstrast(t, n) {
        let r = this.getRelativeLuminance(), i = t.getRelativeLuminance();
        if (this.getContrastRatio(t) < n) {
          if (i < r) {
            let o = this.reduceRelativeLuminace(t, n), l = this.getContrastRatio(o);
            if (l < n) {
              let u = this.increaseRelativeLuminace(t, n), c = this.getContrastRatio(u);
              return l > c ? o : u;
            }
            return o;
          }
          let a = this.increaseRelativeLuminace(t, n), s = this.getContrastRatio(a);
          if (s < n) {
            let o = this.reduceRelativeLuminace(t, n), l = this.getContrastRatio(o);
            return s > l ? a : o;
          }
          return a;
        }
        return t;
      }
      lighten(t) {
        return new Ne(new ei(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
      }
      darken(t) {
        return new Ne(new ei(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
      }
      transparent(t) {
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new O(n, r, i, a * t));
      }
      isTransparent() {
        return this.rgba.a === 0;
      }
      isOpaque() {
        return this.rgba.a === 1;
      }
      opposite() {
        return new Ne(new O(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
      }
      blend(t) {
        let n = t.rgba, r = this.rgba.a, i = n.a, a = r + i * (1 - r);
        if (a < 1e-6) return Ne.transparent;
        let s = this.rgba.r * r / a + n.r * i * (1 - r) / a, o = this.rgba.g * r / a + n.g * i * (1 - r) / a, l = this.rgba.b * r / a + n.b * i * (1 - r) / a;
        return new Ne(new O(s, o, l, a));
      }
      mix(t, n = 0.5) {
        let r = Math.min(Math.max(n, 0), 1), i = this.rgba, a = t.rgba, s = i.r + (a.r - i.r) * r, o = i.g + (a.g - i.g) * r, l = i.b + (a.b - i.b) * r, u = i.a + (a.a - i.a) * r;
        return new Ne(new O(s, o, l, u));
      }
      makeOpaque(t) {
        if (this.isOpaque() || t.rgba.a !== 1) return this;
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new O(t.rgba.r - a * (t.rgba.r - n), t.rgba.g - a * (t.rgba.g - r), t.rgba.b - a * (t.rgba.b - i), 1));
      }
      flatten(...t) {
        let n = t.reduceRight((r, i) => Ne._flatten(i, r));
        return Ne._flatten(this, n);
      }
      static _flatten(t, n) {
        let r = 1 - t.rgba.a;
        return new Ne(new O(r * n.rgba.r + t.rgba.a * t.rgba.r, r * n.rgba.g + t.rgba.a * t.rgba.g, r * n.rgba.b + t.rgba.a * t.rgba.b));
      }
      toString() {
        return this._toString || (this._toString = Ne.Format.CSS.format(this)), this._toString;
      }
      toNumber32Bit() {
        return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
      }
      static getLighterColor(t, n, r) {
        if (t.isLighterThan(n)) return t;
        r = r || 0.5;
        let i = t.getRelativeLuminance(), a = n.getRelativeLuminance();
        return r = r * (a - i) / a, t.lighten(r);
      }
      static getDarkerColor(t, n, r) {
        if (t.isDarkerThan(n)) return t;
        r = r || 0.5;
        let i = t.getRelativeLuminance(), a = n.getRelativeLuminance();
        return r = r * (i - a) / i, t.darken(r);
      }
    }, Ne.white = new Ne(new O(255, 255, 255, 1)), Ne.black = new Ne(new O(0, 0, 0, 1)), Ne.red = new Ne(new O(255, 0, 0, 1)), Ne.blue = new Ne(new O(0, 0, 255, 1)), Ne.green = new Ne(new O(0, 255, 0, 1)), Ne.cyan = new Ne(new O(0, 255, 255, 1)), Ne.lightgrey = new Ne(new O(211, 211, 211, 1)), Ne.transparent = new Ne(new O(0, 0, 0, 0)), Ne);
    (function(e) {
      (function(t) {
        (function(n) {
          function r(_) {
            return _.rgba.a === 1 ? `rgb(${_.rgba.r}, ${_.rgba.g}, ${_.rgba.b})` : e.Format.CSS.formatRGBA(_);
          }
          n.formatRGB = r;
          function i(_) {
            return `rgba(${_.rgba.r}, ${_.rgba.g}, ${_.rgba.b}, ${+_.rgba.a.toFixed(2)})`;
          }
          n.formatRGBA = i;
          function a(_) {
            return _.hsla.a === 1 ? `hsl(${_.hsla.h}, ${Math.round(_.hsla.s * 100)}%, ${Math.round(_.hsla.l * 100)}%)` : e.Format.CSS.formatHSLA(_);
          }
          n.formatHSL = a;
          function s(_) {
            return `hsla(${_.hsla.h}, ${Math.round(_.hsla.s * 100)}%, ${Math.round(_.hsla.l * 100)}%, ${_.hsla.a.toFixed(2)})`;
          }
          n.formatHSLA = s;
          function o(_) {
            let L = _.toString(16);
            return L.length !== 2 ? "0" + L : L;
          }
          function l(_) {
            return `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}`;
          }
          n.formatHex = l;
          function u(_, L = !1) {
            return L && _.rgba.a === 1 ? e.Format.CSS.formatHex(_) : `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}${o(Math.round(_.rgba.a * 255))}`;
          }
          n.formatHexA = u;
          function c(_) {
            return _.isOpaque() ? e.Format.CSS.formatHex(_) : e.Format.CSS.formatRGBA(_);
          }
          n.format = c;
          function d(_) {
            var L, A, F, C, x, U, q;
            if (_ === "transparent") return e.transparent;
            if (_.startsWith("#")) return m(_);
            if (_.startsWith("rgba(")) {
              let I = _.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
              if (!I) throw new Error("Invalid color format " + _);
              let B = parseInt(((L = I.groups) == null ? void 0 : L.r) ?? "0"), S = parseInt(((A = I.groups) == null ? void 0 : A.g) ?? "0"), K = parseInt(((F = I.groups) == null ? void 0 : F.b) ?? "0"), V = parseFloat(((C = I.groups) == null ? void 0 : C.a) ?? "0");
              return new e(new O(B, S, K, V));
            }
            if (_.startsWith("rgb(")) {
              let I = _.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
              if (!I) throw new Error("Invalid color format " + _);
              let B = parseInt(((x = I.groups) == null ? void 0 : x.r) ?? "0"), S = parseInt(((U = I.groups) == null ? void 0 : U.g) ?? "0"), K = parseInt(((q = I.groups) == null ? void 0 : q.b) ?? "0");
              return new e(new O(B, S, K));
            }
            return p(_);
          }
          n.parse = d;
          function p(_) {
            switch (_) {
              case "aliceblue":
                return new e(new O(240, 248, 255, 1));
              case "antiquewhite":
                return new e(new O(250, 235, 215, 1));
              case "aqua":
                return new e(new O(0, 255, 255, 1));
              case "aquamarine":
                return new e(new O(127, 255, 212, 1));
              case "azure":
                return new e(new O(240, 255, 255, 1));
              case "beige":
                return new e(new O(245, 245, 220, 1));
              case "bisque":
                return new e(new O(255, 228, 196, 1));
              case "black":
                return new e(new O(0, 0, 0, 1));
              case "blanchedalmond":
                return new e(new O(255, 235, 205, 1));
              case "blue":
                return new e(new O(0, 0, 255, 1));
              case "blueviolet":
                return new e(new O(138, 43, 226, 1));
              case "brown":
                return new e(new O(165, 42, 42, 1));
              case "burlywood":
                return new e(new O(222, 184, 135, 1));
              case "cadetblue":
                return new e(new O(95, 158, 160, 1));
              case "chartreuse":
                return new e(new O(127, 255, 0, 1));
              case "chocolate":
                return new e(new O(210, 105, 30, 1));
              case "coral":
                return new e(new O(255, 127, 80, 1));
              case "cornflowerblue":
                return new e(new O(100, 149, 237, 1));
              case "cornsilk":
                return new e(new O(255, 248, 220, 1));
              case "crimson":
                return new e(new O(220, 20, 60, 1));
              case "cyan":
                return new e(new O(0, 255, 255, 1));
              case "darkblue":
                return new e(new O(0, 0, 139, 1));
              case "darkcyan":
                return new e(new O(0, 139, 139, 1));
              case "darkgoldenrod":
                return new e(new O(184, 134, 11, 1));
              case "darkgray":
                return new e(new O(169, 169, 169, 1));
              case "darkgreen":
                return new e(new O(0, 100, 0, 1));
              case "darkgrey":
                return new e(new O(169, 169, 169, 1));
              case "darkkhaki":
                return new e(new O(189, 183, 107, 1));
              case "darkmagenta":
                return new e(new O(139, 0, 139, 1));
              case "darkolivegreen":
                return new e(new O(85, 107, 47, 1));
              case "darkorange":
                return new e(new O(255, 140, 0, 1));
              case "darkorchid":
                return new e(new O(153, 50, 204, 1));
              case "darkred":
                return new e(new O(139, 0, 0, 1));
              case "darksalmon":
                return new e(new O(233, 150, 122, 1));
              case "darkseagreen":
                return new e(new O(143, 188, 143, 1));
              case "darkslateblue":
                return new e(new O(72, 61, 139, 1));
              case "darkslategray":
                return new e(new O(47, 79, 79, 1));
              case "darkslategrey":
                return new e(new O(47, 79, 79, 1));
              case "darkturquoise":
                return new e(new O(0, 206, 209, 1));
              case "darkviolet":
                return new e(new O(148, 0, 211, 1));
              case "deeppink":
                return new e(new O(255, 20, 147, 1));
              case "deepskyblue":
                return new e(new O(0, 191, 255, 1));
              case "dimgray":
                return new e(new O(105, 105, 105, 1));
              case "dimgrey":
                return new e(new O(105, 105, 105, 1));
              case "dodgerblue":
                return new e(new O(30, 144, 255, 1));
              case "firebrick":
                return new e(new O(178, 34, 34, 1));
              case "floralwhite":
                return new e(new O(255, 250, 240, 1));
              case "forestgreen":
                return new e(new O(34, 139, 34, 1));
              case "fuchsia":
                return new e(new O(255, 0, 255, 1));
              case "gainsboro":
                return new e(new O(220, 220, 220, 1));
              case "ghostwhite":
                return new e(new O(248, 248, 255, 1));
              case "gold":
                return new e(new O(255, 215, 0, 1));
              case "goldenrod":
                return new e(new O(218, 165, 32, 1));
              case "gray":
                return new e(new O(128, 128, 128, 1));
              case "green":
                return new e(new O(0, 128, 0, 1));
              case "greenyellow":
                return new e(new O(173, 255, 47, 1));
              case "grey":
                return new e(new O(128, 128, 128, 1));
              case "honeydew":
                return new e(new O(240, 255, 240, 1));
              case "hotpink":
                return new e(new O(255, 105, 180, 1));
              case "indianred":
                return new e(new O(205, 92, 92, 1));
              case "indigo":
                return new e(new O(75, 0, 130, 1));
              case "ivory":
                return new e(new O(255, 255, 240, 1));
              case "khaki":
                return new e(new O(240, 230, 140, 1));
              case "lavender":
                return new e(new O(230, 230, 250, 1));
              case "lavenderblush":
                return new e(new O(255, 240, 245, 1));
              case "lawngreen":
                return new e(new O(124, 252, 0, 1));
              case "lemonchiffon":
                return new e(new O(255, 250, 205, 1));
              case "lightblue":
                return new e(new O(173, 216, 230, 1));
              case "lightcoral":
                return new e(new O(240, 128, 128, 1));
              case "lightcyan":
                return new e(new O(224, 255, 255, 1));
              case "lightgoldenrodyellow":
                return new e(new O(250, 250, 210, 1));
              case "lightgray":
                return new e(new O(211, 211, 211, 1));
              case "lightgreen":
                return new e(new O(144, 238, 144, 1));
              case "lightgrey":
                return new e(new O(211, 211, 211, 1));
              case "lightpink":
                return new e(new O(255, 182, 193, 1));
              case "lightsalmon":
                return new e(new O(255, 160, 122, 1));
              case "lightseagreen":
                return new e(new O(32, 178, 170, 1));
              case "lightskyblue":
                return new e(new O(135, 206, 250, 1));
              case "lightslategray":
                return new e(new O(119, 136, 153, 1));
              case "lightslategrey":
                return new e(new O(119, 136, 153, 1));
              case "lightsteelblue":
                return new e(new O(176, 196, 222, 1));
              case "lightyellow":
                return new e(new O(255, 255, 224, 1));
              case "lime":
                return new e(new O(0, 255, 0, 1));
              case "limegreen":
                return new e(new O(50, 205, 50, 1));
              case "linen":
                return new e(new O(250, 240, 230, 1));
              case "magenta":
                return new e(new O(255, 0, 255, 1));
              case "maroon":
                return new e(new O(128, 0, 0, 1));
              case "mediumaquamarine":
                return new e(new O(102, 205, 170, 1));
              case "mediumblue":
                return new e(new O(0, 0, 205, 1));
              case "mediumorchid":
                return new e(new O(186, 85, 211, 1));
              case "mediumpurple":
                return new e(new O(147, 112, 219, 1));
              case "mediumseagreen":
                return new e(new O(60, 179, 113, 1));
              case "mediumslateblue":
                return new e(new O(123, 104, 238, 1));
              case "mediumspringgreen":
                return new e(new O(0, 250, 154, 1));
              case "mediumturquoise":
                return new e(new O(72, 209, 204, 1));
              case "mediumvioletred":
                return new e(new O(199, 21, 133, 1));
              case "midnightblue":
                return new e(new O(25, 25, 112, 1));
              case "mintcream":
                return new e(new O(245, 255, 250, 1));
              case "mistyrose":
                return new e(new O(255, 228, 225, 1));
              case "moccasin":
                return new e(new O(255, 228, 181, 1));
              case "navajowhite":
                return new e(new O(255, 222, 173, 1));
              case "navy":
                return new e(new O(0, 0, 128, 1));
              case "oldlace":
                return new e(new O(253, 245, 230, 1));
              case "olive":
                return new e(new O(128, 128, 0, 1));
              case "olivedrab":
                return new e(new O(107, 142, 35, 1));
              case "orange":
                return new e(new O(255, 165, 0, 1));
              case "orangered":
                return new e(new O(255, 69, 0, 1));
              case "orchid":
                return new e(new O(218, 112, 214, 1));
              case "palegoldenrod":
                return new e(new O(238, 232, 170, 1));
              case "palegreen":
                return new e(new O(152, 251, 152, 1));
              case "paleturquoise":
                return new e(new O(175, 238, 238, 1));
              case "palevioletred":
                return new e(new O(219, 112, 147, 1));
              case "papayawhip":
                return new e(new O(255, 239, 213, 1));
              case "peachpuff":
                return new e(new O(255, 218, 185, 1));
              case "peru":
                return new e(new O(205, 133, 63, 1));
              case "pink":
                return new e(new O(255, 192, 203, 1));
              case "plum":
                return new e(new O(221, 160, 221, 1));
              case "powderblue":
                return new e(new O(176, 224, 230, 1));
              case "purple":
                return new e(new O(128, 0, 128, 1));
              case "rebeccapurple":
                return new e(new O(102, 51, 153, 1));
              case "red":
                return new e(new O(255, 0, 0, 1));
              case "rosybrown":
                return new e(new O(188, 143, 143, 1));
              case "royalblue":
                return new e(new O(65, 105, 225, 1));
              case "saddlebrown":
                return new e(new O(139, 69, 19, 1));
              case "salmon":
                return new e(new O(250, 128, 114, 1));
              case "sandybrown":
                return new e(new O(244, 164, 96, 1));
              case "seagreen":
                return new e(new O(46, 139, 87, 1));
              case "seashell":
                return new e(new O(255, 245, 238, 1));
              case "sienna":
                return new e(new O(160, 82, 45, 1));
              case "silver":
                return new e(new O(192, 192, 192, 1));
              case "skyblue":
                return new e(new O(135, 206, 235, 1));
              case "slateblue":
                return new e(new O(106, 90, 205, 1));
              case "slategray":
                return new e(new O(112, 128, 144, 1));
              case "slategrey":
                return new e(new O(112, 128, 144, 1));
              case "snow":
                return new e(new O(255, 250, 250, 1));
              case "springgreen":
                return new e(new O(0, 255, 127, 1));
              case "steelblue":
                return new e(new O(70, 130, 180, 1));
              case "tan":
                return new e(new O(210, 180, 140, 1));
              case "teal":
                return new e(new O(0, 128, 128, 1));
              case "thistle":
                return new e(new O(216, 191, 216, 1));
              case "tomato":
                return new e(new O(255, 99, 71, 1));
              case "turquoise":
                return new e(new O(64, 224, 208, 1));
              case "violet":
                return new e(new O(238, 130, 238, 1));
              case "wheat":
                return new e(new O(245, 222, 179, 1));
              case "white":
                return new e(new O(255, 255, 255, 1));
              case "whitesmoke":
                return new e(new O(245, 245, 245, 1));
              case "yellow":
                return new e(new O(255, 255, 0, 1));
              case "yellowgreen":
                return new e(new O(154, 205, 50, 1));
              default:
                return null;
            }
          }
          function m(_) {
            let L = _.length;
            if (L === 0 || _.charCodeAt(0) !== R.Hash) return null;
            if (L === 7) {
              let A = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6));
              return new e(new O(A, F, C, 1));
            }
            if (L === 9) {
              let A = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6)), x = 16 * g(_.charCodeAt(7)) + g(_.charCodeAt(8));
              return new e(new O(A, F, C, x / 255));
            }
            if (L === 4) {
              let A = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3));
              return new e(new O(16 * A + A, 16 * F + F, 16 * C + C));
            }
            if (L === 5) {
              let A = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3)), x = g(_.charCodeAt(4));
              return new e(new O(16 * A + A, 16 * F + F, 16 * C + C, (16 * x + x) / 255));
            }
            return null;
          }
          n.parseHex = m;
          function g(_) {
            switch (_) {
              case R.Digit0:
                return 0;
              case R.Digit1:
                return 1;
              case R.Digit2:
                return 2;
              case R.Digit3:
                return 3;
              case R.Digit4:
                return 4;
              case R.Digit5:
                return 5;
              case R.Digit6:
                return 6;
              case R.Digit7:
                return 7;
              case R.Digit8:
                return 8;
              case R.Digit9:
                return 9;
              case R.a:
                return 10;
              case R.A:
                return 10;
              case R.b:
                return 11;
              case R.B:
                return 11;
              case R.c:
                return 12;
              case R.C:
                return 12;
              case R.d:
                return 13;
              case R.D:
                return 13;
              case R.e:
                return 14;
              case R.E:
                return 14;
              case R.f:
                return 15;
              case R.F:
                return 15;
            }
            return 0;
          }
        })(t.CSS || (t.CSS = {}));
      })(e.Format || (e.Format = {}));
    })(oo || (oo = {}));
    function g0(e) {
      let t = [];
      for (let n of e) {
        let r = Number(n);
        (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
      }
      return t;
    }
    function bu(e, t, n, r) {
      return { red: e / 255, blue: n / 255, green: t / 255, alpha: r };
    }
    function $a(e, t) {
      let n = t.index, r = t[0].length;
      if (n === void 0) return;
      let i = e.positionAt(n);
      return { startLineNumber: i.lineNumber, startColumn: i.column, endLineNumber: i.lineNumber, endColumn: i.column + r };
    }
    function z9(e, t) {
      if (!e) return;
      let n = oo.Format.CSS.parseHex(t);
      if (n) return { range: e, color: bu(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
    }
    function E0(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = g0(r);
      return { range: e, color: bu(i[0], i[1], i[2], n ? i[3] : 1) };
    }
    function _0(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = g0(r), a = new oo(new ei(i[0], i[1] / 100, i[2] / 100, n ? i[3] : 1));
      return { range: e, color: bu(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a) };
    }
    function Va(e, t) {
      return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
    }
    function X9(e) {
      let t = [], n = Va(e, new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"));
      if (n.length > 0) for (let r of n) {
        let i = r.filter((l) => l !== void 0), a = i[1], s = i[2];
        if (!s) continue;
        let o;
        if (a === "rgb") {
          let l = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
          o = E0($a(e, r), Va(s, l), !1);
        } else if (a === "rgba") {
          let l = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = E0($a(e, r), Va(s, l), !0);
        } else if (a === "hsl") {
          let l = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
          o = _0($a(e, r), Va(s, l), !1);
        } else if (a === "hsla") {
          let l = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = _0($a(e, r), Va(s, l), !0);
        } else a === "#" && (o = z9($a(e, r), a + s));
        o && t.push(o);
      }
      return t;
    }
    function J9(e) {
      return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : X9(e);
    }
    var Q9 = /^-+|-+$/g, D0 = 100, Z9 = 5;
    function eE(e, t) {
      var r;
      let n = [];
      if (t.findRegionSectionHeaders && ((r = t.foldingRules) != null && r.markers)) {
        let i = tE(e, t);
        n = n.concat(i);
      }
      if (t.findMarkSectionHeaders) {
        let i = nE(e, t);
        n = n.concat(i);
      }
      return n;
    }
    function tE(e, t) {
      let n = [], r = e.getLineCount();
      for (let i = 1; i <= r; i++) {
        let a = e.getLineContent(i), s = a.match(t.foldingRules.markers.start);
        if (s) {
          let o = { startLineNumber: i, startColumn: s[0].length + 1, endLineNumber: i, endColumn: a.length + 1 };
          if (o.endColumn > o.startColumn) {
            let l = { range: o, ...rE(a.substring(s[0].length)), shouldBeInComments: !1 };
            (l.text || l.hasSeparatorLine) && n.push(l);
          }
        }
      }
      return n;
    }
    function nE(e, t) {
      let n = [], r = e.getLineCount();
      if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "") return n;
      let i = h9(t.markSectionHeaderRegex), a = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
      if (e7(a)) return n;
      for (let s = 1; s <= r; s += D0 - Z9) {
        let o = Math.min(s + D0 - 1, r), l = [];
        for (let d = s; d <= o; d++) l.push(e.getLineContent(d));
        let u = l.join(`
`);
        a.lastIndex = 0;
        let c;
        for (; (c = a.exec(u)) !== null; ) {
          let d = u.substring(0, c.index), p = (d.match(/\n/g) || []).length, m = s + p, g = c[0].split(`
`), _ = g.length, L = m + _ - 1, A = d.lastIndexOf(`
`) + 1, F = c.index - A + 1, C = g[g.length - 1], x = _ === 1 ? F + c[0].length : C.length + 1, U = { startLineNumber: m, startColumn: F, endLineNumber: L, endColumn: x }, q = (c.groups ?? {}).label ?? "", I = ((c.groups ?? {}).separator ?? "") !== "", B = { range: U, text: q, hasSeparatorLine: I, shouldBeInComments: !0 };
          (B.text || B.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < B.range.startLineNumber) && n.push(B), a.lastIndex = c.index + c[0].length;
        }
      }
      return n;
    }
    function rE(e) {
      e = e.trim();
      let t = e.startsWith("-");
      return e = e.replace(Q9, ""), { text: e, hasSeparatorLine: t };
    }
    function Lr(e) {
      return e === R.Slash || e === R.Backslash;
    }
    function v0(e) {
      return e.replace(/[\\/]/g, Ve.sep);
    }
    function iE(e) {
      return e.indexOf("/") === -1 && (e = v0(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
    }
    function b0(e, t = Ve.sep) {
      if (!e) return "";
      let n = e.length, r = e.charCodeAt(0);
      if (Lr(r)) {
        if (Lr(e.charCodeAt(1)) && !Lr(e.charCodeAt(2))) {
          let a = 3, s = a;
          for (; a < n && !Lr(e.charCodeAt(a)); a++) ;
          if (s !== a && !Lr(e.charCodeAt(a + 1))) {
            for (a += 1; a < n; a++) if (Lr(e.charCodeAt(a))) return e.slice(0, a + 1).replace(/[\\/]/g, t);
          }
        }
        return t;
      } else if (aE(r) && e.charCodeAt(1) === R.Colon) return Lr(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
      let i = e.indexOf("://");
      if (i !== -1) {
        for (i += 3; i < n; i++) if (Lr(e.charCodeAt(i))) return e.slice(0, i + 1);
      }
      return "";
    }
    function y0(e, t, n, r = Xs) {
      if (e === t) return !0;
      if (!e || !t || t.length > e.length) return !1;
      if (n) {
        if (!s7(e, t)) return !1;
        if (t.length === e.length) return !0;
        let i = t.length;
        return t.charAt(t.length - 1) === r && i--, e.charAt(i) === r;
      }
      return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
    }
    function aE(e) {
      return e >= R.A && e <= R.Z || e >= R.a && e <= R.z;
    }
    var sE = {}, Lt;
    (function(e) {
      e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
    })(Lt || (Lt = {}));
    var oE = "tkn", lE = class {
      constructor() {
        this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
      }
      setPreferredWebSchema(e) {
        this._preferredWebSchema = e;
      }
      setDelegate(e) {
        this._delegate = e;
      }
      setServerRootPath(e, t) {
        this._serverRootPath = Ve.join(t ?? "/", cE(e));
      }
      getServerRootPath() {
        return this._serverRootPath;
      }
      get _remoteResourcesPath() {
        return Ve.join(this._serverRootPath, Lt.vscodeRemoteResource);
      }
      set(e, t, n) {
        this._hosts[e] = t, this._ports[e] = n;
      }
      setConnectionToken(e, t) {
        this._connectionTokens[e] = t;
      }
      getPreferredWebSchema() {
        return this._preferredWebSchema;
      }
      rewrite(e) {
        if (this._delegate) try {
          return this._delegate(e);
        } catch (s) {
          return La(s), e;
        }
        let t = e.authority, n = this._hosts[t];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        let r = this._ports[t], i = this._connectionTokens[t], a = `path=${encodeURIComponent(e.path)}`;
        return typeof i == "string" && (a += `&${oE}=${encodeURIComponent(i)}`), Yt.from({ scheme: G5 ? this._preferredWebSchema : Lt.vscodeRemoteResource, authority: `${n}:${r}`, path: this._remoteResourcesPath, query: a });
      }
    }, uE = new lE();
    function cE(e) {
      return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
    }
    var dE = "vscode-app", hE = (gr = class {
      constructor() {
        this.staticBrowserUris = new g5(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
      }
      registerAppResourcePathUrl(t, n) {
        this.appResourcePathUrls.set(t, n);
      }
      toUrl(t) {
        var r;
        let n = this.appResourcePathUrls.get(t);
        return typeof n == "function" && (n = n()), new URL(n ?? t, ((r = globalThis.location) == null ? void 0 : r.href) ?? sE.url).toString();
      }
      asBrowserUri(t) {
        let n = this.toUri(t);
        return this.uriToBrowserUri(n);
      }
      uriToBrowserUri(t) {
        return t.scheme === Lt.vscodeRemote ? uE.rewrite(t) : t.scheme === Lt.file && (q5 || W5 === `${Lt.vscodeFileResource}://${gr.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Lt.vscodeFileResource, authority: t.authority || gr.FALLBACK_AUTHORITY, query: null, fragment: null }) : this.staticBrowserUris.get(t) ?? t;
      }
      asFileUri(t) {
        let n = this.toUri(t);
        return this.uriToFileUri(n);
      }
      uriToFileUri(t) {
        return t.scheme === Lt.vscodeFileResource ? t.with({ scheme: Lt.file, authority: t.authority !== gr.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
      }
      toUri(t) {
        if (Yt.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
          let n = globalThis._VSCODE_FILE_ROOT;
          if (/^\w[\w\d+.-]*:\/\//.test(n)) return Yt.joinPath(Yt.parse(n, !0), t);
          let r = H7(n, t);
          return Yt.file(r);
        }
        return Yt.parse(this.toUrl(t));
      }
      registerStaticBrowserUri(t, n) {
        return this.staticBrowserUris.set(t, n), Ia(() => {
          this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
        });
      }
      getRegisteredBrowserUris() {
        return this.staticBrowserUris.keys();
      }
    }, gr.FALLBACK_AUTHORITY = dE, gr);
    new hE();
    var N0;
    (function(e) {
      let t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
      e.CoopAndCoep = Object.freeze(t.get("3"));
      let n = "vscode-coi";
      function r(a) {
        let s;
        typeof a == "string" ? s = new URL(a).searchParams : a instanceof URL ? s = a.searchParams : Yt.isUri(a) && (s = new URL(a.toString(!0)).searchParams);
        let o = s == null ? void 0 : s.get(n);
        if (o) return t.get(o);
      }
      e.getHeadersFromQuery = r;
      function i(a, s, o) {
        if (!globalThis.crossOriginIsolated) return;
        let l = s && o ? "3" : o ? "2" : "1";
        a instanceof URLSearchParams ? a.set(n, l) : a[n] = l;
      }
      e.addSearchParam = i;
    })(N0 || (N0 = {}));
    function sr(e) {
      return Js(e, !0);
    }
    var fE = class {
      constructor(e) {
        this._ignorePathCasing = e;
      }
      compare(e, t, n = !1) {
        return e === t ? 0 : r7(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
      }
      isEqual(e, t, n = !1) {
        return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
      }
      getComparisonKey(e, t = !1) {
        return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
      }
      ignorePathCasing(e) {
        return this._ignorePathCasing(e);
      }
      isEqualOrParent(e, t, n = !1) {
        if (e.scheme === t.scheme) {
          if (e.scheme === Lt.file) return y0(sr(e), sr(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
          if (C0(e.authority, t.authority)) return y0(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
        }
        return !1;
      }
      joinPath(e, ...t) {
        return Yt.joinPath(e, ...t);
      }
      basenameOrAuthority(e) {
        return pE(e) || e.authority;
      }
      basename(e) {
        return Ve.basename(e.path);
      }
      extname(e) {
        return Ve.extname(e.path);
      }
      dirname(e) {
        if (e.path.length === 0) return e;
        let t;
        return e.scheme === Lt.file ? t = Yt.file(z7(sr(e))).path : (t = Ve.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== R.Slash && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
      }
      normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === Lt.file ? t = Yt.file(G7(sr(e))).path : t = Ve.normalize(e.path), e.with({ path: t });
      }
      relativePath(e, t) {
        if (e.scheme !== t.scheme || !C0(e.authority, t.authority)) return;
        if (e.scheme === Lt.file) {
          let i = Y7(sr(e), sr(t));
          return ki ? v0(i) : i;
        }
        let n = e.path || "/", r = t.path || "/";
        if (this._ignorePathCasing(e)) {
          let i = 0;
          for (let a = Math.min(n.length, r.length); i < a && !(n.charCodeAt(i) !== r.charCodeAt(i) && n.charAt(i).toLowerCase() !== r.charAt(i).toLowerCase()); i++) ;
          n = r.substr(0, i) + n.substr(i);
        }
        return Ve.relative(n, r);
      }
      resolvePath(e, t) {
        if (e.scheme === Lt.file) {
          let n = Yt.file(W7(sr(e), t));
          return e.with({ authority: n.authority, path: n.path });
        }
        return t = iE(t), e.with({ path: Ve.resolve(e.path, t) });
      }
      isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
      }
      isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && a7(e, t);
      }
      hasTrailingPathSeparator(e, t = Xs) {
        if (e.scheme === Lt.file) {
          let n = sr(e);
          return n.length > b0(n).length && n[n.length - 1] === t;
        } else {
          let n = e.path;
          return n.length > 1 && n.charCodeAt(n.length - 1) === R.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
      }
      removeTrailingPathSeparator(e, t = Xs) {
        return T0(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
      }
      addTrailingPathSeparator(e, t = Xs) {
        let n = !1;
        if (e.scheme === Lt.file) {
          let r = sr(e);
          n = r !== void 0 && r.length === b0(r).length && r[r.length - 1] === t;
        } else {
          t = "/";
          let r = e.path;
          n = r.length === 1 && r.charCodeAt(r.length - 1) === R.Slash;
        }
        return !n && !T0(e, t) ? e.with({ path: e.path + "/" }) : e;
      }
    }, Me = new fE(() => !1);
    Me.isEqual.bind(Me), Me.isEqualOrParent.bind(Me), Me.getComparisonKey.bind(Me), Me.basenameOrAuthority.bind(Me);
    var pE = Me.basename.bind(Me);
    Me.extname.bind(Me), Me.dirname.bind(Me), Me.joinPath.bind(Me), Me.normalizePath.bind(Me), Me.relativePath.bind(Me), Me.resolvePath.bind(Me), Me.isAbsolutePath.bind(Me);
    var C0 = Me.isEqualAuthority.bind(Me), T0 = Me.hasTrailingPathSeparator.bind(Me);
    Me.removeTrailingPathSeparator.bind(Me), Me.addTrailingPathSeparator.bind(Me);
    var w0;
    (function(e) {
      e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
      function t(n) {
        let r = /* @__PURE__ */ new Map();
        n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((a) => {
          let [s, o] = a.split(":");
          s && o && r.set(s, o);
        });
        let i = n.path.substring(0, n.path.indexOf(";"));
        return i && r.set(e.META_DATA_MIME, i), r;
      }
      e.parseMetaData = t;
    })(w0 || (w0 = {}));
    var A0;
    (function(e) {
      e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
    })(A0 || (A0 = {}));
    var S0;
    (function(e) {
      async function t(r) {
        let i, a = await Promise.all(r.map((s) => s.then((o) => o, (o) => {
          i || (i = o);
        })));
        if (typeof i < "u") throw i;
        return a;
      }
      e.settled = t;
      function n(r) {
        return new Promise(async (i, a) => {
          try {
            await r(i, a);
          } catch (s) {
            a(s);
          }
        });
      }
      e.withAsyncBody = n;
    })(S0 || (S0 = {}));
    var Cn;
    (function(e) {
      e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
    })(Cn || (Cn = {})), Nt = class {
      static fromArray(t) {
        return new Nt((n) => {
          n.emitMany(t);
        });
      }
      static fromPromise(t) {
        return new Nt(async (n) => {
          n.emitMany(await t);
        });
      }
      static fromPromisesResolveOrder(t) {
        return new Nt(async (n) => {
          await Promise.all(t.map(async (r) => n.emitOne(await r)));
        });
      }
      static merge(t) {
        return new Nt(async (n) => {
          await Promise.all(t.map(async (r) => {
            for await (let i of r) n.emitOne(i);
          }));
        });
      }
      constructor(t, n) {
        this._state = Cn.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new un(), queueMicrotask(async () => {
          let r = { emitOne: (i) => this.emitOne(i), emitMany: (i) => this.emitMany(i), reject: (i) => this.reject(i) };
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
        return { next: async () => {
          do {
            if (this._state === Cn.DoneError) throw this._error;
            if (t < this._results.length) return { done: !1, value: this._results[t++] };
            if (this._state === Cn.DoneOK) return { done: !0, value: void 0 };
            await $s.toPromise(this._onStateChanged.event);
          } while (!0);
        }, return: async () => {
          var n;
          return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
        } };
      }
      static map(t, n) {
        return new Nt(async (r) => {
          for await (let i of t) r.emitOne(n(i));
        });
      }
      map(t) {
        return Nt.map(this, t);
      }
      static filter(t, n) {
        return new Nt(async (r) => {
          for await (let i of t) n(i) && r.emitOne(i);
        });
      }
      filter(t) {
        return Nt.filter(this, t);
      }
      static coalesce(t) {
        return Nt.filter(t, (n) => !!n);
      }
      coalesce() {
        return Nt.coalesce(this);
      }
      static async toPromise(t) {
        let n = [];
        for await (let r of t) n.push(r);
        return n;
      }
      toPromise() {
        return Nt.toPromise(this);
      }
      emitOne(t) {
        this._state === Cn.Initial && (this._results.push(t), this._onStateChanged.fire());
      }
      emitMany(t) {
        this._state === Cn.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
      }
      resolve() {
        this._state === Cn.Initial && (this._state = Cn.DoneOK, this._onStateChanged.fire());
      }
      reject(t) {
        this._state === Cn.Initial && (this._state = Cn.DoneError, this._error = t, this._onStateChanged.fire());
      }
    }, Nt.EMPTY = Nt.fromArray([]);
    var mE = class {
      constructor(e) {
        this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
      }
      getCount() {
        return this.values.length;
      }
      insertValues(e, t) {
        e = Mi(e);
        let n = this.values, r = this.prefixSum, i = t.length;
        return i === 0 ? !1 : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      setValue(e, t) {
        return e = Mi(e), t = Mi(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
      }
      removeValues(e, t) {
        e = Mi(e), t = Mi(t);
        let n = this.values, r = this.prefixSum;
        if (e >= n.length) return !1;
        let i = n.length - e;
        return t >= i && (t = i), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      getTotalSum() {
        return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
      }
      getPrefixSum(e) {
        return e < 0 ? 0 : (e = Mi(e), this._getPrefixSum(e));
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
        let t = 0, n = this.values.length - 1, r = 0, i = 0, a = 0;
        for (; t <= n; ) if (r = t + (n - t) / 2 | 0, i = this.prefixSum[r], a = i - this.values[r], e < a) n = r - 1;
        else if (e >= i) t = r + 1;
        else break;
        return new gE(r, e - a);
      }
    }, gE = class {
      constructor(e, t) {
        this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
      }
    }, EE = class {
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
        for (let n of t) this._acceptDeleteRange(n.range), this._acceptInsertText(new Te(n.range.startLineNumber, n.range.startColumn), n.text);
        this._versionId = e.versionId, this._cachedTextValue = null;
      }
      _ensureLineStarts() {
        if (!this._lineStarts) {
          let e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
          for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
          this._lineStarts = new mE(n);
        }
      }
      _setLineText(e, t) {
        this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length);
      }
      _acceptDeleteRange(e) {
        if (e.startLineNumber === e.endLineNumber) {
          if (e.startColumn === e.endColumn) return;
          this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
          return;
        }
        this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
      }
      _acceptInsertText(e, t) {
        if (t.length === 0) return;
        let n = Wd(t);
        if (n.length === 1) {
          this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
          return;
        }
        n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
        let r = new Uint32Array(n.length - 1);
        for (let i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
        this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
      }
    }, _E = "workerTextModelSync", DE = class {
      constructor() {
        this._models = /* @__PURE__ */ Object.create(null);
      }
      bindToServer(e) {
        e.setChannel(_E, this);
      }
      getModel(e) {
        return this._models[e];
      }
      getModels() {
        let e = [];
        return Object.keys(this._models).forEach((t) => e.push(this._models[t])), e;
      }
      $acceptNewModel(e) {
        this._models[e.url] = new vE(Yt.parse(e.url), e.lines, e.EOL, e.versionId);
      }
      $acceptModelChanged(e, t) {
        this._models[e] && this._models[e].onEvents(t);
      }
      $acceptRemovedModel(e) {
        this._models[e] && delete this._models[e];
      }
    }, vE = class extends EE {
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
          let r = this._lines[n], i = this.offsetAt(new Te(n + 1, 1)), a = r.matchAll(e);
          for (let s of a) (s.index || s.index === 0) && (s.index = s.index + i), t.push(s);
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
        let n = fu(e.column, Gf(t), this._lines[e.lineNumber - 1], 0);
        return n ? new fe(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
      }
      getWordUntilPosition(e, t) {
        let n = this.getWordAtPosition(e, t);
        return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column };
      }
      words(e) {
        let t = this._lines, n = this._wordenize.bind(this), r = 0, i = "", a = 0, s = [];
        return { *[Symbol.iterator]() {
          for (; ; ) if (a < s.length) {
            let o = i.substring(s[a].start, s[a].end);
            a += 1, yield o;
          } else if (r < t.length) i = t[r], s = n(i, e), a = 0, r += 1;
          else break;
        } };
      }
      getLineWords(e, t) {
        let n = this._lines[e - 1], r = this._wordenize(n, t), i = [];
        for (let a of r) i.push({ word: n.substring(a.start, a.end), startColumn: a.start + 1, endColumn: a.end + 1 });
        return i;
      }
      _wordenize(e, t) {
        let n = [], r;
        for (t.lastIndex = 0; (r = t.exec(e)) && r[0].length !== 0; ) n.push({ start: r.index, end: r.index + r[0].length });
        return n;
      }
      getValueInRange(e) {
        if (e = this._validateRange(e), e.startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
        let t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = [];
        i.push(this._lines[n].substring(e.startColumn - 1));
        for (let a = n + 1; a < r; a++) i.push(this._lines[a]);
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
        return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column } : e;
      }
      _validatePosition(e) {
        if (!Te.isIPosition(e)) throw new Error("bad position");
        let { lineNumber: t, column: n } = e, r = !1;
        if (t < 1) t = 1, n = 1, r = !0;
        else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
        else {
          let i = this._lines[t - 1].length + 1;
          n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
        }
        return r ? { lineNumber: t, column: n } : e;
      }
    }, L0 = class {
      constructor(e) {
        this.replacements = e;
        let t = -1;
        for (let n of e) {
          if (!(n.replaceRange.start >= t)) throw new ut(`Edits must be disjoint and sorted. Found ${n} after ${t}`);
          t = n.replaceRange.endExclusive;
        }
      }
      equals(e) {
        if (this.replacements.length !== e.replacements.length) return !1;
        for (let t = 0; t < this.replacements.length; t++) if (!this.replacements[t].equals(e.replacements[t])) return !1;
        return !0;
      }
      toString() {
        return `[${this.replacements.map((e) => e.toString()).join(", ")}]`;
      }
      normalize() {
        let e = [], t;
        for (let n of this.replacements) if (!(n.getNewLength() === 0 && n.replaceRange.length === 0)) {
          if (t && t.replaceRange.endExclusive === n.replaceRange.start) {
            let r = t.tryJoinTouching(n);
            if (r) {
              t = r;
              continue;
            }
          }
          t && e.push(t), t = n;
        }
        return t && e.push(t), this._createNew(e);
      }
      compose(e) {
        let t = this.normalize(), n = e.normalize();
        if (t.isEmpty()) return n;
        if (n.isEmpty()) return t;
        let r = [...t.replacements], i = [], a = 0;
        for (let s of n.replacements) {
          for (; ; ) {
            let c = r[0];
            if (!c || c.replaceRange.start + a + c.getNewLength() >= s.replaceRange.start) break;
            r.shift(), i.push(c), a += c.getNewLength() - c.replaceRange.length;
          }
          let o = a, l, u;
          for (; ; ) {
            let c = r[0];
            if (!c || c.replaceRange.start + a > s.replaceRange.endExclusive) break;
            l || (l = c), u = c, r.shift(), a += c.getNewLength() - c.replaceRange.length;
          }
          if (!l) i.push(s.delta(-a));
          else {
            let c = Math.min(l.replaceRange.start, s.replaceRange.start - o), d = s.replaceRange.start - (l.replaceRange.start + o);
            if (d > 0) {
              let _ = l.slice(Ee.emptyAt(c), new Ee(0, d));
              i.push(_);
            }
            if (!u) throw new ut("Invariant violation: lastIntersecting is undefined");
            let p = u.replaceRange.endExclusive + a - s.replaceRange.endExclusive;
            if (p > 0) {
              let _ = u.slice(Ee.ofStartAndLength(u.replaceRange.endExclusive, 0), new Ee(u.getNewLength() - p, u.getNewLength()));
              r.unshift(_), a -= _.getNewLength() - _.replaceRange.length;
            }
            let m = new Ee(c, s.replaceRange.endExclusive - a), g = s.slice(m, new Ee(0, s.getNewLength()));
            i.push(g);
          }
        }
        for (; ; ) {
          let s = r.shift();
          if (!s) break;
          i.push(s);
        }
        return this._createNew(i).normalize();
      }
      decomposeSplit(e) {
        let t = [], n = [], r = 0;
        for (let i of this.replacements) e(i) ? (t.push(i), r += i.getNewLength() - i.replaceRange.length) : n.push(i.slice(i.replaceRange.delta(r), new Ee(0, i.getNewLength())));
        return { e1: this._createNew(t), e2: this._createNew(n) };
      }
      getNewRanges() {
        let e = [], t = 0;
        for (let n of this.replacements) e.push(Ee.ofStartAndLength(n.replaceRange.start + t, n.getNewLength())), t += n.getLengthDelta();
        return e;
      }
      getJoinedReplaceRange() {
        if (this.replacements.length !== 0) return this.replacements[0].replaceRange.join(this.replacements.at(-1).replaceRange);
      }
      isEmpty() {
        return this.replacements.length === 0;
      }
      getLengthDelta() {
        return f5(this.replacements, (e) => e.getLengthDelta());
      }
      getNewDataLength(e) {
        return e + this.getLengthDelta();
      }
      applyToOffset(e) {
        let t = 0;
        for (let n of this.replacements) if (n.replaceRange.start <= e) {
          if (e < n.replaceRange.endExclusive) return n.replaceRange.start + t;
          t += n.getNewLength() - n.replaceRange.length;
        } else break;
        return e + t;
      }
      applyToOffsetRange(e) {
        return new Ee(this.applyToOffset(e.start), this.applyToOffset(e.endExclusive));
      }
      applyInverseToOffset(e) {
        let t = 0;
        for (let n of this.replacements) {
          let r = n.getNewLength();
          if (n.replaceRange.start <= e - t) {
            if (e - t < n.replaceRange.start + r) return n.replaceRange.start;
            t += r - n.replaceRange.length;
          } else break;
        }
        return e - t;
      }
      applyToOffsetOrUndefined(e) {
        let t = 0;
        for (let n of this.replacements) if (n.replaceRange.start <= e) {
          if (e < n.replaceRange.endExclusive) return;
          t += n.getNewLength() - n.replaceRange.length;
        } else break;
        return e + t;
      }
      applyToOffsetRangeOrUndefined(e) {
        let t = this.applyToOffsetOrUndefined(e.start);
        if (t === void 0) return;
        let n = this.applyToOffsetOrUndefined(e.endExclusive);
        if (n !== void 0) return new Ee(t, n);
      }
    }, bE = class {
      constructor(e) {
        this.replaceRange = e;
      }
      delta(e) {
        return this.slice(this.replaceRange.delta(e), new Ee(0, this.getNewLength()));
      }
      getLengthDelta() {
        return this.getNewLength() - this.replaceRange.length;
      }
      toString() {
        return `{ ${this.replaceRange.toString()} -> ${this.getNewLength()} }`;
      }
      get isEmpty() {
        return this.getNewLength() === 0 && this.replaceRange.length === 0;
      }
      getRangeAfterReplace() {
        return new Ee(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
      }
    };
    Wn = class extends L0 {
      static create(t) {
        return new Wn(t);
      }
      static single(t) {
        return new Wn([t]);
      }
      _createNew(t) {
        return new Wn(t);
      }
    }, Wn.empty = new Wn([]);
    var F0 = class extends L0 {
      get TReplacement() {
        throw new Error("TReplacement is not defined for BaseStringEdit");
      }
      static composeOrUndefined(e) {
        if (e.length === 0) return;
        let t = e[0];
        for (let n = 1; n < e.length; n++) t = t.compose(e[n]);
        return t;
      }
      apply(e) {
        let t = [], n = 0;
        for (let r of this.replacements) t.push(e.substring(n, r.replaceRange.start)), t.push(r.newText), n = r.replaceRange.endExclusive;
        return t.push(e.substring(n)), t.join("");
      }
      inverse(e) {
        let t = [], n = 0;
        for (let r of this.replacements) t.push(new dn(Ee.ofStartAndLength(r.replaceRange.start + n, r.newText.length), e.substring(r.replaceRange.start, r.replaceRange.endExclusive))), n += r.newText.length - r.replaceRange.length;
        return new Fr(t);
      }
      tryRebase(e, t) {
        let n = [], r = 0, i = 0, a = 0;
        for (; i < this.replacements.length || r < e.replacements.length; ) {
          let s = e.replacements[r], o = this.replacements[i];
          if (o) if (!s) n.push(new dn(o.replaceRange.delta(a), o.newText)), i++;
          else if (o.replaceRange.intersectsOrTouches(s.replaceRange)) {
            if (i++, t) return;
          } else o.replaceRange.start < s.replaceRange.start ? (n.push(new dn(o.replaceRange.delta(a), o.newText)), i++) : (r++, a += s.newText.length - s.replaceRange.length);
          else break;
        }
        return new Fr(n);
      }
      toJson() {
        return this.replacements.map((e) => ({ txt: e.newText, pos: e.replaceRange.start, len: e.replaceRange.length }));
      }
      isNeutralOn(e) {
        return this.replacements.every((t) => t.isNeutralOn(e));
      }
      removeCommonSuffixPrefix(e) {
        let t = [];
        for (let n of this.replacements) {
          let r = n.removeCommonSuffixPrefix(e);
          r.isEmpty || t.push(r);
        }
        return new Fr(t);
      }
      normalizeEOL(e) {
        return new Fr(this.replacements.map((t) => t.normalizeEOL(e)));
      }
      normalizeOnSource(e) {
        let t = this.apply(e), n = dn.replace(Ee.ofLength(e.length), t).removeCommonSuffixAndPrefix(e);
        return n.isEmpty ? Fr.empty : n.toEdit();
      }
      removeCommonSuffixAndPrefix(e) {
        return this._createNew(this.replacements.map((t) => t.removeCommonSuffixAndPrefix(e))).normalize();
      }
      applyOnText(e) {
        return new Pa(this.apply(e.value));
      }
      mapData(e) {
        return new yE(this.replacements.map((t) => new lo(t.replaceRange, t.newText, e(t))));
      }
    }, I0 = class extends bE {
      constructor(e, t) {
        super(e), this.newText = t;
      }
      getNewLength() {
        return this.newText.length;
      }
      toString() {
        return `${this.replaceRange} -> "${this.newText}"`;
      }
      replace(e) {
        return e.substring(0, this.replaceRange.start) + this.newText + e.substring(this.replaceRange.endExclusive);
      }
      isNeutralOn(e) {
        return this.newText === e.substring(this.replaceRange.start, this.replaceRange.endExclusive);
      }
      removeCommonSuffixPrefix(e) {
        let t = e.substring(this.replaceRange.start, this.replaceRange.endExclusive), n = Hs(t, this.newText), r = Math.min(t.length - n, this.newText.length - n, Wl(t, this.newText)), i = new Ee(this.replaceRange.start + n, this.replaceRange.endExclusive - r), a = this.newText.substring(n, this.newText.length - r);
        return new dn(i, a);
      }
      normalizeEOL(e) {
        let t = this.newText.replace(/\r\n|\n/g, e);
        return new dn(this.replaceRange, t);
      }
      removeCommonSuffixAndPrefix(e) {
        return this.removeCommonSuffix(e).removeCommonPrefix(e);
      }
      removeCommonPrefix(e) {
        let t = this.replaceRange.substring(e), n = Hs(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaStart(n), new Ee(n, this.newText.length));
      }
      removeCommonSuffix(e) {
        let t = this.replaceRange.substring(e), n = Wl(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaEnd(-n), new Ee(0, this.newText.length - n));
      }
      toEdit() {
        return new Fr([this]);
      }
    }, Fr = (Ct = class extends F0 {
      static create(t) {
        return new Ct(t);
      }
      static single(t) {
        return new Ct([t]);
      }
      static replace(t, n) {
        return new Ct([new dn(t, n)]);
      }
      static insert(t, n) {
        return new Ct([new dn(Ee.emptyAt(t), n)]);
      }
      static delete(t) {
        return new Ct([new dn(t, "")]);
      }
      static fromJson(t) {
        return new Ct(t.map(dn.fromJson));
      }
      static compose(t) {
        if (t.length === 0) return Ct.empty;
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
        return n;
      }
      static composeSequentialReplacements(t) {
        let n = Ct.empty, r = [];
        for (let i of t) {
          let a = r.at(-1);
          !a || i.replaceRange.isBefore(a.replaceRange) ? r.push(i) : (n = n.compose(Ct.create(r.reverse())), r = [i]);
        }
        return n = n.compose(Ct.create(r.reverse())), n;
      }
      constructor(t) {
        super(t);
      }
      _createNew(t) {
        return new Ct(t);
      }
    }, Ct.empty = new Ct([]), Ct), dn = class yi extends I0 {
      static insert(t, n) {
        return new yi(Ee.emptyAt(t), n);
      }
      static replace(t, n) {
        return new yi(t, n);
      }
      static delete(t) {
        return new yi(t, "");
      }
      static fromJson(t) {
        return new yi(Ee.ofStartAndLength(t.pos, t.len), t.txt);
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
      }
      tryJoinTouching(t) {
        return new yi(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText);
      }
      slice(t, n) {
        return new yi(t, n.substring(this.newText));
      }
    }, yE = (Jt = class extends F0 {
      static create(t) {
        return new Jt(t);
      }
      static single(t) {
        return new Jt([t]);
      }
      static replace(t, n, r) {
        return new Jt([new lo(t, n, r)]);
      }
      static insert(t, n, r) {
        return new Jt([new lo(Ee.emptyAt(t), n, r)]);
      }
      static delete(t, n) {
        return new Jt([new lo(t, "", n)]);
      }
      static compose(t) {
        if (t.length === 0) return Jt.empty;
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
        return n;
      }
      constructor(t) {
        super(t);
      }
      _createNew(t) {
        return new Jt(t);
      }
      toStringEdit() {
        return new Fr(this.replacements.map((t) => new dn(t.replaceRange, t.newText)));
      }
    }, Jt.empty = new Jt([]), Jt), lo = class ga extends I0 {
      static insert(t, n, r) {
        return new ga(Ee.emptyAt(t), n, r);
      }
      static replace(t, n, r) {
        return new ga(t, n, r);
      }
      static delete(t, n) {
        return new ga(t, "", n);
      }
      constructor(t, n, r) {
        super(t, n), this.data = r;
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
      }
      tryJoinTouching(t) {
        let n = this.data.join(t.data);
        if (n !== void 0) return new ga(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText, n);
      }
      slice(t, n) {
        return new ga(t, n ? n.substring(this.newText) : this.newText, this.data);
      }
    };
    C9({ StringEdit: Fr, StringReplacement: dn, TextReplacement: ir, TextEdit: pu, TextLength: Ua });
    var R0 = (In = class {
      constructor(t = null) {
        this._foreignModule = t, this._workerTextModelSyncServer = new DE();
      }
      dispose() {
      }
      async $ping() {
        return "pong";
      }
      _getModel(t) {
        return this._workerTextModelSyncServer.getModel(t);
      }
      getModels() {
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
        return i ? v9.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
      }
      async $findSectionHeaders(t, n) {
        let r = this._getModel(t);
        return r ? eE(r, n) : [];
      }
      async $computeDiff(t, n, r, i) {
        let a = this._getModel(t), s = this._getModel(n);
        return !a || !s ? null : In.computeDiff(a, s, r, i);
      }
      static computeDiff(t, n, r, i) {
        let a = i === "advanced" ? Ba.getDefault() : Ba.getLegacy(), s = t.getLinesContent(), o = n.getLinesContent(), l = a.computeDiff(s, o, r), u = l.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
        function c(d) {
          return d.map((p) => {
            var m;
            return [p.original.startLineNumber, p.original.endLineNumberExclusive, p.modified.startLineNumber, p.modified.endLineNumberExclusive, (m = p.innerChanges) == null ? void 0 : m.map((g) => [g.originalRange.startLineNumber, g.originalRange.startColumn, g.originalRange.endLineNumber, g.originalRange.endColumn, g.modifiedRange.startLineNumber, g.modifiedRange.startColumn, g.modifiedRange.endLineNumber, g.modifiedRange.endColumn])];
          });
        }
        return { identical: u, quitEarly: l.hitTimeout, changes: c(l.changes), moves: l.moves.map((d) => [d.lineRangeMapping.original.startLineNumber, d.lineRangeMapping.original.endLineNumberExclusive, d.lineRangeMapping.modified.startLineNumber, d.lineRangeMapping.modified.endLineNumberExclusive, c(d.changes)]) };
      }
      static _modelsAreIdentical(t, n) {
        let r = t.getLineCount(), i = n.getLineCount();
        if (r !== i) return !1;
        for (let a = 1; a <= r; a++) {
          let s = t.getLineContent(a), o = n.getLineContent(a);
          if (s !== o) return !1;
        }
        return !0;
      }
      async $computeDirtyDiff(t, n, r) {
        let i = this._getModel(t), a = this._getModel(n);
        if (!i || !a) return null;
        let s = i.getLinesContent(), o = a.getLinesContent();
        return new t0(s, o, { shouldComputeCharChanges: !1, shouldPostProcessCharChanges: !1, shouldIgnoreTrimWhitespace: r, shouldMakePrettyDiff: !0, maxComputationTime: 1e3 }).computeDiff().changes;
      }
      $computeStringDiff(t, n, r, i) {
        let a = i === "advanced" ? Ba.getDefault() : Ba.getLegacy(), s = new Pa(t), o = s.getLines(), l = new Pa(n), u = l.getLines(), c = a.computeDiff(o, u, { ignoreTrimWhitespace: !1, maxComputationTimeMs: r.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), d = qi.toTextEdit(c.changes, l);
        return s.getTransformer().getStringEdit(d).toJson();
      }
      async $computeMoreMinimalEdits(t, n, r) {
        let i = this._getModel(t);
        if (!i) return n;
        let a = [], s;
        n = n.slice(0).sort((l, u) => {
          if (l.range && u.range) return fe.compareRangesUsingStarts(l.range, u.range);
          let c = l.range ? 0 : 1, d = u.range ? 0 : 1;
          return c - d;
        });
        let o = 0;
        for (let l = 1; l < n.length; l++) fe.getEndPosition(n[o].range).equals(fe.getStartPosition(n[l].range)) ? (n[o].range = fe.fromPositions(fe.getStartPosition(n[o].range), fe.getEndPosition(n[l].range)), n[o].text += n[l].text) : (o++, n[o] = n[l]);
        n.length = o + 1;
        for (let { range: l, text: u, eol: c } of n) {
          if (typeof c == "number" && (s = c), fe.isEmpty(l) && !u) continue;
          let d = i.getValueInRange(l);
          if (u = u.replace(/\r\n|\n|\r/g, i.eol), d === u) continue;
          if (Math.max(u.length, d.length) > In._diffLimit) {
            a.push({ range: l, text: u });
            continue;
          }
          let p = y7(d, u, r), m = i.offsetAt(fe.lift(l).getStartPosition());
          for (let g of p) {
            let _ = i.positionAt(m + g.originalStart), L = i.positionAt(m + g.originalStart + g.originalLength), A = { text: u.substr(g.modifiedStart, g.modifiedLength), range: { startLineNumber: _.lineNumber, startColumn: _.column, endLineNumber: L.lineNumber, endColumn: L.column } };
            i.getValueInRange(A.range) !== A.text && a.push(A);
          }
        }
        return typeof s == "number" && a.push({ eol: s, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), a;
      }
      $computeHumanReadableDiff(t, n, r) {
        let i = this._getModel(t);
        if (!i) return n;
        let a = [], s;
        n = n.slice(0).sort((o, l) => {
          if (o.range && l.range) return fe.compareRangesUsingStarts(o.range, l.range);
          let u = o.range ? 0 : 1, c = l.range ? 0 : 1;
          return u - c;
        });
        for (let { range: o, text: l, eol: u } of n) {
          let c = function(A, F) {
            return new Te(A.lineNumber + F.lineNumber - 1, F.lineNumber === 1 ? A.column + F.column - 1 : F.column);
          }, d = function(A, F) {
            let C = [];
            for (let x = F.startLineNumber; x <= F.endLineNumber; x++) {
              let U = A[x - 1];
              x === F.startLineNumber && x === F.endLineNumber ? C.push(U.substring(F.startColumn - 1, F.endColumn - 1)) : x === F.startLineNumber ? C.push(U.substring(F.startColumn - 1)) : x === F.endLineNumber ? C.push(U.substring(0, F.endColumn - 1)) : C.push(U);
            }
            return C;
          };
          if (typeof u == "number" && (s = u), fe.isEmpty(o) && !l) continue;
          let p = i.getValueInRange(o);
          if (l = l.replace(/\r\n|\n|\r/g, i.eol), p === l) continue;
          if (Math.max(l.length, p.length) > In._diffLimit) {
            a.push({ range: o, text: l });
            continue;
          }
          let m = p.split(/\r\n|\n|\r/), g = l.split(/\r\n|\n|\r/), _ = Ba.getDefault().computeDiff(m, g, r), L = fe.lift(o).getStartPosition();
          for (let A of _.changes) if (A.innerChanges) for (let F of A.innerChanges) a.push({ range: fe.fromPositions(c(L, F.originalRange.getStartPosition()), c(L, F.originalRange.getEndPosition())), text: d(g, F.modifiedRange).join(i.eol) });
          else throw new ut("The experimental diff algorithm always produces inner changes");
        }
        return typeof s == "number" && a.push({ eol: s, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), a;
      }
      async $computeLinks(t) {
        let n = this._getModel(t);
        return n ? L7(n) : null;
      }
      async $computeDefaultDocumentColors(t) {
        let n = this._getModel(t);
        return n ? J9(n) : null;
      }
      async $textualSuggest(t, n, r, i) {
        let a = new Pd(), s = new RegExp(r, i), o = /* @__PURE__ */ new Set();
        e: for (let l of t) {
          let u = this._getModel(l);
          if (u) {
            for (let c of u.words(s)) if (!(c === n || !isNaN(Number(c))) && (o.add(c), o.size > In._suggestionsLimit)) break e;
          }
        }
        return { words: Array.from(o), duration: a.elapsed() };
      }
      async $computeWordRanges(t, n, r, i) {
        let a = this._getModel(t);
        if (!a) return /* @__PURE__ */ Object.create(null);
        let s = new RegExp(r, i), o = /* @__PURE__ */ Object.create(null);
        for (let l = n.startLineNumber; l < n.endLineNumber; l++) {
          let u = a.getLineWords(l, s);
          for (let c of u) {
            if (!isNaN(Number(c.word))) continue;
            let d = o[c.word];
            d || (d = [], o[c.word] = d), d.push({ startLineNumber: l, startColumn: c.startColumn, endLineNumber: l, endColumn: c.endColumn });
          }
        }
        return o;
      }
      async $navigateValueSet(t, n, r, i, a) {
        let s = this._getModel(t);
        if (!s) return null;
        let o = new RegExp(i, a);
        n.startColumn === n.endColumn && (n = { startLineNumber: n.startLineNumber, startColumn: n.startColumn, endLineNumber: n.endLineNumber, endColumn: n.endColumn + 1 });
        let l = s.getValueInRange(n), u = s.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, o);
        if (!u) return null;
        let c = s.getValueInRange(u);
        return F7.INSTANCE.navigateValueSet(n, l, u, c, r);
      }
      $fmr(t, n) {
        if (!this._foreignModule || typeof this._foreignModule[t] != "function") return Promise.reject(new Error("Missing requestHandler or method: " + t));
        try {
          return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n));
        } catch (r) {
          return Promise.reject(r);
        }
      }
    }, In._diffLimit = 1e5, In._suggestionsLimit = 1e4, In);
    typeof importScripts == "function" && (globalThis.monaco = d9()), v7(() => new R0(null));
    var NE = (Pr = class {
      static getChannel(t) {
        return t.getChannel(Pr.CHANNEL_NAME);
      }
      static setChannel(t, n) {
        t.setChannel(Pr.CHANNEL_NAME, n);
      }
    }, Pr.CHANNEL_NAME = "editorWorkerHost", Pr);
    function CE(e) {
      let t = eh(() => new R0(e)), n = NE.getChannel(t);
      return { host: new Proxy({}, { get(r, i, a) {
        if (typeof i != "string") throw new Error("Not supported");
        return (...s) => n.$fhr(i, s);
      } }), getMirrorModels: () => t.requestHandler.getModels() };
    }
    function TE(e) {
      let t, n = new Proxy({}, { get(i, a) {
        if (a === "$initialize") return async (o) => {
          t || (t = e(r, o));
        };
        let s = t == null ? void 0 : t[a];
        return typeof s == "function" ? s.bind(t) : s;
      } }), r = CE(n);
    }
    function Re(e, t) {
      throw new Error(t);
    }
    function or(e) {
      return typeof e == "object" && e !== null;
    }
    function Xt(e, t) {
      throw new Error(t ?? "Unexpected invariant triggered.");
    }
    var wE = /\r\n|[\n\r]/g;
    function yu(e, t) {
      let n = 0, r = 1;
      for (let i of e.body.matchAll(wE)) {
        if (typeof i.index == "number" || Xt(), i.index >= t) break;
        n = i.index + i[0].length, r += 1;
      }
      return { line: r, column: t + 1 - n };
    }
    function AE(e) {
      return O0(e.source, yu(e.source, e.start));
    }
    function O0(e, t) {
      let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, l = t.column + o, u = `${e.name}:${s}:${l}
`, c = r.split(/\r\n|[\n\r]/g), d = c[i];
      if (d.length > 120) {
        let p = Math.floor(l / 80), m = l % 80, g = [];
        for (let _ = 0; _ < d.length; _ += 80) g.push(d.slice(_, _ + 80));
        return u + x0([[`${s} |`, g[0]], ...g.slice(1, p + 1).map((_) => ["|", _]), ["|", "^".padStart(m)], ["|", g[p + 1]]]);
      }
      return u + x0([[`${s - 1} |`, c[i - 1]], [`${s} |`, d], ["|", "^".padStart(l)], [`${s + 1} |`, c[i + 1]]]);
    }
    function x0(e) {
      let t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
      return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
    }
    function SE(e) {
      let t = e[0];
      return t == null || "kind" in t || "length" in t ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] } : t;
    }
    var Y = class j2 extends Error {
      constructor(t, ...n) {
        var r, i, a;
        let { nodes: s, source: o, positions: l, path: u, originalError: c, extensions: d } = SE(n);
        super(t), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = c ?? void 0, this.nodes = k0(Array.isArray(s) ? s : s ? [s] : void 0);
        let p = k0((r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null));
        this.source = o ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (p == null ? void 0 : p.map((g) => g.start)), this.locations = l && o ? l.map((g) => yu(o, g)) : p == null ? void 0 : p.map((g) => yu(g.source, g.start));
        let m = or(c == null ? void 0 : c.extensions) ? c == null ? void 0 : c.extensions : void 0;
        this.extensions = (a = d ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), c != null && c.stack ? Object.defineProperty(this, "stack", { value: c.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, j2) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let t = this.message;
        if (this.nodes) for (let n of this.nodes) n.loc && (t += `

` + AE(n.loc));
        else if (this.source && this.locations) for (let n of this.locations) t += `

` + O0(this.source, n);
        return t;
      }
      toJSON() {
        let t = { message: this.message };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
      }
    };
    function k0(e) {
      return e === void 0 || e.length === 0 ? void 0 : e;
    }
    function bt(e, t, n) {
      return new Y(`Syntax Error: ${n}`, { source: e, positions: [t] });
    }
    var LE = class {
      constructor(e, t, n) {
        this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return { start: this.start, end: this.end };
      }
    }, M0 = class {
      constructor(e, t, n, r, i, a) {
        this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return { kind: this.kind, value: this.value, line: this.line, column: this.column };
      }
    }, U0 = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] }, FE = new Set(Object.keys(U0));
    function Nu(e) {
      let t = e == null ? void 0 : e.kind;
      return typeof t == "string" && FE.has(t);
    }
    var Bt;
    (function(e) {
      e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
    })(Bt || (Bt = {}));
    var se;
    (function(e) {
      e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
    })(se || (se = {}));
    var v;
    (function(e) {
      e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
    })(v || (v = {}));
    function Cu(e) {
      return e === 9 || e === 32;
    }
    function Ka(e) {
      return e >= 48 && e <= 57;
    }
    function P0(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90;
    }
    function Tu(e) {
      return P0(e) || e === 95;
    }
    function B0(e) {
      return P0(e) || Ka(e) || e === 95;
    }
    function IE(e) {
      var t;
      let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
      for (let s = 0; s < e.length; ++s) {
        var a;
        let o = e[s], l = RE(o);
        l !== o.length && (r = (a = r) !== null && a !== void 0 ? a : s, i = s, s !== 0 && l < n && (n = l));
      }
      return e.map((s, o) => o === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
    }
    function RE(e) {
      let t = 0;
      for (; t < e.length && Cu(e.charCodeAt(t)); ) ++t;
      return t;
    }
    function OE(e, t) {
      let n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((m) => m.length === 0 || Cu(m.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, l = e.endsWith("\\"), u = o || l, c = !i || e.length > 70 || u || a || s, d = "", p = i && Cu(e.charCodeAt(0));
      return (c && !p || a) && (d += `
`), d += n, (c || u) && (d += `
`), '"""' + d + '"""';
    }
    var H;
    (function(e) {
      e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
    })(H || (H = {}));
    var xE = class {
      constructor(e) {
        let t = new M0(H.SOF, 0, 0, 0, 0);
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
        if (e.kind !== H.EOF) do
          if (e.next) e = e.next;
          else {
            let t = ME(this, e.end);
            e.next = t, t.prev = e, e = t;
          }
        while (e.kind === H.COMMENT);
        return e;
      }
    };
    function kE(e) {
      return e === H.BANG || e === H.DOLLAR || e === H.AMP || e === H.PAREN_L || e === H.PAREN_R || e === H.SPREAD || e === H.COLON || e === H.EQUALS || e === H.AT || e === H.BRACKET_L || e === H.BRACKET_R || e === H.BRACE_L || e === H.PIPE || e === H.BRACE_R;
    }
    function Wi(e) {
      return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
    }
    function uo(e, t) {
      return $0(e.charCodeAt(t)) && V0(e.charCodeAt(t + 1));
    }
    function $0(e) {
      return e >= 55296 && e <= 56319;
    }
    function V0(e) {
      return e >= 56320 && e <= 57343;
    }
    function ti(e, t) {
      let n = e.source.body.codePointAt(t);
      if (n === void 0) return H.EOF;
      if (n >= 32 && n <= 126) {
        let r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`;
      }
      return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
    }
    function ct(e, t, n, r, i) {
      let a = e.line, s = 1 + n - e.lineStart;
      return new M0(t, n, r, a, s, i);
    }
    function ME(e, t) {
      let n = e.source.body, r = n.length, i = t;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        switch (a) {
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
            return UE(e, i);
          case 33:
            return ct(e, H.BANG, i, i + 1);
          case 36:
            return ct(e, H.DOLLAR, i, i + 1);
          case 38:
            return ct(e, H.AMP, i, i + 1);
          case 40:
            return ct(e, H.PAREN_L, i, i + 1);
          case 41:
            return ct(e, H.PAREN_R, i, i + 1);
          case 46:
            if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return ct(e, H.SPREAD, i, i + 3);
            break;
          case 58:
            return ct(e, H.COLON, i, i + 1);
          case 61:
            return ct(e, H.EQUALS, i, i + 1);
          case 64:
            return ct(e, H.AT, i, i + 1);
          case 91:
            return ct(e, H.BRACKET_L, i, i + 1);
          case 93:
            return ct(e, H.BRACKET_R, i, i + 1);
          case 123:
            return ct(e, H.BRACE_L, i, i + 1);
          case 124:
            return ct(e, H.PIPE, i, i + 1);
          case 125:
            return ct(e, H.BRACE_R, i, i + 1);
          case 34:
            return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? jE(e, i) : BE(e, i);
        }
        if (Ka(a) || a === 45) return PE(e, i, a);
        if (Tu(a)) return qE(e, i);
        throw bt(e.source, i, a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Wi(a) || uo(n, i) ? `Unexpected character: ${ti(e, i)}.` : `Invalid character: ${ti(e, i)}.`);
      }
      return ct(e, H.EOF, r, r);
    }
    function UE(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (a === 10 || a === 13) break;
        if (Wi(a)) ++i;
        else if (uo(n, i)) i += 2;
        else break;
      }
      return ct(e, H.COMMENT, t, i, n.slice(t + 1, i));
    }
    function PE(e, t, n) {
      let r = e.source.body, i = t, a = n, s = !1;
      if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
        if (a = r.charCodeAt(++i), Ka(a)) throw bt(e.source, i, `Invalid number, unexpected digit after 0: ${ti(e, i)}.`);
      } else i = wu(e, i, a), a = r.charCodeAt(i);
      if (a === 46 && (s = !0, a = r.charCodeAt(++i), i = wu(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = wu(e, i, a), a = r.charCodeAt(i)), a === 46 || Tu(a)) throw bt(e.source, i, `Invalid number, expected digit but got: ${ti(e, i)}.`);
      return ct(e, s ? H.FLOAT : H.INT, t, i, r.slice(t, i));
    }
    function wu(e, t, n) {
      if (!Ka(n)) throw bt(e.source, t, `Invalid number, expected digit but got: ${ti(e, t)}.`);
      let r = e.source.body, i = t + 1;
      for (; Ka(r.charCodeAt(i)); ) ++i;
      return i;
    }
    function BE(e, t) {
      let n = e.source.body, r = n.length, i = t + 1, a = i, s = "";
      for (; i < r; ) {
        let o = n.charCodeAt(i);
        if (o === 34) return s += n.slice(a, i), ct(e, H.STRING, t, i + 1, s);
        if (o === 92) {
          s += n.slice(a, i);
          let l = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? $E(e, i) : VE(e, i) : KE(e, i);
          s += l.value, i += l.size, a = i;
          continue;
        }
        if (o === 10 || o === 13) break;
        if (Wi(o)) ++i;
        else if (uo(n, i)) i += 2;
        else throw bt(e.source, i, `Invalid character within String: ${ti(e, i)}.`);
      }
      throw bt(e.source, i, "Unterminated string.");
    }
    function $E(e, t) {
      let n = e.source.body, r = 0, i = 3;
      for (; i < 12; ) {
        let a = n.charCodeAt(t + i++);
        if (a === 125) {
          if (i < 5 || !Wi(r)) break;
          return { value: String.fromCodePoint(r), size: i };
        }
        if (r = r << 4 | ja(a), r < 0) break;
      }
      throw bt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
    }
    function VE(e, t) {
      let n = e.source.body, r = K0(n, t + 2);
      if (Wi(r)) return { value: String.fromCodePoint(r), size: 6 };
      if ($0(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        let i = K0(n, t + 8);
        if (V0(i)) return { value: String.fromCodePoint(r, i), size: 12 };
      }
      throw bt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
    }
    function K0(e, t) {
      return ja(e.charCodeAt(t)) << 12 | ja(e.charCodeAt(t + 1)) << 8 | ja(e.charCodeAt(t + 2)) << 4 | ja(e.charCodeAt(t + 3));
    }
    function ja(e) {
      return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
    }
    function KE(e, t) {
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
          return { value: `
`, size: 2 };
        case 114:
          return { value: "\r", size: 2 };
        case 116:
          return { value: "	", size: 2 };
      }
      throw bt(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
    }
    function jE(e, t) {
      let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, s = a, o = "", l = [];
      for (; a < r; ) {
        let u = n.charCodeAt(a);
        if (u === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
          o += n.slice(s, a), l.push(o);
          let c = ct(e, H.BLOCK_STRING, t, a + 3, IE(l).join(`
`));
          return e.line += l.length - 1, e.lineStart = i, c;
        }
        if (u === 92 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 && n.charCodeAt(a + 3) === 34) {
          o += n.slice(s, a), s = a + 1, a += 4;
          continue;
        }
        if (u === 10 || u === 13) {
          o += n.slice(s, a), l.push(o), u === 13 && n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, o = "", s = a, i = a;
          continue;
        }
        if (Wi(u)) ++a;
        else if (uo(n, a)) a += 2;
        else throw bt(e.source, a, `Invalid character within String: ${ti(e, a)}.`);
      }
      throw bt(e.source, a, "Unterminated string.");
    }
    function qE(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (B0(a)) ++i;
        else break;
      }
      return ct(e, H.NAME, t, i, n.slice(t, i));
    }
    function Q(e) {
      return co(e, []);
    }
    function co(e, t) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
          return GE(e, t);
        default:
          return String(e);
      }
    }
    function GE(e, t) {
      if (e === null) return "null";
      if (t.includes(e)) return "[Circular]";
      let n = [...t, e];
      if (HE(e)) {
        let r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : co(r, n);
      } else if (Array.isArray(e)) return YE(e, n);
      return WE(e, n);
    }
    function HE(e) {
      return typeof e.toJSON == "function";
    }
    function WE(e, t) {
      let n = Object.entries(e);
      return n.length === 0 ? "{}" : t.length > 2 ? "[" + zE(e) + "]" : "{ " + n.map(([r, i]) => r + ": " + co(i, t)).join(", ") + " }";
    }
    function YE(e, t) {
      if (e.length === 0) return "[]";
      if (t.length > 2) return "[Array]";
      let n = Math.min(10, e.length), r = e.length - n, i = [];
      for (let a = 0; a < n; ++a) i.push(co(e[a], t));
      return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
    }
    function zE(e) {
      let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
      if (t === "Object" && typeof e.constructor == "function") {
        let n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n;
      }
      return t;
    }
    var XE = globalThis.process && !0, Tn = XE ? function(e, t) {
      return e instanceof t;
    } : function(e, t) {
      if (e instanceof t) return !0;
      if (typeof e == "object" && e !== null) {
        var n;
        let r = t.prototype[Symbol.toStringTag], i = Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name;
        if (r === i) {
          let a = Q(e);
          throw new Error(`Cannot use ${r} "${a}" from another module or realm.

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
    }, j0 = class {
      constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
        typeof e == "string" || Re(!1, `Body must be a string. Received: ${Q(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Re(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Re(!1, "column in locationOffset is 1-indexed and must be positive.");
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
    function JE(e) {
      return Tn(e, j0);
    }
    function ho(e, t) {
      let n = new q0(e, t), r = n.parseDocument();
      return Object.defineProperty(r, "tokenCount", { enumerable: !1, value: n.tokenCount }), r;
    }
    function QE(e, t) {
      let n = new q0(e, t);
      n.expectToken(H.SOF);
      let r = n.parseValueLiteral(!1);
      return n.expectToken(H.EOF), r;
    }
    var q0 = class {
      constructor(e, t = {}) {
        let n = JE(e) ? e : new j0(e);
        this._lexer = new xE(n), this._options = t, this._tokenCounter = 0;
      }
      get tokenCount() {
        return this._tokenCounter;
      }
      parseName() {
        let e = this.expectToken(H.NAME);
        return this.node(e, { kind: v.NAME, value: e.value });
      }
      parseDocument() {
        return this.node(this._lexer.token, { kind: v.DOCUMENT, definitions: this.many(H.SOF, this.parseDefinition, H.EOF) });
      }
      parseDefinition() {
        if (this.peek(H.BRACE_L)) return this.parseOperationDefinition();
        let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
        if (t.kind === H.NAME) {
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
          if (e) throw bt(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
        if (this.peek(H.BRACE_L)) return this.node(e, { kind: v.OPERATION_DEFINITION, operation: Bt.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
        let t = this.parseOperationType(), n;
        return this.peek(H.NAME) && (n = this.parseName()), this.node(e, { kind: v.OPERATION_DEFINITION, operation: t, name: n, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
      }
      parseOperationType() {
        let e = this.expectToken(H.NAME);
        switch (e.value) {
          case "query":
            return Bt.QUERY;
          case "mutation":
            return Bt.MUTATION;
          case "subscription":
            return Bt.SUBSCRIPTION;
        }
        throw this.unexpected(e);
      }
      parseVariableDefinitions() {
        return this.optionalMany(H.PAREN_L, this.parseVariableDefinition, H.PAREN_R);
      }
      parseVariableDefinition() {
        return this.node(this._lexer.token, { kind: v.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(H.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(H.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
      }
      parseVariable() {
        let e = this._lexer.token;
        return this.expectToken(H.DOLLAR), this.node(e, { kind: v.VARIABLE, name: this.parseName() });
      }
      parseSelectionSet() {
        return this.node(this._lexer.token, { kind: v.SELECTION_SET, selections: this.many(H.BRACE_L, this.parseSelection, H.BRACE_R) });
      }
      parseSelection() {
        return this.peek(H.SPREAD) ? this.parseFragment() : this.parseField();
      }
      parseField() {
        let e = this._lexer.token, t = this.parseName(), n, r;
        return this.expectOptionalToken(H.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, { kind: v.FIELD, alias: n, name: r, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(H.BRACE_L) ? this.parseSelectionSet() : void 0 });
      }
      parseArguments(e) {
        let t = e ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(H.PAREN_L, t, H.PAREN_R);
      }
      parseArgument(e = !1) {
        let t = this._lexer.token, n = this.parseName();
        return this.expectToken(H.COLON), this.node(t, { kind: v.ARGUMENT, name: n, value: this.parseValueLiteral(e) });
      }
      parseConstArgument() {
        return this.parseArgument(!0);
      }
      parseFragment() {
        let e = this._lexer.token;
        this.expectToken(H.SPREAD);
        let t = this.expectOptionalKeyword("on");
        return !t && this.peek(H.NAME) ? this.node(e, { kind: v.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1) }) : this.node(e, { kind: v.INLINE_FRAGMENT, typeCondition: t ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
      }
      parseFragmentDefinition() {
        let e = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, { kind: v.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() }) : this.node(e, { kind: v.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
      }
      parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName();
      }
      parseValueLiteral(e) {
        let t = this._lexer.token;
        switch (t.kind) {
          case H.BRACKET_L:
            return this.parseList(e);
          case H.BRACE_L:
            return this.parseObject(e);
          case H.INT:
            return this.advanceLexer(), this.node(t, { kind: v.INT, value: t.value });
          case H.FLOAT:
            return this.advanceLexer(), this.node(t, { kind: v.FLOAT, value: t.value });
          case H.STRING:
          case H.BLOCK_STRING:
            return this.parseStringLiteral();
          case H.NAME:
            switch (this.advanceLexer(), t.value) {
              case "true":
                return this.node(t, { kind: v.BOOLEAN, value: !0 });
              case "false":
                return this.node(t, { kind: v.BOOLEAN, value: !1 });
              case "null":
                return this.node(t, { kind: v.NULL });
              default:
                return this.node(t, { kind: v.ENUM, value: t.value });
            }
          case H.DOLLAR:
            if (e) if (this.expectToken(H.DOLLAR), this._lexer.token.kind === H.NAME) {
              let n = this._lexer.token.value;
              throw bt(this._lexer.source, t.start, `Unexpected variable "$${n}" in constant value.`);
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
        return this.advanceLexer(), this.node(e, { kind: v.STRING, value: e.value, block: e.kind === H.BLOCK_STRING });
      }
      parseList(e) {
        let t = () => this.parseValueLiteral(e);
        return this.node(this._lexer.token, { kind: v.LIST, values: this.any(H.BRACKET_L, t, H.BRACKET_R) });
      }
      parseObject(e) {
        let t = () => this.parseObjectField(e);
        return this.node(this._lexer.token, { kind: v.OBJECT, fields: this.any(H.BRACE_L, t, H.BRACE_R) });
      }
      parseObjectField(e) {
        let t = this._lexer.token, n = this.parseName();
        return this.expectToken(H.COLON), this.node(t, { kind: v.OBJECT_FIELD, name: n, value: this.parseValueLiteral(e) });
      }
      parseDirectives(e) {
        let t = [];
        for (; this.peek(H.AT); ) t.push(this.parseDirective(e));
        return t;
      }
      parseConstDirectives() {
        return this.parseDirectives(!0);
      }
      parseDirective(e) {
        let t = this._lexer.token;
        return this.expectToken(H.AT), this.node(t, { kind: v.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e) });
      }
      parseTypeReference() {
        let e = this._lexer.token, t;
        if (this.expectOptionalToken(H.BRACKET_L)) {
          let n = this.parseTypeReference();
          this.expectToken(H.BRACKET_R), t = this.node(e, { kind: v.LIST_TYPE, type: n });
        } else t = this.parseNamedType();
        return this.expectOptionalToken(H.BANG) ? this.node(e, { kind: v.NON_NULL_TYPE, type: t }) : t;
      }
      parseNamedType() {
        return this.node(this._lexer.token, { kind: v.NAMED_TYPE, name: this.parseName() });
      }
      peekDescription() {
        return this.peek(H.STRING) || this.peek(H.BLOCK_STRING);
      }
      parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
      }
      parseSchemaDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("schema");
        let n = this.parseConstDirectives(), r = this.many(H.BRACE_L, this.parseOperationTypeDefinition, H.BRACE_R);
        return this.node(e, { kind: v.SCHEMA_DEFINITION, description: t, directives: n, operationTypes: r });
      }
      parseOperationTypeDefinition() {
        let e = this._lexer.token, t = this.parseOperationType();
        this.expectToken(H.COLON);
        let n = this.parseNamedType();
        return this.node(e, { kind: v.OPERATION_TYPE_DEFINITION, operation: t, type: n });
      }
      parseScalarTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("scalar");
        let n = this.parseName(), r = this.parseConstDirectives();
        return this.node(e, { kind: v.SCALAR_TYPE_DEFINITION, description: t, name: n, directives: r });
      }
      parseObjectTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("type");
        let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
        return this.node(e, { kind: v.OBJECT_TYPE_DEFINITION, description: t, name: n, interfaces: r, directives: i, fields: a });
      }
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(H.AMP, this.parseNamedType) : [];
      }
      parseFieldsDefinition() {
        return this.optionalMany(H.BRACE_L, this.parseFieldDefinition, H.BRACE_R);
      }
      parseFieldDefinition() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
        this.expectToken(H.COLON);
        let i = this.parseTypeReference(), a = this.parseConstDirectives();
        return this.node(e, { kind: v.FIELD_DEFINITION, description: t, name: n, arguments: r, type: i, directives: a });
      }
      parseArgumentDefs() {
        return this.optionalMany(H.PAREN_L, this.parseInputValueDef, H.PAREN_R);
      }
      parseInputValueDef() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
        this.expectToken(H.COLON);
        let r = this.parseTypeReference(), i;
        this.expectOptionalToken(H.EQUALS) && (i = this.parseConstValueLiteral());
        let a = this.parseConstDirectives();
        return this.node(e, { kind: v.INPUT_VALUE_DEFINITION, description: t, name: n, type: r, defaultValue: i, directives: a });
      }
      parseInterfaceTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("interface");
        let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
        return this.node(e, { kind: v.INTERFACE_TYPE_DEFINITION, description: t, name: n, interfaces: r, directives: i, fields: a });
      }
      parseUnionTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("union");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
        return this.node(e, { kind: v.UNION_TYPE_DEFINITION, description: t, name: n, directives: r, types: i });
      }
      parseUnionMemberTypes() {
        return this.expectOptionalToken(H.EQUALS) ? this.delimitedMany(H.PIPE, this.parseNamedType) : [];
      }
      parseEnumTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("enum");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
        return this.node(e, { kind: v.ENUM_TYPE_DEFINITION, description: t, name: n, directives: r, values: i });
      }
      parseEnumValuesDefinition() {
        return this.optionalMany(H.BRACE_L, this.parseEnumValueDefinition, H.BRACE_R);
      }
      parseEnumValueDefinition() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
        return this.node(e, { kind: v.ENUM_VALUE_DEFINITION, description: t, name: n, directives: r });
      }
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw bt(this._lexer.source, this._lexer.token.start, `${fo(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
      }
      parseInputObjectTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("input");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
        return this.node(e, { kind: v.INPUT_OBJECT_TYPE_DEFINITION, description: t, name: n, directives: r, fields: i });
      }
      parseInputFieldsDefinition() {
        return this.optionalMany(H.BRACE_L, this.parseInputValueDef, H.BRACE_R);
      }
      parseTypeSystemExtension() {
        let e = this._lexer.lookahead();
        if (e.kind === H.NAME) switch (e.value) {
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
        let t = this.parseConstDirectives(), n = this.optionalMany(H.BRACE_L, this.parseOperationTypeDefinition, H.BRACE_R);
        if (t.length === 0 && n.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.SCHEMA_EXTENSION, directives: t, operationTypes: n });
      }
      parseScalarTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        let t = this.parseName(), n = this.parseConstDirectives();
        if (n.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.SCALAR_TYPE_EXTENSION, name: t, directives: n });
      }
      parseObjectTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
        if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.OBJECT_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i });
      }
      parseInterfaceTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
        if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.INTERFACE_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i });
      }
      parseUnionTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.UNION_TYPE_EXTENSION, name: t, directives: n, types: r });
      }
      parseEnumTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.ENUM_TYPE_EXTENSION, name: t, directives: n, values: r });
      }
      parseInputObjectTypeExtension() {
        let e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(e, { kind: v.INPUT_OBJECT_TYPE_EXTENSION, name: t, directives: n, fields: r });
      }
      parseDirectiveDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(H.AT);
        let n = this.parseName(), r = this.parseArgumentDefs(), i = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        let a = this.parseDirectiveLocations();
        return this.node(e, { kind: v.DIRECTIVE_DEFINITION, description: t, name: n, arguments: r, repeatable: i, locations: a });
      }
      parseDirectiveLocations() {
        return this.delimitedMany(H.PIPE, this.parseDirectiveLocation);
      }
      parseDirectiveLocation() {
        let e = this._lexer.token, t = this.parseName();
        if (Object.prototype.hasOwnProperty.call(se, t.value)) return t;
        throw this.unexpected(e);
      }
      node(e, t) {
        return this._options.noLocation !== !0 && (t.loc = new LE(e, this._lexer.lastToken, this._lexer.source)), t;
      }
      peek(e) {
        return this._lexer.token.kind === e;
      }
      expectToken(e) {
        let t = this._lexer.token;
        if (t.kind === e) return this.advanceLexer(), t;
        throw bt(this._lexer.source, t.start, `Expected ${G0(e)}, found ${fo(t)}.`);
      }
      expectOptionalToken(e) {
        return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
      }
      expectKeyword(e) {
        let t = this._lexer.token;
        if (t.kind === H.NAME && t.value === e) this.advanceLexer();
        else throw bt(this._lexer.source, t.start, `Expected "${e}", found ${fo(t)}.`);
      }
      expectOptionalKeyword(e) {
        let t = this._lexer.token;
        return t.kind === H.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
      }
      unexpected(e) {
        let t = e ?? this._lexer.token;
        return bt(this._lexer.source, t.start, `Unexpected ${fo(t)}.`);
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
        if (t.kind !== H.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw bt(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
      }
    };
    function fo(e) {
      let t = e.value;
      return G0(e.kind) + (t != null ? ` "${t}"` : "");
    }
    function G0(e) {
      return kE(e) ? `"${e}"` : e;
    }
    function Ir(e, t) {
      let [n, r] = t ? [e, t] : [void 0, e], i = " Did you mean ";
      n && (i += n + " ");
      let a = r.map((l) => `"${l}"`);
      switch (a.length) {
        case 0:
          return "";
        case 1:
          return i + a[0] + "?";
        case 2:
          return i + a[0] + " or " + a[1] + "?";
      }
      let s = a.slice(0, 5), o = s.pop();
      return i + s.join(", ") + ", or " + o + "?";
    }
    function H0(e) {
      return e;
    }
    function ni(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) n[t(r)] = r;
      return n;
    }
    function ri(e, t, n) {
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of e) r[t(i)] = n(i);
      return r;
    }
    function lr(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.keys(e)) n[r] = t(e[r], r);
      return n;
    }
    function Au(e, t) {
      let n = 0, r = 0;
      for (; n < e.length && r < t.length; ) {
        let i = e.charCodeAt(n), a = t.charCodeAt(r);
        if (po(i) && po(a)) {
          let s = 0;
          do
            ++n, s = s * 10 + i - Su, i = e.charCodeAt(n);
          while (po(i) && s > 0);
          let o = 0;
          do
            ++r, o = o * 10 + a - Su, a = t.charCodeAt(r);
          while (po(a) && o > 0);
          if (s < o) return -1;
          if (s > o) return 1;
        } else {
          if (i < a) return -1;
          if (i > a) return 1;
          ++n, ++r;
        }
      }
      return e.length - t.length;
    }
    var Su = 48, ZE = 57;
    function po(e) {
      return !isNaN(e) && Su <= e && e <= ZE;
    }
    function ii(e, t) {
      let n = /* @__PURE__ */ Object.create(null), r = new e8(e), i = Math.floor(e.length * 0.4) + 1;
      for (let a of t) {
        let s = r.measure(a, i);
        s !== void 0 && (n[a] = s);
      }
      return Object.keys(n).sort((a, s) => {
        let o = n[a] - n[s];
        return o !== 0 ? o : Au(a, s);
      });
    }
    var e8 = class {
      constructor(e) {
        this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = W0(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)];
      }
      measure(e, t) {
        if (this._input === e) return 0;
        let n = e.toLowerCase();
        if (this._inputLowerCase === n) return 1;
        let r = W0(n), i = this._inputArray;
        if (r.length < i.length) {
          let u = r;
          r = i, i = u;
        }
        let a = r.length, s = i.length;
        if (a - s > t) return;
        let o = this._rows;
        for (let u = 0; u <= s; u++) o[0][u] = u;
        for (let u = 1; u <= a; u++) {
          let c = o[(u - 1) % 3], d = o[u % 3], p = d[0] = u;
          for (let m = 1; m <= s; m++) {
            let g = r[u - 1] === i[m - 1] ? 0 : 1, _ = Math.min(c[m] + 1, d[m - 1] + 1, c[m - 1] + g);
            if (u > 1 && m > 1 && r[u - 1] === i[m - 2] && r[u - 2] === i[m - 1]) {
              let L = o[(u - 2) % 3][m - 2];
              _ = Math.min(_, L + 1);
            }
            _ < p && (p = _), d[m] = _;
          }
          if (p > t) return;
        }
        let l = o[a % 3][s];
        return l <= t ? l : void 0;
      }
    };
    function W0(e) {
      let t = e.length, n = new Array(t);
      for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
      return n;
    }
    function hn(e) {
      if (e == null) return /* @__PURE__ */ Object.create(null);
      if (Object.getPrototypeOf(e) === null) return e;
      let t = /* @__PURE__ */ Object.create(null);
      for (let [n, r] of Object.entries(e)) t[n] = r;
      return t;
    }
    function t8(e) {
      return `"${e.replace(n8, r8)}"`;
    }
    var n8 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function r8(e) {
      return i8[e.charCodeAt(0)];
    }
    var i8 = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"], Yi = Object.freeze({});
    function Rr(e, t, n = U0) {
      let r = /* @__PURE__ */ new Map();
      for (let A of Object.values(v)) r.set(A, mo(t, A));
      let i, a = Array.isArray(e), s = [e], o = -1, l = [], u = e, c, d, p = [], m = [];
      do {
        o++;
        let A = o === s.length, F = A && l.length !== 0;
        if (A) {
          if (c = m.length === 0 ? void 0 : p[p.length - 1], u = d, d = m.pop(), F) if (a) {
            u = u.slice();
            let x = 0;
            for (let [U, q] of l) {
              let I = U - x;
              q === null ? (u.splice(I, 1), x++) : u[I] = q;
            }
          } else {
            u = { ...u };
            for (let [x, U] of l) u[x] = U;
          }
          o = i.index, s = i.keys, l = i.edits, a = i.inArray, i = i.prev;
        } else if (d) {
          if (c = a ? o : s[o], u = d[c], u == null) continue;
          p.push(c);
        }
        let C;
        if (!Array.isArray(u)) {
          var g, _;
          Nu(u) || Re(!1, `Invalid AST Node: ${Q(u)}.`);
          let x = A ? (g = r.get(u.kind)) === null || g === void 0 ? void 0 : g.leave : (_ = r.get(u.kind)) === null || _ === void 0 ? void 0 : _.enter;
          if (C = x == null ? void 0 : x.call(t, u, c, d, p, m), C === Yi) break;
          if (C === !1) {
            if (!A) {
              p.pop();
              continue;
            }
          } else if (C !== void 0 && (l.push([c, C]), !A)) if (Nu(C)) u = C;
          else {
            p.pop();
            continue;
          }
        }
        if (C === void 0 && F && l.push([c, u]), A) p.pop();
        else {
          var L;
          i = { inArray: a, index: o, keys: s, edits: l, prev: i }, a = Array.isArray(u), s = a ? u : (L = n[u.kind]) !== null && L !== void 0 ? L : [], o = -1, l = [], d && m.push(d), d = u;
        }
      } while (i !== void 0);
      return l.length !== 0 ? l[l.length - 1][1] : e;
    }
    function Y0(e) {
      let t = new Array(e.length).fill(null), n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.values(v)) {
        let i = !1, a = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
        for (let l = 0; l < e.length; ++l) {
          let { enter: u, leave: c } = mo(e[l], r);
          i || (i = u != null || c != null), a[l] = u, s[l] = c;
        }
        if (!i) continue;
        let o = { enter(...l) {
          let u = l[0];
          for (let d = 0; d < e.length; d++) if (t[d] === null) {
            var c;
            let p = (c = a[d]) === null || c === void 0 ? void 0 : c.apply(e[d], l);
            if (p === !1) t[d] = u;
            else if (p === Yi) t[d] = Yi;
            else if (p !== void 0) return p;
          }
        }, leave(...l) {
          let u = l[0];
          for (let d = 0; d < e.length; d++) if (t[d] === null) {
            var c;
            let p = (c = s[d]) === null || c === void 0 ? void 0 : c.apply(e[d], l);
            if (p === Yi) t[d] = Yi;
            else if (p !== void 0 && p !== !1) return p;
          } else t[d] === u && (t[d] = null);
        } };
        n[r] = o;
      }
      return n;
    }
    function mo(e, t) {
      let n = e[t];
      return typeof n == "object" ? n : typeof n == "function" ? { enter: n, leave: void 0 } : { enter: e.enter, leave: e.leave };
    }
    function Et(e) {
      return Rr(e, s8);
    }
    var a8 = 80, s8 = { Name: { leave: (e) => e.value }, Variable: { leave: (e) => "$" + e.name }, Document: { leave: (e) => ce(e.definitions, `

`) }, OperationDefinition: { leave(e) {
      let t = Ae("(", ce(e.variableDefinitions, ", "), ")"), n = ce([e.operation, ce([e.name, t]), ce(e.directives, " ")], " ");
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    } }, VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + Ae(" = ", n) + Ae(" ", ce(r, " ")) }, SelectionSet: { leave: ({ selections: e }) => wn(e) }, Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      let a = Ae("", e, ": ") + t, s = a + Ae("(", ce(n, ", "), ")");
      return s.length > a8 && (s = a + Ae(`(
`, go(ce(n, `
`)), `
)`)), ce([s, ce(r, " "), i], " ");
    } }, Argument: { leave: ({ name: e, value: t }) => e + ": " + t }, FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + Ae(" ", ce(t, " ")) }, InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => ce(["...", Ae("on ", e), ce(t, " "), n], " ") }, FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => `fragment ${e}${Ae("(", ce(n, ", "), ")")} on ${t} ${Ae("", ce(r, " "), " ")}` + i }, IntValue: { leave: ({ value: e }) => e }, FloatValue: { leave: ({ value: e }) => e }, StringValue: { leave: ({ value: e, block: t }) => t ? OE(e) : t8(e) }, BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" }, NullValue: { leave: () => "null" }, EnumValue: { leave: ({ value: e }) => e }, ListValue: { leave: ({ values: e }) => "[" + ce(e, ", ") + "]" }, ObjectValue: { leave: ({ fields: e }) => "{" + ce(e, ", ") + "}" }, ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t }, Directive: { leave: ({ name: e, arguments: t }) => "@" + e + Ae("(", ce(t, ", "), ")") }, NamedType: { leave: ({ name: e }) => e }, ListType: { leave: ({ type: e }) => "[" + e + "]" }, NonNullType: { leave: ({ type: e }) => e + "!" }, SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => Ae("", e, `
`) + ce(["schema", ce(t, " "), wn(n)], " ") }, OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t }, ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + ce(["scalar", t, ce(n, " ")], " ") }, ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + ce(["type", t, Ae("implements ", ce(n, " & ")), ce(r, " "), wn(i)], " ") }, FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => Ae("", e, `
`) + t + (z0(n) ? Ae(`(
`, go(ce(n, `
`)), `
)`) : Ae("(", ce(n, ", "), ")")) + ": " + r + Ae(" ", ce(i, " ")) }, InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => Ae("", e, `
`) + ce([t + ": " + n, Ae("= ", r), ce(i, " ")], " ") }, InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + ce(["interface", t, Ae("implements ", ce(n, " & ")), ce(r, " "), wn(i)], " ") }, UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => Ae("", e, `
`) + ce(["union", t, ce(n, " "), Ae("= ", ce(r, " | "))], " ") }, EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => Ae("", e, `
`) + ce(["enum", t, ce(n, " "), wn(r)], " ") }, EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + ce([t, ce(n, " ")], " ") }, InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => Ae("", e, `
`) + ce(["input", t, ce(n, " "), wn(r)], " ") }, DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => Ae("", e, `
`) + "directive @" + t + (z0(n) ? Ae(`(
`, go(ce(n, `
`)), `
)`) : Ae("(", ce(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + ce(i, " | ") }, SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => ce(["extend schema", ce(e, " "), wn(t)], " ") }, ScalarTypeExtension: { leave: ({ name: e, directives: t }) => ce(["extend scalar", e, ce(t, " ")], " ") }, ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ce(["extend type", e, Ae("implements ", ce(t, " & ")), ce(n, " "), wn(r)], " ") }, InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ce(["extend interface", e, Ae("implements ", ce(t, " & ")), ce(n, " "), wn(r)], " ") }, UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => ce(["extend union", e, ce(t, " "), Ae("= ", ce(n, " | "))], " ") }, EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => ce(["extend enum", e, ce(t, " "), wn(n)], " ") }, InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => ce(["extend input", e, ce(t, " "), wn(n)], " ") } };
    function ce(e, t = "") {
      var n;
      return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
    }
    function wn(e) {
      return Ae(`{
`, go(ce(e, `
`)), `
}`);
    }
    function Ae(e, t, n = "") {
      return t != null && t !== "" ? e + t + n : "";
    }
    function go(e) {
      return Ae("  ", e.replace(/\n/g, `
  `));
    }
    function z0(e) {
      var t;
      return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
    }
    function Lu(e, t) {
      switch (e.kind) {
        case v.NULL:
          return null;
        case v.INT:
          return parseInt(e.value, 10);
        case v.FLOAT:
          return parseFloat(e.value);
        case v.STRING:
        case v.ENUM:
        case v.BOOLEAN:
          return e.value;
        case v.LIST:
          return e.values.map((n) => Lu(n, t));
        case v.OBJECT:
          return ri(e.fields, (n) => n.name.value, (n) => Lu(n.value, t));
        case v.VARIABLE:
          return t == null ? void 0 : t[e.name.value];
      }
    }
    function An(e) {
      if (e != null || Re(!1, "Must provide name."), typeof e == "string" || Re(!1, "Expected name to be a string."), e.length === 0) throw new Y("Expected name to be a non-empty string.");
      for (let t = 1; t < e.length; ++t) if (!B0(e.charCodeAt(t))) throw new Y(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
      if (!Tu(e.charCodeAt(0))) throw new Y(`Names must start with [_a-zA-Z] but "${e}" does not.`);
      return e;
    }
    function o8(e) {
      if (e === "true" || e === "false" || e === "null") throw new Y(`Enum values cannot be named: ${e}`);
      return An(e);
    }
    function Fu(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || $t(e) || Ze(e) || dt(e) || Ue(e);
    }
    function fn(e) {
      return Tn(e, ur);
    }
    function je(e) {
      return Tn(e, pn);
    }
    function l8(e) {
      if (!je(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL Object type.`);
      return e;
    }
    function Ge(e) {
      return Tn(e, Or);
    }
    function u8(e) {
      if (!Ge(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL Interface type.`);
      return e;
    }
    function en(e) {
      return Tn(e, Eo);
    }
    function $t(e) {
      return Tn(e, xr);
    }
    function Ze(e) {
      return Tn(e, Ga);
    }
    function dt(e) {
      return Tn(e, Ft);
    }
    function Ue(e) {
      return Tn(e, Ce);
    }
    function tn(e) {
      return fn(e) || $t(e) || Ze(e) || Iu(e) && tn(e.ofType);
    }
    function ai(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || $t(e) || Iu(e) && ai(e.ofType);
    }
    function zi(e) {
      return fn(e) || $t(e);
    }
    function nn(e) {
      return je(e) || Ge(e) || en(e);
    }
    function Kn(e) {
      return Ge(e) || en(e);
    }
    function c8(e) {
      if (!Kn(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL abstract type.`);
      return e;
    }
    var Ft = class {
      constructor(e) {
        Fu(e) || Re(!1, `Expected ${Q(e)} to be a GraphQL type.`), this.ofType = e;
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
    }, Ce = class {
      constructor(e) {
        Ru(e) || Re(!1, `Expected ${Q(e)} to be a GraphQL nullable type.`), this.ofType = e;
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
    function Iu(e) {
      return dt(e) || Ue(e);
    }
    function Ru(e) {
      return Fu(e) && !Ue(e);
    }
    function d8(e) {
      if (!Ru(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL nullable type.`);
      return e;
    }
    function Ou(e) {
      if (e) return Ue(e) ? e.ofType : e;
    }
    function h8(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || $t(e) || Ze(e);
    }
    function tt(e) {
      if (e) {
        let t = e;
        for (; Iu(t); ) t = t.ofType;
        return t;
      }
    }
    function X0(e) {
      return typeof e == "function" ? e() : e;
    }
    function J0(e) {
      return typeof e == "function" ? e() : e;
    }
    var ur = class {
      constructor(e) {
        var t, n, r, i;
        let a = (t = e.parseValue) !== null && t !== void 0 ? t : H0;
        this.name = An(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (n = e.serialize) !== null && n !== void 0 ? n : H0, this.parseValue = a, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (s, o) => a(Lu(s, o)), this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (i = e.extensionASTNodes) !== null && i !== void 0 ? i : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || Re(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${Q(e.specifiedByURL)}.`), e.serialize == null || typeof e.serialize == "function" || Re(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || Re(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
      }
      get [Symbol.toStringTag]() {
        return "GraphQLScalarType";
      }
      toConfig() {
        return { name: this.name, description: this.description, specifiedByURL: this.specifiedByURL, serialize: this.serialize, parseValue: this.parseValue, parseLiteral: this.parseLiteral, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, pn = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = () => Z0(e), this._interfaces = () => Q0(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || Re(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${Q(e.isTypeOf)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: tp(this.getFields()), isTypeOf: this.isTypeOf, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function Q0(e) {
      var t;
      let n = X0((t = e.interfaces) !== null && t !== void 0 ? t : []);
      return Array.isArray(n) || Re(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
    }
    function Z0(e) {
      let t = J0(e.fields);
      return Xi(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), lr(t, (n, r) => {
        var i;
        Xi(n) || Re(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || Re(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${Q(n.resolve)}.`);
        let a = (i = n.args) !== null && i !== void 0 ? i : {};
        return Xi(a) || Re(!1, `${e.name}.${r} args must be an object with argument names as keys.`), { name: An(r), description: n.description, type: n.type, args: ep(a), resolve: n.resolve, subscribe: n.subscribe, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode };
      });
    }
    function ep(e) {
      return Object.entries(e).map(([t, n]) => ({ name: An(t), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode }));
    }
    function Xi(e) {
      return or(e) && !Array.isArray(e);
    }
    function tp(e) {
      return lr(e, (t) => ({ description: t.description, type: t.type, args: np(t.args), resolve: t.resolve, subscribe: t.subscribe, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function np(e) {
      return ri(e, (t) => t.name, (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function qa(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    var Or = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = Z0.bind(void 0, e), this._interfaces = Q0.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${Q(e.resolveType)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: tp(this.getFields()), resolveType: this.resolveType, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, Eo = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._types = f8.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${Q(e.resolveType)}.`);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLUnionType";
      }
      getTypes() {
        return typeof this._types == "function" && (this._types = this._types()), this._types;
      }
      toConfig() {
        return { name: this.name, description: this.description, types: this.getTypes(), resolveType: this.resolveType, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function f8(e) {
      let t = X0(e.types);
      return Array.isArray(t) || Re(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
    }
    var xr = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._values = typeof e.values == "function" ? e.values : rp(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
      }
      get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
      }
      getValues() {
        return typeof this._values == "function" && (this._values = rp(this.name, this._values())), this._values;
      }
      getValue(e) {
        return this._nameLookup === null && (this._nameLookup = ni(this.getValues(), (t) => t.name)), this._nameLookup[e];
      }
      serialize(e) {
        this._valueLookup === null && (this._valueLookup = new Map(this.getValues().map((n) => [n.value, n])));
        let t = this._valueLookup.get(e);
        if (t === void 0) throw new Y(`Enum "${this.name}" cannot represent value: ${Q(e)}`);
        return t.name;
      }
      parseValue(e) {
        if (typeof e != "string") {
          let n = Q(e);
          throw new Y(`Enum "${this.name}" cannot represent non-string value: ${n}.` + _o(this, n));
        }
        let t = this.getValue(e);
        if (t == null) throw new Y(`Value "${e}" does not exist in "${this.name}" enum.` + _o(this, e));
        return t.value;
      }
      parseLiteral(e, t) {
        if (e.kind !== v.ENUM) {
          let r = Et(e);
          throw new Y(`Enum "${this.name}" cannot represent non-enum value: ${r}.` + _o(this, r), { nodes: e });
        }
        let n = this.getValue(e.value);
        if (n == null) {
          let r = Et(e);
          throw new Y(`Value "${r}" does not exist in "${this.name}" enum.` + _o(this, r), { nodes: e });
        }
        return n.value;
      }
      toConfig() {
        let e = ri(this.getValues(), (t) => t.name, (t) => ({ description: t.description, value: t.value, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, values: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function _o(e, t) {
      let n = e.getValues().map((i) => i.name), r = ii(t, n);
      return Ir("the enum value", r);
    }
    function rp(e, t) {
      return Xi(t) || Re(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r]) => (Xi(r) || Re(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${Q(r)}.`), { name: o8(n), description: r.description, value: r.value !== void 0 ? r.value : n, deprecationReason: r.deprecationReason, extensions: hn(r.extensions), astNode: r.astNode }));
    }
    var Ga = class {
      constructor(e) {
        var t, n;
        this.name = An(e.name), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this.isOneOf = (n = e.isOneOf) !== null && n !== void 0 ? n : !1, this._fields = p8.bind(void 0, e);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
      }
      getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
      }
      toConfig() {
        let e = lr(this.getFields(), (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, fields: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes, isOneOf: this.isOneOf };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function p8(e) {
      let t = J0(e.fields);
      return Xi(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), lr(t, (n, r) => (!("resolve" in n) || Re(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), { name: An(r), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode }));
    }
    function ip(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    function ap(e, t) {
      return e === t ? !0 : Ue(e) && Ue(t) || dt(e) && dt(t) ? ap(e.ofType, t.ofType) : !1;
    }
    function Ji(e, t, n) {
      return t === n ? !0 : Ue(n) ? Ue(t) ? Ji(e, t.ofType, n.ofType) : !1 : Ue(t) ? Ji(e, t.ofType, n) : dt(n) ? dt(t) ? Ji(e, t.ofType, n.ofType) : !1 : dt(t) ? !1 : Kn(n) && (Ge(t) || je(t)) && e.isSubType(n, t);
    }
    function xu(e, t, n) {
      return t === n ? !0 : Kn(t) ? Kn(n) ? e.getPossibleTypes(t).some((r) => e.isSubType(n, r)) : e.isSubType(t, n) : Kn(n) ? e.isSubType(n, t) : !1;
    }
    var ku = 2147483647, Mu = -2147483648, m8 = new ur({ name: "Int", description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.", serialize(e) {
      let t = Ha(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new Y(`Int cannot represent non-integer value: ${Q(t)}`);
      if (n > ku || n < Mu) throw new Y("Int cannot represent non 32-bit signed integer value: " + Q(t));
      return n;
    }, parseValue(e) {
      if (typeof e != "number" || !Number.isInteger(e)) throw new Y(`Int cannot represent non-integer value: ${Q(e)}`);
      if (e > ku || e < Mu) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.INT) throw new Y(`Int cannot represent non-integer value: ${Et(e)}`, { nodes: e });
      let t = parseInt(e.value, 10);
      if (t > ku || t < Mu) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e });
      return t;
    } }), sp = new ur({ name: "Float", description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).", serialize(e) {
      let t = Ha(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n)) throw new Y(`Float cannot represent non numeric value: ${Q(t)}`);
      return n;
    }, parseValue(e) {
      if (typeof e != "number" || !Number.isFinite(e)) throw new Y(`Float cannot represent non numeric value: ${Q(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.FLOAT && e.kind !== v.INT) throw new Y(`Float cannot represent non numeric value: ${Et(e)}`, e);
      return parseFloat(e.value);
    } }), nt = new ur({ name: "String", description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.", serialize(e) {
      let t = Ha(e);
      if (typeof t == "string") return t;
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "number" && Number.isFinite(t)) return t.toString();
      throw new Y(`String cannot represent value: ${Q(e)}`);
    }, parseValue(e) {
      if (typeof e != "string") throw new Y(`String cannot represent a non string value: ${Q(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.STRING) throw new Y(`String cannot represent a non string value: ${Et(e)}`, { nodes: e });
      return e.value;
    } }), yt = new ur({ name: "Boolean", description: "The `Boolean` scalar type represents `true` or `false`.", serialize(e) {
      let t = Ha(e);
      if (typeof t == "boolean") return t;
      if (Number.isFinite(t)) return t !== 0;
      throw new Y(`Boolean cannot represent a non boolean value: ${Q(t)}`);
    }, parseValue(e) {
      if (typeof e != "boolean") throw new Y(`Boolean cannot represent a non boolean value: ${Q(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.BOOLEAN) throw new Y(`Boolean cannot represent a non boolean value: ${Et(e)}`, { nodes: e });
      return e.value;
    } }), op = new ur({ name: "ID", description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.', serialize(e) {
      let t = Ha(e);
      if (typeof t == "string") return t;
      if (Number.isInteger(t)) return String(t);
      throw new Y(`ID cannot represent value: ${Q(e)}`);
    }, parseValue(e) {
      if (typeof e == "string") return e;
      if (typeof e == "number" && Number.isInteger(e)) return e.toString();
      throw new Y(`ID cannot represent value: ${Q(e)}`);
    }, parseLiteral(e) {
      if (e.kind !== v.STRING && e.kind !== v.INT) throw new Y("ID cannot represent a non-string and non-integer value: " + Et(e), { nodes: e });
      return e.value;
    } }), Do = Object.freeze([nt, m8, sp, yt, op]);
    function g8(e) {
      return Do.some(({ name: t }) => e.name === t);
    }
    function Ha(e) {
      if (or(e)) {
        if (typeof e.valueOf == "function") {
          let t = e.valueOf();
          if (!or(t)) return t;
        }
        if (typeof e.toJSON == "function") return e.toJSON();
      }
      return e;
    }
    function lp(e) {
      return Tn(e, cr);
    }
    var cr = class {
      constructor(e) {
        var t, n;
        this.name = An(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (t = e.isRepeatable) !== null && t !== void 0 ? t : !1, this.extensions = hn(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || Re(!1, `@${e.name} locations must be an Array.`);
        let r = (n = e.args) !== null && n !== void 0 ? n : {};
        or(r) && !Array.isArray(r) || Re(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = ep(r);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLDirective";
      }
      toConfig() {
        return { name: this.name, description: this.description, locations: this.locations, args: np(this.args), isRepeatable: this.isRepeatable, extensions: this.extensions, astNode: this.astNode };
      }
      toString() {
        return "@" + this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, up = new cr({ name: "include", description: "Directs the executor to include this field or fragment only when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(yt), description: "Included when true." } } }), cp = new cr({ name: "skip", description: "Directs the executor to skip this field or fragment when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(yt), description: "Skipped when true." } } }), E8 = "No longer supported", Uu = new cr({ name: "deprecated", description: "Marks an element of a GraphQL schema as no longer supported.", locations: [se.FIELD_DEFINITION, se.ARGUMENT_DEFINITION, se.INPUT_FIELD_DEFINITION, se.ENUM_VALUE], args: { reason: { type: nt, description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).", defaultValue: E8 } } }), dp = new cr({ name: "specifiedBy", description: "Exposes a URL that specifies the behavior of this scalar.", locations: [se.SCALAR], args: { url: { type: new Ce(nt), description: "The URL that specifies the behavior of this scalar." } } }), hp = new cr({ name: "oneOf", description: "Indicates exactly one field must be supplied and this field must not be `null`.", locations: [se.INPUT_OBJECT], args: {} }), Qi = Object.freeze([up, cp, Uu, dp, hp]);
    function _8(e) {
      return typeof e == "object" && typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
    }
    function Wa(e, t) {
      if (Ue(t)) {
        let n = Wa(e, t.ofType);
        return (n == null ? void 0 : n.kind) === v.NULL ? null : n;
      }
      if (e === null) return { kind: v.NULL };
      if (e === void 0) return null;
      if (dt(t)) {
        let n = t.ofType;
        if (_8(e)) {
          let r = [];
          for (let i of e) {
            let a = Wa(i, n);
            a != null && r.push(a);
          }
          return { kind: v.LIST, values: r };
        }
        return Wa(e, n);
      }
      if (Ze(t)) {
        if (!or(e)) return null;
        let n = [];
        for (let r of Object.values(t.getFields())) {
          let i = Wa(e[r.name], r.type);
          i && n.push({ kind: v.OBJECT_FIELD, name: { kind: v.NAME, value: r.name }, value: i });
        }
        return { kind: v.OBJECT, fields: n };
      }
      if (zi(t)) {
        let n = t.serialize(e);
        if (n == null) return null;
        if (typeof n == "boolean") return { kind: v.BOOLEAN, value: n };
        if (typeof n == "number" && Number.isFinite(n)) {
          let r = String(n);
          return fp.test(r) ? { kind: v.INT, value: r } : { kind: v.FLOAT, value: r };
        }
        if (typeof n == "string") return $t(t) ? { kind: v.ENUM, value: n } : t === op && fp.test(n) ? { kind: v.INT, value: n } : { kind: v.STRING, value: n };
        throw new TypeError(`Cannot convert value to AST: ${Q(n)}.`);
      }
      Xt(!1, "Unexpected input type: " + Q(t));
    }
    var fp = /^-?(?:0|[1-9][0-9]*)$/, Pu = new pn({ name: "__Schema", description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.", fields: () => ({ description: { type: nt, resolve: (e) => e.description }, types: { description: "A list of all types supported by this server.", type: new Ce(new Ft(new Ce(Sn))), resolve(e) {
      return Object.values(e.getTypeMap());
    } }, queryType: { description: "The type that query operations will be rooted at.", type: new Ce(Sn), resolve: (e) => e.getQueryType() }, mutationType: { description: "If this server supports mutation, the type that mutation operations will be rooted at.", type: Sn, resolve: (e) => e.getMutationType() }, subscriptionType: { description: "If this server support subscription, the type that subscription operations will be rooted at.", type: Sn, resolve: (e) => e.getSubscriptionType() }, directives: { description: "A list of all directives supported by this server.", type: new Ce(new Ft(new Ce(pp))), resolve: (e) => e.getDirectives() } }) }), pp = new pn({ name: "__Directive", description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`, fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isRepeatable: { type: new Ce(yt), resolve: (e) => e.isRepeatable }, locations: { type: new Ce(new Ft(new Ce(mp))), resolve: (e) => e.locations }, args: { type: new Ce(new Ft(new Ce(vo))), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } } }) }), mp = new xr({ name: "__DirectiveLocation", description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.", values: { QUERY: { value: se.QUERY, description: "Location adjacent to a query operation." }, MUTATION: { value: se.MUTATION, description: "Location adjacent to a mutation operation." }, SUBSCRIPTION: { value: se.SUBSCRIPTION, description: "Location adjacent to a subscription operation." }, FIELD: { value: se.FIELD, description: "Location adjacent to a field." }, FRAGMENT_DEFINITION: { value: se.FRAGMENT_DEFINITION, description: "Location adjacent to a fragment definition." }, FRAGMENT_SPREAD: { value: se.FRAGMENT_SPREAD, description: "Location adjacent to a fragment spread." }, INLINE_FRAGMENT: { value: se.INLINE_FRAGMENT, description: "Location adjacent to an inline fragment." }, VARIABLE_DEFINITION: { value: se.VARIABLE_DEFINITION, description: "Location adjacent to a variable definition." }, SCHEMA: { value: se.SCHEMA, description: "Location adjacent to a schema definition." }, SCALAR: { value: se.SCALAR, description: "Location adjacent to a scalar definition." }, OBJECT: { value: se.OBJECT, description: "Location adjacent to an object type definition." }, FIELD_DEFINITION: { value: se.FIELD_DEFINITION, description: "Location adjacent to a field definition." }, ARGUMENT_DEFINITION: { value: se.ARGUMENT_DEFINITION, description: "Location adjacent to an argument definition." }, INTERFACE: { value: se.INTERFACE, description: "Location adjacent to an interface definition." }, UNION: { value: se.UNION, description: "Location adjacent to a union definition." }, ENUM: { value: se.ENUM, description: "Location adjacent to an enum definition." }, ENUM_VALUE: { value: se.ENUM_VALUE, description: "Location adjacent to an enum value definition." }, INPUT_OBJECT: { value: se.INPUT_OBJECT, description: "Location adjacent to an input object type definition." }, INPUT_FIELD_DEFINITION: { value: se.INPUT_FIELD_DEFINITION, description: "Location adjacent to an input object field definition." } } }), Sn = new pn({ name: "__Type", description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.", fields: () => ({ kind: { type: new Ce(_p), resolve(e) {
      if (fn(e)) return qe.SCALAR;
      if (je(e)) return qe.OBJECT;
      if (Ge(e)) return qe.INTERFACE;
      if (en(e)) return qe.UNION;
      if ($t(e)) return qe.ENUM;
      if (Ze(e)) return qe.INPUT_OBJECT;
      if (dt(e)) return qe.LIST;
      if (Ue(e)) return qe.NON_NULL;
      Xt(!1, `Unexpected type: "${Q(e)}".`);
    } }, name: { type: nt, resolve: (e) => "name" in e ? e.name : void 0 }, description: { type: nt, resolve: (e) => "description" in e ? e.description : void 0 }, specifiedByURL: { type: nt, resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0 }, fields: { type: new Ft(new Ce(gp)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (je(e) || Ge(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, interfaces: { type: new Ft(new Ce(Sn)), resolve(e) {
      if (je(e) || Ge(e)) return e.getInterfaces();
    } }, possibleTypes: { type: new Ft(new Ce(Sn)), resolve(e, t, n, { schema: r }) {
      if (Kn(e)) return r.getPossibleTypes(e);
    } }, enumValues: { type: new Ft(new Ce(Ep)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if ($t(e)) {
        let n = e.getValues();
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, inputFields: { type: new Ft(new Ce(vo)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (Ze(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, ofType: { type: Sn, resolve: (e) => "ofType" in e ? e.ofType : void 0 }, isOneOf: { type: yt, resolve: (e) => {
      if (Ze(e)) return e.isOneOf;
    } } }) }), gp = new pn({ name: "__Field", description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, args: { type: new Ce(new Ft(new Ce(vo))), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } }, type: { type: new Ce(Sn), resolve: (e) => e.type }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), vo = new pn({ name: "__InputValue", description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, type: { type: new Ce(Sn), resolve: (e) => e.type }, defaultValue: { type: nt, description: "A GraphQL-formatted string representing the default value for this input value.", resolve(e) {
      let { type: t, defaultValue: n } = e, r = Wa(n, t);
      return r ? Et(r) : null;
    } }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), Ep = new pn({ name: "__EnumValue", description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), qe;
    (function(e) {
      e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
    })(qe || (qe = {}));
    var _p = new xr({ name: "__TypeKind", description: "An enum describing what kind of type a given `__Type` is.", values: { SCALAR: { value: qe.SCALAR, description: "Indicates this type is a scalar." }, OBJECT: { value: qe.OBJECT, description: "Indicates this type is an object. `fields` and `interfaces` are valid fields." }, INTERFACE: { value: qe.INTERFACE, description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields." }, UNION: { value: qe.UNION, description: "Indicates this type is a union. `possibleTypes` is a valid field." }, ENUM: { value: qe.ENUM, description: "Indicates this type is an enum. `enumValues` is a valid field." }, INPUT_OBJECT: { value: qe.INPUT_OBJECT, description: "Indicates this type is an input object. `inputFields` is a valid field." }, LIST: { value: qe.LIST, description: "Indicates this type is a list. `ofType` is a valid field." }, NON_NULL: { value: qe.NON_NULL, description: "Indicates this type is a non-null. `ofType` is a valid field." } } }), Ya = { name: "__schema", type: new Ce(Pu), description: "Access the current type schema of this server.", args: [], resolve: (e, t, n, { schema: r }) => r, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, za = { name: "__type", type: Sn, description: "Request the type information of a single type.", args: [{ name: "name", description: void 0, type: new Ce(nt), defaultValue: void 0, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }], resolve: (e, { name: t }, n, { schema: r }) => r.getType(t), deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, Xa = { name: "__typename", type: new Ce(nt), description: "The name of the current Object type at runtime.", args: [], resolve: (e, t, n, { parentType: r }) => r.name, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, bo = Object.freeze([Pu, pp, mp, Sn, gp, vo, Ep, _p]);
    function Dp(e) {
      return bo.some(({ name: t }) => e.name === t);
    }
    function D8(e) {
      return Tn(e, Bu);
    }
    function v8(e) {
      if (!D8(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL schema.`);
      return e;
    }
    var Bu = class {
      constructor(e) {
        var t, n;
        this.__validationErrors = e.assumeValid === !0 ? [] : void 0, or(e) || Re(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || Re(!1, `"types" must be Array if provided but got: ${Q(e.types)}.`), !e.directives || Array.isArray(e.directives) || Re(!1, `"directives" must be Array if provided but got: ${Q(e.directives)}.`), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (n = e.directives) !== null && n !== void 0 ? n : Qi;
        let r = new Set(e.types);
        if (e.types != null) for (let i of e.types) r.delete(i), Ln(i, r);
        this._queryType != null && Ln(this._queryType, r), this._mutationType != null && Ln(this._mutationType, r), this._subscriptionType != null && Ln(this._subscriptionType, r);
        for (let i of this._directives) if (lp(i)) for (let a of i.args) Ln(a.type, r);
        Ln(Pu, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
        for (let i of r) {
          if (i == null) continue;
          let a = i.name;
          if (a || Re(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[a] !== void 0) throw new Error(`Schema must contain uniquely named types but contains multiple types named "${a}".`);
          if (this._typeMap[a] = i, Ge(i)) {
            for (let s of i.getInterfaces()) if (Ge(s)) {
              let o = this._implementationsMap[s.name];
              o === void 0 && (o = this._implementationsMap[s.name] = { objects: [], interfaces: [] }), o.interfaces.push(i);
            }
          } else if (je(i)) {
            for (let s of i.getInterfaces()) if (Ge(s)) {
              let o = this._implementationsMap[s.name];
              o === void 0 && (o = this._implementationsMap[s.name] = { objects: [], interfaces: [] }), o.objects.push(i);
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
          case Bt.QUERY:
            return this.getQueryType();
          case Bt.MUTATION:
            return this.getMutationType();
          case Bt.SUBSCRIPTION:
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
        return en(e) ? e.getTypes() : this.getImplementations(e).objects;
      }
      getImplementations(e) {
        return this._implementationsMap[e.name] ?? { objects: [], interfaces: [] };
      }
      isSubType(e, t) {
        let n = this._subTypeMap[e.name];
        if (n === void 0) {
          if (n = /* @__PURE__ */ Object.create(null), en(e)) for (let r of e.getTypes()) n[r.name] = !0;
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
        return { description: this.description, query: this.getQueryType(), mutation: this.getMutationType(), subscription: this.getSubscriptionType(), types: Object.values(this.getTypeMap()), directives: this.getDirectives(), extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes, assumeValid: this.__validationErrors !== void 0 };
      }
    };
    function Ln(e, t) {
      let n = tt(e);
      if (!t.has(n)) {
        if (t.add(n), en(n)) for (let r of n.getTypes()) Ln(r, t);
        else if (je(n) || Ge(n)) {
          for (let r of n.getInterfaces()) Ln(r, t);
          for (let r of Object.values(n.getFields())) {
            Ln(r.type, t);
            for (let i of r.args) Ln(i.type, t);
          }
        } else if (Ze(n)) for (let r of Object.values(n.getFields())) Ln(r.type, t);
      }
      return t;
    }
    function b8(e) {
      if (v8(e), e.__validationErrors) return e.__validationErrors;
      let t = new N8(e);
      C8(t), T8(t), w8(t);
      let n = t.getErrors();
      return e.__validationErrors = n, n;
    }
    function y8(e) {
      let t = b8(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    var N8 = class {
      constructor(e) {
        this._errors = [], this.schema = e;
      }
      reportError(e, t) {
        let n = Array.isArray(t) ? t.filter(Boolean) : t;
        this._errors.push(new Y(e, { nodes: n }));
      }
      getErrors() {
        return this._errors;
      }
    };
    function C8(e) {
      let t = e.schema, n = t.getQueryType();
      if (!n) e.reportError("Query root type must be provided.", t.astNode);
      else if (!je(n)) {
        var r;
        e.reportError(`Query root type must be Object type, it cannot be ${Q(n)}.`, (r = $u(t, Bt.QUERY)) !== null && r !== void 0 ? r : n.astNode);
      }
      let i = t.getMutationType();
      if (i && !je(i)) {
        var a;
        e.reportError(`Mutation root type must be Object type if provided, it cannot be ${Q(i)}.`, (a = $u(t, Bt.MUTATION)) !== null && a !== void 0 ? a : i.astNode);
      }
      let s = t.getSubscriptionType();
      if (s && !je(s)) {
        var o;
        e.reportError(`Subscription root type must be Object type if provided, it cannot be ${Q(s)}.`, (o = $u(t, Bt.SUBSCRIPTION)) !== null && o !== void 0 ? o : s.astNode);
      }
    }
    function $u(e, t) {
      var n;
      return (n = [e.astNode, ...e.extensionASTNodes].flatMap((r) => {
        var i;
        return (i = r == null ? void 0 : r.operationTypes) !== null && i !== void 0 ? i : [];
      }).find((r) => r.operation === t)) === null || n === void 0 ? void 0 : n.type;
    }
    function T8(e) {
      for (let n of e.schema.getDirectives()) {
        if (!lp(n)) {
          e.reportError(`Expected directive but got: ${Q(n)}.`, n == null ? void 0 : n.astNode);
          continue;
        }
        si(e, n), n.locations.length === 0 && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
        for (let r of n.args) if (si(e, r), tn(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${Q(r.type)}.`, r.astNode), qa(r) && r.deprecationReason != null) {
          var t;
          e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [Vu(r.astNode), (t = r.astNode) === null || t === void 0 ? void 0 : t.type]);
        }
      }
    }
    function si(e, t) {
      t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
    }
    function w8(e) {
      let t = k8(e), n = e.schema.getTypeMap();
      for (let r of Object.values(n)) {
        if (!h8(r)) {
          e.reportError(`Expected GraphQL named type but got: ${Q(r)}.`, r.astNode);
          continue;
        }
        Dp(r) || si(e, r), je(r) || Ge(r) ? (A8(e, r), S8(e, r)) : en(r) ? I8(e, r) : $t(r) ? R8(e, r) : Ze(r) && (O8(e, r), t(r));
      }
    }
    function A8(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let s of n) {
        if (si(e, s), !ai(s.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${Q(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        for (let o of s.args) {
          let l = o.name;
          if (si(e, o), !tn(o.type)) {
            var i;
            e.reportError(`The type of ${t.name}.${s.name}(${l}:) must be Input Type but got: ${Q(o.type)}.`, (i = o.astNode) === null || i === void 0 ? void 0 : i.type);
          }
          if (qa(o) && o.deprecationReason != null) {
            var a;
            e.reportError(`Required argument ${t.name}.${s.name}(${l}:) cannot be deprecated.`, [Vu(o.astNode), (a = o.astNode) === null || a === void 0 ? void 0 : a.type]);
          }
        }
      }
    }
    function S8(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.getInterfaces()) {
        if (!Ge(r)) {
          e.reportError(`Type ${Q(t)} must only implement Interface types, it cannot implement ${Q(r)}.`, Ja(t, r));
          continue;
        }
        if (t === r) {
          e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, Ja(t, r));
          continue;
        }
        if (n[r.name]) {
          e.reportError(`Type ${t.name} can only implement ${r.name} once.`, Ja(t, r));
          continue;
        }
        n[r.name] = !0, F8(e, t, r), L8(e, t, r);
      }
    }
    function L8(e, t, n) {
      let r = t.getFields();
      for (let l of Object.values(n.getFields())) {
        let u = l.name, c = r[u];
        if (!c) {
          e.reportError(`Interface field ${n.name}.${u} expected but ${t.name} does not provide it.`, [l.astNode, t.astNode, ...t.extensionASTNodes]);
          continue;
        }
        if (!Ji(e.schema, c.type, l.type)) {
          var i, a;
          e.reportError(`Interface field ${n.name}.${u} expects type ${Q(l.type)} but ${t.name}.${u} is type ${Q(c.type)}.`, [(i = l.astNode) === null || i === void 0 ? void 0 : i.type, (a = c.astNode) === null || a === void 0 ? void 0 : a.type]);
        }
        for (let d of l.args) {
          let p = d.name, m = c.args.find((g) => g.name === p);
          if (!m) {
            e.reportError(`Interface field argument ${n.name}.${u}(${p}:) expected but ${t.name}.${u} does not provide it.`, [d.astNode, c.astNode]);
            continue;
          }
          if (!ap(d.type, m.type)) {
            var s, o;
            e.reportError(`Interface field argument ${n.name}.${u}(${p}:) expects type ${Q(d.type)} but ${t.name}.${u}(${p}:) is type ${Q(m.type)}.`, [(s = d.astNode) === null || s === void 0 ? void 0 : s.type, (o = m.astNode) === null || o === void 0 ? void 0 : o.type]);
          }
        }
        for (let d of c.args) {
          let p = d.name;
          !l.args.find((m) => m.name === p) && qa(d) && e.reportError(`Object field ${t.name}.${u} includes required argument ${p} that is missing from the Interface field ${n.name}.${u}.`, [d.astNode, l.astNode]);
        }
      }
    }
    function F8(e, t, n) {
      let r = t.getInterfaces();
      for (let i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...Ja(n, i), ...Ja(t, n)]);
    }
    function I8(e, t) {
      let n = t.getTypes();
      n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of n) {
        if (r[i.name]) {
          e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, vp(t, i.name));
          continue;
        }
        r[i.name] = !0, je(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${Q(i)}.`, vp(t, String(i)));
      }
    }
    function R8(e, t) {
      let n = t.getValues();
      n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
      for (let r of n) si(e, r);
    }
    function O8(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let a of n) {
        if (si(e, a), !tn(a.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${a.name} must be Input Type but got: ${Q(a.type)}.`, (r = a.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        if (ip(a) && a.deprecationReason != null) {
          var i;
          e.reportError(`Required input field ${t.name}.${a.name} cannot be deprecated.`, [Vu(a.astNode), (i = a.astNode) === null || i === void 0 ? void 0 : i.type]);
        }
        t.isOneOf && x8(t, a, e);
      }
    }
    function x8(e, t, n) {
      if (Ue(t.type)) {
        var r;
        n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, (r = t.astNode) === null || r === void 0 ? void 0 : r.type);
      }
      t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
    }
    function k8(e) {
      let t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
      return i;
      function i(a) {
        if (t[a.name]) return;
        t[a.name] = !0, r[a.name] = n.length;
        let s = Object.values(a.getFields());
        for (let o of s) if (Ue(o.type) && Ze(o.type.ofType)) {
          let l = o.type.ofType, u = r[l.name];
          if (n.push(o), u === void 0) i(l);
          else {
            let c = n.slice(u), d = c.map((p) => p.name).join(".");
            e.reportError(`Cannot reference Input Object "${l.name}" within itself through a series of non-null fields: "${d}".`, c.map((p) => p.astNode));
          }
          n.pop();
        }
        r[a.name] = void 0;
      }
    }
    function Ja(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.interfaces) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t.name);
    }
    function vp(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.types) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t);
    }
    function Vu(e) {
      var t;
      return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n) => n.name.value === Uu.name);
    }
    function rn(e, t) {
      switch (t.kind) {
        case v.LIST_TYPE: {
          let n = rn(e, t.type);
          return n && new Ft(n);
        }
        case v.NON_NULL_TYPE: {
          let n = rn(e, t.type);
          return n && new Ce(n);
        }
        case v.NAMED_TYPE:
          return e.getType(t.name.value);
      }
    }
    var bp = class {
      constructor(e, t, n) {
        this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? M8, t && (tn(t) && this._inputTypeStack.push(t), nn(t) && this._parentTypeStack.push(t), ai(t) && this._typeStack.push(t));
      }
      get [Symbol.toStringTag]() {
        return "TypeInfo";
      }
      getType() {
        if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1];
      }
      getParentType() {
        if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1];
      }
      getInputType() {
        if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1];
      }
      getParentInputType() {
        if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2];
      }
      getFieldDef() {
        if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1];
      }
      getDefaultValue() {
        if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1];
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
          case v.SELECTION_SET: {
            let r = tt(this.getType());
            this._parentTypeStack.push(nn(r) ? r : void 0);
            break;
          }
          case v.FIELD: {
            let r = this.getParentType(), i, a;
            r && (i = this._getFieldDef(t, r, e), i && (a = i.type)), this._fieldDefStack.push(i), this._typeStack.push(ai(a) ? a : void 0);
            break;
          }
          case v.DIRECTIVE:
            this._directive = t.getDirective(e.name.value);
            break;
          case v.OPERATION_DEFINITION: {
            let r = t.getRootType(e.operation);
            this._typeStack.push(je(r) ? r : void 0);
            break;
          }
          case v.INLINE_FRAGMENT:
          case v.FRAGMENT_DEFINITION: {
            let r = e.typeCondition, i = r ? rn(t, r) : tt(this.getType());
            this._typeStack.push(ai(i) ? i : void 0);
            break;
          }
          case v.VARIABLE_DEFINITION: {
            let r = rn(t, e.type);
            this._inputTypeStack.push(tn(r) ? r : void 0);
            break;
          }
          case v.ARGUMENT: {
            var n;
            let r, i, a = (n = this.getDirective()) !== null && n !== void 0 ? n : this.getFieldDef();
            a && (r = a.args.find((s) => s.name === e.name.value), r && (i = r.type)), this._argument = r, this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(tn(i) ? i : void 0);
            break;
          }
          case v.LIST: {
            let r = Ou(this.getInputType()), i = dt(r) ? r.ofType : r;
            this._defaultValueStack.push(void 0), this._inputTypeStack.push(tn(i) ? i : void 0);
            break;
          }
          case v.OBJECT_FIELD: {
            let r = tt(this.getInputType()), i, a;
            Ze(r) && (a = r.getFields()[e.name.value], a && (i = a.type)), this._defaultValueStack.push(a ? a.defaultValue : void 0), this._inputTypeStack.push(tn(i) ? i : void 0);
            break;
          }
          case v.ENUM: {
            let r = tt(this.getInputType()), i;
            $t(r) && (i = r.getValue(e.value)), this._enumValue = i;
            break;
          }
        }
      }
      leave(e) {
        switch (e.kind) {
          case v.SELECTION_SET:
            this._parentTypeStack.pop();
            break;
          case v.FIELD:
            this._fieldDefStack.pop(), this._typeStack.pop();
            break;
          case v.DIRECTIVE:
            this._directive = null;
            break;
          case v.OPERATION_DEFINITION:
          case v.INLINE_FRAGMENT:
          case v.FRAGMENT_DEFINITION:
            this._typeStack.pop();
            break;
          case v.VARIABLE_DEFINITION:
            this._inputTypeStack.pop();
            break;
          case v.ARGUMENT:
            this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
            break;
          case v.LIST:
          case v.OBJECT_FIELD:
            this._defaultValueStack.pop(), this._inputTypeStack.pop();
            break;
          case v.ENUM:
            this._enumValue = null;
            break;
        }
      }
    };
    function M8(e, t, n) {
      let r = n.name.value;
      if (r === Ya.name && e.getQueryType() === t) return Ya;
      if (r === za.name && e.getQueryType() === t) return za;
      if (r === Xa.name && nn(t)) return Xa;
      if (je(t) || Ge(t)) return t.getFields()[r];
    }
    function yp(e, t) {
      return { enter(...n) {
        let r = n[0];
        e.enter(r);
        let i = mo(t, r.kind).enter;
        if (i) {
          let a = i.apply(t, n);
          return a !== void 0 && (e.leave(r), Nu(a) && e.enter(a)), a;
        }
      }, leave(...n) {
        let r = n[0], i = mo(t, r.kind).leave, a;
        return i && (a = i.apply(t, n)), e.leave(r), a;
      } };
    }
    function U8(e) {
      return e.kind === v.OPERATION_DEFINITION || e.kind === v.FRAGMENT_DEFINITION;
    }
    function P8(e) {
      return e.kind === v.SCHEMA_DEFINITION || Qa(e) || e.kind === v.DIRECTIVE_DEFINITION;
    }
    function Qa(e) {
      return e.kind === v.SCALAR_TYPE_DEFINITION || e.kind === v.OBJECT_TYPE_DEFINITION || e.kind === v.INTERFACE_TYPE_DEFINITION || e.kind === v.UNION_TYPE_DEFINITION || e.kind === v.ENUM_TYPE_DEFINITION || e.kind === v.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function B8(e) {
      return e.kind === v.SCHEMA_EXTENSION || Ku(e);
    }
    function Ku(e) {
      return e.kind === v.SCALAR_TYPE_EXTENSION || e.kind === v.OBJECT_TYPE_EXTENSION || e.kind === v.INTERFACE_TYPE_EXTENSION || e.kind === v.UNION_TYPE_EXTENSION || e.kind === v.ENUM_TYPE_EXTENSION || e.kind === v.INPUT_OBJECT_TYPE_EXTENSION;
    }
    function Np(e) {
      return { Document(t) {
        for (let n of t.definitions) if (!U8(n)) {
          let r = n.kind === v.SCHEMA_DEFINITION || n.kind === v.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
          e.reportError(new Y(`The ${r} definition is not executable.`, { nodes: n }));
        }
        return !1;
      } };
    }
    function $8(e) {
      return { Field(t) {
        let n = e.getParentType();
        if (n && !e.getFieldDef()) {
          let r = e.getSchema(), i = t.name.value, a = Ir("to use an inline fragment on", V8(r, n, i));
          a === "" && (a = Ir(K8(n, i))), e.reportError(new Y(`Cannot query field "${i}" on type "${n.name}".` + a, { nodes: t }));
        }
      } };
    }
    function V8(e, t, n) {
      if (!Kn(t)) return [];
      let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ Object.create(null);
      for (let s of e.getPossibleTypes(t)) if (s.getFields()[n]) {
        r.add(s), i[s.name] = 1;
        for (let o of s.getInterfaces()) {
          var a;
          o.getFields()[n] && (r.add(o), i[o.name] = ((a = i[o.name]) !== null && a !== void 0 ? a : 0) + 1);
        }
      }
      return [...r].sort((s, o) => {
        let l = i[o.name] - i[s.name];
        return l !== 0 ? l : Ge(s) && e.isSubType(s, o) ? -1 : Ge(o) && e.isSubType(o, s) ? 1 : Au(s.name, o.name);
      }).map((s) => s.name);
    }
    function K8(e, t) {
      if (je(e) || Ge(e)) {
        let n = Object.keys(e.getFields());
        return ii(t, n);
      }
      return [];
    }
    function j8(e) {
      return { InlineFragment(t) {
        let n = t.typeCondition;
        if (n) {
          let r = rn(e.getSchema(), n);
          if (r && !nn(r)) {
            let i = Et(n);
            e.reportError(new Y(`Fragment cannot condition on non composite type "${i}".`, { nodes: n }));
          }
        }
      }, FragmentDefinition(t) {
        let n = rn(e.getSchema(), t.typeCondition);
        if (n && !nn(n)) {
          let r = Et(t.typeCondition);
          e.reportError(new Y(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, { nodes: t.typeCondition }));
        }
      } };
    }
    function q8(e) {
      return { ...Cp(e), Argument(t) {
        let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
        if (!n && r && i) {
          let a = t.name.value, s = r.args.map((l) => l.name), o = ii(a, s);
          e.reportError(new Y(`Unknown argument "${a}" on field "${i.name}.${r.name}".` + Ir(o), { nodes: t }));
        }
      } };
    }
    function Cp(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Qi;
      for (let s of r) t[s.name] = s.args.map((o) => o.name);
      let i = e.getDocument().definitions;
      for (let s of i) if (s.kind === v.DIRECTIVE_DEFINITION) {
        var a;
        let o = (a = s.arguments) !== null && a !== void 0 ? a : [];
        t[s.name.value] = o.map((l) => l.name.value);
      }
      return { Directive(s) {
        let o = s.name.value, l = t[o];
        if (s.arguments && l) for (let u of s.arguments) {
          let c = u.name.value;
          if (!l.includes(c)) {
            let d = ii(c, l);
            e.reportError(new Y(`Unknown argument "${c}" on directive "@${o}".` + Ir(d), { nodes: u }));
          }
        }
        return !1;
      } };
    }
    function Tp(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Qi;
      for (let a of r) t[a.name] = a.locations;
      let i = e.getDocument().definitions;
      for (let a of i) a.kind === v.DIRECTIVE_DEFINITION && (t[a.name.value] = a.locations.map((s) => s.value));
      return { Directive(a, s, o, l, u) {
        let c = a.name.value, d = t[c];
        if (!d) {
          e.reportError(new Y(`Unknown directive "@${c}".`, { nodes: a }));
          return;
        }
        let p = G8(u);
        p && !d.includes(p) && e.reportError(new Y(`Directive "@${c}" may not be used on ${p}.`, { nodes: a }));
      } };
    }
    function G8(e) {
      let t = e[e.length - 1];
      switch ("kind" in t || Xt(), t.kind) {
        case v.OPERATION_DEFINITION:
          return H8(t.operation);
        case v.FIELD:
          return se.FIELD;
        case v.FRAGMENT_SPREAD:
          return se.FRAGMENT_SPREAD;
        case v.INLINE_FRAGMENT:
          return se.INLINE_FRAGMENT;
        case v.FRAGMENT_DEFINITION:
          return se.FRAGMENT_DEFINITION;
        case v.VARIABLE_DEFINITION:
          return se.VARIABLE_DEFINITION;
        case v.SCHEMA_DEFINITION:
        case v.SCHEMA_EXTENSION:
          return se.SCHEMA;
        case v.SCALAR_TYPE_DEFINITION:
        case v.SCALAR_TYPE_EXTENSION:
          return se.SCALAR;
        case v.OBJECT_TYPE_DEFINITION:
        case v.OBJECT_TYPE_EXTENSION:
          return se.OBJECT;
        case v.FIELD_DEFINITION:
          return se.FIELD_DEFINITION;
        case v.INTERFACE_TYPE_DEFINITION:
        case v.INTERFACE_TYPE_EXTENSION:
          return se.INTERFACE;
        case v.UNION_TYPE_DEFINITION:
        case v.UNION_TYPE_EXTENSION:
          return se.UNION;
        case v.ENUM_TYPE_DEFINITION:
        case v.ENUM_TYPE_EXTENSION:
          return se.ENUM;
        case v.ENUM_VALUE_DEFINITION:
          return se.ENUM_VALUE;
        case v.INPUT_OBJECT_TYPE_DEFINITION:
        case v.INPUT_OBJECT_TYPE_EXTENSION:
          return se.INPUT_OBJECT;
        case v.INPUT_VALUE_DEFINITION: {
          let n = e[e.length - 3];
          return "kind" in n || Xt(), n.kind === v.INPUT_OBJECT_TYPE_DEFINITION ? se.INPUT_FIELD_DEFINITION : se.ARGUMENT_DEFINITION;
        }
        default:
          Xt(!1, "Unexpected kind: " + Q(t.kind));
      }
    }
    function H8(e) {
      switch (e) {
        case Bt.QUERY:
          return se.QUERY;
        case Bt.MUTATION:
          return se.MUTATION;
        case Bt.SUBSCRIPTION:
          return se.SUBSCRIPTION;
      }
    }
    function W8(e) {
      return { FragmentSpread(t) {
        let n = t.name.value;
        e.getFragment(n) || e.reportError(new Y(`Unknown fragment "${n}".`, { nodes: t.name }));
      } };
    }
    function wp(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      for (let a of e.getDocument().definitions) Qa(a) && (r[a.name.value] = !0);
      let i = [...Object.keys(n), ...Object.keys(r)];
      return { NamedType(a, s, o, l, u) {
        let c = a.name.value;
        if (!n[c] && !r[c]) {
          var d;
          let p = (d = u[2]) !== null && d !== void 0 ? d : o, m = p != null && Y8(p);
          if (m && Ap.includes(c)) return;
          let g = ii(c, m ? Ap.concat(i) : i);
          e.reportError(new Y(`Unknown type "${c}".` + Ir(g), { nodes: a }));
        }
      } };
    }
    var Ap = [...Do, ...bo].map((e) => e.name);
    function Y8(e) {
      return "kind" in e && (P8(e) || B8(e));
    }
    function z8(e) {
      let t = 0;
      return { Document(n) {
        t = n.definitions.filter((r) => r.kind === v.OPERATION_DEFINITION).length;
      }, OperationDefinition(n) {
        !n.name && t > 1 && e.reportError(new Y("This anonymous operation must be the only defined operation.", { nodes: n }));
      } };
    }
    function X8(e) {
      var t, n, r;
      let i = e.getSchema(), a = (t = (n = (r = i == null ? void 0 : i.astNode) !== null && r !== void 0 ? r : i == null ? void 0 : i.getQueryType()) !== null && n !== void 0 ? n : i == null ? void 0 : i.getMutationType()) !== null && t !== void 0 ? t : i == null ? void 0 : i.getSubscriptionType(), s = 0;
      return { SchemaDefinition(o) {
        if (a) {
          e.reportError(new Y("Cannot define a new schema within a schema extension.", { nodes: o }));
          return;
        }
        s > 0 && e.reportError(new Y("Must provide only one schema definition.", { nodes: o })), ++s;
      } };
    }
    var J8 = 3;
    function Q8(e) {
      function t(n, r = /* @__PURE__ */ Object.create(null), i = 0) {
        if (n.kind === v.FRAGMENT_SPREAD) {
          let a = n.name.value;
          if (r[a] === !0) return !1;
          let s = e.getFragment(a);
          if (!s) return !1;
          try {
            return r[a] = !0, t(s, r, i);
          } finally {
            r[a] = void 0;
          }
        }
        if (n.kind === v.FIELD && (n.name.value === "fields" || n.name.value === "interfaces" || n.name.value === "possibleTypes" || n.name.value === "inputFields") && (i++, i >= J8)) return !0;
        if ("selectionSet" in n && n.selectionSet) {
          for (let a of n.selectionSet.selections) if (t(a, r, i)) return !0;
        }
        return !1;
      }
      return { Field(n) {
        if ((n.name.value === "__schema" || n.name.value === "__type") && t(n)) return e.reportError(new Y("Maximum introspection depth exceeded", { nodes: [n] })), !1;
      } };
    }
    function Z8(e) {
      let t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: () => !1, FragmentDefinition(a) {
        return i(a), !1;
      } };
      function i(a) {
        if (t[a.name.value]) return;
        let s = a.name.value;
        t[s] = !0;
        let o = e.getFragmentSpreads(a.selectionSet);
        if (o.length !== 0) {
          r[s] = n.length;
          for (let l of o) {
            let u = l.name.value, c = r[u];
            if (n.push(l), c === void 0) {
              let d = e.getFragment(u);
              d && i(d);
            } else {
              let d = n.slice(c), p = d.slice(0, -1).map((m) => '"' + m.name.value + '"').join(", ");
              e.reportError(new Y(`Cannot spread fragment "${u}" within itself` + (p !== "" ? ` via ${p}.` : "."), { nodes: d }));
            }
            n.pop();
          }
          r[s] = void 0;
        }
      }
    }
    function e6(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: { enter() {
        t = /* @__PURE__ */ Object.create(null);
      }, leave(n) {
        let r = e.getRecursiveVariableUsages(n);
        for (let { node: i } of r) {
          let a = i.name.value;
          t[a] !== !0 && e.reportError(new Y(n.name ? `Variable "$${a}" is not defined by operation "${n.name.value}".` : `Variable "$${a}" is not defined.`, { nodes: [i, n] }));
        }
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = !0;
      } };
    }
    function Sp(e) {
      let t = [], n = [];
      return { OperationDefinition(r) {
        return t.push(r), !1;
      }, FragmentDefinition(r) {
        return n.push(r), !1;
      }, Document: { leave() {
        let r = /* @__PURE__ */ Object.create(null);
        for (let i of t) for (let a of e.getRecursivelyReferencedFragments(i)) r[a.name.value] = !0;
        for (let i of n) {
          let a = i.name.value;
          r[a] !== !0 && e.reportError(new Y(`Fragment "${a}" is never used.`, { nodes: i }));
        }
      } } };
    }
    function t6(e) {
      let t = [];
      return { OperationDefinition: { enter() {
        t = [];
      }, leave(n) {
        let r = /* @__PURE__ */ Object.create(null), i = e.getRecursiveVariableUsages(n);
        for (let { node: a } of i) r[a.name.value] = !0;
        for (let a of t) {
          let s = a.variable.name.value;
          r[s] !== !0 && e.reportError(new Y(n.name ? `Variable "$${s}" is never used in operation "${n.name.value}".` : `Variable "$${s}" is never used.`, { nodes: a }));
        }
      } }, VariableDefinition(n) {
        t.push(n);
      } };
    }
    function ju(e) {
      switch (e.kind) {
        case v.OBJECT:
          return { ...e, fields: n6(e.fields) };
        case v.LIST:
          return { ...e, values: e.values.map(ju) };
        case v.INT:
        case v.FLOAT:
        case v.STRING:
        case v.BOOLEAN:
        case v.NULL:
        case v.ENUM:
        case v.VARIABLE:
          return e;
      }
    }
    function n6(e) {
      return e.map((t) => ({ ...t, value: ju(t.value) })).sort((t, n) => Au(t.name.value, n.name.value));
    }
    function Lp(e) {
      return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + Lp(n)).join(" and ") : e;
    }
    function r6(e) {
      let t = new Op(), n = new u6(), r = /* @__PURE__ */ new Map();
      return { SelectionSet(i) {
        let a = i6(e, r, t, n, e.getParentType(), i);
        for (let [[s, o], l, u] of a) {
          let c = Lp(o);
          e.reportError(new Y(`Fields "${s}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`, { nodes: l.concat(u) }));
        }
      } };
    }
    function i6(e, t, n, r, i, a) {
      let s = [], [o, l] = Co(e, t, i, a);
      if (s6(e, s, t, n, r, o), l.length !== 0) for (let u = 0; u < l.length; u++) {
        yo(e, s, t, n, r, !1, o, l[u]);
        for (let c = u + 1; c < l.length; c++) No(e, s, t, n, r, !1, l[u], l[c]);
      }
      return s;
    }
    function yo(e, t, n, r, i, a, s, o) {
      if (r.has(s, o, a)) return;
      r.add(s, o, a);
      let l = e.getFragment(o);
      if (!l) return;
      let [u, c] = Hu(e, n, l);
      if (s !== u) {
        qu(e, t, n, r, i, a, s, u);
        for (let d of c) yo(e, t, n, r, i, a, s, d);
      }
    }
    function No(e, t, n, r, i, a, s, o) {
      if (s === o || i.has(s, o, a)) return;
      i.add(s, o, a);
      let l = e.getFragment(s), u = e.getFragment(o);
      if (!l || !u) return;
      let [c, d] = Hu(e, n, l), [p, m] = Hu(e, n, u);
      qu(e, t, n, r, i, a, c, p);
      for (let g of m) No(e, t, n, r, i, a, s, g);
      for (let g of d) No(e, t, n, r, i, a, g, o);
    }
    function a6(e, t, n, r, i, a, s, o, l) {
      let u = [], [c, d] = Co(e, t, a, s), [p, m] = Co(e, t, o, l);
      qu(e, u, t, n, r, i, c, p);
      for (let g of m) yo(e, u, t, n, r, i, c, g);
      for (let g of d) yo(e, u, t, n, r, i, p, g);
      for (let g of d) for (let _ of m) No(e, u, t, n, r, i, g, _);
      return u;
    }
    function s6(e, t, n, r, i, a) {
      for (let [s, o] of Object.entries(a)) if (o.length > 1) for (let l = 0; l < o.length; l++) for (let u = l + 1; u < o.length; u++) {
        let c = Fp(e, n, r, i, !1, s, o[l], o[u]);
        c && t.push(c);
      }
    }
    function qu(e, t, n, r, i, a, s, o) {
      for (let [l, u] of Object.entries(s)) {
        let c = o[l];
        if (c) for (let d of u) for (let p of c) {
          let m = Fp(e, n, r, i, a, l, d, p);
          m && t.push(m);
        }
      }
    }
    function Fp(e, t, n, r, i, a, s, o) {
      let [l, u, c] = s, [d, p, m] = o, g = i || l !== d && je(l) && je(d);
      if (!g) {
        let C = u.name.value, x = p.name.value;
        if (C !== x) return [[a, `"${C}" and "${x}" are different fields`], [u], [p]];
        if (!o6(u, p)) return [[a, "they have differing arguments"], [u], [p]];
      }
      let _ = c == null ? void 0 : c.type, L = m == null ? void 0 : m.type;
      if (_ && L && Gu(_, L)) return [[a, `they return conflicting types "${Q(_)}" and "${Q(L)}"`], [u], [p]];
      let A = u.selectionSet, F = p.selectionSet;
      if (A && F) {
        let C = a6(e, t, n, r, g, tt(_), A, tt(L), F);
        return l6(C, a, u, p);
      }
    }
    function o6(e, t) {
      let n = e.arguments, r = t.arguments;
      if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
      if (r === void 0 || r.length === 0 || n.length !== r.length) return !1;
      let i = new Map(r.map(({ name: a, value: s }) => [a.value, s]));
      return n.every((a) => {
        let s = a.value, o = i.get(a.name.value);
        return o === void 0 ? !1 : Ip(s) === Ip(o);
      });
    }
    function Ip(e) {
      return Et(ju(e));
    }
    function Gu(e, t) {
      return dt(e) ? dt(t) ? Gu(e.ofType, t.ofType) : !0 : dt(t) ? !0 : Ue(e) ? Ue(t) ? Gu(e.ofType, t.ofType) : !0 : Ue(t) ? !0 : zi(e) || zi(t) ? e !== t : !1;
    }
    function Co(e, t, n, r) {
      let i = t.get(r);
      if (i) return i;
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      Rp(e, n, r, a, s);
      let o = [a, Object.keys(s)];
      return t.set(r, o), o;
    }
    function Hu(e, t, n) {
      let r = t.get(n.selectionSet);
      if (r) return r;
      let i = rn(e.getSchema(), n.typeCondition);
      return Co(e, t, i, n.selectionSet);
    }
    function Rp(e, t, n, r, i) {
      for (let a of n.selections) switch (a.kind) {
        case v.FIELD: {
          let s = a.name.value, o;
          (je(t) || Ge(t)) && (o = t.getFields()[s]);
          let l = a.alias ? a.alias.value : s;
          r[l] || (r[l] = []), r[l].push([t, a, o]);
          break;
        }
        case v.FRAGMENT_SPREAD:
          i[a.name.value] = !0;
          break;
        case v.INLINE_FRAGMENT: {
          let s = a.typeCondition, o = s ? rn(e.getSchema(), s) : t;
          Rp(e, o, a.selectionSet, r, i);
          break;
        }
      }
    }
    function l6(e, t, n, r) {
      if (e.length > 0) return [[t, e.map(([i]) => i)], [n, ...e.map(([, i]) => i).flat()], [r, ...e.map(([, , i]) => i).flat()]];
    }
    var Op = class {
      constructor() {
        this._data = /* @__PURE__ */ new Map();
      }
      has(e, t, n) {
        var r;
        let i = (r = this._data.get(e)) === null || r === void 0 ? void 0 : r.get(t);
        return i === void 0 ? !1 : n ? !0 : n === i;
      }
      add(e, t, n) {
        let r = this._data.get(e);
        r === void 0 ? this._data.set(e, /* @__PURE__ */ new Map([[t, n]])) : r.set(t, n);
      }
    }, u6 = class {
      constructor() {
        this._orderedPairSet = new Op();
      }
      has(e, t, n) {
        return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n);
      }
      add(e, t, n) {
        e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n);
      }
    };
    function c6(e) {
      return { InlineFragment(t) {
        let n = e.getType(), r = e.getParentType();
        if (nn(n) && nn(r) && !xu(e.getSchema(), n, r)) {
          let i = Q(r), a = Q(n);
          e.reportError(new Y(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${a}".`, { nodes: t }));
        }
      }, FragmentSpread(t) {
        let n = t.name.value, r = d6(e, n), i = e.getParentType();
        if (r && i && !xu(e.getSchema(), r, i)) {
          let a = Q(i), s = Q(r);
          e.reportError(new Y(`Fragment "${n}" cannot be spread here as objects of type "${a}" can never be of type "${s}".`, { nodes: t }));
        }
      } };
    }
    function d6(e, t) {
      let n = e.getFragment(t);
      if (n) {
        let r = rn(e.getSchema(), n.typeCondition);
        if (nn(r)) return r;
      }
    }
    function h6(e) {
      let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null);
      for (let i of e.getDocument().definitions) Qa(i) && (n[i.name.value] = i);
      return { ScalarTypeExtension: r, ObjectTypeExtension: r, InterfaceTypeExtension: r, UnionTypeExtension: r, EnumTypeExtension: r, InputObjectTypeExtension: r };
      function r(i) {
        let a = i.name.value, s = n[a], o = t == null ? void 0 : t.getType(a), l;
        if (s ? l = f6[s.kind] : o && (l = p6(o)), l) {
          if (l !== i.kind) {
            let u = m6(i.kind);
            e.reportError(new Y(`Cannot extend non-${u} type "${a}".`, { nodes: s ? [s, i] : i }));
          }
        } else {
          let u = Object.keys({ ...n, ...t == null ? void 0 : t.getTypeMap() }), c = ii(a, u);
          e.reportError(new Y(`Cannot extend type "${a}" because it is not defined.` + Ir(c), { nodes: i.name }));
        }
      }
    }
    var f6 = { [v.SCALAR_TYPE_DEFINITION]: v.SCALAR_TYPE_EXTENSION, [v.OBJECT_TYPE_DEFINITION]: v.OBJECT_TYPE_EXTENSION, [v.INTERFACE_TYPE_DEFINITION]: v.INTERFACE_TYPE_EXTENSION, [v.UNION_TYPE_DEFINITION]: v.UNION_TYPE_EXTENSION, [v.ENUM_TYPE_DEFINITION]: v.ENUM_TYPE_EXTENSION, [v.INPUT_OBJECT_TYPE_DEFINITION]: v.INPUT_OBJECT_TYPE_EXTENSION };
    function p6(e) {
      if (fn(e)) return v.SCALAR_TYPE_EXTENSION;
      if (je(e)) return v.OBJECT_TYPE_EXTENSION;
      if (Ge(e)) return v.INTERFACE_TYPE_EXTENSION;
      if (en(e)) return v.UNION_TYPE_EXTENSION;
      if ($t(e)) return v.ENUM_TYPE_EXTENSION;
      if (Ze(e)) return v.INPUT_OBJECT_TYPE_EXTENSION;
      Xt(!1, "Unexpected type: " + Q(e));
    }
    function m6(e) {
      switch (e) {
        case v.SCALAR_TYPE_EXTENSION:
          return "scalar";
        case v.OBJECT_TYPE_EXTENSION:
          return "object";
        case v.INTERFACE_TYPE_EXTENSION:
          return "interface";
        case v.UNION_TYPE_EXTENSION:
          return "union";
        case v.ENUM_TYPE_EXTENSION:
          return "enum";
        case v.INPUT_OBJECT_TYPE_EXTENSION:
          return "input object";
        default:
          Xt(!1, "Unexpected kind: " + Q(e));
      }
    }
    function g6(e) {
      return { ...xp(e), Field: { leave(t) {
        var n;
        let r = e.getFieldDef();
        if (!r) return !1;
        let i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map((a) => a.name.value));
        for (let a of r.args) if (!i.has(a.name) && qa(a)) {
          let s = Q(a.type);
          e.reportError(new Y(`Field "${r.name}" argument "${a.name}" of type "${s}" is required, but it was not provided.`, { nodes: t }));
        }
      } } };
    }
    function xp(e) {
      var t;
      let n = /* @__PURE__ */ Object.create(null), r = e.getSchema(), i = (t = r == null ? void 0 : r.getDirectives()) !== null && t !== void 0 ? t : Qi;
      for (let o of i) n[o.name] = ni(o.args.filter(qa), (l) => l.name);
      let a = e.getDocument().definitions;
      for (let o of a) if (o.kind === v.DIRECTIVE_DEFINITION) {
        var s;
        let l = (s = o.arguments) !== null && s !== void 0 ? s : [];
        n[o.name.value] = ni(l.filter(E6), (u) => u.name.value);
      }
      return { Directive: { leave(o) {
        let l = o.name.value, u = n[l];
        if (u) {
          var c;
          let d = (c = o.arguments) !== null && c !== void 0 ? c : [], p = new Set(d.map((m) => m.name.value));
          for (let [m, g] of Object.entries(u)) if (!p.has(m)) {
            let _ = Fu(g.type) ? Q(g.type) : Et(g.type);
            e.reportError(new Y(`Directive "@${l}" argument "${m}" of type "${_}" is required, but it was not provided.`, { nodes: o }));
          }
        }
      } } };
    }
    function E6(e) {
      return e.type.kind === v.NON_NULL_TYPE && e.defaultValue == null;
    }
    function _6(e) {
      return { Field(t) {
        let n = e.getType(), r = t.selectionSet;
        if (n) if (zi(tt(n))) {
          if (r) {
            let i = t.name.value, a = Q(n);
            e.reportError(new Y(`Field "${i}" must not have a selection since type "${a}" has no subfields.`, { nodes: r }));
          }
        } else if (r) {
          if (r.selections.length === 0) {
            let i = t.name.value, a = Q(n);
            e.reportError(new Y(`Field "${i}" of type "${a}" must have at least one field selected.`, { nodes: t }));
          }
        } else {
          let i = t.name.value, a = Q(n);
          e.reportError(new Y(`Field "${i}" of type "${a}" must have a selection of subfields. Did you mean "${i} { ... }"?`, { nodes: t }));
        }
      } };
    }
    function kr(e, t, n) {
      if (e) {
        if (e.kind === v.VARIABLE) {
          let r = e.name.value;
          if (n == null || n[r] === void 0) return;
          let i = n[r];
          return i === null && Ue(t) ? void 0 : i;
        }
        if (Ue(t)) return e.kind === v.NULL ? void 0 : kr(e, t.ofType, n);
        if (e.kind === v.NULL) return null;
        if (dt(t)) {
          let r = t.ofType;
          if (e.kind === v.LIST) {
            let a = [];
            for (let s of e.values) if (kp(s, n)) {
              if (Ue(r)) return;
              a.push(null);
            } else {
              let o = kr(s, r, n);
              if (o === void 0) return;
              a.push(o);
            }
            return a;
          }
          let i = kr(e, r, n);
          return i === void 0 ? void 0 : [i];
        }
        if (Ze(t)) {
          if (e.kind !== v.OBJECT) return;
          let r = /* @__PURE__ */ Object.create(null), i = ni(e.fields, (a) => a.name.value);
          for (let a of Object.values(t.getFields())) {
            let s = i[a.name];
            if (!s || kp(s.value, n)) {
              if (a.defaultValue !== void 0) r[a.name] = a.defaultValue;
              else if (Ue(a.type)) return;
              continue;
            }
            let o = kr(s.value, a.type, n);
            if (o === void 0) return;
            r[a.name] = o;
          }
          if (t.isOneOf) {
            let a = Object.keys(r);
            if (a.length !== 1 || r[a[0]] === null) return;
          }
          return r;
        }
        if (zi(t)) {
          let r;
          try {
            r = t.parseLiteral(e, n);
          } catch {
            return;
          }
          return r === void 0 ? void 0 : r;
        }
        Xt(!1, "Unexpected input type: " + Q(t));
      }
    }
    function kp(e, t) {
      return e.kind === v.VARIABLE && (t == null || t[e.name.value] === void 0);
    }
    function D6(e, t, n) {
      var r;
      let i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = ni(a, (o) => o.name.value);
      for (let o of e.args) {
        let l = o.name, u = o.type, c = s[l];
        if (!c) {
          if (o.defaultValue !== void 0) i[l] = o.defaultValue;
          else if (Ue(u)) throw new Y(`Argument "${l}" of required type "${Q(u)}" was not provided.`, { nodes: t });
          continue;
        }
        let d = c.value, p = d.kind === v.NULL;
        if (d.kind === v.VARIABLE) {
          let g = d.name.value;
          if (n == null || !v6(n, g)) {
            if (o.defaultValue !== void 0) i[l] = o.defaultValue;
            else if (Ue(u)) throw new Y(`Argument "${l}" of required type "${Q(u)}" was provided the variable "$${g}" which was not provided a runtime value.`, { nodes: d });
            continue;
          }
          p = n[g] == null;
        }
        if (p && Ue(u)) throw new Y(`Argument "${l}" of non-null type "${Q(u)}" must not be null.`, { nodes: d });
        let m = kr(d, u, n);
        if (m === void 0) throw new Y(`Argument "${l}" has invalid value ${Et(d)}.`, { nodes: d });
        i[l] = m;
      }
      return i;
    }
    function Za(e, t, n) {
      var r;
      let i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((a) => a.name.value === e.name);
      if (i) return D6(e, i, n);
    }
    function v6(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function b6(e, t, n, r, i) {
      let a = /* @__PURE__ */ new Map();
      return Wu(e, t, n, r, i, a, /* @__PURE__ */ new Set()), a;
    }
    function Wu(e, t, n, r, i, a, s) {
      for (let o of i.selections) switch (o.kind) {
        case v.FIELD: {
          if (!Yu(n, o)) continue;
          let l = y6(o), u = a.get(l);
          u !== void 0 ? u.push(o) : a.set(l, [o]);
          break;
        }
        case v.INLINE_FRAGMENT: {
          if (!Yu(n, o) || !Mp(e, o, r)) continue;
          Wu(e, t, n, r, o.selectionSet, a, s);
          break;
        }
        case v.FRAGMENT_SPREAD: {
          let l = o.name.value;
          if (s.has(l) || !Yu(n, o)) continue;
          s.add(l);
          let u = t[l];
          if (!u || !Mp(e, u, r)) continue;
          Wu(e, t, n, r, u.selectionSet, a, s);
          break;
        }
      }
    }
    function Yu(e, t) {
      let n = Za(cp, t, e);
      if ((n == null ? void 0 : n.if) === !0) return !1;
      let r = Za(up, t, e);
      return (r == null ? void 0 : r.if) !== !1;
    }
    function Mp(e, t, n) {
      let r = t.typeCondition;
      if (!r) return !0;
      let i = rn(e, r);
      return i === n ? !0 : Kn(i) ? e.isSubType(i, n) : !1;
    }
    function y6(e) {
      return e.alias ? e.alias.value : e.name.value;
    }
    function N6(e) {
      return { OperationDefinition(t) {
        if (t.operation === "subscription") {
          let n = e.getSchema(), r = n.getSubscriptionType();
          if (r) {
            let i = t.name ? t.name.value : null, a = /* @__PURE__ */ Object.create(null), s = e.getDocument(), o = /* @__PURE__ */ Object.create(null);
            for (let u of s.definitions) u.kind === v.FRAGMENT_DEFINITION && (o[u.name.value] = u);
            let l = b6(n, o, a, r, t.selectionSet);
            if (l.size > 1) {
              let u = [...l.values()].slice(1).flat();
              e.reportError(new Y(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", { nodes: u }));
            }
            for (let u of l.values()) u[0].name.value.startsWith("__") && e.reportError(new Y(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", { nodes: u }));
          }
        }
      } };
    }
    function zu(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = t(r), a = n.get(i);
        a === void 0 ? n.set(i, [r]) : a.push(r);
      }
      return n;
    }
    function C6(e) {
      return { DirectiveDefinition(r) {
        var i;
        let a = (i = r.arguments) !== null && i !== void 0 ? i : [];
        return n(`@${r.name.value}`, a);
      }, InterfaceTypeDefinition: t, InterfaceTypeExtension: t, ObjectTypeDefinition: t, ObjectTypeExtension: t };
      function t(r) {
        var i;
        let a = r.name.value, s = (i = r.fields) !== null && i !== void 0 ? i : [];
        for (let l of s) {
          var o;
          let u = l.name.value, c = (o = l.arguments) !== null && o !== void 0 ? o : [];
          n(`${a}.${u}`, c);
        }
        return !1;
      }
      function n(r, i) {
        let a = zu(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`Argument "${r}(${s}:)" can only be defined once.`, { nodes: o.map((l) => l.name) }));
        return !1;
      }
    }
    function Up(e) {
      return { Field: t, Directive: t };
      function t(n) {
        var r;
        let i = (r = n.arguments) !== null && r !== void 0 ? r : [], a = zu(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`There can be only one argument named "${s}".`, { nodes: o.map((l) => l.name) }));
      }
    }
    function T6(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
      return { DirectiveDefinition(r) {
        let i = r.name.value;
        if (n != null && n.getDirective(i)) {
          e.reportError(new Y(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, { nodes: r.name }));
          return;
        }
        return t[i] ? e.reportError(new Y(`There can be only one directive named "@${i}".`, { nodes: [t[i], r.name] })) : t[i] = r.name, !1;
      } };
    }
    function Pp(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Qi;
      for (let o of r) t[o.name] = !o.isRepeatable;
      let i = e.getDocument().definitions;
      for (let o of i) o.kind === v.DIRECTIVE_DEFINITION && (t[o.name.value] = !o.repeatable);
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      return { enter(o) {
        if (!("directives" in o) || !o.directives) return;
        let l;
        if (o.kind === v.SCHEMA_DEFINITION || o.kind === v.SCHEMA_EXTENSION) l = a;
        else if (Qa(o) || Ku(o)) {
          let u = o.name.value;
          l = s[u], l === void 0 && (s[u] = l = /* @__PURE__ */ Object.create(null));
        } else l = /* @__PURE__ */ Object.create(null);
        for (let u of o.directives) {
          let c = u.name.value;
          t[c] && (l[c] ? e.reportError(new Y(`The directive "@${c}" can only be used once at this location.`, { nodes: [l[c], u] })) : l[c] = u);
        }
      } };
    }
    function w6(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { EnumTypeDefinition: i, EnumTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let l = (s = a.values) !== null && s !== void 0 ? s : [], u = r[o];
        for (let c of l) {
          let d = c.name.value, p = n[o];
          $t(p) && p.getValue(d) ? e.reportError(new Y(`Enum value "${o}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : u[d] ? e.reportError(new Y(`Enum value "${o}.${d}" can only be defined once.`, { nodes: [u[d], c.name] })) : u[d] = c.name;
        }
        return !1;
      }
    }
    function A6(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { InputObjectTypeDefinition: i, InputObjectTypeExtension: i, InterfaceTypeDefinition: i, InterfaceTypeExtension: i, ObjectTypeDefinition: i, ObjectTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let l = (s = a.fields) !== null && s !== void 0 ? s : [], u = r[o];
        for (let c of l) {
          let d = c.name.value;
          S6(n[o], d) ? e.reportError(new Y(`Field "${o}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : u[d] ? e.reportError(new Y(`Field "${o}.${d}" can only be defined once.`, { nodes: [u[d], c.name] })) : u[d] = c.name;
        }
        return !1;
      }
    }
    function S6(e, t) {
      return je(e) || Ge(e) || Ze(e) ? e.getFields()[t] != null : !1;
    }
    function L6(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: () => !1, FragmentDefinition(n) {
        let r = n.name.value;
        return t[r] ? e.reportError(new Y(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })) : t[r] = n.name, !1;
      } };
    }
    function Bp(e) {
      let t = [], n = /* @__PURE__ */ Object.create(null);
      return { ObjectValue: { enter() {
        t.push(n), n = /* @__PURE__ */ Object.create(null);
      }, leave() {
        let r = t.pop();
        r || Xt(), n = r;
      } }, ObjectField(r) {
        let i = r.name.value;
        n[i] ? e.reportError(new Y(`There can be only one input field named "${i}".`, { nodes: [n[i], r.name] })) : n[i] = r.name;
      } };
    }
    function F6(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition(n) {
        let r = n.name;
        return r && (t[r.value] ? e.reportError(new Y(`There can be only one operation named "${r.value}".`, { nodes: [t[r.value], r] })) : t[r.value] = r), !1;
      }, FragmentDefinition: () => !1 };
    }
    function I6(e) {
      let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null), r = t ? { query: t.getQueryType(), mutation: t.getMutationType(), subscription: t.getSubscriptionType() } : {};
      return { SchemaDefinition: i, SchemaExtension: i };
      function i(a) {
        var s;
        let o = (s = a.operationTypes) !== null && s !== void 0 ? s : [];
        for (let l of o) {
          let u = l.operation, c = n[u];
          r[u] ? e.reportError(new Y(`Type for ${u} already defined in the schema. It cannot be redefined.`, { nodes: l })) : c ? e.reportError(new Y(`There can be only one ${u} type in schema.`, { nodes: [c, l] })) : n[u] = l;
        }
        return !1;
      }
    }
    function R6(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
      return { ScalarTypeDefinition: r, ObjectTypeDefinition: r, InterfaceTypeDefinition: r, UnionTypeDefinition: r, EnumTypeDefinition: r, InputObjectTypeDefinition: r };
      function r(i) {
        let a = i.name.value;
        if (n != null && n.getType(a)) {
          e.reportError(new Y(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`, { nodes: i.name }));
          return;
        }
        return t[a] ? e.reportError(new Y(`There can be only one type named "${a}".`, { nodes: [t[a], i.name] })) : t[a] = i.name, !1;
      }
    }
    function O6(e) {
      return { OperationDefinition(t) {
        var n;
        let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = zu(r, (a) => a.variable.name.value);
        for (let [a, s] of i) s.length > 1 && e.reportError(new Y(`There can be only one variable named "$${a}".`, { nodes: s.map((o) => o.variable.name) }));
      } };
    }
    function x6(e) {
      let t = {};
      return { OperationDefinition: { enter() {
        t = {};
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      }, ListValue(n) {
        let r = Ou(e.getParentInputType());
        if (!dt(r)) return oi(e, n), !1;
      }, ObjectValue(n) {
        let r = tt(e.getInputType());
        if (!Ze(r)) return oi(e, n), !1;
        let i = ni(n.fields, (a) => a.name.value);
        for (let a of Object.values(r.getFields())) if (!i[a.name] && ip(a)) {
          let s = Q(a.type);
          e.reportError(new Y(`Field "${r.name}.${a.name}" of required type "${s}" was not provided.`, { nodes: n }));
        }
        r.isOneOf && k6(e, n, r, i, t);
      }, ObjectField(n) {
        let r = tt(e.getParentInputType());
        if (!e.getInputType() && Ze(r)) {
          let i = ii(n.name.value, Object.keys(r.getFields()));
          e.reportError(new Y(`Field "${n.name.value}" is not defined by type "${r.name}".` + Ir(i), { nodes: n }));
        }
      }, NullValue(n) {
        let r = e.getInputType();
        Ue(r) && e.reportError(new Y(`Expected value of type "${Q(r)}", found ${Et(n)}.`, { nodes: n }));
      }, EnumValue: (n) => oi(e, n), IntValue: (n) => oi(e, n), FloatValue: (n) => oi(e, n), StringValue: (n) => oi(e, n), BooleanValue: (n) => oi(e, n) };
    }
    function oi(e, t) {
      let n = e.getInputType();
      if (!n) return;
      let r = tt(n);
      if (!zi(r)) {
        let i = Q(n);
        e.reportError(new Y(`Expected value of type "${i}", found ${Et(t)}.`, { nodes: t }));
        return;
      }
      try {
        if (r.parseLiteral(t, void 0) === void 0) {
          let i = Q(n);
          e.reportError(new Y(`Expected value of type "${i}", found ${Et(t)}.`, { nodes: t }));
        }
      } catch (i) {
        let a = Q(n);
        i instanceof Y ? e.reportError(i) : e.reportError(new Y(`Expected value of type "${a}", found ${Et(t)}; ` + i.message, { nodes: t, originalError: i }));
      }
    }
    function k6(e, t, n, r, i) {
      var a;
      let s = Object.keys(r);
      if (s.length !== 1) {
        e.reportError(new Y(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] }));
        return;
      }
      let o = (a = r[s[0]]) === null || a === void 0 ? void 0 : a.value, l = !o || o.kind === v.NULL, u = (o == null ? void 0 : o.kind) === v.VARIABLE;
      if (l) {
        e.reportError(new Y(`Field "${n.name}.${s[0]}" must be non-null.`, { nodes: [t] }));
        return;
      }
      if (u) {
        let c = o.name.value;
        i[c].type.kind !== v.NON_NULL_TYPE && e.reportError(new Y(`Variable "${c}" must be non-nullable to be used for OneOf Input Object "${n.name}".`, { nodes: [t] }));
      }
    }
    function M6(e) {
      return { VariableDefinition(t) {
        let n = rn(e.getSchema(), t.type);
        if (n !== void 0 && !tn(n)) {
          let r = t.variable.name.value, i = Et(t.type);
          e.reportError(new Y(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: t.type }));
        }
      } };
    }
    function U6(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: { enter() {
        t = /* @__PURE__ */ Object.create(null);
      }, leave(n) {
        let r = e.getRecursiveVariableUsages(n);
        for (let { node: i, type: a, defaultValue: s, parentType: o } of r) {
          let l = i.name.value, u = t[l];
          if (u && a) {
            let c = e.getSchema(), d = rn(c, u.type);
            if (d && !P6(c, d, u.defaultValue, a, s)) {
              let p = Q(d), m = Q(a);
              e.reportError(new Y(`Variable "$${l}" of type "${p}" used in position expecting type "${m}".`, { nodes: [u, i] }));
            }
            Ze(o) && o.isOneOf && Ru(d) && e.reportError(new Y(`Variable "$${l}" is of type "${d}" but must be non-nullable to be used for OneOf Input Object "${o}".`, { nodes: [u, i] }));
          }
        }
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      } };
    }
    function P6(e, t, n, r, i) {
      if (Ue(r) && !Ue(t)) {
        if (!(n != null && n.kind !== v.NULL) && i === void 0) return !1;
        let a = r.ofType;
        return Ji(e, t, a);
      }
      return Ji(e, t, r);
    }
    var B6 = Object.freeze([Q8]), $p = Object.freeze([Np, F6, z8, N6, wp, j8, M6, _6, $8, L6, W8, Sp, c6, Z8, O6, e6, t6, Tp, Pp, q8, Up, x6, g6, U6, r6, Bp, ...B6]), $6 = Object.freeze([X8, I6, R6, w6, A6, C6, T6, wp, Tp, Pp, h6, Cp, Up, Bp, xp]), Vp = class {
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
          for (let n of this.getDocument().definitions) n.kind === v.FRAGMENT_DEFINITION && (t[n.name.value] = n);
          this._fragments = t;
        }
        return t[e];
      }
      getFragmentSpreads(e) {
        let t = this._fragmentSpreads.get(e);
        if (!t) {
          t = [];
          let n = [e], r;
          for (; r = n.pop(); ) for (let i of r.selections) i.kind === v.FRAGMENT_SPREAD ? t.push(i) : i.selectionSet && n.push(i.selectionSet);
          this._fragmentSpreads.set(e, t);
        }
        return t;
      }
      getRecursivelyReferencedFragments(e) {
        let t = this._recursivelyReferencedFragments.get(e);
        if (!t) {
          t = [];
          let n = /* @__PURE__ */ Object.create(null), r = [e.selectionSet], i;
          for (; i = r.pop(); ) for (let a of this.getFragmentSpreads(i)) {
            let s = a.name.value;
            if (n[s] !== !0) {
              n[s] = !0;
              let o = this.getFragment(s);
              o && (t.push(o), r.push(o.selectionSet));
            }
          }
          this._recursivelyReferencedFragments.set(e, t);
        }
        return t;
      }
    }, V6 = class extends Vp {
      constructor(e, t, n) {
        super(e, n), this._schema = t;
      }
      get [Symbol.toStringTag]() {
        return "SDLValidationContext";
      }
      getSchema() {
        return this._schema;
      }
    }, K6 = class extends Vp {
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
          let n = [], r = new bp(this._schema);
          Rr(e, yp(r, { VariableDefinition: () => !1, Variable(i) {
            n.push({ node: i, type: r.getInputType(), defaultValue: r.getDefaultValue(), parentType: r.getParentInputType() });
          } })), t = n, this._variableUsages.set(e, t);
        }
        return t;
      }
      getRecursiveVariableUsages(e) {
        let t = this._recursiveVariableUsages.get(e);
        if (!t) {
          t = this.getVariableUsages(e);
          for (let n of this.getRecursivelyReferencedFragments(e)) t = t.concat(this.getVariableUsages(n));
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
    function Kp(e, t, n = $p, r, i = new bp(e)) {
      var a;
      let s = (a = r == null ? void 0 : r.maxErrors) !== null && a !== void 0 ? a : 100;
      t || Re(!1, "Must provide document."), y8(e);
      let o = Object.freeze({}), l = [], u = new K6(e, t, i, (d) => {
        if (l.length >= s) throw l.push(new Y("Too many validation errors, error limit reached. Validation aborted.")), o;
        l.push(d);
      }), c = Y0(n.map((d) => d(u)));
      try {
        Rr(t, yp(i, c));
      } catch (d) {
        if (d !== o) throw d;
      }
      return l;
    }
    function j6(e, t, n = $6) {
      let r = [], i = new V6(e, t, (s) => {
        r.push(s);
      }), a = n.map((s) => s(i));
      return Rr(e, Y0(a)), r;
    }
    function q6(e) {
      let t = j6(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    function G6(e) {
      return { Field(t) {
        let n = e.getFieldDef(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = e.getParentType();
          i != null || Xt(), e.reportError(new Y(`The field ${i.name}.${n.name} is deprecated. ${r}`, { nodes: t }));
        }
      }, Argument(t) {
        let n = e.getArgument(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = e.getDirective();
          if (i != null) e.reportError(new Y(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t }));
          else {
            let a = e.getParentType(), s = e.getFieldDef();
            a != null && s != null || Xt(), e.reportError(new Y(`Field "${a.name}.${s.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t }));
          }
        }
      }, ObjectField(t) {
        let n = tt(e.getParentInputType());
        if (Ze(n)) {
          let r = n.getFields()[t.name.value], i = r == null ? void 0 : r.deprecationReason;
          i != null && e.reportError(new Y(`The input field ${n.name}.${r.name} is deprecated. ${i}`, { nodes: t }));
        }
      }, EnumValue(t) {
        let n = e.getEnumValue(), r = n == null ? void 0 : n.deprecationReason;
        if (n && r != null) {
          let i = tt(e.getInputType());
          i != null || Xt(), e.reportError(new Y(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, { nodes: t }));
        }
      } };
    }
    function jp(e, t) {
      or(e) && or(e.__schema) || Re(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Q(e)}.`);
      let n = e.__schema, r = ri(n.types, (S) => S.name, (S) => p(S));
      for (let S of [...Do, ...bo]) r[S.name] && (r[S.name] = S);
      let i = n.queryType ? c(n.queryType) : null, a = n.mutationType ? c(n.mutationType) : null, s = n.subscriptionType ? c(n.subscriptionType) : null, o = n.directives ? n.directives.map(B) : [];
      return new Bu({ description: n.description, query: i, mutation: a, subscription: s, types: Object.values(r), directives: o, assumeValid: t == null ? void 0 : t.assumeValid });
      function l(S) {
        if (S.kind === qe.LIST) {
          let K = S.ofType;
          if (!K) throw new Error("Decorated type deeper than introspection query.");
          return new Ft(l(K));
        }
        if (S.kind === qe.NON_NULL) {
          let K = S.ofType;
          if (!K) throw new Error("Decorated type deeper than introspection query.");
          let V = l(K);
          return new Ce(d8(V));
        }
        return u(S);
      }
      function u(S) {
        let K = S.name;
        if (!K) throw new Error(`Unknown type reference: ${Q(S)}.`);
        let V = r[K];
        if (!V) throw new Error(`Invalid or incomplete schema, unknown type: ${K}. Ensure that a full introspection query is used in order to build a client schema.`);
        return V;
      }
      function c(S) {
        return l8(u(S));
      }
      function d(S) {
        return u8(u(S));
      }
      function p(S) {
        if (S != null && S.name != null && S.kind != null) switch (S.kind) {
          case qe.SCALAR:
            return m(S);
          case qe.OBJECT:
            return _(S);
          case qe.INTERFACE:
            return L(S);
          case qe.UNION:
            return A(S);
          case qe.ENUM:
            return F(S);
          case qe.INPUT_OBJECT:
            return C(S);
        }
        let K = Q(S);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${K}.`);
      }
      function m(S) {
        return new ur({ name: S.name, description: S.description, specifiedByURL: S.specifiedByURL });
      }
      function g(S) {
        if (S.interfaces === null && S.kind === qe.INTERFACE) return [];
        if (!S.interfaces) {
          let K = Q(S);
          throw new Error(`Introspection result missing interfaces: ${K}.`);
        }
        return S.interfaces.map(d);
      }
      function _(S) {
        return new pn({ name: S.name, description: S.description, interfaces: () => g(S), fields: () => x(S) });
      }
      function L(S) {
        return new Or({ name: S.name, description: S.description, interfaces: () => g(S), fields: () => x(S) });
      }
      function A(S) {
        if (!S.possibleTypes) {
          let K = Q(S);
          throw new Error(`Introspection result missing possibleTypes: ${K}.`);
        }
        return new Eo({ name: S.name, description: S.description, types: () => S.possibleTypes.map(c) });
      }
      function F(S) {
        if (!S.enumValues) {
          let K = Q(S);
          throw new Error(`Introspection result missing enumValues: ${K}.`);
        }
        return new xr({ name: S.name, description: S.description, values: ri(S.enumValues, (K) => K.name, (K) => ({ description: K.description, deprecationReason: K.deprecationReason })) });
      }
      function C(S) {
        if (!S.inputFields) {
          let K = Q(S);
          throw new Error(`Introspection result missing inputFields: ${K}.`);
        }
        return new Ga({ name: S.name, description: S.description, fields: () => q(S.inputFields), isOneOf: S.isOneOf });
      }
      function x(S) {
        if (!S.fields) throw new Error(`Introspection result missing fields: ${Q(S)}.`);
        return ri(S.fields, (K) => K.name, U);
      }
      function U(S) {
        let K = l(S.type);
        if (!ai(K)) {
          let V = Q(K);
          throw new Error(`Introspection must provide output type for fields, but received: ${V}.`);
        }
        if (!S.args) {
          let V = Q(S);
          throw new Error(`Introspection result missing field args: ${V}.`);
        }
        return { description: S.description, deprecationReason: S.deprecationReason, type: K, args: q(S.args) };
      }
      function q(S) {
        return ri(S, (K) => K.name, I);
      }
      function I(S) {
        let K = l(S.type);
        if (!tn(K)) {
          let xe = Q(K);
          throw new Error(`Introspection must provide input type for arguments, but received: ${xe}.`);
        }
        let V = S.defaultValue != null ? kr(QE(S.defaultValue), K) : void 0;
        return { description: S.description, type: K, defaultValue: V, deprecationReason: S.deprecationReason };
      }
      function B(S) {
        if (!S.args) {
          let K = Q(S);
          throw new Error(`Introspection result missing directive args: ${K}.`);
        }
        if (!S.locations) {
          let K = Q(S);
          throw new Error(`Introspection result missing directive locations: ${K}.`);
        }
        return new cr({ name: S.name, description: S.description, isRepeatable: S.isRepeatable, locations: S.locations.slice(), args: q(S.args) });
      }
    }
    function H6(e, t, n) {
      var r, i, a, s;
      let o = [], l = /* @__PURE__ */ Object.create(null), u = [], c, d = [];
      for (let y of t.definitions) if (y.kind === v.SCHEMA_DEFINITION) c = y;
      else if (y.kind === v.SCHEMA_EXTENSION) d.push(y);
      else if (Qa(y)) o.push(y);
      else if (Ku(y)) {
        let ee = y.name.value, z = l[ee];
        l[ee] = z ? z.concat([y]) : [y];
      } else y.kind === v.DIRECTIVE_DEFINITION && u.push(y);
      if (Object.keys(l).length === 0 && o.length === 0 && u.length === 0 && d.length === 0 && c == null) return e;
      let p = /* @__PURE__ */ Object.create(null);
      for (let y of e.types) p[y.name] = F(y);
      for (let y of o) {
        var m;
        let ee = y.name.value;
        p[ee] = (m = qp[ee]) !== null && m !== void 0 ? m : ke(y);
      }
      let g = { query: e.query && L(e.query), mutation: e.mutation && L(e.mutation), subscription: e.subscription && L(e.subscription), ...c && V([c]), ...V(d) };
      return { description: (r = c) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value, ...g, types: Object.values(p), directives: [...e.directives.map(A), ...u.map(G)], extensions: /* @__PURE__ */ Object.create(null), astNode: (a = c) !== null && a !== void 0 ? a : e.astNode, extensionASTNodes: e.extensionASTNodes.concat(d), assumeValid: (s = n == null ? void 0 : n.assumeValid) !== null && s !== void 0 ? s : !1 };
      function _(y) {
        return dt(y) ? new Ft(_(y.ofType)) : Ue(y) ? new Ce(_(y.ofType)) : L(y);
      }
      function L(y) {
        return p[y.name];
      }
      function A(y) {
        let ee = y.toConfig();
        return new cr({ ...ee, args: lr(ee.args, K) });
      }
      function F(y) {
        if (Dp(y) || g8(y)) return y;
        if (fn(y)) return U(y);
        if (je(y)) return q(y);
        if (Ge(y)) return I(y);
        if (en(y)) return B(y);
        if ($t(y)) return x(y);
        if (Ze(y)) return C(y);
        Xt(!1, "Unexpected type: " + Q(y));
      }
      function C(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[z.name]) !== null && ee !== void 0 ? ee : [];
        return new Ga({ ...z, fields: () => ({ ...lr(z.fields, (M) => ({ ...M, type: _(M.type) })), ...oe(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function x(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[y.name]) !== null && ee !== void 0 ? ee : [];
        return new xr({ ...z, values: { ...z.values, ...de(re) }, extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function U(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[z.name]) !== null && ee !== void 0 ? ee : [], M = z.specifiedByURL;
        for (let le of re) {
          var P;
          M = (P = Gp(le)) !== null && P !== void 0 ? P : M;
        }
        return new ur({ ...z, specifiedByURL: M, extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function q(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[z.name]) !== null && ee !== void 0 ? ee : [];
        return new pn({ ...z, interfaces: () => [...y.getInterfaces().map(L), ...ue(re)], fields: () => ({ ...lr(z.fields, S), ...J(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function I(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[z.name]) !== null && ee !== void 0 ? ee : [];
        return new Or({ ...z, interfaces: () => [...y.getInterfaces().map(L), ...ue(re)], fields: () => ({ ...lr(z.fields, S), ...J(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function B(y) {
        var ee;
        let z = y.toConfig(), re = (ee = l[z.name]) !== null && ee !== void 0 ? ee : [];
        return new Eo({ ...z, types: () => [...y.getTypes().map(L), ...Ie(re)], extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function S(y) {
        return { ...y, type: _(y.type), args: y.args && lr(y.args, K) };
      }
      function K(y) {
        return { ...y, type: _(y.type) };
      }
      function V(y) {
        let ee = {};
        for (let re of y) {
          var z;
          let M = (z = re.operationTypes) !== null && z !== void 0 ? z : [];
          for (let P of M) ee[P.operation] = xe(P.type);
        }
        return ee;
      }
      function xe(y) {
        var ee;
        let z = y.name.value, re = (ee = qp[z]) !== null && ee !== void 0 ? ee : p[z];
        if (re === void 0) throw new Error(`Unknown type: "${z}".`);
        return re;
      }
      function Z(y) {
        return y.kind === v.LIST_TYPE ? new Ft(Z(y.type)) : y.kind === v.NON_NULL_TYPE ? new Ce(Z(y.type)) : xe(y);
      }
      function G(y) {
        var ee;
        return new cr({ name: y.name.value, description: (ee = y.description) === null || ee === void 0 ? void 0 : ee.value, locations: y.locations.map(({ value: z }) => z), isRepeatable: y.repeatable, args: ne(y.arguments), astNode: y });
      }
      function J(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.fields) !== null && z !== void 0 ? z : [];
          for (let le of P) {
            var re;
            ee[le.name.value] = { type: Z(le.type), description: (re = le.description) === null || re === void 0 ? void 0 : re.value, args: ne(le.arguments), deprecationReason: To(le), astNode: le };
          }
        }
        return ee;
      }
      function ne(y) {
        let ee = y ?? [], z = /* @__PURE__ */ Object.create(null);
        for (let M of ee) {
          var re;
          let P = Z(M.type);
          z[M.name.value] = { type: P, description: (re = M.description) === null || re === void 0 ? void 0 : re.value, defaultValue: kr(M.defaultValue, P), deprecationReason: To(M), astNode: M };
        }
        return z;
      }
      function oe(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.fields) !== null && z !== void 0 ? z : [];
          for (let le of P) {
            var re;
            let _e = Z(le.type);
            ee[le.name.value] = { type: _e, description: (re = le.description) === null || re === void 0 ? void 0 : re.value, defaultValue: kr(le.defaultValue, _e), deprecationReason: To(le), astNode: le };
          }
        }
        return ee;
      }
      function de(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.values) !== null && z !== void 0 ? z : [];
          for (let le of P) {
            var re;
            ee[le.name.value] = { description: (re = le.description) === null || re === void 0 ? void 0 : re.value, deprecationReason: To(le), astNode: le };
          }
        }
        return ee;
      }
      function ue(y) {
        return y.flatMap((ee) => {
          var z, re;
          return (z = (re = ee.interfaces) === null || re === void 0 ? void 0 : re.map(xe)) !== null && z !== void 0 ? z : [];
        });
      }
      function Ie(y) {
        return y.flatMap((ee) => {
          var z, re;
          return (z = (re = ee.types) === null || re === void 0 ? void 0 : re.map(xe)) !== null && z !== void 0 ? z : [];
        });
      }
      function ke(y) {
        var ee;
        let z = y.name.value, re = (ee = l[z]) !== null && ee !== void 0 ? ee : [];
        switch (y.kind) {
          case v.OBJECT_TYPE_DEFINITION: {
            var M;
            let Se = [y, ...re];
            return new pn({ name: z, description: (M = y.description) === null || M === void 0 ? void 0 : M.value, interfaces: () => ue(Se), fields: () => J(Se), astNode: y, extensionASTNodes: re });
          }
          case v.INTERFACE_TYPE_DEFINITION: {
            var P;
            let Se = [y, ...re];
            return new Or({ name: z, description: (P = y.description) === null || P === void 0 ? void 0 : P.value, interfaces: () => ue(Se), fields: () => J(Se), astNode: y, extensionASTNodes: re });
          }
          case v.ENUM_TYPE_DEFINITION: {
            var le;
            let Se = [y, ...re];
            return new xr({ name: z, description: (le = y.description) === null || le === void 0 ? void 0 : le.value, values: de(Se), astNode: y, extensionASTNodes: re });
          }
          case v.UNION_TYPE_DEFINITION: {
            var _e;
            let Se = [y, ...re];
            return new Eo({ name: z, description: (_e = y.description) === null || _e === void 0 ? void 0 : _e.value, types: () => Ie(Se), astNode: y, extensionASTNodes: re });
          }
          case v.SCALAR_TYPE_DEFINITION: {
            var Xe;
            return new ur({ name: z, description: (Xe = y.description) === null || Xe === void 0 ? void 0 : Xe.value, specifiedByURL: Gp(y), astNode: y, extensionASTNodes: re });
          }
          case v.INPUT_OBJECT_TYPE_DEFINITION: {
            var Tt;
            let Se = [y, ...re];
            return new Ga({ name: z, description: (Tt = y.description) === null || Tt === void 0 ? void 0 : Tt.value, fields: () => oe(Se), astNode: y, extensionASTNodes: re, isOneOf: W6(y) });
          }
        }
      }
    }
    var qp = ni([...Do, ...bo], (e) => e.name);
    function To(e) {
      let t = Za(Uu, e);
      return t == null ? void 0 : t.reason;
    }
    function Gp(e) {
      let t = Za(dp, e);
      return t == null ? void 0 : t.url;
    }
    function W6(e) {
      return !!Za(hp, e);
    }
    function Hp(e, t) {
      e != null && e.kind === v.DOCUMENT || Re(!1, "Must provide valid Document AST."), (t == null ? void 0 : t.assumeValid) !== !0 && (t == null ? void 0 : t.assumeValidSDL) !== !0 && q6(e);
      let n = H6({ description: void 0, types: [], directives: [], extensions: /* @__PURE__ */ Object.create(null), extensionASTNodes: [], assumeValid: !1 }, e, t);
      if (n.astNode == null) for (let i of n.types) switch (i.name) {
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
      let r = [...n.directives, ...Qi.filter((i) => n.directives.every((a) => a.name !== i.name))];
      return new Bu({ ...n, directives: r });
    }
    function li(e) {
      let t = Object.keys(e), n = t.length, r = new Array(n);
      for (let i = 0; i < n; ++i) r[i] = e[t[i]];
      return r;
    }
    function Ye(e, t) {
      return Y6(t, Wp(e.string));
    }
    function Y6(e, t) {
      if (!t || t.trim() === "" || t.trim() === ":" || t.trim() === "{") return Xu(e, (r) => !r.isDeprecated);
      let n = e.map((r) => ({ proximity: z6(Wp(r.label), t), entry: r }));
      return Xu(Xu(n, (r) => r.proximity <= 2), (r) => !r.entry.isDeprecated).sort((r, i) => (r.entry.isDeprecated ? 1 : 0) - (i.entry.isDeprecated ? 1 : 0) || r.proximity - i.proximity || r.entry.label.length - i.entry.label.length).map((r) => r.entry);
    }
    function Xu(e, t) {
      let n = e.filter(t);
      return n.length === 0 ? e : n;
    }
    function Wp(e) {
      return e.toLowerCase().replaceAll(/\W/g, "");
    }
    function z6(e, t) {
      let n = X6(t, e);
      return e.length > t.length && (n -= e.length - t.length - 1, n += e.indexOf(t) === 0 ? 0 : 0.5), n;
    }
    function X6(e, t) {
      let n, r, i = [], a = e.length, s = t.length;
      for (n = 0; n <= a; n++) i[n] = [n];
      for (r = 1; r <= s; r++) i[0][r] = r;
      for (n = 1; n <= a; n++) for (r = 1; r <= s; r++) {
        let o = e[n - 1] === t[r - 1] ? 0 : 1;
        i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + o), n > 1 && r > 1 && e[n - 1] === t[r - 2] && e[n - 2] === t[r - 1] && (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + o));
      }
      return i[a][s];
    }
    var J6 = (e) => ` {
   $1
}`, wo = (e, t, n) => {
      if (!t) return n ?? e;
      let r = tt(t);
      return je(r) || Ze(r) || dt(r) || Kn(r) ? e + J6() : n ?? e;
    }, Yp = (e, t, n) => {
      if (dt(t)) {
        let r = tt(t.ofType);
        return e + `[${wo("", r, "$1")}]`;
      }
      return wo(e, t, n);
    }, Q6 = (e) => {
      let t = e.args.filter((n) => n.type.toString().endsWith("!"));
      if (t.length) return e.name + `(${t.map((n, r) => `${n.name}: $${r + 1}`)}) ${wo("", e.type, `
`)}`;
    }, zp;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(zp || (zp = {}));
    var Ju;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(Ju || (Ju = {}));
    var Xp;
    (function(e) {
      e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(Xp || (Xp = {}));
    var Ao;
    (function(e) {
      e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(Ao || (Ao = {}));
    var Fn;
    (function(e) {
      function t(r, i) {
        return r === Number.MAX_VALUE && (r = Ao.MAX_VALUE), i === Number.MAX_VALUE && (i = Ao.MAX_VALUE), { line: r, character: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.uinteger(i.line) && k.uinteger(i.character);
      }
      e.is = n;
    })(Fn || (Fn = {}));
    var rt;
    (function(e) {
      function t(r, i, a, s) {
        if (k.uinteger(r) && k.uinteger(i) && k.uinteger(a) && k.uinteger(s)) return { start: Fn.create(r, i), end: Fn.create(a, s) };
        if (Fn.is(r) && Fn.is(i)) return { start: r, end: i };
        throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${a}, ${s}]`);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && Fn.is(i.start) && Fn.is(i.end);
      }
      e.is = n;
    })(rt || (rt = {}));
    var So;
    (function(e) {
      function t(r, i) {
        return { uri: r, range: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.range) && (k.string(i.uri) || k.undefined(i.uri));
      }
      e.is = n;
    })(So || (So = {}));
    var Jp;
    (function(e) {
      function t(r, i, a, s) {
        return { targetUri: r, targetRange: i, targetSelectionRange: a, originSelectionRange: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.targetRange) && k.string(i.targetUri) && rt.is(i.targetSelectionRange) && (rt.is(i.originSelectionRange) || k.undefined(i.originSelectionRange));
      }
      e.is = n;
    })(Jp || (Jp = {}));
    var Qu;
    (function(e) {
      function t(r, i, a, s) {
        return { red: r, green: i, blue: a, alpha: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.numberRange(i.red, 0, 1) && k.numberRange(i.green, 0, 1) && k.numberRange(i.blue, 0, 1) && k.numberRange(i.alpha, 0, 1);
      }
      e.is = n;
    })(Qu || (Qu = {}));
    var Qp;
    (function(e) {
      function t(r, i) {
        return { range: r, color: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.range) && Qu.is(i.color);
      }
      e.is = n;
    })(Qp || (Qp = {}));
    var Zp;
    (function(e) {
      function t(r, i, a) {
        return { label: r, textEdit: i, additionalTextEdits: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.string(i.label) && (k.undefined(i.textEdit) || ea.is(i)) && (k.undefined(i.additionalTextEdits) || k.typedArray(i.additionalTextEdits, ea.is));
      }
      e.is = n;
    })(Zp || (Zp = {}));
    var em;
    (function(e) {
      e.Comment = "comment", e.Imports = "imports", e.Region = "region";
    })(em || (em = {}));
    var tm;
    (function(e) {
      function t(r, i, a, s, o, l) {
        let u = { startLine: r, endLine: i };
        return k.defined(a) && (u.startCharacter = a), k.defined(s) && (u.endCharacter = s), k.defined(o) && (u.kind = o), k.defined(l) && (u.collapsedText = l), u;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.uinteger(i.startLine) && k.uinteger(i.startLine) && (k.undefined(i.startCharacter) || k.uinteger(i.startCharacter)) && (k.undefined(i.endCharacter) || k.uinteger(i.endCharacter)) && (k.undefined(i.kind) || k.string(i.kind));
      }
      e.is = n;
    })(tm || (tm = {}));
    var Zu;
    (function(e) {
      function t(r, i) {
        return { location: r, message: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && So.is(i.location) && k.string(i.message);
      }
      e.is = n;
    })(Zu || (Zu = {}));
    var nm;
    (function(e) {
      e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
    })(nm || (nm = {}));
    var rm;
    (function(e) {
      e.Unnecessary = 1, e.Deprecated = 2;
    })(rm || (rm = {}));
    var im;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && k.string(r.href);
      }
      e.is = t;
    })(im || (im = {}));
    var Lo;
    (function(e) {
      function t(r, i, a, s, o, l) {
        let u = { range: r, message: i };
        return k.defined(a) && (u.severity = a), k.defined(s) && (u.code = s), k.defined(o) && (u.source = o), k.defined(l) && (u.relatedInformation = l), u;
      }
      e.create = t;
      function n(r) {
        var i;
        let a = r;
        return k.defined(a) && rt.is(a.range) && k.string(a.message) && (k.number(a.severity) || k.undefined(a.severity)) && (k.integer(a.code) || k.string(a.code) || k.undefined(a.code)) && (k.undefined(a.codeDescription) || k.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (k.string(a.source) || k.undefined(a.source)) && (k.undefined(a.relatedInformation) || k.typedArray(a.relatedInformation, Zu.is));
      }
      e.is = n;
    })(Lo || (Lo = {}));
    var Zi;
    (function(e) {
      function t(r, i, ...a) {
        let s = { title: r, command: i };
        return k.defined(a) && a.length > 0 && (s.arguments = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.string(i.title) && k.string(i.command);
      }
      e.is = n;
    })(Zi || (Zi = {}));
    var ea;
    (function(e) {
      function t(a, s) {
        return { range: a, newText: s };
      }
      e.replace = t;
      function n(a, s) {
        return { range: { start: a, end: a }, newText: s };
      }
      e.insert = n;
      function r(a) {
        return { range: a, newText: "" };
      }
      e.del = r;
      function i(a) {
        let s = a;
        return k.objectLiteral(s) && k.string(s.newText) && rt.is(s.range);
      }
      e.is = i;
    })(ea || (ea = {}));
    var e1;
    (function(e) {
      function t(r, i, a) {
        let s = { label: r };
        return i !== void 0 && (s.needsConfirmation = i), a !== void 0 && (s.description = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.string(i.label) && (k.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (k.string(i.description) || i.description === void 0);
      }
      e.is = n;
    })(e1 || (e1 = {}));
    var ta;
    (function(e) {
      function t(n) {
        let r = n;
        return k.string(r);
      }
      e.is = t;
    })(ta || (ta = {}));
    var am;
    (function(e) {
      function t(a, s, o) {
        return { range: a, newText: s, annotationId: o };
      }
      e.replace = t;
      function n(a, s, o) {
        return { range: { start: a, end: a }, newText: s, annotationId: o };
      }
      e.insert = n;
      function r(a, s) {
        return { range: a, newText: "", annotationId: s };
      }
      e.del = r;
      function i(a) {
        let s = a;
        return ea.is(s) && (e1.is(s.annotationId) || ta.is(s.annotationId));
      }
      e.is = i;
    })(am || (am = {}));
    var t1;
    (function(e) {
      function t(r, i) {
        return { textDocument: r, edits: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && s1.is(i.textDocument) && Array.isArray(i.edits);
      }
      e.is = n;
    })(t1 || (t1 = {}));
    var n1;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "create", uri: r };
        return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "create" && k.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ta.is(i.annotationId));
      }
      e.is = n;
    })(n1 || (n1 = {}));
    var r1;
    (function(e) {
      function t(r, i, a, s) {
        let o = { kind: "rename", oldUri: r, newUri: i };
        return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (o.options = a), s !== void 0 && (o.annotationId = s), o;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "rename" && k.string(i.oldUri) && k.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ta.is(i.annotationId));
      }
      e.is = n;
    })(r1 || (r1 = {}));
    var i1;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "delete", uri: r };
        return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "delete" && k.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || k.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || k.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || ta.is(i.annotationId));
      }
      e.is = n;
    })(i1 || (i1 = {}));
    var a1;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => k.string(i.kind) ? n1.is(i) || r1.is(i) || i1.is(i) : t1.is(i)));
      }
      e.is = t;
    })(a1 || (a1 = {}));
    var sm;
    (function(e) {
      function t(r) {
        return { uri: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.string(i.uri);
      }
      e.is = n;
    })(sm || (sm = {}));
    var om;
    (function(e) {
      function t(r, i) {
        return { uri: r, version: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.string(i.uri) && k.integer(i.version);
      }
      e.is = n;
    })(om || (om = {}));
    var s1;
    (function(e) {
      function t(r, i) {
        return { uri: r, version: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.string(i.uri) && (i.version === null || k.integer(i.version));
      }
      e.is = n;
    })(s1 || (s1 = {}));
    var lm;
    (function(e) {
      function t(r, i, a, s) {
        return { uri: r, languageId: i, version: a, text: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.string(i.uri) && k.string(i.languageId) && k.integer(i.version) && k.string(i.text);
      }
      e.is = n;
    })(lm || (lm = {}));
    var o1;
    (function(e) {
      e.PlainText = "plaintext", e.Markdown = "markdown";
      function t(n) {
        let r = n;
        return r === e.PlainText || r === e.Markdown;
      }
      e.is = t;
    })(o1 || (o1 = {}));
    var es;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(n) && o1.is(r.kind) && k.string(r.value);
      }
      e.is = t;
    })(es || (es = {}));
    var um;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(um || (um = {}));
    var na;
    (function(e) {
      e.PlainText = 1, e.Snippet = 2;
    })(na || (na = {}));
    var cm;
    (function(e) {
      e.Deprecated = 1;
    })(cm || (cm = {}));
    var dm;
    (function(e) {
      function t(r, i, a) {
        return { newText: r, insert: i, replace: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.newText) && rt.is(i.insert) && rt.is(i.replace);
      }
      e.is = n;
    })(dm || (dm = {}));
    var ui;
    (function(e) {
      e.asIs = 1, e.adjustIndentation = 2;
    })(ui || (ui = {}));
    var hm;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (k.string(r.detail) || r.detail === void 0) && (k.string(r.description) || r.description === void 0);
      }
      e.is = t;
    })(hm || (hm = {}));
    var fm;
    (function(e) {
      function t(n) {
        return { label: n };
      }
      e.create = t;
    })(fm || (fm = {}));
    var pm;
    (function(e) {
      function t(n, r) {
        return { items: n || [], isIncomplete: !!r };
      }
      e.create = t;
    })(pm || (pm = {}));
    var Fo;
    (function(e) {
      function t(r) {
        return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      e.fromPlainText = t;
      function n(r) {
        let i = r;
        return k.string(i) || k.objectLiteral(i) && k.string(i.language) && k.string(i.value);
      }
      e.is = n;
    })(Fo || (Fo = {}));
    var mm;
    (function(e) {
      function t(n) {
        let r = n;
        return !!r && k.objectLiteral(r) && (es.is(r.contents) || Fo.is(r.contents) || k.typedArray(r.contents, Fo.is)) && (n.range === void 0 || rt.is(n.range));
      }
      e.is = t;
    })(mm || (mm = {}));
    var gm;
    (function(e) {
      function t(n, r) {
        return r ? { label: n, documentation: r } : { label: n };
      }
      e.create = t;
    })(gm || (gm = {}));
    var Em;
    (function(e) {
      function t(n, r, ...i) {
        let a = { label: n };
        return k.defined(r) && (a.documentation = r), k.defined(i) ? a.parameters = i : a.parameters = [], a;
      }
      e.create = t;
    })(Em || (Em = {}));
    var _m;
    (function(e) {
      e.Text = 1, e.Read = 2, e.Write = 3;
    })(_m || (_m = {}));
    var Dm;
    (function(e) {
      function t(n, r) {
        let i = { range: n };
        return k.number(r) && (i.kind = r), i;
      }
      e.create = t;
    })(Dm || (Dm = {}));
    var vm;
    (function(e) {
      e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
    })(vm || (vm = {}));
    var bm;
    (function(e) {
      e.Deprecated = 1;
    })(bm || (bm = {}));
    var ym;
    (function(e) {
      function t(n, r, i, a, s) {
        let o = { name: n, kind: r, location: { uri: a, range: i } };
        return s && (o.containerName = s), o;
      }
      e.create = t;
    })(ym || (ym = {}));
    var Nm;
    (function(e) {
      function t(n, r, i, a) {
        return a !== void 0 ? { name: n, kind: r, location: { uri: i, range: a } } : { name: n, kind: r, location: { uri: i } };
      }
      e.create = t;
    })(Nm || (Nm = {}));
    var Cm;
    (function(e) {
      function t(r, i, a, s, o, l) {
        let u = { name: r, detail: i, kind: a, range: s, selectionRange: o };
        return l !== void 0 && (u.children = l), u;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.name) && k.number(i.kind) && rt.is(i.range) && rt.is(i.selectionRange) && (i.detail === void 0 || k.string(i.detail)) && (i.deprecated === void 0 || k.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
      }
      e.is = n;
    })(Cm || (Cm = {}));
    var Tm;
    (function(e) {
      e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
    })(Tm || (Tm = {}));
    var Io;
    (function(e) {
      e.Invoked = 1, e.Automatic = 2;
    })(Io || (Io = {}));
    var wm;
    (function(e) {
      function t(r, i, a) {
        let s = { diagnostics: r };
        return i != null && (s.only = i), a != null && (s.triggerKind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.typedArray(i.diagnostics, Lo.is) && (i.only === void 0 || k.typedArray(i.only, k.string)) && (i.triggerKind === void 0 || i.triggerKind === Io.Invoked || i.triggerKind === Io.Automatic);
      }
      e.is = n;
    })(wm || (wm = {}));
    var Am;
    (function(e) {
      function t(r, i, a) {
        let s = { title: r }, o = !0;
        return typeof i == "string" ? (o = !1, s.kind = i) : Zi.is(i) ? s.command = i : s.edit = i, o && a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.title) && (i.diagnostics === void 0 || k.typedArray(i.diagnostics, Lo.is)) && (i.kind === void 0 || k.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Zi.is(i.command)) && (i.isPreferred === void 0 || k.boolean(i.isPreferred)) && (i.edit === void 0 || a1.is(i.edit));
      }
      e.is = n;
    })(Am || (Am = {}));
    var Sm;
    (function(e) {
      function t(r, i) {
        let a = { range: r };
        return k.defined(i) && (a.data = i), a;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rt.is(i.range) && (k.undefined(i.command) || Zi.is(i.command));
      }
      e.is = n;
    })(Sm || (Sm = {}));
    var Lm;
    (function(e) {
      function t(r, i) {
        return { tabSize: r, insertSpaces: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.uinteger(i.tabSize) && k.boolean(i.insertSpaces);
      }
      e.is = n;
    })(Lm || (Lm = {}));
    var Fm;
    (function(e) {
      function t(r, i, a) {
        return { range: r, target: i, data: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rt.is(i.range) && (k.undefined(i.target) || k.string(i.target));
      }
      e.is = n;
    })(Fm || (Fm = {}));
    var Im;
    (function(e) {
      function t(r, i) {
        return { range: r, parent: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.range) && (i.parent === void 0 || e.is(i.parent));
      }
      e.is = n;
    })(Im || (Im = {}));
    var Rm;
    (function(e) {
      e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
    })(Rm || (Rm = {}));
    var Om;
    (function(e) {
      e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
    })(Om || (Om = {}));
    var xm;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
      }
      e.is = t;
    })(xm || (xm = {}));
    var km;
    (function(e) {
      function t(r, i) {
        return { range: r, text: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i != null && rt.is(i.range) && k.string(i.text);
      }
      e.is = n;
    })(km || (km = {}));
    var Mm;
    (function(e) {
      function t(r, i, a) {
        return { range: r, variableName: i, caseSensitiveLookup: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i != null && rt.is(i.range) && k.boolean(i.caseSensitiveLookup) && (k.string(i.variableName) || i.variableName === void 0);
      }
      e.is = n;
    })(Mm || (Mm = {}));
    var Um;
    (function(e) {
      function t(r, i) {
        return { range: r, expression: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i != null && rt.is(i.range) && (k.string(i.expression) || i.expression === void 0);
      }
      e.is = n;
    })(Um || (Um = {}));
    var Pm;
    (function(e) {
      function t(r, i) {
        return { frameId: r, stoppedLocation: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rt.is(r.stoppedLocation);
      }
      e.is = n;
    })(Pm || (Pm = {}));
    var l1;
    (function(e) {
      e.Type = 1, e.Parameter = 2;
      function t(n) {
        return n === 1 || n === 2;
      }
      e.is = t;
    })(l1 || (l1 = {}));
    var u1;
    (function(e) {
      function t(r) {
        return { value: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && (i.tooltip === void 0 || k.string(i.tooltip) || es.is(i.tooltip)) && (i.location === void 0 || So.is(i.location)) && (i.command === void 0 || Zi.is(i.command));
      }
      e.is = n;
    })(u1 || (u1 = {}));
    var Bm;
    (function(e) {
      function t(r, i, a) {
        let s = { position: r, label: i };
        return a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && Fn.is(i.position) && (k.string(i.label) || k.typedArray(i.label, u1.is)) && (i.kind === void 0 || l1.is(i.kind)) && i.textEdits === void 0 || k.typedArray(i.textEdits, ea.is) && (i.tooltip === void 0 || k.string(i.tooltip) || es.is(i.tooltip)) && (i.paddingLeft === void 0 || k.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || k.boolean(i.paddingRight));
      }
      e.is = n;
    })(Bm || (Bm = {}));
    var $m;
    (function(e) {
      function t(n) {
        return { kind: "snippet", value: n };
      }
      e.createSnippet = t;
    })($m || ($m = {}));
    var Vm;
    (function(e) {
      function t(n, r, i, a) {
        return { insertText: n, filterText: r, range: i, command: a };
      }
      e.create = t;
    })(Vm || (Vm = {}));
    var Km;
    (function(e) {
      function t(n) {
        return { items: n };
      }
      e.create = t;
    })(Km || (Km = {}));
    var jm;
    (function(e) {
      e.Invoked = 0, e.Automatic = 1;
    })(jm || (jm = {}));
    var qm;
    (function(e) {
      function t(n, r) {
        return { range: n, text: r };
      }
      e.create = t;
    })(qm || (qm = {}));
    var Gm;
    (function(e) {
      function t(n, r) {
        return { triggerKind: n, selectedCompletionInfo: r };
      }
      e.create = t;
    })(Gm || (Gm = {}));
    var Hm;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && Ju.is(r.uri) && k.string(r.name);
      }
      e.is = t;
    })(Hm || (Hm = {}));
    var Wm;
    (function(e) {
      function t(a, s, o, l) {
        return new Z6(a, s, o, l);
      }
      e.create = t;
      function n(a) {
        let s = a;
        return !!(k.defined(s) && k.string(s.uri) && (k.undefined(s.languageId) || k.string(s.languageId)) && k.uinteger(s.lineCount) && k.func(s.getText) && k.func(s.positionAt) && k.func(s.offsetAt));
      }
      e.is = n;
      function r(a, s) {
        let o = a.getText(), l = i(s, (c, d) => {
          let p = c.range.start.line - d.range.start.line;
          return p === 0 ? c.range.start.character - d.range.start.character : p;
        }), u = o.length;
        for (let c = l.length - 1; c >= 0; c--) {
          let d = l[c], p = a.offsetAt(d.range.start), m = a.offsetAt(d.range.end);
          if (m <= u) o = o.substring(0, p) + d.newText + o.substring(m, o.length);
          else throw new Error("Overlapping edit");
          u = p;
        }
        return o;
      }
      e.applyEdits = r;
      function i(a, s) {
        if (a.length <= 1) return a;
        let o = a.length / 2 | 0, l = a.slice(0, o), u = a.slice(o);
        i(l, s), i(u, s);
        let c = 0, d = 0, p = 0;
        for (; c < l.length && d < u.length; ) s(l[c], u[d]) <= 0 ? a[p++] = l[c++] : a[p++] = u[d++];
        for (; c < l.length; ) a[p++] = l[c++];
        for (; d < u.length; ) a[p++] = u[d++];
        return a;
      }
    })(Wm || (Wm = {}));
    var Z6 = class {
      constructor(e, t, n, r) {
        this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(e) {
        if (e) {
          let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
          return this._content.substring(t, n);
        }
        return this._content;
      }
      update(e, t) {
        this._content = e.text, this._version = t, this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          let e = [], t = this._content, n = !0;
          for (let r = 0; r < t.length; r++) {
            n && (e.push(r), n = !1);
            let i = t.charAt(r);
            n = i === "\r" || i === `
`, i === "\r" && r + 1 < t.length && t.charAt(r + 1) === `
` && r++;
          }
          n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
        }
        return this._lineOffsets;
      }
      positionAt(e) {
        e = Math.max(Math.min(e, this._content.length), 0);
        let t = this.getLineOffsets(), n = 0, r = t.length;
        if (r === 0) return Fn.create(0, e);
        for (; n < r; ) {
          let a = Math.floor((n + r) / 2);
          t[a] > e ? r = a : n = a + 1;
        }
        let i = n - 1;
        return Fn.create(i, e - t[i]);
      }
      offsetAt(e) {
        let t = this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        let n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
        return Math.max(Math.min(n + e.character, r), n);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    }, k;
    (function(e) {
      let t = Object.prototype.toString;
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
      function a(m) {
        return t.call(m) === "[object String]";
      }
      e.string = a;
      function s(m) {
        return t.call(m) === "[object Number]";
      }
      e.number = s;
      function o(m, g, _) {
        return t.call(m) === "[object Number]" && g <= m && m <= _;
      }
      e.numberRange = o;
      function l(m) {
        return t.call(m) === "[object Number]" && -2147483648 <= m && m <= 2147483647;
      }
      e.integer = l;
      function u(m) {
        return t.call(m) === "[object Number]" && 0 <= m && m <= 2147483647;
      }
      e.uinteger = u;
      function c(m) {
        return t.call(m) === "[object Function]";
      }
      e.func = c;
      function d(m) {
        return m !== null && typeof m == "object";
      }
      e.objectLiteral = d;
      function p(m, g) {
        return Array.isArray(m) && m.every(g);
      }
      e.typedArray = p;
    })(k || (k = {}));
    var c1 = class {
      constructor(e) {
        this._start = 0, this._pos = 0, this.getStartOfToken = () => this._start, this.getCurrentPosition = () => this._pos, this.eol = () => this._sourceText.length === this._pos, this.sol = () => this._pos === 0, this.peek = () => this._sourceText.charAt(this._pos) || null, this.next = () => {
          let t = this._sourceText.charAt(this._pos);
          return this._pos++, t;
        }, this.eat = (t) => {
          if (this._testNextCharacter(t)) return this._start = this._pos, this._pos++, this._sourceText.charAt(this._pos - 1);
        }, this.eatWhile = (t) => {
          let n = this._testNextCharacter(t), r = !1;
          for (n && (r = n, this._start = this._pos); n; ) this._pos++, n = this._testNextCharacter(t), r = !0;
          return r;
        }, this.eatSpace = () => this.eatWhile(/[\s\u00a0]/), this.skipToEnd = () => {
          this._pos = this._sourceText.length;
        }, this.skipTo = (t) => {
          this._pos = t;
        }, this.match = (t, n = !0, r = !1) => {
          let i = null, a = null;
          return typeof t == "string" ? (a = new RegExp(t, r ? "i" : "g").test(this._sourceText.slice(this._pos, this._pos + t.length)), i = t) : t instanceof RegExp && (a = this._sourceText.slice(this._pos).match(t), i = a == null ? void 0 : a[0]), a != null && (typeof t == "string" || a instanceof Array && this._sourceText.startsWith(a[0], this._pos)) ? (n && (this._start = this._pos, i && i.length && (this._pos += i.length)), a) : !1;
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
    function it(e) {
      return { ofRule: e };
    }
    function Oe(e, t) {
      return { ofRule: e, isList: !0, separator: t };
    }
    function e_(e, t) {
      let n = e.match;
      return e.match = (r) => {
        let i = !1;
        return n && (i = n(r)), i && t.every((a) => a.match && !a.match(r));
      }, e;
    }
    function d1(e, t) {
      return { style: t, match: (n) => n.kind === e };
    }
    function be(e, t) {
      return { style: t || "punctuation", match: (n) => n.kind === "Punctuation" && n.value === e };
    }
    var t_ = (e) => e === " " || e === "	" || e === "," || e === `
` || e === "\r" || e === "\uFEFF" || e === " ", n_ = { Name: /^[_A-Za-z][_0-9A-Za-z]*/, Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/, Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/, String: /^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/, Comment: /^#.*/ }, r_ = { Document: [Oe("Definition")], Definition(e) {
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
          return v.FRAGMENT_DEFINITION;
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
    }, ShortQuery: ["SelectionSet"], Query: [It("query"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], Mutation: [It("mutation"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], Subscription: [It("subscription"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], VariableDefinitions: [be("("), Oe("VariableDefinition"), be(")")], VariableDefinition: ["Variable", be(":"), "Type", it("DefaultValue")], Variable: [be("$", "variable"), He("variable")], DefaultValue: [be("="), "Value"], SelectionSet: [be("{"), Oe("Selection"), be("}")], Selection(e, t) {
      return e.value === "..." ? t.match(/[\s\u00a0,]*(on\b|@|{)/, !1) ? "InlineFragment" : "FragmentSpread" : t.match(/[\s\u00a0,]*:/, !1) ? "AliasedField" : "Field";
    }, AliasedField: [He("property"), be(":"), He("qualifier"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Field: [He("property"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Arguments: [be("("), Oe("Argument"), be(")")], Argument: [He("attribute"), be(":"), "Value"], FragmentSpread: [be("..."), He("def"), Oe("Directive")], InlineFragment: [be("..."), it("TypeCondition"), Oe("Directive"), "SelectionSet"], FragmentDefinition: [It("fragment"), it(e_(He("def"), [It("on")])), "TypeCondition", Oe("Directive"), "SelectionSet"], TypeCondition: [It("on"), "NamedType"], Value(e) {
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
    }, NumberValue: [d1("Number", "number")], StringValue: [{ style: "string", match: (e) => e.kind === "String", update(e, t) {
      t.value.startsWith('"""') && (e.inBlockstring = !t.value.slice(3).endsWith('"""'));
    } }], BooleanValue: [d1("Name", "builtin")], NullValue: [d1("Name", "keyword")], EnumValue: [He("string-2")], ListValue: [be("["), Oe("Value"), be("]")], ObjectValue: [be("{"), Oe("ObjectField"), be("}")], ObjectField: [He("attribute"), be(":"), "Value"], Type(e) {
      return e.value === "[" ? "ListType" : "NonNullType";
    }, ListType: [be("["), "Type", be("]"), it(be("!"))], NonNullType: ["NamedType", it(be("!"))], NamedType: [i_("atom")], Directive: [be("@", "meta"), He("meta"), it("Arguments")], DirectiveDef: [It("directive"), be("@", "meta"), He("meta"), it("ArgumentsDef"), It("on"), Oe("DirectiveLocation", be("|"))], InterfaceDef: [It("interface"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], Implements: [It("implements"), Oe("NamedType", be("&"))], DirectiveLocation: [He("string-2")], SchemaDef: [It("schema"), Oe("Directive"), be("{"), Oe("OperationTypeDef"), be("}")], OperationTypeDef: [He("keyword"), be(":"), He("atom")], ScalarDef: [It("scalar"), He("atom"), Oe("Directive")], ObjectTypeDef: [It("type"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], FieldDef: [He("property"), it("ArgumentsDef"), be(":"), "Type", Oe("Directive")], ArgumentsDef: [be("("), Oe("InputValueDef"), be(")")], InputValueDef: [He("attribute"), be(":"), "Type", it("DefaultValue"), Oe("Directive")], UnionDef: [It("union"), He("atom"), Oe("Directive"), be("="), Oe("UnionMember", be("|"))], UnionMember: ["NamedType"], EnumDef: [It("enum"), He("atom"), Oe("Directive"), be("{"), Oe("EnumValueDef"), be("}")], EnumValueDef: [He("string-2"), Oe("Directive")], InputDef: [It("input"), He("atom"), Oe("Directive"), be("{"), Oe("InputValueDef"), be("}")], ExtendDef: [It("extend"), "ExtensionDefinition"], ExtensionDefinition(e) {
      switch (e.value) {
        case "schema":
          return v.SCHEMA_EXTENSION;
        case "scalar":
          return v.SCALAR_TYPE_EXTENSION;
        case "type":
          return v.OBJECT_TYPE_EXTENSION;
        case "interface":
          return v.INTERFACE_TYPE_EXTENSION;
        case "union":
          return v.UNION_TYPE_EXTENSION;
        case "enum":
          return v.ENUM_TYPE_EXTENSION;
        case "input":
          return v.INPUT_OBJECT_TYPE_EXTENSION;
      }
    }, [v.SCHEMA_EXTENSION]: ["SchemaDef"], [v.SCALAR_TYPE_EXTENSION]: ["ScalarDef"], [v.OBJECT_TYPE_EXTENSION]: ["ObjectTypeDef"], [v.INTERFACE_TYPE_EXTENSION]: ["InterfaceDef"], [v.UNION_TYPE_EXTENSION]: ["UnionDef"], [v.ENUM_TYPE_EXTENSION]: ["EnumDef"], [v.INPUT_OBJECT_TYPE_EXTENSION]: ["InputDef"] };
    function It(e) {
      return { style: "keyword", match: (t) => t.kind === "Name" && t.value === e };
    }
    function He(e) {
      return { style: e, match: (t) => t.kind === "Name", update(t, n) {
        t.name = n.value;
      } };
    }
    function i_(e) {
      return { style: e, match: (t) => t.kind === "Name", update(t, n) {
        var r;
        !((r = t.prevState) === null || r === void 0) && r.prevState && (t.name = n.value, t.prevState.prevState.type = n.value);
      } };
    }
    function Ym(e = { eatWhitespace: (t) => t.eatWhile(t_), lexRules: n_, parseRules: r_, editorConfig: {} }) {
      return { startState() {
        let t = { level: 0, step: 0, name: null, kind: null, type: null, rule: null, needsSeparator: !1, prevState: null };
        return ts(e.parseRules, t, v.DOCUMENT), t;
      }, token(t, n) {
        return a_(t, n, e);
      } };
    }
    function a_(e, t, n) {
      var r;
      if (t.inBlockstring) return e.match(/.*"""/) ? (t.inBlockstring = !1, "string") : (e.skipToEnd(), "string");
      let { lexRules: i, parseRules: a, eatWhitespace: s, editorConfig: o } = n;
      if (t.rule && t.rule.length === 0 ? f1(t) : t.needsAdvance && (t.needsAdvance = !1, p1(t, !0)), e.sol()) {
        let c = (o == null ? void 0 : o.tabSize) || 2;
        t.indentLevel = Math.floor(e.indentation() / c);
      }
      if (s(e)) return "ws";
      let l = o_(i, e);
      if (!l) return e.match(/\S+/) || e.match(/\s/), ts(h1, t, "Invalid"), "invalidchar";
      if (l.kind === "Comment") return ts(h1, t, "Comment"), "comment";
      let u = zm({}, t);
      if (l.kind === "Punctuation") {
        if (/^[{([]/.test(l.value)) t.indentLevel !== void 0 && (t.levels = (t.levels || []).concat(t.indentLevel + 1));
        else if (/^[})\]]/.test(l.value)) {
          let c = t.levels = (t.levels || []).slice(0, -1);
          t.indentLevel && c.length > 0 && c.at(-1) < t.indentLevel && (t.indentLevel = c.at(-1));
        }
      }
      for (; t.rule; ) {
        let c = typeof t.rule == "function" ? t.step === 0 ? t.rule(l, e) : null : t.rule[t.step];
        if (t.needsSeparator && (c = c == null ? void 0 : c.separator), c) {
          if (c.ofRule && (c = c.ofRule), typeof c == "string") {
            ts(a, t, c);
            continue;
          }
          if (!((r = c.match) === null || r === void 0) && r.call(c, l)) return c.update && c.update(t, l), l.kind === "Punctuation" ? p1(t, !0) : t.needsAdvance = !0, c.style;
        }
        s_(t);
      }
      return zm(t, u), ts(h1, t, "Invalid"), "invalidchar";
    }
    function zm(e, t) {
      let n = Object.keys(t);
      for (let r = 0; r < n.length; r++) e[n[r]] = t[n[r]];
      return e;
    }
    var h1 = { Invalid: [], Comment: [] };
    function ts(e, t, n) {
      if (!e[n]) throw new TypeError("Unknown rule: " + n);
      t.prevState = Object.assign({}, t), t.kind = n, t.name = null, t.type = null, t.rule = e[n], t.step = 0, t.needsSeparator = !1;
    }
    function f1(e) {
      e.prevState && (e.kind = e.prevState.kind, e.name = e.prevState.name, e.type = e.prevState.type, e.rule = e.prevState.rule, e.step = e.prevState.step, e.needsSeparator = e.prevState.needsSeparator, e.prevState = e.prevState.prevState);
    }
    function p1(e, t) {
      var n;
      if (Xm(e) && e.rule) {
        let r = e.rule[e.step];
        if (r.separator) {
          let { separator: i } = r;
          if (e.needsSeparator = !e.needsSeparator, !e.needsSeparator && i.ofRule) return;
        }
        if (t) return;
      }
      for (e.needsSeparator = !1, e.step++; e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length); ) f1(e), e.rule && (Xm(e) ? !((n = e.rule) === null || n === void 0) && n[e.step].separator && (e.needsSeparator = !e.needsSeparator) : (e.needsSeparator = !1, e.step++));
    }
    function Xm(e) {
      let t = Array.isArray(e.rule) && typeof e.rule[e.step] != "string" && e.rule[e.step];
      return t && t.isList;
    }
    function s_(e) {
      for (; e.rule && !(Array.isArray(e.rule) && e.rule[e.step].ofRule); ) f1(e);
      e.rule && p1(e, !1);
    }
    function o_(e, t) {
      let n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        let i = t.match(e[n[r]]);
        if (i && i instanceof Array) return { kind: n[r], value: i[0] };
      }
    }
    function Ro(e, t) {
      let n = e.split(`
`), r = Ym(), i = r.startState(), a = "", s = new c1("");
      for (let o = 0; o < n.length; o++) {
        for (s = new c1(n[o]); !s.eol() && (a = r.token(s, i), t(s, i, a, o) !== "BREAK"); ) ;
        t(s, i, a, o), i.kind || (i = r.startState());
      }
      return { start: s.getStartOfToken(), end: s.getCurrentPosition(), string: s.current(), state: i, style: a };
    }
    var Mr;
    (function(e) {
      e.TYPE_SYSTEM = "TYPE_SYSTEM", e.EXECUTABLE = "EXECUTABLE", e.UNKNOWN = "UNKNOWN";
    })(Mr || (Mr = {}));
    var l_ = [v.SCHEMA_DEFINITION, v.OPERATION_TYPE_DEFINITION, v.SCALAR_TYPE_DEFINITION, v.OBJECT_TYPE_DEFINITION, v.INTERFACE_TYPE_DEFINITION, v.UNION_TYPE_DEFINITION, v.ENUM_TYPE_DEFINITION, v.INPUT_OBJECT_TYPE_DEFINITION, v.DIRECTIVE_DEFINITION, v.SCHEMA_EXTENSION, v.SCALAR_TYPE_EXTENSION, v.OBJECT_TYPE_EXTENSION, v.INTERFACE_TYPE_EXTENSION, v.UNION_TYPE_EXTENSION, v.ENUM_TYPE_EXTENSION, v.INPUT_OBJECT_TYPE_EXTENSION], u_ = (e) => {
      let t = Mr.UNKNOWN;
      if (e) try {
        Rr(ho(e), { enter(n) {
          if (n.kind === "Document") {
            t = Mr.EXECUTABLE;
            return;
          }
          return l_.includes(n.kind) ? (t = Mr.TYPE_SYSTEM, Yi) : !1;
        } });
      } catch {
        return t;
      }
      return t;
    };
    function c_(e, t) {
      return t != null && t.endsWith(".graphqls") ? Mr.TYPE_SYSTEM : u_(e);
    }
    function d_(e, t, n = 0) {
      let r = null, i = null, a = null, s = Ro(e, (o, l, u, c) => {
        if (!(c !== t.line || o.getCurrentPosition() + n < t.character + 1)) return r = u, i = Object.assign({}, l), a = o.current(), "BREAK";
      });
      return { start: s.start, end: s.end, string: a || s.string, state: i || s.state, style: r || s.style };
    }
    function Jm(e, t, n, r, i) {
      let a = d_(e, t, 1);
      if (!a) return null;
      let s = a.state.kind === "Invalid" ? a.state.prevState : a.state;
      if (!s) return null;
      let o = f_(n, a.state), l = (i == null ? void 0 : i.mode) || c_(e, i == null ? void 0 : i.uri);
      return { token: a, state: s, typeInfo: o, mode: l };
    }
    function Qm(e, t, n) {
      return n === Ya.name && e.getQueryType() === t ? Ya : n === za.name && e.getQueryType() === t ? za : n === Xa.name && nn(t) ? Xa : "getFields" in t ? t.getFields()[n] : null;
    }
    function Zm(e, t) {
      let n = [], r = e;
      for (; r != null && r.kind; ) n.push(r), r = r.prevState;
      for (let i = n.length - 1; i >= 0; i--) t(n[i]);
    }
    function h_(e) {
      let t;
      return Zm(e, (n) => {
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
    function f_(e, t) {
      let n, r, i, a, s, o, l, u, c, d, p;
      return Zm(t, (m) => {
        var g;
        switch (m.kind) {
          case X.QUERY:
          case "ShortQuery":
            d = e.getQueryType();
            break;
          case X.MUTATION:
            d = e.getMutationType();
            break;
          case X.SUBSCRIPTION:
            d = e.getSubscriptionType();
            break;
          case X.INLINE_FRAGMENT:
          case X.FRAGMENT_DEFINITION:
            m.type && (d = e.getType(m.type));
            break;
          case X.FIELD:
          case X.ALIASED_FIELD: {
            !d || !m.name ? s = null : (s = c ? Qm(e, c, m.name) : null, d = s ? s.type : null);
            break;
          }
          case X.SELECTION_SET:
            c = tt(d);
            break;
          case X.DIRECTIVE:
            i = m.name ? e.getDirective(m.name) : null;
            break;
          case X.INTERFACE_DEF:
            m.name && (l = null, p = new Or({ name: m.name, interfaces: [], fields: {} }));
            break;
          case X.OBJECT_TYPE_DEF:
            m.name && (p = null, l = new pn({ name: m.name, interfaces: [], fields: {} }));
            break;
          case X.ARGUMENTS: {
            if (m.prevState) switch (m.prevState.kind) {
              case X.FIELD:
                r = s && s.args;
                break;
              case X.DIRECTIVE:
                r = i && i.args;
                break;
              case X.ALIASED_FIELD: {
                let C = (g = m.prevState) === null || g === void 0 ? void 0 : g.name;
                if (!C) {
                  r = null;
                  break;
                }
                let x = c ? Qm(e, c, C) : null;
                if (!x) {
                  r = null;
                  break;
                }
                r = x.args;
                break;
              }
              default:
                r = null;
                break;
            }
            else r = null;
            break;
          }
          case X.ARGUMENT:
            if (r) {
              for (let C = 0; C < r.length; C++) if (r[C].name === m.name) {
                n = r[C];
                break;
              }
            }
            o = n == null ? void 0 : n.type;
            break;
          case X.VARIABLE_DEFINITION:
          case X.VARIABLE:
            d = o;
            break;
          case X.ENUM_VALUE:
            let _ = tt(o);
            a = _ instanceof xr ? _.getValues().find((C) => C.value === m.name) : null;
            break;
          case X.LIST_VALUE:
            let L = Ou(o);
            o = L instanceof Ft ? L.ofType : null;
            break;
          case X.OBJECT_VALUE:
            let A = tt(o);
            u = A instanceof Ga ? A.getFields() : null;
            break;
          case X.OBJECT_FIELD:
            let F = m.name && u ? u[m.name] : null;
            o = F == null ? void 0 : F.type, s = F, d = s ? s.type : null;
            break;
          case X.NAMED_TYPE:
            m.name && (d = e.getType(m.name));
            break;
        }
      }), { argDef: n, argDefs: r, directiveDef: i, enumValue: a, fieldDef: s, inputType: o, objectFieldDefs: u, parentType: c, type: d, interfaceDef: p, objectTypeDef: l };
    }
    var p_ = { ALIASED_FIELD: "AliasedField", ARGUMENTS: "Arguments", SHORT_QUERY: "ShortQuery", QUERY: "Query", MUTATION: "Mutation", SUBSCRIPTION: "Subscription", TYPE_CONDITION: "TypeCondition", INVALID: "Invalid", COMMENT: "Comment", SCHEMA_DEF: "SchemaDef", SCALAR_DEF: "ScalarDef", OBJECT_TYPE_DEF: "ObjectTypeDef", OBJECT_VALUE: "ObjectValue", LIST_VALUE: "ListValue", INTERFACE_DEF: "InterfaceDef", UNION_DEF: "UnionDef", ENUM_DEF: "EnumDef", ENUM_VALUE: "EnumValue", FIELD_DEF: "FieldDef", INPUT_DEF: "InputDef", INPUT_VALUE_DEF: "InputValueDef", ARGUMENTS_DEF: "ArgumentsDef", EXTEND_DEF: "ExtendDef", EXTENSION_DEFINITION: "ExtensionDefinition", DIRECTIVE_DEF: "DirectiveDef", IMPLEMENTS: "Implements", VARIABLE_DEFINITIONS: "VariableDefinitions", TYPE: "Type", VARIABLE: "Variable" }, X = Object.assign(Object.assign({}, v), p_), we;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(we || (we = {}));
    var m1 = { command: "editor.action.triggerSuggest", title: "Suggestions" }, m_ = (e) => {
      let t = [];
      if (e) try {
        Rr(ho(e), { FragmentDefinition(n) {
          t.push(n);
        } });
      } catch {
        return [];
      }
      return t;
    };
    function g_(e, t, n, r, i, a) {
      var s;
      let o = Object.assign(Object.assign({}, a), { schema: e }), l = Jm(t, n, e, r, a);
      if (!l) return [];
      let { state: u, typeInfo: c, mode: d, token: p } = l, { kind: m, step: g, prevState: _ } = u;
      if (m === X.DOCUMENT) return d === Mr.TYPE_SYSTEM ? E_(p) : d === Mr.EXECUTABLE ? __(p) : D_(p);
      if (m === X.EXTEND_DEF) return v_(p);
      if (((s = _ == null ? void 0 : _.prevState) === null || s === void 0 ? void 0 : s.kind) === X.EXTENSION_DEFINITION && u.name) return Ye(p, []);
      if ((_ == null ? void 0 : _.kind) === v.SCALAR_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(fn).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((A) => je(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.INTERFACE_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ge).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.UNION_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(en).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.ENUM_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((A) => $t(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.INPUT_OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ze).map((A) => ({ label: A.name, kind: we.Function })));
      if (m === X.IMPLEMENTS || m === X.NAMED_TYPE && (_ == null ? void 0 : _.kind) === X.IMPLEMENTS) return N_(p, u, e, t, c);
      if (m === X.SELECTION_SET || m === X.FIELD || m === X.ALIASED_FIELD) return b_(p, c, o);
      if (m === X.ARGUMENTS || m === X.ARGUMENT && g === 0) {
        let { argDefs: A } = c;
        if (A) return Ye(p, A.map((F) => {
          var C;
          return { label: F.name, insertText: Yp(F.name + ": ", F.type), insertTextMode: ui.adjustIndentation, insertTextFormat: na.Snippet, command: m1, labelDetails: { detail: " " + String(F.type) }, documentation: (C = F.description) !== null && C !== void 0 ? C : void 0, kind: we.Variable, type: F.type };
        }));
      }
      if ((m === X.OBJECT_VALUE || m === X.OBJECT_FIELD && g === 0) && c.objectFieldDefs) {
        let A = li(c.objectFieldDefs), F = m === X.OBJECT_VALUE ? we.Value : we.Field;
        return Ye(p, A.map((C) => {
          var x;
          return { label: C.name, detail: String(C.type), documentation: (x = C == null ? void 0 : C.description) !== null && x !== void 0 ? x : void 0, kind: F, type: C.type, insertText: Yp(C.name + ": ", C.type), insertTextMode: ui.adjustIndentation, insertTextFormat: na.Snippet, command: m1 };
        }));
      }
      if (m === X.ENUM_VALUE || m === X.LIST_VALUE && g === 1 || m === X.OBJECT_FIELD && g === 2 || m === X.ARGUMENT && g === 2) return y_(p, c, t, e);
      if (m === X.VARIABLE && g === 1) {
        let A = tt(c.inputType), F = t2(t, e, p);
        return Ye(p, F.filter((C) => C.detail === (A == null ? void 0 : A.name)));
      }
      if (m === X.TYPE_CONDITION && g === 1 || m === X.NAMED_TYPE && _ != null && _.kind === X.TYPE_CONDITION) return C_(p, c, e);
      if (m === X.FRAGMENT_SPREAD && g === 1) return T_(p, c, e, t, Array.isArray(i) ? i : m_(i));
      let L = n2(u);
      return L.kind === X.FIELD_DEF ? Ye(p, Object.values(e.getTypeMap()).filter((A) => ai(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function, insertText: a != null && a.fillLeafsOnComplete ? A.name + `
` : A.name, insertTextMode: ui.adjustIndentation }))) : L.kind === X.INPUT_VALUE_DEF && g === 2 ? Ye(p, Object.values(e.getTypeMap()).filter((A) => tn(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function, insertText: a != null && a.fillLeafsOnComplete ? A.name + `
$1` : A.name, insertTextMode: ui.adjustIndentation, insertTextFormat: na.Snippet }))) : m === X.VARIABLE_DEFINITION && g === 2 || m === X.LIST_TYPE && g === 1 || m === X.NAMED_TYPE && _ && (_.kind === X.VARIABLE_DEFINITION || _.kind === X.LIST_TYPE || _.kind === X.NON_NULL_TYPE) ? S_(p, e) : m === X.DIRECTIVE ? L_(p, u, e) : m === X.DIRECTIVE_DEF ? F_(p, u, e) : [];
    }
    var g1 = [{ label: "type", kind: we.Function }, { label: "interface", kind: we.Function }, { label: "union", kind: we.Function }, { label: "input", kind: we.Function }, { label: "scalar", kind: we.Function }, { label: "schema", kind: we.Function }], e2 = [{ label: "query", kind: we.Function }, { label: "mutation", kind: we.Function }, { label: "subscription", kind: we.Function }, { label: "fragment", kind: we.Function }, { label: "{", kind: we.Constructor }];
    function E_(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...g1]);
    }
    function __(e) {
      return Ye(e, e2);
    }
    function D_(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...e2, ...g1]);
    }
    function v_(e) {
      return Ye(e, g1);
    }
    function b_(e, t, n) {
      var r;
      if (t.parentType) {
        let { parentType: i } = t, a = [];
        return "getFields" in i && (a = li(i.getFields())), nn(i) && a.push(Xa), i === ((r = n == null ? void 0 : n.schema) === null || r === void 0 ? void 0 : r.getQueryType()) && a.push(Ya, za), Ye(e, a.map((s, o) => {
          var l;
          let u = { sortText: String(o) + s.name, label: s.name, detail: String(s.type), documentation: (l = s.description) !== null && l !== void 0 ? l : void 0, deprecated: !!s.deprecationReason, isDeprecated: !!s.deprecationReason, deprecationReason: s.deprecationReason, kind: we.Field, labelDetails: { detail: " " + s.type.toString() }, type: s.type };
          return n != null && n.fillLeafsOnComplete && (u.insertText = Q6(s), u.insertText || (u.insertText = wo(s.name, s.type, s.name + (e.state.needsAdvance ? "" : `
`))), u.insertText && (u.insertTextFormat = na.Snippet, u.insertTextMode = ui.adjustIndentation, u.command = m1)), u;
        }));
      }
      return [];
    }
    function y_(e, t, n, r) {
      let i = tt(t.inputType), a = t2(n, r, e).filter((s) => s.detail === (i == null ? void 0 : i.name));
      if (i instanceof xr) {
        let s = i.getValues();
        return Ye(e, s.map((o) => {
          var l;
          return { label: o.name, detail: String(i), documentation: (l = o.description) !== null && l !== void 0 ? l : void 0, deprecated: !!o.deprecationReason, isDeprecated: !!o.deprecationReason, deprecationReason: o.deprecationReason, kind: we.EnumMember, type: i };
        }).concat(a));
      }
      return i === yt ? Ye(e, a.concat([{ label: "true", detail: String(yt), documentation: "Not false.", kind: we.Variable, type: yt }, { label: "false", detail: String(yt), documentation: "Not true.", kind: we.Variable, type: yt }])) : a;
    }
    function N_(e, t, n, r, i) {
      if (t.needsSeparator) return [];
      let a = n.getTypeMap(), s = li(a).filter(Ge), o = s.map(({ name: p }) => p), l = /* @__PURE__ */ new Set();
      Ro(r, (p, m) => {
        var g, _, L, A, F;
        if (m.name && (m.kind === X.INTERFACE_DEF && !o.includes(m.name) && l.add(m.name), m.kind === X.NAMED_TYPE && ((g = m.prevState) === null || g === void 0 ? void 0 : g.kind) === X.IMPLEMENTS)) {
          if (i.interfaceDef) {
            if (!((_ = i.interfaceDef) === null || _ === void 0) && _.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (L = i.interfaceDef) === null || L === void 0 ? void 0 : L.toConfig();
            i.interfaceDef = new Or(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Or({ name: m.name, fields: {} })] }));
          } else if (i.objectTypeDef) {
            if (!((A = i.objectTypeDef) === null || A === void 0) && A.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (F = i.objectTypeDef) === null || F === void 0 ? void 0 : F.toConfig();
            i.objectTypeDef = new pn(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Or({ name: m.name, fields: {} })] }));
          }
        }
      });
      let u = i.interfaceDef || i.objectTypeDef, c = ((u == null ? void 0 : u.getInterfaces()) || []).map(({ name: p }) => p), d = s.concat([...l].map((p) => ({ name: p }))).filter(({ name: p }) => p !== (u == null ? void 0 : u.name) && !c.includes(p));
      return Ye(e, d.map((p) => {
        let m = { label: p.name, kind: we.Interface, type: p };
        return p != null && p.description && (m.documentation = p.description), m;
      }));
    }
    function C_(e, t, n, r) {
      let i;
      if (t.parentType) if (Kn(t.parentType)) {
        let a = c8(t.parentType), s = n.getPossibleTypes(a), o = /* @__PURE__ */ Object.create(null);
        for (let l of s) for (let u of l.getInterfaces()) o[u.name] = u;
        i = s.concat(li(o));
      } else i = [t.parentType];
      else {
        let a = n.getTypeMap();
        i = li(a).filter((s) => nn(s) && !s.name.startsWith("__"));
      }
      return Ye(e, i.map((a) => {
        let s = tt(a);
        return { label: String(a), documentation: (s == null ? void 0 : s.description) || "", kind: we.Field };
      }));
    }
    function T_(e, t, n, r, i) {
      if (!r) return [];
      let a = n.getTypeMap(), s = h_(e.state), o = A_(r);
      i && i.length > 0 && o.push(...i);
      let l = o.filter((u) => a[u.typeCondition.name.value] && !(s && s.kind === X.FRAGMENT_DEFINITION && s.name === u.name.value) && nn(t.parentType) && nn(a[u.typeCondition.name.value]) && xu(n, t.parentType, a[u.typeCondition.name.value]));
      return Ye(e, l.map((u) => ({ label: u.name.value, detail: String(a[u.typeCondition.name.value]), documentation: `fragment ${u.name.value} on ${u.typeCondition.name.value}`, labelDetails: { detail: `fragment ${u.name.value} on ${u.typeCondition.name.value}` }, kind: we.Field, type: a[u.typeCondition.name.value] })));
    }
    var w_ = (e, t) => {
      var n, r, i, a, s, o, l, u, c, d;
      if (((n = e.prevState) === null || n === void 0 ? void 0 : n.kind) === t) return e.prevState;
      if (((i = (r = e.prevState) === null || r === void 0 ? void 0 : r.prevState) === null || i === void 0 ? void 0 : i.kind) === t) return e.prevState.prevState;
      if (((o = (s = (a = e.prevState) === null || a === void 0 ? void 0 : a.prevState) === null || s === void 0 ? void 0 : s.prevState) === null || o === void 0 ? void 0 : o.kind) === t) return e.prevState.prevState.prevState;
      if (((d = (c = (u = (l = e.prevState) === null || l === void 0 ? void 0 : l.prevState) === null || u === void 0 ? void 0 : u.prevState) === null || c === void 0 ? void 0 : c.prevState) === null || d === void 0 ? void 0 : d.kind) === t) return e.prevState.prevState.prevState.prevState;
    };
    function t2(e, t, n) {
      let r = null, i, a = /* @__PURE__ */ Object.create({});
      return Ro(e, (s, o) => {
        var l;
        if ((o == null ? void 0 : o.kind) === X.VARIABLE && o.name && (r = o.name), (o == null ? void 0 : o.kind) === X.NAMED_TYPE && r) {
          let u = w_(o, X.TYPE);
          u != null && u.type && (i = t.getType(u == null ? void 0 : u.type));
        }
        if (r && i && !a[r]) {
          let u = n.string === "$" || ((l = n == null ? void 0 : n.state) === null || l === void 0 ? void 0 : l.kind) === "Variable" ? r : "$" + r;
          a[r] = { detail: i.toString(), insertText: u, label: "$" + r, rawInsert: u, type: i, kind: we.Variable }, r = null, i = null;
        }
      }), li(a);
    }
    function A_(e) {
      let t = [];
      return Ro(e, (n, r) => {
        r.kind === X.FRAGMENT_DEFINITION && r.name && r.type && t.push({ kind: X.FRAGMENT_DEFINITION, name: { kind: v.NAME, value: r.name }, selectionSet: { kind: X.SELECTION_SET, selections: [] }, typeCondition: { kind: X.NAMED_TYPE, name: { kind: v.NAME, value: r.type } } });
      }), t;
    }
    function S_(e, t, n) {
      let r = t.getTypeMap(), i = li(r).filter(tn);
      return Ye(e, i.map((a) => ({ label: a.name, documentation: (a == null ? void 0 : a.description) || "", kind: we.Variable })));
    }
    function L_(e, t, n, r) {
      var i;
      if (!((i = t.prevState) === null || i === void 0) && i.kind) {
        let a = n.getDirectives().filter((s) => I_(t.prevState, s));
        return Ye(e, a.map((s) => ({ label: s.name, documentation: (s == null ? void 0 : s.description) || "", kind: we.Function })));
      }
      return [];
    }
    function F_(e, t, n, r) {
      let i = n.getDirectives().find((a) => a.name === t.name);
      return Ye(e, (i == null ? void 0 : i.args.map((a) => ({ label: a.name, documentation: a.description || "", kind: we.Field }))) || []);
    }
    function I_(e, t) {
      if (!(e != null && e.kind)) return !1;
      let { kind: n, prevState: r } = e, { locations: i } = t;
      switch (n) {
        case X.QUERY:
          return i.includes(se.QUERY);
        case X.MUTATION:
          return i.includes(se.MUTATION);
        case X.SUBSCRIPTION:
          return i.includes(se.SUBSCRIPTION);
        case X.FIELD:
        case X.ALIASED_FIELD:
          return i.includes(se.FIELD);
        case X.FRAGMENT_DEFINITION:
          return i.includes(se.FRAGMENT_DEFINITION);
        case X.FRAGMENT_SPREAD:
          return i.includes(se.FRAGMENT_SPREAD);
        case X.INLINE_FRAGMENT:
          return i.includes(se.INLINE_FRAGMENT);
        case X.SCHEMA_DEF:
          return i.includes(se.SCHEMA);
        case X.SCALAR_DEF:
          return i.includes(se.SCALAR);
        case X.OBJECT_TYPE_DEF:
          return i.includes(se.OBJECT);
        case X.FIELD_DEF:
          return i.includes(se.FIELD_DEFINITION);
        case X.INTERFACE_DEF:
          return i.includes(se.INTERFACE);
        case X.UNION_DEF:
          return i.includes(se.UNION);
        case X.ENUM_DEF:
          return i.includes(se.ENUM);
        case X.ENUM_VALUE:
          return i.includes(se.ENUM_VALUE);
        case X.INPUT_DEF:
          return i.includes(se.INPUT_OBJECT);
        case X.INPUT_VALUE_DEF:
          switch (r == null ? void 0 : r.kind) {
            case X.ARGUMENTS_DEF:
              return i.includes(se.ARGUMENT_DEFINITION);
            case X.INPUT_DEF:
              return i.includes(se.INPUT_FIELD_DEFINITION);
          }
      }
      return !1;
    }
    function n2(e) {
      return e.prevState && e.kind && [X.NAMED_TYPE, X.LIST_TYPE, X.TYPE, X.NON_NULL_TYPE].includes(e.kind) ? n2(e.prevState) : e;
    }
    $o(X2());
    function Vt(e, t) {
      e.push(t);
    }
    function E1(e, t) {
      Ue(t) ? (E1(e, t.ofType), Vt(e, "!")) : dt(t) ? (Vt(e, "["), E1(e, t.ofType), Vt(e, "]")) : Vt(e, t.name);
    }
    function Oo(e, t, n) {
      let r = [], i = "type" in e ? e.type : e;
      return "type" in e && e.description && (Vt(r, e.description), Vt(r, `

`)), Vt(r, R_(i, t)), n ? (Vt(r, `
`), Vt(r, n)) : !fn(i) && "description" in i && i.description ? (Vt(r, `
`), Vt(r, i.description)) : "ofType" in i && !fn(i.ofType) && "description" in i.ofType && i.ofType.description && (Vt(r, `
`), Vt(r, i.ofType.description)), r.join("");
    }
    function R_(e, t) {
      let n = [];
      return t && Vt(n, "```graphql\n"), E1(n, e), t && Vt(n, "\n```"), n.join("");
    }
    var O_ = { Int: { type: "integer" }, String: { type: "string" }, Float: { type: "number" }, ID: { type: "string" }, Boolean: { type: "boolean" }, DateTime: { type: "string" } }, x_ = class {
      constructor() {
        this.set = /* @__PURE__ */ new Set();
      }
      mark(e) {
        return this.set.has(e) ? !1 : (this.set.add(e), !0);
      }
    };
    function _1(e, t) {
      var n, r;
      let i = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null), s = "type" in e ? e.type : e, o = Ue(s) ? s.ofType : s, l = Ue(s);
      if (fn(o)) !((n = t == null ? void 0 : t.scalarSchemas) === null || n === void 0) && n[o.name] ? i = JSON.parse(JSON.stringify(t.scalarSchemas[o.name])) : i.type = ["string", "number", "boolean", "integer"], l || (Array.isArray(i.type) ? i.type.push("null") : i.type ? i.type = [i.type, "null"] : i.enum ? i.enum.push(null) : i.oneOf ? i.oneOf.push({ type: "null" }) : i = { oneOf: [i, { type: "null" }] });
      else if ($t(o)) i.enum = o.getValues().map((c) => c.name), l || i.enum.push(null);
      else if (dt(o)) {
        l ? i.type = "array" : i.type = ["array", "null"];
        let { definition: c, definitions: d } = _1(o.ofType, t);
        if (i.items = c, d) for (let p of Object.keys(d)) a[p] = d[p];
      } else if (Ze(o) && (l ? i.$ref = `#/definitions/${o.name}` : i.oneOf = [{ $ref: `#/definitions/${o.name}` }, { type: "null" }], !((r = t == null ? void 0 : t.definitionMarker) === null || r === void 0) && r.mark(o.name))) {
        let c = o.getFields(), d = { type: "object", properties: {}, required: [] };
        d.description = Oo(o), t != null && t.useMarkdownDescription && (d.markdownDescription = Oo(o, !0));
        for (let p of Object.keys(c)) {
          let m = c[p], { required: g, definition: _, definitions: L } = _1(m, t);
          if (d.properties[p] = _, g && d.required.push(p), L) for (let [A, F] of Object.entries(L)) a[A] = F;
        }
        a[o.name] = d;
      }
      "defaultValue" in e && e.defaultValue !== void 0 && (i.default = e.defaultValue);
      let { description: u } = i;
      return i.description = Oo(e, !1, u), t != null && t.useMarkdownDescription && (i.markdownDescription = Oo(e, !0, u)), { required: l, definition: i, definitions: a };
    }
    function k_(e, t) {
      var n;
      let r = { $schema: "http://json-schema.org/draft-04/schema", type: "object", properties: {}, required: [], additionalProperties: !1 }, i = Object.assign(Object.assign({}, t), { definitionMarker: new x_(), scalarSchemas: Object.assign(Object.assign({}, O_), t == null ? void 0 : t.scalarSchemas) });
      if (e) for (let [a, s] of Object.entries(e)) {
        let { definition: o, required: l, definitions: u } = _1(s, i);
        r.properties[a] = o, l && ((n = r.required) === null || n === void 0 || n.push(a)), u && (r.definitions = Object.assign(Object.assign({}, r == null ? void 0 : r.definitions), u));
      }
      return r;
    }
    var r2 = class {
      constructor(e, t) {
        this.containsPosition = (n) => this.start.line === n.line ? this.start.character <= n.character : this.end.line === n.line ? this.end.character >= n.character : this.start.line <= n.line && this.end.line >= n.line, this.start = e, this.end = t;
      }
      setStart(e, t) {
        this.start = new ci(e, t);
      }
      setEnd(e, t) {
        this.end = new ci(e, t);
      }
    }, ci = class {
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
    function M_(e, t, n, r, i) {
      let a = $p.filter((s) => !(s === Sp || s === Np || r));
      return n && Array.prototype.push.apply(a, n), Kp(e, t, a).filter((s) => {
        if (s.message.includes("Unknown directive") && s.nodes) {
          let o = s.nodes[0];
          if (o && o.kind === v.DIRECTIVE) {
            let l = o.name.value;
            if (l === "arguments" || l === "argumentDefinitions") return !1;
          }
        }
        return !0;
      });
    }
    function U_(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.definitions) if (r.kind === "OperationDefinition") {
        let { variableDefinitions: i } = r;
        if (i) for (let { variable: a, type: s } of i) {
          let o = rn(e, s);
          o ? n[a.name.value] = o : s.kind === v.NAMED_TYPE && s.name.value === "Float" && (n[a.name.value] = sp);
        }
      }
      return n;
    }
    function P_(e, t) {
      let n = t ? U_(t, e) : void 0, r = [];
      return Rr(e, { OperationDefinition(i) {
        r.push(i);
      } }), { variableToType: n, operations: r };
    }
    var i2 = { Error: "Error", Warning: "Warning" }, D1 = { [i2.Error]: 1, [i2.Warning]: 2 }, xo = (e, t) => {
      if (!e) throw new Error(t);
    };
    function B_(e, t = null, n, r, i) {
      var a, s;
      let o = null, l = "";
      i && (l = typeof i == "string" ? i : i.reduce((c, d) => c + Et(d) + `

`, ""));
      let u = l ? `${e}

${l}` : e;
      try {
        o = ho(u);
      } catch (c) {
        if (c instanceof Y) {
          let d = s2((s = (a = c.locations) === null || a === void 0 ? void 0 : a[0]) !== null && s !== void 0 ? s : { line: 0 }, u);
          return [{ severity: D1.Error, message: c.message, source: "GraphQL: Syntax", range: d }];
        }
        throw c;
      }
      return $_(o, t, n, r);
    }
    function $_(e, t = null, n, r) {
      if (!t) return [];
      let i = M_(t, e, n, r).flatMap((s) => a2(s, D1.Error, "Validation")), a = Kp(t, e, [G6]).flatMap((s) => a2(s, D1.Warning, "Deprecation"));
      return i.concat(a);
    }
    function a2(e, t, n) {
      if (!e.nodes) return [];
      let r = [];
      for (let [i, a] of e.nodes.entries()) {
        let s = a.kind !== "Variable" && "name" in a && a.name !== void 0 ? a.name : "variable" in a && a.variable !== void 0 ? a.variable : a;
        if (s) {
          xo(e.locations, "GraphQL validation error requires locations.");
          let o = e.locations[i], l = V_(s), u = o.column + (l.end - l.start);
          r.push({ source: `GraphQL: ${n}`, message: e.message, severity: t, range: new r2(new ci(o.line - 1, o.column - 1), new ci(o.line - 1, u)) });
        }
      }
      return r;
    }
    function s2(e, t) {
      let n = Ym(), r = n.startState(), i = t.split(`
`);
      xo(i.length >= e.line, "Query text must have more lines than where the error happened");
      let a = null;
      for (let u = 0; u < e.line; u++) for (a = new c1(i[u]); !a.eol() && n.token(a, r) !== "invalidchar"; ) ;
      xo(a, "Expected Parser stream to be available.");
      let s = e.line - 1, o = a.getStartOfToken(), l = a.getCurrentPosition();
      return new r2(new ci(s, o), new ci(s, l));
    }
    function V_(e) {
      let t = e.loc;
      return xo(t, "Expected ASTNode to have a location."), t;
    }
    function K_(e, t, n, r, i) {
      let a = Object.assign(Object.assign({}, i), { schema: e }), s = Jm(t, n, e);
      if (!s) return "";
      let { typeInfo: o, token: l } = s, { kind: u, step: c } = l.state;
      if (u === "Field" && c === 0 && o.fieldDef || u === "AliasedField" && c === 2 && o.fieldDef || u === "ObjectField" && c === 0 && o.fieldDef) {
        let d = [];
        return ra(d, a), j_(d, o, a), ia(d, a), aa(d, a, o.fieldDef), d.join("").trim();
      }
      if (u === "Directive" && c === 1 && o.directiveDef) {
        let d = [];
        return ra(d, a), l2(d, o), ia(d, a), aa(d, a, o.directiveDef), d.join("").trim();
      }
      if (u === "Variable" && o.type) {
        let d = [];
        return ra(d, a), di(d, o, a, o.type), ia(d, a), aa(d, a, o.type), d.join("").trim();
      }
      if (u === "Argument" && c === 0 && o.argDef) {
        let d = [];
        return ra(d, a), q_(d, o, a), ia(d, a), aa(d, a, o.argDef), d.join("").trim();
      }
      if (u === "EnumValue" && o.enumValue && "description" in o.enumValue) {
        let d = [];
        return ra(d, a), G_(d, o, a), ia(d, a), aa(d, a, o.enumValue), d.join("").trim();
      }
      if (u === "NamedType" && o.type && "description" in o.type) {
        let d = [];
        return ra(d, a), di(d, o, a, o.type), ia(d, a), aa(d, a, o.type), d.join("").trim();
      }
      return "";
    }
    function ra(e, t) {
      t.useMarkdown && ht(e, "```graphql\n");
    }
    function ia(e, t) {
      t.useMarkdown && ht(e, "\n```");
    }
    function j_(e, t, n) {
      o2(e, t, n), u2(e, t, n, t.type);
    }
    function o2(e, t, n) {
      if (!t.fieldDef) return;
      let r = t.fieldDef.name;
      r.slice(0, 2) !== "__" && (di(e, t, n, t.parentType), ht(e, ".")), ht(e, r);
    }
    function l2(e, t, n) {
      if (!t.directiveDef) return;
      let r = "@" + t.directiveDef.name;
      ht(e, r);
    }
    function q_(e, t, n) {
      if (t.directiveDef ? l2(e, t) : t.fieldDef && o2(e, t, n), !t.argDef) return;
      let { name: r } = t.argDef;
      ht(e, "("), ht(e, r), u2(e, t, n, t.inputType), ht(e, ")");
    }
    function u2(e, t, n, r) {
      ht(e, ": "), di(e, t, n, r);
    }
    function G_(e, t, n) {
      if (!t.enumValue) return;
      let { name: r } = t.enumValue;
      di(e, t, n, t.inputType), ht(e, "."), ht(e, r);
    }
    function di(e, t, n, r) {
      r && (r instanceof Ce ? (di(e, t, n, r.ofType), ht(e, "!")) : r instanceof Ft ? (ht(e, "["), di(e, t, n, r.ofType), ht(e, "]")) : ht(e, r.name));
    }
    function aa(e, t, n) {
      if (!n) return;
      let r = typeof n.description == "string" ? n.description : null;
      r && (ht(e, `

`), ht(e, r)), H_(e, t, n);
    }
    function H_(e, t, n) {
      if (!n) return;
      let r = n.deprecationReason;
      r && (ht(e, `

`), ht(e, "Deprecated: "), ht(e, r));
    }
    function ht(e, t) {
      e.push(t);
    }
    var W_ = $o(eg()), c2 = (e, t) => {
      let { schema: n, documentAST: r, introspectionJSON: i, introspectionJSONString: a, buildSchemaOptions: s, documentString: o } = e;
      if (n) return n;
      if (a) {
        let l = JSON.parse(a);
        return jp(l, s);
      }
      if (o && t) {
        let l = t(o);
        return Hp(l, s);
      }
      if (i) return jp(i, s);
      if (r) return Hp(r, s);
      throw new Error("no schema supplied");
    }, Y_ = /* @__PURE__ */ new Map(), z_ = class {
      constructor({ parser: e, schemas: t, parseOptions: n, externalFragmentDefinitions: r, customValidationRules: i, fillLeafsOnComplete: a, completionSettings: s }) {
        ot(this, "_parser", ho);
        ot(this, "_schemas", []);
        ot(this, "_schemaCache", Y_);
        ot(this, "_schemaLoader", c2);
        ot(this, "_parseOptions");
        ot(this, "_customValidationRules");
        ot(this, "_externalFragmentDefinitionNodes", null);
        ot(this, "_externalFragmentDefinitionsString", null);
        ot(this, "_completionSettings");
        ot(this, "getCompletion", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          return !t || t.length < 1 || !(r != null && r.schema) ? [] : g_(r.schema, t, n, void 0, this.getExternalFragmentDefinitions(), { uri: e, ...this._completionSettings });
        });
        ot(this, "getDiagnostics", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          return !t || t.trim().length < 2 || !(r != null && r.schema) ? [] : B_(t, r.schema, n ?? this._customValidationRules, !1, this.getExternalFragmentDefinitions());
        });
        ot(this, "getHover", (e, t, n, r) => {
          let i = this.getSchemaForFile(e);
          if (i && (t == null ? void 0 : t.length) > 3) return K_(i.schema, t, n, void 0, { useMarkdown: !0, ...r });
        });
        ot(this, "getVariablesJSONSchema", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          if (r && t.length > 3) try {
            let i = this.parse(t), a = P_(i, r.schema);
            if (a != null && a.variableToType) return k_(a.variableToType, { ...n, scalarSchemas: r.customScalarSchemas });
          } catch {
          }
          return null;
        });
        this._schemaLoader = c2, t && (this._schemas = t, this._cacheSchemas()), e && (this._parser = e), this._completionSettings = { ...s, fillLeafsOnComplete: (s == null ? void 0 : s.fillLeafsOnComplete) ?? a }, n && (this._parseOptions = n), i && (this._customValidationRules = i), r && (Array.isArray(r) ? this._externalFragmentDefinitionNodes = r : this._externalFragmentDefinitionsString = r);
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
        let t = this._schemas.find((r) => r.fileMatch ? r.fileMatch.some((i) => (0, W_.default)(i)(e)) : !1);
        if (t)
          return this._schemaCache.get(t.uri) || this._cacheSchema(t).get(t.uri);
      }
      getExternalFragmentDefinitions() {
        if (!this._externalFragmentDefinitionNodes && this._externalFragmentDefinitionsString) {
          let e = [];
          try {
            Rr(this._parser(this._externalFragmentDefinitionsString), { FragmentDefinition(t) {
              e.push(t);
            } });
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
    function d2(e) {
      return { startLineNumber: e.start.line + 1, startColumn: e.start.character + 1, endLineNumber: e.end.line + 1, endColumn: e.end.character + 1 };
    }
    function h2(e) {
      return new ci(e.lineNumber - 1, e.column - 1);
    }
    function X_(e, t) {
      let n = { label: e.label, insertText: e == null ? void 0 : e.insertText, sortText: e.sortText, filterText: e == null ? void 0 : e.filterText, documentation: e.documentation, detail: e.detail, range: t ? d2(t) : void 0, kind: e.kind };
      return e.insertTextFormat && (n.insertTextFormat = e.insertTextFormat), e.insertTextMode && (n.insertTextMode = e.insertTextMode), e.command && (n.command = { ...e.command, id: e.command.command }), e.labelDetails && (n.labelDetails = e.labelDetails), n;
    }
    function J_(e) {
      return { startLineNumber: e.range.start.line + 1, endLineNumber: e.range.end.line + 1, startColumn: e.range.start.character + 1, endColumn: e.range.end.character, message: e.message, severity: 5, code: e.code || void 0 };
    }
    var Q_ = class {
      constructor(e, t) {
        ot(this, "_ctx");
        ot(this, "_languageService");
        ot(this, "_formattingOptions");
        this._ctx = e, this._languageService = new z_(t.languageConfig), this._formattingOptions = t.formattingOptions;
      }
      async doValidation(e) {
        var t;
        try {
          let n = (t = this._getTextModel(e)) == null ? void 0 : t.getValue();
          return n ? this._languageService.getDiagnostics(e, n).map(J_) : [];
        } catch (n) {
          return console.error(n), [];
        }
      }
      async doComplete(e, t) {
        var n;
        try {
          let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
          if (!r) return [];
          let i = h2(t);
          return this._languageService.getCompletion(e, r, i).map((a) => X_(a));
        } catch (r) {
          return console.error(r), [];
        }
      }
      async doHover(e, t) {
        var n;
        try {
          let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
          if (!r) return null;
          let i = h2(t);
          return { content: this._languageService.getHover(e, r, i), range: d2(s2({ column: i.character, line: i.line }, r)) };
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
        var a;
        let t = this._getTextModel(e), n = t == null ? void 0 : t.getValue();
        if (!t || !n) return null;
        let r = await Promise.resolve().then(() => (Z4(), S1)), i = await Promise.resolve().then(() => $o(e5()));
        return r.format(n, { parser: "graphql", plugins: [i], ...(a = this._formattingOptions) == null ? void 0 : a.prettierConfig });
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
      TE((e, t) => new Q_(e, t));
    };
  })()), R2;
}
XD();
