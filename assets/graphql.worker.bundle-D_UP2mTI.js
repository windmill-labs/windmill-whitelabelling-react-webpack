var qT = Object.defineProperty;
var GT = (Br, gn, Di) => gn in Br ? qT(Br, gn, { enumerable: !0, configurable: !0, writable: !0, value: Di }) : Br[gn] = Di;
var ot = (Br, gn, Di) => GT(Br, typeof gn != "symbol" ? gn + "" : gn, Di);
var S0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, L0 = {}, F0;
function HT() {
  return F0 || (F0 = 1, (() => {
    var cr, li, dr, jn, ci, na, hr, fr, di, c0, d0, h0, an, qn, hi, f0, Kt, pr, ft, Rt, ra, Gn, fi, Mr, Ne, mr, Nt, Hn, Ct, Jt, In, Ur;
    var Br = Object.create, gn = Object.defineProperty, Di = Object.getOwnPropertyDescriptor, $0 = Object.getOwnPropertyNames, K0 = Object.getPrototypeOf, j0 = Object.prototype.hasOwnProperty, q0 = (e, t) => () => (e && (t = e(e = 0)), t), Er = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), G0 = (e, t) => {
      for (var n in t) gn(e, n, { get: t[n], enumerable: !0 });
    }, H0 = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of $0(t)) !j0.call(e, i) && i !== n && gn(e, i, { get: () => t[i], enumerable: !(r = Di(t, i)) || r.enumerable });
      return e;
    }, Uo = (e, t, n) => (n = e != null ? Br(K0(e)) : {}, H0(!e || !e.__esModule ? gn(n, "default", { value: e, enumerable: !0 }) : n, e)), W0 = Er((e, t) => {
      function n(r, i) {
        if (r != null) return r;
        var a = new Error(i !== void 0 ? i : "Got unexpected " + r);
        throw a.framesToPop = 1, a;
      }
      t.exports = n, t.exports.default = n, Object.defineProperty(t.exports, "__esModule", { value: !0 });
    }), ns = Er((e, t) => {
      var n = "\\\\/", r = `[^${n}]`, i = "\\.", a = "\\+", s = "\\?", o = "\\/", u = "(?=.)", l = "[^/]", c = `(?:${o}|$)`, f = `(?:^|${o})`, p = `${i}{1,2}${c}`, m = `(?!${i})`, g = `(?!${f}${p})`, _ = `(?!${i}{0,1}${c})`, L = `(?!${p})`, A = `[^.${o}]`, F = `${l}*?`, C = "/", x = { DOT_LITERAL: i, PLUS_LITERAL: a, QMARK_LITERAL: s, SLASH_LITERAL: o, ONE_CHAR: u, QMARK: l, END_ANCHOR: c, DOTS_SLASH: p, NO_DOT: m, NO_DOTS: g, NO_DOT_SLASH: _, NO_DOTS_SLASH: L, QMARK_NO_DOT: A, STAR: F, START_ANCHOR: f, SEP: C }, U = { ...x, SLASH_LITERAL: `[${n}]`, QMARK: r, STAR: `${r}*?`, DOTS_SLASH: `${i}{1,2}(?:[${n}]|$)`, NO_DOT: `(?!${i})`, NO_DOTS: `(?!(?:^|[${n}])${i}{1,2}(?:[${n}]|$))`, NO_DOT_SLASH: `(?!${i}{0,1}(?:[${n}]|$))`, NO_DOTS_SLASH: `(?!${i}{1,2}(?:[${n}]|$))`, QMARK_NO_DOT: `[^.${n}]`, START_ANCHOR: `(?:^|[${n}])`, END_ANCHOR: `(?:[${n}]|$)`, SEP: "\\" }, q = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      t.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: q, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(I) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${I.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(I) {
        return I === !0 ? U : x;
      } };
    }), Po = Er((e) => {
      var { REGEX_BACKSLASH: t, REGEX_REMOVE_BACKSLASH: n, REGEX_SPECIAL_CHARS: r, REGEX_SPECIAL_CHARS_GLOBAL: i } = ns();
      e.isObject = (a) => a !== null && typeof a == "object" && !Array.isArray(a), e.hasRegexChars = (a) => r.test(a), e.isRegexChar = (a) => a.length === 1 && e.hasRegexChars(a), e.escapeRegex = (a) => a.replace(i, "\\$1"), e.toPosixSlashes = (a) => a.replace(t, "/"), e.removeBackslashes = (a) => a.replace(n, (s) => s === "\\" ? "" : s), e.supportsLookbehinds = () => {
        let a = process.version.slice(1).split(".").map(Number);
        return a.length === 3 && a[0] >= 9 || a[0] === 8 && a[1] >= 10;
      }, e.escapeLast = (a, s, o) => {
        let u = a.lastIndexOf(s, o);
        return u === -1 ? a : a[u - 1] === "\\" ? e.escapeLast(a, s, u - 1) : `${a.slice(0, u)}\\${a.slice(u)}`;
      }, e.removePrefix = (a, s = {}) => {
        let o = a;
        return o.startsWith("./") && (o = o.slice(2), s.prefix = "./"), o;
      }, e.wrapOutput = (a, s = {}, o = {}) => {
        let u = o.contains ? "" : "^", l = o.contains ? "" : "$", c = `${u}(?:${a})${l}`;
        return s.negated === !0 && (c = `(?:^(?!${c}).*$)`), c;
      }, e.basename = (a, { windows: s } = {}) => s ? a.replace(/[\\/]$/, "").replace(/.*[\\/]/, "") : a.replace(/\/$/, "").replace(/.*\//, "");
    }), Y0 = Er((e, t) => {
      var n = Po(), { CHAR_ASTERISK: r, CHAR_AT: i, CHAR_BACKWARD_SLASH: a, CHAR_COMMA: s, CHAR_DOT: o, CHAR_EXCLAMATION_MARK: u, CHAR_FORWARD_SLASH: l, CHAR_LEFT_CURLY_BRACE: c, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: p, CHAR_PLUS: m, CHAR_QUESTION_MARK: g, CHAR_RIGHT_CURLY_BRACE: _, CHAR_RIGHT_PARENTHESES: L, CHAR_RIGHT_SQUARE_BRACKET: A } = ns(), F = (U) => U === l || U === a, C = (U) => {
        U.isPrefix !== !0 && (U.depth = U.isGlobstar ? 1 / 0 : 1);
      }, x = (U, q) => {
        let I = q || {}, B = U.length - 1, S = I.parts === !0 || I.scanToEnd === !0, K = [], $ = [], xe = [], Z = U, G = -1, J = 0, ne = 0, oe = !1, de = !1, le = !1, Ie = !1, ke = !1, y = !1, ee = !1, z = !1, re = !1, M = 0, P, ue, _e = { value: "", depth: 0, isGlob: !1 }, Xe = () => G >= B, Tt = () => Z.charCodeAt(G + 1), Se = () => (P = ue, Z.charCodeAt(++G));
        for (; G < B; ) {
          ue = Se();
          let De;
          if (ue === a) {
            ee = _e.backslashes = !0, ue = Se(), ue === c && (y = !0);
            continue;
          }
          if (y === !0 || ue === c) {
            for (M++; Xe() !== !0 && (ue = Se()); ) {
              if (ue === a) {
                ee = _e.backslashes = !0, Se();
                continue;
              }
              if (ue === c) {
                M++;
                continue;
              }
              if (y !== !0 && ue === o && (ue = Se()) === o) {
                if (oe = _e.isBrace = !0, le = _e.isGlob = !0, re = !0, S === !0) continue;
                break;
              }
              if (y !== !0 && ue === s) {
                if (oe = _e.isBrace = !0, le = _e.isGlob = !0, re = !0, S === !0) continue;
                break;
              }
              if (ue === _ && (M--, M === 0)) {
                y = !1, oe = _e.isBrace = !0, re = !0;
                break;
              }
            }
            if (S === !0) continue;
            break;
          }
          if (ue === l) {
            if (K.push(G), $.push(_e), _e = { value: "", depth: 0, isGlob: !1 }, re === !0) continue;
            if (P === o && G === J + 1) {
              J += 2;
              continue;
            }
            ne = G + 1;
            continue;
          }
          if (I.noext !== !0 && (ue === m || ue === i || ue === r || ue === g || ue === u) && Tt() === f) {
            if (le = _e.isGlob = !0, Ie = _e.isExtglob = !0, re = !0, S === !0) {
              for (; Xe() !== !0 && (ue = Se()); ) {
                if (ue === a) {
                  ee = _e.backslashes = !0, ue = Se();
                  continue;
                }
                if (ue === L) {
                  le = _e.isGlob = !0, re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (ue === r) {
            if (P === r && (ke = _e.isGlobstar = !0), le = _e.isGlob = !0, re = !0, S === !0) continue;
            break;
          }
          if (ue === g) {
            if (le = _e.isGlob = !0, re = !0, S === !0) continue;
            break;
          }
          if (ue === p) for (; Xe() !== !0 && (De = Se()); ) {
            if (De === a) {
              ee = _e.backslashes = !0, Se();
              continue;
            }
            if (De === A) {
              if (de = _e.isBracket = !0, le = _e.isGlob = !0, re = !0, S === !0) continue;
              break;
            }
          }
          if (I.nonegate !== !0 && ue === u && G === J) {
            z = _e.negated = !0, J++;
            continue;
          }
          if (I.noparen !== !0 && ue === f) {
            if (le = _e.isGlob = !0, S === !0) {
              for (; Xe() !== !0 && (ue = Se()); ) {
                if (ue === f) {
                  ee = _e.backslashes = !0, ue = Se();
                  continue;
                }
                if (ue === L) {
                  re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (le === !0) {
            if (re = !0, S === !0) continue;
            break;
          }
        }
        I.noext === !0 && (Ie = !1, le = !1);
        let Je = Z, pi = "", sn = "";
        J > 0 && (pi = Z.slice(0, J), Z = Z.slice(J), ne -= J), Je && le === !0 && ne > 0 ? (Je = Z.slice(0, ne), sn = Z.slice(ne)) : le === !0 ? (Je = "", sn = Z) : Je = Z, Je && Je !== "" && Je !== "/" && Je !== Z && F(Je.charCodeAt(Je.length - 1)) && (Je = Je.slice(0, -1)), I.unescape === !0 && (sn && (sn = n.removeBackslashes(sn)), Je && ee === !0 && (Je = n.removeBackslashes(Je)));
        let Ot = { prefix: pi, input: U, start: J, base: Je, glob: sn, isBrace: oe, isBracket: de, isGlob: le, isExtglob: Ie, isGlobstar: ke, negated: z };
        if (I.tokens === !0 && (Ot.maxDepth = 0, F(ue) || $.push(_e), Ot.tokens = $), I.parts === !0 || I.tokens === !0) {
          let De;
          for (let at = 0; at < K.length; at++) {
            let Wn = De ? De + 1 : J, ae = K[at], Be = U.slice(Wn, ae);
            I.tokens && (at === 0 && J !== 0 ? ($[at].isPrefix = !0, $[at].value = pi) : $[at].value = Be, C($[at]), Ot.maxDepth += $[at].depth), (at !== 0 || Be !== "") && xe.push(Be), De = ae;
          }
          if (De && De + 1 < U.length) {
            let at = U.slice(De + 1);
            xe.push(at), I.tokens && ($[$.length - 1].value = at, C($[$.length - 1]), Ot.maxDepth += $[$.length - 1].depth);
          }
          Ot.slashes = K, Ot.parts = xe;
        }
        return Ot;
      };
      t.exports = x;
    }), z0 = Er((e, t) => {
      var n = ns(), r = Po(), { MAX_LENGTH: i, POSIX_REGEX_SOURCE: a, REGEX_NON_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_BACKREF: o, REPLACEMENTS: u } = n, l = (p, m) => {
        if (typeof m.expandRange == "function") return m.expandRange(...p, m);
        p.sort();
        let g = `[${p.join("-")}]`;
        try {
          new RegExp(g);
        } catch {
          return p.map((_) => r.escapeRegex(_)).join("..");
        }
        return g;
      }, c = (p, m) => `Missing ${p}: "${m}" - use "\\\\${m}" to match literal characters`, f = (p, m) => {
        if (typeof p != "string") throw new TypeError("Expected a string");
        p = u[p] || p;
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, L = p.length;
        if (L > _) throw new SyntaxError(`Input length: ${L}, exceeds maximum allowed length: ${_}`);
        let A = { type: "bos", value: "", output: g.prepend || "" }, F = [A], C = g.capture ? "" : "?:", x = n.globChars(g.windows), U = n.extglobChars(x), { DOT_LITERAL: q, PLUS_LITERAL: I, SLASH_LITERAL: B, ONE_CHAR: S, DOTS_SLASH: K, NO_DOT: $, NO_DOT_SLASH: xe, NO_DOTS_SLASH: Z, QMARK: G, QMARK_NO_DOT: J, STAR: ne, START_ANCHOR: oe } = x, de = (ae) => `(${C}(?:(?!${oe}${ae.dot ? K : q}).)*?)`, le = g.dot ? "" : $, Ie = g.dot ? G : J, ke = g.bash === !0 ? de(g) : ne;
        g.capture && (ke = `(${ke})`), typeof g.noext == "boolean" && (g.noextglob = g.noext);
        let y = { input: p, index: -1, start: 0, dot: g.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: F };
        p = r.removePrefix(p, y), L = p.length;
        let ee = [], z = [], re = [], M = A, P, ue = () => y.index === L - 1, _e = y.peek = (ae = 1) => p[y.index + ae], Xe = y.advance = () => p[++y.index], Tt = () => p.slice(y.index + 1), Se = (ae = "", Be = 0) => {
          y.consumed += ae, y.index += Be;
        }, Je = (ae) => {
          y.output += ae.output != null ? ae.output : ae.value, Se(ae.value);
        }, pi = () => {
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
        }, Wn = (ae) => {
          let Be = ae.close + (g.capture ? ")" : "");
          if (ae.type === "negate") {
            let te = ke;
            ae.inner && ae.inner.length > 1 && ae.inner.includes("/") && (te = de(g)), (te !== ke || ue() || /^\)+$/.test(Tt())) && (Be = ae.close = `)$))${te}`), ae.prev.type === "bos" && ue() && (y.negatedExtglob = !0);
          }
          De({ type: "paren", extglob: !0, value: P, output: Be }), Ot("parens");
        };
        if (g.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(p)) {
          let ae = !1, Be = p.replace(o, (te, Le, pt, xt, st, on) => xt === "\\" ? (ae = !0, te) : xt === "?" ? Le ? Le + xt + (st ? G.repeat(st.length) : "") : on === 0 ? Ie + (st ? G.repeat(st.length) : "") : G.repeat(pt.length) : xt === "." ? q.repeat(pt.length) : xt === "*" ? Le ? Le + xt + (st ? ke : "") : ke : Le ? te : `\\${te}`);
          return ae === !0 && (g.unescape === !0 ? Be = Be.replace(/\\/g, "") : Be = Be.replace(/\\+/g, (te) => te.length % 2 === 0 ? "\\\\" : te ? "\\" : "")), Be === p && g.contains === !0 ? (y.output = p, y) : (y.output = r.wrapOutput(Be, y, m), y);
        }
        for (; !ue(); ) {
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
              Wn(ee.pop());
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
              Le = l(xt, g), y.backtrack = !0;
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
              pi();
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
              let ia = p[y.index + 4];
              if (ia && ia !== "/") break;
              ae = ae.slice(3), Se("/**", 3);
            }
            if (te.type === "bos" && ue()) {
              M.type = "globstar", M.value += P, M.output = de(g), y.output = M.output, y.globstar = !0, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && !xt && ue()) {
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = de(g) + (g.strictSlashes ? ")" : "|$)"), M.value += P, y.globstar = !0, y.output += te.output + M.output, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && ae[0] === "/") {
              let ia = ae[1] !== void 0 ? "|$" : "";
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = `${de(g)}${B}|${B}${ia})`, M.value += P, y.output += te.output + M.output, y.globstar = !0, Se(P + Xe()), De({ type: "slash", value: "/", output: "" });
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
            Be.output = ".*?", (M.type === "bos" || M.type === "slash") && (Be.output = le + Be.output), De(Be);
            continue;
          }
          if (M && (M.type === "bracket" || M.type === "paren") && g.regex === !0) {
            Be.output = P, De(Be);
            continue;
          }
          (y.index === y.start || M.type === "slash" || M.type === "dot") && (M.type === "dot" ? (y.output += xe, M.output += xe) : g.dot === !0 ? (y.output += Z, M.output += Z) : (y.output += le, M.output += le), _e() !== "*" && (y.output += S, M.output += S)), De(Be);
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
      f.fastpaths = (p, m) => {
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, L = p.length;
        if (L > _) throw new SyntaxError(`Input length: ${L}, exceeds maximum allowed length: ${_}`);
        p = u[p] || p;
        let { DOT_LITERAL: A, SLASH_LITERAL: F, ONE_CHAR: C, DOTS_SLASH: x, NO_DOT: U, NO_DOTS: q, NO_DOTS_SLASH: I, STAR: B, START_ANCHOR: S } = n.globChars(g.windows), K = g.dot ? q : U, $ = g.dot ? I : U, xe = g.capture ? "" : "?:", Z = { negated: !1, prefix: "" }, G = g.bash === !0 ? ".*?" : B;
        g.capture && (G = `(${G})`);
        let J = (le) => le.noglobstar === !0 ? G : `(${xe}(?:(?!${S}${le.dot ? x : A}).)*?)`, ne = (le) => {
          switch (le) {
            case "*":
              return `${K}${C}${G}`;
            case ".*":
              return `${A}${C}${G}`;
            case "*.*":
              return `${K}${G}${A}${C}${G}`;
            case "*/*":
              return `${K}${G}${F}${C}${$}${G}`;
            case "**":
              return K + J(g);
            case "**/*":
              return `(?:${K}${J(g)}${F})?${$}${C}${G}`;
            case "**/*.*":
              return `(?:${K}${J(g)}${F})?${$}${G}${A}${C}${G}`;
            case "**/.*":
              return `(?:${K}${J(g)}${F})?${A}${C}${G}`;
            default: {
              let Ie = /^(.*?)\.(\w+)$/.exec(le);
              if (!Ie) return;
              let ke = ne(Ie[1]);
              return ke ? ke + A + Ie[2] : void 0;
            }
          }
        }, oe = r.removePrefix(p, Z), de = ne(oe);
        return de && g.strictSlashes !== !0 && (de += `${F}?`), de;
      }, t.exports = f;
    }), X0 = Er((e, t) => {
      var n = Y0(), r = z0(), i = Po(), a = ns(), s = (u) => u && typeof u == "object" && !Array.isArray(u), o = (u, l, c = !1) => {
        if (Array.isArray(u)) {
          let F = u.map((C) => o(C, l, c));
          return (C) => {
            for (let x of F) {
              let U = x(C);
              if (U) return U;
            }
            return !1;
          };
        }
        let f = s(u) && u.tokens && u.input;
        if (u === "" || typeof u != "string" && !f) throw new TypeError("Expected pattern to be a non-empty string");
        let p = l || {}, m = p.windows, g = f ? o.compileRe(u, l) : o.makeRe(u, l, !1, !0), _ = g.state;
        delete g.state;
        let L = () => !1;
        if (p.ignore) {
          let F = { ...l, ignore: null, onMatch: null, onResult: null };
          L = o(p.ignore, F, c);
        }
        let A = (F, C = !1) => {
          let { isMatch: x, match: U, output: q } = o.test(F, g, l, { glob: u, posix: m }), I = { glob: u, state: _, regex: g, posix: m, input: F, output: q, match: U, isMatch: x };
          return typeof p.onResult == "function" && p.onResult(I), x === !1 ? (I.isMatch = !1, C ? I : !1) : L(F) ? (typeof p.onIgnore == "function" && p.onIgnore(I), I.isMatch = !1, C ? I : !1) : (typeof p.onMatch == "function" && p.onMatch(I), C ? I : !0);
        };
        return c && (A.state = _), A;
      };
      o.test = (u, l, c, { glob: f, posix: p } = {}) => {
        if (typeof u != "string") throw new TypeError("Expected input to be a string");
        if (u === "") return { isMatch: !1, output: "" };
        let m = c || {}, g = m.format || (p ? i.toPosixSlashes : null), _ = u === f, L = _ && g ? g(u) : u;
        return _ === !1 && (L = g ? g(u) : u, _ = L === f), (_ === !1 || m.capture === !0) && (m.matchBase === !0 || m.basename === !0 ? _ = o.matchBase(u, l, c, p) : _ = l.exec(L)), { isMatch: !!_, match: _, output: L };
      }, o.matchBase = (u, l, c) => (l instanceof RegExp ? l : o.makeRe(l, c)).test(i.basename(u)), o.isMatch = (u, l, c) => o(l, c)(u), o.parse = (u, l) => Array.isArray(u) ? u.map((c) => o.parse(c, l)) : r(u, { ...l, fastpaths: !1 }), o.scan = (u, l) => n(u, l), o.compileRe = (u, l, c = !1, f = !1) => {
        if (c === !0) return u.output;
        let p = l || {}, m = p.contains ? "" : "^", g = p.contains ? "" : "$", _ = `${m}(?:${u.output})${g}`;
        u && u.negated === !0 && (_ = `^(?!${_}).*$`);
        let L = o.toRegex(_, l);
        return f === !0 && (L.state = u), L;
      }, o.makeRe = (u, l, c = !1, f = !1) => {
        if (!u || typeof u != "string") throw new TypeError("Expected a non-empty string");
        let p = l || {}, m = { negated: !1, fastpaths: !0 }, g = "", _;
        return u.startsWith("./") && (u = u.slice(2), g = m.prefix = "./"), p.fastpaths !== !1 && (u[0] === "." || u[0] === "*") && (_ = r.fastpaths(u, l)), _ === void 0 ? (m = r(u, l), m.prefix = g + (m.prefix || "")) : m.output = _, o.compileRe(m, l, c, f);
      }, o.toRegex = (u, l) => {
        try {
          let c = l || {};
          return new RegExp(u, c.flags || (c.nocase ? "i" : ""));
        } catch (c) {
          if (l && l.debug === !0) throw c;
          return /$^/;
        }
      }, o.constants = a, t.exports = o;
    }), J0 = Er((e, t) => {
      t.exports = X0();
    }), Tc = {};
    G0(Tc, { __debug: () => xu, check: () => hd, default: () => Sh, doc: () => Ss, format: () => eu, formatWithCursor: () => xs, getSupportInfo: () => Ou, util: () => Ls, version: () => Iu });
    function On() {
    }
    function wc(e, t, n, r, i) {
      for (var a = [], s; t; ) a.push(t), s = t.previousComponent, delete t.previousComponent, t = s;
      a.reverse();
      for (var o = 0, u = a.length, l = 0, c = 0; o < u; o++) {
        var f = a[o];
        if (f.removed) f.value = e.join(r.slice(c, c + f.count)), c += f.count;
        else {
          if (!f.added && i) {
            var p = n.slice(l, l + f.count);
            p = p.map(function(m, g) {
              var _ = r[c + g];
              return _.length > m.length ? _ : m;
            }), f.value = e.join(p);
          } else f.value = e.join(n.slice(l, l + f.count));
          l += f.count, f.added || (c += f.count);
        }
      }
      return a;
    }
    function Ac(e, t) {
      var n;
      for (n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
      return e.slice(0, n);
    }
    function Sc(e, t) {
      var n;
      if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
      for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
      return e.slice(-n);
    }
    function Bo(e, t, n) {
      if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
      return n + e.slice(t.length);
    }
    function Vo(e, t, n) {
      if (!t) return e + n;
      if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
      return e.slice(0, -t.length) + n;
    }
    function fa(e, t) {
      return Bo(e, t, "");
    }
    function rs(e, t) {
      return Vo(e, t, "");
    }
    function Lc(e, t) {
      return t.slice(0, Q0(e, t));
    }
    function Q0(e, t) {
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
    function Fc(e, t, n, r) {
      if (t && n) {
        var i = t.value.match(/^\s*/)[0], a = t.value.match(/\s*$/)[0], s = n.value.match(/^\s*/)[0], o = n.value.match(/\s*$/)[0];
        if (e) {
          var u = Ac(i, s);
          e.value = Vo(e.value, s, u), t.value = fa(t.value, u), n.value = fa(n.value, u);
        }
        if (r) {
          var l = Sc(a, o);
          r.value = Bo(r.value, o, l), t.value = rs(t.value, l), n.value = rs(n.value, l);
        }
      } else if (n) e && (n.value = n.value.replace(/^\s*/, "")), r && (r.value = r.value.replace(/^\s*/, ""));
      else if (e && r) {
        var c = r.value.match(/^\s*/)[0], f = t.value.match(/^\s*/)[0], p = t.value.match(/\s*$/)[0], m = Ac(c, f);
        t.value = fa(t.value, m);
        var g = Sc(fa(c, m), p);
        t.value = rs(t.value, g), r.value = Bo(r.value, c, g), e.value = Vo(e.value, c, c.slice(0, c.length - g.length));
      } else if (r) {
        var _ = r.value.match(/^\s*/)[0], L = t.value.match(/\s*$/)[0], A = Lc(L, _);
        t.value = rs(t.value, A);
      } else if (e) {
        var F = e.value.match(/\s*$/)[0], C = t.value.match(/^\s*/)[0], x = Lc(F, C);
        t.value = fa(t.value, x);
      }
    }
    function $o(e) {
      "@babel/helpers - typeof";
      return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, $o(e);
    }
    function Ko(e, t, n, r, i) {
      t = t || [], n = n || [], r && (e = r(i, e));
      var a;
      for (a = 0; a < t.length; a += 1) if (t[a] === e) return n[a];
      var s;
      if (Object.prototype.toString.call(e) === "[object Array]") {
        for (t.push(e), s = new Array(e.length), n.push(s), a = 0; a < e.length; a += 1) s[a] = Ko(e[a], t, n, r, i);
        return t.pop(), n.pop(), s;
      }
      if (e && e.toJSON && (e = e.toJSON()), $o(e) === "object" && e !== null) {
        t.push(e), s = {}, n.push(s);
        var o = [], u;
        for (u in e) Object.prototype.hasOwnProperty.call(e, u) && o.push(u);
        for (o.sort(), a = 0; a < o.length; a += 1) u = o[a], s[u] = Ko(e[u], t, n, r, u);
        t.pop(), n.pop();
      } else s = e;
      return s;
    }
    function Z0(e, t, n) {
      return va.diff(e, t, n);
    }
    function eE(e) {
      let t = e.indexOf("\r");
      return t !== -1 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
    }
    function jo(e) {
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
    function Ic(e, t) {
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
    function tE(e) {
      return Ea(!1, e, /\r\n?/gu, `
`);
    }
    function nE(e) {
      if (typeof e == "string") return _r;
      if (Array.isArray(e)) return xn;
      if (!e) return;
      let { type: t } = e;
      if (iu.has(t)) return t;
    }
    function rE(e) {
      let t = e === null ? "null" : typeof e;
      if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (vr(e)) throw new Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
      let r = Sd([...iu].map((i) => `'${i}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }
    function iE(e, t, n, r) {
      let i = [e];
      for (; i.length > 0; ) {
        let a = i.pop();
        if (a === au) {
          n(i.pop());
          continue;
        }
        n && i.push(a, au);
        let s = vr(a);
        if (!s) throw new $r(a);
        if ((t == null ? void 0 : t(a)) !== !1) switch (s) {
          case xn:
          case En: {
            let o = s === xn ? a : a.parts;
            for (let u = o.length, l = u - 1; l >= 0; --l) i.push(o[l]);
            break;
          }
          case Gt:
            i.push(a.flatContents, a.breakContents);
            break;
          case Ut:
            if (r && a.expandedStates) for (let o = a.expandedStates.length, u = o - 1; u >= 0; --u) i.push(a.expandedStates[u]);
            else i.push(a.contents);
            break;
          case Mn:
          case kn:
          case Pn:
          case _n:
          case Bn:
            i.push(a.contents);
            break;
          case _r:
          case Dr:
          case Un:
          case Vn:
          case _t:
          case Zt:
            break;
          default:
            throw new $r(a);
        }
      }
    }
    function is(e, t) {
      if (typeof e == "string") return t(e);
      let n = /* @__PURE__ */ new Map();
      return r(e);
      function r(a) {
        if (n.has(a)) return n.get(a);
        let s = i(a);
        return n.set(a, s), s;
      }
      function i(a) {
        switch (vr(a)) {
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
          case _r:
          case Dr:
          case Un:
          case Vn:
          case _t:
          case Zt:
            return t(a);
          default:
            throw new $r(a);
        }
      }
    }
    function qo(e, t, n) {
      let r = n, i = !1;
      function a(s) {
        if (i) return !1;
        let o = t(s);
        o !== void 0 && (i = !0, r = o);
      }
      return gs(e, a), r;
    }
    function aE(e) {
      if (e.type === Ut && e.break || e.type === _t && e.hard || e.type === Zt) return !0;
    }
    function sE(e) {
      return qo(e, aE, !1);
    }
    function Rc(e) {
      if (e.length > 0) {
        let t = gt(!1, e, -1);
        !t.expandedStates && !t.break && (t.break = "propagated");
      }
      return null;
    }
    function oE(e) {
      let t = /* @__PURE__ */ new Set(), n = [];
      function r(a) {
        if (a.type === Zt && Rc(n), a.type === Ut) {
          if (n.push(a), t.has(a)) return !1;
          t.add(a);
        }
      }
      function i(a) {
        a.type === Ut && n.pop().break && Rc(n);
      }
      gs(e, r, i, !0);
    }
    function uE(e) {
      return e.type === _t && !e.hard ? e.soft ? "" : " " : e.type === Gt ? e.flatContents : e;
    }
    function lE(e) {
      return is(e, uE);
    }
    function Oc(e) {
      for (e = [...e]; e.length >= 2 && gt(!1, e, -2).type === _t && gt(!1, e, -1).type === Zt; ) e.length -= 2;
      if (e.length > 0) {
        let t = pa(gt(!1, e, -1));
        e[e.length - 1] = t;
      }
      return e;
    }
    function pa(e) {
      switch (vr(e)) {
        case kn:
        case Pn:
        case Ut:
        case Bn:
        case _n: {
          let t = pa(e.contents);
          return { ...e, contents: t };
        }
        case Gt:
          return { ...e, breakContents: pa(e.breakContents), flatContents: pa(e.flatContents) };
        case En:
          return { ...e, parts: Oc(e.parts) };
        case xn:
          return Oc(e);
        case _r:
          return e.replace(/[\n\r]*$/u, "");
        case Mn:
        case Dr:
        case Un:
        case Vn:
        case _t:
        case Zt:
          break;
        default:
          throw new $r(e);
      }
      return e;
    }
    function xc(e) {
      return pa(dE(e));
    }
    function cE(e) {
      switch (vr(e)) {
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
        case _r:
        case Dr:
        case Un:
        case Vn:
        case _t:
        case _n:
        case Zt:
          break;
        default:
          throw new $r(e);
      }
      return e;
    }
    function dE(e) {
      return is(e, (t) => cE(t));
    }
    function hE(e, t = lu) {
      return is(e, (n) => typeof n == "string" ? Mc(t, n.split(`
`)) : n);
    }
    function fE(e) {
      if (e.type === _t) return !0;
    }
    function pE(e) {
      return qo(e, fE, !1);
    }
    function as(e, t) {
      return e.type === _n ? { ...e, contents: t(e.contents) } : t(e);
    }
    function ss(e) {
      return Dn(e), { type: kn, contents: e };
    }
    function vi(e, t) {
      return Dn(t), { type: Mn, contents: t, n: e };
    }
    function kc(e, t = {}) {
      return Dn(e), su(t.expandedStates, !0), { type: Ut, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
    }
    function mE(e) {
      return vi(Number.NEGATIVE_INFINITY, e);
    }
    function gE(e) {
      return vi({ type: "root" }, e);
    }
    function EE(e) {
      return vi(-1, e);
    }
    function _E(e, t) {
      return kc(e[0], { ...t, expandedStates: e });
    }
    function DE(e) {
      return Fd(e), { type: En, parts: e };
    }
    function vE(e, t = "", n = {}) {
      return Dn(e), t !== "" && Dn(t), { type: Gt, breakContents: e, flatContents: t, groupId: n.groupId };
    }
    function bE(e, t) {
      return Dn(e), { type: Pn, contents: e, groupId: t.groupId, negate: t.negate };
    }
    function Go(e) {
      return Dn(e), { type: Bn, contents: e };
    }
    function Mc(e, t) {
      Dn(e), su(t);
      let n = [];
      for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
      return n;
    }
    function Uc(e, t, n) {
      Dn(e);
      let r = e;
      if (t > 0) {
        for (let i = 0; i < Math.floor(t / n); ++i) r = ss(r);
        r = vi(t % n, r), r = vi(Number.NEGATIVE_INFINITY, r);
      }
      return r;
    }
    function yE(e, t) {
      return Dn(t), e ? { type: _n, label: e, contents: t } : t;
    }
    function zn(e) {
      var t;
      if (!e) return "";
      if (Array.isArray(e)) {
        let n = [];
        for (let r of e) if (Array.isArray(r)) n.push(...zn(r));
        else {
          let i = zn(r);
          i !== "" && n.push(i);
        }
        return n;
      }
      return e.type === Gt ? { ...e, breakContents: zn(e.breakContents), flatContents: zn(e.flatContents) } : e.type === Ut ? { ...e, contents: zn(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(zn) } : e.type === En ? { type: "fill", parts: e.parts.map(zn) } : e.contents ? { ...e, contents: zn(e.contents) } : e;
    }
    function NE(e) {
      let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
      return r(zn(e));
      function r(a, s, o) {
        var u, l;
        if (typeof a == "string") return JSON.stringify(a);
        if (Array.isArray(a)) {
          let c = a.map(r).filter(Boolean);
          return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
        }
        if (a.type === _t) {
          let c = ((u = o == null ? void 0 : o[s + 1]) == null ? void 0 : u.type) === Zt;
          return a.literal ? c ? "literalline" : "literallineWithoutBreakParent" : a.hard ? c ? "hardline" : "hardlineWithoutBreakParent" : a.soft ? "softline" : "line";
        }
        if (a.type === Zt) return ((l = o == null ? void 0 : o[s - 1]) == null ? void 0 : l.type) === _t && o[s - 1].hard ? void 0 : "breakParent";
        if (a.type === Un) return "trim";
        if (a.type === kn) return "indent(" + r(a.contents) + ")";
        if (a.type === Mn) return a.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(a.contents) + ")" : a.n < 0 ? "dedent(" + r(a.contents) + ")" : a.n.type === "root" ? "markAsRoot(" + r(a.contents) + ")" : "align(" + JSON.stringify(a.n) + ", " + r(a.contents) + ")";
        if (a.type === Gt) return "ifBreak(" + r(a.breakContents) + (a.flatContents ? ", " + r(a.flatContents) : "") + (a.groupId ? (a.flatContents ? "" : ', ""') + `, { groupId: ${i(a.groupId)} }` : "") + ")";
        if (a.type === Pn) {
          let c = [];
          a.negate && c.push("negate: true"), a.groupId && c.push(`groupId: ${i(a.groupId)}`);
          let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return `indentIfBreak(${r(a.contents)}${f})`;
        }
        if (a.type === Ut) {
          let c = [];
          a.break && a.break !== "propagated" && c.push("shouldBreak: true"), a.id && c.push(`id: ${i(a.id)}`);
          let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return a.expandedStates ? `conditionalGroup([${a.expandedStates.map((p) => r(p)).join(",")}]${f})` : `group(${r(a.contents)}${f})`;
        }
        if (a.type === En) return `fill([${a.parts.map((c) => r(c)).join(", ")}])`;
        if (a.type === Bn) return "lineSuffix(" + r(a.contents) + ")";
        if (a.type === Vn) return "lineSuffixBoundary";
        if (a.type === _n) return `label(${JSON.stringify(a.label)}, ${r(a.contents)})`;
        throw new Error("Unknown doc type " + a.type);
      }
      function i(a) {
        if (typeof a != "symbol") return JSON.stringify(String(a));
        if (a in t) return t[a];
        let s = a.description || "symbol";
        for (let o = 0; ; o++) {
          let u = s + (o > 0 ? ` #${o}` : "");
          if (!n.has(u)) return n.add(u), t[a] = `Symbol.for(${JSON.stringify(u)})`;
        }
      }
    }
    function CE(e) {
      return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
    }
    function TE(e) {
      return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
    }
    function wE(e) {
      if (!e) return 0;
      if (!Md.test(e)) return e.length;
      e = e.replace(xd(), "  ");
      let t = 0;
      for (let n of e) {
        let r = n.codePointAt(0);
        r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += kd(r) ? 1 : 2);
      }
      return t;
    }
    function Pc() {
      return { value: "", length: 0, queue: [] };
    }
    function AE(e, t) {
      return Ho(e, { type: "indent" }, t);
    }
    function SE(e, t, n) {
      return t === Number.NEGATIVE_INFINITY ? e.root || Pc() : t < 0 ? Ho(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : Ho(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
    }
    function Ho(e, t, n) {
      let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], i = "", a = 0, s = 0, o = 0;
      for (let g of r) switch (g.type) {
        case "indent":
          c(), n.useTabs ? u(1) : l(n.tabWidth);
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
      function u(g) {
        i += "	".repeat(g), a += n.tabWidth * g;
      }
      function l(g) {
        i += " ".repeat(g), a += g;
      }
      function c() {
        n.useTabs ? f() : p();
      }
      function f() {
        s > 0 && u(s), m();
      }
      function p() {
        o > 0 && l(o), m();
      }
      function m() {
        s = 0, o = 0;
      }
    }
    function Wo(e) {
      let t = 0, n = 0, r = e.length;
      e: for (; r--; ) {
        let i = e[r];
        if (i === Kr) {
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
      if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Kr);
      return t;
    }
    function os(e, t, n, r, i, a) {
      if (n === Number.POSITIVE_INFINITY) return !0;
      let s = t.length, o = [e], u = [];
      for (; n >= 0; ) {
        if (o.length === 0) {
          if (s === 0) return !0;
          o.push(t[--s]);
          continue;
        }
        let { mode: l, doc: c } = o.pop(), f = vr(c);
        switch (f) {
          case _r:
            u.push(c), n -= Ds(c);
            break;
          case xn:
          case En: {
            let p = f === xn ? c : c.parts, m = c[vs] ?? 0;
            for (let g = p.length - 1; g >= m; g--) o.push({ mode: l, doc: p[g] });
            break;
          }
          case kn:
          case Mn:
          case Pn:
          case _n:
            o.push({ mode: l, doc: c.contents });
            break;
          case Un:
            n += Wo(u);
            break;
          case Ut: {
            if (a && c.break) return !1;
            let p = c.break ? Pt : l, m = c.expandedStates && p === Pt ? gt(!1, c.expandedStates, -1) : c.contents;
            o.push({ mode: p, doc: m });
            break;
          }
          case Gt: {
            let p = (c.groupId ? i[c.groupId] || vn : l) === Pt ? c.breakContents : c.flatContents;
            p && o.push({ mode: l, doc: p });
            break;
          }
          case _t:
            if (l === Pt || c.hard) return !0;
            c.soft || (u.push(" "), n--);
            break;
          case Bn:
            r = !0;
            break;
          case Vn:
            if (r) return !1;
            break;
        }
      }
      return !1;
    }
    function us(e, t) {
      let n = {}, r = t.printWidth, i = jo(t.endOfLine), a = 0, s = [{ ind: Pc(), mode: Pt, doc: e }], o = [], u = !1, l = [], c = 0;
      for (oE(e); s.length > 0; ) {
        let { ind: p, mode: m, doc: g } = s.pop();
        switch (vr(g)) {
          case _r: {
            let _ = i !== `
` ? Ea(!1, g, `
`, i) : g;
            o.push(_), s.length > 0 && (a += Ds(_));
            break;
          }
          case xn:
            for (let _ = g.length - 1; _ >= 0; _--) s.push({ ind: p, mode: m, doc: g[_] });
            break;
          case Dr:
            if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
            o.push(Kr), c++;
            break;
          case kn:
            s.push({ ind: AE(p, t), mode: m, doc: g.contents });
            break;
          case Mn:
            s.push({ ind: SE(p, g.n, t), mode: m, doc: g.contents });
            break;
          case Un:
            a -= Wo(o);
            break;
          case Ut:
            switch (m) {
              case vn:
                if (!u) {
                  s.push({ ind: p, mode: g.break ? Pt : vn, doc: g.contents });
                  break;
                }
              case Pt: {
                u = !1;
                let _ = { ind: p, mode: vn, doc: g.contents }, L = r - a, A = l.length > 0;
                if (!g.break && os(_, s, L, A, n)) s.push(_);
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
                    if (os(U, s, L, A, n)) {
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
            let _ = r - a, L = g[vs] ?? 0, { parts: A } = g, F = A.length - L;
            if (F === 0) break;
            let C = A[L + 0], x = A[L + 1], U = { ind: p, mode: vn, doc: C }, q = { ind: p, mode: Pt, doc: C }, I = os(U, [], _, l.length > 0, n, !0);
            if (F === 1) {
              I ? s.push(U) : s.push(q);
              break;
            }
            let B = { ind: p, mode: vn, doc: x }, S = { ind: p, mode: Pt, doc: x };
            if (F === 2) {
              I ? s.push(B, U) : s.push(S, q);
              break;
            }
            let K = A[L + 2], $ = { ind: p, mode: m, doc: { ...g, [vs]: L + 2 } };
            os({ ind: p, mode: vn, doc: [C, x, K] }, [], _, l.length > 0, n, !0) ? s.push($, B, U) : I ? s.push($, S, U) : s.push($, S, q);
            break;
          }
          case Gt:
          case Pn: {
            let _ = g.groupId ? n[g.groupId] : m;
            if (_ === Pt) {
              let L = g.type === Gt ? g.breakContents : g.negate ? g.contents : ss(g.contents);
              L && s.push({ ind: p, mode: m, doc: L });
            }
            if (_ === vn) {
              let L = g.type === Gt ? g.flatContents : g.negate ? ss(g.contents) : g.contents;
              L && s.push({ ind: p, mode: m, doc: L });
            }
            break;
          }
          case Bn:
            l.push({ ind: p, mode: m, doc: g.contents });
            break;
          case Vn:
            l.length > 0 && s.push({ ind: p, mode: m, doc: _s });
            break;
          case _t:
            switch (m) {
              case vn:
                if (g.hard) u = !0;
                else {
                  g.soft || (o.push(" "), a += 1);
                  break;
                }
              case Pt:
                if (l.length > 0) {
                  s.push({ ind: p, mode: m, doc: g }, ...l.reverse()), l.length = 0;
                  break;
                }
                g.literal ? p.root ? (o.push(i, p.root.value), a = p.root.length) : (o.push(i), a = 0) : (a -= Wo(o), o.push(i + p.value), a = p.length);
                break;
            }
            break;
          case _n:
            s.push({ ind: p, mode: m, doc: g.contents });
            break;
          case Zt:
            break;
          default:
            throw new $r(g);
        }
        s.length === 0 && l.length > 0 && (s.push(...l.reverse()), l.length = 0);
      }
      let f = o.indexOf(Kr);
      if (f !== -1) {
        let p = o.indexOf(Kr, f + 1);
        if (p === -1) return { formatted: o.filter((L) => L !== Kr).join("") };
        let m = o.slice(0, f).join(""), g = o.slice(f + 1, p).join(""), _ = o.slice(p + 1).join("");
        return { formatted: m + g + _, cursorNodeStart: m.length, cursorNodeText: g };
      }
      return { formatted: o.join("") };
    }
    function LE(e, t, n = 0) {
      let r = 0;
      for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
      return r;
    }
    function FE(e) {
      return e !== null && typeof e == "object";
    }
    function* ls(e, t) {
      let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (a) => Bd(a) && r(a);
      for (let a of n(e)) {
        let s = e[a];
        if (Array.isArray(s)) for (let o of s) i(o) && (yield o);
        else i(s) && (yield s);
      }
    }
    function* IE(e, t) {
      let n = [e];
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (let a of ls(i, t)) yield a, n.push(a);
      }
    }
    function RE(e, t) {
      return ls(e, t).next().done;
    }
    function ma(e) {
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
    function OE(e, t, n) {
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
    function xE(e, t, n = {}) {
      let r = Xn(e, n.backwards ? t - 1 : t, n), i = Nr(e, r, n);
      return r !== i;
    }
    function kE(e) {
      return Array.isArray(e) && e.length > 0;
    }
    function ME(e) {
      return e ? (t) => e(t, pu) : Kd;
    }
    function UE(e) {
      let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
      return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
    }
    function Yo(e, t) {
      (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = UE(e);
    }
    function bi(e, t) {
      t.leading = !0, t.trailing = !1, Yo(e, t);
    }
    function cs(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), Yo(e, t);
    }
    function yi(e, t) {
      t.leading = !1, t.trailing = !0, Yo(e, t);
    }
    function zo(e, t) {
      if (Cs.has(e)) return Cs.get(e);
      let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i }, locStart: a, locEnd: s } = t;
      if (!r) return [];
      let o = ((n == null ? void 0 : n(e, t)) ?? [...ls(e, { getVisitorKeys: ya(i) })]).flatMap((u) => r(u) ? [u] : zo(u, t));
      return o.sort((u, l) => a(u) - a(l) || s(u) - s(l)), Cs.set(e, o), o;
    }
    function Bc(e, t, n, r) {
      let { locStart: i, locEnd: a } = n, s = i(t), o = a(t), u = zo(e, n), l, c, f = 0, p = u.length;
      for (; f < p; ) {
        let m = f + p >> 1, g = u[m], _ = i(g), L = a(g);
        if (_ <= s && o <= L) return Bc(g, t, n, g);
        if (L <= s) {
          l = g, f = m + 1;
          continue;
        }
        if (o <= _) {
          c = g, p = m;
          continue;
        }
        throw new Error("Comment location overlaps with node location");
      }
      if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
        let { quasis: m } = r, g = Xo(m, t, n);
        l && Xo(m, l, n) !== g && (l = null), c && Xo(m, c, n) !== g && (c = null);
      }
      return { enclosingNode: r, precedingNode: l, followingNode: c };
    }
    function PE(e, t) {
      let { comments: n } = e;
      if (delete e.comments, !$d(n) || !t.printer.canAttachComment) return;
      let r = [], { locStart: i, locEnd: a, printer: { experimentalFeatures: { avoidAstMutation: s = !1 } = {}, handleComments: o = {} }, originalText: u } = t, { ownLine: l = Ts, endOfLine: c = Ts, remaining: f = Ts } = o, p = n.map((m, g) => ({ ...Bc(e, m, t), comment: m, text: u, options: t, ast: e, isLastComment: n.length - 1 === g }));
      for (let [m, g] of p.entries()) {
        let { comment: _, precedingNode: L, enclosingNode: A, followingNode: F, text: C, options: x, ast: U, isLastComment: q } = g;
        if (x.parser === "json" || x.parser === "json5" || x.parser === "jsonc" || x.parser === "__js_expression" || x.parser === "__ts_expression" || x.parser === "__vue_expression" || x.parser === "__vue_ts_expression") {
          if (i(_) - i(U) <= 0) {
            bi(U, _);
            continue;
          }
          if (a(_) - a(U) >= 0) {
            yi(U, _);
            continue;
          }
        }
        let I;
        if (s ? I = [g] : (_.enclosingNode = A, _.precedingNode = L, _.followingNode = F, I = [_, C, x, U, q]), BE(C, x, p, m)) _.placement = "ownLine", l(...I) || (F ? bi(F, _) : L ? yi(L, _) : cs(A || U, _));
        else if (VE(C, x, p, m)) _.placement = "endOfLine", c(...I) || (L ? yi(L, _) : F ? bi(F, _) : cs(A || U, _));
        else if (_.placement = "remaining", !f(...I)) if (L && F) {
          let B = r.length;
          B > 0 && r[B - 1].followingNode !== F && Vc(r, x), r.push(g);
        } else L ? yi(L, _) : F ? bi(F, _) : cs(A || U, _);
      }
      if (Vc(r, t), !s) for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
    }
    function BE(e, t, n, r) {
      let { comment: i, precedingNode: a } = n[r], { locStart: s, locEnd: o } = t, u = s(i);
      if (a) for (let l = r - 1; l >= 0; l--) {
        let { comment: c, precedingNode: f } = n[l];
        if (f !== a || !mu(e.slice(o(c), u))) break;
        u = s(c);
      }
      return Jn(e, u, { backwards: !0 });
    }
    function VE(e, t, n, r) {
      let { comment: i, followingNode: a } = n[r], { locStart: s, locEnd: o } = t, u = o(i);
      if (a) for (let l = r + 1; l < n.length; l++) {
        let { comment: c, followingNode: f } = n[l];
        if (f !== a || !mu(e.slice(u, s(c)))) break;
        u = o(c);
      }
      return Jn(e, u);
    }
    function Vc(e, t) {
      var n, r;
      let i = e.length;
      if (i === 0) return;
      let { precedingNode: a, followingNode: s } = e[0], o = t.locStart(s), u;
      for (u = i; u > 0; --u) {
        let { comment: l, precedingNode: c, followingNode: f } = e[u - 1];
        Ns.strictEqual(c, a), Ns.strictEqual(f, s);
        let p = t.originalText.slice(t.locEnd(l), o);
        if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, p, t)) ?? /^[\s(]*$/u.test(p)) o = t.locStart(l);
        else break;
      }
      for (let [l, { comment: c }] of e.entries()) l < u ? yi(a, c) : bi(s, c);
      for (let l of [a, s]) l.comments && l.comments.length > 1 && l.comments.sort((c, f) => t.locStart(c) - t.locStart(f));
      e.length = 0;
    }
    function Xo(e, t, n) {
      let r = n.locStart(t) - 1;
      for (let i = 1; i < e.length; ++i) if (r < n.locStart(e[i])) return i - 1;
      return 0;
    }
    function $E(e, t) {
      let n = t - 1;
      n = Xn(e, n, { backwards: !0 }), n = Nr(e, n, { backwards: !0 }), n = Xn(e, n, { backwards: !0 });
      let r = Nr(e, n, { backwards: !0 });
      return n !== r;
    }
    function $c(e, t) {
      let n = e.node;
      return n.printed = !0, t.printer.printComment(e, t);
    }
    function KE(e, t) {
      var n;
      let r = e.node, i = [$c(e, t)], { printer: a, originalText: s, locStart: o, locEnd: u } = t;
      if ((n = a.isBlockComment) != null && n.call(a, r)) {
        let c = Jn(s, u(r)) ? Jn(s, o(r), { backwards: !0 }) ? br : uu : " ";
        i.push(c);
      } else i.push(br);
      let l = Nr(s, Xn(s, u(r)));
      return l !== !1 && Jn(s, l) && i.push(br), i;
    }
    function jE(e, t, n) {
      var r;
      let i = e.node, a = $c(e, t), { printer: s, originalText: o, locStart: u } = t, l = (r = s.isBlockComment) == null ? void 0 : r.call(s, i);
      if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || Jn(o, u(i), { backwards: !0 })) {
        let c = ws(o, u(i));
        return { doc: Go([br, c ? br : "", a]), isBlock: l, hasLineSuffix: !0 };
      }
      return !l || n != null && n.hasLineSuffix ? { doc: [Go([" ", a]), ba], isBlock: l, hasLineSuffix: !0 } : { doc: [" ", a], isBlock: l, hasLineSuffix: !1 };
    }
    function qE(e, t) {
      let n = e.node;
      if (!n) return {};
      let r = t[Symbol.for("printedComments")];
      if ((n.comments || []).filter((o) => !r.has(o)).length === 0) return { leading: "", trailing: "" };
      let i = [], a = [], s;
      return e.each(() => {
        let o = e.node;
        if (r != null && r.has(o)) return;
        let { leading: u, trailing: l } = o;
        u ? i.push(KE(e, t)) : l && (s = jE(e, t, s), a.push(s.doc));
      }, "comments"), { leading: i, trailing: a };
    }
    function GE(e, t, n) {
      let { leading: r, trailing: i } = qE(e, n);
      return !r && !i ? t : as(t, (a) => [r, a, i]);
    }
    function HE(e) {
      let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
      for (let r of t) {
        if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
        delete r.printed;
      }
    }
    function WE(e) {
      return () => {
      };
    }
    function Kc({ plugins: e = [], showDeprecated: t = !1 } = {}) {
      let n = e.flatMap((i) => i.languages ?? []), r = [];
      for (let i of zE(Object.assign({}, ...e.map(({ options: a }) => a), qd))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((a) => !a.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...YE(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter((a) => {
        var s;
        return ((s = a.defaultOptions) == null ? void 0 : s[i.name]) !== void 0;
      }).map((a) => [a.name, a.defaultOptions[i.name]])), r.push(i));
      return { languages: n, options: r };
    }
    function* YE(e, t, n) {
      let r = new Set(e.map((i) => i.value));
      for (let i of t) if (i.parsers) {
        for (let a of i.parsers) if (!r.has(a)) {
          r.add(a);
          let s = n.find((u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, a)), o = i.name;
          s != null && s.name && (o += ` (plugin: ${s.name})`), yield { value: a, description: o };
        }
      }
    }
    function zE(e) {
      let t = [];
      for (let [n, r] of Object.entries(e)) {
        let i = { name: n, ...r };
        Array.isArray(i.default) && (i.default = gt(!1, i.default, -1).value), t.push(i);
      }
      return t;
    }
    function jc(e, t) {
      if (!t) return;
      let n = Gd(t).toLowerCase();
      return e.find(({ filenames: r }) => r == null ? void 0 : r.some((i) => i.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((i) => n.endsWith(i)));
    }
    function XE(e, t) {
      if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
    }
    function JE(e, t) {
      let n = e.plugins.flatMap((i) => i.languages ?? []), r = XE(n, t.language) ?? jc(n, t.physicalFile) ?? jc(n, t.file) ?? (t.physicalFile, void 0);
      return r == null ? void 0 : r.parsers[0];
    }
    function qc(e, t, n, r) {
      return [`Invalid ${Gr.default.red(r.key(e))} value.`, `Expected ${Gr.default.blue(n)},`, `but received ${t === Du ? Gr.default.gray("nothing") : Gr.default.red(r.value(t))}.`].join(" ");
    }
    function Gc({ text: e, list: t }, n) {
      let r = [];
      return e && r.push(`- ${Gr.default.blue(e)}`), t && r.push([`- ${Gr.default.blue(t.title)}:`].concat(t.values.map((i) => Gc(i, n - vu.length).replace(/^|\n/g, `$&${vu}`))).join(`
`)), Hc(r, n);
    }
    function Hc(e, t) {
      if (e.length === 1) return e[0];
      let [n, r] = e, [i, a] = e.map((s) => s.split(`
`, 1)[0].length);
      return i > t && i > a ? r : n;
    }
    function QE(e, t) {
      if (e === t) return 0;
      let n = e;
      e.length > t.length && (e = t, t = n);
      let r = e.length, i = t.length;
      for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--;
      let a = 0;
      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
      if (r -= a, i -= a, r === 0) return i;
      let s, o, u, l, c = 0, f = 0;
      for (; c < r; ) yu[c] = e.charCodeAt(a + c), As[c] = ++c;
      for (; f < i; ) for (s = t.charCodeAt(a + f), u = f++, o = f, c = 0; c < r; c++) l = s === yu[c] ? u : u + 1, u = As[c], o = As[c] = u > o ? l > o ? o + 1 : l : l > u ? u + 1 : l;
      return o;
    }
    function ZE(e, t) {
      let n = new e(t), r = Object.create(n);
      for (let i of zd) i in t && (r[i] = e2(t[i], n, Qn.prototype[i].length));
      return r;
    }
    function e2(e, t, n) {
      return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
    }
    function Wc({ from: e, to: t }) {
      return { from: [e], to: t };
    }
    function t2(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) {
        let i = r[t];
        if (n[i]) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n[i] = r;
      }
      return n;
    }
    function n2(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = r[t];
        if (n.has(i)) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n.set(i, r);
      }
      return n;
    }
    function r2() {
      let e = /* @__PURE__ */ Object.create(null);
      return (t) => {
        let n = JSON.stringify(t);
        return e[n] ? !0 : (e[n] = !0, !1);
      };
    }
    function i2(e, t) {
      let n = [], r = [];
      for (let i of e) t(i) ? n.push(i) : r.push(i);
      return [n, r];
    }
    function a2(e) {
      return e === Math.floor(e);
    }
    function s2(e, t) {
      if (e === t) return 0;
      let n = typeof e, r = typeof t, i = ["undefined", "object", "boolean", "number", "string"];
      return n !== r ? i.indexOf(n) - i.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
    }
    function o2(e) {
      return (...t) => {
        let n = e(...t);
        return typeof n == "string" ? new Error(n) : n;
      };
    }
    function Yc(e) {
      return e === void 0 ? {} : e;
    }
    function zc(e) {
      if (typeof e == "string") return { text: e };
      let { text: t, list: n } = e;
      return u2((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(zc) } } : { text: t };
    }
    function Xc(e, t) {
      return e === !0 ? !0 : e === !1 ? { value: t } : e;
    }
    function Jc(e, t, n = !1) {
      return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
    }
    function Qc(e, t) {
      return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
    }
    function Jo(e, t) {
      return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => Qc(n, t)) : [Qc(e, t)];
    }
    function Zc(e, t) {
      let n = Jo(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
      return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
    }
    function u2(e, t) {
      if (!e) throw new Error(t);
    }
    function l2(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: a, descriptor: s } = {}) {
      if (r) {
        if (!a) throw new Error("'FlagSchema' option is required.");
        if (!s) throw new Error("'descriptor' option is required.");
      } else s = qr;
      let o = i ? Array.isArray(i) ? (p, m) => i.includes(p) ? { [p]: m } : void 0 : (p, m) => ({ [p]: m }) : (p, m, g) => {
        let { _, ...L } = g.schemas;
        return Nu(p, m, { ...g, schemas: L });
      }, u = c2(t, { isCLI: r, FlagSchema: a }), l = new oh(u, { logger: n, unknown: o, descriptor: s }), c = n !== !1;
      c && Tu && (l._hasDeprecationWarned = Tu);
      let f = l.normalize(e);
      return c && (Tu = l._hasDeprecationWarned), f;
    }
    function c2(e, { isCLI: t, FlagSchema: n }) {
      let r = [];
      t && r.push(Jd.create({ name: "_" }));
      for (let i of e) r.push(d2(i, { isCLI: t, optionInfos: e, FlagSchema: n })), i.alias && t && r.push(Xd.create({ name: i.alias, sourceName: i.name }));
      return r;
    }
    function d2(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
      let { name: i } = e, a = { name: i }, s, o = {};
      switch (e.type) {
        case "int":
          s = nh, t && (a.preprocess = Number);
          break;
        case "string":
          s = Cu;
          break;
        case "choice":
          s = eh, a.choices = e.choices.map((u) => u != null && u.redirect ? { ...u, redirect: { to: { key: e.name, value: u.redirect } } } : u);
          break;
        case "boolean":
          s = Zd;
          break;
        case "flag":
          s = r, a.flags = n.flatMap((u) => [u.alias, u.description && u.name, u.oppositeDescription && `no-${u.name}`].filter(Boolean));
          break;
        case "path":
          s = Cu;
          break;
        default:
          throw new Error(`Unexpected type ${e.type}`);
      }
      if (e.exception ? a.validate = (u, l, c) => e.exception(u) || l.validate(u, c) : a.validate = (u, l, c) => u === void 0 || l.validate(u, c), e.redirect && (o.redirect = (u) => u ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (o.deprecated = !0), t && !e.array) {
        let u = a.preprocess || ((l) => l);
        a.preprocess = (l, c, f) => c.preprocess(u(Array.isArray(l) ? gt(!1, l, -1) : l), f);
      }
      return e.array ? Qd.create({ ...t ? { preprocess: (u) => Array.isArray(u) ? u : [u] } : {}, ...o, valueSchema: s.create(a) }) : s.create({ ...a, ...o });
    }
    function ed(e, t) {
      if (!t) throw new Error("parserName is required.");
      let n = wu(!1, e, (i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, t));
      if (n) return n;
      let r = `Couldn't resolve parser "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new gu(r);
    }
    function h2(e, t) {
      if (!t) throw new Error("astFormat is required.");
      let n = wu(!1, e, (i) => i.printers && Object.prototype.hasOwnProperty.call(i.printers, t));
      if (n) return n;
      let r = `Couldn't find plugin for AST format "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new gu(r);
    }
    function td({ plugins: e, parser: t }) {
      let n = ed(e, t);
      return nd(n, t);
    }
    function nd(e, t) {
      let n = e.parsers[t];
      return typeof n == "function" ? n() : n;
    }
    function f2(e, t) {
      let n = e.printers[t];
      return typeof n == "function" ? n() : n;
    }
    async function p2(e, t = {}) {
      var n;
      let r = { ...e };
      if (!r.parser) if (r.filepath) {
        if (r.parser = Hd(r, { physicalFile: r.filepath }), !r.parser) throw new Eu(`No parser could be inferred for file "${r.filepath}".`);
      } else throw new Eu("No parser and no file path given, couldn't infer a parser.");
      let i = Kc({ plugins: e.plugins, showDeprecated: !0 }).options, a = { ...Au, ...Object.fromEntries(i.filter((p) => p.default !== void 0).map((p) => [p.name, p.default])) }, s = ed(r.plugins, r.parser), o = await nd(s, r.parser);
      r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
      let u = (n = s.printers) != null && n[o.astFormat] ? s : h2(r.plugins, o.astFormat), l = await f2(u, o.astFormat);
      r.printer = l;
      let c = u.defaultOptions ? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, p]) => p !== void 0)) : {}, f = { ...a, ...c };
      for (let [p, m] of Object.entries(f)) (r[p] === null || r[p] === void 0) && (r[p] = m);
      return r.parser === "json" && (r.trailingComma = "none"), uh(r, i, { passThrough: Object.keys(Au), ...t });
    }
    async function m2(e, t) {
      let n = await td(t), r = n.preprocess ? n.preprocess(e, t) : e;
      t.originalText = r;
      let i;
      try {
        i = await n.parse(r, t, t);
      } catch (a) {
        g2(a, e);
      }
      return { text: r, ast: i };
    }
    function g2(e, t) {
      let { loc: n } = e;
      if (n) {
        let r = (0, ch.codeFrameColumns)(t, n, { highlightCode: !0 });
        throw e.message += `
` + r, e.codeFrame = r, e;
      }
      throw e;
    }
    async function E2(e, t, n, r, i) {
      let { embeddedLanguageFormatting: a, printer: { embed: s, hasPrettierIgnore: o = () => !1, getVisitorKeys: u } } = n;
      if (!s || a !== "auto") return;
      if (s.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
      let l = ya(s.getVisitorKeys ?? u), c = [];
      m();
      let f = e.stack;
      for (let { print: g, node: _, pathStack: L } of c) try {
        e.stack = L;
        let A = await g(p, t, e, n);
        A && i.set(_, A);
      } catch (A) {
        if (globalThis.PRETTIER_DEBUG) throw A;
      }
      e.stack = f;
      function p(g, _) {
        return _2(g, _, n, r);
      }
      function m() {
        let { node: g } = e;
        if (g === null || typeof g != "object" || o(e)) return;
        for (let L of l(g)) Array.isArray(g[L]) ? e.each(m, L) : e.call(m, L);
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
    async function _2(e, t, n, r) {
      let i = await Hr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: a } = await Ti(e, i), s = await r(a, i);
      return xc(s);
    }
    function D2(e, t) {
      let { originalText: n, [Symbol.for("comments")]: r, locStart: i, locEnd: a, [Symbol.for("printedComments")]: s } = t, { node: o } = e, u = i(o), l = a(o);
      for (let c of r) i(c) >= u && a(c) <= l && s.add(c);
      return n.slice(u, l);
    }
    async function ds(e, t) {
      ({ ast: e } = await id(e, t));
      let n = /* @__PURE__ */ new Map(), r = new Pd(e), i = jd(t), a = /* @__PURE__ */ new Map();
      await E2(r, o, t, ds, a);
      let s = await rd(r, t, o, void 0, a);
      if (HE(t), t.nodeAfterCursor && !t.nodeBeforeCursor) return [yr, s];
      if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [s, yr];
      return s;
      function o(l, c) {
        return l === void 0 || l === r ? u(c) : Array.isArray(l) ? r.call(() => u(c), ...l) : r.call(() => u(c), l);
      }
      function u(l) {
        i(r);
        let c = r.node;
        if (c == null) return "";
        let f = c && typeof c == "object" && l === void 0;
        if (f && n.has(c)) return n.get(c);
        let p = rd(r, t, o, l, a);
        return f && n.set(c, p), p;
      }
    }
    function rd(e, t, n, r, i) {
      var a;
      let { node: s } = e, { printer: o } = t, u;
      switch ((a = o.hasPrettierIgnore) != null && a.call(o, e) ? u = dh(e, t) : i.has(s) ? u = i.get(s) : u = o.print(e, t, n, r), s) {
        case t.cursorNode:
          u = as(u, (l) => [yr, l, yr]);
          break;
        case t.nodeBeforeCursor:
          u = as(u, (l) => [l, yr]);
          break;
        case t.nodeAfterCursor:
          u = as(u, (l) => [yr, l]);
          break;
      }
      return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) && (u = GE(e, u, t)), u;
    }
    async function id(e, t) {
      let n = e.comments ?? [];
      t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), PE(e, t);
      let { printer: { preprocess: r } } = t;
      return e = r ? await r(e, t) : e, { ast: e, comments: n };
    }
    function v2(e, t) {
      let { cursorOffset: n, locStart: r, locEnd: i } = t, a = ya(t.printer.getVisitorKeys), s = (m) => r(m) <= n && i(m) >= n, o = e, u = [e];
      for (let m of IE(e, { getVisitorKeys: a, filter: s })) u.push(m), o = m;
      if (RE(o, { getVisitorKeys: a })) return { cursorNode: o };
      let l, c, f = -1, p = Number.POSITIVE_INFINITY;
      for (; u.length > 0 && (l === void 0 || c === void 0); ) {
        o = u.pop();
        let m = l !== void 0, g = c !== void 0;
        for (let _ of ls(o, { getVisitorKeys: a })) {
          if (!m) {
            let L = i(_);
            L <= n && L > f && (l = _, f = L);
          }
          if (!g) {
            let L = r(_);
            L >= n && L < p && (c = _, p = L);
          }
        }
      }
      return { nodeBeforeCursor: l, nodeAfterCursor: c };
    }
    function b2(e, t) {
      let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
      if (!n) return e;
      let i = ya(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
      return s(e);
      function s(o, u) {
        if (!(o !== null && typeof o == "object")) return o;
        if (Array.isArray(o)) return o.map((p) => s(p, u)).filter(Boolean);
        let l = {}, c = new Set(i(o));
        for (let p in o) !Object.prototype.hasOwnProperty.call(o, p) || a.has(p) || (c.has(p) ? l[p] = s(o[p], o) : l[p] = o[p]);
        let f = n(o, l, u);
        if (f !== null) return f ?? l;
      }
    }
    function y2(e, t) {
      let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
      return n.find((i) => Su.has(i.type) && r.has(i));
    }
    function ad(e) {
      let t = mh(!1, e, (n) => n.type !== "Program" && n.type !== "File");
      return t === -1 ? e : e.slice(0, t + 1);
    }
    function N2(e, t, { locStart: n, locEnd: r }) {
      let i = e.node, a = t.node;
      if (i === a) return { startNode: i, endNode: a };
      let s = n(e.node);
      for (let u of ad(t.parentNodes)) if (n(u) >= s) a = u;
      else break;
      let o = r(t.node);
      for (let u of ad(e.parentNodes)) {
        if (r(u) <= o) i = u;
        else break;
        if (i === a) break;
      }
      return { startNode: i, endNode: a };
    }
    function Qo(e, t, n, r, i = [], a) {
      let { locStart: s, locEnd: o } = n, u = s(e), l = o(e);
      if (!(t > l || t < u || a === "rangeEnd" && t === u || a === "rangeStart" && t === l)) {
        for (let c of zo(e, n)) {
          let f = Qo(c, t, n, r, [e, ...i], a);
          if (f) return f;
        }
        if (!r || r(e, i[0])) return { node: e, parentNodes: i };
      }
    }
    function C2(e, t) {
      return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
    }
    function sd(e, t, n) {
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
          return C2(t.type, n == null ? void 0 : n.type);
        case "json":
        case "json5":
        case "jsonc":
        case "json-stringify":
          return Su.has(t.type);
        case "graphql":
          return Eh.has(t.kind);
        case "vue":
          return t.tag !== "root";
      }
      return !1;
    }
    function T2(e, t, n) {
      let { rangeStart: r, rangeEnd: i, locStart: a, locEnd: s } = t;
      Ns.ok(i > r);
      let o = e.slice(r, i).search(/\S/u), u = o === -1;
      if (!u) for (r += o; i > r && !/\S/u.test(e[i - 1]); --i) ;
      let l = Qo(n, r, t, (m, g) => sd(t, m, g), [], "rangeStart"), c = u ? l : Qo(n, i, t, (m) => sd(t, m), [], "rangeEnd");
      if (!l || !c) return { rangeStart: 0, rangeEnd: 0 };
      let f, p;
      if (gh(t)) {
        let m = y2(l, c);
        f = m, p = m;
      } else ({ startNode: f, endNode: p } = N2(l, c, t));
      return { rangeStart: Math.min(a(f), a(p)), rangeEnd: Math.max(s(f), s(p)) };
    }
    async function od(e, t, n = 0) {
      if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
      let { ast: r, text: i } = await Ti(e, t);
      t.cursorOffset >= 0 && (t = { ...t, ...hh(r, t) });
      let a = await ds(r, t);
      n > 0 && (a = Uc([br, a], n, t.tabWidth));
      let s = us(a, t);
      if (n > 0) {
        let u = s.formatted.trim();
        s.cursorNodeStart !== void 0 && (s.cursorNodeStart -= s.formatted.indexOf(u), s.cursorNodeStart < 0 && (s.cursorNodeStart = 0, s.cursorNodeText = s.cursorNodeText.trimStart()), s.cursorNodeStart + s.cursorNodeText.length > u.length && (s.cursorNodeText = s.cursorNodeText.trimEnd())), s.formatted = u + jo(t.endOfLine);
      }
      let o = t[Symbol.for("comments")];
      if (t.cursorOffset >= 0) {
        let u, l, c, f;
        if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && s.cursorNodeText) if (c = s.cursorNodeStart, f = s.cursorNodeText, t.cursorNode) u = t.locStart(t.cursorNode), l = i.slice(u, t.locEnd(t.cursorNode));
        else {
          if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
          u = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
          let A = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : i.length;
          l = i.slice(u, A);
        }
        else u = 0, l = i, c = 0, f = s.formatted;
        let p = t.cursorOffset - u;
        if (l === f) return { formatted: s.formatted, cursorOffset: c + p, comments: o };
        let m = l.split("");
        m.splice(p, 0, Fu);
        let g = f.split(""), _ = Z0(m, g), L = c;
        for (let A of _) if (A.removed) {
          if (A.value.includes(Fu)) break;
        } else L += A.count;
        return { formatted: s.formatted, cursorOffset: L, comments: o };
      }
      return { formatted: s.formatted, cursorOffset: -1, comments: o };
    }
    async function w2(e, t) {
      let { ast: n, text: r } = await Ti(e, t), { rangeStart: i, rangeEnd: a } = T2(r, t, n), s = r.slice(i, a), o = Math.min(i, r.lastIndexOf(`
`, i) + 1), u = r.slice(o, i).match(/^\s*/u)[0], l = bs(u, t.tabWidth), c = await od(s, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > i && t.cursorOffset <= a ? t.cursorOffset - i : -1, endOfLine: "lf" }, l), f = c.formatted.trimEnd(), { cursorOffset: p } = t;
      p > a ? p += f.length - s.length : c.cursorOffset >= 0 && (p = c.cursorOffset + i);
      let m = r.slice(0, i) + f + r.slice(a);
      if (t.endOfLine !== "lf") {
        let g = jo(t.endOfLine);
        p >= 0 && g === `\r
` && (p += Ic(m.slice(0, p), `
`)), m = Ea(!1, m, `
`, g);
      }
      return { formatted: m, cursorOffset: p, comments: c.comments };
    }
    function Zo(e, t, n) {
      return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
    }
    function ud(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
      return n = Zo(e, n, -1), r = Zo(e, r, 0), i = Zo(e, i, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i };
    }
    function ld(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a } = ud(e, t), s = e.charAt(0) === Lu;
      if (s && (e = e.slice(1), n--, r--, i--), a === "auto" && (a = eE(e)), e.includes("\r")) {
        let o = (u) => Ic(e.slice(0, Math.max(u, 0)), `\r
`);
        n -= o(n), r -= o(r), i -= o(i), e = tE(e);
      }
      return { hasBOM: s, text: e, options: ud(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a }) };
    }
    async function cd(e, t) {
      let n = await td(t);
      return !n.hasPragma || n.hasPragma(e);
    }
    async function dd(e, t) {
      let { hasBOM: n, text: r, options: i } = ld(e, await Hr(t));
      if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await cd(r, i)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
      let a;
      return i.rangeStart > 0 || i.rangeEnd < r.length ? a = await w2(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await cd(r, i) && (r = i.printer.insertPragma(r)), a = await od(r, i)), n && (a.formatted = Lu + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
    }
    async function A2(e, t, n) {
      let { text: r, options: i } = ld(e, await Hr(t)), a = await Ti(r, i);
      return n && (n.preprocessForPrint && (a.ast = await id(a.ast, i)), n.massage && (a.ast = fh(a.ast, i))), a;
    }
    async function S2(e, t) {
      t = await Hr(t);
      let n = await ds(e, t);
      return us(n, t);
    }
    async function L2(e, t) {
      let n = NE(e), { formatted: r } = await dd(n, { ...t, parser: "__js_expression" });
      return r;
    }
    async function F2(e, t) {
      t = await Hr(t);
      let { ast: n } = await Ti(e, t);
      return ds(n, t);
    }
    async function I2(e, t) {
      return us(e, await Hr(t));
    }
    function R2(e, t) {
      if (t === !1) return !1;
      if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
        for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
      }
      return t;
    }
    function O2(e, t) {
      return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? fu(e, t) : t;
    }
    function x2(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = Xn(e, r), r = Fs(e, r), r = Is(e, r), r = Nr(e, r);
      return r;
    }
    function k2(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = hu(e, r), r = Fs(e, r), r = Xn(e, r);
      return r = Is(e, r), r = Nr(e, r), r !== !1 && Jn(e, r);
    }
    function M2(e, t) {
      let n = e.lastIndexOf(`
`);
      return n === -1 ? 0 : bs(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
    }
    function U2(e) {
      if (typeof e != "string") throw new TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function P2(e, t) {
      let n = e.match(new RegExp(`(${U2(t)})+`, "gu"));
      return n === null ? 0 : n.reduce((r, i) => Math.max(r, i.length / t.length), 0);
    }
    function B2(e, t) {
      let n = Rs(e, t);
      return n === !1 ? "" : e.charAt(n);
    }
    function V2(e, t) {
      let n = t === !0 || t === Ca ? Ca : Ru, r = n === Ca ? Ru : Ca, i = 0, a = 0;
      for (let s of e) s === n ? i++ : s === r && a++;
      return i > a ? r : n;
    }
    function $2(e, t, n) {
      for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
      return !1;
    }
    function K2(e, t, n = {}) {
      return Xn(e, n.backwards ? t - 1 : t, n) !== t;
    }
    function j2(e, t, n) {
      let r = t === '"' ? "'" : '"', i = Ea(!1, e, /\\(.)|(["'])/gsu, (a, s, o) => s === r ? s : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
      return t + i + t;
    }
    function q2(e, t, n) {
      return Rs(e, n(t));
    }
    function G2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Rs(e, t) : q2(...arguments);
    }
    function H2(e, t, n) {
      return ws(e, n(t));
    }
    function W2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? ws(e, t) : H2(...arguments);
    }
    function Y2(e, t, n) {
      return Os(e, n(t));
    }
    function z2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Os(e, t) : Y2(...arguments);
    }
    function Vr(e, t = 1) {
      return async (...n) => {
        let r = n[t] ?? {}, i = r.plugins ?? [];
        return n[t] = { ...r, plugins: Array.isArray(i) ? i : Object.values(i) }, e(...n);
      };
    }
    async function eu(e, t) {
      let { formatted: n } = await xs(e, { ...t, cursorOffset: -1 });
      return n;
    }
    async function hd(e, t) {
      return await eu(e, t) === e;
    }
    var fd, hs, pd, md, gd, Ed, tu, nu, fs, _d, ga, Dd, vd, Ni, ps, bd, ru, yd, Ea, _a, Nd, Da, Cd, ms, Td, wd, Ci, va, _r, xn, Dr, kn, Mn, Un, Ut, En, Gt, Pn, Bn, Vn, _t, _n, Zt, iu, Ad, gt, vr, Sd, Ld, $r, au, gs, Es, Dn, su, Fd, Id, ba, Rd, _s, ou, uu, Od, br, lu, yr, xd, kd, Md, Ds, Pt, vn, Kr, vs, bs, jr, cu, ys, Ud, Pd, du, Ns, Bd, Vd, Xn, hu, fu, Nr, Jn, $d, pu, Kd, ya, Cs, Ts, mu, ws, jd, gu, Eu, qd, Gd, Hd, qr, _u, Wd, Gr, Du, Na, vu, Yd, bu, As, yu, Nu, zd, Qn, Xd, Jd, Qd, Zd, eh, th, nh, Cu, rh, ih, ah, sh, oh, Tu, uh, lh, wu, Au, Hr, ch, Ti, dh, hh, fh, ph, mh, gh, Su, Eh, Lu, Fu, Ss, _h, Dh, vh, Iu, Ls, Fs, Is, Rs, Os, bh, yh, Nh, Ca, Ru, Ch, Th, wh, Ah, xs, Ou, xu, Sh, X2 = q0(() => {
      fd = Object.create, hs = Object.defineProperty, pd = Object.getOwnPropertyDescriptor, md = Object.getOwnPropertyNames, gd = Object.getPrototypeOf, Ed = Object.prototype.hasOwnProperty, tu = (e) => {
        throw TypeError(e);
      }, nu = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), fs = (e, t) => {
        for (var n in t) hs(e, n, { get: t[n], enumerable: !0 });
      }, _d = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of md(t)) !Ed.call(e, i) && i !== n && hs(e, i, { get: () => t[i], enumerable: !(r = pd(t, i)) || r.enumerable });
        return e;
      }, ga = (e, t, n) => (n = e != null ? fd(gd(e)) : {}, _d(t || !e || !e.__esModule ? hs(n, "default", { value: e, enumerable: !0 }) : n, e)), Dd = (e, t, n) => t.has(e) || tu("Cannot " + n), vd = (e, t, n) => t.has(e) ? tu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ni = (e, t, n) => (Dd(e, t, "access private method"), n), ps = nu((e, t) => {
        var n = new Proxy(String, { get: () => n });
        t.exports = n;
      }), bd = nu((e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        function t() {
          return new Proxy({}, { get: () => (a) => a });
        }
        var n = /\r\n|[\n\r\u2028\u2029]/;
        function r(a, s, o) {
          let u = Object.assign({ column: 0, line: -1 }, a.start), l = Object.assign({}, u, a.end), { linesAbove: c = 2, linesBelow: f = 3 } = o || {}, p = u.line, m = u.column, g = l.line, _ = l.column, L = Math.max(p - (c + 1), 0), A = Math.min(s.length, g + f);
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
          let u = t(), l = a.split(n), { start: c, end: f, markerLines: p } = r(s, l, o), m = s.start && typeof s.start.column == "number", g = String(f).length, _ = a.split(n, f).slice(c, f).map((L, A) => {
            let F = c + 1 + A, C = ` ${` ${F}`.slice(-g)} |`, x = p[F], U = !p[F + 1];
            if (x) {
              let q = "";
              if (Array.isArray(x)) {
                let I = L.slice(0, Math.max(x[0] - 1, 0)).replace(/[^\t]/g, " "), B = x[1] || 1;
                q = [`
 `, u.gutter(C.replace(/\d/g, " ")), " ", I, u.marker("^").repeat(B)].join(""), U && o.message && (q += " " + u.message(o.message));
              }
              return [u.marker(">"), u.gutter(C), L.length > 0 ? ` ${L}` : "", q].join("");
            } else return ` ${u.gutter(C)}${L.length > 0 ? ` ${L}` : ""}`;
          }).join(`
`);
          return o.message && !m && (_ = `${" ".repeat(g + 1)}${o.message}
${_}`), _;
        }
        e.codeFrameColumns = i;
      }), ru = {}, fs(ru, { __debug: () => xu, check: () => hd, doc: () => Ss, format: () => eu, formatWithCursor: () => xs, getSupportInfo: () => Ou, util: () => Ls, version: () => Iu }), yd = (e, t, n, r) => {
        if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
      }, Ea = yd, On.prototype = { diff: function(e, t) {
        var n, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.callback;
        typeof r == "function" && (i = r, r = {});
        var a = this;
        function s(C) {
          return C = a.postProcess(C, r), i ? (setTimeout(function() {
            i(C);
          }, 0), !0) : C;
        }
        e = this.castInput(e, r), t = this.castInput(t, r), e = this.removeEmpty(this.tokenize(e, r)), t = this.removeEmpty(this.tokenize(t, r));
        var o = t.length, u = e.length, l = 1, c = o + u;
        r.maxEditLength != null && (c = Math.min(c, r.maxEditLength));
        var f = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, p = Date.now() + f, m = [{ oldPos: -1, lastComponent: void 0 }], g = this.extractCommon(m[0], t, e, 0, r);
        if (m[0].oldPos + 1 >= u && g + 1 >= o) return s(wc(a, m[0].lastComponent, t, e, a.useLongestToken));
        var _ = -1 / 0, L = 1 / 0;
        function A() {
          for (var C = Math.max(_, -l); C <= Math.min(L, l); C += 2) {
            var x = void 0, U = m[C - 1], q = m[C + 1];
            U && (m[C - 1] = void 0);
            var I = !1;
            if (q) {
              var B = q.oldPos - C;
              I = q && 0 <= B && B < o;
            }
            var S = U && U.oldPos + 1 < u;
            if (!I && !S) {
              m[C] = void 0;
              continue;
            }
            if (!S || I && U.oldPos < q.oldPos ? x = a.addToPath(q, !0, !1, 0, r) : x = a.addToPath(U, !1, !0, 1, r), g = a.extractCommon(x, t, e, C, r), x.oldPos + 1 >= u && g + 1 >= o) return s(wc(a, x.lastComponent, t, e, a.useLongestToken));
            m[C] = x, x.oldPos + 1 >= u && (L = Math.min(L, C - 1)), g + 1 >= o && (_ = Math.max(_, C + 1));
          }
          l++;
        }
        if (i) (function C() {
          setTimeout(function() {
            if (l > c || Date.now() > p) return i();
            A() || C();
          }, 0);
        })();
        else for (; l <= c && Date.now() <= p; ) {
          var F = A();
          if (F) return F;
        }
      }, addToPath: function(e, t, n, r, i) {
        var a = e.lastComponent;
        return a && !i.oneChangePerToken && a.added === t && a.removed === n ? { oldPos: e.oldPos + r, lastComponent: { count: a.count + 1, added: t, removed: n, previousComponent: a.previousComponent } } : { oldPos: e.oldPos + r, lastComponent: { count: 1, added: t, removed: n, previousComponent: a } };
      }, extractCommon: function(e, t, n, r, i) {
        for (var a = t.length, s = n.length, o = e.oldPos, u = o - r, l = 0; u + 1 < a && o + 1 < s && this.equals(n[o + 1], t[u + 1], i); ) u++, o++, l++, i.oneChangePerToken && (e.lastComponent = { count: 1, previousComponent: e.lastComponent, added: !1, removed: !1 });
        return l && !i.oneChangePerToken && (e.lastComponent = { count: l, previousComponent: e.lastComponent, added: !1, removed: !1 }), e.oldPos = o, u;
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
      } }, _a = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Nd = new RegExp("[".concat(_a, "]+|\\s+|[^").concat(_a, "]"), "ug"), Da = new On(), Da.equals = function(e, t, n) {
        return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
      }, Da.tokenize = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
        if (t.intlSegmenter) {
          if (t.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
          n = Array.from(t.intlSegmenter.segment(e), function(a) {
            return a.segment;
          });
        } else n = e.match(Nd) || [];
        var r = [], i = null;
        return n.forEach(function(a) {
          /\s/.test(a) ? i == null ? r.push(a) : r.push(r.pop() + a) : /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + a) : r.push(i + a) : r.push(a), i = a;
        }), r;
      }, Da.join = function(e) {
        return e.map(function(t, n) {
          return n == 0 ? t : t.replace(/^\s+/, "");
        }).join("");
      }, Da.postProcess = function(e, t) {
        if (!e || t.oneChangePerToken) return e;
        var n = null, r = null, i = null;
        return e.forEach(function(a) {
          a.added ? r = a : a.removed ? i = a : ((r || i) && Fc(n, i, r, a), n = a, r = null, i = null);
        }), (r || i) && Fc(n, i, r, null), e;
      }, Cd = new On(), Cd.tokenize = function(e) {
        var t = new RegExp("(\\r?\\n)|[".concat(_a, "]+|[^\\S\\n\\r]+|[^").concat(_a, "]"), "ug");
        return e.match(t) || [];
      }, ms = new On(), ms.tokenize = function(e, t) {
        t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
        var n = [], r = e.split(/(\n|\r\n)/);
        r[r.length - 1] || r.pop();
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          i % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a);
        }
        return n;
      }, ms.equals = function(e, t, n) {
        return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), On.prototype.equals.call(this, e, t, n);
      }, Td = new On(), Td.tokenize = function(e) {
        return e.split(/(\S.+?[.!?])(?=\s+|$)/);
      }, wd = new On(), wd.tokenize = function(e) {
        return e.split(/([{}:;,]|\s+)/);
      }, Ci = new On(), Ci.useLongestToken = !0, Ci.tokenize = ms.tokenize, Ci.castInput = function(e, t) {
        var n = t.undefinedReplacement, r = t.stringifyReplacer, i = r === void 0 ? function(a, s) {
          return typeof s > "u" ? n : s;
        } : r;
        return typeof e == "string" ? e : JSON.stringify(Ko(e, null, null, i), i, "  ");
      }, Ci.equals = function(e, t, n) {
        return On.prototype.equals.call(Ci, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
      }, va = new On(), va.tokenize = function(e) {
        return e.slice();
      }, va.join = va.removeEmpty = function(e) {
        return e;
      }, _r = "string", xn = "array", Dr = "cursor", kn = "indent", Mn = "align", Un = "trim", Ut = "group", En = "fill", Gt = "if-break", Pn = "indent-if-break", Bn = "line-suffix", Vn = "line-suffix-boundary", _t = "line", _n = "label", Zt = "break-parent", iu = /* @__PURE__ */ new Set([Dr, kn, Mn, Un, Ut, En, Gt, Pn, Bn, Vn, _t, _n, Zt]), Ad = (e, t, n) => {
        if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
      }, gt = Ad, vr = nE, Sd = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), Ld = class extends Error {
        constructor(t) {
          super(rE(t));
          ot(this, "name", "InvalidDocError");
          this.doc = t;
        }
      }, $r = Ld, au = {}, gs = iE, Es = () => {
      }, Dn = Es, su = Es, Fd = Es, Id = { type: Vn }, ba = { type: Zt }, Rd = { type: Un }, _s = { type: _t, hard: !0 }, ou = { type: _t, hard: !0, literal: !0 }, uu = { type: _t }, Od = { type: _t, soft: !0 }, br = [_s, ba], lu = [ou, ba], yr = { type: Dr }, xd = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, kd = (e) => !(CE(e) || TE(e)), Md = /[^\x20-\x7F]/u, Ds = wE, Pt = Symbol("MODE_BREAK"), vn = Symbol("MODE_FLAT"), Kr = Symbol("cursor"), vs = Symbol("DOC_FILL_PRINTED_LENGTH"), bs = LE, Ud = class {
        constructor(e) {
          vd(this, jr), this.stack = [e];
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
          return [...Ni(this, jr, ys).call(this)];
        }
        getName() {
          let { stack: e } = this, { length: t } = e;
          return t > 1 ? gt(!1, e, -2) : null;
        }
        getValue() {
          return gt(!1, this.stack, -1);
        }
        getNode(e = 0) {
          let t = Ni(this, jr, cu).call(this, e);
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
          let n = Ni(this, jr, cu).call(this, t + 1), r = this.stack.splice(n + 1);
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
          for (let t of Ni(this, jr, ys).call(this)) if (e(t)) return t;
        }
        hasAncestor(e) {
          for (let t of Ni(this, jr, ys).call(this)) if (e(t)) return !0;
          return !1;
        }
      }, jr = /* @__PURE__ */ new WeakSet(), cu = function(e) {
        let { stack: t } = this;
        for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
        return -1;
      }, ys = function* () {
        let { stack: e } = this;
        for (let t = e.length - 3; t >= 0; t -= 2) {
          let n = e[t];
          Array.isArray(n) || (yield n);
        }
      }, Pd = Ud, du = new Proxy(() => {
      }, { get: () => du }), Ns = du, Bd = FE, Vd = ma(/\s/u), Xn = ma(" 	"), hu = ma(",; 	"), fu = ma(/[^\n\r]/u), Nr = OE, Jn = xE, $d = kE, pu = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), Kd = (e) => Object.keys(e).filter((t) => !pu.has(t)), ya = ME, Cs = /* @__PURE__ */ new WeakMap(), Ts = () => !1, mu = (e) => !/[\S\n\u2028\u2029]/u.test(e), ws = $E, jd = WE, gu = class extends Error {
        constructor() {
          super(...arguments);
          ot(this, "name", "ConfigError");
        }
      }, Eu = class extends Error {
        constructor() {
          super(...arguments);
          ot(this, "name", "UndefinedParserError");
        }
      }, qd = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, Gd = (e) => String(e).split(/[/\\]/u).pop(), Hd = JE, qr = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
        if (e === null || typeof e != "object") return JSON.stringify(e);
        if (Array.isArray(e)) return `[${e.map((n) => qr.value(n)).join(", ")}]`;
        let t = Object.keys(e);
        return t.length === 0 ? "{}" : `{ ${t.map((n) => `${qr.key(n)}: ${qr.value(e[n])}`).join(", ")} }`;
      }, pair: ({ key: e, value: t }) => qr.value({ [e]: t }) }, _u = ga(ps(), 1), Wd = (e, t, { descriptor: n }) => {
        let r = [`${_u.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
        return t && r.push(`we now treat it as ${_u.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
      }, Gr = ga(ps(), 1), Du = Symbol.for("vnopts.VALUE_NOT_EXIST"), Na = Symbol.for("vnopts.VALUE_UNCHANGED"), vu = " ".repeat(2), Yd = (e, t, n) => {
        let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
        return r && a.push(qc(e, t, r, n.descriptor)), i && a.push([qc(e, t, i.title, n.descriptor)].concat(i.values.map((s) => Gc(s, n.loggerPrintWidth))).join(`
`)), Hc(a, n.loggerPrintWidth);
      }, bu = ga(ps(), 1), As = [], yu = [], Nu = (e, t, { descriptor: n, logger: r, schemas: i }) => {
        let a = [`Ignored unknown option ${bu.default.yellow(n.pair({ key: e, value: t }))}.`], s = Object.keys(i).sort().find((o) => QE(e, o) < 3);
        s && a.push(`Did you mean ${bu.default.blue(n.key(s))}?`), r.warn(a.join(" "));
      }, zd = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"], Qn = class {
        static create(e) {
          return ZE(this, e);
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
          return Na;
        }
      }, Xd = class extends Qn {
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
      }, Jd = class extends Qn {
        expected() {
          return "anything";
        }
        validate() {
          return !0;
        }
      }, Qd = class extends Qn {
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
            n.push(...i.map(Wc));
          }
          return n;
        }
        redirect(e, t) {
          let n = [], r = [];
          for (let i of e) {
            let a = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
            "remain" in a && n.push(a.remain), r.push(...a.redirect.map(Wc));
          }
          return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
        }
        overlap(e, t) {
          return e.concat(t);
        }
      }, Zd = class extends Qn {
        expected() {
          return "true or false";
        }
        validate(e) {
          return typeof e == "boolean";
        }
      }, eh = class extends Qn {
        constructor(e) {
          super(e), this._choices = n2(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
        }
        expected({ descriptor: e }) {
          let t = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(s2).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
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
      }, th = class extends Qn {
        expected() {
          return "a number";
        }
        validate(e, t) {
          return typeof e == "number";
        }
      }, nh = class extends th {
        expected() {
          return "an integer";
        }
        validate(e, t) {
          return t.normalizeValidateResult(super.validate(e, t), e) === !0 && a2(e);
        }
      }, Cu = class extends Qn {
        expected() {
          return "a string";
        }
        validate(e) {
          return typeof e == "string";
        }
      }, rh = qr, ih = Nu, ah = Yd, sh = Wd, oh = class {
        constructor(e, t) {
          let { logger: n = console, loggerPrintWidth: r = 80, descriptor: i = rh, unknown: a = ih, invalid: s = ah, deprecated: o = sh, missing: u = () => !1, required: l = () => !1, preprocess: c = (p) => p, postprocess: f = () => Na } = t || {};
          this._utils = { descriptor: i, logger: n || { warn: () => {
          } }, loggerPrintWidth: r, schemas: t2(e, "name"), normalizeDefaultResult: Yc, normalizeExpectedResult: zc, normalizeDeprecatedResult: Jc, normalizeForwardResult: Jo, normalizeRedirectResult: Zc, normalizeValidateResult: Xc }, this._unknownHandler = a, this._invalidHandler = o2(s), this._deprecatedHandler = o, this._identifyMissing = (p, m) => !(p in m) || u(p, m), this._identifyRequired = l, this._preprocess = c, this._postprocess = f, this.cleanHistory();
        }
        cleanHistory() {
          this._hasDeprecationWarned = r2();
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
              let s = Yc(a.default(this._utils));
              "value" in s && n.push({ [i]: s.value });
            }
          }
          r();
          for (let i of Object.keys(this._utils.schemas)) {
            if (!(i in t)) continue;
            let a = this._utils.schemas[i], s = t[i], o = a.postprocess(s, this._utils);
            o !== Na && (this._applyValidation(o, i, a), t[i] = o);
          }
          return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
        }
        _applyNormalization(e, t) {
          let n = [], { knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(e);
          for (let a of r) {
            let s = this._utils.schemas[a], o = s.preprocess(e[a], this._utils);
            this._applyValidation(o, a, s);
            let u = ({ from: f, to: p }) => {
              n.push(typeof p == "string" ? { [p]: f } : { [p.key]: p.value });
            }, l = ({ value: f, redirectTo: p }) => {
              let m = Jc(s.deprecated(f, this._utils), o, !0);
              if (m !== !1) if (m === !0) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
              else for (let { value: g } of m) {
                let _ = { key: a, value: g };
                if (!this._hasDeprecationWarned(_)) {
                  let L = typeof p == "string" ? { key: p, value: g } : p;
                  this._utils.logger.warn(this._deprecatedHandler(_, L, this._utils));
                }
              }
            };
            Jo(s.forward(o, this._utils), o).forEach(u);
            let c = Zc(s.redirect(o, this._utils), o);
            if (c.redirect.forEach(u), "remain" in c) {
              let f = c.remain;
              t[a] = a in t ? s.overlap(t[a], f, this._utils) : f, l({ value: f });
            }
            for (let { from: f, to: p } of c.redirect) l({ value: f, redirectTo: p });
          }
          for (let a of i) {
            let s = e[a];
            this._applyUnknownHandler(a, s, t, (o, u) => {
              n.push({ [o]: u });
            });
          }
          return n;
        }
        _applyRequiredCheck(e) {
          for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, Du, this._utils);
        }
        _partitionOptionKeys(e) {
          let [t, n] = i2(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
          return { knownKeys: t, unknownKeys: n };
        }
        _applyValidation(e, t, n) {
          let r = Xc(n.validate(e, this._utils), e);
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
          if (t !== Na) {
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
                  let u = this._utils.schemas[s];
                  this._applyValidation(o, s, u), e[s] = o;
                });
              }
            }
          }
        }
      }, uh = l2, lh = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLast) return t.findLast(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return i;
          }
        }
      }, wu = lh, Au = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null }, Hr = p2, ch = ga(bd(), 1), Ti = m2, dh = D2, hh = v2, fh = b2, ph = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLastIndex) return t.findLastIndex(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return r;
          }
          return -1;
        }
      }, mh = ph, gh = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify", Su = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), Eh = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]), Lu = "\uFEFF", Fu = Symbol("cursor"), Ss = {}, fs(Ss, { builders: () => _h, printer: () => Dh, utils: () => vh }), _h = { join: Mc, line: uu, softline: Od, hardline: br, literalline: lu, group: kc, conditionalGroup: _E, fill: DE, lineSuffix: Go, lineSuffixBoundary: Id, cursor: yr, breakParent: ba, ifBreak: vE, trim: Rd, indent: ss, indentIfBreak: bE, align: vi, addAlignmentToDoc: Uc, markAsRoot: gE, dedentToRoot: mE, dedent: EE, hardlineWithoutBreakParent: _s, literallineWithoutBreakParent: ou, label: yE, concat: (e) => e }, Dh = { printDocToString: us }, vh = { willBreak: sE, traverseDoc: gs, findInDoc: qo, mapDoc: is, removeLines: lE, stripTrailingHardline: xc, replaceEndOfLine: hE, canBreak: pE }, Iu = "3.5.3", Ls = {}, fs(Ls, { addDanglingComment: () => cs, addLeadingComment: () => bi, addTrailingComment: () => yi, getAlignmentSize: () => bs, getIndentSize: () => bh, getMaxContinuousCount: () => yh, getNextNonSpaceNonCommentCharacter: () => Nh, getNextNonSpaceNonCommentCharacterIndex: () => G2, getPreferredQuote: () => Ch, getStringWidth: () => Ds, hasNewline: () => Jn, hasNewlineInRange: () => Th, hasSpaces: () => wh, isNextLineEmpty: () => z2, isNextLineEmptyAfterIndex: () => Os, isPreviousLineEmpty: () => W2, makeString: () => Ah, skip: () => ma, skipEverythingButNewLine: () => fu, skipInlineComment: () => Fs, skipNewline: () => Nr, skipSpaces: () => Xn, skipToLineEnd: () => hu, skipTrailingComment: () => Is, skipWhitespace: () => Vd }), Fs = R2, Is = O2, Rs = x2, Os = k2, bh = M2, yh = P2, Nh = B2, Ca = "'", Ru = '"', Ch = V2, Th = $2, wh = K2, Ah = j2, xs = Vr(dd), Ou = Vr(Kc, 0), xu = { parse: Vr(A2), formatAST: Vr(S2), formatDoc: Vr(L2), printToDoc: Vr(F2), printDocToString: Vr(I2) }, Sh = ru;
    }), J2 = Er((e, t) => {
      (function(n) {
        function r() {
          var a = n();
          return a.default || a;
        }
        if (typeof e == "object" && typeof t == "object") t.exports = r();
        else {
          var i = typeof globalThis < "u" ? globalThis : typeof S0 < "u" ? S0 : typeof self < "u" ? self : this || {};
          i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.graphql = r();
        }
      })(function() {
        var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, s = (h, E) => {
          for (var D in E) n(h, D, { get: E[D], enumerable: !0 });
        }, o = (h, E, D, w) => {
          if (E && typeof E == "object" || typeof E == "function") for (let N of i(E)) !a.call(h, N) && N !== D && n(h, N, { get: () => E[N], enumerable: !(w = r(E, N)) || w.enumerable });
          return h;
        }, u = (h) => o(n({}, "__esModule", { value: !0 }), h), l = {};
        s(l, { languages: () => tT, options: () => iT, parsers: () => g0, printers: () => jT });
        var c = (h, E, D, w) => {
          if (!(h && E == null)) return E.replaceAll ? E.replaceAll(D, w) : D.global ? E.replace(D, w) : E.split(D).join(w);
        }, f = c, p = "indent", m = "group", g = "if-break", _ = "line", L = "break-parent", A = () => {
        }, F = A;
        function C(h) {
          return { type: p, contents: h };
        }
        function x(h, E = {}) {
          return F(E.expandedStates), { type: m, id: E.id, contents: h, break: !!E.shouldBreak, expandedStates: E.expandedStates };
        }
        function U(h, E = "", D = {}) {
          return { type: g, breakContents: h, flatContents: E, groupId: D.groupId };
        }
        var q = { type: L }, I = { type: _, hard: !0 }, B = { type: _ }, S = { type: _, soft: !0 }, K = [I, q];
        function $(h, E) {
          let D = [];
          for (let w = 0; w < E.length; w++) w !== 0 && D.push(h), D.push(E[w]);
          return D;
        }
        function xe(h) {
          return (E, D, w) => {
            let N = !!(w != null && w.backwards);
            if (D === !1) return !1;
            let { length: V } = E, ge = D;
            for (; ge >= 0 && ge < V; ) {
              let Pe = E.charAt(ge);
              if (h instanceof RegExp) {
                if (!h.test(Pe)) return ge;
              } else if (!h.includes(Pe)) return ge;
              N ? ge-- : ge++;
            }
            return ge === -1 || ge === V ? ge : !1;
          };
        }
        var Z = xe(" 	"), G = xe(",; 	"), J = xe(/[^\n\r]/u);
        function ne(h, E, D) {
          let w = !!(D != null && D.backwards);
          if (E === !1) return !1;
          let N = h.charAt(E);
          if (w) {
            if (h.charAt(E - 1) === "\r" && N === `
`) return E - 2;
            if (N === `
` || N === "\r" || N === "\u2028" || N === "\u2029") return E - 1;
          } else {
            if (N === "\r" && h.charAt(E + 1) === `
`) return E + 2;
            if (N === `
` || N === "\r" || N === "\u2028" || N === "\u2029") return E + 1;
          }
          return E;
        }
        var oe = ne;
        function de(h, E, D = {}) {
          let w = Z(h, D.backwards ? E - 1 : E, D), N = oe(h, w, D);
          return w !== N;
        }
        var le = de;
        function Ie(h, E) {
          if (E === !1) return !1;
          if (h.charAt(E) === "/" && h.charAt(E + 1) === "*") {
            for (let D = E + 2; D < h.length; ++D) if (h.charAt(D) === "*" && h.charAt(D + 1) === "/") return D + 2;
          }
          return E;
        }
        var ke = Ie;
        function y(h, E) {
          return E === !1 ? !1 : h.charAt(E) === "/" && h.charAt(E + 1) === "/" ? J(h, E) : E;
        }
        var ee = y;
        function z(h, E) {
          let D = null, w = E;
          for (; w !== D; ) D = w, w = G(h, w), w = ke(h, w), w = Z(h, w);
          return w = ee(h, w), w = oe(h, w), w !== !1 && le(h, w);
        }
        var re = z;
        function M(h) {
          return Array.isArray(h) && h.length > 0;
        }
        var P = M, ue = class extends Error {
          constructor(E, D, w = "type") {
            super(`Unexpected ${D} node ${w}: ${JSON.stringify(E[w])}.`);
            ot(this, "name", "UnexpectedNodeError");
            this.node = E;
          }
        }, _e = ue, Xe = null;
        function Tt(h) {
          if (Xe !== null && typeof Xe.property) {
            let E = Xe;
            return Xe = Tt.prototype = null, E;
          }
          return Xe = Tt.prototype = h ?? /* @__PURE__ */ Object.create(null), new Tt();
        }
        var Se = 10;
        for (let h = 0; h <= Se; h++) Tt();
        function Je(h) {
          return Tt(h);
        }
        function pi(h, E = "type") {
          Je(h);
          function D(w) {
            let N = w[E], V = h[N];
            if (!Array.isArray(V)) throw Object.assign(new Error(`Missing visitor keys for '${N}'.`), { node: w });
            return V;
          }
          return D;
        }
        var sn = pi, Ot = class {
          constructor(h, E, D) {
            this.start = h.start, this.end = E.end, this.startToken = h, this.endToken = E, this.source = D;
          }
          get [Symbol.toStringTag]() {
            return "Location";
          }
          toJSON() {
            return { start: this.start, end: this.end };
          }
        }, De = class {
          constructor(h, E, D, w, N, V) {
            this.kind = h, this.start = E, this.end = D, this.line = w, this.column = N, this.value = V, this.prev = null, this.next = null;
          }
          get [Symbol.toStringTag]() {
            return "Token";
          }
          toJSON() {
            return { kind: this.kind, value: this.value, line: this.line, column: this.column };
          }
        }, at = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] };
        new Set(Object.keys(at));
        var Wn;
        (function(h) {
          h.QUERY = "query", h.MUTATION = "mutation", h.SUBSCRIPTION = "subscription";
        })(Wn || (Wn = {}));
        var ae = sn(at, "kind"), Be = ae;
        function te(h) {
          return h.loc.start;
        }
        function Le(h) {
          return h.loc.end;
        }
        function pt(h) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(h);
        }
        function xt(h) {
          return `# @format

` + h;
        }
        function st(h, E, D) {
          let { node: w } = h;
          if (!w.description) return "";
          let N = [D("description")];
          return w.kind === "InputValueDefinition" && !w.description.block ? N.push(B) : N.push(K), N;
        }
        var on = st;
        function ia(h, E, D) {
          let { node: w } = h;
          switch (w.kind) {
            case "Document":
              return [...$(K, Yn(h, E, D, "definitions")), K];
            case "OperationDefinition": {
              let N = E.originalText[te(w)] !== "{", V = !!w.name;
              return [N ? w.operation : "", N && V ? [" ", D("name")] : "", N && !V && P(w.variableDefinitions) ? " " : "", p0(h, D), jt(h, D, w), !N && !V ? "" : " ", D("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", D("name"), p0(h, D), " on ", D("typeCondition"), jt(h, D, w), " ", D("selectionSet")];
            case "SelectionSet":
              return ["{", C([K, $(K, Yn(h, E, D, "selections"))]), K, "}"];
            case "Field":
              return x([w.alias ? [D("alias"), ": "] : "", D("name"), w.arguments.length > 0 ? x(["(", C([S, $([U("", ", "), S], Yn(h, E, D, "arguments"))]), S, ")"]) : "", jt(h, D, w), w.selectionSet ? " " : "", D("selectionSet")]);
            case "Name":
              return w.value;
            case "StringValue":
              if (w.block) {
                let N = f(!1, w.value, '"""', String.raw`\"""`).split(`
`);
                return N.length === 1 && (N[0] = N[0].trim()), N.every((V) => V === "") && (N.length = 0), $(K, ['"""', ...N, '"""']);
              }
              return ['"', f(!1, f(!1, w.value, /["\\]/gu, String.raw`\$&`), `
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
              return x(["[", C([S, $([U("", ", "), S], h.map(D, "values"))]), S, "]"]);
            case "ObjectValue": {
              let N = E.bracketSpacing && w.fields.length > 0 ? " " : "";
              return x(["{", N, C([S, $([U("", ", "), S], h.map(D, "fields"))]), S, U("", N), "}"]);
            }
            case "ObjectField":
            case "Argument":
              return [D("name"), ": ", D("value")];
            case "Directive":
              return ["@", D("name"), w.arguments.length > 0 ? x(["(", C([S, $([U("", ", "), S], Yn(h, E, D, "arguments"))]), S, ")"]) : ""];
            case "NamedType":
              return D("name");
            case "VariableDefinition":
              return [D("variable"), ": ", D("type"), w.defaultValue ? [" = ", D("defaultValue")] : "", jt(h, D, w)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition": {
              let { kind: N } = w, V = [];
              return N.endsWith("TypeDefinition") ? V.push(on(h, E, D)) : V.push("extend "), N.startsWith("ObjectType") ? V.push("type") : N.startsWith("InputObjectType") ? V.push("input") : V.push("interface"), V.push(" ", D("name")), !N.startsWith("InputObjectType") && w.interfaces.length > 0 && V.push(" implements ", ...JC(h, E, D)), V.push(jt(h, D, w)), w.fields.length > 0 && V.push([" {", C([K, $(K, Yn(h, E, D, "fields"))]), K, "}"]), V;
            }
            case "FieldDefinition":
              return [on(h, E, D), D("name"), w.arguments.length > 0 ? x(["(", C([S, $([U("", ", "), S], Yn(h, E, D, "arguments"))]), S, ")"]) : "", ": ", D("type"), jt(h, D, w)];
            case "DirectiveDefinition":
              return [on(h, E, D), "directive ", "@", D("name"), w.arguments.length > 0 ? x(["(", C([S, $([U("", ", "), S], Yn(h, E, D, "arguments"))]), S, ")"]) : "", w.repeatable ? " repeatable" : "", " on ", ...$(" | ", h.map(D, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [on(h, E, D), w.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), jt(h, D, w), w.values.length > 0 ? [" {", C([K, $(K, Yn(h, E, D, "values"))]), K, "}"] : ""];
            case "EnumValueDefinition":
              return [on(h, E, D), D("name"), jt(h, D, w)];
            case "InputValueDefinition":
              return [on(h, E, D), D("name"), ": ", D("type"), w.defaultValue ? [" = ", D("defaultValue")] : "", jt(h, D, w)];
            case "SchemaExtension":
              return ["extend schema", jt(h, D, w), ...w.operationTypes.length > 0 ? [" {", C([K, $(K, Yn(h, E, D, "operationTypes"))]), K, "}"] : []];
            case "SchemaDefinition":
              return [on(h, E, D), "schema", jt(h, D, w), " {", w.operationTypes.length > 0 ? C([K, $(K, Yn(h, E, D, "operationTypes"))]) : "", K, "}"];
            case "OperationTypeDefinition":
              return [w.operation, ": ", D("type")];
            case "FragmentSpread":
              return ["...", D("name"), jt(h, D, w)];
            case "InlineFragment":
              return ["...", w.typeCondition ? [" on ", D("typeCondition")] : "", jt(h, D, w), " ", D("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return x([on(h, E, D), x([w.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), jt(h, D, w), w.types.length > 0 ? [" =", U("", " "), C([U([B, "| "]), $([B, "| "], h.map(D, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [on(h, E, D), w.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), jt(h, D, w)];
            case "NonNullType":
              return [D("type"), "!"];
            case "ListType":
              return ["[", D("type"), "]"];
            default:
              throw new _e(w, "Graphql", "kind");
          }
        }
        function jt(h, E, D) {
          if (D.directives.length === 0) return "";
          let w = $(B, h.map(E, "directives"));
          return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? x([B, w]) : [" ", x(C([S, w]))];
        }
        function Yn(h, E, D, w) {
          return h.map(({ isLast: N, node: V }) => {
            let ge = D();
            return !N && re(E.originalText, Le(V)) ? [ge, K] : ge;
          }, w);
        }
        function zC(h) {
          return h.kind !== "Comment";
        }
        function XC(h) {
          let E = h.node;
          if (E.kind === "Comment") return "#" + E.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(E));
        }
        function JC(h, E, D) {
          let { node: w } = h, N = [], { interfaces: V } = w, ge = h.map(D, "interfaces");
          for (let Pe = 0; Pe < V.length; Pe++) {
            let et = V[Pe];
            N.push(ge[Pe]);
            let Qt = V[Pe + 1];
            if (Qt) {
              let At = E.originalText.slice(et.loc.end, Qt.loc.start).includes("#");
              N.push(" &", At ? B : " ");
            }
          }
          return N;
        }
        function p0(h, E) {
          let { node: D } = h;
          return P(D.variableDefinitions) ? x(["(", C([S, $([U("", ", "), S], h.map(E, "variableDefinitions"))]), S, ")"]) : "";
        }
        function m0(h, E) {
          h.kind === "StringValue" && h.block && !h.value.includes(`
`) && (E.value = h.value.trim());
        }
        m0.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function QC(h) {
          var E;
          let { node: D } = h;
          return (E = D == null ? void 0 : D.comments) == null ? void 0 : E.some((w) => w.value.trim() === "prettier-ignore");
        }
        var ZC = { print: ia, massageAstNode: m0, hasPrettierIgnore: QC, insertPragma: xt, printComment: XC, canAttachComment: zC, getVisitorKeys: Be }, eT = ZC, tT = [{ linguistLanguageId: 139, name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }], nT = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." } }, rT = { bracketSpacing: nT.bracketSpacing }, iT = rT, g0 = {};
        s(g0, { graphql: () => KT });
        function aT(h) {
          return typeof h == "object" && h !== null;
        }
        function sT(h, E) {
          throw new Error("Unexpected invariant triggered.");
        }
        var oT = /\r\n|[\n\r]/g;
        function Ec(h, E) {
          let D = 0, w = 1;
          for (let N of h.body.matchAll(oT)) {
            if (typeof N.index == "number" || sT(), N.index >= E) break;
            D = N.index + N[0].length, w += 1;
          }
          return { line: w, column: E + 1 - D };
        }
        function uT(h) {
          return E0(h.source, Ec(h.source, h.start));
        }
        function E0(h, E) {
          let D = h.locationOffset.column - 1, w = "".padStart(D) + h.body, N = E.line - 1, V = h.locationOffset.line - 1, ge = E.line + V, Pe = E.line === 1 ? D : 0, et = E.column + Pe, Qt = `${h.name}:${ge}:${et}
`, At = w.split(/\r\n|[\n\r]/g), sa = At[N];
          if (sa.length > 120) {
            let Rn = Math.floor(et / 80), bc = et % 80, qt = [];
            for (let oa = 0; oa < sa.length; oa += 80) qt.push(sa.slice(oa, oa + 80));
            return Qt + _0([[`${ge} |`, qt[0]], ...qt.slice(1, Rn + 1).map((oa) => ["|", oa]), ["|", "^".padStart(bc)], ["|", qt[Rn + 1]]]);
          }
          return Qt + _0([[`${ge - 1} |`, At[N - 1]], [`${ge} |`, sa], ["|", "^".padStart(et)], [`${ge + 1} |`, At[N + 1]]]);
        }
        function _0(h) {
          let E = h.filter(([w, N]) => N !== void 0), D = Math.max(...E.map(([w]) => w.length));
          return E.map(([w, N]) => w.padStart(D) + (N ? " " + N : "")).join(`
`);
        }
        function lT(h) {
          let E = h[0];
          return E == null || "kind" in E || "length" in E ? { nodes: E, source: h[1], positions: h[2], path: h[3], originalError: h[4], extensions: h[5] } : E;
        }
        var cT = class I0 extends Error {
          constructor(E, ...D) {
            var w, N, V;
            let { nodes: ge, source: Pe, positions: et, path: Qt, originalError: At, extensions: sa } = lT(D);
            super(E), this.name = "GraphQLError", this.path = Qt ?? void 0, this.originalError = At ?? void 0, this.nodes = D0(Array.isArray(ge) ? ge : ge ? [ge] : void 0);
            let Rn = D0((w = this.nodes) === null || w === void 0 ? void 0 : w.map((qt) => qt.loc).filter((qt) => qt != null));
            this.source = Pe ?? (Rn == null || (N = Rn[0]) === null || N === void 0 ? void 0 : N.source), this.positions = et ?? (Rn == null ? void 0 : Rn.map((qt) => qt.start)), this.locations = et && Pe ? et.map((qt) => Ec(Pe, qt)) : Rn == null ? void 0 : Rn.map((qt) => Ec(qt.source, qt.start));
            let bc = aT(At == null ? void 0 : At.extensions) ? At == null ? void 0 : At.extensions : void 0;
            this.extensions = (V = sa ?? bc) !== null && V !== void 0 ? V : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), At != null && At.stack ? Object.defineProperty(this, "stack", { value: At.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, I0) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
          }
          get [Symbol.toStringTag]() {
            return "GraphQLError";
          }
          toString() {
            let E = this.message;
            if (this.nodes) for (let D of this.nodes) D.loc && (E += `

` + uT(D.loc));
            else if (this.source && this.locations) for (let D of this.locations) E += `

` + E0(this.source, D);
            return E;
          }
          toJSON() {
            let E = { message: this.message };
            return this.locations != null && (E.locations = this.locations), this.path != null && (E.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (E.extensions = this.extensions), E;
          }
        };
        function D0(h) {
          return h === void 0 || h.length === 0 ? void 0 : h;
        }
        function wt(h, E, D) {
          return new cT(`Syntax Error: ${D}`, { source: h, positions: [E] });
        }
        var _c;
        (function(h) {
          h.QUERY = "QUERY", h.MUTATION = "MUTATION", h.SUBSCRIPTION = "SUBSCRIPTION", h.FIELD = "FIELD", h.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", h.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", h.INLINE_FRAGMENT = "INLINE_FRAGMENT", h.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", h.SCHEMA = "SCHEMA", h.SCALAR = "SCALAR", h.OBJECT = "OBJECT", h.FIELD_DEFINITION = "FIELD_DEFINITION", h.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", h.INTERFACE = "INTERFACE", h.UNION = "UNION", h.ENUM = "ENUM", h.ENUM_VALUE = "ENUM_VALUE", h.INPUT_OBJECT = "INPUT_OBJECT", h.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
        })(_c || (_c = {}));
        var ve;
        (function(h) {
          h.NAME = "Name", h.DOCUMENT = "Document", h.OPERATION_DEFINITION = "OperationDefinition", h.VARIABLE_DEFINITION = "VariableDefinition", h.SELECTION_SET = "SelectionSet", h.FIELD = "Field", h.ARGUMENT = "Argument", h.FRAGMENT_SPREAD = "FragmentSpread", h.INLINE_FRAGMENT = "InlineFragment", h.FRAGMENT_DEFINITION = "FragmentDefinition", h.VARIABLE = "Variable", h.INT = "IntValue", h.FLOAT = "FloatValue", h.STRING = "StringValue", h.BOOLEAN = "BooleanValue", h.NULL = "NullValue", h.ENUM = "EnumValue", h.LIST = "ListValue", h.OBJECT = "ObjectValue", h.OBJECT_FIELD = "ObjectField", h.DIRECTIVE = "Directive", h.NAMED_TYPE = "NamedType", h.LIST_TYPE = "ListType", h.NON_NULL_TYPE = "NonNullType", h.SCHEMA_DEFINITION = "SchemaDefinition", h.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", h.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", h.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", h.FIELD_DEFINITION = "FieldDefinition", h.INPUT_VALUE_DEFINITION = "InputValueDefinition", h.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", h.UNION_TYPE_DEFINITION = "UnionTypeDefinition", h.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", h.ENUM_VALUE_DEFINITION = "EnumValueDefinition", h.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", h.DIRECTIVE_DEFINITION = "DirectiveDefinition", h.SCHEMA_EXTENSION = "SchemaExtension", h.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", h.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", h.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", h.UNION_TYPE_EXTENSION = "UnionTypeExtension", h.ENUM_TYPE_EXTENSION = "EnumTypeExtension", h.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
        })(ve || (ve = {}));
        function dT(h) {
          return h === 9 || h === 32;
        }
        function Za(h) {
          return h >= 48 && h <= 57;
        }
        function v0(h) {
          return h >= 97 && h <= 122 || h >= 65 && h <= 90;
        }
        function b0(h) {
          return v0(h) || h === 95;
        }
        function hT(h) {
          return v0(h) || Za(h) || h === 95;
        }
        function fT(h) {
          var E;
          let D = Number.MAX_SAFE_INTEGER, w = null, N = -1;
          for (let ge = 0; ge < h.length; ++ge) {
            var V;
            let Pe = h[ge], et = pT(Pe);
            et !== Pe.length && (w = (V = w) !== null && V !== void 0 ? V : ge, N = ge, ge !== 0 && et < D && (D = et));
          }
          return h.map((ge, Pe) => Pe === 0 ? ge : ge.slice(D)).slice((E = w) !== null && E !== void 0 ? E : 0, N + 1);
        }
        function pT(h) {
          let E = 0;
          for (; E < h.length && dT(h.charCodeAt(E)); ) ++E;
          return E;
        }
        var W;
        (function(h) {
          h.SOF = "<SOF>", h.EOF = "<EOF>", h.BANG = "!", h.DOLLAR = "$", h.AMP = "&", h.PAREN_L = "(", h.PAREN_R = ")", h.SPREAD = "...", h.COLON = ":", h.EQUALS = "=", h.AT = "@", h.BRACKET_L = "[", h.BRACKET_R = "]", h.BRACE_L = "{", h.PIPE = "|", h.BRACE_R = "}", h.NAME = "Name", h.INT = "Int", h.FLOAT = "Float", h.STRING = "String", h.BLOCK_STRING = "BlockString", h.COMMENT = "Comment";
        })(W || (W = {}));
        var mT = class {
          constructor(h) {
            let E = new De(W.SOF, 0, 0, 0, 0);
            this.source = h, this.lastToken = E, this.token = E, this.line = 1, this.lineStart = 0;
          }
          get [Symbol.toStringTag]() {
            return "Lexer";
          }
          advance() {
            return this.lastToken = this.token, this.token = this.lookahead();
          }
          lookahead() {
            let h = this.token;
            if (h.kind !== W.EOF) do
              if (h.next) h = h.next;
              else {
                let E = ET(this, h.end);
                h.next = E, E.prev = h, h = E;
              }
            while (h.kind === W.COMMENT);
            return h;
          }
        };
        function gT(h) {
          return h === W.BANG || h === W.DOLLAR || h === W.AMP || h === W.PAREN_L || h === W.PAREN_R || h === W.SPREAD || h === W.COLON || h === W.EQUALS || h === W.AT || h === W.BRACKET_L || h === W.BRACKET_R || h === W.BRACE_L || h === W.PIPE || h === W.BRACE_R;
        }
        function aa(h) {
          return h >= 0 && h <= 55295 || h >= 57344 && h <= 1114111;
        }
        function Ro(h, E) {
          return y0(h.charCodeAt(E)) && N0(h.charCodeAt(E + 1));
        }
        function y0(h) {
          return h >= 55296 && h <= 56319;
        }
        function N0(h) {
          return h >= 56320 && h <= 57343;
        }
        function mi(h, E) {
          let D = h.source.body.codePointAt(E);
          if (D === void 0) return W.EOF;
          if (D >= 32 && D <= 126) {
            let w = String.fromCodePoint(D);
            return w === '"' ? `'"'` : `"${w}"`;
          }
          return "U+" + D.toString(16).toUpperCase().padStart(4, "0");
        }
        function mt(h, E, D, w, N) {
          let V = h.line, ge = 1 + D - h.lineStart;
          return new De(E, D, w, V, ge, N);
        }
        function ET(h, E) {
          let D = h.source.body, w = D.length, N = E;
          for (; N < w; ) {
            let V = D.charCodeAt(N);
            switch (V) {
              case 65279:
              case 9:
              case 32:
              case 44:
                ++N;
                continue;
              case 10:
                ++N, ++h.line, h.lineStart = N;
                continue;
              case 13:
                D.charCodeAt(N + 1) === 10 ? N += 2 : ++N, ++h.line, h.lineStart = N;
                continue;
              case 35:
                return _T(h, N);
              case 33:
                return mt(h, W.BANG, N, N + 1);
              case 36:
                return mt(h, W.DOLLAR, N, N + 1);
              case 38:
                return mt(h, W.AMP, N, N + 1);
              case 40:
                return mt(h, W.PAREN_L, N, N + 1);
              case 41:
                return mt(h, W.PAREN_R, N, N + 1);
              case 46:
                if (D.charCodeAt(N + 1) === 46 && D.charCodeAt(N + 2) === 46) return mt(h, W.SPREAD, N, N + 3);
                break;
              case 58:
                return mt(h, W.COLON, N, N + 1);
              case 61:
                return mt(h, W.EQUALS, N, N + 1);
              case 64:
                return mt(h, W.AT, N, N + 1);
              case 91:
                return mt(h, W.BRACKET_L, N, N + 1);
              case 93:
                return mt(h, W.BRACKET_R, N, N + 1);
              case 123:
                return mt(h, W.BRACE_L, N, N + 1);
              case 124:
                return mt(h, W.PIPE, N, N + 1);
              case 125:
                return mt(h, W.BRACE_R, N, N + 1);
              case 34:
                return D.charCodeAt(N + 1) === 34 && D.charCodeAt(N + 2) === 34 ? CT(h, N) : vT(h, N);
            }
            if (Za(V) || V === 45) return DT(h, N, V);
            if (b0(V)) return TT(h, N);
            throw wt(h.source, N, V === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : aa(V) || Ro(D, N) ? `Unexpected character: ${mi(h, N)}.` : `Invalid character: ${mi(h, N)}.`);
          }
          return mt(h, W.EOF, w, w);
        }
        function _T(h, E) {
          let D = h.source.body, w = D.length, N = E + 1;
          for (; N < w; ) {
            let V = D.charCodeAt(N);
            if (V === 10 || V === 13) break;
            if (aa(V)) ++N;
            else if (Ro(D, N)) N += 2;
            else break;
          }
          return mt(h, W.COMMENT, E, N, D.slice(E + 1, N));
        }
        function DT(h, E, D) {
          let w = h.source.body, N = E, V = D, ge = !1;
          if (V === 45 && (V = w.charCodeAt(++N)), V === 48) {
            if (V = w.charCodeAt(++N), Za(V)) throw wt(h.source, N, `Invalid number, unexpected digit after 0: ${mi(h, N)}.`);
          } else N = Dc(h, N, V), V = w.charCodeAt(N);
          if (V === 46 && (ge = !0, V = w.charCodeAt(++N), N = Dc(h, N, V), V = w.charCodeAt(N)), (V === 69 || V === 101) && (ge = !0, V = w.charCodeAt(++N), (V === 43 || V === 45) && (V = w.charCodeAt(++N)), N = Dc(h, N, V), V = w.charCodeAt(N)), V === 46 || b0(V)) throw wt(h.source, N, `Invalid number, expected digit but got: ${mi(h, N)}.`);
          return mt(h, ge ? W.FLOAT : W.INT, E, N, w.slice(E, N));
        }
        function Dc(h, E, D) {
          if (!Za(D)) throw wt(h.source, E, `Invalid number, expected digit but got: ${mi(h, E)}.`);
          let w = h.source.body, N = E + 1;
          for (; Za(w.charCodeAt(N)); ) ++N;
          return N;
        }
        function vT(h, E) {
          let D = h.source.body, w = D.length, N = E + 1, V = N, ge = "";
          for (; N < w; ) {
            let Pe = D.charCodeAt(N);
            if (Pe === 34) return ge += D.slice(V, N), mt(h, W.STRING, E, N + 1, ge);
            if (Pe === 92) {
              ge += D.slice(V, N);
              let et = D.charCodeAt(N + 1) === 117 ? D.charCodeAt(N + 2) === 123 ? bT(h, N) : yT(h, N) : NT(h, N);
              ge += et.value, N += et.size, V = N;
              continue;
            }
            if (Pe === 10 || Pe === 13) break;
            if (aa(Pe)) ++N;
            else if (Ro(D, N)) N += 2;
            else throw wt(h.source, N, `Invalid character within String: ${mi(h, N)}.`);
          }
          throw wt(h.source, N, "Unterminated string.");
        }
        function bT(h, E) {
          let D = h.source.body, w = 0, N = 3;
          for (; N < 12; ) {
            let V = D.charCodeAt(E + N++);
            if (V === 125) {
              if (N < 5 || !aa(w)) break;
              return { value: String.fromCodePoint(w), size: N };
            }
            if (w = w << 4 | es(V), w < 0) break;
          }
          throw wt(h.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + N)}".`);
        }
        function yT(h, E) {
          let D = h.source.body, w = C0(D, E + 2);
          if (aa(w)) return { value: String.fromCodePoint(w), size: 6 };
          if (y0(w) && D.charCodeAt(E + 6) === 92 && D.charCodeAt(E + 7) === 117) {
            let N = C0(D, E + 8);
            if (N0(N)) return { value: String.fromCodePoint(w, N), size: 12 };
          }
          throw wt(h.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + 6)}".`);
        }
        function C0(h, E) {
          return es(h.charCodeAt(E)) << 12 | es(h.charCodeAt(E + 1)) << 8 | es(h.charCodeAt(E + 2)) << 4 | es(h.charCodeAt(E + 3));
        }
        function es(h) {
          return h >= 48 && h <= 57 ? h - 48 : h >= 65 && h <= 70 ? h - 55 : h >= 97 && h <= 102 ? h - 87 : -1;
        }
        function NT(h, E) {
          let D = h.source.body;
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
          throw wt(h.source, E, `Invalid character escape sequence: "${D.slice(E, E + 2)}".`);
        }
        function CT(h, E) {
          let D = h.source.body, w = D.length, N = h.lineStart, V = E + 3, ge = V, Pe = "", et = [];
          for (; V < w; ) {
            let Qt = D.charCodeAt(V);
            if (Qt === 34 && D.charCodeAt(V + 1) === 34 && D.charCodeAt(V + 2) === 34) {
              Pe += D.slice(ge, V), et.push(Pe);
              let At = mt(h, W.BLOCK_STRING, E, V + 3, fT(et).join(`
`));
              return h.line += et.length - 1, h.lineStart = N, At;
            }
            if (Qt === 92 && D.charCodeAt(V + 1) === 34 && D.charCodeAt(V + 2) === 34 && D.charCodeAt(V + 3) === 34) {
              Pe += D.slice(ge, V), ge = V + 1, V += 4;
              continue;
            }
            if (Qt === 10 || Qt === 13) {
              Pe += D.slice(ge, V), et.push(Pe), Qt === 13 && D.charCodeAt(V + 1) === 10 ? V += 2 : ++V, Pe = "", ge = V, N = V;
              continue;
            }
            if (aa(Qt)) ++V;
            else if (Ro(D, V)) V += 2;
            else throw wt(h.source, V, `Invalid character within String: ${mi(h, V)}.`);
          }
          throw wt(h.source, V, "Unterminated string.");
        }
        function TT(h, E) {
          let D = h.source.body, w = D.length, N = E + 1;
          for (; N < w; ) {
            let V = D.charCodeAt(N);
            if (hT(V)) ++N;
            else break;
          }
          return mt(h, W.NAME, E, N, D.slice(E, N));
        }
        function vc(h, E) {
          throw new Error(E);
        }
        function T0(h) {
          return Oo(h, []);
        }
        function Oo(h, E) {
          switch (typeof h) {
            case "string":
              return JSON.stringify(h);
            case "function":
              return h.name ? `[function ${h.name}]` : "[function]";
            case "object":
              return wT(h, E);
            default:
              return String(h);
          }
        }
        function wT(h, E) {
          if (h === null) return "null";
          if (E.includes(h)) return "[Circular]";
          let D = [...E, h];
          if (AT(h)) {
            let w = h.toJSON();
            if (w !== h) return typeof w == "string" ? w : Oo(w, D);
          } else if (Array.isArray(h)) return LT(h, D);
          return ST(h, D);
        }
        function AT(h) {
          return typeof h.toJSON == "function";
        }
        function ST(h, E) {
          let D = Object.entries(h);
          return D.length === 0 ? "{}" : E.length > 2 ? "[" + FT(h) + "]" : "{ " + D.map(([w, N]) => w + ": " + Oo(N, E)).join(", ") + " }";
        }
        function LT(h, E) {
          if (h.length === 0) return "[]";
          if (E.length > 2) return "[Array]";
          let D = Math.min(10, h.length), w = h.length - D, N = [];
          for (let V = 0; V < D; ++V) N.push(Oo(h[V], E));
          return w === 1 ? N.push("... 1 more item") : w > 1 && N.push(`... ${w} more items`), "[" + N.join(", ") + "]";
        }
        function FT(h) {
          let E = Object.prototype.toString.call(h).replace(/^\[object /, "").replace(/]$/, "");
          if (E === "Object" && typeof h.constructor == "function") {
            let D = h.constructor.name;
            if (typeof D == "string" && D !== "") return D;
          }
          return E;
        }
        var IT = globalThis.process && !0, RT = IT ? function(h, E) {
          return h instanceof E;
        } : function(h, E) {
          if (h instanceof E) return !0;
          if (typeof h == "object" && h !== null) {
            var D;
            let w = E.prototype[Symbol.toStringTag], N = Symbol.toStringTag in h ? h[Symbol.toStringTag] : (D = h.constructor) === null || D === void 0 ? void 0 : D.name;
            if (w === N) {
              let V = T0(h);
              throw new Error(`Cannot use ${w} "${V}" from another module or realm.

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
        }, w0 = class {
          constructor(h, E = "GraphQL request", D = { line: 1, column: 1 }) {
            typeof h == "string" || vc(!1, `Body must be a string. Received: ${T0(h)}.`), this.body = h, this.name = E, this.locationOffset = D, this.locationOffset.line > 0 || vc(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || vc(!1, "column in locationOffset is 1-indexed and must be positive.");
          }
          get [Symbol.toStringTag]() {
            return "Source";
          }
        };
        function OT(h) {
          return RT(h, w0);
        }
        function xT(h, E) {
          let D = new kT(h, E), w = D.parseDocument();
          return Object.defineProperty(w, "tokenCount", { enumerable: !1, value: D.tokenCount }), w;
        }
        var kT = class {
          constructor(h, E = {}) {
            let D = OT(h) ? h : new w0(h);
            this._lexer = new mT(D), this._options = E, this._tokenCounter = 0;
          }
          get tokenCount() {
            return this._tokenCounter;
          }
          parseName() {
            let h = this.expectToken(W.NAME);
            return this.node(h, { kind: ve.NAME, value: h.value });
          }
          parseDocument() {
            return this.node(this._lexer.token, { kind: ve.DOCUMENT, definitions: this.many(W.SOF, this.parseDefinition, W.EOF) });
          }
          parseDefinition() {
            if (this.peek(W.BRACE_L)) return this.parseOperationDefinition();
            let h = this.peekDescription(), E = h ? this._lexer.lookahead() : this._lexer.token;
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
              if (h) throw wt(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
            let h = this._lexer.token;
            if (this.peek(W.BRACE_L)) return this.node(h, { kind: ve.OPERATION_DEFINITION, operation: Wn.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
            let E = this.parseOperationType(), D;
            return this.peek(W.NAME) && (D = this.parseName()), this.node(h, { kind: ve.OPERATION_DEFINITION, operation: E, name: D, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseOperationType() {
            let h = this.expectToken(W.NAME);
            switch (h.value) {
              case "query":
                return Wn.QUERY;
              case "mutation":
                return Wn.MUTATION;
              case "subscription":
                return Wn.SUBSCRIPTION;
            }
            throw this.unexpected(h);
          }
          parseVariableDefinitions() {
            return this.optionalMany(W.PAREN_L, this.parseVariableDefinition, W.PAREN_R);
          }
          parseVariableDefinition() {
            return this.node(this._lexer.token, { kind: ve.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(W.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(W.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
          }
          parseVariable() {
            let h = this._lexer.token;
            return this.expectToken(W.DOLLAR), this.node(h, { kind: ve.VARIABLE, name: this.parseName() });
          }
          parseSelectionSet() {
            return this.node(this._lexer.token, { kind: ve.SELECTION_SET, selections: this.many(W.BRACE_L, this.parseSelection, W.BRACE_R) });
          }
          parseSelection() {
            return this.peek(W.SPREAD) ? this.parseFragment() : this.parseField();
          }
          parseField() {
            let h = this._lexer.token, E = this.parseName(), D, w;
            return this.expectOptionalToken(W.COLON) ? (D = E, w = this.parseName()) : w = E, this.node(h, { kind: ve.FIELD, alias: D, name: w, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(W.BRACE_L) ? this.parseSelectionSet() : void 0 });
          }
          parseArguments(h) {
            let E = h ? this.parseConstArgument : this.parseArgument;
            return this.optionalMany(W.PAREN_L, E, W.PAREN_R);
          }
          parseArgument(h = !1) {
            let E = this._lexer.token, D = this.parseName();
            return this.expectToken(W.COLON), this.node(E, { kind: ve.ARGUMENT, name: D, value: this.parseValueLiteral(h) });
          }
          parseConstArgument() {
            return this.parseArgument(!0);
          }
          parseFragment() {
            let h = this._lexer.token;
            this.expectToken(W.SPREAD);
            let E = this.expectOptionalKeyword("on");
            return !E && this.peek(W.NAME) ? this.node(h, { kind: ve.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1) }) : this.node(h, { kind: ve.INLINE_FRAGMENT, typeCondition: E ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseFragmentDefinition() {
            let h = this._lexer.token;
            return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(h, { kind: ve.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() }) : this.node(h, { kind: ve.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseFragmentName() {
            if (this._lexer.token.value === "on") throw this.unexpected();
            return this.parseName();
          }
          parseValueLiteral(h) {
            let E = this._lexer.token;
            switch (E.kind) {
              case W.BRACKET_L:
                return this.parseList(h);
              case W.BRACE_L:
                return this.parseObject(h);
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
                if (h) if (this.expectToken(W.DOLLAR), this._lexer.token.kind === W.NAME) {
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
            let h = this._lexer.token;
            return this.advanceLexer(), this.node(h, { kind: ve.STRING, value: h.value, block: h.kind === W.BLOCK_STRING });
          }
          parseList(h) {
            let E = () => this.parseValueLiteral(h);
            return this.node(this._lexer.token, { kind: ve.LIST, values: this.any(W.BRACKET_L, E, W.BRACKET_R) });
          }
          parseObject(h) {
            let E = () => this.parseObjectField(h);
            return this.node(this._lexer.token, { kind: ve.OBJECT, fields: this.any(W.BRACE_L, E, W.BRACE_R) });
          }
          parseObjectField(h) {
            let E = this._lexer.token, D = this.parseName();
            return this.expectToken(W.COLON), this.node(E, { kind: ve.OBJECT_FIELD, name: D, value: this.parseValueLiteral(h) });
          }
          parseDirectives(h) {
            let E = [];
            for (; this.peek(W.AT); ) E.push(this.parseDirective(h));
            return E;
          }
          parseConstDirectives() {
            return this.parseDirectives(!0);
          }
          parseDirective(h) {
            let E = this._lexer.token;
            return this.expectToken(W.AT), this.node(E, { kind: ve.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(h) });
          }
          parseTypeReference() {
            let h = this._lexer.token, E;
            if (this.expectOptionalToken(W.BRACKET_L)) {
              let D = this.parseTypeReference();
              this.expectToken(W.BRACKET_R), E = this.node(h, { kind: ve.LIST_TYPE, type: D });
            } else E = this.parseNamedType();
            return this.expectOptionalToken(W.BANG) ? this.node(h, { kind: ve.NON_NULL_TYPE, type: E }) : E;
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
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("schema");
            let D = this.parseConstDirectives(), w = this.many(W.BRACE_L, this.parseOperationTypeDefinition, W.BRACE_R);
            return this.node(h, { kind: ve.SCHEMA_DEFINITION, description: E, directives: D, operationTypes: w });
          }
          parseOperationTypeDefinition() {
            let h = this._lexer.token, E = this.parseOperationType();
            this.expectToken(W.COLON);
            let D = this.parseNamedType();
            return this.node(h, { kind: ve.OPERATION_TYPE_DEFINITION, operation: E, type: D });
          }
          parseScalarTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("scalar");
            let D = this.parseName(), w = this.parseConstDirectives();
            return this.node(h, { kind: ve.SCALAR_TYPE_DEFINITION, description: E, name: D, directives: w });
          }
          parseObjectTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("type");
            let D = this.parseName(), w = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), V = this.parseFieldsDefinition();
            return this.node(h, { kind: ve.OBJECT_TYPE_DEFINITION, description: E, name: D, interfaces: w, directives: N, fields: V });
          }
          parseImplementsInterfaces() {
            return this.expectOptionalKeyword("implements") ? this.delimitedMany(W.AMP, this.parseNamedType) : [];
          }
          parseFieldsDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseFieldDefinition, W.BRACE_R);
          }
          parseFieldDefinition() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseName(), w = this.parseArgumentDefs();
            this.expectToken(W.COLON);
            let N = this.parseTypeReference(), V = this.parseConstDirectives();
            return this.node(h, { kind: ve.FIELD_DEFINITION, description: E, name: D, arguments: w, type: N, directives: V });
          }
          parseArgumentDefs() {
            return this.optionalMany(W.PAREN_L, this.parseInputValueDef, W.PAREN_R);
          }
          parseInputValueDef() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseName();
            this.expectToken(W.COLON);
            let w = this.parseTypeReference(), N;
            this.expectOptionalToken(W.EQUALS) && (N = this.parseConstValueLiteral());
            let V = this.parseConstDirectives();
            return this.node(h, { kind: ve.INPUT_VALUE_DEFINITION, description: E, name: D, type: w, defaultValue: N, directives: V });
          }
          parseInterfaceTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("interface");
            let D = this.parseName(), w = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), V = this.parseFieldsDefinition();
            return this.node(h, { kind: ve.INTERFACE_TYPE_DEFINITION, description: E, name: D, interfaces: w, directives: N, fields: V });
          }
          parseUnionTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("union");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseUnionMemberTypes();
            return this.node(h, { kind: ve.UNION_TYPE_DEFINITION, description: E, name: D, directives: w, types: N });
          }
          parseUnionMemberTypes() {
            return this.expectOptionalToken(W.EQUALS) ? this.delimitedMany(W.PIPE, this.parseNamedType) : [];
          }
          parseEnumTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("enum");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseEnumValuesDefinition();
            return this.node(h, { kind: ve.ENUM_TYPE_DEFINITION, description: E, name: D, directives: w, values: N });
          }
          parseEnumValuesDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseEnumValueDefinition, W.BRACE_R);
          }
          parseEnumValueDefinition() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseEnumValueName(), w = this.parseConstDirectives();
            return this.node(h, { kind: ve.ENUM_VALUE_DEFINITION, description: E, name: D, directives: w });
          }
          parseEnumValueName() {
            if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw wt(this._lexer.source, this._lexer.token.start, `${xo(this._lexer.token)} is reserved and cannot be used for an enum value.`);
            return this.parseName();
          }
          parseInputObjectTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("input");
            let D = this.parseName(), w = this.parseConstDirectives(), N = this.parseInputFieldsDefinition();
            return this.node(h, { kind: ve.INPUT_OBJECT_TYPE_DEFINITION, description: E, name: D, directives: w, fields: N });
          }
          parseInputFieldsDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseInputValueDef, W.BRACE_R);
          }
          parseTypeSystemExtension() {
            let h = this._lexer.lookahead();
            if (h.kind === W.NAME) switch (h.value) {
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
            throw this.unexpected(h);
          }
          parseSchemaExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("schema");
            let E = this.parseConstDirectives(), D = this.optionalMany(W.BRACE_L, this.parseOperationTypeDefinition, W.BRACE_R);
            if (E.length === 0 && D.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.SCHEMA_EXTENSION, directives: E, operationTypes: D });
          }
          parseScalarTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("scalar");
            let E = this.parseName(), D = this.parseConstDirectives();
            if (D.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.SCALAR_TYPE_EXTENSION, name: E, directives: D });
          }
          parseObjectTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("type");
            let E = this.parseName(), D = this.parseImplementsInterfaces(), w = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && w.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.OBJECT_TYPE_EXTENSION, name: E, interfaces: D, directives: w, fields: N });
          }
          parseInterfaceTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("interface");
            let E = this.parseName(), D = this.parseImplementsInterfaces(), w = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && w.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.INTERFACE_TYPE_EXTENSION, name: E, interfaces: D, directives: w, fields: N });
          }
          parseUnionTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("union");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseUnionMemberTypes();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.UNION_TYPE_EXTENSION, name: E, directives: D, types: w });
          }
          parseEnumTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("enum");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseEnumValuesDefinition();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.ENUM_TYPE_EXTENSION, name: E, directives: D, values: w });
          }
          parseInputObjectTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("input");
            let E = this.parseName(), D = this.parseConstDirectives(), w = this.parseInputFieldsDefinition();
            if (D.length === 0 && w.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.INPUT_OBJECT_TYPE_EXTENSION, name: E, directives: D, fields: w });
          }
          parseDirectiveDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("directive"), this.expectToken(W.AT);
            let D = this.parseName(), w = this.parseArgumentDefs(), N = this.expectOptionalKeyword("repeatable");
            this.expectKeyword("on");
            let V = this.parseDirectiveLocations();
            return this.node(h, { kind: ve.DIRECTIVE_DEFINITION, description: E, name: D, arguments: w, repeatable: N, locations: V });
          }
          parseDirectiveLocations() {
            return this.delimitedMany(W.PIPE, this.parseDirectiveLocation);
          }
          parseDirectiveLocation() {
            let h = this._lexer.token, E = this.parseName();
            if (Object.prototype.hasOwnProperty.call(_c, E.value)) return E;
            throw this.unexpected(h);
          }
          node(h, E) {
            return this._options.noLocation !== !0 && (E.loc = new Ot(h, this._lexer.lastToken, this._lexer.source)), E;
          }
          peek(h) {
            return this._lexer.token.kind === h;
          }
          expectToken(h) {
            let E = this._lexer.token;
            if (E.kind === h) return this.advanceLexer(), E;
            throw wt(this._lexer.source, E.start, `Expected ${A0(h)}, found ${xo(E)}.`);
          }
          expectOptionalToken(h) {
            return this._lexer.token.kind === h ? (this.advanceLexer(), !0) : !1;
          }
          expectKeyword(h) {
            let E = this._lexer.token;
            if (E.kind === W.NAME && E.value === h) this.advanceLexer();
            else throw wt(this._lexer.source, E.start, `Expected "${h}", found ${xo(E)}.`);
          }
          expectOptionalKeyword(h) {
            let E = this._lexer.token;
            return E.kind === W.NAME && E.value === h ? (this.advanceLexer(), !0) : !1;
          }
          unexpected(h) {
            let E = h ?? this._lexer.token;
            return wt(this._lexer.source, E.start, `Unexpected ${xo(E)}.`);
          }
          any(h, E, D) {
            this.expectToken(h);
            let w = [];
            for (; !this.expectOptionalToken(D); ) w.push(E.call(this));
            return w;
          }
          optionalMany(h, E, D) {
            if (this.expectOptionalToken(h)) {
              let w = [];
              do
                w.push(E.call(this));
              while (!this.expectOptionalToken(D));
              return w;
            }
            return [];
          }
          many(h, E, D) {
            this.expectToken(h);
            let w = [];
            do
              w.push(E.call(this));
            while (!this.expectOptionalToken(D));
            return w;
          }
          delimitedMany(h, E) {
            this.expectOptionalToken(h);
            let D = [];
            do
              D.push(E.call(this));
            while (this.expectOptionalToken(h));
            return D;
          }
          advanceLexer() {
            let { maxTokens: h } = this._options, E = this._lexer.advance();
            if (E.kind !== W.EOF && (++this._tokenCounter, h !== void 0 && this._tokenCounter > h)) throw wt(this._lexer.source, E.start, `Document contains more that ${h} tokens. Parsing aborted.`);
          }
        };
        function xo(h) {
          let E = h.value;
          return A0(h.kind) + (E != null ? ` "${E}"` : "");
        }
        function A0(h) {
          return gT(h) ? `"${h}"` : h;
        }
        function MT(h, E) {
          let D = new SyntaxError(h + " (" + E.loc.start.line + ":" + E.loc.start.column + ")");
          return Object.assign(D, E);
        }
        var UT = MT;
        function PT(h) {
          let E = [], { startToken: D, endToken: w } = h.loc;
          for (let N = D; N !== w; N = N.next) N.kind === "Comment" && E.push({ ...N, loc: { start: N.start, end: N.end } });
          return E;
        }
        var BT = { allowLegacyFragmentVariables: !0 };
        function VT(h) {
          if ((h == null ? void 0 : h.name) === "GraphQLError") {
            let { message: E, locations: [D] } = h;
            return UT(E, { loc: { start: D }, cause: h });
          }
          return h;
        }
        function $T(h) {
          let E;
          try {
            E = xT(h, BT);
          } catch (D) {
            throw VT(D);
          }
          return E.comments = PT(E), E;
        }
        var KT = { parse: $T, astFormat: "graphql", hasPragma: pt, locStart: te, locEnd: Le }, jT = { graphql: eT };
        return u(l);
      });
    }), O;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
    })(O || (O = {}));
    var Q2 = class {
      constructor() {
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
          setTimeout(() => {
            throw e.stack ? Uu.isErrorNoTelemetry(e) ? new Uu(e.message + `

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
    }, Z2 = new Q2();
    function Ta(e) {
      e_(e) || Z2.onUnexpectedError(e);
    }
    function ku(e) {
      if (e instanceof Error) {
        let { name: t, message: n, cause: r } = e, i = e.stacktrace || e.stack;
        return { $isError: !0, name: t, message: n, stack: i, noTelemetry: Uu.isErrorNoTelemetry(e), cause: r ? ku(r) : void 0, code: e.code };
      }
      return e;
    }
    var Mu = "Canceled";
    function e_(e) {
      return e instanceof t_ ? !0 : e instanceof Error && e.name === Mu && e.message === Mu;
    }
    var t_ = class extends Error {
      constructor() {
        super(Mu), this.name = this.message;
      }
    };
    cr = class extends Error {
      static is(t) {
        return t instanceof cr || t instanceof Error && t.name === cr._name;
      }
      constructor(t) {
        super(t), this.name = cr._name;
      }
    }, cr._name = "PendingMigrationError";
    var Uu = class yc extends Error {
      constructor(t) {
        super(t), this.name = "CodeExpectedError";
      }
      static fromError(t) {
        if (t instanceof yc) return t;
        let n = new yc();
        return n.message = t.message, n.stack = t.stack, n;
      }
      static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
      }
    }, lt = class R0 extends Error {
      constructor(t) {
        super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, R0.prototype);
      }
    };
    function n_(e, t) {
      let n = this, r = !1, i;
      return function() {
        return r || (r = !0, t || (i = e.apply(n, arguments))), i;
      };
    }
    function wi(e, t) {
      let n = Ai(e, t);
      return n === -1 ? void 0 : e[n];
    }
    function Ai(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? i = s + 1 : a = s;
      }
      return i - 1;
    }
    function r_(e, t) {
      let n = Pu(e, t);
      return n === e.length ? void 0 : e[n];
    }
    function Pu(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? a = s : i = s + 1;
      }
      return i;
    }
    var Lh = (li = class {
      constructor(t) {
        this._array = t, this._findLastMonotonousLastIdx = 0;
      }
      findLastMonotonous(t) {
        if (li.assertInvariants) {
          if (this._prevFindLastPredicate) {
            for (let r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
          this._prevFindLastPredicate = t;
        }
        let n = Ai(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
      }
    }, li.assertInvariants = !1, li);
    function Fh(e, t, n = (r, i) => r === i) {
      if (e === t) return !0;
      if (!e || !t || e.length !== t.length) return !1;
      for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
      return !0;
    }
    function* i_(e, t) {
      let n, r;
      for (let i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
      n && (yield n);
    }
    function a_(e, t) {
      for (let n = 0; n <= e.length; n++) t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
    }
    function s_(e, t) {
      for (let n = 0; n < e.length; n++) t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
    }
    function o_(e, t) {
      for (let n of t) e.push(n);
    }
    var Bu;
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
    })(Bu || (Bu = {}));
    function Si(e, t) {
      return (n, r) => t(e(n), e(r));
    }
    var wa = (e, t) => e - t;
    function u_(e) {
      return (t, n) => -e(t, n);
    }
    dr = class {
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
        return new dr((n) => this.iterate((r) => t(r) ? n(r) : !0));
      }
      map(t) {
        return new dr((n) => this.iterate((r) => n(t(r))));
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
        return this.iterate((i) => ((r || Bu.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
      }
    }, dr.empty = new dr((t) => {
    });
    function l_(e, t) {
      return e.reduce((n, r) => n + t(r), 0);
    }
    var Ih, Rh, c_ = class {
      constructor(e, t) {
        this.uri = e, this.value = t;
      }
    };
    function d_(e) {
      return Array.isArray(e);
    }
    var h_ = (jn = class {
      constructor(t, n) {
        if (this[Ih] = "ResourceMap", t instanceof jn) this.map = new Map(t.map), this.toKey = n ?? jn.defaultToKey;
        else if (d_(t)) {
          this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? jn.defaultToKey;
          for (let [r, i] of t) this.set(r, i);
        } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? jn.defaultToKey;
      }
      set(t, n) {
        return this.map.set(this.toKey(t), new c_(t, n)), this;
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
      *[(Ih = Symbol.toStringTag, Symbol.iterator)]() {
        for (let [, t] of this.map) yield [t.uri, t.value];
      }
    }, jn.defaultToKey = (t) => t.toString(), jn), kt;
    (function(e) {
      e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
    })(kt || (kt = {}));
    var f_ = class {
      constructor() {
        this[Rh] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
      [(Rh = Symbol.toStringTag, Symbol.iterator)]() {
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
    }, p_ = class extends f_ {
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
    }, m_ = class extends p_ {
      constructor(e, t = 1) {
        super(e, t);
      }
      trim(e) {
        this.trimOld(e);
      }
      set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
      }
    }, g_ = class {
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
    function E_(e, t = "Unreachable") {
      throw new Error(t);
    }
    function __(e, t = "unexpected state") {
      if (!e) throw typeof t == "string" ? new lt(`Assertion Failed: ${t}`) : t;
    }
    function Aa(e) {
      if (!e()) {
        debugger;
        e(), Ta(new lt("Assertion Failed"));
      }
    }
    function Vu(e, t) {
      let n = 0;
      for (; n < e.length - 1; ) {
        let r = e[n], i = e[n + 1];
        if (!t(r, i)) return !1;
        n++;
      }
      return !0;
    }
    function D_(e) {
      return typeof e == "string";
    }
    function v_(e) {
      return !!e && typeof e[Symbol.iterator] == "function";
    }
    var ks;
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
      function u(I) {
        return !I || I[Symbol.iterator]().next().done === !0;
      }
      e.isEmpty = u;
      function l(I) {
        return I[Symbol.iterator]().next().value;
      }
      e.first = l;
      function c(I, B) {
        let S = 0;
        for (let K of I) if (B(K, S++)) return !0;
        return !1;
      }
      e.some = c;
      function f(I, B) {
        let S = 0;
        for (let K of I) if (!B(K, S++)) return !1;
        return !0;
      }
      e.every = f;
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
        for (let B of I) v_(B) ? yield* B : yield B;
      }
      e.concat = L;
      function A(I, B, S) {
        let K = S;
        for (let $ of I) K = B(K, $);
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
        for (let $ = 0; $ < B; $++) {
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
    })(ks || (ks = {}));
    function WT(e) {
      return e;
    }
    function YT(e, t) {
    }
    function Oh(e) {
      if (ks.is(e)) {
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
    function b_(...e) {
      return Sa(() => Oh(e));
    }
    function Sa(e) {
      return { dispose: n_(() => {
        e();
      }) };
    }
    var $u = (ci = class {
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
          Oh(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
      }
      add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._isDisposed ? ci.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t;
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
    }, ci.DISABLE_DISPOSED_WARNING = !1, ci), Ms = (na = class {
      constructor() {
        this._store = new $u(), this._store;
      }
      dispose() {
        this._store.dispose();
      }
      _register(t) {
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(t);
      }
    }, na.None = Object.freeze({ dispose() {
    } }), na), ze = (hr = class {
      constructor(t) {
        this.element = t, this.next = hr.Undefined, this.prev = hr.Undefined;
      }
    }, hr.Undefined = new hr(void 0), hr), y_ = class {
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
    }, N_ = globalThis.performance.now.bind(globalThis.performance), xh = class O0 {
      static create(t) {
        return new O0(t);
      }
      constructor(t) {
        this._now = t === !1 ? Date.now : N_, this._startTime = this._now(), this._stopTime = -1;
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
      e.None = () => Ms.None;
      function t(Z, G) {
        return p(Z, () => {
        }, 0, void 0, !0, void 0, G);
      }
      e.defer = t;
      function n(Z) {
        return (G, J = null, ne) => {
          let oe = !1, de;
          return de = Z((le) => {
            if (!oe) return de ? de.dispose() : oe = !0, G.call(J, le);
          }, null, ne), oe && de.dispose(), de;
        };
      }
      e.once = n;
      function r(Z, G) {
        return e.once(e.filter(Z, G));
      }
      e.onceIf = r;
      function i(Z, G, J) {
        return c((ne, oe = null, de) => Z((le) => ne.call(oe, G(le)), null, de), J);
      }
      e.map = i;
      function a(Z, G, J) {
        return c((ne, oe = null, de) => Z((le) => {
          G(le), ne.call(oe, le);
        }, null, de), J);
      }
      e.forEach = a;
      function s(Z, G, J) {
        return c((ne, oe = null, de) => Z((le) => G(le) && ne.call(oe, le), null, de), J);
      }
      e.filter = s;
      function o(Z) {
        return Z;
      }
      e.signal = o;
      function u(...Z) {
        return (G, J = null, ne) => {
          let oe = b_(...Z.map((de) => de((le) => G.call(J, le))));
          return f(oe, ne);
        };
      }
      e.any = u;
      function l(Z, G, J, ne) {
        let oe = J;
        return i(Z, (de) => (oe = G(oe, de), oe), ne);
      }
      e.reduce = l;
      function c(Z, G) {
        let J, ne = { onWillAddFirstListener() {
          J = Z(oe.fire, oe);
        }, onDidRemoveLastListener() {
          J == null || J.dispose();
        } }, oe = new ln(ne);
        return G == null || G.add(oe), oe.event;
      }
      function f(Z, G) {
        return G instanceof Array ? G.push(Z) : G && G.add(Z), Z;
      }
      function p(Z, G, J = 100, ne = !1, oe = !1, de, le) {
        let Ie, ke, y, ee = 0, z, re = { leakWarningThreshold: de, onWillAddFirstListener() {
          Ie = Z((P) => {
            ee++, ke = G(ke, P), ne && !y && (M.fire(ke), ke = void 0), z = () => {
              let ue = ke;
              ke = void 0, y = void 0, (!ne || ee > 1) && M.fire(ue), ee = 0;
            }, typeof J == "number" ? (y && clearTimeout(y), y = setTimeout(z, J)) : y === void 0 && (y = null, queueMicrotask(z));
          });
        }, onWillRemoveListener() {
          oe && ee > 0 && (z == null || z());
        }, onDidRemoveLastListener() {
          z = void 0, Ie.dispose();
        } }, M = new ln(re);
        return le == null || le.add(M), M.event;
      }
      e.debounce = p;
      function m(Z, G = 0, J) {
        return e.debounce(Z, (ne, oe) => ne ? (ne.push(oe), ne) : [oe], G, void 0, !0, void 0, J);
      }
      e.accumulate = m;
      function g(Z, G = (ne, oe) => ne === oe, J) {
        let ne = !0, oe;
        return s(Z, (de) => {
          let le = ne || !G(de, oe);
          return ne = !1, oe = de, le;
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
        let le = () => {
          oe == null || oe.forEach((ke) => Ie.fire(ke)), oe = null;
        }, Ie = new ln({ onWillAddFirstListener() {
          de || (de = Z((ke) => Ie.fire(ke)), ne && ne.add(de));
        }, onDidAddFirstListener() {
          oe && (G ? setTimeout(le) : le());
        }, onDidRemoveLastListener() {
          de && de.dispose(), de = null;
        } });
        return ne && ne.add(Ie), Ie.event;
      }
      e.buffer = L;
      function A(Z, G) {
        return (J, ne, oe) => {
          let de = G(new C());
          return Z(function(le) {
            let Ie = de.evaluate(le);
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
        let ne = (...Ie) => le.fire(J(...Ie)), oe = () => Z.on(G, ne), de = () => Z.removeListener(G, ne), le = new ln({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return le.event;
      }
      e.fromNodeEventEmitter = x;
      function U(Z, G, J = (ne) => ne) {
        let ne = (...Ie) => le.fire(J(...Ie)), oe = () => Z.addEventListener(G, ne), de = () => Z.removeEventListener(G, ne), le = new ln({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return le.event;
      }
      e.fromDOMEventEmitter = U;
      function q(Z, G) {
        let J, ne = new Promise((oe, de) => {
          let le = n(Z)(oe, null, G);
          J = () => le.dispose();
        });
        return ne.cancel = J, ne;
      }
      e.toPromise = q;
      function I(Z) {
        let G = new ln();
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
          this.emitter = new ln(ne), J && J.add(this.emitter);
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
      function $(Z, G) {
        return new K(Z, G).emitter.event;
      }
      e.fromObservable = $;
      function xe(Z) {
        return (G, J, ne) => {
          let oe = 0, de = !1, le = { beginUpdate() {
            oe++;
          }, endUpdate() {
            oe--, oe === 0 && (Z.reportChanges(), de && (de = !1, G.call(J)));
          }, handlePossibleChange() {
          }, handleChange() {
            de = !0;
          } };
          Z.addObserver(le), Z.reportChanges();
          let Ie = { dispose() {
            Z.removeObserver(le);
          } };
          return ne instanceof $u ? ne.add(Ie) : Array.isArray(ne) && ne.push(Ie), Ie;
        };
      }
      e.fromObservableLight = xe;
    })(Us || (Us = {}));
    var C_ = (fr = class {
      constructor(t) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${fr._idPool++}`, fr.all.add(this);
      }
      start(t) {
        this._stopWatch = new xh(), this.listenerCount = t;
      }
      stop() {
        if (this._stopWatch) {
          let t = this._stopWatch.elapsed();
          this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
      }
    }, fr.all = /* @__PURE__ */ new Set(), fr._idPool = 0, fr), T_ = -1, w_ = (di = class {
      constructor(t, n, r = (di._idPool++).toString(16).padStart(3, "0")) {
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
          let u = new S_(o, a);
          this._errorHandler(u);
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
    }, di._idPool = 1, di), A_ = class x0 {
      static create() {
        let t = new Error();
        return new x0(t.stack ?? "");
      }
      constructor(t) {
        this.value = t;
      }
      print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
      }
    }, S_ = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerLeakError", this.stack = t;
      }
    }, L_ = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerRefusalError", this.stack = t;
      }
    }, F_ = 0, Ku = class {
      constructor(e) {
        this.value = e, this.id = F_++;
      }
    }, I_ = 2, ln = class {
      constructor(e) {
        var t, n, r, i;
        this._size = 0, this._options = e, this._leakageMon = (t = this._options) != null && t.leakWarningThreshold ? new w_((e == null ? void 0 : e.onListenerError) ?? Ta, ((n = this._options) == null ? void 0 : n.leakWarningThreshold) ?? T_) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new C_(this._options._profName) : void 0, this._deliveryQueue = (i = this._options) == null ? void 0 : i.deliveryQueue;
      }
      dispose() {
        var e, t, n, r;
        this._disposed || (this._disposed = !0, ((e = this._deliveryQueue) == null ? void 0 : e.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (n = (t = this._options) == null ? void 0 : t.onDidRemoveLastListener) == null || n.call(t), (r = this._leakageMon) == null || r.dispose());
      }
      get event() {
        return this._event ?? (this._event = (e, t, n) => {
          var s, o, u, l, c, f, p;
          if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
            let m = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
            console.warn(m);
            let g = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], _ = new L_(`${m}. HINT: Stack shows most frequent listener (${g[1]}-times)`, g[0]);
            return (((s = this._options) == null ? void 0 : s.onListenerError) || Ta)(_), Ms.None;
          }
          if (this._disposed) return Ms.None;
          t && (e = e.bind(t));
          let r = new Ku(e), i;
          this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = A_.create(), i = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Ku ? (this._deliveryQueue ?? (this._deliveryQueue = new R_()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = r, (c = (l = this._options) == null ? void 0 : l.onDidAddFirstListener) == null || c.call(l, this)), (p = (f = this._options) == null ? void 0 : f.onDidAddListener) == null || p.call(f, this), this._size++;
          let a = Sa(() => {
            i == null || i(), this._removeListener(r);
          });
          return n instanceof $u ? n.add(a) : Array.isArray(n) && n.push(a), a;
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
        if (this._size * I_ <= t.length) {
          let u = 0;
          for (let l = 0; l < t.length; l++) t[l] ? t[u++] = t[l] : r && u < this._deliveryQueue.end && (this._deliveryQueue.end--, u < this._deliveryQueue.i && this._deliveryQueue.i--);
          t.length = u;
        }
      }
      _deliver(e, t) {
        var r;
        if (!e) return;
        let n = ((r = this._options) == null ? void 0 : r.onListenerError) || Ta;
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
        if ((t = this._deliveryQueue) != null && t.current && (this._deliverQueue(this._deliveryQueue), (n = this._perfMon) == null || n.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof Ku) this._deliver(this._listeners, e);
        else {
          let a = this._deliveryQueue;
          a.enqueue(this, e, this._listeners.length), this._deliverQueue(a);
        }
        (i = this._perfMon) == null || i.stop();
      }
      hasListeners() {
        return this._size > 0;
      }
    }, R_ = class {
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
    function O_() {
      return globalThis._VSCODE_NLS_MESSAGES;
    }
    function kh() {
      return globalThis._VSCODE_NLS_LANGUAGE;
    }
    var x_ = kh() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
    function k_(e, t) {
      let n;
      return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
        let a = i[0], s = t[a], o = r;
        return typeof s == "string" ? o = s : (typeof s == "number" || typeof s == "boolean" || s === void 0 || s === null) && (o = String(s)), o;
      }), x_ && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
    }
    function me(e, t, ...n) {
      return k_(typeof e == "number" ? M_(e, t) : t, n);
    }
    function M_(e, t) {
      var r;
      let n = (r = O_()) == null ? void 0 : r[e];
      if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
      }
      return n;
    }
    var Li = "en", La = !1, Fa = !1, Ps = !1, Mh = !1, ju = !1, Uh = !1, Bs, Vs = Li, Ph = Li, U_, bn, Zn = globalThis, St;
    typeof Zn.vscode < "u" && typeof Zn.vscode.process < "u" ? St = Zn.vscode.process : typeof process < "u" && typeof ((c0 = process == null ? void 0 : process.versions) == null ? void 0 : c0.node) == "string" && (St = process);
    var P_ = typeof ((d0 = St == null ? void 0 : St.versions) == null ? void 0 : d0.electron) == "string", B_ = P_ && (St == null ? void 0 : St.type) === "renderer";
    if (typeof St == "object") {
      La = St.platform === "win32", Fa = St.platform === "darwin", Ps = St.platform === "linux", Ps && St.env.SNAP && St.env.SNAP_REVISION, St.env.CI || St.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Bs = Li, Vs = Li;
      let e = St.env.VSCODE_NLS_CONFIG;
      if (e) try {
        let t = JSON.parse(e);
        Bs = t.userLocale, Ph = t.osLocale, Vs = t.resolvedLanguage || Li, U_ = (h0 = t.languagePack) == null ? void 0 : h0.translationsConfigFile;
      } catch {
      }
      Mh = !0;
    } else typeof navigator == "object" && !B_ ? (bn = navigator.userAgent, La = bn.indexOf("Windows") >= 0, Fa = bn.indexOf("Macintosh") >= 0, Uh = (bn.indexOf("Macintosh") >= 0 || bn.indexOf("iPad") >= 0 || bn.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Ps = bn.indexOf("Linux") >= 0, (bn == null ? void 0 : bn.indexOf("Mobi")) >= 0, ju = !0, Vs = kh() || Li, Bs = navigator.language.toLowerCase(), Ph = Bs) : console.error("Unable to resolve platform.");
    var Fi;
    (function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    })(Fi || (Fi = {})), Fi.Web, Fa ? Fi.Mac : La ? Fi.Windows : Ps && Fi.Linux;
    var Ii = La, V_ = Fa, $_ = Mh, K_ = ju, j_ = ju && typeof Zn.importScripts == "function", q_ = j_ ? Zn.origin : void 0, $n = bn, Cr = Vs, Bh;
    (function(e) {
      function t() {
        return Cr;
      }
      e.value = t;
      function n() {
        return Cr.length === 2 ? Cr === "en" : Cr.length >= 3 ? Cr[0] === "e" && Cr[1] === "n" && Cr[2] === "-" : !1;
      }
      e.isDefaultVariant = n;
      function r() {
        return Cr === "en";
      }
      e.isDefault = r;
    })(Bh || (Bh = {}));
    var G_ = typeof Zn.postMessage == "function" && !Zn.importScripts;
    (() => {
      if (G_) {
        let e = [];
        Zn.addEventListener("message", (n) => {
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
          e.push({ id: r, callback: n }), Zn.postMessage({ vscodeScheduleAsyncWork: r }, "*");
        };
      }
      return (e) => setTimeout(e);
    })();
    var Ia;
    (function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
    })(Ia || (Ia = {})), Fa || Uh ? Ia.Macintosh : La ? Ia.Windows : Ia.Linux;
    var H_ = !!($n && $n.indexOf("Chrome") >= 0);
    $n && $n.indexOf("Firefox") >= 0, !H_ && $n && $n.indexOf("Safari") >= 0, $n && $n.indexOf("Edg/") >= 0, $n && $n.indexOf("Android") >= 0;
    var Vh = Object.freeze(function(e, t) {
      let n = setTimeout(e.bind(t), 0);
      return { dispose() {
        clearTimeout(n);
      } };
    }), $s;
    (function(e) {
      function t(n) {
        return n === e.None || n === e.Cancelled || n instanceof Ks ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
      }
      e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: Us.None }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Vh });
    })($s || ($s = {}));
    var Ks = class {
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
        return this._isCancelled ? Vh : (this._emitter || (this._emitter = new ln()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
      }
    }, W_ = class {
      constructor(e) {
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
      }
      get token() {
        return this._token || (this._token = new Ks()), this._token;
      }
      cancel() {
        this._token ? this._token instanceof Ks && this._token.cancel() : this._token = $s.Cancelled;
      }
      dispose(e = !1) {
        var t;
        e && this.cancel(), (t = this._parentListener) == null || t.dispose(), this._token ? this._token instanceof Ks && this._token.dispose() : this._token = $s.None;
      }
    };
    function Y_(e) {
      return e;
    }
    var z_ = class {
      constructor(e, t) {
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = Y_) : (this._fn = t, this._computeKey = e.getCacheKey);
      }
      get(e) {
        let t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
      }
    }, $h = class {
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
    function Kh(e) {
      return e < 0 ? 0 : e > cn.MAX_UINT_8 ? cn.MAX_UINT_8 : e | 0;
    }
    function Ri(e) {
      return e < 0 ? 0 : e > cn.MAX_UINT_32 ? cn.MAX_UINT_32 : e | 0;
    }
    function X_(e) {
      return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
    }
    function J_(e) {
      return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
    }
    function jh(e) {
      return e.split(/\r\n|\r|\n/);
    }
    function Q_(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        let r = e.charCodeAt(t);
        if (r !== O.Space && r !== O.Tab) return t;
      }
      return -1;
    }
    function Z_(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        let r = e.charCodeAt(n);
        if (r !== O.Space && r !== O.Tab) return n;
      }
      return -1;
    }
    function eD(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    function tD(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let u = e.charCodeAt(n), l = t.charCodeAt(i);
        if (u < l) return -1;
        if (u > l) return 1;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function qh(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let u = e.charCodeAt(n), l = t.charCodeAt(i);
        if (u === l) continue;
        if (u >= 128 || l >= 128) return tD(e.toLowerCase(), t.toLowerCase(), n, r, i, a);
        Gh(u) && (u -= 32), Gh(l) && (l -= 32);
        let c = u - l;
        if (c !== 0) return c;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function Gh(e) {
      return e >= O.a && e <= O.z;
    }
    function Hh(e) {
      return e >= O.A && e <= O.Z;
    }
    function nD(e, t) {
      return e.length === t.length && qh(e, t) === 0;
    }
    function rD(e, t) {
      let n = t.length;
      return t.length > e.length ? !1 : qh(e, t, 0, n) === 0;
    }
    function js(e, t) {
      let n = Math.min(e.length, t.length), r;
      for (r = 0; r < n; r++) if (e.charCodeAt(r) !== t.charCodeAt(r)) return r;
      return n;
    }
    function qu(e, t) {
      let n = Math.min(e.length, t.length), r, i = e.length - 1, a = t.length - 1;
      for (r = 0; r < n; r++) if (e.charCodeAt(i - r) !== t.charCodeAt(a - r)) return r;
      return n;
    }
    function Gu(e) {
      return 55296 <= e && e <= 56319;
    }
    function iD(e) {
      return 56320 <= e && e <= 57343;
    }
    function aD(e, t) {
      return (e - 55296 << 10) + (t - 56320) + 65536;
    }
    function sD(e, t, n) {
      let r = e.charCodeAt(n);
      if (Gu(r) && n + 1 < t) {
        let i = e.charCodeAt(n + 1);
        if (iD(i)) return aD(r, i);
      }
      return r;
    }
    var oD = /^[\t\n\r\x20-\x7E]*$/;
    function uD(e) {
      return oD.test(e);
    }
    String.fromCharCode(O.UTF8_BOM);
    var Wh;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
    })(Wh || (Wh = {}));
    var Hu;
    (function(e) {
      e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
    })(Hu || (Hu = {}));
    var Wu = (an = class {
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
    }, an.ambiguousCharacterData = new $h(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), an.cache = new z_({ getCacheKey: JSON.stringify }, (t) => {
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
      let a = an.ambiguousCharacterData.value, s = t.filter((c) => !c.startsWith("_") && c in a);
      s.length === 0 && (s = ["_default"]);
      let o;
      for (let c of s) {
        let f = n(a[c]);
        o = i(o, f);
      }
      let u = n(a._common), l = r(u, o);
      return new an(l);
    }), an._locales = new $h(() => Object.keys(an.ambiguousCharacterData.value).filter((t) => !t.startsWith("_"))), an), Yu = (qn = class {
      static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
      }
      static getData() {
        return this._data || (this._data = new Set([...Object.values(qn.getRawData())].flat())), this._data;
      }
      static isInvisibleCharacter(t) {
        return qn.getData().has(t);
      }
      static containsInvisibleCharacter(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t.codePointAt(n);
          if (typeof r == "number" && (qn.isInvisibleCharacter(r) || r === Hu.space)) return !0;
        }
        return !1;
      }
      static get codePoints() {
        return qn.getData();
      }
    }, qn._data = void 0, qn), zu = "default", lD = "$initialize", Ht;
    (function(e) {
      e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
    })(Ht || (Ht = {}));
    var cD = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.method = r, this.args = i, this.type = Ht.Request;
      }
    }, Yh = class {
      constructor(e, t, n, r) {
        this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = Ht.Reply;
      }
    }, dD = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.eventName = r, this.arg = i, this.type = Ht.SubscribeEvent;
      }
    }, hD = class {
      constructor(e, t, n) {
        this.vsWorker = e, this.req = t, this.event = n, this.type = Ht.Event;
      }
    }, fD = class {
      constructor(e, t) {
        this.vsWorker = e, this.req = t, this.type = Ht.UnsubscribeEvent;
      }
    }, pD = class {
      constructor(e) {
        this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
      }
      setWorkerId(e) {
        this._workerId = e;
      }
      sendMessage(e, t, n) {
        let r = String(++this._lastSentReq);
        return new Promise((i, a) => {
          this._pendingReplies[r] = { resolve: i, reject: a }, this._send(new cD(this._workerId, r, e, t, n));
        });
      }
      listen(e, t, n) {
        let r = null, i = new ln({ onWillAddFirstListener: () => {
          r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new dD(this._workerId, r, e, t, n));
        }, onDidRemoveLastListener: () => {
          this._pendingEmitters.delete(r), this._send(new fD(this._workerId, r)), r = null;
        } });
        return i.event;
      }
      handleMessage(e) {
        !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
      }
      createProxyToRemoteChannel(e, t) {
        let n = { get: (r, i) => (typeof i == "string" && !r[i] && (Xh(i) ? r[i] = (a) => this.listen(e, i, a) : zh(i) ? r[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === O.DollarSign && (r[i] = async (...a) => (await (t == null ? void 0 : t()), this.sendMessage(e, i, a)))), r[i]) };
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
          this._send(new Yh(this._workerId, t, n, void 0));
        }, (n) => {
          n.detail instanceof Error && (n.detail = ku(n.detail)), this._send(new Yh(this._workerId, t, void 0, ku(n)));
        });
      }
      _handleSubscribeEventMessage(e) {
        let t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((r) => {
          this._send(new hD(this._workerId, t, r));
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
    function zh(e) {
      return e[0] === "o" && e[1] === "n" && Hh(e.charCodeAt(2));
    }
    function Xh(e) {
      return /^onDynamic/.test(e) && Hh(e.charCodeAt(9));
    }
    var mD = class {
      constructor(e, t) {
        this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new pD({ sendMessage: (n, r) => {
          e(n, r);
        }, handleMessage: (n, r, i) => this._handleMessage(n, r, i), handleEvent: (n, r, i) => this._handleEvent(n, r, i) }), this.requestHandler = t(this);
      }
      onmessage(e) {
        this._protocol.handleMessage(e);
      }
      _handleMessage(e, t, n) {
        if (e === zu && t === lD) return this.initialize(n[0]);
        let r = e === zu ? this.requestHandler : this._localChannels.get(e);
        if (!r) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
        if (typeof r[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
        try {
          return Promise.resolve(r[t].apply(r, n));
        } catch (i) {
          return Promise.reject(i);
        }
      }
      _handleEvent(e, t, n) {
        let r = e === zu ? this.requestHandler : this._localChannels.get(e);
        if (!r) throw new Error(`Missing channel ${e} on worker thread`);
        if (Xh(t)) {
          let i = r[t].call(r, n);
          if (typeof i != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
          return i;
        }
        if (zh(t)) {
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
    }, Xu = !1;
    function Jh(e) {
      if (Xu) throw new Error("WebWorker already initialized!");
      Xu = !0;
      let t = new mD((n) => globalThis.postMessage(n), (n) => e(n));
      return globalThis.onmessage = (n) => {
        t.onmessage(n.data);
      }, t;
    }
    function gD(e) {
      globalThis.onmessage = (t) => {
        Xu || Jh(e);
      };
    }
    var Tr = class {
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
    function Qh(e, t) {
      return (t << 5) - t + e | 0;
    }
    function ED(e, t) {
      t = Qh(149417, t);
      for (let n = 0, r = e.length; n < r; n++) t = Qh(e.charCodeAt(n), t);
      return t;
    }
    var Zh;
    (function(e) {
      e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
    })(Zh || (Zh = {}));
    var ef = class {
      constructor(e) {
        this.source = e;
      }
      getElements() {
        let e = this.source, t = new Int32Array(e.length);
        for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
        return t;
      }
    };
    function _D(e, t, n) {
      return new nf(new ef(e), new ef(t)).ComputeDiff(n).changes;
    }
    var Oi = class {
      static Assert(e, t) {
        if (!e) throw new Error(t);
      }
    }, xi = class {
      static Copy(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
      static Copy2(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
    }, er;
    (function(e) {
      e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
    })(er || (er = {}));
    var tf = class {
      constructor() {
        this.m_changes = [], this.m_originalStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
      }
      MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Tr(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = cn.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = cn.MAX_SAFE_SMALL_INTEGER;
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
    }, nf = class ua {
      constructor(t, n, r = null) {
        this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
        let [i, a, s] = ua._getElements(t), [o, u, l] = ua._getElements(n);
        this._hasStrings = s && l, this._originalStringElements = i, this._originalElementsOrHash = a, this._modifiedStringElements = o, this._modifiedElementsOrHash = u, this.m_forwardHistory = [], this.m_reverseHistory = [];
      }
      static _isStringArray(t) {
        return t.length > 0 && typeof t[0] == "string";
      }
      static _getElements(t) {
        let n = t.getElements();
        if (ua._isStringArray(n)) {
          let r = new Int32Array(n.length);
          for (let i = 0, a = n.length; i < a; i++) r[i] = ED(n[i], 0);
          return [n, r, !0];
        }
        return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
      }
      ElementsAreEqual(t, n) {
        return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
      }
      ElementsAreStrictEqual(t, n) {
        if (!this.ElementsAreEqual(t, n)) return !1;
        let r = ua._getStrictElement(this._originalSequence, t), i = ua._getStrictElement(this._modifiedSequence, n);
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
          let f;
          return r <= i ? (Oi.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), f = [new Tr(t, 0, r, i - r + 1)]) : t <= n ? (Oi.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = [new Tr(t, n - t + 1, r, 0)]) : (Oi.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), Oi.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = []), f;
        }
        let s = [0], o = [0], u = this.ComputeRecursionPoint(t, n, r, i, s, o, a), l = s[0], c = o[0];
        if (u !== null) return u;
        if (!a[0]) {
          let f = this.ComputeDiffRecursive(t, l, r, c, a), p = [];
          return a[0] ? p = [new Tr(l + 1, n - (l + 1) + 1, c + 1, i - (c + 1) + 1)] : p = this.ComputeDiffRecursive(l + 1, n, c + 1, i, a), this.ConcatenateChanges(f, p);
        }
        return [new Tr(t, n - t + 1, r, i - r + 1)];
      }
      WALKTRACE(t, n, r, i, a, s, o, u, l, c, f, p, m, g, _, L, A, F) {
        let C = null, x = null, U = new tf(), q = n, I = r, B = m[0] - L[0] - i, S = cn.MIN_SAFE_SMALL_INTEGER, K = this.m_forwardHistory.length - 1;
        do {
          let $ = B + t;
          $ === q || $ < I && l[$ - 1] < l[$ + 1] ? (f = l[$ + 1], g = f - B - i, f < S && U.MarkNextChange(), S = f, U.AddModifiedElement(f + 1, g), B = $ + 1 - t) : (f = l[$ - 1] + 1, g = f - B - i, f < S && U.MarkNextChange(), S = f - 1, U.AddOriginalElement(f, g + 1), B = $ - 1 - t), K >= 0 && (l = this.m_forwardHistory[K], t = l[0], q = 1, I = l.length - 1);
        } while (--K >= -1);
        if (C = U.getReverseChanges(), F[0]) {
          let $ = m[0] + 1, xe = L[0] + 1;
          if (C !== null && C.length > 0) {
            let Z = C[C.length - 1];
            $ = Math.max($, Z.getOriginalEnd()), xe = Math.max(xe, Z.getModifiedEnd());
          }
          x = [new Tr($, p - $ + 1, xe, _ - xe + 1)];
        } else {
          U = new tf(), q = s, I = o, B = m[0] - L[0] - u, S = cn.MAX_SAFE_SMALL_INTEGER, K = A ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
          do {
            let $ = B + a;
            $ === q || $ < I && c[$ - 1] >= c[$ + 1] ? (f = c[$ + 1] - 1, g = f - B - u, f > S && U.MarkNextChange(), S = f + 1, U.AddOriginalElement(f + 1, g + 1), B = $ + 1 - a) : (f = c[$ - 1], g = f - B - u, f > S && U.MarkNextChange(), S = f, U.AddModifiedElement(f + 1, g + 1), B = $ - 1 - a), K >= 0 && (c = this.m_reverseHistory[K], a = c[0], q = 1, I = c.length - 1);
          } while (--K >= -1);
          x = U.getChanges();
        }
        return this.ConcatenateChanges(C, x);
      }
      ComputeRecursionPoint(t, n, r, i, a, s, o) {
        let u = 0, l = 0, c = 0, f = 0, p = 0, m = 0;
        t--, r--, a[0] = 0, s[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        let g = n - t + (i - r), _ = g + 1, L = new Int32Array(_), A = new Int32Array(_), F = i - r, C = n - t, x = t - r, U = n - i, q = (C - F) % 2 === 0;
        L[F] = t, A[C] = n, o[0] = !1;
        for (let I = 1; I <= g / 2 + 1; I++) {
          let B = 0, S = 0;
          c = this.ClipDiagonalBound(F - I, I, F, _), f = this.ClipDiagonalBound(F + I, I, F, _);
          for (let $ = c; $ <= f; $ += 2) {
            $ === c || $ < f && L[$ - 1] < L[$ + 1] ? u = L[$ + 1] : u = L[$ - 1] + 1, l = u - ($ - F) - x;
            let xe = u;
            for (; u < n && l < i && this.ElementsAreEqual(u + 1, l + 1); ) u++, l++;
            if (L[$] = u, u + l > B + S && (B = u, S = l), !q && Math.abs($ - C) <= I - 1 && u >= A[$]) return a[0] = u, s[0] = l, xe <= A[$] && er.MaxDifferencesHistory > 0 && I <= er.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, L, A, u, n, a, l, i, s, q, o) : null;
          }
          let K = (B - t + (S - r) - I) / 2;
          if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(B, K)) return o[0] = !0, a[0] = B, s[0] = S, K > 0 && er.MaxDifferencesHistory > 0 && I <= er.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, L, A, u, n, a, l, i, s, q, o) : (t++, r++, [new Tr(t, n - t + 1, r, i - r + 1)]);
          p = this.ClipDiagonalBound(C - I, I, C, _), m = this.ClipDiagonalBound(C + I, I, C, _);
          for (let $ = p; $ <= m; $ += 2) {
            $ === p || $ < m && A[$ - 1] >= A[$ + 1] ? u = A[$ + 1] - 1 : u = A[$ - 1], l = u - ($ - C) - U;
            let xe = u;
            for (; u > t && l > r && this.ElementsAreEqual(u, l); ) u--, l--;
            if (A[$] = u, q && Math.abs($ - F) <= I && u <= L[$]) return a[0] = u, s[0] = l, xe >= L[$] && er.MaxDifferencesHistory > 0 && I <= er.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, L, A, u, n, a, l, i, s, q, o) : null;
          }
          if (I <= er.MaxDifferencesHistory) {
            let $ = new Int32Array(f - c + 2);
            $[0] = F - c + 1, xi.Copy2(L, c, $, 1, f - c + 1), this.m_forwardHistory.push($), $ = new Int32Array(m - p + 2), $[0] = C - p + 1, xi.Copy2(A, p, $, 1, m - p + 1), this.m_reverseHistory.push($);
          }
        }
        return this.WALKTRACE(F, c, f, x, C, p, m, U, L, A, u, n, a, l, i, s, q, o);
      }
      PrettifyChanges(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t[n], i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, a = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, s = r.originalLength > 0, o = r.modifiedLength > 0;
          for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < a && (!s || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!o || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
            let l = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
            if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !l) break;
            r.originalStart++, r.modifiedStart++;
          }
          let u = [null];
          if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], u)) {
            t[n] = u[0], t.splice(n + 1, 1), n--;
            continue;
          }
        }
        for (let n = t.length - 1; n >= 0; n--) {
          let r = t[n], i = 0, a = 0;
          if (n > 0) {
            let f = t[n - 1];
            i = f.originalStart + f.originalLength, a = f.modifiedStart + f.modifiedLength;
          }
          let s = r.originalLength > 0, o = r.modifiedLength > 0, u = 0, l = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
          for (let f = 1; ; f++) {
            let p = r.originalStart - f, m = r.modifiedStart - f;
            if (p < i || m < a || s && !this.OriginalElementsAreEqual(p, p + r.originalLength) || o && !this.ModifiedElementsAreEqual(m, m + r.modifiedLength)) break;
            let g = (p === i && m === a ? 5 : 0) + this._boundaryScore(p, r.originalLength, m, r.modifiedLength);
            g > l && (l = g, u = f);
          }
          r.originalStart -= u, r.modifiedStart -= u;
          let c = [null];
          if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], c)) {
            t[n - 1] = c[0], t.splice(n, 1), n++;
            continue;
          }
        }
        if (this._hasStrings) for (let n = 1, r = t.length; n < r; n++) {
          let i = t[n - 1], a = t[n], s = a.originalStart - i.originalStart - i.originalLength, o = i.originalStart, u = a.originalStart + a.originalLength, l = u - o, c = i.modifiedStart, f = a.modifiedStart + a.modifiedLength, p = f - c;
          if (s < 5 && l < 20 && p < 20) {
            let m = this._findBetterContiguousSequence(o, l, c, p, s);
            if (m) {
              let [g, _] = m;
              (g !== i.originalStart + i.originalLength || _ !== i.modifiedStart + i.modifiedLength) && (i.originalLength = g - i.originalStart, i.modifiedLength = _ - i.modifiedStart, a.originalStart = g + s, a.modifiedStart = _ + s, a.originalLength = u - a.originalStart, a.modifiedLength = f - a.modifiedStart);
            }
          }
        }
        return t;
      }
      _findBetterContiguousSequence(t, n, r, i, a) {
        if (n < a || i < a) return null;
        let s = t + n - a + 1, o = r + i - a + 1, u = 0, l = 0, c = 0;
        for (let f = t; f < s; f++) for (let p = r; p < o; p++) {
          let m = this._contiguousSequenceScore(f, p, a);
          m > 0 && m > u && (u = m, l = f, c = p);
        }
        return u > 0 ? [l, c] : null;
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
          return xi.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], xi.Copy(n, 1, i, t.length, n.length - 1), i;
        } else {
          let i = new Array(t.length + n.length);
          return xi.Copy(t, 0, i, 0, t.length), xi.Copy(n, 0, i, t.length, n.length), i;
        }
      }
      ChangesOverlap(t, n, r) {
        if (Oi.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Oi.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
          let i = t.originalStart, a = t.originalLength, s = t.modifiedStart, o = t.modifiedLength;
          return t.originalStart + t.originalLength >= n.originalStart && (a = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (o = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new Tr(i, a, s, o), !0;
        } else return r[0] = null, !1;
      }
      ClipDiagonalBound(t, n, r, i) {
        if (t >= 0 && t < i) return t;
        let a = r, s = i - r - 1, o = n % 2 === 0;
        if (t < 0) {
          let u = a % 2 === 0;
          return o === u ? 0 : 1;
        } else {
          let u = s % 2 === 0;
          return o === u ? i - 1 : i - 2;
        }
      }
    }, Te = class gi {
      constructor(t, n) {
        this.lineNumber = t, this.column = n;
      }
      with(t = this.lineNumber, n = this.column) {
        return t === this.lineNumber && n === this.column ? this : new gi(t, n);
      }
      delta(t = 0, n = 0) {
        return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
      }
      equals(t) {
        return gi.equals(this, t);
      }
      static equals(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
      }
      isBefore(t) {
        return gi.isBefore(this, t);
      }
      static isBefore(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
      }
      isBeforeOrEqual(t) {
        return gi.isBeforeOrEqual(this, t);
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
        return new gi(this.lineNumber, this.column);
      }
      toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
      }
      static lift(t) {
        return new gi(t.lineNumber, t.column);
      }
      static isIPosition(t) {
        return t && typeof t.lineNumber == "number" && typeof t.column == "number";
      }
      toJSON() {
        return { lineNumber: this.lineNumber, column: this.column };
      }
    }, fe = class ut {
      constructor(t, n, r, i) {
        t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
      }
      isEmpty() {
        return ut.isEmpty(this);
      }
      static isEmpty(t) {
        return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
      }
      containsPosition(t) {
        return ut.containsPosition(this, t);
      }
      static containsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
      }
      static strictContainsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
      }
      containsRange(t) {
        return ut.containsRange(this, t);
      }
      static containsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
      }
      strictContainsRange(t) {
        return ut.strictContainsRange(this, t);
      }
      static strictContainsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
      }
      plusRange(t) {
        return ut.plusRange(this, t);
      }
      static plusRange(t, n) {
        let r, i, a, s;
        return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (a = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (a = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (a = t.endLineNumber, s = t.endColumn), new ut(r, i, a, s);
      }
      intersectRanges(t) {
        return ut.intersectRanges(this, t);
      }
      static intersectRanges(t, n) {
        let r = t.startLineNumber, i = t.startColumn, a = t.endLineNumber, s = t.endColumn, o = n.startLineNumber, u = n.startColumn, l = n.endLineNumber, c = n.endColumn;
        return r < o ? (r = o, i = u) : r === o && (i = Math.max(i, u)), a > l ? (a = l, s = c) : a === l && (s = Math.min(s, c)), r > a || r === a && i > s ? null : new ut(r, i, a, s);
      }
      equalsRange(t) {
        return ut.equalsRange(this, t);
      }
      static equalsRange(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
      }
      getEndPosition() {
        return ut.getEndPosition(this);
      }
      static getEndPosition(t) {
        return new Te(t.endLineNumber, t.endColumn);
      }
      getStartPosition() {
        return ut.getStartPosition(this);
      }
      static getStartPosition(t) {
        return new Te(t.startLineNumber, t.startColumn);
      }
      toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
      }
      setEndPosition(t, n) {
        return new ut(this.startLineNumber, this.startColumn, t, n);
      }
      setStartPosition(t, n) {
        return new ut(t, n, this.endLineNumber, this.endColumn);
      }
      collapseToStart() {
        return ut.collapseToStart(this);
      }
      static collapseToStart(t) {
        return new ut(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
      }
      collapseToEnd() {
        return ut.collapseToEnd(this);
      }
      static collapseToEnd(t) {
        return new ut(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
      }
      delta(t) {
        return new ut(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
      }
      isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
      }
      static fromPositions(t, n = t) {
        return new ut(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static lift(t) {
        return t ? new ut(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
              let o = t.endLineNumber | 0, u = n.endLineNumber | 0;
              if (o === u) {
                let l = t.endColumn | 0, c = n.endColumn | 0;
                return l - c;
              }
              return o - u;
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
    }, DD = class k0 {
      constructor(t) {
        let n = Kh(t);
        this._defaultValue = n, this._asciiMap = k0._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
      }
      static _createAsciiMap(t) {
        let n = new Uint8Array(256);
        return n.fill(t), n;
      }
      set(t, n) {
        let r = Kh(n);
        t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
      }
      get(t) {
        return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
      }
      clear() {
        this._asciiMap.fill(this._defaultValue), this._map.clear();
      }
    }, rf;
    (function(e) {
      e[e.False = 0] = "False", e[e.True = 1] = "True";
    })(rf || (rf = {}));
    var pe;
    (function(e) {
      e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
    })(pe || (pe = {}));
    var vD = class {
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
    }, bD = class {
      constructor(e) {
        let t = 0, n = pe.Invalid;
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, u] = e[i];
          o > t && (t = o), s > n && (n = s), u > n && (n = u);
        }
        t++, n++;
        let r = new vD(n, t, pe.Invalid);
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, u] = e[i];
          r.set(s, o, u);
        }
        this._states = r, this._maxCharCode = t;
      }
      nextState(e, t) {
        return t < 0 || t >= this._maxCharCode ? pe.Invalid : this._states.get(e, t);
      }
    }, Ju = null;
    function yD() {
      return Ju === null && (Ju = new bD([[pe.Start, O.h, pe.H], [pe.Start, O.H, pe.H], [pe.Start, O.f, pe.F], [pe.Start, O.F, pe.F], [pe.H, O.t, pe.HT], [pe.H, O.T, pe.HT], [pe.HT, O.t, pe.HTT], [pe.HT, O.T, pe.HTT], [pe.HTT, O.p, pe.HTTP], [pe.HTT, O.P, pe.HTTP], [pe.HTTP, O.s, pe.BeforeColon], [pe.HTTP, O.S, pe.BeforeColon], [pe.HTTP, O.Colon, pe.AfterColon], [pe.F, O.i, pe.FI], [pe.F, O.I, pe.FI], [pe.FI, O.l, pe.FIL], [pe.FI, O.L, pe.FIL], [pe.FIL, O.e, pe.BeforeColon], [pe.FIL, O.E, pe.BeforeColon], [pe.BeforeColon, O.Colon, pe.AfterColon], [pe.AfterColon, O.Slash, pe.AlmostThere], [pe.AlmostThere, O.Slash, pe.End]])), Ju;
    }
    var Ve;
    (function(e) {
      e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
    })(Ve || (Ve = {}));
    var Ra = null;
    function ND() {
      if (Ra === null) {
        Ra = new DD(Ve.None);
        let e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
        for (let n = 0; n < e.length; n++) Ra.set(e.charCodeAt(n), Ve.ForceTermination);
        let t = ".,;:";
        for (let n = 0; n < t.length; n++) Ra.set(t.charCodeAt(n), Ve.CannotEndIn);
      }
      return Ra;
    }
    var CD = class Nc {
      static _createLink(t, n, r, i, a) {
        let s = a - 1;
        do {
          let o = n.charCodeAt(s);
          if (t.get(o) !== Ve.CannotEndIn) break;
          s--;
        } while (s > i);
        if (i > 0) {
          let o = n.charCodeAt(i - 1), u = n.charCodeAt(s);
          (o === O.OpenParen && u === O.CloseParen || o === O.OpenSquareBracket && u === O.CloseSquareBracket || o === O.OpenCurlyBrace && u === O.CloseCurlyBrace) && s--;
        }
        return { range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: s + 2 }, url: n.substring(i, s + 1) };
      }
      static computeLinks(t, n = yD()) {
        let r = ND(), i = [];
        for (let a = 1, s = t.getLineCount(); a <= s; a++) {
          let o = t.getLineContent(a), u = o.length, l = 0, c = 0, f = 0, p = pe.Start, m = !1, g = !1, _ = !1, L = !1;
          for (; l < u; ) {
            let A = !1, F = o.charCodeAt(l);
            if (p === pe.Accept) {
              let C;
              switch (F) {
                case O.OpenParen:
                  m = !0, C = Ve.None;
                  break;
                case O.CloseParen:
                  C = m ? Ve.None : Ve.ForceTermination;
                  break;
                case O.OpenSquareBracket:
                  _ = !0, g = !0, C = Ve.None;
                  break;
                case O.CloseSquareBracket:
                  _ = !1, C = g ? Ve.None : Ve.ForceTermination;
                  break;
                case O.OpenCurlyBrace:
                  L = !0, C = Ve.None;
                  break;
                case O.CloseCurlyBrace:
                  C = L ? Ve.None : Ve.ForceTermination;
                  break;
                case O.SingleQuote:
                case O.DoubleQuote:
                case O.BackTick:
                  f === F ? C = Ve.ForceTermination : f === O.SingleQuote || f === O.DoubleQuote || f === O.BackTick ? C = Ve.None : C = Ve.ForceTermination;
                  break;
                case O.Asterisk:
                  C = f === O.Asterisk ? Ve.ForceTermination : Ve.None;
                  break;
                case O.Pipe:
                  C = f === O.Pipe ? Ve.ForceTermination : Ve.None;
                  break;
                case O.Space:
                  C = _ ? Ve.None : Ve.ForceTermination;
                  break;
                default:
                  C = r.get(F);
              }
              C === Ve.ForceTermination && (i.push(Nc._createLink(r, o, a, c, l)), A = !0);
            } else if (p === pe.End) {
              let C;
              F === O.OpenSquareBracket ? (g = !0, C = Ve.None) : C = r.get(F), C === Ve.ForceTermination ? A = !0 : p = pe.Accept;
            } else p = n.nextState(p, F), p === pe.Invalid && (A = !0);
            A && (p = pe.Start, m = !1, g = !1, L = !1, c = l + 1, f = F), l++;
          }
          p === pe.Accept && i.push(Nc._createLink(r, o, a, c, u));
        }
        return i;
      }
    };
    function TD(e) {
      return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : CD.computeLinks(e);
    }
    var wD = (hi = class {
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
    }, hi.INSTANCE = new hi(), hi), b;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(b || (b = {}));
    var T;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
    })(T || (T = {}));
    var Qu = class {
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
    }, qs = new Qu(), Zu = new Qu(), el = new Qu(), AD = new Array(230), SD = /* @__PURE__ */ Object.create(null), LD = /* @__PURE__ */ Object.create(null), tl = [];
    for (let e = 0; e <= T.MAX_VALUE; e++) b.DependsOnKbLayout;
    for (let e = 0; e <= b.MAX_VALUE; e++) tl[e] = T.DependsOnKbLayout;
    (function() {
      let e = "", t = [[1, T.None, "None", b.Unknown, "unknown", 0, "VK_UNKNOWN", e, e], [1, T.Hyper, "Hyper", b.Unknown, e, 0, e, e, e], [1, T.Super, "Super", b.Unknown, e, 0, e, e, e], [1, T.Fn, "Fn", b.Unknown, e, 0, e, e, e], [1, T.FnLock, "FnLock", b.Unknown, e, 0, e, e, e], [1, T.Suspend, "Suspend", b.Unknown, e, 0, e, e, e], [1, T.Resume, "Resume", b.Unknown, e, 0, e, e, e], [1, T.Turbo, "Turbo", b.Unknown, e, 0, e, e, e], [1, T.Sleep, "Sleep", b.Unknown, e, 0, "VK_SLEEP", e, e], [1, T.WakeUp, "WakeUp", b.Unknown, e, 0, e, e, e], [0, T.KeyA, "KeyA", b.KeyA, "A", 65, "VK_A", e, e], [0, T.KeyB, "KeyB", b.KeyB, "B", 66, "VK_B", e, e], [0, T.KeyC, "KeyC", b.KeyC, "C", 67, "VK_C", e, e], [0, T.KeyD, "KeyD", b.KeyD, "D", 68, "VK_D", e, e], [0, T.KeyE, "KeyE", b.KeyE, "E", 69, "VK_E", e, e], [0, T.KeyF, "KeyF", b.KeyF, "F", 70, "VK_F", e, e], [0, T.KeyG, "KeyG", b.KeyG, "G", 71, "VK_G", e, e], [0, T.KeyH, "KeyH", b.KeyH, "H", 72, "VK_H", e, e], [0, T.KeyI, "KeyI", b.KeyI, "I", 73, "VK_I", e, e], [0, T.KeyJ, "KeyJ", b.KeyJ, "J", 74, "VK_J", e, e], [0, T.KeyK, "KeyK", b.KeyK, "K", 75, "VK_K", e, e], [0, T.KeyL, "KeyL", b.KeyL, "L", 76, "VK_L", e, e], [0, T.KeyM, "KeyM", b.KeyM, "M", 77, "VK_M", e, e], [0, T.KeyN, "KeyN", b.KeyN, "N", 78, "VK_N", e, e], [0, T.KeyO, "KeyO", b.KeyO, "O", 79, "VK_O", e, e], [0, T.KeyP, "KeyP", b.KeyP, "P", 80, "VK_P", e, e], [0, T.KeyQ, "KeyQ", b.KeyQ, "Q", 81, "VK_Q", e, e], [0, T.KeyR, "KeyR", b.KeyR, "R", 82, "VK_R", e, e], [0, T.KeyS, "KeyS", b.KeyS, "S", 83, "VK_S", e, e], [0, T.KeyT, "KeyT", b.KeyT, "T", 84, "VK_T", e, e], [0, T.KeyU, "KeyU", b.KeyU, "U", 85, "VK_U", e, e], [0, T.KeyV, "KeyV", b.KeyV, "V", 86, "VK_V", e, e], [0, T.KeyW, "KeyW", b.KeyW, "W", 87, "VK_W", e, e], [0, T.KeyX, "KeyX", b.KeyX, "X", 88, "VK_X", e, e], [0, T.KeyY, "KeyY", b.KeyY, "Y", 89, "VK_Y", e, e], [0, T.KeyZ, "KeyZ", b.KeyZ, "Z", 90, "VK_Z", e, e], [0, T.Digit1, "Digit1", b.Digit1, "1", 49, "VK_1", e, e], [0, T.Digit2, "Digit2", b.Digit2, "2", 50, "VK_2", e, e], [0, T.Digit3, "Digit3", b.Digit3, "3", 51, "VK_3", e, e], [0, T.Digit4, "Digit4", b.Digit4, "4", 52, "VK_4", e, e], [0, T.Digit5, "Digit5", b.Digit5, "5", 53, "VK_5", e, e], [0, T.Digit6, "Digit6", b.Digit6, "6", 54, "VK_6", e, e], [0, T.Digit7, "Digit7", b.Digit7, "7", 55, "VK_7", e, e], [0, T.Digit8, "Digit8", b.Digit8, "8", 56, "VK_8", e, e], [0, T.Digit9, "Digit9", b.Digit9, "9", 57, "VK_9", e, e], [0, T.Digit0, "Digit0", b.Digit0, "0", 48, "VK_0", e, e], [1, T.Enter, "Enter", b.Enter, "Enter", 13, "VK_RETURN", e, e], [1, T.Escape, "Escape", b.Escape, "Escape", 27, "VK_ESCAPE", e, e], [1, T.Backspace, "Backspace", b.Backspace, "Backspace", 8, "VK_BACK", e, e], [1, T.Tab, "Tab", b.Tab, "Tab", 9, "VK_TAB", e, e], [1, T.Space, "Space", b.Space, "Space", 32, "VK_SPACE", e, e], [0, T.Minus, "Minus", b.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"], [0, T.Equal, "Equal", b.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"], [0, T.BracketLeft, "BracketLeft", b.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"], [0, T.BracketRight, "BracketRight", b.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"], [0, T.Backslash, "Backslash", b.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"], [0, T.IntlHash, "IntlHash", b.Unknown, e, 0, e, e, e], [0, T.Semicolon, "Semicolon", b.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"], [0, T.Quote, "Quote", b.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"], [0, T.Backquote, "Backquote", b.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"], [0, T.Comma, "Comma", b.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"], [0, T.Period, "Period", b.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"], [0, T.Slash, "Slash", b.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"], [1, T.CapsLock, "CapsLock", b.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e], [1, T.F1, "F1", b.F1, "F1", 112, "VK_F1", e, e], [1, T.F2, "F2", b.F2, "F2", 113, "VK_F2", e, e], [1, T.F3, "F3", b.F3, "F3", 114, "VK_F3", e, e], [1, T.F4, "F4", b.F4, "F4", 115, "VK_F4", e, e], [1, T.F5, "F5", b.F5, "F5", 116, "VK_F5", e, e], [1, T.F6, "F6", b.F6, "F6", 117, "VK_F6", e, e], [1, T.F7, "F7", b.F7, "F7", 118, "VK_F7", e, e], [1, T.F8, "F8", b.F8, "F8", 119, "VK_F8", e, e], [1, T.F9, "F9", b.F9, "F9", 120, "VK_F9", e, e], [1, T.F10, "F10", b.F10, "F10", 121, "VK_F10", e, e], [1, T.F11, "F11", b.F11, "F11", 122, "VK_F11", e, e], [1, T.F12, "F12", b.F12, "F12", 123, "VK_F12", e, e], [1, T.PrintScreen, "PrintScreen", b.Unknown, e, 0, e, e, e], [1, T.ScrollLock, "ScrollLock", b.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e], [1, T.Pause, "Pause", b.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e], [1, T.Insert, "Insert", b.Insert, "Insert", 45, "VK_INSERT", e, e], [1, T.Home, "Home", b.Home, "Home", 36, "VK_HOME", e, e], [1, T.PageUp, "PageUp", b.PageUp, "PageUp", 33, "VK_PRIOR", e, e], [1, T.Delete, "Delete", b.Delete, "Delete", 46, "VK_DELETE", e, e], [1, T.End, "End", b.End, "End", 35, "VK_END", e, e], [1, T.PageDown, "PageDown", b.PageDown, "PageDown", 34, "VK_NEXT", e, e], [1, T.ArrowRight, "ArrowRight", b.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e], [1, T.ArrowLeft, "ArrowLeft", b.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e], [1, T.ArrowDown, "ArrowDown", b.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e], [1, T.ArrowUp, "ArrowUp", b.UpArrow, "UpArrow", 38, "VK_UP", "Up", e], [1, T.NumLock, "NumLock", b.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e], [1, T.NumpadDivide, "NumpadDivide", b.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e], [1, T.NumpadMultiply, "NumpadMultiply", b.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e], [1, T.NumpadSubtract, "NumpadSubtract", b.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e], [1, T.NumpadAdd, "NumpadAdd", b.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e], [1, T.NumpadEnter, "NumpadEnter", b.Enter, e, 0, e, e, e], [1, T.Numpad1, "Numpad1", b.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e], [1, T.Numpad2, "Numpad2", b.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e], [1, T.Numpad3, "Numpad3", b.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e], [1, T.Numpad4, "Numpad4", b.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e], [1, T.Numpad5, "Numpad5", b.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e], [1, T.Numpad6, "Numpad6", b.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e], [1, T.Numpad7, "Numpad7", b.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e], [1, T.Numpad8, "Numpad8", b.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e], [1, T.Numpad9, "Numpad9", b.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e], [1, T.Numpad0, "Numpad0", b.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e], [1, T.NumpadDecimal, "NumpadDecimal", b.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e], [0, T.IntlBackslash, "IntlBackslash", b.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e], [1, T.ContextMenu, "ContextMenu", b.ContextMenu, "ContextMenu", 93, e, e, e], [1, T.Power, "Power", b.Unknown, e, 0, e, e, e], [1, T.NumpadEqual, "NumpadEqual", b.Unknown, e, 0, e, e, e], [1, T.F13, "F13", b.F13, "F13", 124, "VK_F13", e, e], [1, T.F14, "F14", b.F14, "F14", 125, "VK_F14", e, e], [1, T.F15, "F15", b.F15, "F15", 126, "VK_F15", e, e], [1, T.F16, "F16", b.F16, "F16", 127, "VK_F16", e, e], [1, T.F17, "F17", b.F17, "F17", 128, "VK_F17", e, e], [1, T.F18, "F18", b.F18, "F18", 129, "VK_F18", e, e], [1, T.F19, "F19", b.F19, "F19", 130, "VK_F19", e, e], [1, T.F20, "F20", b.F20, "F20", 131, "VK_F20", e, e], [1, T.F21, "F21", b.F21, "F21", 132, "VK_F21", e, e], [1, T.F22, "F22", b.F22, "F22", 133, "VK_F22", e, e], [1, T.F23, "F23", b.F23, "F23", 134, "VK_F23", e, e], [1, T.F24, "F24", b.F24, "F24", 135, "VK_F24", e, e], [1, T.Open, "Open", b.Unknown, e, 0, e, e, e], [1, T.Help, "Help", b.Unknown, e, 0, e, e, e], [1, T.Select, "Select", b.Unknown, e, 0, e, e, e], [1, T.Again, "Again", b.Unknown, e, 0, e, e, e], [1, T.Undo, "Undo", b.Unknown, e, 0, e, e, e], [1, T.Cut, "Cut", b.Unknown, e, 0, e, e, e], [1, T.Copy, "Copy", b.Unknown, e, 0, e, e, e], [1, T.Paste, "Paste", b.Unknown, e, 0, e, e, e], [1, T.Find, "Find", b.Unknown, e, 0, e, e, e], [1, T.AudioVolumeMute, "AudioVolumeMute", b.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e], [1, T.AudioVolumeUp, "AudioVolumeUp", b.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e], [1, T.AudioVolumeDown, "AudioVolumeDown", b.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e], [1, T.NumpadComma, "NumpadComma", b.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e], [0, T.IntlRo, "IntlRo", b.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e], [1, T.KanaMode, "KanaMode", b.Unknown, e, 0, e, e, e], [0, T.IntlYen, "IntlYen", b.Unknown, e, 0, e, e, e], [1, T.Convert, "Convert", b.Unknown, e, 0, e, e, e], [1, T.NonConvert, "NonConvert", b.Unknown, e, 0, e, e, e], [1, T.Lang1, "Lang1", b.Unknown, e, 0, e, e, e], [1, T.Lang2, "Lang2", b.Unknown, e, 0, e, e, e], [1, T.Lang3, "Lang3", b.Unknown, e, 0, e, e, e], [1, T.Lang4, "Lang4", b.Unknown, e, 0, e, e, e], [1, T.Lang5, "Lang5", b.Unknown, e, 0, e, e, e], [1, T.Abort, "Abort", b.Unknown, e, 0, e, e, e], [1, T.Props, "Props", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenLeft, "NumpadParenLeft", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenRight, "NumpadParenRight", b.Unknown, e, 0, e, e, e], [1, T.NumpadBackspace, "NumpadBackspace", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryStore, "NumpadMemoryStore", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryRecall, "NumpadMemoryRecall", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryClear, "NumpadMemoryClear", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryAdd, "NumpadMemoryAdd", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemorySubtract, "NumpadMemorySubtract", b.Unknown, e, 0, e, e, e], [1, T.NumpadClear, "NumpadClear", b.Clear, "Clear", 12, "VK_CLEAR", e, e], [1, T.NumpadClearEntry, "NumpadClearEntry", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e], [1, T.None, e, b.Shift, "Shift", 16, "VK_SHIFT", e, e], [1, T.None, e, b.Alt, "Alt", 18, "VK_MENU", e, e], [1, T.None, e, b.Meta, "Meta", 91, "VK_COMMAND", e, e], [1, T.ControlLeft, "ControlLeft", b.Ctrl, e, 0, "VK_LCONTROL", e, e], [1, T.ShiftLeft, "ShiftLeft", b.Shift, e, 0, "VK_LSHIFT", e, e], [1, T.AltLeft, "AltLeft", b.Alt, e, 0, "VK_LMENU", e, e], [1, T.MetaLeft, "MetaLeft", b.Meta, e, 0, "VK_LWIN", e, e], [1, T.ControlRight, "ControlRight", b.Ctrl, e, 0, "VK_RCONTROL", e, e], [1, T.ShiftRight, "ShiftRight", b.Shift, e, 0, "VK_RSHIFT", e, e], [1, T.AltRight, "AltRight", b.Alt, e, 0, "VK_RMENU", e, e], [1, T.MetaRight, "MetaRight", b.Meta, e, 0, "VK_RWIN", e, e], [1, T.BrightnessUp, "BrightnessUp", b.Unknown, e, 0, e, e, e], [1, T.BrightnessDown, "BrightnessDown", b.Unknown, e, 0, e, e, e], [1, T.MediaPlay, "MediaPlay", b.Unknown, e, 0, e, e, e], [1, T.MediaRecord, "MediaRecord", b.Unknown, e, 0, e, e, e], [1, T.MediaFastForward, "MediaFastForward", b.Unknown, e, 0, e, e, e], [1, T.MediaRewind, "MediaRewind", b.Unknown, e, 0, e, e, e], [1, T.MediaTrackNext, "MediaTrackNext", b.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e], [1, T.MediaTrackPrevious, "MediaTrackPrevious", b.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e], [1, T.MediaStop, "MediaStop", b.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e], [1, T.Eject, "Eject", b.Unknown, e, 0, e, e, e], [1, T.MediaPlayPause, "MediaPlayPause", b.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e], [1, T.MediaSelect, "MediaSelect", b.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e], [1, T.LaunchMail, "LaunchMail", b.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e], [1, T.LaunchApp2, "LaunchApp2", b.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e], [1, T.LaunchApp1, "LaunchApp1", b.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e], [1, T.SelectTask, "SelectTask", b.Unknown, e, 0, e, e, e], [1, T.LaunchScreenSaver, "LaunchScreenSaver", b.Unknown, e, 0, e, e, e], [1, T.BrowserSearch, "BrowserSearch", b.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e], [1, T.BrowserHome, "BrowserHome", b.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e], [1, T.BrowserBack, "BrowserBack", b.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e], [1, T.BrowserForward, "BrowserForward", b.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e], [1, T.BrowserStop, "BrowserStop", b.Unknown, e, 0, "VK_BROWSER_STOP", e, e], [1, T.BrowserRefresh, "BrowserRefresh", b.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e], [1, T.BrowserFavorites, "BrowserFavorites", b.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e], [1, T.ZoomToggle, "ZoomToggle", b.Unknown, e, 0, e, e, e], [1, T.MailReply, "MailReply", b.Unknown, e, 0, e, e, e], [1, T.MailForward, "MailForward", b.Unknown, e, 0, e, e, e], [1, T.MailSend, "MailSend", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e], [1, T.None, e, b.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e], [1, T.None, e, b.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANGUL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_JUNJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_FINAL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANJI", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONCONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ACCEPT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_MODECHANGE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SELECT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PRINT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXECUTE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SNAPSHOT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HELP", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_APPS", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PROCESSKEY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PACKET", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ATTN", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CRSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EREOF", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PLAY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ZOOM", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONAME", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PA1", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_OEM_CLEAR", e, e]], n = [], r = [];
      for (let i of t) {
        let [a, s, o, u, l, c, f, p, m] = i;
        if (r[s] || (r[s] = !0, SD[o] = s, LD[o.toLowerCase()] = s, a && u !== b.Unknown && u !== b.Enter && u !== b.Ctrl && u !== b.Shift && u !== b.Alt && u !== b.Meta && (tl[u] = s)), !n[u]) {
          if (n[u] = !0, !l) throw new Error(`String representation missing for key code ${u} around scan code ${o}`);
          qs.define(u, l), Zu.define(u, p || l), el.define(u, m || p || l);
        }
        c && (AD[c] = u);
      }
      tl[b.Enter] = T.Enter;
    })();
    var af;
    (function(e) {
      function t(o) {
        return qs.keyCodeToStr(o);
      }
      e.toString = t;
      function n(o) {
        return qs.strToKeyCode(o);
      }
      e.fromString = n;
      function r(o) {
        return Zu.keyCodeToStr(o);
      }
      e.toUserSettingsUS = r;
      function i(o) {
        return el.keyCodeToStr(o);
      }
      e.toUserSettingsGeneral = i;
      function a(o) {
        return Zu.strToKeyCode(o) || el.strToKeyCode(o);
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
        return qs.keyCodeToStr(o);
      }
      e.toElectronAccelerator = s;
    })(af || (af = {}));
    var ki;
    (function(e) {
      e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
    })(ki || (ki = {}));
    function FD(e, t) {
      let n = (t & 65535) << 16 >>> 0;
      return (e | n) >>> 0;
    }
    var nl;
    (function(e) {
      e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart";
    })(nl || (nl = {}));
    var Wr, rl = globalThis.vscode;
    if (typeof rl < "u" && typeof rl.process < "u") {
      let e = rl.process;
      Wr = { get platform() {
        return e.platform;
      }, get arch() {
        return e.arch;
      }, get env() {
        return e.env;
      }, cwd() {
        return e.cwd();
      } };
    } else typeof process < "u" && typeof ((f0 = process == null ? void 0 : process.versions) == null ? void 0 : f0.node) == "string" ? Wr = { get platform() {
      return process.platform;
    }, get arch() {
      return process.arch;
    }, get env() {
      return process.env;
    }, cwd() {
      return process.env.VSCODE_CWD || process.cwd();
    } } : Wr = { get platform() {
      return Ii ? "win32" : V_ ? "darwin" : "linux";
    }, get arch() {
    }, get env() {
      return {};
    }, cwd() {
      return "/";
    } };
    var Gs = Wr.cwd, ID = Wr.env, RD = Wr.platform;
    Wr.arch;
    var OD = 65, xD = 97, kD = 90, MD = 122, Yr = 46, Dt = 47, Wt = 92, tr = 58, UD = 63, sf = class extends Error {
      constructor(e, t, n) {
        let r;
        typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
        let i = e.indexOf(".") !== -1 ? "property" : "argument", a = `The "${e}" ${i} ${r} of type ${t}`;
        a += `. Received type ${typeof n}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
      }
    };
    function PD(e, t) {
      if (e === null || typeof e != "object") throw new sf(t, "Object", e);
    }
    function Qe(e, t) {
      if (typeof e != "string") throw new sf(t, "string", e);
    }
    var yn = RD === "win32";
    function ye(e) {
      return e === Dt || e === Wt;
    }
    function il(e) {
      return e === Dt;
    }
    function nr(e) {
      return e >= OD && e <= kD || e >= xD && e <= MD;
    }
    function Hs(e, t, n, r) {
      let i = "", a = 0, s = -1, o = 0, u = 0;
      for (let l = 0; l <= e.length; ++l) {
        if (l < e.length) u = e.charCodeAt(l);
        else {
          if (r(u)) break;
          u = Dt;
        }
        if (r(u)) {
          if (!(s === l - 1 || o === 1)) if (o === 2) {
            if (i.length < 2 || a !== 2 || i.charCodeAt(i.length - 1) !== Yr || i.charCodeAt(i.length - 2) !== Yr) {
              if (i.length > 2) {
                let c = i.lastIndexOf(n);
                c === -1 ? (i = "", a = 0) : (i = i.slice(0, c), a = i.length - 1 - i.lastIndexOf(n)), s = l, o = 0;
                continue;
              } else if (i.length !== 0) {
                i = "", a = 0, s = l, o = 0;
                continue;
              }
            }
            t && (i += i.length > 0 ? `${n}..` : "..", a = 2);
          } else i.length > 0 ? i += `${n}${e.slice(s + 1, l)}` : i = e.slice(s + 1, l), a = l - s - 1;
          s = l, o = 0;
        } else u === Yr && o !== -1 ? ++o : o = -1;
      }
      return i;
    }
    function BD(e) {
      return e ? `${e[0] === "." ? "" : "."}${e}` : "";
    }
    function of(e, t) {
      PD(t, "pathObject");
      let n = t.dir || t.root, r = t.base || `${t.name || ""}${BD(t.ext)}`;
      return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
    }
    var vt = { resolve(...e) {
      let t = "", n = "", r = !1;
      for (let i = e.length - 1; i >= -1; i--) {
        let a;
        if (i >= 0) {
          if (a = e[i], Qe(a, `paths[${i}]`), a.length === 0) continue;
        } else t.length === 0 ? a = Gs() : (a = ID[`=${t}`] || Gs(), (a === void 0 || a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === Wt) && (a = `${t}\\`));
        let s = a.length, o = 0, u = "", l = !1, c = a.charCodeAt(0);
        if (s === 1) ye(c) && (o = 1, l = !0);
        else if (ye(c)) if (l = !0, ye(a.charCodeAt(1))) {
          let f = 2, p = f;
          for (; f < s && !ye(a.charCodeAt(f)); ) f++;
          if (f < s && f !== p) {
            let m = a.slice(p, f);
            for (p = f; f < s && ye(a.charCodeAt(f)); ) f++;
            if (f < s && f !== p) {
              for (p = f; f < s && !ye(a.charCodeAt(f)); ) f++;
              (f === s || f !== p) && (u = `\\\\${m}\\${a.slice(p, f)}`, o = f);
            }
          }
        } else o = 1;
        else nr(c) && a.charCodeAt(1) === tr && (u = a.slice(0, 2), o = 2, s > 2 && ye(a.charCodeAt(2)) && (l = !0, o = 3));
        if (u.length > 0) if (t.length > 0) {
          if (u.toLowerCase() !== t.toLowerCase()) continue;
        } else t = u;
        if (r) {
          if (t.length > 0) break;
        } else if (n = `${a.slice(o)}\\${n}`, r = l, l && t.length > 0) break;
      }
      return n = Hs(n, !r, "\\", ye), r ? `${t}\\${n}` : `${t}${n}` || ".";
    }, normalize(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = 0, r, i = !1, a = e.charCodeAt(0);
      if (t === 1) return il(a) ? "\\" : e;
      if (ye(a)) if (i = !0, ye(e.charCodeAt(1))) {
        let o = 2, u = o;
        for (; o < t && !ye(e.charCodeAt(o)); ) o++;
        if (o < t && o !== u) {
          let l = e.slice(u, o);
          for (u = o; o < t && ye(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            for (u = o; o < t && !ye(e.charCodeAt(o)); ) o++;
            if (o === t) return `\\\\${l}\\${e.slice(u)}\\`;
            o !== u && (r = `\\\\${l}\\${e.slice(u, o)}`, n = o);
          }
        }
      } else n = 1;
      else nr(a) && e.charCodeAt(1) === tr && (r = e.slice(0, 2), n = 2, t > 2 && ye(e.charCodeAt(2)) && (i = !0, n = 3));
      let s = n < t ? Hs(e.slice(n), !i, "\\", ye) : "";
      if (s.length === 0 && !i && (s = "."), s.length > 0 && ye(e.charCodeAt(t - 1)) && (s += "\\"), !i && r === void 0 && e.includes(":")) {
        if (s.length >= 2 && nr(s.charCodeAt(0)) && s.charCodeAt(1) === tr) return `.\\${s}`;
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
      return ye(n) || t > 2 && nr(n) && e.charCodeAt(1) === tr && ye(e.charCodeAt(2));
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
      let u = t.length;
      for (; u - 1 > o && t.charCodeAt(u - 1) === Wt; ) u--;
      let l = u - o, c = s < l ? s : l, f = -1, p = 0;
      for (; p < c; p++) {
        let g = e.charCodeAt(i + p);
        if (g !== t.charCodeAt(o + p)) break;
        g === Wt && (f = p);
      }
      if (p !== c) {
        if (f === -1) return r;
      } else {
        if (l > c) {
          if (t.charCodeAt(o + p) === Wt) return r.slice(o + p + 1);
          if (p === 2) return r.slice(o + p);
        }
        s > c && (e.charCodeAt(i + p) === Wt ? f = p : p === 2 && (f = 3)), f === -1 && (f = 0);
      }
      let m = "";
      for (p = i + f + 1; p <= a; ++p) (p === a || e.charCodeAt(p) === Wt) && (m += m.length === 0 ? ".." : "\\..");
      return o += f, m.length > 0 ? `${m}${r.slice(o, u)}` : (r.charCodeAt(o) === Wt && ++o, r.slice(o, u));
    }, toNamespacedPath(e) {
      if (typeof e != "string" || e.length === 0) return e;
      let t = vt.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === Wt) {
        if (t.charCodeAt(1) === Wt) {
          let n = t.charCodeAt(2);
          if (n !== UD && n !== Yr) return `\\\\?\\UNC\\${t.slice(2)}`;
        }
      } else if (nr(t.charCodeAt(0)) && t.charCodeAt(1) === tr && t.charCodeAt(2) === Wt) return `\\\\?\\${t}`;
      return t;
    }, dirname(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = -1, r = 0, i = e.charCodeAt(0);
      if (t === 1) return ye(i) ? e : ".";
      if (ye(i)) {
        if (n = r = 1, ye(e.charCodeAt(1))) {
          let o = 2, u = o;
          for (; o < t && !ye(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            for (u = o; o < t && ye(e.charCodeAt(o)); ) o++;
            if (o < t && o !== u) {
              for (u = o; o < t && !ye(e.charCodeAt(o)); ) o++;
              if (o === t) return e;
              o !== u && (n = r = o + 1);
            }
          }
        }
      } else nr(i) && e.charCodeAt(1) === tr && (n = t > 2 && ye(e.charCodeAt(2)) ? 3 : 2, r = n);
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
      if (e.length >= 2 && nr(e.charCodeAt(0)) && e.charCodeAt(1) === tr && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let s = t.length - 1, o = -1;
        for (a = e.length - 1; a >= n; --a) {
          let u = e.charCodeAt(a);
          if (ye(u)) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else o === -1 && (i = !1, o = a + 1), s >= 0 && (u === t.charCodeAt(s) ? --s === -1 && (r = a) : (s = -1, r = o));
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
      e.length >= 2 && e.charCodeAt(1) === tr && nr(e.charCodeAt(0)) && (t = r = 2);
      for (let o = e.length - 1; o >= t; --o) {
        let u = e.charCodeAt(o);
        if (ye(u)) {
          if (!a) {
            r = o + 1;
            break;
          }
          continue;
        }
        i === -1 && (a = !1, i = o + 1), u === Yr ? n === -1 ? n = o : s !== 1 && (s = 1) : n !== -1 && (s = -1);
      }
      return n === -1 || i === -1 || s === 0 || s === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
    }, format: of.bind(null, "\\"), parse(e) {
      Qe(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.length, r = 0, i = e.charCodeAt(0);
      if (n === 1) return ye(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
      if (ye(i)) {
        if (r = 1, ye(e.charCodeAt(1))) {
          let f = 2, p = f;
          for (; f < n && !ye(e.charCodeAt(f)); ) f++;
          if (f < n && f !== p) {
            for (p = f; f < n && ye(e.charCodeAt(f)); ) f++;
            if (f < n && f !== p) {
              for (p = f; f < n && !ye(e.charCodeAt(f)); ) f++;
              f === n ? r = f : f !== p && (r = f + 1);
            }
          }
        }
      } else if (nr(i) && e.charCodeAt(1) === tr) {
        if (n <= 2) return t.root = t.dir = e, t;
        if (r = 2, ye(e.charCodeAt(2))) {
          if (n === 3) return t.root = t.dir = e, t;
          r = 3;
        }
      }
      r > 0 && (t.root = e.slice(0, r));
      let a = -1, s = r, o = -1, u = !0, l = e.length - 1, c = 0;
      for (; l >= r; --l) {
        if (i = e.charCodeAt(l), ye(i)) {
          if (!u) {
            s = l + 1;
            break;
          }
          continue;
        }
        o === -1 && (u = !1, o = l + 1), i === Yr ? a === -1 ? a = l : c !== 1 && (c = 1) : a !== -1 && (c = -1);
      }
      return o !== -1 && (a === -1 || c === 0 || c === 1 && a === o - 1 && a === s + 1 ? t.base = t.name = e.slice(s, o) : (t.name = e.slice(s, a), t.base = e.slice(s, o), t.ext = e.slice(a, o))), s > 0 && s !== r ? t.dir = e.slice(0, s - 1) : t.dir = t.root, t;
    }, sep: "\\", delimiter: ";", win32: null, posix: null }, VD = (() => {
      if (yn) {
        let e = /\\/g;
        return () => {
          let t = Gs().replace(e, "/");
          return t.slice(t.indexOf("/"));
        };
      }
      return () => Gs();
    })(), $e = { resolve(...e) {
      let t = "", n = !1;
      for (let r = e.length - 1; r >= 0 && !n; r--) {
        let i = e[r];
        Qe(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === Dt);
      }
      if (!n) {
        let r = VD();
        t = `${r}/${t}`, n = r.charCodeAt(0) === Dt;
      }
      return t = Hs(t, !n, "/", il), n ? `/${t}` : t.length > 0 ? t : ".";
    }, normalize(e) {
      if (Qe(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === Dt, n = e.charCodeAt(e.length - 1) === Dt;
      return e = Hs(e, !t, "/", il), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    }, isAbsolute(e) {
      return Qe(e, "path"), e.length > 0 && e.charCodeAt(0) === Dt;
    }, join(...e) {
      if (e.length === 0) return ".";
      let t = [];
      for (let n = 0; n < e.length; ++n) {
        let r = e[n];
        Qe(r, "path"), r.length > 0 && t.push(r);
      }
      return t.length === 0 ? "." : $e.normalize(t.join("/"));
    }, relative(e, t) {
      if (Qe(e, "from"), Qe(t, "to"), e === t || (e = $e.resolve(e), t = $e.resolve(t), e === t)) return "";
      let n = 1, r = e.length, i = r - n, a = 1, s = t.length - a, o = i < s ? i : s, u = -1, l = 0;
      for (; l < o; l++) {
        let f = e.charCodeAt(n + l);
        if (f !== t.charCodeAt(a + l)) break;
        f === Dt && (u = l);
      }
      if (l === o) if (s > o) {
        if (t.charCodeAt(a + l) === Dt) return t.slice(a + l + 1);
        if (l === 0) return t.slice(a + l);
      } else i > o && (e.charCodeAt(n + l) === Dt ? u = l : l === 0 && (u = 0));
      let c = "";
      for (l = n + u + 1; l <= r; ++l) (l === r || e.charCodeAt(l) === Dt) && (c += c.length === 0 ? ".." : "/..");
      return `${c}${t.slice(a + u)}`;
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
          let u = e.charCodeAt(a);
          if (u === Dt) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else o === -1 && (i = !1, o = a + 1), s >= 0 && (u === t.charCodeAt(s) ? --s === -1 && (r = a) : (s = -1, r = o));
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
    }, format: of.bind(null, "/"), parse(e) {
      Qe(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.charCodeAt(0) === Dt, r;
      n ? (t.root = "/", r = 1) : r = 0;
      let i = -1, a = 0, s = -1, o = !0, u = e.length - 1, l = 0;
      for (; u >= r; --u) {
        let c = e.charCodeAt(u);
        if (c === Dt) {
          if (!o) {
            a = u + 1;
            break;
          }
          continue;
        }
        s === -1 && (o = !1, s = u + 1), c === Yr ? i === -1 ? i = u : l !== 1 && (l = 1) : i !== -1 && (l = -1);
      }
      if (s !== -1) {
        let c = a === 0 && n ? 1 : a;
        i === -1 || l === 0 || l === 1 && i === s - 1 && i === a + 1 ? t.base = t.name = e.slice(c, s) : (t.name = e.slice(c, i), t.base = e.slice(c, s), t.ext = e.slice(i, s));
      }
      return a > 0 ? t.dir = e.slice(0, a - 1) : n && (t.dir = "/"), t;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    $e.win32 = vt.win32 = vt, $e.posix = vt.posix = $e;
    var $D = yn ? vt.normalize : $e.normalize;
    yn ? vt.isAbsolute : $e.isAbsolute;
    var KD = yn ? vt.join : $e.join, jD = yn ? vt.resolve : $e.resolve, qD = yn ? vt.relative : $e.relative, GD = yn ? vt.dirname : $e.dirname;
    yn ? vt.basename : $e.basename, yn ? vt.extname : $e.extname, yn ? vt.parse : $e.parse;
    var Ws = yn ? vt.sep : $e.sep, HD = /^\w[\w\d+.-]*$/, WD = /^\//, YD = /^\/\//;
    function zD(e, t) {
      if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
      if (e.scheme && !HD.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (e.path) {
        if (e.authority) {
          if (!WD.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (YD.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    function XD(e, t) {
      return !e && !t ? "file" : e;
    }
    function JD(e, t) {
      switch (e) {
        case "https":
        case "http":
        case "file":
          t ? t[0] !== Nn && (t = Nn + t) : t = Nn;
          break;
      }
      return t;
    }
    var Ke = "", Nn = "/", QD = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Yt = class ko {
      static isUri(t) {
        return t instanceof ko ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
      }
      constructor(t, n, r, i, a, s = !1) {
        typeof t == "object" ? (this.scheme = t.scheme || Ke, this.authority = t.authority || Ke, this.path = t.path || Ke, this.query = t.query || Ke, this.fragment = t.fragment || Ke) : (this.scheme = XD(t, s), this.authority = n || Ke, this.path = JD(this.scheme, r || Ke), this.query = i || Ke, this.fragment = a || Ke, zD(this, s));
      }
      get fsPath() {
        return Ys(this, !1);
      }
      with(t) {
        if (!t) return this;
        let { scheme: n, authority: r, path: i, query: a, fragment: s } = t;
        return n === void 0 ? n = this.scheme : n === null && (n = Ke), r === void 0 ? r = this.authority : r === null && (r = Ke), i === void 0 ? i = this.path : i === null && (i = Ke), a === void 0 ? a = this.query : a === null && (a = Ke), s === void 0 ? s = this.fragment : s === null && (s = Ke), n === this.scheme && r === this.authority && i === this.path && a === this.query && s === this.fragment ? this : new Mi(n, r, i, a, s);
      }
      static parse(t, n = !1) {
        let r = QD.exec(t);
        return r ? new Mi(r[2] || Ke, zs(r[4] || Ke), zs(r[5] || Ke), zs(r[7] || Ke), zs(r[9] || Ke), n) : new Mi(Ke, Ke, Ke, Ke, Ke);
      }
      static file(t) {
        let n = Ke;
        if (Ii && (t = t.replace(/\\/g, Nn)), t[0] === Nn && t[1] === Nn) {
          let r = t.indexOf(Nn, 2);
          r === -1 ? (n = t.substring(2), t = Nn) : (n = t.substring(2, r), t = t.substring(r) || Nn);
        }
        return new Mi("file", n, t, Ke, Ke);
      }
      static from(t, n) {
        return new Mi(t.scheme, t.authority, t.path, t.query, t.fragment, n);
      }
      static joinPath(t, ...n) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let r;
        return Ii && t.scheme === "file" ? r = ko.file(vt.join(Ys(t, !0), ...n)).path : r = $e.join(t.path, ...n), t.with({ path: r });
      }
      toString(t = !1) {
        return al(this, t);
      }
      toJSON() {
        return this;
      }
      static revive(t) {
        if (t) {
          if (t instanceof ko) return t;
          {
            let n = new Mi(t);
            return n._formatted = t.external ?? null, n._fsPath = t._sep === uf ? t.fsPath ?? null : null, n;
          }
        } else return t;
      }
      [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
      }
    }, uf = Ii ? 1 : void 0, Mi = class extends Yt {
      constructor() {
        super(...arguments), this._formatted = null, this._fsPath = null;
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = Ys(this, !1)), this._fsPath;
      }
      toString(e = !1) {
        return e ? al(this, !0) : (this._formatted || (this._formatted = al(this, !1)), this._formatted);
      }
      toJSON() {
        let e = { $mid: nl.Uri };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = uf), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }
    }, lf = { [O.Colon]: "%3A", [O.Slash]: "%2F", [O.QuestionMark]: "%3F", [O.Hash]: "%23", [O.OpenSquareBracket]: "%5B", [O.CloseSquareBracket]: "%5D", [O.AtSign]: "%40", [O.ExclamationMark]: "%21", [O.DollarSign]: "%24", [O.Ampersand]: "%26", [O.SingleQuote]: "%27", [O.OpenParen]: "%28", [O.CloseParen]: "%29", [O.Asterisk]: "%2A", [O.Plus]: "%2B", [O.Comma]: "%2C", [O.Semicolon]: "%3B", [O.Equals]: "%3D", [O.Space]: "%20" };
    function cf(e, t, n) {
      let r, i = -1;
      for (let a = 0; a < e.length; a++) {
        let s = e.charCodeAt(a);
        if (s >= O.a && s <= O.z || s >= O.A && s <= O.Z || s >= O.Digit0 && s <= O.Digit9 || s === O.Dash || s === O.Period || s === O.Underline || s === O.Tilde || t && s === O.Slash || n && s === O.OpenSquareBracket || n && s === O.CloseSquareBracket || n && s === O.Colon) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
        else {
          r === void 0 && (r = e.substr(0, a));
          let o = lf[s];
          o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += o) : i === -1 && (i = a);
        }
      }
      return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
    }
    function ZD(e) {
      let t;
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        r === O.Hash || r === O.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += lf[r]) : t !== void 0 && (t += e[n]);
      }
      return t !== void 0 ? t : e;
    }
    function Ys(e, t) {
      let n;
      return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === O.Slash && (e.path.charCodeAt(1) >= O.A && e.path.charCodeAt(1) <= O.Z || e.path.charCodeAt(1) >= O.a && e.path.charCodeAt(1) <= O.z) && e.path.charCodeAt(2) === O.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Ii && (n = n.replace(/\//g, "\\")), n;
    }
    function al(e, t) {
      let n = t ? ZD : cf, r = "", { scheme: i, authority: a, path: s, query: o, fragment: u } = e;
      if (i && (r += i, r += ":"), (a || i === "file") && (r += Nn, r += Nn), a) {
        let l = a.indexOf("@");
        if (l !== -1) {
          let c = a.substr(0, l);
          a = a.substr(l + 1), l = c.lastIndexOf(":"), l === -1 ? r += n(c, !1, !1) : (r += n(c.substr(0, l), !1, !1), r += ":", r += n(c.substr(l + 1), !1, !0)), r += "@";
        }
        a = a.toLowerCase(), l = a.lastIndexOf(":"), l === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, l), !1, !0), r += a.substr(l));
      }
      if (s) {
        if (s.length >= 3 && s.charCodeAt(0) === O.Slash && s.charCodeAt(2) === O.Colon) {
          let l = s.charCodeAt(1);
          l >= O.A && l <= O.Z && (s = `/${String.fromCharCode(l + 32)}:${s.substr(3)}`);
        } else if (s.length >= 2 && s.charCodeAt(1) === O.Colon) {
          let l = s.charCodeAt(0);
          l >= O.A && l <= O.Z && (s = `${String.fromCharCode(l + 32)}:${s.substr(2)}`);
        }
        r += n(s, !0, !1);
      }
      return o && (r += "?", r += n(o, !1, !1)), u && (r += "#", r += t ? u : cf(u, !1, !1)), r;
    }
    function df(e) {
      try {
        return decodeURIComponent(e);
      } catch {
        return e.length > 3 ? e.substr(0, 3) + df(e.substr(3)) : e;
      }
    }
    var hf = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function zs(e) {
      return e.match(hf) ? e.replace(hf, (t) => df(t)) : e;
    }
    var wr;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(wr || (wr = {}));
    var ev = class mn extends fe {
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
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? wr.LTR : wr.RTL;
      }
      setEndPosition(t, n) {
        return this.getDirection() === wr.LTR ? new mn(this.startLineNumber, this.startColumn, t, n) : new mn(t, n, this.startLineNumber, this.startColumn);
      }
      getPosition() {
        return new Te(this.positionLineNumber, this.positionColumn);
      }
      getSelectionStart() {
        return new Te(this.selectionStartLineNumber, this.selectionStartColumn);
      }
      setStartPosition(t, n) {
        return this.getDirection() === wr.LTR ? new mn(t, n, this.endLineNumber, this.endColumn) : new mn(this.endLineNumber, this.endColumn, t, n);
      }
      static fromPositions(t, n = t) {
        return new mn(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static fromRange(t, n) {
        return n === wr.LTR ? new mn(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new mn(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
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
        return a === wr.LTR ? new mn(t, n, r, i) : new mn(r, i, t, n);
      }
    }, ff = /* @__PURE__ */ Object.create(null);
    function d(e, t) {
      if (D_(t)) {
        let n = ff[t];
        if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
        t = n;
      }
      return ff[e] = t, { id: e };
    }
    var tv = { add: d("add", 6e4), plus: d("plus", 6e4), gistNew: d("gist-new", 6e4), repoCreate: d("repo-create", 6e4), lightbulb: d("lightbulb", 60001), lightBulb: d("light-bulb", 60001), repo: d("repo", 60002), repoDelete: d("repo-delete", 60002), gistFork: d("gist-fork", 60003), repoForked: d("repo-forked", 60003), gitPullRequest: d("git-pull-request", 60004), gitPullRequestAbandoned: d("git-pull-request-abandoned", 60004), recordKeys: d("record-keys", 60005), keyboard: d("keyboard", 60005), tag: d("tag", 60006), gitPullRequestLabel: d("git-pull-request-label", 60006), tagAdd: d("tag-add", 60006), tagRemove: d("tag-remove", 60006), person: d("person", 60007), personFollow: d("person-follow", 60007), personOutline: d("person-outline", 60007), personFilled: d("person-filled", 60007), gitBranch: d("git-branch", 60008), gitBranchCreate: d("git-branch-create", 60008), gitBranchDelete: d("git-branch-delete", 60008), sourceControl: d("source-control", 60008), mirror: d("mirror", 60009), mirrorPublic: d("mirror-public", 60009), star: d("star", 60010), starAdd: d("star-add", 60010), starDelete: d("star-delete", 60010), starEmpty: d("star-empty", 60010), comment: d("comment", 60011), commentAdd: d("comment-add", 60011), alert: d("alert", 60012), warning: d("warning", 60012), search: d("search", 60013), searchSave: d("search-save", 60013), logOut: d("log-out", 60014), signOut: d("sign-out", 60014), logIn: d("log-in", 60015), signIn: d("sign-in", 60015), eye: d("eye", 60016), eyeUnwatch: d("eye-unwatch", 60016), eyeWatch: d("eye-watch", 60016), circleFilled: d("circle-filled", 60017), primitiveDot: d("primitive-dot", 60017), closeDirty: d("close-dirty", 60017), debugBreakpoint: d("debug-breakpoint", 60017), debugBreakpointDisabled: d("debug-breakpoint-disabled", 60017), debugHint: d("debug-hint", 60017), terminalDecorationSuccess: d("terminal-decoration-success", 60017), primitiveSquare: d("primitive-square", 60018), edit: d("edit", 60019), pencil: d("pencil", 60019), info: d("info", 60020), issueOpened: d("issue-opened", 60020), gistPrivate: d("gist-private", 60021), gitForkPrivate: d("git-fork-private", 60021), lock: d("lock", 60021), mirrorPrivate: d("mirror-private", 60021), close: d("close", 60022), removeClose: d("remove-close", 60022), x: d("x", 60022), repoSync: d("repo-sync", 60023), sync: d("sync", 60023), clone: d("clone", 60024), desktopDownload: d("desktop-download", 60024), beaker: d("beaker", 60025), microscope: d("microscope", 60025), vm: d("vm", 60026), deviceDesktop: d("device-desktop", 60026), file: d("file", 60027), fileText: d("file-text", 60027), more: d("more", 60028), ellipsis: d("ellipsis", 60028), kebabHorizontal: d("kebab-horizontal", 60028), mailReply: d("mail-reply", 60029), reply: d("reply", 60029), organization: d("organization", 60030), organizationFilled: d("organization-filled", 60030), organizationOutline: d("organization-outline", 60030), newFile: d("new-file", 60031), fileAdd: d("file-add", 60031), newFolder: d("new-folder", 60032), fileDirectoryCreate: d("file-directory-create", 60032), trash: d("trash", 60033), trashcan: d("trashcan", 60033), history: d("history", 60034), clock: d("clock", 60034), folder: d("folder", 60035), fileDirectory: d("file-directory", 60035), symbolFolder: d("symbol-folder", 60035), logoGithub: d("logo-github", 60036), markGithub: d("mark-github", 60036), github: d("github", 60036), terminal: d("terminal", 60037), console: d("console", 60037), repl: d("repl", 60037), zap: d("zap", 60038), symbolEvent: d("symbol-event", 60038), error: d("error", 60039), stop: d("stop", 60039), variable: d("variable", 60040), symbolVariable: d("symbol-variable", 60040), array: d("array", 60042), symbolArray: d("symbol-array", 60042), symbolModule: d("symbol-module", 60043), symbolPackage: d("symbol-package", 60043), symbolNamespace: d("symbol-namespace", 60043), symbolObject: d("symbol-object", 60043), symbolMethod: d("symbol-method", 60044), symbolFunction: d("symbol-function", 60044), symbolConstructor: d("symbol-constructor", 60044), symbolBoolean: d("symbol-boolean", 60047), symbolNull: d("symbol-null", 60047), symbolNumeric: d("symbol-numeric", 60048), symbolNumber: d("symbol-number", 60048), symbolStructure: d("symbol-structure", 60049), symbolStruct: d("symbol-struct", 60049), symbolParameter: d("symbol-parameter", 60050), symbolTypeParameter: d("symbol-type-parameter", 60050), symbolKey: d("symbol-key", 60051), symbolText: d("symbol-text", 60051), symbolReference: d("symbol-reference", 60052), goToFile: d("go-to-file", 60052), symbolEnum: d("symbol-enum", 60053), symbolValue: d("symbol-value", 60053), symbolRuler: d("symbol-ruler", 60054), symbolUnit: d("symbol-unit", 60054), activateBreakpoints: d("activate-breakpoints", 60055), archive: d("archive", 60056), arrowBoth: d("arrow-both", 60057), arrowDown: d("arrow-down", 60058), arrowLeft: d("arrow-left", 60059), arrowRight: d("arrow-right", 60060), arrowSmallDown: d("arrow-small-down", 60061), arrowSmallLeft: d("arrow-small-left", 60062), arrowSmallRight: d("arrow-small-right", 60063), arrowSmallUp: d("arrow-small-up", 60064), arrowUp: d("arrow-up", 60065), bell: d("bell", 60066), bold: d("bold", 60067), book: d("book", 60068), bookmark: d("bookmark", 60069), debugBreakpointConditionalUnverified: d("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: d("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: d("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: d("debug-breakpoint-data-unverified", 60072), debugBreakpointData: d("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: d("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: d("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: d("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: d("debug-breakpoint-log-disabled", 60075), briefcase: d("briefcase", 60076), broadcast: d("broadcast", 60077), browser: d("browser", 60078), bug: d("bug", 60079), calendar: d("calendar", 60080), caseSensitive: d("case-sensitive", 60081), check: d("check", 60082), checklist: d("checklist", 60083), chevronDown: d("chevron-down", 60084), chevronLeft: d("chevron-left", 60085), chevronRight: d("chevron-right", 60086), chevronUp: d("chevron-up", 60087), chromeClose: d("chrome-close", 60088), chromeMaximize: d("chrome-maximize", 60089), chromeMinimize: d("chrome-minimize", 60090), chromeRestore: d("chrome-restore", 60091), circleOutline: d("circle-outline", 60092), circle: d("circle", 60092), debugBreakpointUnverified: d("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: d("terminal-decoration-incomplete", 60092), circleSlash: d("circle-slash", 60093), circuitBoard: d("circuit-board", 60094), clearAll: d("clear-all", 60095), clippy: d("clippy", 60096), closeAll: d("close-all", 60097), cloudDownload: d("cloud-download", 60098), cloudUpload: d("cloud-upload", 60099), code: d("code", 60100), collapseAll: d("collapse-all", 60101), colorMode: d("color-mode", 60102), commentDiscussion: d("comment-discussion", 60103), creditCard: d("credit-card", 60105), dash: d("dash", 60108), dashboard: d("dashboard", 60109), database: d("database", 60110), debugContinue: d("debug-continue", 60111), debugDisconnect: d("debug-disconnect", 60112), debugPause: d("debug-pause", 60113), debugRestart: d("debug-restart", 60114), debugStart: d("debug-start", 60115), debugStepInto: d("debug-step-into", 60116), debugStepOut: d("debug-step-out", 60117), debugStepOver: d("debug-step-over", 60118), debugStop: d("debug-stop", 60119), debug: d("debug", 60120), deviceCameraVideo: d("device-camera-video", 60121), deviceCamera: d("device-camera", 60122), deviceMobile: d("device-mobile", 60123), diffAdded: d("diff-added", 60124), diffIgnored: d("diff-ignored", 60125), diffModified: d("diff-modified", 60126), diffRemoved: d("diff-removed", 60127), diffRenamed: d("diff-renamed", 60128), diff: d("diff", 60129), diffSidebyside: d("diff-sidebyside", 60129), discard: d("discard", 60130), editorLayout: d("editor-layout", 60131), emptyWindow: d("empty-window", 60132), exclude: d("exclude", 60133), extensions: d("extensions", 60134), eyeClosed: d("eye-closed", 60135), fileBinary: d("file-binary", 60136), fileCode: d("file-code", 60137), fileMedia: d("file-media", 60138), filePdf: d("file-pdf", 60139), fileSubmodule: d("file-submodule", 60140), fileSymlinkDirectory: d("file-symlink-directory", 60141), fileSymlinkFile: d("file-symlink-file", 60142), fileZip: d("file-zip", 60143), files: d("files", 60144), filter: d("filter", 60145), flame: d("flame", 60146), foldDown: d("fold-down", 60147), foldUp: d("fold-up", 60148), fold: d("fold", 60149), folderActive: d("folder-active", 60150), folderOpened: d("folder-opened", 60151), gear: d("gear", 60152), gift: d("gift", 60153), gistSecret: d("gist-secret", 60154), gist: d("gist", 60155), gitCommit: d("git-commit", 60156), gitCompare: d("git-compare", 60157), compareChanges: d("compare-changes", 60157), gitMerge: d("git-merge", 60158), githubAction: d("github-action", 60159), githubAlt: d("github-alt", 60160), globe: d("globe", 60161), grabber: d("grabber", 60162), graph: d("graph", 60163), gripper: d("gripper", 60164), heart: d("heart", 60165), home: d("home", 60166), horizontalRule: d("horizontal-rule", 60167), hubot: d("hubot", 60168), inbox: d("inbox", 60169), issueReopened: d("issue-reopened", 60171), issues: d("issues", 60172), italic: d("italic", 60173), jersey: d("jersey", 60174), json: d("json", 60175), kebabVertical: d("kebab-vertical", 60176), key: d("key", 60177), law: d("law", 60178), lightbulbAutofix: d("lightbulb-autofix", 60179), linkExternal: d("link-external", 60180), link: d("link", 60181), listOrdered: d("list-ordered", 60182), listUnordered: d("list-unordered", 60183), liveShare: d("live-share", 60184), loading: d("loading", 60185), location: d("location", 60186), mailRead: d("mail-read", 60187), mail: d("mail", 60188), markdown: d("markdown", 60189), megaphone: d("megaphone", 60190), mention: d("mention", 60191), milestone: d("milestone", 60192), gitPullRequestMilestone: d("git-pull-request-milestone", 60192), mortarBoard: d("mortar-board", 60193), move: d("move", 60194), multipleWindows: d("multiple-windows", 60195), mute: d("mute", 60196), noNewline: d("no-newline", 60197), note: d("note", 60198), octoface: d("octoface", 60199), openPreview: d("open-preview", 60200), package: d("package", 60201), paintcan: d("paintcan", 60202), pin: d("pin", 60203), play: d("play", 60204), run: d("run", 60204), plug: d("plug", 60205), preserveCase: d("preserve-case", 60206), preview: d("preview", 60207), project: d("project", 60208), pulse: d("pulse", 60209), question: d("question", 60210), quote: d("quote", 60211), radioTower: d("radio-tower", 60212), reactions: d("reactions", 60213), references: d("references", 60214), refresh: d("refresh", 60215), regex: d("regex", 60216), remoteExplorer: d("remote-explorer", 60217), remote: d("remote", 60218), remove: d("remove", 60219), replaceAll: d("replace-all", 60220), replace: d("replace", 60221), repoClone: d("repo-clone", 60222), repoForcePush: d("repo-force-push", 60223), repoPull: d("repo-pull", 60224), repoPush: d("repo-push", 60225), report: d("report", 60226), requestChanges: d("request-changes", 60227), rocket: d("rocket", 60228), rootFolderOpened: d("root-folder-opened", 60229), rootFolder: d("root-folder", 60230), rss: d("rss", 60231), ruby: d("ruby", 60232), saveAll: d("save-all", 60233), saveAs: d("save-as", 60234), save: d("save", 60235), screenFull: d("screen-full", 60236), screenNormal: d("screen-normal", 60237), searchStop: d("search-stop", 60238), server: d("server", 60240), settingsGear: d("settings-gear", 60241), settings: d("settings", 60242), shield: d("shield", 60243), smiley: d("smiley", 60244), sortPrecedence: d("sort-precedence", 60245), splitHorizontal: d("split-horizontal", 60246), splitVertical: d("split-vertical", 60247), squirrel: d("squirrel", 60248), starFull: d("star-full", 60249), starHalf: d("star-half", 60250), symbolClass: d("symbol-class", 60251), symbolColor: d("symbol-color", 60252), symbolConstant: d("symbol-constant", 60253), symbolEnumMember: d("symbol-enum-member", 60254), symbolField: d("symbol-field", 60255), symbolFile: d("symbol-file", 60256), symbolInterface: d("symbol-interface", 60257), symbolKeyword: d("symbol-keyword", 60258), symbolMisc: d("symbol-misc", 60259), symbolOperator: d("symbol-operator", 60260), symbolProperty: d("symbol-property", 60261), wrench: d("wrench", 60261), wrenchSubaction: d("wrench-subaction", 60261), symbolSnippet: d("symbol-snippet", 60262), tasklist: d("tasklist", 60263), telescope: d("telescope", 60264), textSize: d("text-size", 60265), threeBars: d("three-bars", 60266), thumbsdown: d("thumbsdown", 60267), thumbsup: d("thumbsup", 60268), tools: d("tools", 60269), triangleDown: d("triangle-down", 60270), triangleLeft: d("triangle-left", 60271), triangleRight: d("triangle-right", 60272), triangleUp: d("triangle-up", 60273), twitter: d("twitter", 60274), unfold: d("unfold", 60275), unlock: d("unlock", 60276), unmute: d("unmute", 60277), unverified: d("unverified", 60278), verified: d("verified", 60279), versions: d("versions", 60280), vmActive: d("vm-active", 60281), vmOutline: d("vm-outline", 60282), vmRunning: d("vm-running", 60283), watch: d("watch", 60284), whitespace: d("whitespace", 60285), wholeWord: d("whole-word", 60286), window: d("window", 60287), wordWrap: d("word-wrap", 60288), zoomIn: d("zoom-in", 60289), zoomOut: d("zoom-out", 60290), listFilter: d("list-filter", 60291), listFlat: d("list-flat", 60292), listSelection: d("list-selection", 60293), selection: d("selection", 60293), listTree: d("list-tree", 60294), debugBreakpointFunctionUnverified: d("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: d("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: d("debug-breakpoint-function-disabled", 60296), debugStackframeActive: d("debug-stackframe-active", 60297), circleSmallFilled: d("circle-small-filled", 60298), debugStackframeDot: d("debug-stackframe-dot", 60298), terminalDecorationMark: d("terminal-decoration-mark", 60298), debugStackframe: d("debug-stackframe", 60299), debugStackframeFocused: d("debug-stackframe-focused", 60299), debugBreakpointUnsupported: d("debug-breakpoint-unsupported", 60300), symbolString: d("symbol-string", 60301), debugReverseContinue: d("debug-reverse-continue", 60302), debugStepBack: d("debug-step-back", 60303), debugRestartFrame: d("debug-restart-frame", 60304), debugAlt: d("debug-alt", 60305), callIncoming: d("call-incoming", 60306), callOutgoing: d("call-outgoing", 60307), menu: d("menu", 60308), expandAll: d("expand-all", 60309), feedback: d("feedback", 60310), gitPullRequestReviewer: d("git-pull-request-reviewer", 60310), groupByRefType: d("group-by-ref-type", 60311), ungroupByRefType: d("ungroup-by-ref-type", 60312), account: d("account", 60313), gitPullRequestAssignee: d("git-pull-request-assignee", 60313), bellDot: d("bell-dot", 60314), debugConsole: d("debug-console", 60315), library: d("library", 60316), output: d("output", 60317), runAll: d("run-all", 60318), syncIgnored: d("sync-ignored", 60319), pinned: d("pinned", 60320), githubInverted: d("github-inverted", 60321), serverProcess: d("server-process", 60322), serverEnvironment: d("server-environment", 60323), pass: d("pass", 60324), issueClosed: d("issue-closed", 60324), stopCircle: d("stop-circle", 60325), playCircle: d("play-circle", 60326), record: d("record", 60327), debugAltSmall: d("debug-alt-small", 60328), vmConnect: d("vm-connect", 60329), cloud: d("cloud", 60330), merge: d("merge", 60331), export: d("export", 60332), graphLeft: d("graph-left", 60333), magnet: d("magnet", 60334), notebook: d("notebook", 60335), redo: d("redo", 60336), checkAll: d("check-all", 60337), pinnedDirty: d("pinned-dirty", 60338), passFilled: d("pass-filled", 60339), circleLargeFilled: d("circle-large-filled", 60340), circleLarge: d("circle-large", 60341), circleLargeOutline: d("circle-large-outline", 60341), combine: d("combine", 60342), gather: d("gather", 60342), table: d("table", 60343), variableGroup: d("variable-group", 60344), typeHierarchy: d("type-hierarchy", 60345), typeHierarchySub: d("type-hierarchy-sub", 60346), typeHierarchySuper: d("type-hierarchy-super", 60347), gitPullRequestCreate: d("git-pull-request-create", 60348), runAbove: d("run-above", 60349), runBelow: d("run-below", 60350), notebookTemplate: d("notebook-template", 60351), debugRerun: d("debug-rerun", 60352), workspaceTrusted: d("workspace-trusted", 60353), workspaceUntrusted: d("workspace-untrusted", 60354), workspaceUnknown: d("workspace-unknown", 60355), terminalCmd: d("terminal-cmd", 60356), terminalDebian: d("terminal-debian", 60357), terminalLinux: d("terminal-linux", 60358), terminalPowershell: d("terminal-powershell", 60359), terminalTmux: d("terminal-tmux", 60360), terminalUbuntu: d("terminal-ubuntu", 60361), terminalBash: d("terminal-bash", 60362), arrowSwap: d("arrow-swap", 60363), copy: d("copy", 60364), personAdd: d("person-add", 60365), filterFilled: d("filter-filled", 60366), wand: d("wand", 60367), debugLineByLine: d("debug-line-by-line", 60368), inspect: d("inspect", 60369), layers: d("layers", 60370), layersDot: d("layers-dot", 60371), layersActive: d("layers-active", 60372), compass: d("compass", 60373), compassDot: d("compass-dot", 60374), compassActive: d("compass-active", 60375), azure: d("azure", 60376), issueDraft: d("issue-draft", 60377), gitPullRequestClosed: d("git-pull-request-closed", 60378), gitPullRequestDraft: d("git-pull-request-draft", 60379), debugAll: d("debug-all", 60380), debugCoverage: d("debug-coverage", 60381), runErrors: d("run-errors", 60382), folderLibrary: d("folder-library", 60383), debugContinueSmall: d("debug-continue-small", 60384), beakerStop: d("beaker-stop", 60385), graphLine: d("graph-line", 60386), graphScatter: d("graph-scatter", 60387), pieChart: d("pie-chart", 60388), bracket: d("bracket", 60175), bracketDot: d("bracket-dot", 60389), bracketError: d("bracket-error", 60390), lockSmall: d("lock-small", 60391), azureDevops: d("azure-devops", 60392), verifiedFilled: d("verified-filled", 60393), newline: d("newline", 60394), layout: d("layout", 60395), layoutActivitybarLeft: d("layout-activitybar-left", 60396), layoutActivitybarRight: d("layout-activitybar-right", 60397), layoutPanelLeft: d("layout-panel-left", 60398), layoutPanelCenter: d("layout-panel-center", 60399), layoutPanelJustify: d("layout-panel-justify", 60400), layoutPanelRight: d("layout-panel-right", 60401), layoutPanel: d("layout-panel", 60402), layoutSidebarLeft: d("layout-sidebar-left", 60403), layoutSidebarRight: d("layout-sidebar-right", 60404), layoutStatusbar: d("layout-statusbar", 60405), layoutMenubar: d("layout-menubar", 60406), layoutCentered: d("layout-centered", 60407), target: d("target", 60408), indent: d("indent", 60409), recordSmall: d("record-small", 60410), errorSmall: d("error-small", 60411), terminalDecorationError: d("terminal-decoration-error", 60411), arrowCircleDown: d("arrow-circle-down", 60412), arrowCircleLeft: d("arrow-circle-left", 60413), arrowCircleRight: d("arrow-circle-right", 60414), arrowCircleUp: d("arrow-circle-up", 60415), layoutSidebarRightOff: d("layout-sidebar-right-off", 60416), layoutPanelOff: d("layout-panel-off", 60417), layoutSidebarLeftOff: d("layout-sidebar-left-off", 60418), blank: d("blank", 60419), heartFilled: d("heart-filled", 60420), map: d("map", 60421), mapHorizontal: d("map-horizontal", 60421), foldHorizontal: d("fold-horizontal", 60421), mapFilled: d("map-filled", 60422), mapHorizontalFilled: d("map-horizontal-filled", 60422), foldHorizontalFilled: d("fold-horizontal-filled", 60422), circleSmall: d("circle-small", 60423), bellSlash: d("bell-slash", 60424), bellSlashDot: d("bell-slash-dot", 60425), commentUnresolved: d("comment-unresolved", 60426), gitPullRequestGoToChanges: d("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: d("git-pull-request-new-changes", 60428), searchFuzzy: d("search-fuzzy", 60429), commentDraft: d("comment-draft", 60430), send: d("send", 60431), sparkle: d("sparkle", 60432), insert: d("insert", 60433), mic: d("mic", 60434), thumbsdownFilled: d("thumbsdown-filled", 60435), thumbsupFilled: d("thumbsup-filled", 60436), coffee: d("coffee", 60437), snake: d("snake", 60438), game: d("game", 60439), vr: d("vr", 60440), chip: d("chip", 60441), piano: d("piano", 60442), music: d("music", 60443), micFilled: d("mic-filled", 60444), repoFetch: d("repo-fetch", 60445), copilot: d("copilot", 60446), lightbulbSparkle: d("lightbulb-sparkle", 60447), robot: d("robot", 60448), sparkleFilled: d("sparkle-filled", 60449), diffSingle: d("diff-single", 60450), diffMultiple: d("diff-multiple", 60451), surroundWith: d("surround-with", 60452), share: d("share", 60453), gitStash: d("git-stash", 60454), gitStashApply: d("git-stash-apply", 60455), gitStashPop: d("git-stash-pop", 60456), vscode: d("vscode", 60457), vscodeInsiders: d("vscode-insiders", 60458), codeOss: d("code-oss", 60459), runCoverage: d("run-coverage", 60460), runAllCoverage: d("run-all-coverage", 60461), coverage: d("coverage", 60462), githubProject: d("github-project", 60463), mapVertical: d("map-vertical", 60464), foldVertical: d("fold-vertical", 60464), mapVerticalFilled: d("map-vertical-filled", 60465), foldVerticalFilled: d("fold-vertical-filled", 60465), goToSearch: d("go-to-search", 60466), percentage: d("percentage", 60467), sortPercentage: d("sort-percentage", 60467), attach: d("attach", 60468), goToEditingSession: d("go-to-editing-session", 60469), editSession: d("edit-session", 60470), codeReview: d("code-review", 60471), copilotWarning: d("copilot-warning", 60472), python: d("python", 60473), copilotLarge: d("copilot-large", 60474), copilotWarningLarge: d("copilot-warning-large", 60475), keyboardTab: d("keyboard-tab", 60476), copilotBlocked: d("copilot-blocked", 60477), copilotNotConnected: d("copilot-not-connected", 60478), flag: d("flag", 60479), lightbulbEmpty: d("lightbulb-empty", 60480), symbolMethodArrow: d("symbol-method-arrow", 60481), copilotUnavailable: d("copilot-unavailable", 60482), repoPinned: d("repo-pinned", 60483), keyboardTabAbove: d("keyboard-tab-above", 60484), keyboardTabBelow: d("keyboard-tab-below", 60485), gitPullRequestDone: d("git-pull-request-done", 60486), mcp: d("mcp", 60487), extensionsLarge: d("extensions-large", 60488), layoutPanelDock: d("layout-panel-dock", 60489), layoutSidebarLeftDock: d("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: d("layout-sidebar-right-dock", 60491), copilotInProgress: d("copilot-in-progress", 60492), copilotError: d("copilot-error", 60493), copilotSuccess: d("copilot-success", 60494), chatSparkle: d("chat-sparkle", 60495), searchSparkle: d("search-sparkle", 60496), editSparkle: d("edit-sparkle", 60497), copilotSnooze: d("copilot-snooze", 60498) }, nv = { dialogError: d("dialog-error", "error"), dialogWarning: d("dialog-warning", "warning"), dialogInfo: d("dialog-info", "info"), dialogClose: d("dialog-close", "close"), treeItemExpanded: d("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: d("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: d("tree-filter-on-type-off", "list-selection"), treeFilterClear: d("tree-filter-clear", "close"), treeItemLoading: d("tree-item-loading", "loading"), menuSelection: d("menu-selection", "check"), menuSubmenu: d("menu-submenu", "chevron-right"), menuBarMore: d("menubar-more", "more"), scrollbarButtonLeft: d("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: d("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: d("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: d("scrollbar-button-down", "triangle-down"), toolBarMore: d("toolbar-more", "more"), quickInputBack: d("quick-input-back", "arrow-left"), dropDownButton: d("drop-down-button", 60084), symbolCustomColor: d("symbol-customcolor", 60252), exportIcon: d("export", 60332), workspaceUnspecified: d("workspace-unspecified", 60355), newLine: d("newline", 60394), thumbsDownFilled: d("thumbsdown-filled", 60435), thumbsUpFilled: d("thumbsup-filled", 60436), gitFetch: d("git-fetch", 60445), lightbulbSparkleAutofix: d("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: d("debug-breakpoint-pending", 60377) }, he = { ...tv, ...nv }, pf;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
    })(pf || (pf = {}));
    var mf;
    (function(e) {
      e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
    })(mf || (mf = {}));
    var Xs;
    (function(e) {
      e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
    })(Xs || (Xs = {}));
    var gf;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
    })(gf || (gf = {}));
    var Ef;
    (function(e) {
      e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
    })(Ef || (Ef = {}));
    var rv = class {
      constructor() {
        this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new ln(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
      }
      handleChange(e) {
        this._onDidChange.fire({ changedLanguages: e, changedColorMap: !1 });
      }
      register(e, t) {
        return this._tokenizationSupports.set(e, t), this.handleChange([e]), Sa(() => {
          this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
        });
      }
      get(e) {
        return this._tokenizationSupports.get(e) || null;
      }
      registerFactory(e, t) {
        var r;
        (r = this._factories.get(e)) == null || r.dispose();
        let n = new iv(this, e, t);
        return this._factories.set(e, n), Sa(() => {
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
        return this._colorMap && this._colorMap.length > Xs.DefaultBackground ? this._colorMap[Xs.DefaultBackground] : null;
      }
    }, iv = class extends Ms {
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
    }, av = class {
      constructor(e, t, n) {
        this.offset = e, this.type = t, this.language = n, this._tokenBrand = void 0;
      }
      toString() {
        return "(" + this.offset + ", " + this.type + ")";
      }
    }, _f;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(_f || (_f = {}));
    var j;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(j || (j = {}));
    var Df;
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
        let u = i.get(s);
        return typeof u > "u" && !o && (u = j.Property), u;
      }
      e.fromString = a;
    })(Df || (Df = {}));
    var vf;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(vf || (vf = {}));
    var bf;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })(bf || (bf = {}));
    var yf;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(yf || (yf = {}));
    var Nf;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(Nf || (Nf = {}));
    var Cf;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(Cf || (Cf = {}));
    var Tf;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(Tf || (Tf = {}));
    var wf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(wf || (wf = {}));
    var Af;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
    })(Af || (Af = {}));
    var Sf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(Sf || (Sf = {}));
    var Lf;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(Lf || (Lf = {}));
    var ie;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(ie || (ie = {})), ie.Array + "", me(805, "array"), ie.Boolean + "", me(806, "boolean"), ie.Class + "", me(807, "class"), ie.Constant + "", me(808, "constant"), ie.Constructor + "", me(809, "constructor"), ie.Enum + "", me(810, "enumeration"), ie.EnumMember + "", me(811, "enumeration member"), ie.Event + "", me(812, "event"), ie.Field + "", me(813, "field"), ie.File + "", me(814, "file"), ie.Function + "", me(815, "function"), ie.Interface + "", me(816, "interface"), ie.Key + "", me(817, "key"), ie.Method + "", me(818, "method"), ie.Module + "", me(819, "module"), ie.Namespace + "", me(820, "namespace"), ie.Null + "", me(821, "null"), ie.Number + "", me(822, "number"), ie.Object + "", me(823, "object"), ie.Operator + "", me(824, "operator"), ie.Package + "", me(825, "package"), ie.Property + "", me(826, "property"), ie.String + "", me(827, "string"), ie.Struct + "", me(828, "struct"), ie.TypeParameter + "", me(829, "type parameter"), ie.Variable + "", me(830, "variable");
    var Ff;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Ff || (Ff = {}));
    var If;
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
    })(If || (If = {})), Kt = class {
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
    var Rf;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(Rf || (Rf = {}));
    var Of;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(Of || (Of = {}));
    var xf;
    (function(e) {
      function t(n) {
        return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
      }
      e.is = t;
    })(xf || (xf = {}));
    var kf;
    (function(e) {
      e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
    })(kf || (kf = {}));
    var Mf;
    (function(e) {
      e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
    })(Mf || (Mf = {}));
    var Uf;
    (function(e) {
      e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
    })(Uf || (Uf = {}));
    var Pf;
    (function(e) {
      e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
    })(Pf || (Pf = {}));
    var Bf;
    (function(e) {
      e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
    })(Bf || (Bf = {}));
    var Vf;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(Vf || (Vf = {})), new rv();
    var $f;
    (function(e) {
      e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
    })($f || ($f = {}));
    var Kf;
    (function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
    })(Kf || (Kf = {}));
    var jf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(jf || (jf = {}));
    var qf;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })(qf || (qf = {}));
    var Gf;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(Gf || (Gf = {}));
    var Hf;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Hf || (Hf = {}));
    var Wf;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(Wf || (Wf = {}));
    var Yf;
    (function(e) {
      e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
    })(Yf || (Yf = {}));
    var zf;
    (function(e) {
      e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
    })(zf || (zf = {}));
    var Xf;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Xf || (Xf = {}));
    var Jf;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(Jf || (Jf = {}));
    var Qf;
    (function(e) {
      e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
    })(Qf || (Qf = {}));
    var Zf;
    (function(e) {
      e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowVariableLineHeights = 4] = "allowVariableLineHeights", e[e.allowVariableFonts = 5] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 6] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 7] = "ariaLabel", e[e.ariaRequired = 8] = "ariaRequired", e[e.autoClosingBrackets = 9] = "autoClosingBrackets", e[e.autoClosingComments = 10] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 11] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 12] = "autoClosingDelete", e[e.autoClosingOvertype = 13] = "autoClosingOvertype", e[e.autoClosingQuotes = 14] = "autoClosingQuotes", e[e.autoIndent = 15] = "autoIndent", e[e.autoIndentOnPaste = 16] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 17] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 18] = "automaticLayout", e[e.autoSurround = 19] = "autoSurround", e[e.bracketPairColorization = 20] = "bracketPairColorization", e[e.guides = 21] = "guides", e[e.codeLens = 22] = "codeLens", e[e.codeLensFontFamily = 23] = "codeLensFontFamily", e[e.codeLensFontSize = 24] = "codeLensFontSize", e[e.colorDecorators = 25] = "colorDecorators", e[e.colorDecoratorsLimit = 26] = "colorDecoratorsLimit", e[e.columnSelection = 27] = "columnSelection", e[e.comments = 28] = "comments", e[e.contextmenu = 29] = "contextmenu", e[e.copyWithSyntaxHighlighting = 30] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 31] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 32] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 33] = "cursorStyle", e[e.cursorSurroundingLines = 34] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 35] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 36] = "cursorWidth", e[e.disableLayerHinting = 37] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 38] = "disableMonospaceOptimizations", e[e.domReadOnly = 39] = "domReadOnly", e[e.dragAndDrop = 40] = "dragAndDrop", e[e.dropIntoEditor = 41] = "dropIntoEditor", e[e.editContext = 42] = "editContext", e[e.emptySelectionClipboard = 43] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 44] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 45] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 46] = "extraEditorClassName", e[e.fastScrollSensitivity = 47] = "fastScrollSensitivity", e[e.find = 48] = "find", e[e.fixedOverflowWidgets = 49] = "fixedOverflowWidgets", e[e.folding = 50] = "folding", e[e.foldingStrategy = 51] = "foldingStrategy", e[e.foldingHighlight = 52] = "foldingHighlight", e[e.foldingImportsByDefault = 53] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 54] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 55] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 56] = "fontFamily", e[e.fontInfo = 57] = "fontInfo", e[e.fontLigatures = 58] = "fontLigatures", e[e.fontSize = 59] = "fontSize", e[e.fontWeight = 60] = "fontWeight", e[e.fontVariations = 61] = "fontVariations", e[e.formatOnPaste = 62] = "formatOnPaste", e[e.formatOnType = 63] = "formatOnType", e[e.glyphMargin = 64] = "glyphMargin", e[e.gotoLocation = 65] = "gotoLocation", e[e.hideCursorInOverviewRuler = 66] = "hideCursorInOverviewRuler", e[e.hover = 67] = "hover", e[e.inDiffEditor = 68] = "inDiffEditor", e[e.inlineSuggest = 69] = "inlineSuggest", e[e.letterSpacing = 70] = "letterSpacing", e[e.lightbulb = 71] = "lightbulb", e[e.lineDecorationsWidth = 72] = "lineDecorationsWidth", e[e.lineHeight = 73] = "lineHeight", e[e.lineNumbers = 74] = "lineNumbers", e[e.lineNumbersMinChars = 75] = "lineNumbersMinChars", e[e.linkedEditing = 76] = "linkedEditing", e[e.links = 77] = "links", e[e.matchBrackets = 78] = "matchBrackets", e[e.minimap = 79] = "minimap", e[e.mouseStyle = 80] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 81] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 82] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 83] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 84] = "multiCursorModifier", e[e.multiCursorPaste = 85] = "multiCursorPaste", e[e.multiCursorLimit = 86] = "multiCursorLimit", e[e.occurrencesHighlight = 87] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 88] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 89] = "overtypeCursorStyle", e[e.overtypeOnPaste = 90] = "overtypeOnPaste", e[e.overviewRulerBorder = 91] = "overviewRulerBorder", e[e.overviewRulerLanes = 92] = "overviewRulerLanes", e[e.padding = 93] = "padding", e[e.pasteAs = 94] = "pasteAs", e[e.parameterHints = 95] = "parameterHints", e[e.peekWidgetDefaultFocus = 96] = "peekWidgetDefaultFocus", e[e.placeholder = 97] = "placeholder", e[e.definitionLinkOpensInPeek = 98] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 99] = "quickSuggestions", e[e.quickSuggestionsDelay = 100] = "quickSuggestionsDelay", e[e.readOnly = 101] = "readOnly", e[e.readOnlyMessage = 102] = "readOnlyMessage", e[e.renameOnType = 103] = "renameOnType", e[e.renderControlCharacters = 104] = "renderControlCharacters", e[e.renderFinalNewline = 105] = "renderFinalNewline", e[e.renderLineHighlight = 106] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 107] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 108] = "renderValidationDecorations", e[e.renderWhitespace = 109] = "renderWhitespace", e[e.revealHorizontalRightPadding = 110] = "revealHorizontalRightPadding", e[e.roundedSelection = 111] = "roundedSelection", e[e.rulers = 112] = "rulers", e[e.scrollbar = 113] = "scrollbar", e[e.scrollBeyondLastColumn = 114] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 115] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 116] = "scrollPredominantAxis", e[e.selectionClipboard = 117] = "selectionClipboard", e[e.selectionHighlight = 118] = "selectionHighlight", e[e.selectOnLineNumbers = 119] = "selectOnLineNumbers", e[e.showFoldingControls = 120] = "showFoldingControls", e[e.showUnused = 121] = "showUnused", e[e.snippetSuggestions = 122] = "snippetSuggestions", e[e.smartSelect = 123] = "smartSelect", e[e.smoothScrolling = 124] = "smoothScrolling", e[e.stickyScroll = 125] = "stickyScroll", e[e.stickyTabStops = 126] = "stickyTabStops", e[e.stopRenderingLineAfter = 127] = "stopRenderingLineAfter", e[e.suggest = 128] = "suggest", e[e.suggestFontSize = 129] = "suggestFontSize", e[e.suggestLineHeight = 130] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 131] = "suggestOnTriggerCharacters", e[e.suggestSelection = 132] = "suggestSelection", e[e.tabCompletion = 133] = "tabCompletion", e[e.tabIndex = 134] = "tabIndex", e[e.unicodeHighlighting = 135] = "unicodeHighlighting", e[e.unusualLineTerminators = 136] = "unusualLineTerminators", e[e.useShadowDOM = 137] = "useShadowDOM", e[e.useTabStops = 138] = "useTabStops", e[e.wordBreak = 139] = "wordBreak", e[e.wordSegmenterLocales = 140] = "wordSegmenterLocales", e[e.wordSeparators = 141] = "wordSeparators", e[e.wordWrap = 142] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 143] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 144] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 145] = "wordWrapColumn", e[e.wordWrapOverride1 = 146] = "wordWrapOverride1", e[e.wordWrapOverride2 = 147] = "wordWrapOverride2", e[e.wrappingIndent = 148] = "wrappingIndent", e[e.wrappingStrategy = 149] = "wrappingStrategy", e[e.showDeprecated = 150] = "showDeprecated", e[e.inlayHints = 151] = "inlayHints", e[e.effectiveCursorStyle = 152] = "effectiveCursorStyle", e[e.editorClassName = 153] = "editorClassName", e[e.pixelRatio = 154] = "pixelRatio", e[e.tabFocusMode = 155] = "tabFocusMode", e[e.layoutInfo = 156] = "layoutInfo", e[e.wrappingInfo = 157] = "wrappingInfo", e[e.defaultColorDecorators = 158] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 159] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 160] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 161] = "effectiveEditContext", e[e.scrollOnMiddleClick = 162] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 163] = "effectiveAllowVariableFonts";
    })(Zf || (Zf = {}));
    var e1;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(e1 || (e1 = {}));
    var t1;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })(t1 || (t1 = {}));
    var n1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(n1 || (n1 = {}));
    var r1;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(r1 || (r1 = {}));
    var i1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
    })(i1 || (i1 = {}));
    var a1;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(a1 || (a1 = {}));
    var s1;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(s1 || (s1 = {}));
    var o1;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(o1 || (o1 = {}));
    var u1;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(u1 || (u1 = {}));
    var sl;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(sl || (sl = {}));
    var ol;
    (function(e) {
      e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
    })(ol || (ol = {}));
    var ul;
    (function(e) {
      e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
    })(ul || (ul = {}));
    var l1;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(l1 || (l1 = {}));
    var c1;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(c1 || (c1 = {}));
    var d1;
    (function(e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
    })(d1 || (d1 = {}));
    var h1;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(h1 || (h1 = {}));
    var f1;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(f1 || (f1 = {}));
    var p1;
    (function(e) {
      e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
    })(p1 || (p1 = {}));
    var m1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(m1 || (m1 = {}));
    var g1;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(g1 || (g1 = {}));
    var E1;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(E1 || (E1 = {}));
    var _1;
    (function(e) {
      e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
    })(_1 || (_1 = {}));
    var D1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
    })(D1 || (D1 = {}));
    var v1;
    (function(e) {
      e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
    })(v1 || (v1 = {}));
    var b1;
    (function(e) {
      e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
    })(b1 || (b1 = {}));
    var ll;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(ll || (ll = {}));
    var y1;
    (function(e) {
      e.Off = "off", e.OnCode = "onCode", e.On = "on";
    })(y1 || (y1 = {}));
    var N1;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(N1 || (N1 = {}));
    var C1;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(C1 || (C1 = {}));
    var T1;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(T1 || (T1 = {}));
    var w1;
    (function(e) {
      e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
    })(w1 || (w1 = {}));
    var A1;
    (function(e) {
      e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
    })(A1 || (A1 = {}));
    var S1;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(S1 || (S1 = {}));
    var L1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
    })(L1 || (L1 = {}));
    var sv = (pr = class {
      static chord(t, n) {
        return FD(t, n);
      }
    }, pr.CtrlCmd = ki.CtrlCmd, pr.Shift = ki.Shift, pr.Alt = ki.Alt, pr.WinCtrl = ki.WinCtrl, pr);
    function ov() {
      return { editor: void 0, languages: void 0, CancellationTokenSource: W_, Emitter: ln, KeyCode: sl, KeyMod: sv, Position: Te, Range: fe, Selection: ev, SelectionDirection: ll, MarkerSeverity: ol, MarkerTag: ul, Uri: Yt, Token: av };
    }
    var Ui;
    (function(e) {
      e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
    })(Ui || (Ui = {})), new m_(10);
    var F1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(F1 || (F1 = {}));
    var I1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(I1 || (I1 = {}));
    var R1;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(R1 || (R1 = {}));
    var O1;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(O1 || (O1 = {}));
    var x1;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(x1 || (x1 = {}));
    var k1;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(k1 || (k1 = {}));
    var M1;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(M1 || (M1 = {}));
    var U1;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })(U1 || (U1 = {}));
    var P1;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(P1 || (P1 = {}));
    var B1;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(B1 || (B1 = {}));
    var V1;
    (function(e) {
      e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
    })(V1 || (V1 = {}));
    function uv(e) {
      if (!e || e.length === 0) return !1;
      for (let t = 0, n = e.length; t < n; t++) {
        let r = e.charCodeAt(t);
        if (r === O.LineFeed) return !0;
        if (r === O.Backslash) {
          if (t++, t >= n) break;
          let i = e.charCodeAt(t);
          if (i === O.n || i === O.r || i === O.W) return !0;
        }
      }
      return !1;
    }
    function lv(e, t, n, r, i) {
      if (r === 0) return !0;
      let a = t.charCodeAt(r - 1);
      if (e.get(a) !== Ui.Regular || a === O.CarriageReturn || a === O.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r);
        if (e.get(s) !== Ui.Regular) return !0;
      }
      return !1;
    }
    function cv(e, t, n, r, i) {
      if (r + i === n) return !0;
      let a = t.charCodeAt(r + i);
      if (e.get(a) !== Ui.Regular || a === O.CarriageReturn || a === O.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r + i - 1);
        if (e.get(s) !== Ui.Regular) return !0;
      }
      return !1;
    }
    function dv(e, t, n, r, i) {
      return lv(e, t, n, r, i) && cv(e, t, n, r, i);
    }
    var hv = class {
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
              sD(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
              continue;
            }
            return null;
          }
          if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || dv(this._wordSeparators, e, t, r, i)) return n;
        } while (n);
        return null;
      }
    }, fv = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function pv(e = "") {
      let t = "(-?\\d*\\.\\d\\w*)|([^";
      for (let n of fv) e.indexOf(n) >= 0 || (t += "\\" + n);
      return t += "\\s]+)", new RegExp(t, "g");
    }
    var $1 = pv();
    function K1(e) {
      let t = $1;
      if (e && e instanceof RegExp) if (e.global) t = e;
      else {
        let n = "g";
        e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
      }
      return t.lastIndex = 0, t;
    }
    var j1 = new y_();
    j1.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
    function cl(e, t, n, r, i) {
      if (t = K1(t), i || (i = ks.first(j1)), n.length > i.maxLen) {
        let l = e - i.maxLen / 2;
        return l < 0 ? l = 0 : r += l, n = n.substring(l, e + i.maxLen / 2), cl(e, t, n, r, i);
      }
      let a = Date.now(), s = e - 1 - r, o = -1, u = null;
      for (let l = 1; !(Date.now() - a >= i.timeBudget); l++) {
        let c = s - i.windowSize * l;
        t.lastIndex = Math.max(0, c);
        let f = mv(t, n, s, o);
        if (!f && u || (u = f, c <= 0)) break;
        o = c;
      }
      if (u) {
        let l = { word: u[0], startColumn: r + 1 + u.index, endColumn: r + 1 + u.index + u[0].length };
        return t.lastIndex = 0, l;
      }
      return null;
    }
    function mv(e, t, n, r) {
      let i;
      for (; i = e.exec(t); ) {
        let a = i.index || 0;
        if (a <= n && e.lastIndex >= n) return i;
        if (r > 0 && a > r) return null;
      }
      return null;
    }
    var gv = class {
      static computeUnicodeHighlights(e, t, n) {
        let r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : e.getLineCount(), a = new q1(t), s = a.getCandidateCodePoints(), o;
        s === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${Ev(Array.from(s))}`, "g");
        let u = new hv(null, o), l = [], c = !1, f, p = 0, m = 0, g = 0;
        e: for (let _ = r, L = i; _ <= L; _++) {
          let A = e.getLineContent(_), F = A.length;
          u.reset(0);
          do
            if (f = u.next(A), f) {
              let C = f.index, x = f.index + f[0].length;
              if (C > 0) {
                let B = A.charCodeAt(C - 1);
                Gu(B) && C--;
              }
              if (x + 1 < F) {
                let B = A.charCodeAt(x - 1);
                Gu(B) && x++;
              }
              let U = A.substring(C, x), q = cl(C + 1, $1, A, 0);
              q && q.endColumn <= C + 1 && (q = null);
              let I = a.shouldHighlightNonBasicASCII(U, q ? q.word : null);
              if (I !== Mt.None) {
                if (I === Mt.Ambiguous ? p++ : I === Mt.Invisible ? m++ : I === Mt.NonBasicASCII ? g++ : E_(), l.length >= 1e3) {
                  c = !0;
                  break e;
                }
                l.push(new fe(_, C + 1, _, x + 1));
              }
            }
          while (f);
        }
        return { ranges: l, hasMore: c, ambiguousCharacterCount: p, invisibleCharacterCount: m, nonBasicAsciiCharacterCount: g };
      }
      static computeUnicodeHighlightReason(e, t) {
        let n = new q1(t);
        switch (n.shouldHighlightNonBasicASCII(e, null)) {
          case Mt.None:
            return null;
          case Mt.Invisible:
            return { kind: Oa.Invisible };
          case Mt.Ambiguous: {
            let r = e.codePointAt(0), i = n.ambiguousCharacters.getPrimaryConfusable(r), a = Wu.getLocales().filter((s) => !Wu.getInstance(/* @__PURE__ */ new Set([...t.allowedLocales, s])).isAmbiguous(r));
            return { kind: Oa.Ambiguous, confusableWith: String.fromCodePoint(i), notAmbiguousInLocales: a };
          }
          case Mt.NonBasicASCII:
            return { kind: Oa.NonBasicAscii };
        }
      }
    };
    function Ev(e, t) {
      return `[${X_(e.map((n) => String.fromCodePoint(n)).join(""))}]`;
    }
    var Oa;
    (function(e) {
      e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
    })(Oa || (Oa = {}));
    var q1 = class {
      constructor(e) {
        this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = Wu.getInstance(new Set(e.allowedLocales));
      }
      getCandidateCodePoints() {
        if (this.options.nonBasicASCII) return "allNonBasicAscii";
        let e = /* @__PURE__ */ new Set();
        if (this.options.invisibleCharacters) for (let t of Yu.codePoints) G1(String.fromCodePoint(t)) || e.add(t);
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
          let s = a.codePointAt(0), o = uD(a);
          r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(s) && !Yu.isInvisibleCharacter(s) && (i = !0);
        }
        return !r && i ? Mt.None : this.options.invisibleCharacters && !G1(e) && Yu.isInvisibleCharacter(n) ? Mt.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? Mt.Ambiguous : Mt.None;
      }
    };
    function G1(e) {
      return e === " " || e === `
` || e === "	";
    }
    var Mt;
    (function(e) {
      e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
    })(Mt || (Mt = {}));
    var Js = class {
      constructor(e, t, n) {
        this.changes = e, this.moves = t, this.hitTimeout = n;
      }
    }, _v = class M0 {
      constructor(t, n) {
        this.lineRangeMapping = t, this.changes = n;
      }
      flip() {
        return new M0(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
      }
    }, Ee = class un {
      static fromTo(t, n) {
        return new un(t, n);
      }
      static addRange(t, n) {
        let r = 0;
        for (; r < n.length && n[r].endExclusive < t.start; ) r++;
        let i = r;
        for (; i < n.length && n[i].start <= t.endExclusive; ) i++;
        if (r === i) n.splice(r, 0, t);
        else {
          let a = Math.min(t.start, n[r].start), s = Math.max(t.endExclusive, n[i - 1].endExclusive);
          n.splice(r, i - r, new un(a, s));
        }
      }
      static tryCreate(t, n) {
        if (!(t > n)) return new un(t, n);
      }
      static ofLength(t) {
        return new un(0, t);
      }
      static ofStartAndLength(t, n) {
        return new un(t, t + n);
      }
      static emptyAt(t) {
        return new un(t, t);
      }
      constructor(t, n) {
        if (this.start = t, this.endExclusive = n, t > n) throw new lt(`Invalid range: ${this.toString()}`);
      }
      get isEmpty() {
        return this.start === this.endExclusive;
      }
      delta(t) {
        return new un(this.start + t, this.endExclusive + t);
      }
      deltaStart(t) {
        return new un(this.start + t, this.endExclusive);
      }
      deltaEnd(t) {
        return new un(this.start, this.endExclusive + t);
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
        return new un(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
      }
      intersect(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        if (n <= r) return new un(n, r);
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
        if (this.isEmpty) throw new lt(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, t));
      }
      clipCyclic(t) {
        if (this.isEmpty) throw new lt(`Invalid clipping range: ${this.toString()}`);
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
        if (this.endExclusive !== t.start) throw new lt(`Invalid join: ${this.toString()} and ${t.toString()}`);
        return new un(this.start, t.endExclusive);
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
        let n = new Qs(t[0].slice());
        for (let r = 1; r < t.length; r++) n = n.getUnion(new Qs(t[r].slice()));
        return n.ranges;
      }
      static join(t) {
        if (t.length === 0) throw new lt("lineRanges cannot be empty");
        let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
        for (let i = 1; i < t.length; i++) n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
        return new ft(n, r);
      }
      static deserialize(t) {
        return new ft(t[0], t[1]);
      }
      constructor(t, n) {
        if (t > n) throw new lt(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
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
    }, ft.compareByStart = Si((t) => t.startLineNumber, wa), ft), Qs = class la {
      constructor(t = []) {
        this._normalizedRanges = t;
      }
      get ranges() {
        return this._normalizedRanges;
      }
      addRange(t) {
        if (t.length === 0) return;
        let n = Pu(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = Ai(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
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
        let n = wi(this._normalizedRanges, (r) => r.startLineNumber <= t);
        return !!n && n.endLineNumberExclusive > t;
      }
      intersects(t) {
        let n = wi(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
        return !!n && n.endLineNumberExclusive > t.startLineNumber;
      }
      getUnion(t) {
        if (this._normalizedRanges.length === 0) return t;
        if (t._normalizedRanges.length === 0) return this;
        let n = [], r = 0, i = 0, a = null;
        for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length; ) {
          let s = null;
          if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
            let o = this._normalizedRanges[r], u = t._normalizedRanges[i];
            o.startLineNumber < u.startLineNumber ? (s = o, r++) : (s = u, i++);
          } else r < this._normalizedRanges.length ? (s = this._normalizedRanges[r], r++) : (s = t._normalizedRanges[i], i++);
          a === null ? a = s : a.endLineNumberExclusive >= s.startLineNumber ? a = new Fe(a.startLineNumber, Math.max(a.endLineNumberExclusive, s.endLineNumberExclusive)) : (n.push(a), a = s);
        }
        return a !== null && n.push(a), new la(n);
      }
      subtractFrom(t) {
        let n = Pu(this._normalizedRanges, (s) => s.endLineNumberExclusive >= t.startLineNumber), r = Ai(this._normalizedRanges, (s) => s.startLineNumber <= t.endLineNumberExclusive) + 1;
        if (n === r) return new la([t]);
        let i = [], a = t.startLineNumber;
        for (let s = n; s < r; s++) {
          let o = this._normalizedRanges[s];
          o.startLineNumber > a && i.push(new Fe(a, o.startLineNumber)), a = o.endLineNumberExclusive;
        }
        return a < t.endLineNumberExclusive && i.push(new Fe(a, t.endLineNumberExclusive)), new la(i);
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
        return new la(n);
      }
      getWithDelta(t) {
        return new la(this._normalizedRanges.map((n) => n.delta(t)));
      }
    }, xa = (Rt = class {
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
    }, Rt.zero = new Rt(0, 0), Rt), Dv = class {
      getOffsetRange(e) {
        return new Ee(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
      }
      getRange(e) {
        return fe.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
      }
      getStringEdit(e) {
        let t = e.replacements.map((n) => this.getStringReplacement(n));
        return new zr.deps.StringEdit(t);
      }
      getStringReplacement(e) {
        return new zr.deps.StringReplacement(this.getOffsetRange(e.range), e.text);
      }
      getSingleTextEdit(e) {
        return new zr.deps.TextReplacement(this.getRange(e.replaceRange), e.newText);
      }
      getTextEdit(e) {
        let t = e.replacements.map((n) => this.getSingleTextEdit(n));
        return new zr.deps.TextEdit(t);
      }
    }, zr = (ra = class {
      static get deps() {
        if (!this._deps) throw new Error("Dependencies not set. Call _setDependencies first.");
        return this._deps;
      }
    }, ra._deps = void 0, ra);
    function vv(e) {
      zr._deps = e;
    }
    var H1 = class extends Dv {
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
        let t = Ai(this.lineStartOffsetByLineIdx, (i) => i <= e), n = t + 1, r = e - this.lineStartOffsetByLineIdx[t] + 1;
        return new Te(n, r);
      }
      getTextLength(e) {
        return zr.deps.TextLength.ofRange(this.getRange(e));
      }
      get textLength() {
        let e = this.lineStartOffsetByLineIdx.length - 1;
        return new zr.deps.TextLength(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
      }
      getLineLength(e) {
        return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
      }
    }, W1 = class {
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
        return this._transformer || (this._transformer = new H1(this.getValue())), this._transformer;
      }
      getLineAt(e) {
        return this.getValueOfRange(new fe(e, 1, e, Number.MAX_SAFE_INTEGER));
      }
      getLines() {
        let e = this.getValue();
        return jh(e);
      }
      getLinesOfRange(e) {
        return e.mapToLineArray((t) => this.getLineAt(t));
      }
      equals(e) {
        return this === e ? !0 : this.getValue() === e.getValue();
      }
    }, bv = class extends W1 {
      constructor(e, t) {
        __(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
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
        return new xa(this._lineCount - 1, e.length);
      }
    }, Zs = class extends bv {
      constructor(e) {
        super((t) => e[t - 1], e.length);
      }
    }, ka = class extends W1 {
      constructor(e) {
        super(), this.value = e, this._t = new H1(this.value);
      }
      getValueOfRange(e) {
        return this._t.getOffsetRange(e).substring(this.value);
      }
      get length() {
        return this._t.textLength;
      }
    }, dl = class Pr {
      static fromStringEdit(t, n) {
        let r = t.replacements.map((i) => rr.fromStringReplacement(i, n));
        return new Pr(r);
      }
      static replace(t, n) {
        return new Pr([new rr(t, n)]);
      }
      static delete(t) {
        return new Pr([new rr(t, "")]);
      }
      static insert(t, n) {
        return new Pr([new rr(fe.fromPositions(t, t), n)]);
      }
      static fromParallelReplacementsUnsorted(t) {
        let n = t.slice().sort(Si((r) => r.range, fe.compareRangesUsingStarts));
        return new Pr(n);
      }
      constructor(t) {
        this.replacements = t, Aa(() => Vu(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
      }
      normalize() {
        let t = [];
        for (let n of this.replacements) if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
          let r = t[t.length - 1];
          t[t.length - 1] = new rr(r.range.plusRange(n.range), r.text + n.text);
        } else n.isEmpty || t.push(n);
        return new Pr(t);
      }
      mapPosition(t) {
        let n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = a.range.getStartPosition();
          if (t.isBeforeOrEqual(s)) break;
          let o = a.range.getEndPosition(), u = xa.ofText(a.text);
          if (t.isBefore(o)) {
            let l = new Te(s.lineNumber + n, s.column + (s.lineNumber + n === r ? i : 0)), c = u.addToPosition(l);
            return eo(l, c);
          }
          s.lineNumber + n !== r && (i = 0), n += u.lineCount - (a.range.endLineNumber - a.range.startLineNumber), u.lineCount === 0 ? o.lineNumber !== s.lineNumber ? i += u.columnCount - (o.column - 1) : i += u.columnCount - (o.column - s.column) : i = u.columnCount, r = o.lineNumber + n;
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
        return eo(i, a);
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
          let s = a.range, o = s.getStartPosition(), u = s.getEndPosition(), l = eo(r, o);
          l.isEmpty() || (n += t.getValueOfRange(l)), n += a.text, r = u;
        }
        let i = eo(r, t.endPositionExclusive);
        return i.isEmpty() || (n += t.getValueOfRange(i)), n;
      }
      applyToString(t) {
        let n = new ka(t);
        return this.apply(n);
      }
      inverse(t) {
        let n = this.getNewRanges();
        return new Pr(this.replacements.map((r, i) => new rr(n[i], t.getValueOfRange(r.range))));
      }
      getNewRanges() {
        let t = [], n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = xa.ofText(a.text), o = Te.lift({ lineNumber: a.range.startLineNumber + r, column: a.range.startColumn + (a.range.startLineNumber === n ? i : 0) }), u = s.createRange(o);
          t.push(u), r = u.endLineNumber - a.range.endLineNumber, i = u.endColumn - a.range.endColumn, n = a.range.endLineNumber;
        }
        return t;
      }
      toReplacement(t) {
        if (this.replacements.length === 0) throw new lt();
        if (this.replacements.length === 1) return this.replacements[0];
        let n = this.replacements[0].range.getStartPosition(), r = this.replacements[this.replacements.length - 1].range.getEndPosition(), i = "";
        for (let a = 0; a < this.replacements.length; a++) {
          let s = this.replacements[a];
          if (i += s.text, a < this.replacements.length - 1) {
            let o = this.replacements[a + 1], u = fe.fromPositions(s.range.getEndPosition(), o.range.getStartPosition()), l = t.getValueOfRange(u);
            i += l;
          }
        }
        return new rr(fe.fromPositions(n, r), i);
      }
      equals(t) {
        return Fh(this.replacements, t.replacements, (n, r) => n.equals(r));
      }
      toString(t) {
        return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new ka(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
          let r = t.getValueOfRange(n.range), i = fe.fromPositions(new Te(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition()), a = t.getValueOfRange(i);
          a.length > 10 && (a = "..." + a.substring(a.length - 10));
          let s = fe.fromPositions(n.range.getEndPosition(), new Te(n.range.endLineNumber + 1, 1)), o = t.getValueOfRange(s);
          o.length > 10 && (o = o.substring(0, 10) + "...");
          let u = r;
          if (u.length > 10) {
            let c = Math.floor(5);
            u = u.substring(0, c) + "..." + u.substring(u.length - c);
          }
          let l = n.text;
          if (l.length > 10) {
            let c = Math.floor(5);
            l = l.substring(0, c) + "..." + l.substring(l.length - c);
          }
          return u.length === 0 ? `${a}❰${l}❱${o}` : `${a}❰${u}↦${l}❱${o}`;
        }).join(`
`);
      }
    }, rr = class Ei {
      static joinReplacements(t, n) {
        if (t.length === 0) throw new lt();
        if (t.length === 1) return t[0];
        let r = t[0].range.getStartPosition(), i = t[t.length - 1].range.getEndPosition(), a = "";
        for (let s = 0; s < t.length; s++) {
          let o = t[s];
          if (a += o.text, s < t.length - 1) {
            let u = t[s + 1], l = fe.fromPositions(o.range.getEndPosition(), u.range.getStartPosition()), c = n.getValueOfRange(l);
            a += c;
          }
        }
        return new Ei(fe.fromPositions(r, i), a);
      }
      static fromStringReplacement(t, n) {
        return new Ei(n.getTransformer().getRange(t.replaceRange), t.newText);
      }
      static delete(t) {
        return new Ei(t, "");
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
        return new dl([this]);
      }
      equals(t) {
        return Ei.equals(this, t);
      }
      extendToCoverRange(t, n) {
        if (this.range.containsRange(t)) return this;
        let r = this.range.plusRange(t), i = n.getValueOfRange(fe.fromPositions(r.getStartPosition(), this.range.getStartPosition())), a = n.getValueOfRange(fe.fromPositions(this.range.getEndPosition(), r.getEndPosition())), s = i + this.text + a;
        return new Ei(r, s);
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
`), i = js(n, r), a = xa.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), s = r.substring(i), o = fe.fromPositions(a, this.range.getEndPosition());
        return new Ei(o, s);
      }
      isEffectiveDeletion(t) {
        let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = js(n, r);
        n = n.substring(i), r = r.substring(i);
        let a = qu(n, r);
        return n = n.substring(0, n.length - a), r = r.substring(0, r.length - a), n === "";
      }
    };
    function eo(e, t) {
      if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER) return fe.fromPositions(t, t);
      if (!e.isBeforeOrEqual(t)) throw new lt("start must be before end");
      return new fe(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    var Pi = class ca {
      static inverse(t, n, r) {
        let i = [], a = 1, s = 1;
        for (let u of t) {
          let l = new ca(new Fe(a, u.original.startLineNumber), new Fe(s, u.modified.startLineNumber));
          l.modified.isEmpty || i.push(l), a = u.original.endLineNumberExclusive, s = u.modified.endLineNumberExclusive;
        }
        let o = new ca(new Fe(a, n + 1), new Fe(s, r + 1));
        return o.modified.isEmpty || i.push(o), i;
      }
      static clip(t, n, r) {
        let i = [];
        for (let a of t) {
          let s = a.original.intersect(n), o = a.modified.intersect(r);
          s && !s.isEmpty && o && !o.isEmpty && i.push(new ca(s, o));
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
        return new ca(this.modified, this.original);
      }
      join(t) {
        return new ca(this.original.join(t.original), this.modified.join(t.modified));
      }
      get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
      }
      toRangeMapping() {
        let t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
        if (t && n) return new ir(t, n);
        if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
          if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new lt("not a valid diff");
          return new ir(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        } else return new ir(new fe(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new fe(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
      }
      toRangeMapping2(t, n) {
        if (Y1(this.original.endLineNumberExclusive, t) && Y1(this.modified.endLineNumberExclusive, n)) return new ir(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new ir(fe.fromPositions(new Te(this.original.startLineNumber, 1), Bi(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(new Te(this.modified.startLineNumber, 1), Bi(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new ir(fe.fromPositions(Bi(new Te(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), Bi(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(Bi(new Te(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), Bi(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        throw new lt();
      }
    };
    function Bi(e, t) {
      if (e.lineNumber < 1) return new Te(1, 1);
      if (e.lineNumber > t.length) return new Te(t.length, t[t.length - 1].length + 1);
      let n = t[e.lineNumber - 1];
      return e.column > n.length + 1 ? new Te(e.lineNumber, n.length + 1) : e;
    }
    function Y1(e, t) {
      return e >= 1 && e <= t.length;
    }
    var Vi = class Mo extends Pi {
      static toTextEdit(t, n) {
        let r = [];
        for (let i of t) for (let a of i.innerChanges ?? []) {
          let s = a.toTextEdit(n);
          r.push(s);
        }
        return new dl(r);
      }
      static fromRangeMappings(t) {
        let n = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.originalRange))), r = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.modifiedRange)));
        return new Mo(n, r, t);
      }
      constructor(t, n, r) {
        super(t, n), this.innerChanges = r;
      }
      flip() {
        var t;
        return new Mo(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
      }
      withInnerChangesFromLineRanges() {
        return new Mo(this.original, this.modified, [this.toRangeMapping()]);
      }
    }, ir = class da {
      static fromEdit(t) {
        let n = t.getNewRanges();
        return t.replacements.map((r, i) => new da(r.range, n[i]));
      }
      static fromEditJoin(t) {
        let n = t.getNewRanges(), r = t.replacements.map((i, a) => new da(i.range, n[a]));
        return da.join(r);
      }
      static join(t) {
        if (t.length === 0) throw new lt("Cannot join an empty list of range mappings");
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.join(t[r]);
        return n;
      }
      static assertSorted(t) {
        for (let n = 1; n < t.length; n++) {
          let r = t[n - 1], i = t[n];
          if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition()))) throw new lt("Range mappings must be sorted");
        }
      }
      constructor(t, n) {
        this.originalRange = t, this.modifiedRange = n;
      }
      toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
      }
      flip() {
        return new da(this.modifiedRange, this.originalRange);
      }
      toTextEdit(t) {
        let n = t.getValueOfRange(this.modifiedRange);
        return new rr(this.originalRange, n);
      }
      join(t) {
        return new da(this.originalRange.plusRange(t.originalRange), this.modifiedRange.plusRange(t.modifiedRange));
      }
    };
    function z1(e, t, n, r = !1) {
      let i = [];
      for (let a of i_(e.map((s) => yv(s, t, n)), (s, o) => s.original.intersectsOrTouches(o.original) || s.modified.intersectsOrTouches(o.modified))) {
        let s = a[0], o = a[a.length - 1];
        i.push(new Vi(s.original.join(o.original), s.modified.join(o.modified), a.map((u) => u.innerChanges[0])));
      }
      return Aa(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : Vu(i, (a, s) => s.original.startLineNumber - a.original.endLineNumberExclusive === s.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < s.original.startLineNumber && a.modified.endLineNumberExclusive < s.modified.startLineNumber)), i;
    }
    function yv(e, t, n) {
      let r = 0, i = 0;
      e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
      let a = new Fe(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i), s = new Fe(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i);
      return new Vi(a, s, [e]);
    }
    var Nv = 3, Cv = class {
      computeDiff(e, t, n) {
        var s;
        let r = new Q1(e, t, { maxComputationTime: n.maxComputationTimeMs, shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace, shouldComputeCharChanges: !0, shouldMakePrettyDiff: !0, shouldPostProcessCharChanges: !0 }).computeDiff(), i = [], a = null;
        for (let o of r.changes) {
          let u;
          o.originalEndLineNumber === 0 ? u = new Fe(o.originalStartLineNumber + 1, o.originalStartLineNumber + 1) : u = new Fe(o.originalStartLineNumber, o.originalEndLineNumber + 1);
          let l;
          o.modifiedEndLineNumber === 0 ? l = new Fe(o.modifiedStartLineNumber + 1, o.modifiedStartLineNumber + 1) : l = new Fe(o.modifiedStartLineNumber, o.modifiedEndLineNumber + 1);
          let c = new Vi(u, l, (s = o.charChanges) == null ? void 0 : s.map((f) => new ir(new fe(f.originalStartLineNumber, f.originalStartColumn, f.originalEndLineNumber, f.originalEndColumn), new fe(f.modifiedStartLineNumber, f.modifiedStartColumn, f.modifiedEndLineNumber, f.modifiedEndColumn))));
          a && (a.modified.endLineNumberExclusive === c.modified.startLineNumber || a.original.endLineNumberExclusive === c.original.startLineNumber) && (c = new Vi(a.original.join(c.original), a.modified.join(c.modified), a.innerChanges && c.innerChanges ? a.innerChanges.concat(c.innerChanges) : void 0), i.pop()), i.push(c), a = c;
        }
        return Aa(() => Vu(i, (o, u) => u.original.startLineNumber - o.original.endLineNumberExclusive === u.modified.startLineNumber - o.modified.endLineNumberExclusive && o.original.endLineNumberExclusive < u.original.startLineNumber && o.modified.endLineNumberExclusive < u.modified.startLineNumber)), new Js(i, [], r.quitEarly);
      }
    };
    function X1(e, t, n, r) {
      return new nf(e, t, n).ComputeDiff(r);
    }
    var J1 = class {
      constructor(e) {
        let t = [], n = [];
        for (let r = 0, i = e.length; r < i; r++) t[r] = fl(e[r], 1), n[r] = pl(e[r], 1);
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
          let u = this.lines[o], l = e ? this._startColumns[o] : 1, c = e ? this._endColumns[o] : u.length + 1;
          for (let f = l; f < c; f++) r[s] = u.charCodeAt(f - 1), i[s] = o + 1, a[s] = f, s++;
          !e && o < n && (r[s] = O.LineFeed, i[s] = o + 1, a[s] = u.length + 1, s++);
        }
        return new Tv(r, i, a);
      }
    }, Tv = class {
      constructor(e, t, n) {
        this._charCodes = e, this._lineNumbers = t, this._columns = n;
      }
      toString() {
        return "[" + this._charCodes.map((e, t) => (e === O.LineFeed ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`).join(", ") + "]";
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
        return e === -1 ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), this._charCodes[e] === O.LineFeed ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
      }
      getStartColumn(e) {
        return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
      }
      getEndColumn(e) {
        return e === -1 ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), this._charCodes[e] === O.LineFeed ? 1 : this._columns[e] + 1);
      }
    }, to = class U0 {
      constructor(t, n, r, i, a, s, o, u) {
        this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = a, this.modifiedStartColumn = s, this.modifiedEndLineNumber = o, this.modifiedEndColumn = u;
      }
      static createFromDiffChange(t, n, r) {
        let i = n.getStartLineNumber(t.originalStart), a = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), o = n.getEndColumn(t.originalStart + t.originalLength - 1), u = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
        return new U0(i, a, s, o, u, l, c, f);
      }
    };
    function wv(e) {
      if (e.length <= 1) return e;
      let t = [e[0]], n = t[0];
      for (let r = 1, i = e.length; r < i; r++) {
        let a = e[r], s = a.originalStart - (n.originalStart + n.originalLength), o = a.modifiedStart - (n.modifiedStart + n.modifiedLength);
        Math.min(s, o) < Nv ? (n.originalLength = a.originalStart + a.originalLength - n.originalStart, n.modifiedLength = a.modifiedStart + a.modifiedLength - n.modifiedStart) : (t.push(a), n = a);
      }
      return t;
    }
    var hl = class P0 {
      constructor(t, n, r, i, a) {
        this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = a;
      }
      static createFromDiffResult(t, n, r, i, a, s, o) {
        let u, l, c, f, p;
        if (n.originalLength === 0 ? (u = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (u = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = i.getStartLineNumber(n.modifiedStart) - 1, f = 0) : (c = i.getStartLineNumber(n.modifiedStart), f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && a()) {
          let m = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
          if (m.getElements().length > 0 && g.getElements().length > 0) {
            let _ = X1(m, g, a, !0).changes;
            o && (_ = wv(_)), p = [];
            for (let L = 0, A = _.length; L < A; L++) p.push(to.createFromDiffChange(_[L], m, g));
          }
        }
        return new P0(u, l, c, f, p);
      }
    }, Q1 = class {
      constructor(e, t, n) {
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new J1(e), this.modified = new J1(t), this.continueLineDiff = Z1(n.maxComputationTime), this.continueCharDiff = Z1(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
      }
      computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: !1, changes: [] } : { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: void 0 }] };
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: void 0 }] };
        let e = X1(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
          let s = [];
          for (let o = 0, u = t.length; o < u; o++) s.push(hl.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          return { quitEarly: n, changes: s };
        }
        let r = [], i = 0, a = 0;
        for (let s = -1, o = t.length; s < o; s++) {
          let u = s + 1 < o ? t[s + 1] : null, l = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length;
          for (; i < l && a < c; ) {
            let f = this.originalLines[i], p = this.modifiedLines[a];
            if (f !== p) {
              {
                let m = fl(f, 1), g = fl(p, 1);
                for (; m > 1 && g > 1; ) {
                  let _ = f.charCodeAt(m - 2), L = p.charCodeAt(g - 2);
                  if (_ !== L) break;
                  m--, g--;
                }
                (m > 1 || g > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, m, a + 1, 1, g);
              }
              {
                let m = pl(f, 1), g = pl(p, 1), _ = f.length + 1, L = p.length + 1;
                for (; m < _ && g < L; ) {
                  let A = f.charCodeAt(m - 1), F = f.charCodeAt(g - 1);
                  if (A !== F) break;
                  m++, g++;
                }
                (m < _ || g < L) && this._pushTrimWhitespaceCharChange(r, i + 1, m, _, a + 1, g, L);
              }
            }
            i++, a++;
          }
          u && (r.push(hl.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += u.originalLength, a += u.modifiedLength);
        }
        return { quitEarly: n, changes: r };
      }
      _pushTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s)) return;
        let o;
        this.shouldComputeCharChanges && (o = [new to(t, n, t, r, i, a, i, s)]), e.push(new hl(t, t, i, i, o));
      }
      _mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        let o = e.length;
        if (o === 0) return !1;
        let u = e[o - 1];
        return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === t && u.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new to(t, n, t, r, i, a, i, s)), !0) : u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i ? (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new to(t, n, t, r, i, a, i, s)), !0) : !1;
      }
    };
    function fl(e, t) {
      let n = Q_(e);
      return n === -1 ? t : n + 1;
    }
    function pl(e, t) {
      let n = Z_(e);
      return n === -1 ? t : n + 2;
    }
    function Z1(e) {
      if (e === 0) return () => !0;
      let t = Date.now();
      return () => Date.now() - t < e;
    }
    var $i = class Cc {
      static trivial(t, n) {
        return new Cc([new zt(Ee.ofLength(t.length), Ee.ofLength(n.length))], !1);
      }
      static trivialTimedOut(t, n) {
        return new Cc([new zt(Ee.ofLength(t.length), Ee.ofLength(n.length))], !0);
      }
      constructor(t, n) {
        this.diffs = t, this.hitTimeout = n;
      }
    }, zt = class gr {
      static invert(t, n) {
        let r = [];
        return a_(t, (i, a) => {
          r.push(gr.fromOffsetPairs(i ? i.getEndExclusives() : Xr.zero, a ? a.getStarts() : new Xr(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)));
        }), r;
      }
      static fromOffsetPairs(t, n) {
        return new gr(new Ee(t.offset1, n.offset1), new Ee(t.offset2, n.offset2));
      }
      static assertSorted(t) {
        let n;
        for (let r of t) {
          if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start)) throw new lt("Sequence diffs must be sorted");
          n = r;
        }
      }
      constructor(t, n) {
        this.seq1Range = t, this.seq2Range = n;
      }
      swap() {
        return new gr(this.seq2Range, this.seq1Range);
      }
      toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
      }
      join(t) {
        return new gr(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
      }
      delta(t) {
        return t === 0 ? this : new gr(this.seq1Range.delta(t), this.seq2Range.delta(t));
      }
      deltaStart(t) {
        return t === 0 ? this : new gr(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
      }
      deltaEnd(t) {
        return t === 0 ? this : new gr(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
      }
      intersectsOrTouches(t) {
        return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
      }
      intersect(t) {
        let n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
        if (!(!n || !r)) return new gr(n, r);
      }
      getStarts() {
        return new Xr(this.seq1Range.start, this.seq2Range.start);
      }
      getEndExclusives() {
        return new Xr(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
      }
    }, Xr = (Gn = class {
      constructor(t, n) {
        this.offset1 = t, this.offset2 = n;
      }
      toString() {
        return `${this.offset1} <-> ${this.offset2}`;
      }
      delta(t) {
        return t === 0 ? this : new Gn(this.offset1 + t, this.offset2 + t);
      }
      equals(t) {
        return this.offset1 === t.offset1 && this.offset2 === t.offset2;
      }
    }, Gn.zero = new Gn(0, 0), Gn.max = new Gn(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), Gn), ml = (fi = class {
      isValid() {
        return !0;
      }
    }, fi.instance = new fi(), fi), Av = class {
      constructor(e) {
        if (this.timeout = e, this.startTime = Date.now(), this.valid = !0, e <= 0) throw new lt("timeout must be positive");
      }
      isValid() {
        return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
      }
      disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
      }
    }, gl = class {
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
    function El(e) {
      return e === O.Space || e === O.Tab;
    }
    var ep = (Mr = class {
      static getKey(t) {
        let n = this.chrKeys.get(t);
        return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
      }
      constructor(t, n, r) {
        this.range = t, this.lines = n, this.source = r, this.histogram = [];
        let i = 0;
        for (let a = t.startLineNumber - 1; a < t.endLineNumberExclusive - 1; a++) {
          let s = n[a];
          for (let u = 0; u < s.length; u++) {
            i++;
            let l = s[u], c = Mr.getKey(l);
            this.histogram[c] = (this.histogram[c] || 0) + 1;
          }
          i++;
          let o = Mr.getKey(`
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
    }, Mr.chrKeys = /* @__PURE__ */ new Map(), Mr), Sv = class {
      compute(e, t, n = ml.instance, r) {
        if (e.length === 0 || t.length === 0) return $i.trivial(e, t);
        let i = new gl(e.length, t.length), a = new gl(e.length, t.length), s = new gl(e.length, t.length);
        for (let m = 0; m < e.length; m++) for (let g = 0; g < t.length; g++) {
          if (!n.isValid()) return $i.trivialTimedOut(e, t);
          let _ = m === 0 ? 0 : i.get(m - 1, g), L = g === 0 ? 0 : i.get(m, g - 1), A;
          e.getElement(m) === t.getElement(g) ? (m === 0 || g === 0 ? A = 0 : A = i.get(m - 1, g - 1), m > 0 && g > 0 && a.get(m - 1, g - 1) === 3 && (A += s.get(m - 1, g - 1)), A += r ? r(m, g) : 1) : A = -1;
          let F = Math.max(_, L, A);
          if (F === A) {
            let C = m > 0 && g > 0 ? s.get(m - 1, g - 1) : 0;
            s.set(m, g, C + 1), a.set(m, g, 3);
          } else F === _ ? (s.set(m, g, 0), a.set(m, g, 1)) : F === L && (s.set(m, g, 0), a.set(m, g, 2));
          i.set(m, g, F);
        }
        let o = [], u = e.length, l = t.length;
        function c(m, g) {
          (m + 1 !== u || g + 1 !== l) && o.push(new zt(new Ee(m + 1, u), new Ee(g + 1, l))), u = m, l = g;
        }
        let f = e.length - 1, p = t.length - 1;
        for (; f >= 0 && p >= 0; ) a.get(f, p) === 3 ? (c(f, p), f--, p--) : a.get(f, p) === 1 ? f-- : p--;
        return c(-1, -1), o.reverse(), new $i(o, !1);
      }
    }, tp = class {
      compute(e, t, n = ml.instance) {
        if (e.length === 0 || t.length === 0) return $i.trivial(e, t);
        let r = e, i = t;
        function a(g, _) {
          for (; g < r.length && _ < i.length && r.getElement(g) === i.getElement(_); ) g++, _++;
          return g;
        }
        let s = 0, o = new Lv();
        o.set(0, a(0, 0));
        let u = new Fv();
        u.set(0, o.get(0) === 0 ? null : new np(null, 0, 0, o.get(0)));
        let l = 0;
        e: for (; ; ) {
          if (s++, !n.isValid()) return $i.trivialTimedOut(r, i);
          let g = -Math.min(s, i.length + s % 2), _ = Math.min(s, r.length + s % 2);
          for (l = g; l <= _; l += 2) {
            let L = l === _ ? -1 : o.get(l + 1), A = l === g ? -1 : o.get(l - 1) + 1, F = Math.min(Math.max(L, A), r.length), C = F - l;
            if (F > r.length || C > i.length) continue;
            let x = a(F, C);
            o.set(l, x);
            let U = F === L ? u.get(l + 1) : u.get(l - 1);
            if (u.set(l, x !== F ? new np(U, F, C, x - F) : U), o.get(l) === r.length && o.get(l) - l === i.length) break e;
          }
        }
        let c = u.get(l), f = [], p = r.length, m = i.length;
        for (; ; ) {
          let g = c ? c.x + c.length : 0, _ = c ? c.y + c.length : 0;
          if ((g !== p || _ !== m) && f.push(new zt(new Ee(g, p), new Ee(_, m))), !c) break;
          p = c.x, m = c.y, c = c.prev;
        }
        return f.reverse(), new $i(f, !1);
      }
    }, np = class {
      constructor(e, t, n, r) {
        this.prev = e, this.x = t, this.y = n, this.length = r;
      }
    }, Lv = class {
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
    }, Fv = class {
      constructor() {
        this.positiveArr = [], this.negativeArr = [];
      }
      get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
      }
      set(e, t) {
        e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
      }
    }, no = class {
      constructor(e, t, n) {
        this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
          let i = e[r - 1], a = 0;
          r === this.range.startLineNumber && this.range.startColumn > 1 && (a = this.range.startColumn - 1, i = i.substring(a)), this.lineStartOffsets.push(a);
          let s = 0;
          if (!n) {
            let u = i.trimStart();
            s = i.length - u.length, i = u.trimEnd();
          }
          this.trimmedWsLengthsByLineIdx.push(s);
          let o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - a - s, i.length) : i.length;
          for (let u = 0; u < o; u++) this.elements.push(i.charCodeAt(u));
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
        let t = ap(e > 0 ? this.elements[e - 1] : -1), n = ap(e < this.elements.length ? this.elements[e] : -1);
        if (t === We.LineBreakCR && n === We.LineBreakLF) return 0;
        if (t === We.LineBreakLF) return 150;
        let r = 0;
        return t !== n && (r += 10, t === We.WordLower && n === We.WordUpper && (r += 1)), r += ip(t), r += ip(n), r;
      }
      translateOffset(e, t = "right") {
        let n = Ai(this.firstElementOffsetByLineIdx, (i) => i <= e), r = e - this.firstElementOffsetByLineIdx[n];
        return new Te(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (r === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
      }
      translateRange(e) {
        let t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
        return n.isBefore(t) ? fe.fromPositions(n, n) : fe.fromPositions(t, n);
      }
      findWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Ki(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Ki(this.elements[t - 1]); ) t--;
        let n = e;
        for (; n < this.elements.length && Ki(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      findSubWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Ki(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Ki(this.elements[t - 1]) && !rp(this.elements[t]); ) t--;
        let n = e;
        for (; n < this.elements.length && Ki(this.elements[n]) && !rp(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      countLinesIn(e) {
        return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
      }
      isStronglyEqual(e, t) {
        return this.elements[e] === this.elements[t];
      }
      extendToFullLines(e) {
        let t = wi(this.firstElementOffsetByLineIdx, (r) => r <= e.start) ?? 0, n = r_(this.firstElementOffsetByLineIdx, (r) => e.endExclusive <= r) ?? this.elements.length;
        return new Ee(t, n);
      }
    };
    function Ki(e) {
      return e >= O.a && e <= O.z || e >= O.A && e <= O.Z || e >= O.Digit0 && e <= O.Digit9;
    }
    function rp(e) {
      return e >= O.A && e <= O.Z;
    }
    var We;
    (function(e) {
      e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
    })(We || (We = {}));
    var Iv = { [We.WordLower]: 0, [We.WordUpper]: 0, [We.WordNumber]: 0, [We.End]: 10, [We.Other]: 2, [We.Separator]: 30, [We.Space]: 3, [We.LineBreakCR]: 10, [We.LineBreakLF]: 10 };
    function ip(e) {
      return Iv[e];
    }
    function ap(e) {
      return e === O.LineFeed ? We.LineBreakLF : e === O.CarriageReturn ? We.LineBreakCR : El(e) ? We.Space : e >= O.a && e <= O.z ? We.WordLower : e >= O.A && e <= O.Z ? We.WordUpper : e >= O.Digit0 && e <= O.Digit9 ? We.WordNumber : e === -1 ? We.End : e === O.Comma || e === O.Semicolon ? We.Separator : We.Other;
    }
    function Rv(e, t, n, r, i, a) {
      let { moves: s, excludedChanges: o } = xv(e, t, n, a);
      if (!a.isValid()) return [];
      let u = e.filter((c) => !o.has(c)), l = kv(u, r, i, t, n, a);
      return o_(s, l), s = Mv(s), s = s.filter((c) => {
        let f = c.original.toOffsetRange().slice(t).map((p) => p.trim());
        return f.join(`
`).length >= 15 && Ov(f, (p) => p.length >= 2) >= 2;
      }), s = Uv(e, s), s;
    }
    function Ov(e, t) {
      let n = 0;
      for (let r of e) t(r) && n++;
      return n;
    }
    function xv(e, t, n, r) {
      let i = [], a = e.filter((u) => u.modified.isEmpty && u.original.length >= 3).map((u) => new ep(u.original, t, u)), s = new Set(e.filter((u) => u.original.isEmpty && u.modified.length >= 3).map((u) => new ep(u.modified, n, u))), o = /* @__PURE__ */ new Set();
      for (let u of a) {
        let l = -1, c;
        for (let f of s) {
          let p = u.computeSimilarity(f);
          p > l && (l = p, c = f);
        }
        if (l > 0.9 && c && (s.delete(c), i.push(new Pi(u.range, c.range)), o.add(u.source), o.add(c.source)), !r.isValid()) return { moves: i, excludedChanges: o };
      }
      return { moves: i, excludedChanges: o };
    }
    function kv(e, t, n, r, i, a) {
      let s = [], o = new g_();
      for (let p of e) for (let m = p.original.startLineNumber; m < p.original.endLineNumberExclusive - 2; m++) {
        let g = `${t[m - 1]}:${t[m + 1 - 1]}:${t[m + 2 - 1]}`;
        o.add(g, { range: new Fe(m, m + 3) });
      }
      let u = [];
      e.sort(Si((p) => p.modified.startLineNumber, wa));
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
            u.push(C), A.push(C);
          }), m = A;
        }
        if (!a.isValid()) return [];
      }
      u.sort(u_(Si((p) => p.modifiedLineRange.length, wa)));
      let l = new Qs(), c = new Qs();
      for (let p of u) {
        let m = p.modifiedLineRange.startLineNumber - p.originalLineRange.startLineNumber, g = l.subtractFrom(p.modifiedLineRange), _ = c.subtractFrom(p.originalLineRange).getWithDelta(m), L = g.getIntersection(_);
        for (let A of L.ranges) {
          if (A.length < 3) continue;
          let F = A, C = A.delta(-m);
          s.push(new Pi(C, F)), l.addRange(F), c.addRange(C);
        }
      }
      s.sort(Si((p) => p.original.startLineNumber, wa));
      let f = new Lh(e);
      for (let p = 0; p < s.length; p++) {
        let m = s[p], g = f.findLastMonotonous((q) => q.original.startLineNumber <= m.original.startLineNumber), _ = wi(e, (q) => q.modified.startLineNumber <= m.modified.startLineNumber), L = Math.max(m.original.startLineNumber - g.original.startLineNumber, m.modified.startLineNumber - _.modified.startLineNumber), A = f.findLastMonotonous((q) => q.original.startLineNumber < m.original.endLineNumberExclusive), F = wi(e, (q) => q.modified.startLineNumber < m.modified.endLineNumberExclusive), C = Math.max(A.original.endLineNumberExclusive - m.original.endLineNumberExclusive, F.modified.endLineNumberExclusive - m.modified.endLineNumberExclusive), x;
        for (x = 0; x < L; x++) {
          let q = m.original.startLineNumber - x - 1, I = m.modified.startLineNumber - x - 1;
          if (q > r.length || I > i.length || l.contains(I) || c.contains(q) || !sp(r[q - 1], i[I - 1], a)) break;
        }
        x > 0 && (c.addRange(new Fe(m.original.startLineNumber - x, m.original.startLineNumber)), l.addRange(new Fe(m.modified.startLineNumber - x, m.modified.startLineNumber)));
        let U;
        for (U = 0; U < C; U++) {
          let q = m.original.endLineNumberExclusive + U, I = m.modified.endLineNumberExclusive + U;
          if (q > r.length || I > i.length || l.contains(I) || c.contains(q) || !sp(r[q - 1], i[I - 1], a)) break;
        }
        U > 0 && (c.addRange(new Fe(m.original.endLineNumberExclusive, m.original.endLineNumberExclusive + U)), l.addRange(new Fe(m.modified.endLineNumberExclusive, m.modified.endLineNumberExclusive + U))), (x > 0 || U > 0) && (s[p] = new Pi(new Fe(m.original.startLineNumber - x, m.original.endLineNumberExclusive + U), new Fe(m.modified.startLineNumber - x, m.modified.endLineNumberExclusive + U)));
      }
      return s;
    }
    function sp(e, t, n) {
      if (e.trim() === t.trim()) return !0;
      if (e.length > 300 && t.length > 300) return !1;
      let r = new tp().compute(new no([e], new fe(1, 1, 1, e.length), !1), new no([t], new fe(1, 1, 1, t.length), !1), n), i = 0, a = zt.invert(r.diffs, e.length);
      for (let u of a) u.seq1Range.forEach((l) => {
        El(e.charCodeAt(l)) || i++;
      });
      function s(u) {
        let l = 0;
        for (let c = 0; c < e.length; c++) El(u.charCodeAt(c)) || l++;
        return l;
      }
      let o = s(e.length > t.length ? e : t);
      return i / o > 0.6 && o > 10;
    }
    function Mv(e) {
      if (e.length === 0) return e;
      e.sort(Si((n) => n.original.startLineNumber, wa));
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
    function Uv(e, t) {
      let n = new Lh(e);
      return t = t.filter((r) => {
        let i = n.findLastMonotonous((s) => s.original.startLineNumber < r.original.endLineNumberExclusive) || new Pi(new Fe(1, 1), new Fe(1, 1)), a = wi(e, (s) => s.modified.startLineNumber < r.modified.endLineNumberExclusive);
        return i !== a;
      }), t;
    }
    function op(e, t, n) {
      let r = n;
      return r = up(e, t, r), r = up(e, t, r), r = Pv(e, t, r), r;
    }
    function up(e, t, n) {
      if (n.length === 0) return n;
      let r = [];
      r.push(n[0]);
      for (let a = 1; a < n.length; a++) {
        let s = r[r.length - 1], o = n[a];
        if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
          let u = o.seq1Range.start - s.seq1Range.endExclusive, l;
          for (l = 1; l <= u && !(e.getElement(o.seq1Range.start - l) !== e.getElement(o.seq1Range.endExclusive - l) || t.getElement(o.seq2Range.start - l) !== t.getElement(o.seq2Range.endExclusive - l)); l++) ;
          if (l--, l === u) {
            r[r.length - 1] = new zt(new Ee(s.seq1Range.start, o.seq1Range.endExclusive - u), new Ee(s.seq2Range.start, o.seq2Range.endExclusive - u));
            continue;
          }
          o = o.delta(-l);
        }
        r.push(o);
      }
      let i = [];
      for (let a = 0; a < r.length - 1; a++) {
        let s = r[a + 1], o = r[a];
        if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
          let u = s.seq1Range.start - o.seq1Range.endExclusive, l;
          for (l = 0; l < u && !(!e.isStronglyEqual(o.seq1Range.start + l, o.seq1Range.endExclusive + l) || !t.isStronglyEqual(o.seq2Range.start + l, o.seq2Range.endExclusive + l)); l++) ;
          if (l === u) {
            r[a + 1] = new zt(new Ee(o.seq1Range.start + u, s.seq1Range.endExclusive), new Ee(o.seq2Range.start + u, s.seq2Range.endExclusive));
            continue;
          }
          l > 0 && (o = o.delta(l));
        }
        i.push(o);
      }
      return r.length > 0 && i.push(r[r.length - 1]), i;
    }
    function Pv(e, t, n) {
      if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
      for (let r = 0; r < n.length; r++) {
        let i = r > 0 ? n[r - 1] : void 0, a = n[r], s = r + 1 < n.length ? n[r + 1] : void 0, o = new Ee(i ? i.seq1Range.endExclusive + 1 : 0, s ? s.seq1Range.start - 1 : e.length), u = new Ee(i ? i.seq2Range.endExclusive + 1 : 0, s ? s.seq2Range.start - 1 : t.length);
        a.seq1Range.isEmpty ? n[r] = lp(a, e, t, o, u) : a.seq2Range.isEmpty && (n[r] = lp(a.swap(), t, e, u, o).swap());
      }
      return n;
    }
    function lp(e, t, n, r, i) {
      let a = 1;
      for (; e.seq1Range.start - a >= r.start && e.seq2Range.start - a >= i.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100; ) a++;
      a--;
      let s = 0;
      for (; e.seq1Range.start + s < r.endExclusive && e.seq2Range.endExclusive + s < i.endExclusive && n.isStronglyEqual(e.seq2Range.start + s, e.seq2Range.endExclusive + s) && s < 100; ) s++;
      if (a === 0 && s === 0) return e;
      let o = 0, u = -1;
      for (let l = -a; l <= s; l++) {
        let c = e.seq2Range.start + l, f = e.seq2Range.endExclusive + l, p = e.seq1Range.start + l, m = t.getBoundaryScore(p) + n.getBoundaryScore(c) + n.getBoundaryScore(f);
        m > u && (u = m, o = l);
      }
      return e.delta(o);
    }
    function Bv(e, t, n) {
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
    function cp(e, t, n, r, i = !1) {
      let a = zt.invert(n, e.length), s = [], o = new Xr(0, 0);
      function u(l, c) {
        if (l.offset1 < o.offset1 || l.offset2 < o.offset2) return;
        let f = r(e, l.offset1), p = r(t, l.offset2);
        if (!f || !p) return;
        let m = new zt(f, p), g = m.intersect(c), _ = g.seq1Range.length, L = g.seq2Range.length;
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
        let l = a.shift();
        l.seq1Range.isEmpty || (u(l.getStarts(), l), u(l.getEndExclusives().delta(-1), l));
      }
      return Vv(n, s);
    }
    function Vv(e, t) {
      let n = [];
      for (; e.length > 0 || t.length > 0; ) {
        let r = e[0], i = t[0], a;
        r && (!i || r.seq1Range.start < i.seq1Range.start) ? a = e.shift() : a = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= a.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(a) : n.push(a);
      }
      return n;
    }
    function $v(e, t, n) {
      let r = n;
      if (r.length === 0) return r;
      let i = 0, a;
      do {
        a = !1;
        let s = [r[0]];
        for (let o = 1; o < r.length; o++) {
          let u = function(f, p) {
            let m = new Ee(c.seq1Range.endExclusive, l.seq1Range.start);
            return e.getText(m).replace(/\s/g, "").length <= 4 && (f.seq1Range.length + f.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
          }, l = r[o], c = s[s.length - 1];
          u(c, l) ? (a = !0, s[s.length - 1] = s[s.length - 1].join(l)) : s.push(l);
        }
        r = s;
      } while (i++ < 10 && a);
      return r;
    }
    function Kv(e, t, n) {
      let r = n;
      if (r.length === 0) return r;
      let i = 0, a;
      do {
        a = !1;
        let o = [r[0]];
        for (let u = 1; u < r.length; u++) {
          let l = function(p, m) {
            let g = new Ee(f.seq1Range.endExclusive, c.seq1Range.start);
            if (e.countLinesIn(g) > 5 || g.length > 500) return !1;
            let _ = e.getText(g).trim();
            if (_.length > 20 || _.split(/\r\n|\r|\n/).length > 1) return !1;
            let L = e.countLinesIn(p.seq1Range), A = p.seq1Range.length, F = t.countLinesIn(p.seq2Range), C = p.seq2Range.length, x = e.countLinesIn(m.seq1Range), U = m.seq1Range.length, q = t.countLinesIn(m.seq2Range), I = m.seq2Range.length, B = 130;
            function S(K) {
              return Math.min(K, B);
            }
            return Math.pow(Math.pow(S(L * 40 + A), 1.5) + Math.pow(S(F * 40 + C), 1.5), 1.5) + Math.pow(Math.pow(S(x * 40 + U), 1.5) + Math.pow(S(q * 40 + I), 1.5), 1.5) > (B ** 1.5) ** 1.5 * 1.3;
          }, c = r[u], f = o[o.length - 1];
          l(f, c) ? (a = !0, o[o.length - 1] = o[o.length - 1].join(c)) : o.push(c);
        }
        r = o;
      } while (i++ < 10 && a);
      let s = [];
      return s_(r, (o, u, l) => {
        let c = u;
        function f(A) {
          return A.length > 0 && A.trim().length <= 3 && u.seq1Range.length + u.seq2Range.length > 100;
        }
        let p = e.extendToFullLines(u.seq1Range), m = e.getText(new Ee(p.start, u.seq1Range.start));
        f(m) && (c = c.deltaStart(-m.length));
        let g = e.getText(new Ee(u.seq1Range.endExclusive, p.endExclusive));
        f(g) && (c = c.deltaEnd(g.length));
        let _ = zt.fromOffsetPairs(o ? o.getEndExclusives() : Xr.zero, l ? l.getStarts() : Xr.max), L = c.intersect(_);
        s.length > 0 && L.getStarts().equals(s[s.length - 1].getEndExclusives()) ? s[s.length - 1] = s[s.length - 1].join(L) : s.push(L);
      }), s;
    }
    var dp = class {
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
        let t = e === 0 ? 0 : hp(this.lines[e - 1]), n = e === this.lines.length ? 0 : hp(this.lines[e]);
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
    function hp(e) {
      let t = 0;
      for (; t < e.length && (e.charCodeAt(t) === O.Space || e.charCodeAt(t) === O.Tab); ) t++;
      return t;
    }
    var jv = class {
      constructor() {
        this.dynamicProgrammingDiffing = new Sv(), this.myersDiffingAlgorithm = new tp();
      }
      computeDiff(e, t, n) {
        if (e.length <= 1 && Fh(e, t, (q, I) => q === I)) return new Js([], [], !1);
        if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0) return new Js([new Vi(new Fe(1, e.length + 1), new Fe(1, t.length + 1), [new ir(new fe(1, 1, e.length, e[e.length - 1].length + 1), new fe(1, 1, t.length, t[t.length - 1].length + 1))])], [], !1);
        let r = n.maxComputationTimeMs === 0 ? ml.instance : new Av(n.maxComputationTimeMs), i = !n.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
        function s(q) {
          let I = a.get(q);
          return I === void 0 && (I = a.size, a.set(q, I)), I;
        }
        let o = e.map((q) => s(q.trim())), u = t.map((q) => s(q.trim())), l = new dp(o, e), c = new dp(u, t), f = l.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(l, c, r, (q, I) => e[q] === t[I] ? t[I].length === 0 ? 0.1 : 1 + Math.log(1 + t[I].length) : 0.99) : this.myersDiffingAlgorithm.compute(l, c, r), p = f.diffs, m = f.hitTimeout;
        p = op(l, c, p), p = $v(l, c, p);
        let g = [], _ = (q) => {
          if (i) for (let I = 0; I < q; I++) {
            let B = L + I, S = A + I;
            if (e[B] !== t[S]) {
              let K = this.refineDiff(e, t, new zt(new Ee(B, B + 1), new Ee(S, S + 1)), r, i, n);
              for (let $ of K.mappings) g.push($);
              K.hitTimeout && (m = !0);
            }
          }
        }, L = 0, A = 0;
        for (let q of p) {
          Aa(() => q.seq1Range.start - L === q.seq2Range.start - A);
          let I = q.seq1Range.start - L;
          _(I), L = q.seq1Range.endExclusive, A = q.seq2Range.endExclusive;
          let B = this.refineDiff(e, t, q, r, i, n);
          B.hitTimeout && (m = !0);
          for (let S of B.mappings) g.push(S);
        }
        _(e.length - L);
        let F = new Zs(e), C = new Zs(t), x = z1(g, F, C), U = [];
        return n.computeMoves && (U = this.computeMoves(x, e, t, o, u, r, i, n)), Aa(() => {
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
        }), new Js(x, U, m);
      }
      computeMoves(e, t, n, r, i, a, s, o) {
        return Rv(e, t, n, r, i, a).map((u) => {
          let l = this.refineDiff(t, n, new zt(u.original.toOffsetRange(), u.modified.toOffsetRange()), a, s, o), c = z1(l.mappings, new Zs(t), new Zs(n), !0);
          return new _v(u, c);
        });
      }
      refineDiff(e, t, n, r, i, a) {
        let s = qv(n).toRangeMapping2(e, t), o = new no(e, s.originalRange, i), u = new no(t, s.modifiedRange, i), l = o.length + u.length < 500 ? this.dynamicProgrammingDiffing.compute(o, u, r) : this.myersDiffingAlgorithm.compute(o, u, r), c = l.diffs;
        return c = op(o, u, c), c = cp(o, u, c, (f, p) => f.findWordContaining(p)), a.extendToSubwords && (c = cp(o, u, c, (f, p) => f.findSubWordContaining(p), !0)), c = Bv(o, u, c), c = Kv(o, u, c), { mappings: c.map((f) => new ir(o.translateRange(f.seq1Range), u.translateRange(f.seq2Range))), hitTimeout: l.hitTimeout };
      }
    };
    function qv(e) {
      return new Pi(new Fe(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new Fe(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
    }
    var Ma = { getLegacy: () => new Cv(), getDefault: () => new jv() };
    function Ar(e, t) {
      let n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    var R = class {
      constructor(e, t, n, r = 1) {
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = Ar(Math.max(Math.min(1, r), 0), 3);
      }
      static equals(e, t) {
        return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
      }
    }, Jr = class ts {
      constructor(t, n, r, i) {
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Ar(Math.max(Math.min(1, n), 0), 3), this.l = Ar(Math.max(Math.min(1, r), 0), 3), this.a = Ar(Math.max(Math.min(1, i), 0), 3);
      }
      static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
      }
      static fromRGBA(t) {
        let n = t.r / 255, r = t.g / 255, i = t.b / 255, a = t.a, s = Math.max(n, r, i), o = Math.min(n, r, i), u = 0, l = 0, c = (o + s) / 2, f = s - o;
        if (f > 0) {
          switch (l = Math.min(c <= 0.5 ? f / (2 * c) : f / (2 - 2 * c), 1), s) {
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
        return new ts(u, l, c, a);
      }
      static _hue2rgb(t, n, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
      }
      static toRGBA(t) {
        let n = t.h / 360, { s: r, l: i, a } = t, s, o, u;
        if (r === 0) s = o = u = i;
        else {
          let l = i < 0.5 ? i * (1 + r) : i + r - i * r, c = 2 * i - l;
          s = ts._hue2rgb(c, l, n + 1 / 3), o = ts._hue2rgb(c, l, n), u = ts._hue2rgb(c, l, n - 1 / 3);
        }
        return new R(Math.round(s * 255), Math.round(o * 255), Math.round(u * 255), a);
      }
    }, ro = class B0 {
      constructor(t, n, r, i) {
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Ar(Math.max(Math.min(1, n), 0), 3), this.v = Ar(Math.max(Math.min(1, r), 0), 3), this.a = Ar(Math.max(Math.min(1, i), 0), 3);
      }
      static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
      }
      static fromRGBA(t) {
        let n = t.r / 255, r = t.g / 255, i = t.b / 255, a = Math.max(n, r, i), s = Math.min(n, r, i), o = a - s, u = a === 0 ? 0 : o / a, l;
        return o === 0 ? l = 0 : a === n ? l = ((r - i) / o % 6 + 6) % 6 : a === r ? l = (i - n) / o + 2 : l = (n - r) / o + 4, new B0(Math.round(l * 60), u, a, t.a);
      }
      static toRGBA(t) {
        let { h: n, s: r, v: i, a } = t, s = i * r, o = s * (1 - Math.abs(n / 60 % 2 - 1)), u = i - s, [l, c, f] = [0, 0, 0];
        return n < 60 ? (l = s, c = o) : n < 120 ? (l = o, c = s) : n < 180 ? (c = s, f = o) : n < 240 ? (c = o, f = s) : n < 300 ? (l = o, f = s) : n <= 360 && (l = s, f = o), l = Math.round((l + u) * 255), c = Math.round((c + u) * 255), f = Math.round((f + u) * 255), new R(l, c, f, a);
      }
    }, io = (Ne = class {
      static fromHex(t) {
        return Ne.Format.CSS.parseHex(t) || Ne.red;
      }
      static equals(t, n) {
        return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
      }
      get hsla() {
        return this._hsla ? this._hsla : Jr.fromRGBA(this.rgba);
      }
      get hsva() {
        return this._hsva ? this._hsva : ro.fromRGBA(this.rgba);
      }
      constructor(t) {
        if (t) if (t instanceof R) this.rgba = t;
        else if (t instanceof Jr) this._hsla = t, this.rgba = Jr.toRGBA(t);
        else if (t instanceof ro) this._hsva = t, this.rgba = ro.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
      }
      equals(t) {
        return !!t && R.equals(this.rgba, t.rgba) && Jr.equals(this.hsla, t.hsla) && ro.equals(this.hsva, t.hsva);
      }
      getRelativeLuminance() {
        let t = Ne._relativeLuminanceForComponent(this.rgba.r), n = Ne._relativeLuminanceForComponent(this.rgba.g), r = Ne._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
        return Ar(i, 4);
      }
      reduceRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r > 0 || i > 0 || a > 0); ) r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), a -= Math.max(0, Math.ceil(a * 0.1)), s = this.getContrastRatio(new Ne(new R(r, i, a)));
        return new Ne(new R(r, i, a));
      }
      increaseRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r < 255 || i < 255 || a < 255); ) r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), a = Math.min(255, a + Math.ceil((255 - a) * 0.1)), s = this.getContrastRatio(new Ne(new R(r, i, a)));
        return new Ne(new R(r, i, a));
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
            let o = this.reduceRelativeLuminace(t, n), u = this.getContrastRatio(o);
            if (u < n) {
              let l = this.increaseRelativeLuminace(t, n), c = this.getContrastRatio(l);
              return u > c ? o : l;
            }
            return o;
          }
          let a = this.increaseRelativeLuminace(t, n), s = this.getContrastRatio(a);
          if (s < n) {
            let o = this.reduceRelativeLuminace(t, n), u = this.getContrastRatio(o);
            return s > u ? a : o;
          }
          return a;
        }
        return t;
      }
      lighten(t) {
        return new Ne(new Jr(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
      }
      darken(t) {
        return new Ne(new Jr(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
      }
      transparent(t) {
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new R(n, r, i, a * t));
      }
      isTransparent() {
        return this.rgba.a === 0;
      }
      isOpaque() {
        return this.rgba.a === 1;
      }
      opposite() {
        return new Ne(new R(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
      }
      blend(t) {
        let n = t.rgba, r = this.rgba.a, i = n.a, a = r + i * (1 - r);
        if (a < 1e-6) return Ne.transparent;
        let s = this.rgba.r * r / a + n.r * i * (1 - r) / a, o = this.rgba.g * r / a + n.g * i * (1 - r) / a, u = this.rgba.b * r / a + n.b * i * (1 - r) / a;
        return new Ne(new R(s, o, u, a));
      }
      mix(t, n = 0.5) {
        let r = Math.min(Math.max(n, 0), 1), i = this.rgba, a = t.rgba, s = i.r + (a.r - i.r) * r, o = i.g + (a.g - i.g) * r, u = i.b + (a.b - i.b) * r, l = i.a + (a.a - i.a) * r;
        return new Ne(new R(s, o, u, l));
      }
      makeOpaque(t) {
        if (this.isOpaque() || t.rgba.a !== 1) return this;
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new R(t.rgba.r - a * (t.rgba.r - n), t.rgba.g - a * (t.rgba.g - r), t.rgba.b - a * (t.rgba.b - i), 1));
      }
      flatten(...t) {
        let n = t.reduceRight((r, i) => Ne._flatten(i, r));
        return Ne._flatten(this, n);
      }
      static _flatten(t, n) {
        let r = 1 - t.rgba.a;
        return new Ne(new R(r * n.rgba.r + t.rgba.a * t.rgba.r, r * n.rgba.g + t.rgba.a * t.rgba.g, r * n.rgba.b + t.rgba.a * t.rgba.b));
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
    }, Ne.white = new Ne(new R(255, 255, 255, 1)), Ne.black = new Ne(new R(0, 0, 0, 1)), Ne.red = new Ne(new R(255, 0, 0, 1)), Ne.blue = new Ne(new R(0, 0, 255, 1)), Ne.green = new Ne(new R(0, 255, 0, 1)), Ne.cyan = new Ne(new R(0, 255, 255, 1)), Ne.lightgrey = new Ne(new R(211, 211, 211, 1)), Ne.transparent = new Ne(new R(0, 0, 0, 0)), Ne);
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
          function u(_) {
            return `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}`;
          }
          n.formatHex = u;
          function l(_, L = !1) {
            return L && _.rgba.a === 1 ? e.Format.CSS.formatHex(_) : `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}${o(Math.round(_.rgba.a * 255))}`;
          }
          n.formatHexA = l;
          function c(_) {
            return _.isOpaque() ? e.Format.CSS.formatHex(_) : e.Format.CSS.formatRGBA(_);
          }
          n.format = c;
          function f(_) {
            var L, A, F, C, x, U, q;
            if (_ === "transparent") return e.transparent;
            if (_.startsWith("#")) return m(_);
            if (_.startsWith("rgba(")) {
              let I = _.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
              if (!I) throw new Error("Invalid color format " + _);
              let B = parseInt(((L = I.groups) == null ? void 0 : L.r) ?? "0"), S = parseInt(((A = I.groups) == null ? void 0 : A.g) ?? "0"), K = parseInt(((F = I.groups) == null ? void 0 : F.b) ?? "0"), $ = parseFloat(((C = I.groups) == null ? void 0 : C.a) ?? "0");
              return new e(new R(B, S, K, $));
            }
            if (_.startsWith("rgb(")) {
              let I = _.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
              if (!I) throw new Error("Invalid color format " + _);
              let B = parseInt(((x = I.groups) == null ? void 0 : x.r) ?? "0"), S = parseInt(((U = I.groups) == null ? void 0 : U.g) ?? "0"), K = parseInt(((q = I.groups) == null ? void 0 : q.b) ?? "0");
              return new e(new R(B, S, K));
            }
            return p(_);
          }
          n.parse = f;
          function p(_) {
            switch (_) {
              case "aliceblue":
                return new e(new R(240, 248, 255, 1));
              case "antiquewhite":
                return new e(new R(250, 235, 215, 1));
              case "aqua":
                return new e(new R(0, 255, 255, 1));
              case "aquamarine":
                return new e(new R(127, 255, 212, 1));
              case "azure":
                return new e(new R(240, 255, 255, 1));
              case "beige":
                return new e(new R(245, 245, 220, 1));
              case "bisque":
                return new e(new R(255, 228, 196, 1));
              case "black":
                return new e(new R(0, 0, 0, 1));
              case "blanchedalmond":
                return new e(new R(255, 235, 205, 1));
              case "blue":
                return new e(new R(0, 0, 255, 1));
              case "blueviolet":
                return new e(new R(138, 43, 226, 1));
              case "brown":
                return new e(new R(165, 42, 42, 1));
              case "burlywood":
                return new e(new R(222, 184, 135, 1));
              case "cadetblue":
                return new e(new R(95, 158, 160, 1));
              case "chartreuse":
                return new e(new R(127, 255, 0, 1));
              case "chocolate":
                return new e(new R(210, 105, 30, 1));
              case "coral":
                return new e(new R(255, 127, 80, 1));
              case "cornflowerblue":
                return new e(new R(100, 149, 237, 1));
              case "cornsilk":
                return new e(new R(255, 248, 220, 1));
              case "crimson":
                return new e(new R(220, 20, 60, 1));
              case "cyan":
                return new e(new R(0, 255, 255, 1));
              case "darkblue":
                return new e(new R(0, 0, 139, 1));
              case "darkcyan":
                return new e(new R(0, 139, 139, 1));
              case "darkgoldenrod":
                return new e(new R(184, 134, 11, 1));
              case "darkgray":
                return new e(new R(169, 169, 169, 1));
              case "darkgreen":
                return new e(new R(0, 100, 0, 1));
              case "darkgrey":
                return new e(new R(169, 169, 169, 1));
              case "darkkhaki":
                return new e(new R(189, 183, 107, 1));
              case "darkmagenta":
                return new e(new R(139, 0, 139, 1));
              case "darkolivegreen":
                return new e(new R(85, 107, 47, 1));
              case "darkorange":
                return new e(new R(255, 140, 0, 1));
              case "darkorchid":
                return new e(new R(153, 50, 204, 1));
              case "darkred":
                return new e(new R(139, 0, 0, 1));
              case "darksalmon":
                return new e(new R(233, 150, 122, 1));
              case "darkseagreen":
                return new e(new R(143, 188, 143, 1));
              case "darkslateblue":
                return new e(new R(72, 61, 139, 1));
              case "darkslategray":
                return new e(new R(47, 79, 79, 1));
              case "darkslategrey":
                return new e(new R(47, 79, 79, 1));
              case "darkturquoise":
                return new e(new R(0, 206, 209, 1));
              case "darkviolet":
                return new e(new R(148, 0, 211, 1));
              case "deeppink":
                return new e(new R(255, 20, 147, 1));
              case "deepskyblue":
                return new e(new R(0, 191, 255, 1));
              case "dimgray":
                return new e(new R(105, 105, 105, 1));
              case "dimgrey":
                return new e(new R(105, 105, 105, 1));
              case "dodgerblue":
                return new e(new R(30, 144, 255, 1));
              case "firebrick":
                return new e(new R(178, 34, 34, 1));
              case "floralwhite":
                return new e(new R(255, 250, 240, 1));
              case "forestgreen":
                return new e(new R(34, 139, 34, 1));
              case "fuchsia":
                return new e(new R(255, 0, 255, 1));
              case "gainsboro":
                return new e(new R(220, 220, 220, 1));
              case "ghostwhite":
                return new e(new R(248, 248, 255, 1));
              case "gold":
                return new e(new R(255, 215, 0, 1));
              case "goldenrod":
                return new e(new R(218, 165, 32, 1));
              case "gray":
                return new e(new R(128, 128, 128, 1));
              case "green":
                return new e(new R(0, 128, 0, 1));
              case "greenyellow":
                return new e(new R(173, 255, 47, 1));
              case "grey":
                return new e(new R(128, 128, 128, 1));
              case "honeydew":
                return new e(new R(240, 255, 240, 1));
              case "hotpink":
                return new e(new R(255, 105, 180, 1));
              case "indianred":
                return new e(new R(205, 92, 92, 1));
              case "indigo":
                return new e(new R(75, 0, 130, 1));
              case "ivory":
                return new e(new R(255, 255, 240, 1));
              case "khaki":
                return new e(new R(240, 230, 140, 1));
              case "lavender":
                return new e(new R(230, 230, 250, 1));
              case "lavenderblush":
                return new e(new R(255, 240, 245, 1));
              case "lawngreen":
                return new e(new R(124, 252, 0, 1));
              case "lemonchiffon":
                return new e(new R(255, 250, 205, 1));
              case "lightblue":
                return new e(new R(173, 216, 230, 1));
              case "lightcoral":
                return new e(new R(240, 128, 128, 1));
              case "lightcyan":
                return new e(new R(224, 255, 255, 1));
              case "lightgoldenrodyellow":
                return new e(new R(250, 250, 210, 1));
              case "lightgray":
                return new e(new R(211, 211, 211, 1));
              case "lightgreen":
                return new e(new R(144, 238, 144, 1));
              case "lightgrey":
                return new e(new R(211, 211, 211, 1));
              case "lightpink":
                return new e(new R(255, 182, 193, 1));
              case "lightsalmon":
                return new e(new R(255, 160, 122, 1));
              case "lightseagreen":
                return new e(new R(32, 178, 170, 1));
              case "lightskyblue":
                return new e(new R(135, 206, 250, 1));
              case "lightslategray":
                return new e(new R(119, 136, 153, 1));
              case "lightslategrey":
                return new e(new R(119, 136, 153, 1));
              case "lightsteelblue":
                return new e(new R(176, 196, 222, 1));
              case "lightyellow":
                return new e(new R(255, 255, 224, 1));
              case "lime":
                return new e(new R(0, 255, 0, 1));
              case "limegreen":
                return new e(new R(50, 205, 50, 1));
              case "linen":
                return new e(new R(250, 240, 230, 1));
              case "magenta":
                return new e(new R(255, 0, 255, 1));
              case "maroon":
                return new e(new R(128, 0, 0, 1));
              case "mediumaquamarine":
                return new e(new R(102, 205, 170, 1));
              case "mediumblue":
                return new e(new R(0, 0, 205, 1));
              case "mediumorchid":
                return new e(new R(186, 85, 211, 1));
              case "mediumpurple":
                return new e(new R(147, 112, 219, 1));
              case "mediumseagreen":
                return new e(new R(60, 179, 113, 1));
              case "mediumslateblue":
                return new e(new R(123, 104, 238, 1));
              case "mediumspringgreen":
                return new e(new R(0, 250, 154, 1));
              case "mediumturquoise":
                return new e(new R(72, 209, 204, 1));
              case "mediumvioletred":
                return new e(new R(199, 21, 133, 1));
              case "midnightblue":
                return new e(new R(25, 25, 112, 1));
              case "mintcream":
                return new e(new R(245, 255, 250, 1));
              case "mistyrose":
                return new e(new R(255, 228, 225, 1));
              case "moccasin":
                return new e(new R(255, 228, 181, 1));
              case "navajowhite":
                return new e(new R(255, 222, 173, 1));
              case "navy":
                return new e(new R(0, 0, 128, 1));
              case "oldlace":
                return new e(new R(253, 245, 230, 1));
              case "olive":
                return new e(new R(128, 128, 0, 1));
              case "olivedrab":
                return new e(new R(107, 142, 35, 1));
              case "orange":
                return new e(new R(255, 165, 0, 1));
              case "orangered":
                return new e(new R(255, 69, 0, 1));
              case "orchid":
                return new e(new R(218, 112, 214, 1));
              case "palegoldenrod":
                return new e(new R(238, 232, 170, 1));
              case "palegreen":
                return new e(new R(152, 251, 152, 1));
              case "paleturquoise":
                return new e(new R(175, 238, 238, 1));
              case "palevioletred":
                return new e(new R(219, 112, 147, 1));
              case "papayawhip":
                return new e(new R(255, 239, 213, 1));
              case "peachpuff":
                return new e(new R(255, 218, 185, 1));
              case "peru":
                return new e(new R(205, 133, 63, 1));
              case "pink":
                return new e(new R(255, 192, 203, 1));
              case "plum":
                return new e(new R(221, 160, 221, 1));
              case "powderblue":
                return new e(new R(176, 224, 230, 1));
              case "purple":
                return new e(new R(128, 0, 128, 1));
              case "rebeccapurple":
                return new e(new R(102, 51, 153, 1));
              case "red":
                return new e(new R(255, 0, 0, 1));
              case "rosybrown":
                return new e(new R(188, 143, 143, 1));
              case "royalblue":
                return new e(new R(65, 105, 225, 1));
              case "saddlebrown":
                return new e(new R(139, 69, 19, 1));
              case "salmon":
                return new e(new R(250, 128, 114, 1));
              case "sandybrown":
                return new e(new R(244, 164, 96, 1));
              case "seagreen":
                return new e(new R(46, 139, 87, 1));
              case "seashell":
                return new e(new R(255, 245, 238, 1));
              case "sienna":
                return new e(new R(160, 82, 45, 1));
              case "silver":
                return new e(new R(192, 192, 192, 1));
              case "skyblue":
                return new e(new R(135, 206, 235, 1));
              case "slateblue":
                return new e(new R(106, 90, 205, 1));
              case "slategray":
                return new e(new R(112, 128, 144, 1));
              case "slategrey":
                return new e(new R(112, 128, 144, 1));
              case "snow":
                return new e(new R(255, 250, 250, 1));
              case "springgreen":
                return new e(new R(0, 255, 127, 1));
              case "steelblue":
                return new e(new R(70, 130, 180, 1));
              case "tan":
                return new e(new R(210, 180, 140, 1));
              case "teal":
                return new e(new R(0, 128, 128, 1));
              case "thistle":
                return new e(new R(216, 191, 216, 1));
              case "tomato":
                return new e(new R(255, 99, 71, 1));
              case "turquoise":
                return new e(new R(64, 224, 208, 1));
              case "violet":
                return new e(new R(238, 130, 238, 1));
              case "wheat":
                return new e(new R(245, 222, 179, 1));
              case "white":
                return new e(new R(255, 255, 255, 1));
              case "whitesmoke":
                return new e(new R(245, 245, 245, 1));
              case "yellow":
                return new e(new R(255, 255, 0, 1));
              case "yellowgreen":
                return new e(new R(154, 205, 50, 1));
              default:
                return null;
            }
          }
          function m(_) {
            let L = _.length;
            if (L === 0 || _.charCodeAt(0) !== O.Hash) return null;
            if (L === 7) {
              let A = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6));
              return new e(new R(A, F, C, 1));
            }
            if (L === 9) {
              let A = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6)), x = 16 * g(_.charCodeAt(7)) + g(_.charCodeAt(8));
              return new e(new R(A, F, C, x / 255));
            }
            if (L === 4) {
              let A = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3));
              return new e(new R(16 * A + A, 16 * F + F, 16 * C + C));
            }
            if (L === 5) {
              let A = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3)), x = g(_.charCodeAt(4));
              return new e(new R(16 * A + A, 16 * F + F, 16 * C + C, (16 * x + x) / 255));
            }
            return null;
          }
          n.parseHex = m;
          function g(_) {
            switch (_) {
              case O.Digit0:
                return 0;
              case O.Digit1:
                return 1;
              case O.Digit2:
                return 2;
              case O.Digit3:
                return 3;
              case O.Digit4:
                return 4;
              case O.Digit5:
                return 5;
              case O.Digit6:
                return 6;
              case O.Digit7:
                return 7;
              case O.Digit8:
                return 8;
              case O.Digit9:
                return 9;
              case O.a:
                return 10;
              case O.A:
                return 10;
              case O.b:
                return 11;
              case O.B:
                return 11;
              case O.c:
                return 12;
              case O.C:
                return 12;
              case O.d:
                return 13;
              case O.D:
                return 13;
              case O.e:
                return 14;
              case O.E:
                return 14;
              case O.f:
                return 15;
              case O.F:
                return 15;
            }
            return 0;
          }
        })(t.CSS || (t.CSS = {}));
      })(e.Format || (e.Format = {}));
    })(io || (io = {}));
    function fp(e) {
      let t = [];
      for (let n of e) {
        let r = Number(n);
        (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
      }
      return t;
    }
    function _l(e, t, n, r) {
      return { red: e / 255, blue: n / 255, green: t / 255, alpha: r };
    }
    function Ua(e, t) {
      let n = t.index, r = t[0].length;
      if (n === void 0) return;
      let i = e.positionAt(n);
      return { startLineNumber: i.lineNumber, startColumn: i.column, endLineNumber: i.lineNumber, endColumn: i.column + r };
    }
    function Gv(e, t) {
      if (!e) return;
      let n = io.Format.CSS.parseHex(t);
      if (n) return { range: e, color: _l(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
    }
    function pp(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = fp(r);
      return { range: e, color: _l(i[0], i[1], i[2], n ? i[3] : 1) };
    }
    function mp(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = fp(r), a = new io(new Jr(i[0], i[1] / 100, i[2] / 100, n ? i[3] : 1));
      return { range: e, color: _l(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a) };
    }
    function Pa(e, t) {
      return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
    }
    function Hv(e) {
      let t = [], n = Pa(e, new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"));
      if (n.length > 0) for (let r of n) {
        let i = r.filter((u) => u !== void 0), a = i[1], s = i[2];
        if (!s) continue;
        let o;
        if (a === "rgb") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
          o = pp(Ua(e, r), Pa(s, u), !1);
        } else if (a === "rgba") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = pp(Ua(e, r), Pa(s, u), !0);
        } else if (a === "hsl") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
          o = mp(Ua(e, r), Pa(s, u), !1);
        } else if (a === "hsla") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = mp(Ua(e, r), Pa(s, u), !0);
        } else a === "#" && (o = Gv(Ua(e, r), a + s));
        o && t.push(o);
      }
      return t;
    }
    function Wv(e) {
      return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : Hv(e);
    }
    var Yv = /^-+|-+$/g, gp = 100, zv = 5;
    function Xv(e, t) {
      var r;
      let n = [];
      if (t.findRegionSectionHeaders && ((r = t.foldingRules) != null && r.markers)) {
        let i = Jv(e, t);
        n = n.concat(i);
      }
      if (t.findMarkSectionHeaders) {
        let i = Qv(e, t);
        n = n.concat(i);
      }
      return n;
    }
    function Jv(e, t) {
      let n = [], r = e.getLineCount();
      for (let i = 1; i <= r; i++) {
        let a = e.getLineContent(i), s = a.match(t.foldingRules.markers.start);
        if (s) {
          let o = { startLineNumber: i, startColumn: s[0].length + 1, endLineNumber: i, endColumn: a.length + 1 };
          if (o.endColumn > o.startColumn) {
            let u = { range: o, ...Zv(a.substring(s[0].length)), shouldBeInComments: !1 };
            (u.text || u.hasSeparatorLine) && n.push(u);
          }
        }
      }
      return n;
    }
    function Qv(e, t) {
      let n = [], r = e.getLineCount();
      if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "") return n;
      let i = uv(t.markSectionHeaderRegex), a = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
      if (J_(a)) return n;
      for (let s = 1; s <= r; s += gp - zv) {
        let o = Math.min(s + gp - 1, r), u = [];
        for (let f = s; f <= o; f++) u.push(e.getLineContent(f));
        let l = u.join(`
`);
        a.lastIndex = 0;
        let c;
        for (; (c = a.exec(l)) !== null; ) {
          let f = l.substring(0, c.index), p = (f.match(/\n/g) || []).length, m = s + p, g = c[0].split(`
`), _ = g.length, L = m + _ - 1, A = f.lastIndexOf(`
`) + 1, F = c.index - A + 1, C = g[g.length - 1], x = _ === 1 ? F + c[0].length : C.length + 1, U = { startLineNumber: m, startColumn: F, endLineNumber: L, endColumn: x }, q = (c.groups ?? {}).label ?? "", I = ((c.groups ?? {}).separator ?? "") !== "", B = { range: U, text: q, hasSeparatorLine: I, shouldBeInComments: !0 };
          (B.text || B.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < B.range.startLineNumber) && n.push(B), a.lastIndex = c.index + c[0].length;
        }
      }
      return n;
    }
    function Zv(e) {
      e = e.trim();
      let t = e.startsWith("-");
      return e = e.replace(Yv, ""), { text: e, hasSeparatorLine: t };
    }
    function Sr(e) {
      return e === O.Slash || e === O.Backslash;
    }
    function Ep(e) {
      return e.replace(/[\\/]/g, $e.sep);
    }
    function eb(e) {
      return e.indexOf("/") === -1 && (e = Ep(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
    }
    function _p(e, t = $e.sep) {
      if (!e) return "";
      let n = e.length, r = e.charCodeAt(0);
      if (Sr(r)) {
        if (Sr(e.charCodeAt(1)) && !Sr(e.charCodeAt(2))) {
          let a = 3, s = a;
          for (; a < n && !Sr(e.charCodeAt(a)); a++) ;
          if (s !== a && !Sr(e.charCodeAt(a + 1))) {
            for (a += 1; a < n; a++) if (Sr(e.charCodeAt(a))) return e.slice(0, a + 1).replace(/[\\/]/g, t);
          }
        }
        return t;
      } else if (tb(r) && e.charCodeAt(1) === O.Colon) return Sr(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
      let i = e.indexOf("://");
      if (i !== -1) {
        for (i += 3; i < n; i++) if (Sr(e.charCodeAt(i))) return e.slice(0, i + 1);
      }
      return "";
    }
    function Dp(e, t, n, r = Ws) {
      if (e === t) return !0;
      if (!e || !t || t.length > e.length) return !1;
      if (n) {
        if (!rD(e, t)) return !1;
        if (t.length === e.length) return !0;
        let i = t.length;
        return t.charAt(t.length - 1) === r && i--, e.charAt(i) === r;
      }
      return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
    }
    function tb(e) {
      return e >= O.A && e <= O.Z || e >= O.a && e <= O.z;
    }
    var nb = {}, Lt;
    (function(e) {
      e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
    })(Lt || (Lt = {}));
    var rb = "tkn", ib = class {
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
        this._serverRootPath = $e.join(t ?? "/", sb(e));
      }
      getServerRootPath() {
        return this._serverRootPath;
      }
      get _remoteResourcesPath() {
        return $e.join(this._serverRootPath, Lt.vscodeRemoteResource);
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
          return Ta(s), e;
        }
        let t = e.authority, n = this._hosts[t];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        let r = this._ports[t], i = this._connectionTokens[t], a = `path=${encodeURIComponent(e.path)}`;
        return typeof i == "string" && (a += `&${rb}=${encodeURIComponent(i)}`), Yt.from({ scheme: K_ ? this._preferredWebSchema : Lt.vscodeRemoteResource, authority: `${n}:${r}`, path: this._remoteResourcesPath, query: a });
      }
    }, ab = new ib();
    function sb(e) {
      return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
    }
    var ob = "vscode-app", ub = (mr = class {
      constructor() {
        this.staticBrowserUris = new h_(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
      }
      registerAppResourcePathUrl(t, n) {
        this.appResourcePathUrls.set(t, n);
      }
      toUrl(t) {
        var r;
        let n = this.appResourcePathUrls.get(t);
        return typeof n == "function" && (n = n()), new URL(n ?? t, ((r = globalThis.location) == null ? void 0 : r.href) ?? nb.url).toString();
      }
      asBrowserUri(t) {
        let n = this.toUri(t);
        return this.uriToBrowserUri(n);
      }
      uriToBrowserUri(t) {
        return t.scheme === Lt.vscodeRemote ? ab.rewrite(t) : t.scheme === Lt.file && ($_ || q_ === `${Lt.vscodeFileResource}://${mr.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Lt.vscodeFileResource, authority: t.authority || mr.FALLBACK_AUTHORITY, query: null, fragment: null }) : this.staticBrowserUris.get(t) ?? t;
      }
      asFileUri(t) {
        let n = this.toUri(t);
        return this.uriToFileUri(n);
      }
      uriToFileUri(t) {
        return t.scheme === Lt.vscodeFileResource ? t.with({ scheme: Lt.file, authority: t.authority !== mr.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
      }
      toUri(t) {
        if (Yt.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
          let n = globalThis._VSCODE_FILE_ROOT;
          if (/^\w[\w\d+.-]*:\/\//.test(n)) return Yt.joinPath(Yt.parse(n, !0), t);
          let r = KD(n, t);
          return Yt.file(r);
        }
        return Yt.parse(this.toUrl(t));
      }
      registerStaticBrowserUri(t, n) {
        return this.staticBrowserUris.set(t, n), Sa(() => {
          this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
        });
      }
      getRegisteredBrowserUris() {
        return this.staticBrowserUris.keys();
      }
    }, mr.FALLBACK_AUTHORITY = ob, mr);
    new ub();
    var vp;
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
        let u = s && o ? "3" : o ? "2" : "1";
        a instanceof URLSearchParams ? a.set(n, u) : a[n] = u;
      }
      e.addSearchParam = i;
    })(vp || (vp = {}));
    function ar(e) {
      return Ys(e, !0);
    }
    var lb = class {
      constructor(e) {
        this._ignorePathCasing = e;
      }
      compare(e, t, n = !1) {
        return e === t ? 0 : eD(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
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
          if (e.scheme === Lt.file) return Dp(ar(e), ar(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
          if (bp(e.authority, t.authority)) return Dp(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
        }
        return !1;
      }
      joinPath(e, ...t) {
        return Yt.joinPath(e, ...t);
      }
      basenameOrAuthority(e) {
        return cb(e) || e.authority;
      }
      basename(e) {
        return $e.basename(e.path);
      }
      extname(e) {
        return $e.extname(e.path);
      }
      dirname(e) {
        if (e.path.length === 0) return e;
        let t;
        return e.scheme === Lt.file ? t = Yt.file(GD(ar(e))).path : (t = $e.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== O.Slash && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
      }
      normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === Lt.file ? t = Yt.file($D(ar(e))).path : t = $e.normalize(e.path), e.with({ path: t });
      }
      relativePath(e, t) {
        if (e.scheme !== t.scheme || !bp(e.authority, t.authority)) return;
        if (e.scheme === Lt.file) {
          let i = qD(ar(e), ar(t));
          return Ii ? Ep(i) : i;
        }
        let n = e.path || "/", r = t.path || "/";
        if (this._ignorePathCasing(e)) {
          let i = 0;
          for (let a = Math.min(n.length, r.length); i < a && !(n.charCodeAt(i) !== r.charCodeAt(i) && n.charAt(i).toLowerCase() !== r.charAt(i).toLowerCase()); i++) ;
          n = r.substr(0, i) + n.substr(i);
        }
        return $e.relative(n, r);
      }
      resolvePath(e, t) {
        if (e.scheme === Lt.file) {
          let n = Yt.file(jD(ar(e), t));
          return e.with({ authority: n.authority, path: n.path });
        }
        return t = eb(t), e.with({ path: $e.resolve(e.path, t) });
      }
      isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
      }
      isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && nD(e, t);
      }
      hasTrailingPathSeparator(e, t = Ws) {
        if (e.scheme === Lt.file) {
          let n = ar(e);
          return n.length > _p(n).length && n[n.length - 1] === t;
        } else {
          let n = e.path;
          return n.length > 1 && n.charCodeAt(n.length - 1) === O.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
      }
      removeTrailingPathSeparator(e, t = Ws) {
        return yp(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
      }
      addTrailingPathSeparator(e, t = Ws) {
        let n = !1;
        if (e.scheme === Lt.file) {
          let r = ar(e);
          n = r !== void 0 && r.length === _p(r).length && r[r.length - 1] === t;
        } else {
          t = "/";
          let r = e.path;
          n = r.length === 1 && r.charCodeAt(r.length - 1) === O.Slash;
        }
        return !n && !yp(e, t) ? e.with({ path: e.path + "/" }) : e;
      }
    }, Me = new lb(() => !1);
    Me.isEqual.bind(Me), Me.isEqualOrParent.bind(Me), Me.getComparisonKey.bind(Me), Me.basenameOrAuthority.bind(Me);
    var cb = Me.basename.bind(Me);
    Me.extname.bind(Me), Me.dirname.bind(Me), Me.joinPath.bind(Me), Me.normalizePath.bind(Me), Me.relativePath.bind(Me), Me.resolvePath.bind(Me), Me.isAbsolutePath.bind(Me);
    var bp = Me.isEqualAuthority.bind(Me), yp = Me.hasTrailingPathSeparator.bind(Me);
    Me.removeTrailingPathSeparator.bind(Me), Me.addTrailingPathSeparator.bind(Me);
    var Np;
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
    })(Np || (Np = {}));
    var Cp;
    (function(e) {
      e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
    })(Cp || (Cp = {}));
    var Tp;
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
    })(Tp || (Tp = {}));
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
        this._state = Cn.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new ln(), queueMicrotask(async () => {
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
            await Us.toPromise(this._onStateChanged.event);
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
    var db = class {
      constructor(e) {
        this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
      }
      getCount() {
        return this.values.length;
      }
      insertValues(e, t) {
        e = Ri(e);
        let n = this.values, r = this.prefixSum, i = t.length;
        return i === 0 ? !1 : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      setValue(e, t) {
        return e = Ri(e), t = Ri(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
      }
      removeValues(e, t) {
        e = Ri(e), t = Ri(t);
        let n = this.values, r = this.prefixSum;
        if (e >= n.length) return !1;
        let i = n.length - e;
        return t >= i && (t = i), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      getTotalSum() {
        return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
      }
      getPrefixSum(e) {
        return e < 0 ? 0 : (e = Ri(e), this._getPrefixSum(e));
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
        return new hb(r, e - a);
      }
    }, hb = class {
      constructor(e, t) {
        this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
      }
    }, fb = class {
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
          this._lineStarts = new db(n);
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
        let n = jh(t);
        if (n.length === 1) {
          this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
          return;
        }
        n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
        let r = new Uint32Array(n.length - 1);
        for (let i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
        this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
      }
    }, pb = "workerTextModelSync", mb = class {
      constructor() {
        this._models = /* @__PURE__ */ Object.create(null);
      }
      bindToServer(e) {
        e.setChannel(pb, this);
      }
      getModel(e) {
        return this._models[e];
      }
      getModels() {
        let e = [];
        return Object.keys(this._models).forEach((t) => e.push(this._models[t])), e;
      }
      $acceptNewModel(e) {
        this._models[e.url] = new gb(Yt.parse(e.url), e.lines, e.EOL, e.versionId);
      }
      $acceptModelChanged(e, t) {
        this._models[e] && this._models[e].onEvents(t);
      }
      $acceptRemovedModel(e) {
        this._models[e] && delete this._models[e];
      }
    }, gb = class extends fb {
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
        let n = cl(e.column, K1(t), this._lines[e.lineNumber - 1], 0);
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
    }, wp = class {
      constructor(e) {
        this.replacements = e;
        let t = -1;
        for (let n of e) {
          if (!(n.replaceRange.start >= t)) throw new lt(`Edits must be disjoint and sorted. Found ${n} after ${t}`);
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
          let o = a, u, l;
          for (; ; ) {
            let c = r[0];
            if (!c || c.replaceRange.start + a > s.replaceRange.endExclusive) break;
            u || (u = c), l = c, r.shift(), a += c.getNewLength() - c.replaceRange.length;
          }
          if (!u) i.push(s.delta(-a));
          else {
            let c = Math.min(u.replaceRange.start, s.replaceRange.start - o), f = s.replaceRange.start - (u.replaceRange.start + o);
            if (f > 0) {
              let _ = u.slice(Ee.emptyAt(c), new Ee(0, f));
              i.push(_);
            }
            if (!l) throw new lt("Invariant violation: lastIntersecting is undefined");
            let p = l.replaceRange.endExclusive + a - s.replaceRange.endExclusive;
            if (p > 0) {
              let _ = l.slice(Ee.ofStartAndLength(l.replaceRange.endExclusive, 0), new Ee(l.getNewLength() - p, l.getNewLength()));
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
        return l_(this.replacements, (e) => e.getLengthDelta());
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
    }, Eb = class {
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
    Hn = class extends wp {
      static create(t) {
        return new Hn(t);
      }
      static single(t) {
        return new Hn([t]);
      }
      _createNew(t) {
        return new Hn(t);
      }
    }, Hn.empty = new Hn([]);
    var Ap = class extends wp {
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
        return new Lr(t);
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
        return new Lr(n);
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
        return new Lr(t);
      }
      normalizeEOL(e) {
        return new Lr(this.replacements.map((t) => t.normalizeEOL(e)));
      }
      normalizeOnSource(e) {
        let t = this.apply(e), n = dn.replace(Ee.ofLength(e.length), t).removeCommonSuffixAndPrefix(e);
        return n.isEmpty ? Lr.empty : n.toEdit();
      }
      removeCommonSuffixAndPrefix(e) {
        return this._createNew(this.replacements.map((t) => t.removeCommonSuffixAndPrefix(e))).normalize();
      }
      applyOnText(e) {
        return new ka(this.apply(e.value));
      }
      mapData(e) {
        return new _b(this.replacements.map((t) => new ao(t.replaceRange, t.newText, e(t))));
      }
    }, Sp = class extends Eb {
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
        let t = e.substring(this.replaceRange.start, this.replaceRange.endExclusive), n = js(t, this.newText), r = Math.min(t.length - n, this.newText.length - n, qu(t, this.newText)), i = new Ee(this.replaceRange.start + n, this.replaceRange.endExclusive - r), a = this.newText.substring(n, this.newText.length - r);
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
        let t = this.replaceRange.substring(e), n = js(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaStart(n), new Ee(n, this.newText.length));
      }
      removeCommonSuffix(e) {
        let t = this.replaceRange.substring(e), n = qu(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaEnd(-n), new Ee(0, this.newText.length - n));
      }
      toEdit() {
        return new Lr([this]);
      }
    }, Lr = (Ct = class extends Ap {
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
    }, Ct.empty = new Ct([]), Ct), dn = class _i extends Sp {
      static insert(t, n) {
        return new _i(Ee.emptyAt(t), n);
      }
      static replace(t, n) {
        return new _i(t, n);
      }
      static delete(t) {
        return new _i(t, "");
      }
      static fromJson(t) {
        return new _i(Ee.ofStartAndLength(t.pos, t.len), t.txt);
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
      }
      tryJoinTouching(t) {
        return new _i(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText);
      }
      slice(t, n) {
        return new _i(t, n.substring(this.newText));
      }
    }, _b = (Jt = class extends Ap {
      static create(t) {
        return new Jt(t);
      }
      static single(t) {
        return new Jt([t]);
      }
      static replace(t, n, r) {
        return new Jt([new ao(t, n, r)]);
      }
      static insert(t, n, r) {
        return new Jt([new ao(Ee.emptyAt(t), n, r)]);
      }
      static delete(t, n) {
        return new Jt([new ao(t, "", n)]);
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
        return new Lr(this.replacements.map((t) => new dn(t.replaceRange, t.newText)));
      }
    }, Jt.empty = new Jt([]), Jt), ao = class ha extends Sp {
      static insert(t, n, r) {
        return new ha(Ee.emptyAt(t), n, r);
      }
      static replace(t, n, r) {
        return new ha(t, n, r);
      }
      static delete(t, n) {
        return new ha(t, "", n);
      }
      constructor(t, n, r) {
        super(t, n), this.data = r;
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
      }
      tryJoinTouching(t) {
        let n = this.data.join(t.data);
        if (n !== void 0) return new ha(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText, n);
      }
      slice(t, n) {
        return new ha(t, n ? n.substring(this.newText) : this.newText, this.data);
      }
    };
    vv({ StringEdit: Lr, StringReplacement: dn, TextReplacement: rr, TextEdit: dl, TextLength: xa });
    var Lp = (In = class {
      constructor(t = null) {
        this._foreignModule = t, this._workerTextModelSyncServer = new mb();
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
        return i ? gv.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
      }
      async $findSectionHeaders(t, n) {
        let r = this._getModel(t);
        return r ? Xv(r, n) : [];
      }
      async $computeDiff(t, n, r, i) {
        let a = this._getModel(t), s = this._getModel(n);
        return !a || !s ? null : In.computeDiff(a, s, r, i);
      }
      static computeDiff(t, n, r, i) {
        let a = i === "advanced" ? Ma.getDefault() : Ma.getLegacy(), s = t.getLinesContent(), o = n.getLinesContent(), u = a.computeDiff(s, o, r), l = u.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
        function c(f) {
          return f.map((p) => {
            var m;
            return [p.original.startLineNumber, p.original.endLineNumberExclusive, p.modified.startLineNumber, p.modified.endLineNumberExclusive, (m = p.innerChanges) == null ? void 0 : m.map((g) => [g.originalRange.startLineNumber, g.originalRange.startColumn, g.originalRange.endLineNumber, g.originalRange.endColumn, g.modifiedRange.startLineNumber, g.modifiedRange.startColumn, g.modifiedRange.endLineNumber, g.modifiedRange.endColumn])];
          });
        }
        return { identical: l, quitEarly: u.hitTimeout, changes: c(u.changes), moves: u.moves.map((f) => [f.lineRangeMapping.original.startLineNumber, f.lineRangeMapping.original.endLineNumberExclusive, f.lineRangeMapping.modified.startLineNumber, f.lineRangeMapping.modified.endLineNumberExclusive, c(f.changes)]) };
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
        return new Q1(s, o, { shouldComputeCharChanges: !1, shouldPostProcessCharChanges: !1, shouldIgnoreTrimWhitespace: r, shouldMakePrettyDiff: !0, maxComputationTime: 1e3 }).computeDiff().changes;
      }
      $computeStringDiff(t, n, r, i) {
        let a = i === "advanced" ? Ma.getDefault() : Ma.getLegacy(), s = new ka(t), o = s.getLines(), u = new ka(n), l = u.getLines(), c = a.computeDiff(o, l, { ignoreTrimWhitespace: !1, maxComputationTimeMs: r.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), f = Vi.toTextEdit(c.changes, u);
        return s.getTransformer().getStringEdit(f).toJson();
      }
      async $computeMoreMinimalEdits(t, n, r) {
        let i = this._getModel(t);
        if (!i) return n;
        let a = [], s;
        n = n.slice(0).sort((u, l) => {
          if (u.range && l.range) return fe.compareRangesUsingStarts(u.range, l.range);
          let c = u.range ? 0 : 1, f = l.range ? 0 : 1;
          return c - f;
        });
        let o = 0;
        for (let u = 1; u < n.length; u++) fe.getEndPosition(n[o].range).equals(fe.getStartPosition(n[u].range)) ? (n[o].range = fe.fromPositions(fe.getStartPosition(n[o].range), fe.getEndPosition(n[u].range)), n[o].text += n[u].text) : (o++, n[o] = n[u]);
        n.length = o + 1;
        for (let { range: u, text: l, eol: c } of n) {
          if (typeof c == "number" && (s = c), fe.isEmpty(u) && !l) continue;
          let f = i.getValueInRange(u);
          if (l = l.replace(/\r\n|\n|\r/g, i.eol), f === l) continue;
          if (Math.max(l.length, f.length) > In._diffLimit) {
            a.push({ range: u, text: l });
            continue;
          }
          let p = _D(f, l, r), m = i.offsetAt(fe.lift(u).getStartPosition());
          for (let g of p) {
            let _ = i.positionAt(m + g.originalStart), L = i.positionAt(m + g.originalStart + g.originalLength), A = { text: l.substr(g.modifiedStart, g.modifiedLength), range: { startLineNumber: _.lineNumber, startColumn: _.column, endLineNumber: L.lineNumber, endColumn: L.column } };
            i.getValueInRange(A.range) !== A.text && a.push(A);
          }
        }
        return typeof s == "number" && a.push({ eol: s, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), a;
      }
      $computeHumanReadableDiff(t, n, r) {
        let i = this._getModel(t);
        if (!i) return n;
        let a = [], s;
        n = n.slice(0).sort((o, u) => {
          if (o.range && u.range) return fe.compareRangesUsingStarts(o.range, u.range);
          let l = o.range ? 0 : 1, c = u.range ? 0 : 1;
          return l - c;
        });
        for (let { range: o, text: u, eol: l } of n) {
          let c = function(A, F) {
            return new Te(A.lineNumber + F.lineNumber - 1, F.lineNumber === 1 ? A.column + F.column - 1 : F.column);
          }, f = function(A, F) {
            let C = [];
            for (let x = F.startLineNumber; x <= F.endLineNumber; x++) {
              let U = A[x - 1];
              x === F.startLineNumber && x === F.endLineNumber ? C.push(U.substring(F.startColumn - 1, F.endColumn - 1)) : x === F.startLineNumber ? C.push(U.substring(F.startColumn - 1)) : x === F.endLineNumber ? C.push(U.substring(0, F.endColumn - 1)) : C.push(U);
            }
            return C;
          };
          if (typeof l == "number" && (s = l), fe.isEmpty(o) && !u) continue;
          let p = i.getValueInRange(o);
          if (u = u.replace(/\r\n|\n|\r/g, i.eol), p === u) continue;
          if (Math.max(u.length, p.length) > In._diffLimit) {
            a.push({ range: o, text: u });
            continue;
          }
          let m = p.split(/\r\n|\n|\r/), g = u.split(/\r\n|\n|\r/), _ = Ma.getDefault().computeDiff(m, g, r), L = fe.lift(o).getStartPosition();
          for (let A of _.changes) if (A.innerChanges) for (let F of A.innerChanges) a.push({ range: fe.fromPositions(c(L, F.originalRange.getStartPosition()), c(L, F.originalRange.getEndPosition())), text: f(g, F.modifiedRange).join(i.eol) });
          else throw new lt("The experimental diff algorithm always produces inner changes");
        }
        return typeof s == "number" && a.push({ eol: s, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), a;
      }
      async $computeLinks(t) {
        let n = this._getModel(t);
        return n ? TD(n) : null;
      }
      async $computeDefaultDocumentColors(t) {
        let n = this._getModel(t);
        return n ? Wv(n) : null;
      }
      async $textualSuggest(t, n, r, i) {
        let a = new xh(), s = new RegExp(r, i), o = /* @__PURE__ */ new Set();
        e: for (let u of t) {
          let l = this._getModel(u);
          if (l) {
            for (let c of l.words(s)) if (!(c === n || !isNaN(Number(c))) && (o.add(c), o.size > In._suggestionsLimit)) break e;
          }
        }
        return { words: Array.from(o), duration: a.elapsed() };
      }
      async $computeWordRanges(t, n, r, i) {
        let a = this._getModel(t);
        if (!a) return /* @__PURE__ */ Object.create(null);
        let s = new RegExp(r, i), o = /* @__PURE__ */ Object.create(null);
        for (let u = n.startLineNumber; u < n.endLineNumber; u++) {
          let l = a.getLineWords(u, s);
          for (let c of l) {
            if (!isNaN(Number(c.word))) continue;
            let f = o[c.word];
            f || (f = [], o[c.word] = f), f.push({ startLineNumber: u, startColumn: c.startColumn, endLineNumber: u, endColumn: c.endColumn });
          }
        }
        return o;
      }
      async $navigateValueSet(t, n, r, i, a) {
        let s = this._getModel(t);
        if (!s) return null;
        let o = new RegExp(i, a);
        n.startColumn === n.endColumn && (n = { startLineNumber: n.startLineNumber, startColumn: n.startColumn, endLineNumber: n.endLineNumber, endColumn: n.endColumn + 1 });
        let u = s.getValueInRange(n), l = s.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, o);
        if (!l) return null;
        let c = s.getValueInRange(l);
        return wD.INSTANCE.navigateValueSet(n, u, l, c, r);
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
    typeof importScripts == "function" && (globalThis.monaco = ov()), gD(() => new Lp(null));
    var Db = (Ur = class {
      static getChannel(t) {
        return t.getChannel(Ur.CHANNEL_NAME);
      }
      static setChannel(t, n) {
        t.setChannel(Ur.CHANNEL_NAME, n);
      }
    }, Ur.CHANNEL_NAME = "editorWorkerHost", Ur);
    function vb(e) {
      let t = Jh(() => new Lp(e)), n = Db.getChannel(t);
      return { host: new Proxy({}, { get(r, i, a) {
        if (typeof i != "string") throw new Error("Not supported");
        return (...s) => n.$fhr(i, s);
      } }), getMirrorModels: () => t.requestHandler.getModels() };
    }
    function bb(e) {
      let t, n = new Proxy({}, { get(i, a) {
        if (a === "$initialize") return async (o) => {
          t || (t = e(r, o));
        };
        let s = t == null ? void 0 : t[a];
        return typeof s == "function" ? s.bind(t) : s;
      } }), r = vb(n);
    }
    function Re(e, t) {
      throw new Error(t);
    }
    function sr(e) {
      return typeof e == "object" && e !== null;
    }
    function Xt(e, t) {
      throw new Error(t ?? "Unexpected invariant triggered.");
    }
    var yb = /\r\n|[\n\r]/g;
    function Dl(e, t) {
      let n = 0, r = 1;
      for (let i of e.body.matchAll(yb)) {
        if (typeof i.index == "number" || Xt(), i.index >= t) break;
        n = i.index + i[0].length, r += 1;
      }
      return { line: r, column: t + 1 - n };
    }
    function Nb(e) {
      return Fp(e.source, Dl(e.source, e.start));
    }
    function Fp(e, t) {
      let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${s}:${u}
`, c = r.split(/\r\n|[\n\r]/g), f = c[i];
      if (f.length > 120) {
        let p = Math.floor(u / 80), m = u % 80, g = [];
        for (let _ = 0; _ < f.length; _ += 80) g.push(f.slice(_, _ + 80));
        return l + Ip([[`${s} |`, g[0]], ...g.slice(1, p + 1).map((_) => ["|", _]), ["|", "^".padStart(m)], ["|", g[p + 1]]]);
      }
      return l + Ip([[`${s - 1} |`, c[i - 1]], [`${s} |`, f], ["|", "^".padStart(u)], [`${s + 1} |`, c[i + 1]]]);
    }
    function Ip(e) {
      let t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
      return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
    }
    function Cb(e) {
      let t = e[0];
      return t == null || "kind" in t || "length" in t ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] } : t;
    }
    var Y = class V0 extends Error {
      constructor(t, ...n) {
        var r, i, a;
        let { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: f } = Cb(n);
        super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Rp(Array.isArray(s) ? s : s ? [s] : void 0);
        let p = Rp((r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null));
        this.source = o ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (p == null ? void 0 : p.map((g) => g.start)), this.locations = u && o ? u.map((g) => Dl(o, g)) : p == null ? void 0 : p.map((g) => Dl(g.source, g.start));
        let m = sr(c == null ? void 0 : c.extensions) ? c == null ? void 0 : c.extensions : void 0;
        this.extensions = (a = f ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), c != null && c.stack ? Object.defineProperty(this, "stack", { value: c.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, V0) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let t = this.message;
        if (this.nodes) for (let n of this.nodes) n.loc && (t += `

` + Nb(n.loc));
        else if (this.source && this.locations) for (let n of this.locations) t += `

` + Fp(this.source, n);
        return t;
      }
      toJSON() {
        let t = { message: this.message };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
      }
    };
    function Rp(e) {
      return e === void 0 || e.length === 0 ? void 0 : e;
    }
    function bt(e, t, n) {
      return new Y(`Syntax Error: ${n}`, { source: e, positions: [t] });
    }
    var Tb = class {
      constructor(e, t, n) {
        this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return { start: this.start, end: this.end };
      }
    }, Op = class {
      constructor(e, t, n, r, i, a) {
        this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return { kind: this.kind, value: this.value, line: this.line, column: this.column };
      }
    }, xp = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] }, wb = new Set(Object.keys(xp));
    function vl(e) {
      let t = e == null ? void 0 : e.kind;
      return typeof t == "string" && wb.has(t);
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
    function bl(e) {
      return e === 9 || e === 32;
    }
    function Ba(e) {
      return e >= 48 && e <= 57;
    }
    function kp(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90;
    }
    function yl(e) {
      return kp(e) || e === 95;
    }
    function Mp(e) {
      return kp(e) || Ba(e) || e === 95;
    }
    function Ab(e) {
      var t;
      let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
      for (let s = 0; s < e.length; ++s) {
        var a;
        let o = e[s], u = Sb(o);
        u !== o.length && (r = (a = r) !== null && a !== void 0 ? a : s, i = s, s !== 0 && u < n && (n = u));
      }
      return e.map((s, o) => o === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
    }
    function Sb(e) {
      let t = 0;
      for (; t < e.length && bl(e.charCodeAt(t)); ) ++t;
      return t;
    }
    function Lb(e, t) {
      let n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((m) => m.length === 0 || bl(m.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, u = e.endsWith("\\"), l = o || u, c = !i || e.length > 70 || l || a || s, f = "", p = i && bl(e.charCodeAt(0));
      return (c && !p || a) && (f += `
`), f += n, (c || l) && (f += `
`), '"""' + f + '"""';
    }
    var H;
    (function(e) {
      e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
    })(H || (H = {}));
    var Fb = class {
      constructor(e) {
        let t = new Op(H.SOF, 0, 0, 0, 0);
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
            let t = Rb(this, e.end);
            e.next = t, t.prev = e, e = t;
          }
        while (e.kind === H.COMMENT);
        return e;
      }
    };
    function Ib(e) {
      return e === H.BANG || e === H.DOLLAR || e === H.AMP || e === H.PAREN_L || e === H.PAREN_R || e === H.SPREAD || e === H.COLON || e === H.EQUALS || e === H.AT || e === H.BRACKET_L || e === H.BRACKET_R || e === H.BRACE_L || e === H.PIPE || e === H.BRACE_R;
    }
    function ji(e) {
      return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
    }
    function so(e, t) {
      return Up(e.charCodeAt(t)) && Pp(e.charCodeAt(t + 1));
    }
    function Up(e) {
      return e >= 55296 && e <= 56319;
    }
    function Pp(e) {
      return e >= 56320 && e <= 57343;
    }
    function Qr(e, t) {
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
      return new Op(t, n, r, a, s, i);
    }
    function Rb(e, t) {
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
            return Ob(e, i);
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
            return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? Bb(e, i) : kb(e, i);
        }
        if (Ba(a) || a === 45) return xb(e, i, a);
        if (yl(a)) return Vb(e, i);
        throw bt(e.source, i, a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ji(a) || so(n, i) ? `Unexpected character: ${Qr(e, i)}.` : `Invalid character: ${Qr(e, i)}.`);
      }
      return ct(e, H.EOF, r, r);
    }
    function Ob(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (a === 10 || a === 13) break;
        if (ji(a)) ++i;
        else if (so(n, i)) i += 2;
        else break;
      }
      return ct(e, H.COMMENT, t, i, n.slice(t + 1, i));
    }
    function xb(e, t, n) {
      let r = e.source.body, i = t, a = n, s = !1;
      if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
        if (a = r.charCodeAt(++i), Ba(a)) throw bt(e.source, i, `Invalid number, unexpected digit after 0: ${Qr(e, i)}.`);
      } else i = Nl(e, i, a), a = r.charCodeAt(i);
      if (a === 46 && (s = !0, a = r.charCodeAt(++i), i = Nl(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = Nl(e, i, a), a = r.charCodeAt(i)), a === 46 || yl(a)) throw bt(e.source, i, `Invalid number, expected digit but got: ${Qr(e, i)}.`);
      return ct(e, s ? H.FLOAT : H.INT, t, i, r.slice(t, i));
    }
    function Nl(e, t, n) {
      if (!Ba(n)) throw bt(e.source, t, `Invalid number, expected digit but got: ${Qr(e, t)}.`);
      let r = e.source.body, i = t + 1;
      for (; Ba(r.charCodeAt(i)); ) ++i;
      return i;
    }
    function kb(e, t) {
      let n = e.source.body, r = n.length, i = t + 1, a = i, s = "";
      for (; i < r; ) {
        let o = n.charCodeAt(i);
        if (o === 34) return s += n.slice(a, i), ct(e, H.STRING, t, i + 1, s);
        if (o === 92) {
          s += n.slice(a, i);
          let u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Mb(e, i) : Ub(e, i) : Pb(e, i);
          s += u.value, i += u.size, a = i;
          continue;
        }
        if (o === 10 || o === 13) break;
        if (ji(o)) ++i;
        else if (so(n, i)) i += 2;
        else throw bt(e.source, i, `Invalid character within String: ${Qr(e, i)}.`);
      }
      throw bt(e.source, i, "Unterminated string.");
    }
    function Mb(e, t) {
      let n = e.source.body, r = 0, i = 3;
      for (; i < 12; ) {
        let a = n.charCodeAt(t + i++);
        if (a === 125) {
          if (i < 5 || !ji(r)) break;
          return { value: String.fromCodePoint(r), size: i };
        }
        if (r = r << 4 | Va(a), r < 0) break;
      }
      throw bt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
    }
    function Ub(e, t) {
      let n = e.source.body, r = Bp(n, t + 2);
      if (ji(r)) return { value: String.fromCodePoint(r), size: 6 };
      if (Up(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        let i = Bp(n, t + 8);
        if (Pp(i)) return { value: String.fromCodePoint(r, i), size: 12 };
      }
      throw bt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
    }
    function Bp(e, t) {
      return Va(e.charCodeAt(t)) << 12 | Va(e.charCodeAt(t + 1)) << 8 | Va(e.charCodeAt(t + 2)) << 4 | Va(e.charCodeAt(t + 3));
    }
    function Va(e) {
      return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
    }
    function Pb(e, t) {
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
    function Bb(e, t) {
      let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, s = a, o = "", u = [];
      for (; a < r; ) {
        let l = n.charCodeAt(a);
        if (l === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
          o += n.slice(s, a), u.push(o);
          let c = ct(e, H.BLOCK_STRING, t, a + 3, Ab(u).join(`
`));
          return e.line += u.length - 1, e.lineStart = i, c;
        }
        if (l === 92 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 && n.charCodeAt(a + 3) === 34) {
          o += n.slice(s, a), s = a + 1, a += 4;
          continue;
        }
        if (l === 10 || l === 13) {
          o += n.slice(s, a), u.push(o), l === 13 && n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, o = "", s = a, i = a;
          continue;
        }
        if (ji(l)) ++a;
        else if (so(n, a)) a += 2;
        else throw bt(e.source, a, `Invalid character within String: ${Qr(e, a)}.`);
      }
      throw bt(e.source, a, "Unterminated string.");
    }
    function Vb(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (Mp(a)) ++i;
        else break;
      }
      return ct(e, H.NAME, t, i, n.slice(t, i));
    }
    function Q(e) {
      return oo(e, []);
    }
    function oo(e, t) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
          return $b(e, t);
        default:
          return String(e);
      }
    }
    function $b(e, t) {
      if (e === null) return "null";
      if (t.includes(e)) return "[Circular]";
      let n = [...t, e];
      if (Kb(e)) {
        let r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : oo(r, n);
      } else if (Array.isArray(e)) return qb(e, n);
      return jb(e, n);
    }
    function Kb(e) {
      return typeof e.toJSON == "function";
    }
    function jb(e, t) {
      let n = Object.entries(e);
      return n.length === 0 ? "{}" : t.length > 2 ? "[" + Gb(e) + "]" : "{ " + n.map(([r, i]) => r + ": " + oo(i, t)).join(", ") + " }";
    }
    function qb(e, t) {
      if (e.length === 0) return "[]";
      if (t.length > 2) return "[Array]";
      let n = Math.min(10, e.length), r = e.length - n, i = [];
      for (let a = 0; a < n; ++a) i.push(oo(e[a], t));
      return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
    }
    function Gb(e) {
      let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
      if (t === "Object" && typeof e.constructor == "function") {
        let n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n;
      }
      return t;
    }
    var Hb = globalThis.process && !0, Tn = Hb ? function(e, t) {
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
    }, Vp = class {
      constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
        typeof e == "string" || Re(!1, `Body must be a string. Received: ${Q(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Re(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Re(!1, "column in locationOffset is 1-indexed and must be positive.");
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
    function Wb(e) {
      return Tn(e, Vp);
    }
    function uo(e, t) {
      let n = new $p(e, t), r = n.parseDocument();
      return Object.defineProperty(r, "tokenCount", { enumerable: !1, value: n.tokenCount }), r;
    }
    function Yb(e, t) {
      let n = new $p(e, t);
      n.expectToken(H.SOF);
      let r = n.parseValueLiteral(!1);
      return n.expectToken(H.EOF), r;
    }
    var $p = class {
      constructor(e, t = {}) {
        let n = Wb(e) ? e : new Vp(e);
        this._lexer = new Fb(n), this._options = t, this._tokenCounter = 0;
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
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw bt(this._lexer.source, this._lexer.token.start, `${lo(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
        return this._options.noLocation !== !0 && (t.loc = new Tb(e, this._lexer.lastToken, this._lexer.source)), t;
      }
      peek(e) {
        return this._lexer.token.kind === e;
      }
      expectToken(e) {
        let t = this._lexer.token;
        if (t.kind === e) return this.advanceLexer(), t;
        throw bt(this._lexer.source, t.start, `Expected ${Kp(e)}, found ${lo(t)}.`);
      }
      expectOptionalToken(e) {
        return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
      }
      expectKeyword(e) {
        let t = this._lexer.token;
        if (t.kind === H.NAME && t.value === e) this.advanceLexer();
        else throw bt(this._lexer.source, t.start, `Expected "${e}", found ${lo(t)}.`);
      }
      expectOptionalKeyword(e) {
        let t = this._lexer.token;
        return t.kind === H.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
      }
      unexpected(e) {
        let t = e ?? this._lexer.token;
        return bt(this._lexer.source, t.start, `Unexpected ${lo(t)}.`);
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
    function lo(e) {
      let t = e.value;
      return Kp(e.kind) + (t != null ? ` "${t}"` : "");
    }
    function Kp(e) {
      return Ib(e) ? `"${e}"` : e;
    }
    function Fr(e, t) {
      let [n, r] = t ? [e, t] : [void 0, e], i = " Did you mean ";
      n && (i += n + " ");
      let a = r.map((u) => `"${u}"`);
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
    function jp(e) {
      return e;
    }
    function Zr(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) n[t(r)] = r;
      return n;
    }
    function ei(e, t, n) {
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of e) r[t(i)] = n(i);
      return r;
    }
    function or(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.keys(e)) n[r] = t(e[r], r);
      return n;
    }
    function Cl(e, t) {
      let n = 0, r = 0;
      for (; n < e.length && r < t.length; ) {
        let i = e.charCodeAt(n), a = t.charCodeAt(r);
        if (co(i) && co(a)) {
          let s = 0;
          do
            ++n, s = s * 10 + i - Tl, i = e.charCodeAt(n);
          while (co(i) && s > 0);
          let o = 0;
          do
            ++r, o = o * 10 + a - Tl, a = t.charCodeAt(r);
          while (co(a) && o > 0);
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
    var Tl = 48, zb = 57;
    function co(e) {
      return !isNaN(e) && Tl <= e && e <= zb;
    }
    function ti(e, t) {
      let n = /* @__PURE__ */ Object.create(null), r = new Xb(e), i = Math.floor(e.length * 0.4) + 1;
      for (let a of t) {
        let s = r.measure(a, i);
        s !== void 0 && (n[a] = s);
      }
      return Object.keys(n).sort((a, s) => {
        let o = n[a] - n[s];
        return o !== 0 ? o : Cl(a, s);
      });
    }
    var Xb = class {
      constructor(e) {
        this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = qp(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)];
      }
      measure(e, t) {
        if (this._input === e) return 0;
        let n = e.toLowerCase();
        if (this._inputLowerCase === n) return 1;
        let r = qp(n), i = this._inputArray;
        if (r.length < i.length) {
          let l = r;
          r = i, i = l;
        }
        let a = r.length, s = i.length;
        if (a - s > t) return;
        let o = this._rows;
        for (let l = 0; l <= s; l++) o[0][l] = l;
        for (let l = 1; l <= a; l++) {
          let c = o[(l - 1) % 3], f = o[l % 3], p = f[0] = l;
          for (let m = 1; m <= s; m++) {
            let g = r[l - 1] === i[m - 1] ? 0 : 1, _ = Math.min(c[m] + 1, f[m - 1] + 1, c[m - 1] + g);
            if (l > 1 && m > 1 && r[l - 1] === i[m - 2] && r[l - 2] === i[m - 1]) {
              let L = o[(l - 2) % 3][m - 2];
              _ = Math.min(_, L + 1);
            }
            _ < p && (p = _), f[m] = _;
          }
          if (p > t) return;
        }
        let u = o[a % 3][s];
        return u <= t ? u : void 0;
      }
    };
    function qp(e) {
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
    function Jb(e) {
      return `"${e.replace(Qb, Zb)}"`;
    }
    var Qb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function Zb(e) {
      return ey[e.charCodeAt(0)];
    }
    var ey = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"], qi = Object.freeze({});
    function Ir(e, t, n = xp) {
      let r = /* @__PURE__ */ new Map();
      for (let A of Object.values(v)) r.set(A, ho(t, A));
      let i, a = Array.isArray(e), s = [e], o = -1, u = [], l = e, c, f, p = [], m = [];
      do {
        o++;
        let A = o === s.length, F = A && u.length !== 0;
        if (A) {
          if (c = m.length === 0 ? void 0 : p[p.length - 1], l = f, f = m.pop(), F) if (a) {
            l = l.slice();
            let x = 0;
            for (let [U, q] of u) {
              let I = U - x;
              q === null ? (l.splice(I, 1), x++) : l[I] = q;
            }
          } else {
            l = { ...l };
            for (let [x, U] of u) l[x] = U;
          }
          o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
        } else if (f) {
          if (c = a ? o : s[o], l = f[c], l == null) continue;
          p.push(c);
        }
        let C;
        if (!Array.isArray(l)) {
          var g, _;
          vl(l) || Re(!1, `Invalid AST Node: ${Q(l)}.`);
          let x = A ? (g = r.get(l.kind)) === null || g === void 0 ? void 0 : g.leave : (_ = r.get(l.kind)) === null || _ === void 0 ? void 0 : _.enter;
          if (C = x == null ? void 0 : x.call(t, l, c, f, p, m), C === qi) break;
          if (C === !1) {
            if (!A) {
              p.pop();
              continue;
            }
          } else if (C !== void 0 && (u.push([c, C]), !A)) if (vl(C)) l = C;
          else {
            p.pop();
            continue;
          }
        }
        if (C === void 0 && F && u.push([c, l]), A) p.pop();
        else {
          var L;
          i = { inArray: a, index: o, keys: s, edits: u, prev: i }, a = Array.isArray(l), s = a ? l : (L = n[l.kind]) !== null && L !== void 0 ? L : [], o = -1, u = [], f && m.push(f), f = l;
        }
      } while (i !== void 0);
      return u.length !== 0 ? u[u.length - 1][1] : e;
    }
    function Gp(e) {
      let t = new Array(e.length).fill(null), n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.values(v)) {
        let i = !1, a = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
        for (let u = 0; u < e.length; ++u) {
          let { enter: l, leave: c } = ho(e[u], r);
          i || (i = l != null || c != null), a[u] = l, s[u] = c;
        }
        if (!i) continue;
        let o = { enter(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++) if (t[f] === null) {
            var c;
            let p = (c = a[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
            if (p === !1) t[f] = l;
            else if (p === qi) t[f] = qi;
            else if (p !== void 0) return p;
          }
        }, leave(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++) if (t[f] === null) {
            var c;
            let p = (c = s[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
            if (p === qi) t[f] = qi;
            else if (p !== void 0 && p !== !1) return p;
          } else t[f] === l && (t[f] = null);
        } };
        n[r] = o;
      }
      return n;
    }
    function ho(e, t) {
      let n = e[t];
      return typeof n == "object" ? n : typeof n == "function" ? { enter: n, leave: void 0 } : { enter: e.enter, leave: e.leave };
    }
    function Et(e) {
      return Ir(e, ny);
    }
    var ty = 80, ny = { Name: { leave: (e) => e.value }, Variable: { leave: (e) => "$" + e.name }, Document: { leave: (e) => ce(e.definitions, `

`) }, OperationDefinition: { leave(e) {
      let t = Ae("(", ce(e.variableDefinitions, ", "), ")"), n = ce([e.operation, ce([e.name, t]), ce(e.directives, " ")], " ");
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    } }, VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + Ae(" = ", n) + Ae(" ", ce(r, " ")) }, SelectionSet: { leave: ({ selections: e }) => wn(e) }, Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      let a = Ae("", e, ": ") + t, s = a + Ae("(", ce(n, ", "), ")");
      return s.length > ty && (s = a + Ae(`(
`, fo(ce(n, `
`)), `
)`)), ce([s, ce(r, " "), i], " ");
    } }, Argument: { leave: ({ name: e, value: t }) => e + ": " + t }, FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + Ae(" ", ce(t, " ")) }, InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => ce(["...", Ae("on ", e), ce(t, " "), n], " ") }, FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => `fragment ${e}${Ae("(", ce(n, ", "), ")")} on ${t} ${Ae("", ce(r, " "), " ")}` + i }, IntValue: { leave: ({ value: e }) => e }, FloatValue: { leave: ({ value: e }) => e }, StringValue: { leave: ({ value: e, block: t }) => t ? Lb(e) : Jb(e) }, BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" }, NullValue: { leave: () => "null" }, EnumValue: { leave: ({ value: e }) => e }, ListValue: { leave: ({ values: e }) => "[" + ce(e, ", ") + "]" }, ObjectValue: { leave: ({ fields: e }) => "{" + ce(e, ", ") + "}" }, ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t }, Directive: { leave: ({ name: e, arguments: t }) => "@" + e + Ae("(", ce(t, ", "), ")") }, NamedType: { leave: ({ name: e }) => e }, ListType: { leave: ({ type: e }) => "[" + e + "]" }, NonNullType: { leave: ({ type: e }) => e + "!" }, SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => Ae("", e, `
`) + ce(["schema", ce(t, " "), wn(n)], " ") }, OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t }, ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + ce(["scalar", t, ce(n, " ")], " ") }, ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + ce(["type", t, Ae("implements ", ce(n, " & ")), ce(r, " "), wn(i)], " ") }, FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => Ae("", e, `
`) + t + (Hp(n) ? Ae(`(
`, fo(ce(n, `
`)), `
)`) : Ae("(", ce(n, ", "), ")")) + ": " + r + Ae(" ", ce(i, " ")) }, InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => Ae("", e, `
`) + ce([t + ": " + n, Ae("= ", r), ce(i, " ")], " ") }, InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + ce(["interface", t, Ae("implements ", ce(n, " & ")), ce(r, " "), wn(i)], " ") }, UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => Ae("", e, `
`) + ce(["union", t, ce(n, " "), Ae("= ", ce(r, " | "))], " ") }, EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => Ae("", e, `
`) + ce(["enum", t, ce(n, " "), wn(r)], " ") }, EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + ce([t, ce(n, " ")], " ") }, InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => Ae("", e, `
`) + ce(["input", t, ce(n, " "), wn(r)], " ") }, DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => Ae("", e, `
`) + "directive @" + t + (Hp(n) ? Ae(`(
`, fo(ce(n, `
`)), `
)`) : Ae("(", ce(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + ce(i, " | ") }, SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => ce(["extend schema", ce(e, " "), wn(t)], " ") }, ScalarTypeExtension: { leave: ({ name: e, directives: t }) => ce(["extend scalar", e, ce(t, " ")], " ") }, ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ce(["extend type", e, Ae("implements ", ce(t, " & ")), ce(n, " "), wn(r)], " ") }, InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => ce(["extend interface", e, Ae("implements ", ce(t, " & ")), ce(n, " "), wn(r)], " ") }, UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => ce(["extend union", e, ce(t, " "), Ae("= ", ce(n, " | "))], " ") }, EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => ce(["extend enum", e, ce(t, " "), wn(n)], " ") }, InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => ce(["extend input", e, ce(t, " "), wn(n)], " ") } };
    function ce(e, t = "") {
      var n;
      return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
    }
    function wn(e) {
      return Ae(`{
`, fo(ce(e, `
`)), `
}`);
    }
    function Ae(e, t, n = "") {
      return t != null && t !== "" ? e + t + n : "";
    }
    function fo(e) {
      return Ae("  ", e.replace(/\n/g, `
  `));
    }
    function Hp(e) {
      var t;
      return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
    }
    function wl(e, t) {
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
          return e.values.map((n) => wl(n, t));
        case v.OBJECT:
          return ei(e.fields, (n) => n.name.value, (n) => wl(n.value, t));
        case v.VARIABLE:
          return t == null ? void 0 : t[e.name.value];
      }
    }
    function An(e) {
      if (e != null || Re(!1, "Must provide name."), typeof e == "string" || Re(!1, "Expected name to be a string."), e.length === 0) throw new Y("Expected name to be a non-empty string.");
      for (let t = 1; t < e.length; ++t) if (!Mp(e.charCodeAt(t))) throw new Y(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
      if (!yl(e.charCodeAt(0))) throw new Y(`Names must start with [_a-zA-Z] but "${e}" does not.`);
      return e;
    }
    function ry(e) {
      if (e === "true" || e === "false" || e === "null") throw new Y(`Enum values cannot be named: ${e}`);
      return An(e);
    }
    function Al(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || Vt(e) || Ze(e) || dt(e) || Ue(e);
    }
    function fn(e) {
      return Tn(e, ur);
    }
    function je(e) {
      return Tn(e, pn);
    }
    function iy(e) {
      if (!je(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL Object type.`);
      return e;
    }
    function Ge(e) {
      return Tn(e, Rr);
    }
    function ay(e) {
      if (!Ge(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL Interface type.`);
      return e;
    }
    function en(e) {
      return Tn(e, po);
    }
    function Vt(e) {
      return Tn(e, Or);
    }
    function Ze(e) {
      return Tn(e, Ka);
    }
    function dt(e) {
      return Tn(e, Ft);
    }
    function Ue(e) {
      return Tn(e, Ce);
    }
    function tn(e) {
      return fn(e) || Vt(e) || Ze(e) || Sl(e) && tn(e.ofType);
    }
    function ni(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || Vt(e) || Sl(e) && ni(e.ofType);
    }
    function Gi(e) {
      return fn(e) || Vt(e);
    }
    function nn(e) {
      return je(e) || Ge(e) || en(e);
    }
    function Kn(e) {
      return Ge(e) || en(e);
    }
    function sy(e) {
      if (!Kn(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL abstract type.`);
      return e;
    }
    var Ft = class {
      constructor(e) {
        Al(e) || Re(!1, `Expected ${Q(e)} to be a GraphQL type.`), this.ofType = e;
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
        Ll(e) || Re(!1, `Expected ${Q(e)} to be a GraphQL nullable type.`), this.ofType = e;
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
    function Sl(e) {
      return dt(e) || Ue(e);
    }
    function Ll(e) {
      return Al(e) && !Ue(e);
    }
    function oy(e) {
      if (!Ll(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL nullable type.`);
      return e;
    }
    function Fl(e) {
      if (e) return Ue(e) ? e.ofType : e;
    }
    function uy(e) {
      return fn(e) || je(e) || Ge(e) || en(e) || Vt(e) || Ze(e);
    }
    function tt(e) {
      if (e) {
        let t = e;
        for (; Sl(t); ) t = t.ofType;
        return t;
      }
    }
    function Wp(e) {
      return typeof e == "function" ? e() : e;
    }
    function Yp(e) {
      return typeof e == "function" ? e() : e;
    }
    var ur = class {
      constructor(e) {
        var t, n, r, i;
        let a = (t = e.parseValue) !== null && t !== void 0 ? t : jp;
        this.name = An(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (n = e.serialize) !== null && n !== void 0 ? n : jp, this.parseValue = a, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (s, o) => a(wl(s, o)), this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (i = e.extensionASTNodes) !== null && i !== void 0 ? i : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || Re(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${Q(e.specifiedByURL)}.`), e.serialize == null || typeof e.serialize == "function" || Re(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || Re(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
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
        this.name = An(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = () => Xp(e), this._interfaces = () => zp(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || Re(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${Q(e.isTypeOf)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: Qp(this.getFields()), isTypeOf: this.isTypeOf, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function zp(e) {
      var t;
      let n = Wp((t = e.interfaces) !== null && t !== void 0 ? t : []);
      return Array.isArray(n) || Re(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
    }
    function Xp(e) {
      let t = Yp(e.fields);
      return Hi(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), or(t, (n, r) => {
        var i;
        Hi(n) || Re(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || Re(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${Q(n.resolve)}.`);
        let a = (i = n.args) !== null && i !== void 0 ? i : {};
        return Hi(a) || Re(!1, `${e.name}.${r} args must be an object with argument names as keys.`), { name: An(r), description: n.description, type: n.type, args: Jp(a), resolve: n.resolve, subscribe: n.subscribe, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode };
      });
    }
    function Jp(e) {
      return Object.entries(e).map(([t, n]) => ({ name: An(t), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode }));
    }
    function Hi(e) {
      return sr(e) && !Array.isArray(e);
    }
    function Qp(e) {
      return or(e, (t) => ({ description: t.description, type: t.type, args: Zp(t.args), resolve: t.resolve, subscribe: t.subscribe, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function Zp(e) {
      return ei(e, (t) => t.name, (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function $a(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    var Rr = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = Xp.bind(void 0, e), this._interfaces = zp.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${Q(e.resolveType)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: Qp(this.getFields()), resolveType: this.resolveType, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, po = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._types = ly.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${Q(e.resolveType)}.`);
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
    function ly(e) {
      let t = Wp(e.types);
      return Array.isArray(t) || Re(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
    }
    var Or = class {
      constructor(e) {
        var t;
        this.name = An(e.name), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._values = typeof e.values == "function" ? e.values : em(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
      }
      get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
      }
      getValues() {
        return typeof this._values == "function" && (this._values = em(this.name, this._values())), this._values;
      }
      getValue(e) {
        return this._nameLookup === null && (this._nameLookup = Zr(this.getValues(), (t) => t.name)), this._nameLookup[e];
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
          throw new Y(`Enum "${this.name}" cannot represent non-string value: ${n}.` + mo(this, n));
        }
        let t = this.getValue(e);
        if (t == null) throw new Y(`Value "${e}" does not exist in "${this.name}" enum.` + mo(this, e));
        return t.value;
      }
      parseLiteral(e, t) {
        if (e.kind !== v.ENUM) {
          let r = Et(e);
          throw new Y(`Enum "${this.name}" cannot represent non-enum value: ${r}.` + mo(this, r), { nodes: e });
        }
        let n = this.getValue(e.value);
        if (n == null) {
          let r = Et(e);
          throw new Y(`Value "${r}" does not exist in "${this.name}" enum.` + mo(this, r), { nodes: e });
        }
        return n.value;
      }
      toConfig() {
        let e = ei(this.getValues(), (t) => t.name, (t) => ({ description: t.description, value: t.value, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, values: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function mo(e, t) {
      let n = e.getValues().map((i) => i.name), r = ti(t, n);
      return Fr("the enum value", r);
    }
    function em(e, t) {
      return Hi(t) || Re(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r]) => (Hi(r) || Re(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${Q(r)}.`), { name: ry(n), description: r.description, value: r.value !== void 0 ? r.value : n, deprecationReason: r.deprecationReason, extensions: hn(r.extensions), astNode: r.astNode }));
    }
    var Ka = class {
      constructor(e) {
        var t, n;
        this.name = An(e.name), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this.isOneOf = (n = e.isOneOf) !== null && n !== void 0 ? n : !1, this._fields = cy.bind(void 0, e);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
      }
      getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
      }
      toConfig() {
        let e = or(this.getFields(), (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, fields: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes, isOneOf: this.isOneOf };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function cy(e) {
      let t = Yp(e.fields);
      return Hi(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), or(t, (n, r) => (!("resolve" in n) || Re(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), { name: An(r), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: hn(n.extensions), astNode: n.astNode }));
    }
    function tm(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    function nm(e, t) {
      return e === t ? !0 : Ue(e) && Ue(t) || dt(e) && dt(t) ? nm(e.ofType, t.ofType) : !1;
    }
    function Wi(e, t, n) {
      return t === n ? !0 : Ue(n) ? Ue(t) ? Wi(e, t.ofType, n.ofType) : !1 : Ue(t) ? Wi(e, t.ofType, n) : dt(n) ? dt(t) ? Wi(e, t.ofType, n.ofType) : !1 : dt(t) ? !1 : Kn(n) && (Ge(t) || je(t)) && e.isSubType(n, t);
    }
    function Il(e, t, n) {
      return t === n ? !0 : Kn(t) ? Kn(n) ? e.getPossibleTypes(t).some((r) => e.isSubType(n, r)) : e.isSubType(t, n) : Kn(n) ? e.isSubType(n, t) : !1;
    }
    var Rl = 2147483647, Ol = -2147483648, dy = new ur({ name: "Int", description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.", serialize(e) {
      let t = ja(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new Y(`Int cannot represent non-integer value: ${Q(t)}`);
      if (n > Rl || n < Ol) throw new Y("Int cannot represent non 32-bit signed integer value: " + Q(t));
      return n;
    }, parseValue(e) {
      if (typeof e != "number" || !Number.isInteger(e)) throw new Y(`Int cannot represent non-integer value: ${Q(e)}`);
      if (e > Rl || e < Ol) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.INT) throw new Y(`Int cannot represent non-integer value: ${Et(e)}`, { nodes: e });
      let t = parseInt(e.value, 10);
      if (t > Rl || t < Ol) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e });
      return t;
    } }), rm = new ur({ name: "Float", description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).", serialize(e) {
      let t = ja(e);
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
      let t = ja(e);
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
      let t = ja(e);
      if (typeof t == "boolean") return t;
      if (Number.isFinite(t)) return t !== 0;
      throw new Y(`Boolean cannot represent a non boolean value: ${Q(t)}`);
    }, parseValue(e) {
      if (typeof e != "boolean") throw new Y(`Boolean cannot represent a non boolean value: ${Q(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.BOOLEAN) throw new Y(`Boolean cannot represent a non boolean value: ${Et(e)}`, { nodes: e });
      return e.value;
    } }), im = new ur({ name: "ID", description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.', serialize(e) {
      let t = ja(e);
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
    } }), go = Object.freeze([nt, dy, rm, yt, im]);
    function hy(e) {
      return go.some(({ name: t }) => e.name === t);
    }
    function ja(e) {
      if (sr(e)) {
        if (typeof e.valueOf == "function") {
          let t = e.valueOf();
          if (!sr(t)) return t;
        }
        if (typeof e.toJSON == "function") return e.toJSON();
      }
      return e;
    }
    function am(e) {
      return Tn(e, lr);
    }
    var lr = class {
      constructor(e) {
        var t, n;
        this.name = An(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (t = e.isRepeatable) !== null && t !== void 0 ? t : !1, this.extensions = hn(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || Re(!1, `@${e.name} locations must be an Array.`);
        let r = (n = e.args) !== null && n !== void 0 ? n : {};
        sr(r) && !Array.isArray(r) || Re(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = Jp(r);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLDirective";
      }
      toConfig() {
        return { name: this.name, description: this.description, locations: this.locations, args: Zp(this.args), isRepeatable: this.isRepeatable, extensions: this.extensions, astNode: this.astNode };
      }
      toString() {
        return "@" + this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, sm = new lr({ name: "include", description: "Directs the executor to include this field or fragment only when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(yt), description: "Included when true." } } }), om = new lr({ name: "skip", description: "Directs the executor to skip this field or fragment when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(yt), description: "Skipped when true." } } }), fy = "No longer supported", xl = new lr({ name: "deprecated", description: "Marks an element of a GraphQL schema as no longer supported.", locations: [se.FIELD_DEFINITION, se.ARGUMENT_DEFINITION, se.INPUT_FIELD_DEFINITION, se.ENUM_VALUE], args: { reason: { type: nt, description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).", defaultValue: fy } } }), um = new lr({ name: "specifiedBy", description: "Exposes a URL that specifies the behavior of this scalar.", locations: [se.SCALAR], args: { url: { type: new Ce(nt), description: "The URL that specifies the behavior of this scalar." } } }), lm = new lr({ name: "oneOf", description: "Indicates exactly one field must be supplied and this field must not be `null`.", locations: [se.INPUT_OBJECT], args: {} }), Yi = Object.freeze([sm, om, xl, um, lm]);
    function py(e) {
      return typeof e == "object" && typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
    }
    function qa(e, t) {
      if (Ue(t)) {
        let n = qa(e, t.ofType);
        return (n == null ? void 0 : n.kind) === v.NULL ? null : n;
      }
      if (e === null) return { kind: v.NULL };
      if (e === void 0) return null;
      if (dt(t)) {
        let n = t.ofType;
        if (py(e)) {
          let r = [];
          for (let i of e) {
            let a = qa(i, n);
            a != null && r.push(a);
          }
          return { kind: v.LIST, values: r };
        }
        return qa(e, n);
      }
      if (Ze(t)) {
        if (!sr(e)) return null;
        let n = [];
        for (let r of Object.values(t.getFields())) {
          let i = qa(e[r.name], r.type);
          i && n.push({ kind: v.OBJECT_FIELD, name: { kind: v.NAME, value: r.name }, value: i });
        }
        return { kind: v.OBJECT, fields: n };
      }
      if (Gi(t)) {
        let n = t.serialize(e);
        if (n == null) return null;
        if (typeof n == "boolean") return { kind: v.BOOLEAN, value: n };
        if (typeof n == "number" && Number.isFinite(n)) {
          let r = String(n);
          return cm.test(r) ? { kind: v.INT, value: r } : { kind: v.FLOAT, value: r };
        }
        if (typeof n == "string") return Vt(t) ? { kind: v.ENUM, value: n } : t === im && cm.test(n) ? { kind: v.INT, value: n } : { kind: v.STRING, value: n };
        throw new TypeError(`Cannot convert value to AST: ${Q(n)}.`);
      }
      Xt(!1, "Unexpected input type: " + Q(t));
    }
    var cm = /^-?(?:0|[1-9][0-9]*)$/, kl = new pn({ name: "__Schema", description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.", fields: () => ({ description: { type: nt, resolve: (e) => e.description }, types: { description: "A list of all types supported by this server.", type: new Ce(new Ft(new Ce(Sn))), resolve(e) {
      return Object.values(e.getTypeMap());
    } }, queryType: { description: "The type that query operations will be rooted at.", type: new Ce(Sn), resolve: (e) => e.getQueryType() }, mutationType: { description: "If this server supports mutation, the type that mutation operations will be rooted at.", type: Sn, resolve: (e) => e.getMutationType() }, subscriptionType: { description: "If this server support subscription, the type that subscription operations will be rooted at.", type: Sn, resolve: (e) => e.getSubscriptionType() }, directives: { description: "A list of all directives supported by this server.", type: new Ce(new Ft(new Ce(dm))), resolve: (e) => e.getDirectives() } }) }), dm = new pn({ name: "__Directive", description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`, fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isRepeatable: { type: new Ce(yt), resolve: (e) => e.isRepeatable }, locations: { type: new Ce(new Ft(new Ce(hm))), resolve: (e) => e.locations }, args: { type: new Ce(new Ft(new Ce(Eo))), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } } }) }), hm = new Or({ name: "__DirectiveLocation", description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.", values: { QUERY: { value: se.QUERY, description: "Location adjacent to a query operation." }, MUTATION: { value: se.MUTATION, description: "Location adjacent to a mutation operation." }, SUBSCRIPTION: { value: se.SUBSCRIPTION, description: "Location adjacent to a subscription operation." }, FIELD: { value: se.FIELD, description: "Location adjacent to a field." }, FRAGMENT_DEFINITION: { value: se.FRAGMENT_DEFINITION, description: "Location adjacent to a fragment definition." }, FRAGMENT_SPREAD: { value: se.FRAGMENT_SPREAD, description: "Location adjacent to a fragment spread." }, INLINE_FRAGMENT: { value: se.INLINE_FRAGMENT, description: "Location adjacent to an inline fragment." }, VARIABLE_DEFINITION: { value: se.VARIABLE_DEFINITION, description: "Location adjacent to a variable definition." }, SCHEMA: { value: se.SCHEMA, description: "Location adjacent to a schema definition." }, SCALAR: { value: se.SCALAR, description: "Location adjacent to a scalar definition." }, OBJECT: { value: se.OBJECT, description: "Location adjacent to an object type definition." }, FIELD_DEFINITION: { value: se.FIELD_DEFINITION, description: "Location adjacent to a field definition." }, ARGUMENT_DEFINITION: { value: se.ARGUMENT_DEFINITION, description: "Location adjacent to an argument definition." }, INTERFACE: { value: se.INTERFACE, description: "Location adjacent to an interface definition." }, UNION: { value: se.UNION, description: "Location adjacent to a union definition." }, ENUM: { value: se.ENUM, description: "Location adjacent to an enum definition." }, ENUM_VALUE: { value: se.ENUM_VALUE, description: "Location adjacent to an enum value definition." }, INPUT_OBJECT: { value: se.INPUT_OBJECT, description: "Location adjacent to an input object type definition." }, INPUT_FIELD_DEFINITION: { value: se.INPUT_FIELD_DEFINITION, description: "Location adjacent to an input object field definition." } } }), Sn = new pn({ name: "__Type", description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.", fields: () => ({ kind: { type: new Ce(mm), resolve(e) {
      if (fn(e)) return qe.SCALAR;
      if (je(e)) return qe.OBJECT;
      if (Ge(e)) return qe.INTERFACE;
      if (en(e)) return qe.UNION;
      if (Vt(e)) return qe.ENUM;
      if (Ze(e)) return qe.INPUT_OBJECT;
      if (dt(e)) return qe.LIST;
      if (Ue(e)) return qe.NON_NULL;
      Xt(!1, `Unexpected type: "${Q(e)}".`);
    } }, name: { type: nt, resolve: (e) => "name" in e ? e.name : void 0 }, description: { type: nt, resolve: (e) => "description" in e ? e.description : void 0 }, specifiedByURL: { type: nt, resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0 }, fields: { type: new Ft(new Ce(fm)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (je(e) || Ge(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, interfaces: { type: new Ft(new Ce(Sn)), resolve(e) {
      if (je(e) || Ge(e)) return e.getInterfaces();
    } }, possibleTypes: { type: new Ft(new Ce(Sn)), resolve(e, t, n, { schema: r }) {
      if (Kn(e)) return r.getPossibleTypes(e);
    } }, enumValues: { type: new Ft(new Ce(pm)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (Vt(e)) {
        let n = e.getValues();
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, inputFields: { type: new Ft(new Ce(Eo)), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (Ze(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, ofType: { type: Sn, resolve: (e) => "ofType" in e ? e.ofType : void 0 }, isOneOf: { type: yt, resolve: (e) => {
      if (Ze(e)) return e.isOneOf;
    } } }) }), fm = new pn({ name: "__Field", description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, args: { type: new Ce(new Ft(new Ce(Eo))), args: { includeDeprecated: { type: yt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } }, type: { type: new Ce(Sn), resolve: (e) => e.type }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), Eo = new pn({ name: "__InputValue", description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, type: { type: new Ce(Sn), resolve: (e) => e.type }, defaultValue: { type: nt, description: "A GraphQL-formatted string representing the default value for this input value.", resolve(e) {
      let { type: t, defaultValue: n } = e, r = qa(n, t);
      return r ? Et(r) : null;
    } }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), pm = new pn({ name: "__EnumValue", description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isDeprecated: { type: new Ce(yt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), qe;
    (function(e) {
      e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
    })(qe || (qe = {}));
    var mm = new Or({ name: "__TypeKind", description: "An enum describing what kind of type a given `__Type` is.", values: { SCALAR: { value: qe.SCALAR, description: "Indicates this type is a scalar." }, OBJECT: { value: qe.OBJECT, description: "Indicates this type is an object. `fields` and `interfaces` are valid fields." }, INTERFACE: { value: qe.INTERFACE, description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields." }, UNION: { value: qe.UNION, description: "Indicates this type is a union. `possibleTypes` is a valid field." }, ENUM: { value: qe.ENUM, description: "Indicates this type is an enum. `enumValues` is a valid field." }, INPUT_OBJECT: { value: qe.INPUT_OBJECT, description: "Indicates this type is an input object. `inputFields` is a valid field." }, LIST: { value: qe.LIST, description: "Indicates this type is a list. `ofType` is a valid field." }, NON_NULL: { value: qe.NON_NULL, description: "Indicates this type is a non-null. `ofType` is a valid field." } } }), Ga = { name: "__schema", type: new Ce(kl), description: "Access the current type schema of this server.", args: [], resolve: (e, t, n, { schema: r }) => r, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, Ha = { name: "__type", type: Sn, description: "Request the type information of a single type.", args: [{ name: "name", description: void 0, type: new Ce(nt), defaultValue: void 0, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }], resolve: (e, { name: t }, n, { schema: r }) => r.getType(t), deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, Wa = { name: "__typename", type: new Ce(nt), description: "The name of the current Object type at runtime.", args: [], resolve: (e, t, n, { parentType: r }) => r.name, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, _o = Object.freeze([kl, dm, hm, Sn, fm, Eo, pm, mm]);
    function gm(e) {
      return _o.some(({ name: t }) => e.name === t);
    }
    function my(e) {
      return Tn(e, Ml);
    }
    function gy(e) {
      if (!my(e)) throw new Error(`Expected ${Q(e)} to be a GraphQL schema.`);
      return e;
    }
    var Ml = class {
      constructor(e) {
        var t, n;
        this.__validationErrors = e.assumeValid === !0 ? [] : void 0, sr(e) || Re(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || Re(!1, `"types" must be Array if provided but got: ${Q(e.types)}.`), !e.directives || Array.isArray(e.directives) || Re(!1, `"directives" must be Array if provided but got: ${Q(e.directives)}.`), this.description = e.description, this.extensions = hn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (n = e.directives) !== null && n !== void 0 ? n : Yi;
        let r = new Set(e.types);
        if (e.types != null) for (let i of e.types) r.delete(i), Ln(i, r);
        this._queryType != null && Ln(this._queryType, r), this._mutationType != null && Ln(this._mutationType, r), this._subscriptionType != null && Ln(this._subscriptionType, r);
        for (let i of this._directives) if (am(i)) for (let a of i.args) Ln(a.type, r);
        Ln(kl, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
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
    function Ey(e) {
      if (gy(e), e.__validationErrors) return e.__validationErrors;
      let t = new Dy(e);
      vy(t), by(t), yy(t);
      let n = t.getErrors();
      return e.__validationErrors = n, n;
    }
    function _y(e) {
      let t = Ey(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    var Dy = class {
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
    function vy(e) {
      let t = e.schema, n = t.getQueryType();
      if (!n) e.reportError("Query root type must be provided.", t.astNode);
      else if (!je(n)) {
        var r;
        e.reportError(`Query root type must be Object type, it cannot be ${Q(n)}.`, (r = Ul(t, Bt.QUERY)) !== null && r !== void 0 ? r : n.astNode);
      }
      let i = t.getMutationType();
      if (i && !je(i)) {
        var a;
        e.reportError(`Mutation root type must be Object type if provided, it cannot be ${Q(i)}.`, (a = Ul(t, Bt.MUTATION)) !== null && a !== void 0 ? a : i.astNode);
      }
      let s = t.getSubscriptionType();
      if (s && !je(s)) {
        var o;
        e.reportError(`Subscription root type must be Object type if provided, it cannot be ${Q(s)}.`, (o = Ul(t, Bt.SUBSCRIPTION)) !== null && o !== void 0 ? o : s.astNode);
      }
    }
    function Ul(e, t) {
      var n;
      return (n = [e.astNode, ...e.extensionASTNodes].flatMap((r) => {
        var i;
        return (i = r == null ? void 0 : r.operationTypes) !== null && i !== void 0 ? i : [];
      }).find((r) => r.operation === t)) === null || n === void 0 ? void 0 : n.type;
    }
    function by(e) {
      for (let n of e.schema.getDirectives()) {
        if (!am(n)) {
          e.reportError(`Expected directive but got: ${Q(n)}.`, n == null ? void 0 : n.astNode);
          continue;
        }
        ri(e, n), n.locations.length === 0 && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
        for (let r of n.args) if (ri(e, r), tn(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${Q(r.type)}.`, r.astNode), $a(r) && r.deprecationReason != null) {
          var t;
          e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [Pl(r.astNode), (t = r.astNode) === null || t === void 0 ? void 0 : t.type]);
        }
      }
    }
    function ri(e, t) {
      t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
    }
    function yy(e) {
      let t = Iy(e), n = e.schema.getTypeMap();
      for (let r of Object.values(n)) {
        if (!uy(r)) {
          e.reportError(`Expected GraphQL named type but got: ${Q(r)}.`, r.astNode);
          continue;
        }
        gm(r) || ri(e, r), je(r) || Ge(r) ? (Ny(e, r), Cy(e, r)) : en(r) ? Ay(e, r) : Vt(r) ? Sy(e, r) : Ze(r) && (Ly(e, r), t(r));
      }
    }
    function Ny(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let s of n) {
        if (ri(e, s), !ni(s.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${Q(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        for (let o of s.args) {
          let u = o.name;
          if (ri(e, o), !tn(o.type)) {
            var i;
            e.reportError(`The type of ${t.name}.${s.name}(${u}:) must be Input Type but got: ${Q(o.type)}.`, (i = o.astNode) === null || i === void 0 ? void 0 : i.type);
          }
          if ($a(o) && o.deprecationReason != null) {
            var a;
            e.reportError(`Required argument ${t.name}.${s.name}(${u}:) cannot be deprecated.`, [Pl(o.astNode), (a = o.astNode) === null || a === void 0 ? void 0 : a.type]);
          }
        }
      }
    }
    function Cy(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.getInterfaces()) {
        if (!Ge(r)) {
          e.reportError(`Type ${Q(t)} must only implement Interface types, it cannot implement ${Q(r)}.`, Ya(t, r));
          continue;
        }
        if (t === r) {
          e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, Ya(t, r));
          continue;
        }
        if (n[r.name]) {
          e.reportError(`Type ${t.name} can only implement ${r.name} once.`, Ya(t, r));
          continue;
        }
        n[r.name] = !0, wy(e, t, r), Ty(e, t, r);
      }
    }
    function Ty(e, t, n) {
      let r = t.getFields();
      for (let u of Object.values(n.getFields())) {
        let l = u.name, c = r[l];
        if (!c) {
          e.reportError(`Interface field ${n.name}.${l} expected but ${t.name} does not provide it.`, [u.astNode, t.astNode, ...t.extensionASTNodes]);
          continue;
        }
        if (!Wi(e.schema, c.type, u.type)) {
          var i, a;
          e.reportError(`Interface field ${n.name}.${l} expects type ${Q(u.type)} but ${t.name}.${l} is type ${Q(c.type)}.`, [(i = u.astNode) === null || i === void 0 ? void 0 : i.type, (a = c.astNode) === null || a === void 0 ? void 0 : a.type]);
        }
        for (let f of u.args) {
          let p = f.name, m = c.args.find((g) => g.name === p);
          if (!m) {
            e.reportError(`Interface field argument ${n.name}.${l}(${p}:) expected but ${t.name}.${l} does not provide it.`, [f.astNode, c.astNode]);
            continue;
          }
          if (!nm(f.type, m.type)) {
            var s, o;
            e.reportError(`Interface field argument ${n.name}.${l}(${p}:) expects type ${Q(f.type)} but ${t.name}.${l}(${p}:) is type ${Q(m.type)}.`, [(s = f.astNode) === null || s === void 0 ? void 0 : s.type, (o = m.astNode) === null || o === void 0 ? void 0 : o.type]);
          }
        }
        for (let f of c.args) {
          let p = f.name;
          !u.args.find((m) => m.name === p) && $a(f) && e.reportError(`Object field ${t.name}.${l} includes required argument ${p} that is missing from the Interface field ${n.name}.${l}.`, [f.astNode, u.astNode]);
        }
      }
    }
    function wy(e, t, n) {
      let r = t.getInterfaces();
      for (let i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...Ya(n, i), ...Ya(t, n)]);
    }
    function Ay(e, t) {
      let n = t.getTypes();
      n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of n) {
        if (r[i.name]) {
          e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, Em(t, i.name));
          continue;
        }
        r[i.name] = !0, je(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${Q(i)}.`, Em(t, String(i)));
      }
    }
    function Sy(e, t) {
      let n = t.getValues();
      n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
      for (let r of n) ri(e, r);
    }
    function Ly(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let a of n) {
        if (ri(e, a), !tn(a.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${a.name} must be Input Type but got: ${Q(a.type)}.`, (r = a.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        if (tm(a) && a.deprecationReason != null) {
          var i;
          e.reportError(`Required input field ${t.name}.${a.name} cannot be deprecated.`, [Pl(a.astNode), (i = a.astNode) === null || i === void 0 ? void 0 : i.type]);
        }
        t.isOneOf && Fy(t, a, e);
      }
    }
    function Fy(e, t, n) {
      if (Ue(t.type)) {
        var r;
        n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, (r = t.astNode) === null || r === void 0 ? void 0 : r.type);
      }
      t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
    }
    function Iy(e) {
      let t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
      return i;
      function i(a) {
        if (t[a.name]) return;
        t[a.name] = !0, r[a.name] = n.length;
        let s = Object.values(a.getFields());
        for (let o of s) if (Ue(o.type) && Ze(o.type.ofType)) {
          let u = o.type.ofType, l = r[u.name];
          if (n.push(o), l === void 0) i(u);
          else {
            let c = n.slice(l), f = c.map((p) => p.name).join(".");
            e.reportError(`Cannot reference Input Object "${u.name}" within itself through a series of non-null fields: "${f}".`, c.map((p) => p.astNode));
          }
          n.pop();
        }
        r[a.name] = void 0;
      }
    }
    function Ya(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.interfaces) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t.name);
    }
    function Em(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.types) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t);
    }
    function Pl(e) {
      var t;
      return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n) => n.name.value === xl.name);
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
    var _m = class {
      constructor(e, t, n) {
        this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? Ry, t && (tn(t) && this._inputTypeStack.push(t), nn(t) && this._parentTypeStack.push(t), ni(t) && this._typeStack.push(t));
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
            r && (i = this._getFieldDef(t, r, e), i && (a = i.type)), this._fieldDefStack.push(i), this._typeStack.push(ni(a) ? a : void 0);
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
            this._typeStack.push(ni(i) ? i : void 0);
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
            let r = Fl(this.getInputType()), i = dt(r) ? r.ofType : r;
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
            Vt(r) && (i = r.getValue(e.value)), this._enumValue = i;
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
    function Ry(e, t, n) {
      let r = n.name.value;
      if (r === Ga.name && e.getQueryType() === t) return Ga;
      if (r === Ha.name && e.getQueryType() === t) return Ha;
      if (r === Wa.name && nn(t)) return Wa;
      if (je(t) || Ge(t)) return t.getFields()[r];
    }
    function Dm(e, t) {
      return { enter(...n) {
        let r = n[0];
        e.enter(r);
        let i = ho(t, r.kind).enter;
        if (i) {
          let a = i.apply(t, n);
          return a !== void 0 && (e.leave(r), vl(a) && e.enter(a)), a;
        }
      }, leave(...n) {
        let r = n[0], i = ho(t, r.kind).leave, a;
        return i && (a = i.apply(t, n)), e.leave(r), a;
      } };
    }
    function Oy(e) {
      return e.kind === v.OPERATION_DEFINITION || e.kind === v.FRAGMENT_DEFINITION;
    }
    function xy(e) {
      return e.kind === v.SCHEMA_DEFINITION || za(e) || e.kind === v.DIRECTIVE_DEFINITION;
    }
    function za(e) {
      return e.kind === v.SCALAR_TYPE_DEFINITION || e.kind === v.OBJECT_TYPE_DEFINITION || e.kind === v.INTERFACE_TYPE_DEFINITION || e.kind === v.UNION_TYPE_DEFINITION || e.kind === v.ENUM_TYPE_DEFINITION || e.kind === v.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function ky(e) {
      return e.kind === v.SCHEMA_EXTENSION || Bl(e);
    }
    function Bl(e) {
      return e.kind === v.SCALAR_TYPE_EXTENSION || e.kind === v.OBJECT_TYPE_EXTENSION || e.kind === v.INTERFACE_TYPE_EXTENSION || e.kind === v.UNION_TYPE_EXTENSION || e.kind === v.ENUM_TYPE_EXTENSION || e.kind === v.INPUT_OBJECT_TYPE_EXTENSION;
    }
    function vm(e) {
      return { Document(t) {
        for (let n of t.definitions) if (!Oy(n)) {
          let r = n.kind === v.SCHEMA_DEFINITION || n.kind === v.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
          e.reportError(new Y(`The ${r} definition is not executable.`, { nodes: n }));
        }
        return !1;
      } };
    }
    function My(e) {
      return { Field(t) {
        let n = e.getParentType();
        if (n && !e.getFieldDef()) {
          let r = e.getSchema(), i = t.name.value, a = Fr("to use an inline fragment on", Uy(r, n, i));
          a === "" && (a = Fr(Py(n, i))), e.reportError(new Y(`Cannot query field "${i}" on type "${n.name}".` + a, { nodes: t }));
        }
      } };
    }
    function Uy(e, t, n) {
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
        let u = i[o.name] - i[s.name];
        return u !== 0 ? u : Ge(s) && e.isSubType(s, o) ? -1 : Ge(o) && e.isSubType(o, s) ? 1 : Cl(s.name, o.name);
      }).map((s) => s.name);
    }
    function Py(e, t) {
      if (je(e) || Ge(e)) {
        let n = Object.keys(e.getFields());
        return ti(t, n);
      }
      return [];
    }
    function By(e) {
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
    function Vy(e) {
      return { ...bm(e), Argument(t) {
        let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
        if (!n && r && i) {
          let a = t.name.value, s = r.args.map((u) => u.name), o = ti(a, s);
          e.reportError(new Y(`Unknown argument "${a}" on field "${i.name}.${r.name}".` + Fr(o), { nodes: t }));
        }
      } };
    }
    function bm(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Yi;
      for (let s of r) t[s.name] = s.args.map((o) => o.name);
      let i = e.getDocument().definitions;
      for (let s of i) if (s.kind === v.DIRECTIVE_DEFINITION) {
        var a;
        let o = (a = s.arguments) !== null && a !== void 0 ? a : [];
        t[s.name.value] = o.map((u) => u.name.value);
      }
      return { Directive(s) {
        let o = s.name.value, u = t[o];
        if (s.arguments && u) for (let l of s.arguments) {
          let c = l.name.value;
          if (!u.includes(c)) {
            let f = ti(c, u);
            e.reportError(new Y(`Unknown argument "${c}" on directive "@${o}".` + Fr(f), { nodes: l }));
          }
        }
        return !1;
      } };
    }
    function ym(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Yi;
      for (let a of r) t[a.name] = a.locations;
      let i = e.getDocument().definitions;
      for (let a of i) a.kind === v.DIRECTIVE_DEFINITION && (t[a.name.value] = a.locations.map((s) => s.value));
      return { Directive(a, s, o, u, l) {
        let c = a.name.value, f = t[c];
        if (!f) {
          e.reportError(new Y(`Unknown directive "@${c}".`, { nodes: a }));
          return;
        }
        let p = $y(l);
        p && !f.includes(p) && e.reportError(new Y(`Directive "@${c}" may not be used on ${p}.`, { nodes: a }));
      } };
    }
    function $y(e) {
      let t = e[e.length - 1];
      switch ("kind" in t || Xt(), t.kind) {
        case v.OPERATION_DEFINITION:
          return Ky(t.operation);
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
    function Ky(e) {
      switch (e) {
        case Bt.QUERY:
          return se.QUERY;
        case Bt.MUTATION:
          return se.MUTATION;
        case Bt.SUBSCRIPTION:
          return se.SUBSCRIPTION;
      }
    }
    function jy(e) {
      return { FragmentSpread(t) {
        let n = t.name.value;
        e.getFragment(n) || e.reportError(new Y(`Unknown fragment "${n}".`, { nodes: t.name }));
      } };
    }
    function Nm(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      for (let a of e.getDocument().definitions) za(a) && (r[a.name.value] = !0);
      let i = [...Object.keys(n), ...Object.keys(r)];
      return { NamedType(a, s, o, u, l) {
        let c = a.name.value;
        if (!n[c] && !r[c]) {
          var f;
          let p = (f = l[2]) !== null && f !== void 0 ? f : o, m = p != null && qy(p);
          if (m && Cm.includes(c)) return;
          let g = ti(c, m ? Cm.concat(i) : i);
          e.reportError(new Y(`Unknown type "${c}".` + Fr(g), { nodes: a }));
        }
      } };
    }
    var Cm = [...go, ..._o].map((e) => e.name);
    function qy(e) {
      return "kind" in e && (xy(e) || ky(e));
    }
    function Gy(e) {
      let t = 0;
      return { Document(n) {
        t = n.definitions.filter((r) => r.kind === v.OPERATION_DEFINITION).length;
      }, OperationDefinition(n) {
        !n.name && t > 1 && e.reportError(new Y("This anonymous operation must be the only defined operation.", { nodes: n }));
      } };
    }
    function Hy(e) {
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
    var Wy = 3;
    function Yy(e) {
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
        if (n.kind === v.FIELD && (n.name.value === "fields" || n.name.value === "interfaces" || n.name.value === "possibleTypes" || n.name.value === "inputFields") && (i++, i >= Wy)) return !0;
        if ("selectionSet" in n && n.selectionSet) {
          for (let a of n.selectionSet.selections) if (t(a, r, i)) return !0;
        }
        return !1;
      }
      return { Field(n) {
        if ((n.name.value === "__schema" || n.name.value === "__type") && t(n)) return e.reportError(new Y("Maximum introspection depth exceeded", { nodes: [n] })), !1;
      } };
    }
    function zy(e) {
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
          for (let u of o) {
            let l = u.name.value, c = r[l];
            if (n.push(u), c === void 0) {
              let f = e.getFragment(l);
              f && i(f);
            } else {
              let f = n.slice(c), p = f.slice(0, -1).map((m) => '"' + m.name.value + '"').join(", ");
              e.reportError(new Y(`Cannot spread fragment "${l}" within itself` + (p !== "" ? ` via ${p}.` : "."), { nodes: f }));
            }
            n.pop();
          }
          r[s] = void 0;
        }
      }
    }
    function Xy(e) {
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
    function Tm(e) {
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
    function Jy(e) {
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
    function Vl(e) {
      switch (e.kind) {
        case v.OBJECT:
          return { ...e, fields: Qy(e.fields) };
        case v.LIST:
          return { ...e, values: e.values.map(Vl) };
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
    function Qy(e) {
      return e.map((t) => ({ ...t, value: Vl(t.value) })).sort((t, n) => Cl(t.name.value, n.name.value));
    }
    function wm(e) {
      return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + wm(n)).join(" and ") : e;
    }
    function Zy(e) {
      let t = new Fm(), n = new aN(), r = /* @__PURE__ */ new Map();
      return { SelectionSet(i) {
        let a = eN(e, r, t, n, e.getParentType(), i);
        for (let [[s, o], u, l] of a) {
          let c = wm(o);
          e.reportError(new Y(`Fields "${s}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`, { nodes: u.concat(l) }));
        }
      } };
    }
    function eN(e, t, n, r, i, a) {
      let s = [], [o, u] = bo(e, t, i, a);
      if (nN(e, s, t, n, r, o), u.length !== 0) for (let l = 0; l < u.length; l++) {
        Do(e, s, t, n, r, !1, o, u[l]);
        for (let c = l + 1; c < u.length; c++) vo(e, s, t, n, r, !1, u[l], u[c]);
      }
      return s;
    }
    function Do(e, t, n, r, i, a, s, o) {
      if (r.has(s, o, a)) return;
      r.add(s, o, a);
      let u = e.getFragment(o);
      if (!u) return;
      let [l, c] = jl(e, n, u);
      if (s !== l) {
        $l(e, t, n, r, i, a, s, l);
        for (let f of c) Do(e, t, n, r, i, a, s, f);
      }
    }
    function vo(e, t, n, r, i, a, s, o) {
      if (s === o || i.has(s, o, a)) return;
      i.add(s, o, a);
      let u = e.getFragment(s), l = e.getFragment(o);
      if (!u || !l) return;
      let [c, f] = jl(e, n, u), [p, m] = jl(e, n, l);
      $l(e, t, n, r, i, a, c, p);
      for (let g of m) vo(e, t, n, r, i, a, s, g);
      for (let g of f) vo(e, t, n, r, i, a, g, o);
    }
    function tN(e, t, n, r, i, a, s, o, u) {
      let l = [], [c, f] = bo(e, t, a, s), [p, m] = bo(e, t, o, u);
      $l(e, l, t, n, r, i, c, p);
      for (let g of m) Do(e, l, t, n, r, i, c, g);
      for (let g of f) Do(e, l, t, n, r, i, p, g);
      for (let g of f) for (let _ of m) vo(e, l, t, n, r, i, g, _);
      return l;
    }
    function nN(e, t, n, r, i, a) {
      for (let [s, o] of Object.entries(a)) if (o.length > 1) for (let u = 0; u < o.length; u++) for (let l = u + 1; l < o.length; l++) {
        let c = Am(e, n, r, i, !1, s, o[u], o[l]);
        c && t.push(c);
      }
    }
    function $l(e, t, n, r, i, a, s, o) {
      for (let [u, l] of Object.entries(s)) {
        let c = o[u];
        if (c) for (let f of l) for (let p of c) {
          let m = Am(e, n, r, i, a, u, f, p);
          m && t.push(m);
        }
      }
    }
    function Am(e, t, n, r, i, a, s, o) {
      let [u, l, c] = s, [f, p, m] = o, g = i || u !== f && je(u) && je(f);
      if (!g) {
        let C = l.name.value, x = p.name.value;
        if (C !== x) return [[a, `"${C}" and "${x}" are different fields`], [l], [p]];
        if (!rN(l, p)) return [[a, "they have differing arguments"], [l], [p]];
      }
      let _ = c == null ? void 0 : c.type, L = m == null ? void 0 : m.type;
      if (_ && L && Kl(_, L)) return [[a, `they return conflicting types "${Q(_)}" and "${Q(L)}"`], [l], [p]];
      let A = l.selectionSet, F = p.selectionSet;
      if (A && F) {
        let C = tN(e, t, n, r, g, tt(_), A, tt(L), F);
        return iN(C, a, l, p);
      }
    }
    function rN(e, t) {
      let n = e.arguments, r = t.arguments;
      if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
      if (r === void 0 || r.length === 0 || n.length !== r.length) return !1;
      let i = new Map(r.map(({ name: a, value: s }) => [a.value, s]));
      return n.every((a) => {
        let s = a.value, o = i.get(a.name.value);
        return o === void 0 ? !1 : Sm(s) === Sm(o);
      });
    }
    function Sm(e) {
      return Et(Vl(e));
    }
    function Kl(e, t) {
      return dt(e) ? dt(t) ? Kl(e.ofType, t.ofType) : !0 : dt(t) ? !0 : Ue(e) ? Ue(t) ? Kl(e.ofType, t.ofType) : !0 : Ue(t) ? !0 : Gi(e) || Gi(t) ? e !== t : !1;
    }
    function bo(e, t, n, r) {
      let i = t.get(r);
      if (i) return i;
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      Lm(e, n, r, a, s);
      let o = [a, Object.keys(s)];
      return t.set(r, o), o;
    }
    function jl(e, t, n) {
      let r = t.get(n.selectionSet);
      if (r) return r;
      let i = rn(e.getSchema(), n.typeCondition);
      return bo(e, t, i, n.selectionSet);
    }
    function Lm(e, t, n, r, i) {
      for (let a of n.selections) switch (a.kind) {
        case v.FIELD: {
          let s = a.name.value, o;
          (je(t) || Ge(t)) && (o = t.getFields()[s]);
          let u = a.alias ? a.alias.value : s;
          r[u] || (r[u] = []), r[u].push([t, a, o]);
          break;
        }
        case v.FRAGMENT_SPREAD:
          i[a.name.value] = !0;
          break;
        case v.INLINE_FRAGMENT: {
          let s = a.typeCondition, o = s ? rn(e.getSchema(), s) : t;
          Lm(e, o, a.selectionSet, r, i);
          break;
        }
      }
    }
    function iN(e, t, n, r) {
      if (e.length > 0) return [[t, e.map(([i]) => i)], [n, ...e.map(([, i]) => i).flat()], [r, ...e.map(([, , i]) => i).flat()]];
    }
    var Fm = class {
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
    }, aN = class {
      constructor() {
        this._orderedPairSet = new Fm();
      }
      has(e, t, n) {
        return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n);
      }
      add(e, t, n) {
        e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n);
      }
    };
    function sN(e) {
      return { InlineFragment(t) {
        let n = e.getType(), r = e.getParentType();
        if (nn(n) && nn(r) && !Il(e.getSchema(), n, r)) {
          let i = Q(r), a = Q(n);
          e.reportError(new Y(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${a}".`, { nodes: t }));
        }
      }, FragmentSpread(t) {
        let n = t.name.value, r = oN(e, n), i = e.getParentType();
        if (r && i && !Il(e.getSchema(), r, i)) {
          let a = Q(i), s = Q(r);
          e.reportError(new Y(`Fragment "${n}" cannot be spread here as objects of type "${a}" can never be of type "${s}".`, { nodes: t }));
        }
      } };
    }
    function oN(e, t) {
      let n = e.getFragment(t);
      if (n) {
        let r = rn(e.getSchema(), n.typeCondition);
        if (nn(r)) return r;
      }
    }
    function uN(e) {
      let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null);
      for (let i of e.getDocument().definitions) za(i) && (n[i.name.value] = i);
      return { ScalarTypeExtension: r, ObjectTypeExtension: r, InterfaceTypeExtension: r, UnionTypeExtension: r, EnumTypeExtension: r, InputObjectTypeExtension: r };
      function r(i) {
        let a = i.name.value, s = n[a], o = t == null ? void 0 : t.getType(a), u;
        if (s ? u = lN[s.kind] : o && (u = cN(o)), u) {
          if (u !== i.kind) {
            let l = dN(i.kind);
            e.reportError(new Y(`Cannot extend non-${l} type "${a}".`, { nodes: s ? [s, i] : i }));
          }
        } else {
          let l = Object.keys({ ...n, ...t == null ? void 0 : t.getTypeMap() }), c = ti(a, l);
          e.reportError(new Y(`Cannot extend type "${a}" because it is not defined.` + Fr(c), { nodes: i.name }));
        }
      }
    }
    var lN = { [v.SCALAR_TYPE_DEFINITION]: v.SCALAR_TYPE_EXTENSION, [v.OBJECT_TYPE_DEFINITION]: v.OBJECT_TYPE_EXTENSION, [v.INTERFACE_TYPE_DEFINITION]: v.INTERFACE_TYPE_EXTENSION, [v.UNION_TYPE_DEFINITION]: v.UNION_TYPE_EXTENSION, [v.ENUM_TYPE_DEFINITION]: v.ENUM_TYPE_EXTENSION, [v.INPUT_OBJECT_TYPE_DEFINITION]: v.INPUT_OBJECT_TYPE_EXTENSION };
    function cN(e) {
      if (fn(e)) return v.SCALAR_TYPE_EXTENSION;
      if (je(e)) return v.OBJECT_TYPE_EXTENSION;
      if (Ge(e)) return v.INTERFACE_TYPE_EXTENSION;
      if (en(e)) return v.UNION_TYPE_EXTENSION;
      if (Vt(e)) return v.ENUM_TYPE_EXTENSION;
      if (Ze(e)) return v.INPUT_OBJECT_TYPE_EXTENSION;
      Xt(!1, "Unexpected type: " + Q(e));
    }
    function dN(e) {
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
    function hN(e) {
      return { ...Im(e), Field: { leave(t) {
        var n;
        let r = e.getFieldDef();
        if (!r) return !1;
        let i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map((a) => a.name.value));
        for (let a of r.args) if (!i.has(a.name) && $a(a)) {
          let s = Q(a.type);
          e.reportError(new Y(`Field "${r.name}" argument "${a.name}" of type "${s}" is required, but it was not provided.`, { nodes: t }));
        }
      } } };
    }
    function Im(e) {
      var t;
      let n = /* @__PURE__ */ Object.create(null), r = e.getSchema(), i = (t = r == null ? void 0 : r.getDirectives()) !== null && t !== void 0 ? t : Yi;
      for (let o of i) n[o.name] = Zr(o.args.filter($a), (u) => u.name);
      let a = e.getDocument().definitions;
      for (let o of a) if (o.kind === v.DIRECTIVE_DEFINITION) {
        var s;
        let u = (s = o.arguments) !== null && s !== void 0 ? s : [];
        n[o.name.value] = Zr(u.filter(fN), (l) => l.name.value);
      }
      return { Directive: { leave(o) {
        let u = o.name.value, l = n[u];
        if (l) {
          var c;
          let f = (c = o.arguments) !== null && c !== void 0 ? c : [], p = new Set(f.map((m) => m.name.value));
          for (let [m, g] of Object.entries(l)) if (!p.has(m)) {
            let _ = Al(g.type) ? Q(g.type) : Et(g.type);
            e.reportError(new Y(`Directive "@${u}" argument "${m}" of type "${_}" is required, but it was not provided.`, { nodes: o }));
          }
        }
      } } };
    }
    function fN(e) {
      return e.type.kind === v.NON_NULL_TYPE && e.defaultValue == null;
    }
    function pN(e) {
      return { Field(t) {
        let n = e.getType(), r = t.selectionSet;
        if (n) if (Gi(tt(n))) {
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
    function xr(e, t, n) {
      if (e) {
        if (e.kind === v.VARIABLE) {
          let r = e.name.value;
          if (n == null || n[r] === void 0) return;
          let i = n[r];
          return i === null && Ue(t) ? void 0 : i;
        }
        if (Ue(t)) return e.kind === v.NULL ? void 0 : xr(e, t.ofType, n);
        if (e.kind === v.NULL) return null;
        if (dt(t)) {
          let r = t.ofType;
          if (e.kind === v.LIST) {
            let a = [];
            for (let s of e.values) if (Rm(s, n)) {
              if (Ue(r)) return;
              a.push(null);
            } else {
              let o = xr(s, r, n);
              if (o === void 0) return;
              a.push(o);
            }
            return a;
          }
          let i = xr(e, r, n);
          return i === void 0 ? void 0 : [i];
        }
        if (Ze(t)) {
          if (e.kind !== v.OBJECT) return;
          let r = /* @__PURE__ */ Object.create(null), i = Zr(e.fields, (a) => a.name.value);
          for (let a of Object.values(t.getFields())) {
            let s = i[a.name];
            if (!s || Rm(s.value, n)) {
              if (a.defaultValue !== void 0) r[a.name] = a.defaultValue;
              else if (Ue(a.type)) return;
              continue;
            }
            let o = xr(s.value, a.type, n);
            if (o === void 0) return;
            r[a.name] = o;
          }
          if (t.isOneOf) {
            let a = Object.keys(r);
            if (a.length !== 1 || r[a[0]] === null) return;
          }
          return r;
        }
        if (Gi(t)) {
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
    function Rm(e, t) {
      return e.kind === v.VARIABLE && (t == null || t[e.name.value] === void 0);
    }
    function mN(e, t, n) {
      var r;
      let i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = Zr(a, (o) => o.name.value);
      for (let o of e.args) {
        let u = o.name, l = o.type, c = s[u];
        if (!c) {
          if (o.defaultValue !== void 0) i[u] = o.defaultValue;
          else if (Ue(l)) throw new Y(`Argument "${u}" of required type "${Q(l)}" was not provided.`, { nodes: t });
          continue;
        }
        let f = c.value, p = f.kind === v.NULL;
        if (f.kind === v.VARIABLE) {
          let g = f.name.value;
          if (n == null || !gN(n, g)) {
            if (o.defaultValue !== void 0) i[u] = o.defaultValue;
            else if (Ue(l)) throw new Y(`Argument "${u}" of required type "${Q(l)}" was provided the variable "$${g}" which was not provided a runtime value.`, { nodes: f });
            continue;
          }
          p = n[g] == null;
        }
        if (p && Ue(l)) throw new Y(`Argument "${u}" of non-null type "${Q(l)}" must not be null.`, { nodes: f });
        let m = xr(f, l, n);
        if (m === void 0) throw new Y(`Argument "${u}" has invalid value ${Et(f)}.`, { nodes: f });
        i[u] = m;
      }
      return i;
    }
    function Xa(e, t, n) {
      var r;
      let i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((a) => a.name.value === e.name);
      if (i) return mN(e, i, n);
    }
    function gN(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function EN(e, t, n, r, i) {
      let a = /* @__PURE__ */ new Map();
      return ql(e, t, n, r, i, a, /* @__PURE__ */ new Set()), a;
    }
    function ql(e, t, n, r, i, a, s) {
      for (let o of i.selections) switch (o.kind) {
        case v.FIELD: {
          if (!Gl(n, o)) continue;
          let u = _N(o), l = a.get(u);
          l !== void 0 ? l.push(o) : a.set(u, [o]);
          break;
        }
        case v.INLINE_FRAGMENT: {
          if (!Gl(n, o) || !Om(e, o, r)) continue;
          ql(e, t, n, r, o.selectionSet, a, s);
          break;
        }
        case v.FRAGMENT_SPREAD: {
          let u = o.name.value;
          if (s.has(u) || !Gl(n, o)) continue;
          s.add(u);
          let l = t[u];
          if (!l || !Om(e, l, r)) continue;
          ql(e, t, n, r, l.selectionSet, a, s);
          break;
        }
      }
    }
    function Gl(e, t) {
      let n = Xa(om, t, e);
      if ((n == null ? void 0 : n.if) === !0) return !1;
      let r = Xa(sm, t, e);
      return (r == null ? void 0 : r.if) !== !1;
    }
    function Om(e, t, n) {
      let r = t.typeCondition;
      if (!r) return !0;
      let i = rn(e, r);
      return i === n ? !0 : Kn(i) ? e.isSubType(i, n) : !1;
    }
    function _N(e) {
      return e.alias ? e.alias.value : e.name.value;
    }
    function DN(e) {
      return { OperationDefinition(t) {
        if (t.operation === "subscription") {
          let n = e.getSchema(), r = n.getSubscriptionType();
          if (r) {
            let i = t.name ? t.name.value : null, a = /* @__PURE__ */ Object.create(null), s = e.getDocument(), o = /* @__PURE__ */ Object.create(null);
            for (let l of s.definitions) l.kind === v.FRAGMENT_DEFINITION && (o[l.name.value] = l);
            let u = EN(n, o, a, r, t.selectionSet);
            if (u.size > 1) {
              let l = [...u.values()].slice(1).flat();
              e.reportError(new Y(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", { nodes: l }));
            }
            for (let l of u.values()) l[0].name.value.startsWith("__") && e.reportError(new Y(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", { nodes: l }));
          }
        }
      } };
    }
    function Hl(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = t(r), a = n.get(i);
        a === void 0 ? n.set(i, [r]) : a.push(r);
      }
      return n;
    }
    function vN(e) {
      return { DirectiveDefinition(r) {
        var i;
        let a = (i = r.arguments) !== null && i !== void 0 ? i : [];
        return n(`@${r.name.value}`, a);
      }, InterfaceTypeDefinition: t, InterfaceTypeExtension: t, ObjectTypeDefinition: t, ObjectTypeExtension: t };
      function t(r) {
        var i;
        let a = r.name.value, s = (i = r.fields) !== null && i !== void 0 ? i : [];
        for (let u of s) {
          var o;
          let l = u.name.value, c = (o = u.arguments) !== null && o !== void 0 ? o : [];
          n(`${a}.${l}`, c);
        }
        return !1;
      }
      function n(r, i) {
        let a = Hl(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`Argument "${r}(${s}:)" can only be defined once.`, { nodes: o.map((u) => u.name) }));
        return !1;
      }
    }
    function xm(e) {
      return { Field: t, Directive: t };
      function t(n) {
        var r;
        let i = (r = n.arguments) !== null && r !== void 0 ? r : [], a = Hl(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`There can be only one argument named "${s}".`, { nodes: o.map((u) => u.name) }));
      }
    }
    function bN(e) {
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
    function km(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Yi;
      for (let o of r) t[o.name] = !o.isRepeatable;
      let i = e.getDocument().definitions;
      for (let o of i) o.kind === v.DIRECTIVE_DEFINITION && (t[o.name.value] = !o.repeatable);
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      return { enter(o) {
        if (!("directives" in o) || !o.directives) return;
        let u;
        if (o.kind === v.SCHEMA_DEFINITION || o.kind === v.SCHEMA_EXTENSION) u = a;
        else if (za(o) || Bl(o)) {
          let l = o.name.value;
          u = s[l], u === void 0 && (s[l] = u = /* @__PURE__ */ Object.create(null));
        } else u = /* @__PURE__ */ Object.create(null);
        for (let l of o.directives) {
          let c = l.name.value;
          t[c] && (u[c] ? e.reportError(new Y(`The directive "@${c}" can only be used once at this location.`, { nodes: [u[c], l] })) : u[c] = l);
        }
      } };
    }
    function yN(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { EnumTypeDefinition: i, EnumTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let u = (s = a.values) !== null && s !== void 0 ? s : [], l = r[o];
        for (let c of u) {
          let f = c.name.value, p = n[o];
          Vt(p) && p.getValue(f) ? e.reportError(new Y(`Enum value "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : l[f] ? e.reportError(new Y(`Enum value "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })) : l[f] = c.name;
        }
        return !1;
      }
    }
    function NN(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { InputObjectTypeDefinition: i, InputObjectTypeExtension: i, InterfaceTypeDefinition: i, InterfaceTypeExtension: i, ObjectTypeDefinition: i, ObjectTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let u = (s = a.fields) !== null && s !== void 0 ? s : [], l = r[o];
        for (let c of u) {
          let f = c.name.value;
          CN(n[o], f) ? e.reportError(new Y(`Field "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : l[f] ? e.reportError(new Y(`Field "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })) : l[f] = c.name;
        }
        return !1;
      }
    }
    function CN(e, t) {
      return je(e) || Ge(e) || Ze(e) ? e.getFields()[t] != null : !1;
    }
    function TN(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: () => !1, FragmentDefinition(n) {
        let r = n.name.value;
        return t[r] ? e.reportError(new Y(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })) : t[r] = n.name, !1;
      } };
    }
    function Mm(e) {
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
    function wN(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition(n) {
        let r = n.name;
        return r && (t[r.value] ? e.reportError(new Y(`There can be only one operation named "${r.value}".`, { nodes: [t[r.value], r] })) : t[r.value] = r), !1;
      }, FragmentDefinition: () => !1 };
    }
    function AN(e) {
      let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null), r = t ? { query: t.getQueryType(), mutation: t.getMutationType(), subscription: t.getSubscriptionType() } : {};
      return { SchemaDefinition: i, SchemaExtension: i };
      function i(a) {
        var s;
        let o = (s = a.operationTypes) !== null && s !== void 0 ? s : [];
        for (let u of o) {
          let l = u.operation, c = n[l];
          r[l] ? e.reportError(new Y(`Type for ${l} already defined in the schema. It cannot be redefined.`, { nodes: u })) : c ? e.reportError(new Y(`There can be only one ${l} type in schema.`, { nodes: [c, u] })) : n[l] = u;
        }
        return !1;
      }
    }
    function SN(e) {
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
    function LN(e) {
      return { OperationDefinition(t) {
        var n;
        let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = Hl(r, (a) => a.variable.name.value);
        for (let [a, s] of i) s.length > 1 && e.reportError(new Y(`There can be only one variable named "$${a}".`, { nodes: s.map((o) => o.variable.name) }));
      } };
    }
    function FN(e) {
      let t = {};
      return { OperationDefinition: { enter() {
        t = {};
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      }, ListValue(n) {
        let r = Fl(e.getParentInputType());
        if (!dt(r)) return ii(e, n), !1;
      }, ObjectValue(n) {
        let r = tt(e.getInputType());
        if (!Ze(r)) return ii(e, n), !1;
        let i = Zr(n.fields, (a) => a.name.value);
        for (let a of Object.values(r.getFields())) if (!i[a.name] && tm(a)) {
          let s = Q(a.type);
          e.reportError(new Y(`Field "${r.name}.${a.name}" of required type "${s}" was not provided.`, { nodes: n }));
        }
        r.isOneOf && IN(e, n, r, i, t);
      }, ObjectField(n) {
        let r = tt(e.getParentInputType());
        if (!e.getInputType() && Ze(r)) {
          let i = ti(n.name.value, Object.keys(r.getFields()));
          e.reportError(new Y(`Field "${n.name.value}" is not defined by type "${r.name}".` + Fr(i), { nodes: n }));
        }
      }, NullValue(n) {
        let r = e.getInputType();
        Ue(r) && e.reportError(new Y(`Expected value of type "${Q(r)}", found ${Et(n)}.`, { nodes: n }));
      }, EnumValue: (n) => ii(e, n), IntValue: (n) => ii(e, n), FloatValue: (n) => ii(e, n), StringValue: (n) => ii(e, n), BooleanValue: (n) => ii(e, n) };
    }
    function ii(e, t) {
      let n = e.getInputType();
      if (!n) return;
      let r = tt(n);
      if (!Gi(r)) {
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
    function IN(e, t, n, r, i) {
      var a;
      let s = Object.keys(r);
      if (s.length !== 1) {
        e.reportError(new Y(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] }));
        return;
      }
      let o = (a = r[s[0]]) === null || a === void 0 ? void 0 : a.value, u = !o || o.kind === v.NULL, l = (o == null ? void 0 : o.kind) === v.VARIABLE;
      if (u) {
        e.reportError(new Y(`Field "${n.name}.${s[0]}" must be non-null.`, { nodes: [t] }));
        return;
      }
      if (l) {
        let c = o.name.value;
        i[c].type.kind !== v.NON_NULL_TYPE && e.reportError(new Y(`Variable "${c}" must be non-nullable to be used for OneOf Input Object "${n.name}".`, { nodes: [t] }));
      }
    }
    function RN(e) {
      return { VariableDefinition(t) {
        let n = rn(e.getSchema(), t.type);
        if (n !== void 0 && !tn(n)) {
          let r = t.variable.name.value, i = Et(t.type);
          e.reportError(new Y(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: t.type }));
        }
      } };
    }
    function ON(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: { enter() {
        t = /* @__PURE__ */ Object.create(null);
      }, leave(n) {
        let r = e.getRecursiveVariableUsages(n);
        for (let { node: i, type: a, defaultValue: s, parentType: o } of r) {
          let u = i.name.value, l = t[u];
          if (l && a) {
            let c = e.getSchema(), f = rn(c, l.type);
            if (f && !xN(c, f, l.defaultValue, a, s)) {
              let p = Q(f), m = Q(a);
              e.reportError(new Y(`Variable "$${u}" of type "${p}" used in position expecting type "${m}".`, { nodes: [l, i] }));
            }
            Ze(o) && o.isOneOf && Ll(f) && e.reportError(new Y(`Variable "$${u}" is of type "${f}" but must be non-nullable to be used for OneOf Input Object "${o}".`, { nodes: [l, i] }));
          }
        }
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      } };
    }
    function xN(e, t, n, r, i) {
      if (Ue(r) && !Ue(t)) {
        if (!(n != null && n.kind !== v.NULL) && i === void 0) return !1;
        let a = r.ofType;
        return Wi(e, t, a);
      }
      return Wi(e, t, r);
    }
    var kN = Object.freeze([Yy]), Um = Object.freeze([vm, wN, Gy, DN, Nm, By, RN, pN, My, TN, jy, Tm, sN, zy, LN, Xy, Jy, ym, km, Vy, xm, FN, hN, ON, Zy, Mm, ...kN]), MN = Object.freeze([Hy, AN, SN, yN, NN, vN, bN, Nm, ym, km, uN, bm, xm, Mm, Im]), Pm = class {
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
    }, UN = class extends Pm {
      constructor(e, t, n) {
        super(e, n), this._schema = t;
      }
      get [Symbol.toStringTag]() {
        return "SDLValidationContext";
      }
      getSchema() {
        return this._schema;
      }
    }, PN = class extends Pm {
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
          let n = [], r = new _m(this._schema);
          Ir(e, Dm(r, { VariableDefinition: () => !1, Variable(i) {
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
    function Bm(e, t, n = Um, r, i = new _m(e)) {
      var a;
      let s = (a = r == null ? void 0 : r.maxErrors) !== null && a !== void 0 ? a : 100;
      t || Re(!1, "Must provide document."), _y(e);
      let o = Object.freeze({}), u = [], l = new PN(e, t, i, (f) => {
        if (u.length >= s) throw u.push(new Y("Too many validation errors, error limit reached. Validation aborted.")), o;
        u.push(f);
      }), c = Gp(n.map((f) => f(l)));
      try {
        Ir(t, Dm(i, c));
      } catch (f) {
        if (f !== o) throw f;
      }
      return u;
    }
    function BN(e, t, n = MN) {
      let r = [], i = new UN(e, t, (s) => {
        r.push(s);
      }), a = n.map((s) => s(i));
      return Ir(e, Gp(a)), r;
    }
    function VN(e) {
      let t = BN(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    function $N(e) {
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
    function Vm(e, t) {
      sr(e) && sr(e.__schema) || Re(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Q(e)}.`);
      let n = e.__schema, r = ei(n.types, (S) => S.name, (S) => p(S));
      for (let S of [...go, ..._o]) r[S.name] && (r[S.name] = S);
      let i = n.queryType ? c(n.queryType) : null, a = n.mutationType ? c(n.mutationType) : null, s = n.subscriptionType ? c(n.subscriptionType) : null, o = n.directives ? n.directives.map(B) : [];
      return new Ml({ description: n.description, query: i, mutation: a, subscription: s, types: Object.values(r), directives: o, assumeValid: t == null ? void 0 : t.assumeValid });
      function u(S) {
        if (S.kind === qe.LIST) {
          let K = S.ofType;
          if (!K) throw new Error("Decorated type deeper than introspection query.");
          return new Ft(u(K));
        }
        if (S.kind === qe.NON_NULL) {
          let K = S.ofType;
          if (!K) throw new Error("Decorated type deeper than introspection query.");
          let $ = u(K);
          return new Ce(oy($));
        }
        return l(S);
      }
      function l(S) {
        let K = S.name;
        if (!K) throw new Error(`Unknown type reference: ${Q(S)}.`);
        let $ = r[K];
        if (!$) throw new Error(`Invalid or incomplete schema, unknown type: ${K}. Ensure that a full introspection query is used in order to build a client schema.`);
        return $;
      }
      function c(S) {
        return iy(l(S));
      }
      function f(S) {
        return ay(l(S));
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
        return S.interfaces.map(f);
      }
      function _(S) {
        return new pn({ name: S.name, description: S.description, interfaces: () => g(S), fields: () => x(S) });
      }
      function L(S) {
        return new Rr({ name: S.name, description: S.description, interfaces: () => g(S), fields: () => x(S) });
      }
      function A(S) {
        if (!S.possibleTypes) {
          let K = Q(S);
          throw new Error(`Introspection result missing possibleTypes: ${K}.`);
        }
        return new po({ name: S.name, description: S.description, types: () => S.possibleTypes.map(c) });
      }
      function F(S) {
        if (!S.enumValues) {
          let K = Q(S);
          throw new Error(`Introspection result missing enumValues: ${K}.`);
        }
        return new Or({ name: S.name, description: S.description, values: ei(S.enumValues, (K) => K.name, (K) => ({ description: K.description, deprecationReason: K.deprecationReason })) });
      }
      function C(S) {
        if (!S.inputFields) {
          let K = Q(S);
          throw new Error(`Introspection result missing inputFields: ${K}.`);
        }
        return new Ka({ name: S.name, description: S.description, fields: () => q(S.inputFields), isOneOf: S.isOneOf });
      }
      function x(S) {
        if (!S.fields) throw new Error(`Introspection result missing fields: ${Q(S)}.`);
        return ei(S.fields, (K) => K.name, U);
      }
      function U(S) {
        let K = u(S.type);
        if (!ni(K)) {
          let $ = Q(K);
          throw new Error(`Introspection must provide output type for fields, but received: ${$}.`);
        }
        if (!S.args) {
          let $ = Q(S);
          throw new Error(`Introspection result missing field args: ${$}.`);
        }
        return { description: S.description, deprecationReason: S.deprecationReason, type: K, args: q(S.args) };
      }
      function q(S) {
        return ei(S, (K) => K.name, I);
      }
      function I(S) {
        let K = u(S.type);
        if (!tn(K)) {
          let xe = Q(K);
          throw new Error(`Introspection must provide input type for arguments, but received: ${xe}.`);
        }
        let $ = S.defaultValue != null ? xr(Yb(S.defaultValue), K) : void 0;
        return { description: S.description, type: K, defaultValue: $, deprecationReason: S.deprecationReason };
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
        return new lr({ name: S.name, description: S.description, isRepeatable: S.isRepeatable, locations: S.locations.slice(), args: q(S.args) });
      }
    }
    function KN(e, t, n) {
      var r, i, a, s;
      let o = [], u = /* @__PURE__ */ Object.create(null), l = [], c, f = [];
      for (let y of t.definitions) if (y.kind === v.SCHEMA_DEFINITION) c = y;
      else if (y.kind === v.SCHEMA_EXTENSION) f.push(y);
      else if (za(y)) o.push(y);
      else if (Bl(y)) {
        let ee = y.name.value, z = u[ee];
        u[ee] = z ? z.concat([y]) : [y];
      } else y.kind === v.DIRECTIVE_DEFINITION && l.push(y);
      if (Object.keys(u).length === 0 && o.length === 0 && l.length === 0 && f.length === 0 && c == null) return e;
      let p = /* @__PURE__ */ Object.create(null);
      for (let y of e.types) p[y.name] = F(y);
      for (let y of o) {
        var m;
        let ee = y.name.value;
        p[ee] = (m = $m[ee]) !== null && m !== void 0 ? m : ke(y);
      }
      let g = { query: e.query && L(e.query), mutation: e.mutation && L(e.mutation), subscription: e.subscription && L(e.subscription), ...c && $([c]), ...$(f) };
      return { description: (r = c) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value, ...g, types: Object.values(p), directives: [...e.directives.map(A), ...l.map(G)], extensions: /* @__PURE__ */ Object.create(null), astNode: (a = c) !== null && a !== void 0 ? a : e.astNode, extensionASTNodes: e.extensionASTNodes.concat(f), assumeValid: (s = n == null ? void 0 : n.assumeValid) !== null && s !== void 0 ? s : !1 };
      function _(y) {
        return dt(y) ? new Ft(_(y.ofType)) : Ue(y) ? new Ce(_(y.ofType)) : L(y);
      }
      function L(y) {
        return p[y.name];
      }
      function A(y) {
        let ee = y.toConfig();
        return new lr({ ...ee, args: or(ee.args, K) });
      }
      function F(y) {
        if (gm(y) || hy(y)) return y;
        if (fn(y)) return U(y);
        if (je(y)) return q(y);
        if (Ge(y)) return I(y);
        if (en(y)) return B(y);
        if (Vt(y)) return x(y);
        if (Ze(y)) return C(y);
        Xt(!1, "Unexpected type: " + Q(y));
      }
      function C(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[z.name]) !== null && ee !== void 0 ? ee : [];
        return new Ka({ ...z, fields: () => ({ ...or(z.fields, (M) => ({ ...M, type: _(M.type) })), ...oe(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function x(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[y.name]) !== null && ee !== void 0 ? ee : [];
        return new Or({ ...z, values: { ...z.values, ...de(re) }, extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function U(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[z.name]) !== null && ee !== void 0 ? ee : [], M = z.specifiedByURL;
        for (let ue of re) {
          var P;
          M = (P = Km(ue)) !== null && P !== void 0 ? P : M;
        }
        return new ur({ ...z, specifiedByURL: M, extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function q(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[z.name]) !== null && ee !== void 0 ? ee : [];
        return new pn({ ...z, interfaces: () => [...y.getInterfaces().map(L), ...le(re)], fields: () => ({ ...or(z.fields, S), ...J(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function I(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[z.name]) !== null && ee !== void 0 ? ee : [];
        return new Rr({ ...z, interfaces: () => [...y.getInterfaces().map(L), ...le(re)], fields: () => ({ ...or(z.fields, S), ...J(re) }), extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function B(y) {
        var ee;
        let z = y.toConfig(), re = (ee = u[z.name]) !== null && ee !== void 0 ? ee : [];
        return new po({ ...z, types: () => [...y.getTypes().map(L), ...Ie(re)], extensionASTNodes: z.extensionASTNodes.concat(re) });
      }
      function S(y) {
        return { ...y, type: _(y.type), args: y.args && or(y.args, K) };
      }
      function K(y) {
        return { ...y, type: _(y.type) };
      }
      function $(y) {
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
        let z = y.name.value, re = (ee = $m[z]) !== null && ee !== void 0 ? ee : p[z];
        if (re === void 0) throw new Error(`Unknown type: "${z}".`);
        return re;
      }
      function Z(y) {
        return y.kind === v.LIST_TYPE ? new Ft(Z(y.type)) : y.kind === v.NON_NULL_TYPE ? new Ce(Z(y.type)) : xe(y);
      }
      function G(y) {
        var ee;
        return new lr({ name: y.name.value, description: (ee = y.description) === null || ee === void 0 ? void 0 : ee.value, locations: y.locations.map(({ value: z }) => z), isRepeatable: y.repeatable, args: ne(y.arguments), astNode: y });
      }
      function J(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.fields) !== null && z !== void 0 ? z : [];
          for (let ue of P) {
            var re;
            ee[ue.name.value] = { type: Z(ue.type), description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, args: ne(ue.arguments), deprecationReason: yo(ue), astNode: ue };
          }
        }
        return ee;
      }
      function ne(y) {
        let ee = y ?? [], z = /* @__PURE__ */ Object.create(null);
        for (let M of ee) {
          var re;
          let P = Z(M.type);
          z[M.name.value] = { type: P, description: (re = M.description) === null || re === void 0 ? void 0 : re.value, defaultValue: xr(M.defaultValue, P), deprecationReason: yo(M), astNode: M };
        }
        return z;
      }
      function oe(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.fields) !== null && z !== void 0 ? z : [];
          for (let ue of P) {
            var re;
            let _e = Z(ue.type);
            ee[ue.name.value] = { type: _e, description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, defaultValue: xr(ue.defaultValue, _e), deprecationReason: yo(ue), astNode: ue };
          }
        }
        return ee;
      }
      function de(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var z;
          let P = (z = M.values) !== null && z !== void 0 ? z : [];
          for (let ue of P) {
            var re;
            ee[ue.name.value] = { description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, deprecationReason: yo(ue), astNode: ue };
          }
        }
        return ee;
      }
      function le(y) {
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
        let z = y.name.value, re = (ee = u[z]) !== null && ee !== void 0 ? ee : [];
        switch (y.kind) {
          case v.OBJECT_TYPE_DEFINITION: {
            var M;
            let Se = [y, ...re];
            return new pn({ name: z, description: (M = y.description) === null || M === void 0 ? void 0 : M.value, interfaces: () => le(Se), fields: () => J(Se), astNode: y, extensionASTNodes: re });
          }
          case v.INTERFACE_TYPE_DEFINITION: {
            var P;
            let Se = [y, ...re];
            return new Rr({ name: z, description: (P = y.description) === null || P === void 0 ? void 0 : P.value, interfaces: () => le(Se), fields: () => J(Se), astNode: y, extensionASTNodes: re });
          }
          case v.ENUM_TYPE_DEFINITION: {
            var ue;
            let Se = [y, ...re];
            return new Or({ name: z, description: (ue = y.description) === null || ue === void 0 ? void 0 : ue.value, values: de(Se), astNode: y, extensionASTNodes: re });
          }
          case v.UNION_TYPE_DEFINITION: {
            var _e;
            let Se = [y, ...re];
            return new po({ name: z, description: (_e = y.description) === null || _e === void 0 ? void 0 : _e.value, types: () => Ie(Se), astNode: y, extensionASTNodes: re });
          }
          case v.SCALAR_TYPE_DEFINITION: {
            var Xe;
            return new ur({ name: z, description: (Xe = y.description) === null || Xe === void 0 ? void 0 : Xe.value, specifiedByURL: Km(y), astNode: y, extensionASTNodes: re });
          }
          case v.INPUT_OBJECT_TYPE_DEFINITION: {
            var Tt;
            let Se = [y, ...re];
            return new Ka({ name: z, description: (Tt = y.description) === null || Tt === void 0 ? void 0 : Tt.value, fields: () => oe(Se), astNode: y, extensionASTNodes: re, isOneOf: jN(y) });
          }
        }
      }
    }
    var $m = Zr([...go, ..._o], (e) => e.name);
    function yo(e) {
      let t = Xa(xl, e);
      return t == null ? void 0 : t.reason;
    }
    function Km(e) {
      let t = Xa(um, e);
      return t == null ? void 0 : t.url;
    }
    function jN(e) {
      return !!Xa(lm, e);
    }
    function jm(e, t) {
      e != null && e.kind === v.DOCUMENT || Re(!1, "Must provide valid Document AST."), (t == null ? void 0 : t.assumeValid) !== !0 && (t == null ? void 0 : t.assumeValidSDL) !== !0 && VN(e);
      let n = KN({ description: void 0, types: [], directives: [], extensions: /* @__PURE__ */ Object.create(null), extensionASTNodes: [], assumeValid: !1 }, e, t);
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
      let r = [...n.directives, ...Yi.filter((i) => n.directives.every((a) => a.name !== i.name))];
      return new Ml({ ...n, directives: r });
    }
    function ai(e) {
      let t = Object.keys(e), n = t.length, r = new Array(n);
      for (let i = 0; i < n; ++i) r[i] = e[t[i]];
      return r;
    }
    function Ye(e, t) {
      return qN(t, qm(e.string));
    }
    function qN(e, t) {
      if (!t || t.trim() === "" || t.trim() === ":" || t.trim() === "{") return Wl(e, (r) => !r.isDeprecated);
      let n = e.map((r) => ({ proximity: GN(qm(r.label), t), entry: r }));
      return Wl(Wl(n, (r) => r.proximity <= 2), (r) => !r.entry.isDeprecated).sort((r, i) => (r.entry.isDeprecated ? 1 : 0) - (i.entry.isDeprecated ? 1 : 0) || r.proximity - i.proximity || r.entry.label.length - i.entry.label.length).map((r) => r.entry);
    }
    function Wl(e, t) {
      let n = e.filter(t);
      return n.length === 0 ? e : n;
    }
    function qm(e) {
      return e.toLowerCase().replaceAll(/\W/g, "");
    }
    function GN(e, t) {
      let n = HN(t, e);
      return e.length > t.length && (n -= e.length - t.length - 1, n += e.indexOf(t) === 0 ? 0 : 0.5), n;
    }
    function HN(e, t) {
      let n, r, i = [], a = e.length, s = t.length;
      for (n = 0; n <= a; n++) i[n] = [n];
      for (r = 1; r <= s; r++) i[0][r] = r;
      for (n = 1; n <= a; n++) for (r = 1; r <= s; r++) {
        let o = e[n - 1] === t[r - 1] ? 0 : 1;
        i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + o), n > 1 && r > 1 && e[n - 1] === t[r - 2] && e[n - 2] === t[r - 1] && (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + o));
      }
      return i[a][s];
    }
    var WN = (e) => ` {
   $1
}`, No = (e, t, n) => {
      if (!t) return n ?? e;
      let r = tt(t);
      return je(r) || Ze(r) || dt(r) || Kn(r) ? e + WN() : n ?? e;
    }, Gm = (e, t, n) => {
      if (dt(t)) {
        let r = tt(t.ofType);
        return e + `[${No("", r, "$1")}]`;
      }
      return No(e, t, n);
    }, YN = (e) => {
      let t = e.args.filter((n) => n.type.toString().endsWith("!"));
      if (t.length) return e.name + `(${t.map((n, r) => `${n.name}: $${r + 1}`)}) ${No("", e.type, `
`)}`;
    }, Hm;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(Hm || (Hm = {}));
    var Yl;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(Yl || (Yl = {}));
    var Wm;
    (function(e) {
      e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(Wm || (Wm = {}));
    var Co;
    (function(e) {
      e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(Co || (Co = {}));
    var Fn;
    (function(e) {
      function t(r, i) {
        return r === Number.MAX_VALUE && (r = Co.MAX_VALUE), i === Number.MAX_VALUE && (i = Co.MAX_VALUE), { line: r, character: i };
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
    var To;
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
    })(To || (To = {}));
    var Ym;
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
    })(Ym || (Ym = {}));
    var zl;
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
    })(zl || (zl = {}));
    var zm;
    (function(e) {
      function t(r, i) {
        return { range: r, color: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.range) && zl.is(i.color);
      }
      e.is = n;
    })(zm || (zm = {}));
    var Xm;
    (function(e) {
      function t(r, i, a) {
        return { label: r, textEdit: i, additionalTextEdits: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.string(i.label) && (k.undefined(i.textEdit) || Xi.is(i)) && (k.undefined(i.additionalTextEdits) || k.typedArray(i.additionalTextEdits, Xi.is));
      }
      e.is = n;
    })(Xm || (Xm = {}));
    var Jm;
    (function(e) {
      e.Comment = "comment", e.Imports = "imports", e.Region = "region";
    })(Jm || (Jm = {}));
    var Qm;
    (function(e) {
      function t(r, i, a, s, o, u) {
        let l = { startLine: r, endLine: i };
        return k.defined(a) && (l.startCharacter = a), k.defined(s) && (l.endCharacter = s), k.defined(o) && (l.kind = o), k.defined(u) && (l.collapsedText = u), l;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.uinteger(i.startLine) && k.uinteger(i.startLine) && (k.undefined(i.startCharacter) || k.uinteger(i.startCharacter)) && (k.undefined(i.endCharacter) || k.uinteger(i.endCharacter)) && (k.undefined(i.kind) || k.string(i.kind));
      }
      e.is = n;
    })(Qm || (Qm = {}));
    var Xl;
    (function(e) {
      function t(r, i) {
        return { location: r, message: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && To.is(i.location) && k.string(i.message);
      }
      e.is = n;
    })(Xl || (Xl = {}));
    var Zm;
    (function(e) {
      e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
    })(Zm || (Zm = {}));
    var eg;
    (function(e) {
      e.Unnecessary = 1, e.Deprecated = 2;
    })(eg || (eg = {}));
    var tg;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && k.string(r.href);
      }
      e.is = t;
    })(tg || (tg = {}));
    var wo;
    (function(e) {
      function t(r, i, a, s, o, u) {
        let l = { range: r, message: i };
        return k.defined(a) && (l.severity = a), k.defined(s) && (l.code = s), k.defined(o) && (l.source = o), k.defined(u) && (l.relatedInformation = u), l;
      }
      e.create = t;
      function n(r) {
        var i;
        let a = r;
        return k.defined(a) && rt.is(a.range) && k.string(a.message) && (k.number(a.severity) || k.undefined(a.severity)) && (k.integer(a.code) || k.string(a.code) || k.undefined(a.code)) && (k.undefined(a.codeDescription) || k.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (k.string(a.source) || k.undefined(a.source)) && (k.undefined(a.relatedInformation) || k.typedArray(a.relatedInformation, Xl.is));
      }
      e.is = n;
    })(wo || (wo = {}));
    var zi;
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
    })(zi || (zi = {}));
    var Xi;
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
    })(Xi || (Xi = {}));
    var Jl;
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
    })(Jl || (Jl = {}));
    var Ji;
    (function(e) {
      function t(n) {
        let r = n;
        return k.string(r);
      }
      e.is = t;
    })(Ji || (Ji = {}));
    var ng;
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
        return Xi.is(s) && (Jl.is(s.annotationId) || Ji.is(s.annotationId));
      }
      e.is = i;
    })(ng || (ng = {}));
    var Ql;
    (function(e) {
      function t(r, i) {
        return { textDocument: r, edits: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rc.is(i.textDocument) && Array.isArray(i.edits);
      }
      e.is = n;
    })(Ql || (Ql = {}));
    var Zl;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "create", uri: r };
        return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "create" && k.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ji.is(i.annotationId));
      }
      e.is = n;
    })(Zl || (Zl = {}));
    var ec;
    (function(e) {
      function t(r, i, a, s) {
        let o = { kind: "rename", oldUri: r, newUri: i };
        return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (o.options = a), s !== void 0 && (o.annotationId = s), o;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "rename" && k.string(i.oldUri) && k.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ji.is(i.annotationId));
      }
      e.is = n;
    })(ec || (ec = {}));
    var tc;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "delete", uri: r };
        return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "delete" && k.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || k.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || k.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Ji.is(i.annotationId));
      }
      e.is = n;
    })(tc || (tc = {}));
    var nc;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => k.string(i.kind) ? Zl.is(i) || ec.is(i) || tc.is(i) : Ql.is(i)));
      }
      e.is = t;
    })(nc || (nc = {}));
    var rg;
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
    })(rg || (rg = {}));
    var ig;
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
    })(ig || (ig = {}));
    var rc;
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
    })(rc || (rc = {}));
    var ag;
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
    })(ag || (ag = {}));
    var ic;
    (function(e) {
      e.PlainText = "plaintext", e.Markdown = "markdown";
      function t(n) {
        let r = n;
        return r === e.PlainText || r === e.Markdown;
      }
      e.is = t;
    })(ic || (ic = {}));
    var Ja;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(n) && ic.is(r.kind) && k.string(r.value);
      }
      e.is = t;
    })(Ja || (Ja = {}));
    var sg;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(sg || (sg = {}));
    var Qi;
    (function(e) {
      e.PlainText = 1, e.Snippet = 2;
    })(Qi || (Qi = {}));
    var og;
    (function(e) {
      e.Deprecated = 1;
    })(og || (og = {}));
    var ug;
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
    })(ug || (ug = {}));
    var si;
    (function(e) {
      e.asIs = 1, e.adjustIndentation = 2;
    })(si || (si = {}));
    var lg;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (k.string(r.detail) || r.detail === void 0) && (k.string(r.description) || r.description === void 0);
      }
      e.is = t;
    })(lg || (lg = {}));
    var cg;
    (function(e) {
      function t(n) {
        return { label: n };
      }
      e.create = t;
    })(cg || (cg = {}));
    var dg;
    (function(e) {
      function t(n, r) {
        return { items: n || [], isIncomplete: !!r };
      }
      e.create = t;
    })(dg || (dg = {}));
    var Ao;
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
    })(Ao || (Ao = {}));
    var hg;
    (function(e) {
      function t(n) {
        let r = n;
        return !!r && k.objectLiteral(r) && (Ja.is(r.contents) || Ao.is(r.contents) || k.typedArray(r.contents, Ao.is)) && (n.range === void 0 || rt.is(n.range));
      }
      e.is = t;
    })(hg || (hg = {}));
    var fg;
    (function(e) {
      function t(n, r) {
        return r ? { label: n, documentation: r } : { label: n };
      }
      e.create = t;
    })(fg || (fg = {}));
    var pg;
    (function(e) {
      function t(n, r, ...i) {
        let a = { label: n };
        return k.defined(r) && (a.documentation = r), k.defined(i) ? a.parameters = i : a.parameters = [], a;
      }
      e.create = t;
    })(pg || (pg = {}));
    var mg;
    (function(e) {
      e.Text = 1, e.Read = 2, e.Write = 3;
    })(mg || (mg = {}));
    var gg;
    (function(e) {
      function t(n, r) {
        let i = { range: n };
        return k.number(r) && (i.kind = r), i;
      }
      e.create = t;
    })(gg || (gg = {}));
    var Eg;
    (function(e) {
      e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
    })(Eg || (Eg = {}));
    var _g;
    (function(e) {
      e.Deprecated = 1;
    })(_g || (_g = {}));
    var Dg;
    (function(e) {
      function t(n, r, i, a, s) {
        let o = { name: n, kind: r, location: { uri: a, range: i } };
        return s && (o.containerName = s), o;
      }
      e.create = t;
    })(Dg || (Dg = {}));
    var vg;
    (function(e) {
      function t(n, r, i, a) {
        return a !== void 0 ? { name: n, kind: r, location: { uri: i, range: a } } : { name: n, kind: r, location: { uri: i } };
      }
      e.create = t;
    })(vg || (vg = {}));
    var bg;
    (function(e) {
      function t(r, i, a, s, o, u) {
        let l = { name: r, detail: i, kind: a, range: s, selectionRange: o };
        return u !== void 0 && (l.children = u), l;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.name) && k.number(i.kind) && rt.is(i.range) && rt.is(i.selectionRange) && (i.detail === void 0 || k.string(i.detail)) && (i.deprecated === void 0 || k.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
      }
      e.is = n;
    })(bg || (bg = {}));
    var yg;
    (function(e) {
      e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
    })(yg || (yg = {}));
    var So;
    (function(e) {
      e.Invoked = 1, e.Automatic = 2;
    })(So || (So = {}));
    var Ng;
    (function(e) {
      function t(r, i, a) {
        let s = { diagnostics: r };
        return i != null && (s.only = i), a != null && (s.triggerKind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.typedArray(i.diagnostics, wo.is) && (i.only === void 0 || k.typedArray(i.only, k.string)) && (i.triggerKind === void 0 || i.triggerKind === So.Invoked || i.triggerKind === So.Automatic);
      }
      e.is = n;
    })(Ng || (Ng = {}));
    var Cg;
    (function(e) {
      function t(r, i, a) {
        let s = { title: r }, o = !0;
        return typeof i == "string" ? (o = !1, s.kind = i) : zi.is(i) ? s.command = i : s.edit = i, o && a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.title) && (i.diagnostics === void 0 || k.typedArray(i.diagnostics, wo.is)) && (i.kind === void 0 || k.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || zi.is(i.command)) && (i.isPreferred === void 0 || k.boolean(i.isPreferred)) && (i.edit === void 0 || nc.is(i.edit));
      }
      e.is = n;
    })(Cg || (Cg = {}));
    var Tg;
    (function(e) {
      function t(r, i) {
        let a = { range: r };
        return k.defined(i) && (a.data = i), a;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rt.is(i.range) && (k.undefined(i.command) || zi.is(i.command));
      }
      e.is = n;
    })(Tg || (Tg = {}));
    var wg;
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
    })(wg || (wg = {}));
    var Ag;
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
    })(Ag || (Ag = {}));
    var Sg;
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
    })(Sg || (Sg = {}));
    var Lg;
    (function(e) {
      e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
    })(Lg || (Lg = {}));
    var Fg;
    (function(e) {
      e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
    })(Fg || (Fg = {}));
    var Ig;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
      }
      e.is = t;
    })(Ig || (Ig = {}));
    var Rg;
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
    })(Rg || (Rg = {}));
    var Og;
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
    })(Og || (Og = {}));
    var xg;
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
    })(xg || (xg = {}));
    var kg;
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
    })(kg || (kg = {}));
    var ac;
    (function(e) {
      e.Type = 1, e.Parameter = 2;
      function t(n) {
        return n === 1 || n === 2;
      }
      e.is = t;
    })(ac || (ac = {}));
    var sc;
    (function(e) {
      function t(r) {
        return { value: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && (i.tooltip === void 0 || k.string(i.tooltip) || Ja.is(i.tooltip)) && (i.location === void 0 || To.is(i.location)) && (i.command === void 0 || zi.is(i.command));
      }
      e.is = n;
    })(sc || (sc = {}));
    var Mg;
    (function(e) {
      function t(r, i, a) {
        let s = { position: r, label: i };
        return a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && Fn.is(i.position) && (k.string(i.label) || k.typedArray(i.label, sc.is)) && (i.kind === void 0 || ac.is(i.kind)) && i.textEdits === void 0 || k.typedArray(i.textEdits, Xi.is) && (i.tooltip === void 0 || k.string(i.tooltip) || Ja.is(i.tooltip)) && (i.paddingLeft === void 0 || k.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || k.boolean(i.paddingRight));
      }
      e.is = n;
    })(Mg || (Mg = {}));
    var Ug;
    (function(e) {
      function t(n) {
        return { kind: "snippet", value: n };
      }
      e.createSnippet = t;
    })(Ug || (Ug = {}));
    var Pg;
    (function(e) {
      function t(n, r, i, a) {
        return { insertText: n, filterText: r, range: i, command: a };
      }
      e.create = t;
    })(Pg || (Pg = {}));
    var Bg;
    (function(e) {
      function t(n) {
        return { items: n };
      }
      e.create = t;
    })(Bg || (Bg = {}));
    var Vg;
    (function(e) {
      e.Invoked = 0, e.Automatic = 1;
    })(Vg || (Vg = {}));
    var $g;
    (function(e) {
      function t(n, r) {
        return { range: n, text: r };
      }
      e.create = t;
    })($g || ($g = {}));
    var Kg;
    (function(e) {
      function t(n, r) {
        return { triggerKind: n, selectedCompletionInfo: r };
      }
      e.create = t;
    })(Kg || (Kg = {}));
    var jg;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && Yl.is(r.uri) && k.string(r.name);
      }
      e.is = t;
    })(jg || (jg = {}));
    var qg;
    (function(e) {
      function t(a, s, o, u) {
        return new zN(a, s, o, u);
      }
      e.create = t;
      function n(a) {
        let s = a;
        return !!(k.defined(s) && k.string(s.uri) && (k.undefined(s.languageId) || k.string(s.languageId)) && k.uinteger(s.lineCount) && k.func(s.getText) && k.func(s.positionAt) && k.func(s.offsetAt));
      }
      e.is = n;
      function r(a, s) {
        let o = a.getText(), u = i(s, (c, f) => {
          let p = c.range.start.line - f.range.start.line;
          return p === 0 ? c.range.start.character - f.range.start.character : p;
        }), l = o.length;
        for (let c = u.length - 1; c >= 0; c--) {
          let f = u[c], p = a.offsetAt(f.range.start), m = a.offsetAt(f.range.end);
          if (m <= l) o = o.substring(0, p) + f.newText + o.substring(m, o.length);
          else throw new Error("Overlapping edit");
          l = p;
        }
        return o;
      }
      e.applyEdits = r;
      function i(a, s) {
        if (a.length <= 1) return a;
        let o = a.length / 2 | 0, u = a.slice(0, o), l = a.slice(o);
        i(u, s), i(l, s);
        let c = 0, f = 0, p = 0;
        for (; c < u.length && f < l.length; ) s(u[c], l[f]) <= 0 ? a[p++] = u[c++] : a[p++] = l[f++];
        for (; c < u.length; ) a[p++] = u[c++];
        for (; f < l.length; ) a[p++] = l[f++];
        return a;
      }
    })(qg || (qg = {}));
    var zN = class {
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
    })(k || (k = {}));
    var oc = class {
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
    function XN(e, t) {
      let n = e.match;
      return e.match = (r) => {
        let i = !1;
        return n && (i = n(r)), i && t.every((a) => a.match && !a.match(r));
      }, e;
    }
    function uc(e, t) {
      return { style: t, match: (n) => n.kind === e };
    }
    function be(e, t) {
      return { style: t || "punctuation", match: (n) => n.kind === "Punctuation" && n.value === e };
    }
    var JN = (e) => e === " " || e === "	" || e === "," || e === `
` || e === "\r" || e === "\uFEFF" || e === " ", QN = { Name: /^[_A-Za-z][_0-9A-Za-z]*/, Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/, Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/, String: /^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/, Comment: /^#.*/ }, ZN = { Document: [Oe("Definition")], Definition(e) {
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
    }, AliasedField: [He("property"), be(":"), He("qualifier"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Field: [He("property"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Arguments: [be("("), Oe("Argument"), be(")")], Argument: [He("attribute"), be(":"), "Value"], FragmentSpread: [be("..."), He("def"), Oe("Directive")], InlineFragment: [be("..."), it("TypeCondition"), Oe("Directive"), "SelectionSet"], FragmentDefinition: [It("fragment"), it(XN(He("def"), [It("on")])), "TypeCondition", Oe("Directive"), "SelectionSet"], TypeCondition: [It("on"), "NamedType"], Value(e) {
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
    }, NumberValue: [uc("Number", "number")], StringValue: [{ style: "string", match: (e) => e.kind === "String", update(e, t) {
      t.value.startsWith('"""') && (e.inBlockstring = !t.value.slice(3).endsWith('"""'));
    } }], BooleanValue: [uc("Name", "builtin")], NullValue: [uc("Name", "keyword")], EnumValue: [He("string-2")], ListValue: [be("["), Oe("Value"), be("]")], ObjectValue: [be("{"), Oe("ObjectField"), be("}")], ObjectField: [He("attribute"), be(":"), "Value"], Type(e) {
      return e.value === "[" ? "ListType" : "NonNullType";
    }, ListType: [be("["), "Type", be("]"), it(be("!"))], NonNullType: ["NamedType", it(be("!"))], NamedType: [eC("atom")], Directive: [be("@", "meta"), He("meta"), it("Arguments")], DirectiveDef: [It("directive"), be("@", "meta"), He("meta"), it("ArgumentsDef"), It("on"), Oe("DirectiveLocation", be("|"))], InterfaceDef: [It("interface"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], Implements: [It("implements"), Oe("NamedType", be("&"))], DirectiveLocation: [He("string-2")], SchemaDef: [It("schema"), Oe("Directive"), be("{"), Oe("OperationTypeDef"), be("}")], OperationTypeDef: [He("keyword"), be(":"), He("atom")], ScalarDef: [It("scalar"), He("atom"), Oe("Directive")], ObjectTypeDef: [It("type"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], FieldDef: [He("property"), it("ArgumentsDef"), be(":"), "Type", Oe("Directive")], ArgumentsDef: [be("("), Oe("InputValueDef"), be(")")], InputValueDef: [He("attribute"), be(":"), "Type", it("DefaultValue"), Oe("Directive")], UnionDef: [It("union"), He("atom"), Oe("Directive"), be("="), Oe("UnionMember", be("|"))], UnionMember: ["NamedType"], EnumDef: [It("enum"), He("atom"), Oe("Directive"), be("{"), Oe("EnumValueDef"), be("}")], EnumValueDef: [He("string-2"), Oe("Directive")], InputDef: [It("input"), He("atom"), Oe("Directive"), be("{"), Oe("InputValueDef"), be("}")], ExtendDef: [It("extend"), "ExtensionDefinition"], ExtensionDefinition(e) {
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
    function eC(e) {
      return { style: e, match: (t) => t.kind === "Name", update(t, n) {
        var r;
        !((r = t.prevState) === null || r === void 0) && r.prevState && (t.name = n.value, t.prevState.prevState.type = n.value);
      } };
    }
    function Gg(e = { eatWhitespace: (t) => t.eatWhile(JN), lexRules: QN, parseRules: ZN, editorConfig: {} }) {
      return { startState() {
        let t = { level: 0, step: 0, name: null, kind: null, type: null, rule: null, needsSeparator: !1, prevState: null };
        return Qa(e.parseRules, t, v.DOCUMENT), t;
      }, token(t, n) {
        return tC(t, n, e);
      } };
    }
    function tC(e, t, n) {
      var r;
      if (t.inBlockstring) return e.match(/.*"""/) ? (t.inBlockstring = !1, "string") : (e.skipToEnd(), "string");
      let { lexRules: i, parseRules: a, eatWhitespace: s, editorConfig: o } = n;
      if (t.rule && t.rule.length === 0 ? cc(t) : t.needsAdvance && (t.needsAdvance = !1, dc(t, !0)), e.sol()) {
        let c = (o == null ? void 0 : o.tabSize) || 2;
        t.indentLevel = Math.floor(e.indentation() / c);
      }
      if (s(e)) return "ws";
      let u = rC(i, e);
      if (!u) return e.match(/\S+/) || e.match(/\s/), Qa(lc, t, "Invalid"), "invalidchar";
      if (u.kind === "Comment") return Qa(lc, t, "Comment"), "comment";
      let l = Hg({}, t);
      if (u.kind === "Punctuation") {
        if (/^[{([]/.test(u.value)) t.indentLevel !== void 0 && (t.levels = (t.levels || []).concat(t.indentLevel + 1));
        else if (/^[})\]]/.test(u.value)) {
          let c = t.levels = (t.levels || []).slice(0, -1);
          t.indentLevel && c.length > 0 && c.at(-1) < t.indentLevel && (t.indentLevel = c.at(-1));
        }
      }
      for (; t.rule; ) {
        let c = typeof t.rule == "function" ? t.step === 0 ? t.rule(u, e) : null : t.rule[t.step];
        if (t.needsSeparator && (c = c == null ? void 0 : c.separator), c) {
          if (c.ofRule && (c = c.ofRule), typeof c == "string") {
            Qa(a, t, c);
            continue;
          }
          if (!((r = c.match) === null || r === void 0) && r.call(c, u)) return c.update && c.update(t, u), u.kind === "Punctuation" ? dc(t, !0) : t.needsAdvance = !0, c.style;
        }
        nC(t);
      }
      return Hg(t, l), Qa(lc, t, "Invalid"), "invalidchar";
    }
    function Hg(e, t) {
      let n = Object.keys(t);
      for (let r = 0; r < n.length; r++) e[n[r]] = t[n[r]];
      return e;
    }
    var lc = { Invalid: [], Comment: [] };
    function Qa(e, t, n) {
      if (!e[n]) throw new TypeError("Unknown rule: " + n);
      t.prevState = Object.assign({}, t), t.kind = n, t.name = null, t.type = null, t.rule = e[n], t.step = 0, t.needsSeparator = !1;
    }
    function cc(e) {
      e.prevState && (e.kind = e.prevState.kind, e.name = e.prevState.name, e.type = e.prevState.type, e.rule = e.prevState.rule, e.step = e.prevState.step, e.needsSeparator = e.prevState.needsSeparator, e.prevState = e.prevState.prevState);
    }
    function dc(e, t) {
      var n;
      if (Wg(e) && e.rule) {
        let r = e.rule[e.step];
        if (r.separator) {
          let { separator: i } = r;
          if (e.needsSeparator = !e.needsSeparator, !e.needsSeparator && i.ofRule) return;
        }
        if (t) return;
      }
      for (e.needsSeparator = !1, e.step++; e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length); ) cc(e), e.rule && (Wg(e) ? !((n = e.rule) === null || n === void 0) && n[e.step].separator && (e.needsSeparator = !e.needsSeparator) : (e.needsSeparator = !1, e.step++));
    }
    function Wg(e) {
      let t = Array.isArray(e.rule) && typeof e.rule[e.step] != "string" && e.rule[e.step];
      return t && t.isList;
    }
    function nC(e) {
      for (; e.rule && !(Array.isArray(e.rule) && e.rule[e.step].ofRule); ) cc(e);
      e.rule && dc(e, !1);
    }
    function rC(e, t) {
      let n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        let i = t.match(e[n[r]]);
        if (i && i instanceof Array) return { kind: n[r], value: i[0] };
      }
    }
    function Lo(e, t) {
      let n = e.split(`
`), r = Gg(), i = r.startState(), a = "", s = new oc("");
      for (let o = 0; o < n.length; o++) {
        for (s = new oc(n[o]); !s.eol() && (a = r.token(s, i), t(s, i, a, o) !== "BREAK"); ) ;
        t(s, i, a, o), i.kind || (i = r.startState());
      }
      return { start: s.getStartOfToken(), end: s.getCurrentPosition(), string: s.current(), state: i, style: a };
    }
    var kr;
    (function(e) {
      e.TYPE_SYSTEM = "TYPE_SYSTEM", e.EXECUTABLE = "EXECUTABLE", e.UNKNOWN = "UNKNOWN";
    })(kr || (kr = {}));
    var iC = [v.SCHEMA_DEFINITION, v.OPERATION_TYPE_DEFINITION, v.SCALAR_TYPE_DEFINITION, v.OBJECT_TYPE_DEFINITION, v.INTERFACE_TYPE_DEFINITION, v.UNION_TYPE_DEFINITION, v.ENUM_TYPE_DEFINITION, v.INPUT_OBJECT_TYPE_DEFINITION, v.DIRECTIVE_DEFINITION, v.SCHEMA_EXTENSION, v.SCALAR_TYPE_EXTENSION, v.OBJECT_TYPE_EXTENSION, v.INTERFACE_TYPE_EXTENSION, v.UNION_TYPE_EXTENSION, v.ENUM_TYPE_EXTENSION, v.INPUT_OBJECT_TYPE_EXTENSION], aC = (e) => {
      let t = kr.UNKNOWN;
      if (e) try {
        Ir(uo(e), { enter(n) {
          if (n.kind === "Document") {
            t = kr.EXECUTABLE;
            return;
          }
          return iC.includes(n.kind) ? (t = kr.TYPE_SYSTEM, qi) : !1;
        } });
      } catch {
        return t;
      }
      return t;
    };
    function sC(e, t) {
      return t != null && t.endsWith(".graphqls") ? kr.TYPE_SYSTEM : aC(e);
    }
    function oC(e, t, n = 0) {
      let r = null, i = null, a = null, s = Lo(e, (o, u, l, c) => {
        if (!(c !== t.line || o.getCurrentPosition() + n < t.character + 1)) return r = l, i = Object.assign({}, u), a = o.current(), "BREAK";
      });
      return { start: s.start, end: s.end, string: a || s.string, state: i || s.state, style: r || s.style };
    }
    function Yg(e, t, n, r, i) {
      let a = oC(e, t, 1);
      if (!a) return null;
      let s = a.state.kind === "Invalid" ? a.state.prevState : a.state;
      if (!s) return null;
      let o = lC(n, a.state), u = (i == null ? void 0 : i.mode) || sC(e, i == null ? void 0 : i.uri);
      return { token: a, state: s, typeInfo: o, mode: u };
    }
    function zg(e, t, n) {
      return n === Ga.name && e.getQueryType() === t ? Ga : n === Ha.name && e.getQueryType() === t ? Ha : n === Wa.name && nn(t) ? Wa : "getFields" in t ? t.getFields()[n] : null;
    }
    function Xg(e, t) {
      let n = [], r = e;
      for (; r != null && r.kind; ) n.push(r), r = r.prevState;
      for (let i = n.length - 1; i >= 0; i--) t(n[i]);
    }
    function uC(e) {
      let t;
      return Xg(e, (n) => {
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
    function lC(e, t) {
      let n, r, i, a, s, o, u, l, c, f, p;
      return Xg(t, (m) => {
        var g;
        switch (m.kind) {
          case X.QUERY:
          case "ShortQuery":
            f = e.getQueryType();
            break;
          case X.MUTATION:
            f = e.getMutationType();
            break;
          case X.SUBSCRIPTION:
            f = e.getSubscriptionType();
            break;
          case X.INLINE_FRAGMENT:
          case X.FRAGMENT_DEFINITION:
            m.type && (f = e.getType(m.type));
            break;
          case X.FIELD:
          case X.ALIASED_FIELD: {
            !f || !m.name ? s = null : (s = c ? zg(e, c, m.name) : null, f = s ? s.type : null);
            break;
          }
          case X.SELECTION_SET:
            c = tt(f);
            break;
          case X.DIRECTIVE:
            i = m.name ? e.getDirective(m.name) : null;
            break;
          case X.INTERFACE_DEF:
            m.name && (u = null, p = new Rr({ name: m.name, interfaces: [], fields: {} }));
            break;
          case X.OBJECT_TYPE_DEF:
            m.name && (p = null, u = new pn({ name: m.name, interfaces: [], fields: {} }));
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
                let x = c ? zg(e, c, C) : null;
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
            f = o;
            break;
          case X.ENUM_VALUE:
            let _ = tt(o);
            a = _ instanceof Or ? _.getValues().find((C) => C.value === m.name) : null;
            break;
          case X.LIST_VALUE:
            let L = Fl(o);
            o = L instanceof Ft ? L.ofType : null;
            break;
          case X.OBJECT_VALUE:
            let A = tt(o);
            l = A instanceof Ka ? A.getFields() : null;
            break;
          case X.OBJECT_FIELD:
            let F = m.name && l ? l[m.name] : null;
            o = F == null ? void 0 : F.type, s = F, f = s ? s.type : null;
            break;
          case X.NAMED_TYPE:
            m.name && (f = e.getType(m.name));
            break;
        }
      }), { argDef: n, argDefs: r, directiveDef: i, enumValue: a, fieldDef: s, inputType: o, objectFieldDefs: l, parentType: c, type: f, interfaceDef: p, objectTypeDef: u };
    }
    var cC = { ALIASED_FIELD: "AliasedField", ARGUMENTS: "Arguments", SHORT_QUERY: "ShortQuery", QUERY: "Query", MUTATION: "Mutation", SUBSCRIPTION: "Subscription", TYPE_CONDITION: "TypeCondition", INVALID: "Invalid", COMMENT: "Comment", SCHEMA_DEF: "SchemaDef", SCALAR_DEF: "ScalarDef", OBJECT_TYPE_DEF: "ObjectTypeDef", OBJECT_VALUE: "ObjectValue", LIST_VALUE: "ListValue", INTERFACE_DEF: "InterfaceDef", UNION_DEF: "UnionDef", ENUM_DEF: "EnumDef", ENUM_VALUE: "EnumValue", FIELD_DEF: "FieldDef", INPUT_DEF: "InputDef", INPUT_VALUE_DEF: "InputValueDef", ARGUMENTS_DEF: "ArgumentsDef", EXTEND_DEF: "ExtendDef", EXTENSION_DEFINITION: "ExtensionDefinition", DIRECTIVE_DEF: "DirectiveDef", IMPLEMENTS: "Implements", VARIABLE_DEFINITIONS: "VariableDefinitions", TYPE: "Type", VARIABLE: "Variable" }, X = Object.assign(Object.assign({}, v), cC), we;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(we || (we = {}));
    var hc = { command: "editor.action.triggerSuggest", title: "Suggestions" }, dC = (e) => {
      let t = [];
      if (e) try {
        Ir(uo(e), { FragmentDefinition(n) {
          t.push(n);
        } });
      } catch {
        return [];
      }
      return t;
    };
    function hC(e, t, n, r, i, a) {
      var s;
      let o = Object.assign(Object.assign({}, a), { schema: e }), u = Yg(t, n, e, r, a);
      if (!u) return [];
      let { state: l, typeInfo: c, mode: f, token: p } = u, { kind: m, step: g, prevState: _ } = l;
      if (m === X.DOCUMENT) return f === kr.TYPE_SYSTEM ? fC(p) : f === kr.EXECUTABLE ? pC(p) : mC(p);
      if (m === X.EXTEND_DEF) return gC(p);
      if (((s = _ == null ? void 0 : _.prevState) === null || s === void 0 ? void 0 : s.kind) === X.EXTENSION_DEFINITION && l.name) return Ye(p, []);
      if ((_ == null ? void 0 : _.kind) === v.SCALAR_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(fn).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((A) => je(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.INTERFACE_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ge).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.UNION_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(en).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.ENUM_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((A) => Vt(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function })));
      if ((_ == null ? void 0 : _.kind) === v.INPUT_OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ze).map((A) => ({ label: A.name, kind: we.Function })));
      if (m === X.IMPLEMENTS || m === X.NAMED_TYPE && (_ == null ? void 0 : _.kind) === X.IMPLEMENTS) return DC(p, l, e, t, c);
      if (m === X.SELECTION_SET || m === X.FIELD || m === X.ALIASED_FIELD) return EC(p, c, o);
      if (m === X.ARGUMENTS || m === X.ARGUMENT && g === 0) {
        let { argDefs: A } = c;
        if (A) return Ye(p, A.map((F) => {
          var C;
          return { label: F.name, insertText: Gm(F.name + ": ", F.type), insertTextMode: si.adjustIndentation, insertTextFormat: Qi.Snippet, command: hc, labelDetails: { detail: " " + String(F.type) }, documentation: (C = F.description) !== null && C !== void 0 ? C : void 0, kind: we.Variable, type: F.type };
        }));
      }
      if ((m === X.OBJECT_VALUE || m === X.OBJECT_FIELD && g === 0) && c.objectFieldDefs) {
        let A = ai(c.objectFieldDefs), F = m === X.OBJECT_VALUE ? we.Value : we.Field;
        return Ye(p, A.map((C) => {
          var x;
          return { label: C.name, detail: String(C.type), documentation: (x = C == null ? void 0 : C.description) !== null && x !== void 0 ? x : void 0, kind: F, type: C.type, insertText: Gm(C.name + ": ", C.type), insertTextMode: si.adjustIndentation, insertTextFormat: Qi.Snippet, command: hc };
        }));
      }
      if (m === X.ENUM_VALUE || m === X.LIST_VALUE && g === 1 || m === X.OBJECT_FIELD && g === 2 || m === X.ARGUMENT && g === 2) return _C(p, c, t, e);
      if (m === X.VARIABLE && g === 1) {
        let A = tt(c.inputType), F = Qg(t, e, p);
        return Ye(p, F.filter((C) => C.detail === (A == null ? void 0 : A.name)));
      }
      if (m === X.TYPE_CONDITION && g === 1 || m === X.NAMED_TYPE && _ != null && _.kind === X.TYPE_CONDITION) return vC(p, c, e);
      if (m === X.FRAGMENT_SPREAD && g === 1) return bC(p, c, e, t, Array.isArray(i) ? i : dC(i));
      let L = Zg(l);
      return L.kind === X.FIELD_DEF ? Ye(p, Object.values(e.getTypeMap()).filter((A) => ni(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function, insertText: a != null && a.fillLeafsOnComplete ? A.name + `
` : A.name, insertTextMode: si.adjustIndentation }))) : L.kind === X.INPUT_VALUE_DEF && g === 2 ? Ye(p, Object.values(e.getTypeMap()).filter((A) => tn(A) && !A.name.startsWith("__")).map((A) => ({ label: A.name, kind: we.Function, insertText: a != null && a.fillLeafsOnComplete ? A.name + `
$1` : A.name, insertTextMode: si.adjustIndentation, insertTextFormat: Qi.Snippet }))) : m === X.VARIABLE_DEFINITION && g === 2 || m === X.LIST_TYPE && g === 1 || m === X.NAMED_TYPE && _ && (_.kind === X.VARIABLE_DEFINITION || _.kind === X.LIST_TYPE || _.kind === X.NON_NULL_TYPE) ? CC(p, e) : m === X.DIRECTIVE ? TC(p, l, e) : m === X.DIRECTIVE_DEF ? wC(p, l, e) : [];
    }
    var fc = [{ label: "type", kind: we.Function }, { label: "interface", kind: we.Function }, { label: "union", kind: we.Function }, { label: "input", kind: we.Function }, { label: "scalar", kind: we.Function }, { label: "schema", kind: we.Function }], Jg = [{ label: "query", kind: we.Function }, { label: "mutation", kind: we.Function }, { label: "subscription", kind: we.Function }, { label: "fragment", kind: we.Function }, { label: "{", kind: we.Constructor }];
    function fC(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...fc]);
    }
    function pC(e) {
      return Ye(e, Jg);
    }
    function mC(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...Jg, ...fc]);
    }
    function gC(e) {
      return Ye(e, fc);
    }
    function EC(e, t, n) {
      var r;
      if (t.parentType) {
        let { parentType: i } = t, a = [];
        return "getFields" in i && (a = ai(i.getFields())), nn(i) && a.push(Wa), i === ((r = n == null ? void 0 : n.schema) === null || r === void 0 ? void 0 : r.getQueryType()) && a.push(Ga, Ha), Ye(e, a.map((s, o) => {
          var u;
          let l = { sortText: String(o) + s.name, label: s.name, detail: String(s.type), documentation: (u = s.description) !== null && u !== void 0 ? u : void 0, deprecated: !!s.deprecationReason, isDeprecated: !!s.deprecationReason, deprecationReason: s.deprecationReason, kind: we.Field, labelDetails: { detail: " " + s.type.toString() }, type: s.type };
          return n != null && n.fillLeafsOnComplete && (l.insertText = YN(s), l.insertText || (l.insertText = No(s.name, s.type, s.name + (e.state.needsAdvance ? "" : `
`))), l.insertText && (l.insertTextFormat = Qi.Snippet, l.insertTextMode = si.adjustIndentation, l.command = hc)), l;
        }));
      }
      return [];
    }
    function _C(e, t, n, r) {
      let i = tt(t.inputType), a = Qg(n, r, e).filter((s) => s.detail === (i == null ? void 0 : i.name));
      if (i instanceof Or) {
        let s = i.getValues();
        return Ye(e, s.map((o) => {
          var u;
          return { label: o.name, detail: String(i), documentation: (u = o.description) !== null && u !== void 0 ? u : void 0, deprecated: !!o.deprecationReason, isDeprecated: !!o.deprecationReason, deprecationReason: o.deprecationReason, kind: we.EnumMember, type: i };
        }).concat(a));
      }
      return i === yt ? Ye(e, a.concat([{ label: "true", detail: String(yt), documentation: "Not false.", kind: we.Variable, type: yt }, { label: "false", detail: String(yt), documentation: "Not true.", kind: we.Variable, type: yt }])) : a;
    }
    function DC(e, t, n, r, i) {
      if (t.needsSeparator) return [];
      let a = n.getTypeMap(), s = ai(a).filter(Ge), o = s.map(({ name: p }) => p), u = /* @__PURE__ */ new Set();
      Lo(r, (p, m) => {
        var g, _, L, A, F;
        if (m.name && (m.kind === X.INTERFACE_DEF && !o.includes(m.name) && u.add(m.name), m.kind === X.NAMED_TYPE && ((g = m.prevState) === null || g === void 0 ? void 0 : g.kind) === X.IMPLEMENTS)) {
          if (i.interfaceDef) {
            if (!((_ = i.interfaceDef) === null || _ === void 0) && _.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (L = i.interfaceDef) === null || L === void 0 ? void 0 : L.toConfig();
            i.interfaceDef = new Rr(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Rr({ name: m.name, fields: {} })] }));
          } else if (i.objectTypeDef) {
            if (!((A = i.objectTypeDef) === null || A === void 0) && A.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (F = i.objectTypeDef) === null || F === void 0 ? void 0 : F.toConfig();
            i.objectTypeDef = new pn(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Rr({ name: m.name, fields: {} })] }));
          }
        }
      });
      let l = i.interfaceDef || i.objectTypeDef, c = ((l == null ? void 0 : l.getInterfaces()) || []).map(({ name: p }) => p), f = s.concat([...u].map((p) => ({ name: p }))).filter(({ name: p }) => p !== (l == null ? void 0 : l.name) && !c.includes(p));
      return Ye(e, f.map((p) => {
        let m = { label: p.name, kind: we.Interface, type: p };
        return p != null && p.description && (m.documentation = p.description), m;
      }));
    }
    function vC(e, t, n, r) {
      let i;
      if (t.parentType) if (Kn(t.parentType)) {
        let a = sy(t.parentType), s = n.getPossibleTypes(a), o = /* @__PURE__ */ Object.create(null);
        for (let u of s) for (let l of u.getInterfaces()) o[l.name] = l;
        i = s.concat(ai(o));
      } else i = [t.parentType];
      else {
        let a = n.getTypeMap();
        i = ai(a).filter((s) => nn(s) && !s.name.startsWith("__"));
      }
      return Ye(e, i.map((a) => {
        let s = tt(a);
        return { label: String(a), documentation: (s == null ? void 0 : s.description) || "", kind: we.Field };
      }));
    }
    function bC(e, t, n, r, i) {
      if (!r) return [];
      let a = n.getTypeMap(), s = uC(e.state), o = NC(r);
      i && i.length > 0 && o.push(...i);
      let u = o.filter((l) => a[l.typeCondition.name.value] && !(s && s.kind === X.FRAGMENT_DEFINITION && s.name === l.name.value) && nn(t.parentType) && nn(a[l.typeCondition.name.value]) && Il(n, t.parentType, a[l.typeCondition.name.value]));
      return Ye(e, u.map((l) => ({ label: l.name.value, detail: String(a[l.typeCondition.name.value]), documentation: `fragment ${l.name.value} on ${l.typeCondition.name.value}`, labelDetails: { detail: `fragment ${l.name.value} on ${l.typeCondition.name.value}` }, kind: we.Field, type: a[l.typeCondition.name.value] })));
    }
    var yC = (e, t) => {
      var n, r, i, a, s, o, u, l, c, f;
      if (((n = e.prevState) === null || n === void 0 ? void 0 : n.kind) === t) return e.prevState;
      if (((i = (r = e.prevState) === null || r === void 0 ? void 0 : r.prevState) === null || i === void 0 ? void 0 : i.kind) === t) return e.prevState.prevState;
      if (((o = (s = (a = e.prevState) === null || a === void 0 ? void 0 : a.prevState) === null || s === void 0 ? void 0 : s.prevState) === null || o === void 0 ? void 0 : o.kind) === t) return e.prevState.prevState.prevState;
      if (((f = (c = (l = (u = e.prevState) === null || u === void 0 ? void 0 : u.prevState) === null || l === void 0 ? void 0 : l.prevState) === null || c === void 0 ? void 0 : c.prevState) === null || f === void 0 ? void 0 : f.kind) === t) return e.prevState.prevState.prevState.prevState;
    };
    function Qg(e, t, n) {
      let r = null, i, a = /* @__PURE__ */ Object.create({});
      return Lo(e, (s, o) => {
        var u;
        if ((o == null ? void 0 : o.kind) === X.VARIABLE && o.name && (r = o.name), (o == null ? void 0 : o.kind) === X.NAMED_TYPE && r) {
          let l = yC(o, X.TYPE);
          l != null && l.type && (i = t.getType(l == null ? void 0 : l.type));
        }
        if (r && i && !a[r]) {
          let l = n.string === "$" || ((u = n == null ? void 0 : n.state) === null || u === void 0 ? void 0 : u.kind) === "Variable" ? r : "$" + r;
          a[r] = { detail: i.toString(), insertText: l, label: "$" + r, rawInsert: l, type: i, kind: we.Variable }, r = null, i = null;
        }
      }), ai(a);
    }
    function NC(e) {
      let t = [];
      return Lo(e, (n, r) => {
        r.kind === X.FRAGMENT_DEFINITION && r.name && r.type && t.push({ kind: X.FRAGMENT_DEFINITION, name: { kind: v.NAME, value: r.name }, selectionSet: { kind: X.SELECTION_SET, selections: [] }, typeCondition: { kind: X.NAMED_TYPE, name: { kind: v.NAME, value: r.type } } });
      }), t;
    }
    function CC(e, t, n) {
      let r = t.getTypeMap(), i = ai(r).filter(tn);
      return Ye(e, i.map((a) => ({ label: a.name, documentation: (a == null ? void 0 : a.description) || "", kind: we.Variable })));
    }
    function TC(e, t, n, r) {
      var i;
      if (!((i = t.prevState) === null || i === void 0) && i.kind) {
        let a = n.getDirectives().filter((s) => AC(t.prevState, s));
        return Ye(e, a.map((s) => ({ label: s.name, documentation: (s == null ? void 0 : s.description) || "", kind: we.Function })));
      }
      return [];
    }
    function wC(e, t, n, r) {
      let i = n.getDirectives().find((a) => a.name === t.name);
      return Ye(e, (i == null ? void 0 : i.args.map((a) => ({ label: a.name, documentation: a.description || "", kind: we.Field }))) || []);
    }
    function AC(e, t) {
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
    function Zg(e) {
      return e.prevState && e.kind && [X.NAMED_TYPE, X.LIST_TYPE, X.TYPE, X.NON_NULL_TYPE].includes(e.kind) ? Zg(e.prevState) : e;
    }
    Uo(W0());
    function $t(e, t) {
      e.push(t);
    }
    function pc(e, t) {
      Ue(t) ? (pc(e, t.ofType), $t(e, "!")) : dt(t) ? ($t(e, "["), pc(e, t.ofType), $t(e, "]")) : $t(e, t.name);
    }
    function Fo(e, t, n) {
      let r = [], i = "type" in e ? e.type : e;
      return "type" in e && e.description && ($t(r, e.description), $t(r, `

`)), $t(r, SC(i, t)), n ? ($t(r, `
`), $t(r, n)) : !fn(i) && "description" in i && i.description ? ($t(r, `
`), $t(r, i.description)) : "ofType" in i && !fn(i.ofType) && "description" in i.ofType && i.ofType.description && ($t(r, `
`), $t(r, i.ofType.description)), r.join("");
    }
    function SC(e, t) {
      let n = [];
      return t && $t(n, "```graphql\n"), pc(n, e), t && $t(n, "\n```"), n.join("");
    }
    var LC = { Int: { type: "integer" }, String: { type: "string" }, Float: { type: "number" }, ID: { type: "string" }, Boolean: { type: "boolean" }, DateTime: { type: "string" } }, FC = class {
      constructor() {
        this.set = /* @__PURE__ */ new Set();
      }
      mark(e) {
        return this.set.has(e) ? !1 : (this.set.add(e), !0);
      }
    };
    function mc(e, t) {
      var n, r;
      let i = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null), s = "type" in e ? e.type : e, o = Ue(s) ? s.ofType : s, u = Ue(s);
      if (fn(o)) !((n = t == null ? void 0 : t.scalarSchemas) === null || n === void 0) && n[o.name] ? i = JSON.parse(JSON.stringify(t.scalarSchemas[o.name])) : i.type = ["string", "number", "boolean", "integer"], u || (Array.isArray(i.type) ? i.type.push("null") : i.type ? i.type = [i.type, "null"] : i.enum ? i.enum.push(null) : i.oneOf ? i.oneOf.push({ type: "null" }) : i = { oneOf: [i, { type: "null" }] });
      else if (Vt(o)) i.enum = o.getValues().map((c) => c.name), u || i.enum.push(null);
      else if (dt(o)) {
        u ? i.type = "array" : i.type = ["array", "null"];
        let { definition: c, definitions: f } = mc(o.ofType, t);
        if (i.items = c, f) for (let p of Object.keys(f)) a[p] = f[p];
      } else if (Ze(o) && (u ? i.$ref = `#/definitions/${o.name}` : i.oneOf = [{ $ref: `#/definitions/${o.name}` }, { type: "null" }], !((r = t == null ? void 0 : t.definitionMarker) === null || r === void 0) && r.mark(o.name))) {
        let c = o.getFields(), f = { type: "object", properties: {}, required: [] };
        f.description = Fo(o), t != null && t.useMarkdownDescription && (f.markdownDescription = Fo(o, !0));
        for (let p of Object.keys(c)) {
          let m = c[p], { required: g, definition: _, definitions: L } = mc(m, t);
          if (f.properties[p] = _, g && f.required.push(p), L) for (let [A, F] of Object.entries(L)) a[A] = F;
        }
        a[o.name] = f;
      }
      "defaultValue" in e && e.defaultValue !== void 0 && (i.default = e.defaultValue);
      let { description: l } = i;
      return i.description = Fo(e, !1, l), t != null && t.useMarkdownDescription && (i.markdownDescription = Fo(e, !0, l)), { required: u, definition: i, definitions: a };
    }
    function IC(e, t) {
      var n;
      let r = { $schema: "http://json-schema.org/draft-04/schema", type: "object", properties: {}, required: [], additionalProperties: !1 }, i = Object.assign(Object.assign({}, t), { definitionMarker: new FC(), scalarSchemas: Object.assign(Object.assign({}, LC), t == null ? void 0 : t.scalarSchemas) });
      if (e) for (let [a, s] of Object.entries(e)) {
        let { definition: o, required: u, definitions: l } = mc(s, i);
        r.properties[a] = o, u && ((n = r.required) === null || n === void 0 || n.push(a)), l && (r.definitions = Object.assign(Object.assign({}, r == null ? void 0 : r.definitions), l));
      }
      return r;
    }
    var e0 = class {
      constructor(e, t) {
        this.containsPosition = (n) => this.start.line === n.line ? this.start.character <= n.character : this.end.line === n.line ? this.end.character >= n.character : this.start.line <= n.line && this.end.line >= n.line, this.start = e, this.end = t;
      }
      setStart(e, t) {
        this.start = new oi(e, t);
      }
      setEnd(e, t) {
        this.end = new oi(e, t);
      }
    }, oi = class {
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
    function RC(e, t, n, r, i) {
      let a = Um.filter((s) => !(s === Tm || s === vm || r));
      return n && Array.prototype.push.apply(a, n), Bm(e, t, a).filter((s) => {
        if (s.message.includes("Unknown directive") && s.nodes) {
          let o = s.nodes[0];
          if (o && o.kind === v.DIRECTIVE) {
            let u = o.name.value;
            if (u === "arguments" || u === "argumentDefinitions") return !1;
          }
        }
        return !0;
      });
    }
    function OC(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.definitions) if (r.kind === "OperationDefinition") {
        let { variableDefinitions: i } = r;
        if (i) for (let { variable: a, type: s } of i) {
          let o = rn(e, s);
          o ? n[a.name.value] = o : s.kind === v.NAMED_TYPE && s.name.value === "Float" && (n[a.name.value] = rm);
        }
      }
      return n;
    }
    function xC(e, t) {
      let n = t ? OC(t, e) : void 0, r = [];
      return Ir(e, { OperationDefinition(i) {
        r.push(i);
      } }), { variableToType: n, operations: r };
    }
    var t0 = { Error: "Error", Warning: "Warning" }, gc = { [t0.Error]: 1, [t0.Warning]: 2 }, Io = (e, t) => {
      if (!e) throw new Error(t);
    };
    function kC(e, t = null, n, r, i) {
      var a, s;
      let o = null, u = "";
      i && (u = typeof i == "string" ? i : i.reduce((c, f) => c + Et(f) + `

`, ""));
      let l = u ? `${e}

${u}` : e;
      try {
        o = uo(l);
      } catch (c) {
        if (c instanceof Y) {
          let f = r0((s = (a = c.locations) === null || a === void 0 ? void 0 : a[0]) !== null && s !== void 0 ? s : { line: 0 }, l);
          return [{ severity: gc.Error, message: c.message, source: "GraphQL: Syntax", range: f }];
        }
        throw c;
      }
      return MC(o, t, n, r);
    }
    function MC(e, t = null, n, r) {
      if (!t) return [];
      let i = RC(t, e, n, r).flatMap((s) => n0(s, gc.Error, "Validation")), a = Bm(t, e, [$N]).flatMap((s) => n0(s, gc.Warning, "Deprecation"));
      return i.concat(a);
    }
    function n0(e, t, n) {
      if (!e.nodes) return [];
      let r = [];
      for (let [i, a] of e.nodes.entries()) {
        let s = a.kind !== "Variable" && "name" in a && a.name !== void 0 ? a.name : "variable" in a && a.variable !== void 0 ? a.variable : a;
        if (s) {
          Io(e.locations, "GraphQL validation error requires locations.");
          let o = e.locations[i], u = UC(s), l = o.column + (u.end - u.start);
          r.push({ source: `GraphQL: ${n}`, message: e.message, severity: t, range: new e0(new oi(o.line - 1, o.column - 1), new oi(o.line - 1, l)) });
        }
      }
      return r;
    }
    function r0(e, t) {
      let n = Gg(), r = n.startState(), i = t.split(`
`);
      Io(i.length >= e.line, "Query text must have more lines than where the error happened");
      let a = null;
      for (let l = 0; l < e.line; l++) for (a = new oc(i[l]); !a.eol() && n.token(a, r) !== "invalidchar"; ) ;
      Io(a, "Expected Parser stream to be available.");
      let s = e.line - 1, o = a.getStartOfToken(), u = a.getCurrentPosition();
      return new e0(new oi(s, o), new oi(s, u));
    }
    function UC(e) {
      let t = e.loc;
      return Io(t, "Expected ASTNode to have a location."), t;
    }
    function PC(e, t, n, r, i) {
      let a = Object.assign(Object.assign({}, i), { schema: e }), s = Yg(t, n, e);
      if (!s) return "";
      let { typeInfo: o, token: u } = s, { kind: l, step: c } = u.state;
      if (l === "Field" && c === 0 && o.fieldDef || l === "AliasedField" && c === 2 && o.fieldDef || l === "ObjectField" && c === 0 && o.fieldDef) {
        let f = [];
        return Zi(f, a), BC(f, o, a), ea(f, a), ta(f, a, o.fieldDef), f.join("").trim();
      }
      if (l === "Directive" && c === 1 && o.directiveDef) {
        let f = [];
        return Zi(f, a), a0(f, o), ea(f, a), ta(f, a, o.directiveDef), f.join("").trim();
      }
      if (l === "Variable" && o.type) {
        let f = [];
        return Zi(f, a), ui(f, o, a, o.type), ea(f, a), ta(f, a, o.type), f.join("").trim();
      }
      if (l === "Argument" && c === 0 && o.argDef) {
        let f = [];
        return Zi(f, a), VC(f, o, a), ea(f, a), ta(f, a, o.argDef), f.join("").trim();
      }
      if (l === "EnumValue" && o.enumValue && "description" in o.enumValue) {
        let f = [];
        return Zi(f, a), $C(f, o, a), ea(f, a), ta(f, a, o.enumValue), f.join("").trim();
      }
      if (l === "NamedType" && o.type && "description" in o.type) {
        let f = [];
        return Zi(f, a), ui(f, o, a, o.type), ea(f, a), ta(f, a, o.type), f.join("").trim();
      }
      return "";
    }
    function Zi(e, t) {
      t.useMarkdown && ht(e, "```graphql\n");
    }
    function ea(e, t) {
      t.useMarkdown && ht(e, "\n```");
    }
    function BC(e, t, n) {
      i0(e, t, n), s0(e, t, n, t.type);
    }
    function i0(e, t, n) {
      if (!t.fieldDef) return;
      let r = t.fieldDef.name;
      r.slice(0, 2) !== "__" && (ui(e, t, n, t.parentType), ht(e, ".")), ht(e, r);
    }
    function a0(e, t, n) {
      if (!t.directiveDef) return;
      let r = "@" + t.directiveDef.name;
      ht(e, r);
    }
    function VC(e, t, n) {
      if (t.directiveDef ? a0(e, t) : t.fieldDef && i0(e, t, n), !t.argDef) return;
      let { name: r } = t.argDef;
      ht(e, "("), ht(e, r), s0(e, t, n, t.inputType), ht(e, ")");
    }
    function s0(e, t, n, r) {
      ht(e, ": "), ui(e, t, n, r);
    }
    function $C(e, t, n) {
      if (!t.enumValue) return;
      let { name: r } = t.enumValue;
      ui(e, t, n, t.inputType), ht(e, "."), ht(e, r);
    }
    function ui(e, t, n, r) {
      r && (r instanceof Ce ? (ui(e, t, n, r.ofType), ht(e, "!")) : r instanceof Ft ? (ht(e, "["), ui(e, t, n, r.ofType), ht(e, "]")) : ht(e, r.name));
    }
    function ta(e, t, n) {
      if (!n) return;
      let r = typeof n.description == "string" ? n.description : null;
      r && (ht(e, `

`), ht(e, r)), KC(e, t, n);
    }
    function KC(e, t, n) {
      if (!n) return;
      let r = n.deprecationReason;
      r && (ht(e, `

`), ht(e, "Deprecated: "), ht(e, r));
    }
    function ht(e, t) {
      e.push(t);
    }
    var jC = Uo(J0()), o0 = (e, t) => {
      let { schema: n, documentAST: r, introspectionJSON: i, introspectionJSONString: a, buildSchemaOptions: s, documentString: o } = e;
      if (n) return n;
      if (a) {
        let u = JSON.parse(a);
        return Vm(u, s);
      }
      if (o && t) {
        let u = t(o);
        return jm(u, s);
      }
      if (i) return Vm(i, s);
      if (r) return jm(r, s);
      throw new Error("no schema supplied");
    }, qC = /* @__PURE__ */ new Map(), GC = class {
      constructor({ parser: e, schemas: t, parseOptions: n, externalFragmentDefinitions: r, customValidationRules: i, fillLeafsOnComplete: a, completionSettings: s }) {
        ot(this, "_parser", uo);
        ot(this, "_schemas", []);
        ot(this, "_schemaCache", qC);
        ot(this, "_schemaLoader", o0);
        ot(this, "_parseOptions");
        ot(this, "_customValidationRules");
        ot(this, "_externalFragmentDefinitionNodes", null);
        ot(this, "_externalFragmentDefinitionsString", null);
        ot(this, "_completionSettings");
        ot(this, "getCompletion", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          return !t || t.length < 1 || !(r != null && r.schema) ? [] : hC(r.schema, t, n, void 0, this.getExternalFragmentDefinitions(), { uri: e, ...this._completionSettings });
        });
        ot(this, "getDiagnostics", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          return !t || t.trim().length < 2 || !(r != null && r.schema) ? [] : kC(t, r.schema, n ?? this._customValidationRules, !1, this.getExternalFragmentDefinitions());
        });
        ot(this, "getHover", (e, t, n, r) => {
          let i = this.getSchemaForFile(e);
          if (i && (t == null ? void 0 : t.length) > 3) return PC(i.schema, t, n, void 0, { useMarkdown: !0, ...r });
        });
        ot(this, "getVariablesJSONSchema", (e, t, n) => {
          let r = this.getSchemaForFile(e);
          if (r && t.length > 3) try {
            let i = this.parse(t), a = xC(i, r.schema);
            if (a != null && a.variableToType) return IC(a.variableToType, { ...n, scalarSchemas: r.customScalarSchemas });
          } catch {
          }
          return null;
        });
        this._schemaLoader = o0, t && (this._schemas = t, this._cacheSchemas()), e && (this._parser = e), this._completionSettings = { ...s, fillLeafsOnComplete: (s == null ? void 0 : s.fillLeafsOnComplete) ?? a }, n && (this._parseOptions = n), i && (this._customValidationRules = i), r && (Array.isArray(r) ? this._externalFragmentDefinitionNodes = r : this._externalFragmentDefinitionsString = r);
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
        let t = this._schemas.find((r) => r.fileMatch ? r.fileMatch.some((i) => (0, jC.default)(i)(e)) : !1);
        if (t)
          return this._schemaCache.get(t.uri) || this._cacheSchema(t).get(t.uri);
      }
      getExternalFragmentDefinitions() {
        if (!this._externalFragmentDefinitionNodes && this._externalFragmentDefinitionsString) {
          let e = [];
          try {
            Ir(this._parser(this._externalFragmentDefinitionsString), { FragmentDefinition(t) {
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
    function u0(e) {
      return { startLineNumber: e.start.line + 1, startColumn: e.start.character + 1, endLineNumber: e.end.line + 1, endColumn: e.end.character + 1 };
    }
    function l0(e) {
      return new oi(e.lineNumber - 1, e.column - 1);
    }
    function HC(e, t) {
      let n = { label: e.label, insertText: e == null ? void 0 : e.insertText, sortText: e.sortText, filterText: e == null ? void 0 : e.filterText, documentation: e.documentation, detail: e.detail, range: t ? u0(t) : void 0, kind: e.kind };
      return e.insertTextFormat && (n.insertTextFormat = e.insertTextFormat), e.insertTextMode && (n.insertTextMode = e.insertTextMode), e.command && (n.command = { ...e.command, id: e.command.command }), e.labelDetails && (n.labelDetails = e.labelDetails), n;
    }
    function WC(e) {
      return { startLineNumber: e.range.start.line + 1, endLineNumber: e.range.end.line + 1, startColumn: e.range.start.character + 1, endColumn: e.range.end.character, message: e.message, severity: 5, code: e.code || void 0 };
    }
    var YC = class {
      constructor(e, t) {
        ot(this, "_ctx");
        ot(this, "_languageService");
        ot(this, "_formattingOptions");
        this._ctx = e, this._languageService = new GC(t.languageConfig), this._formattingOptions = t.formattingOptions;
      }
      async doValidation(e) {
        var t;
        try {
          let n = (t = this._getTextModel(e)) == null ? void 0 : t.getValue();
          return n ? this._languageService.getDiagnostics(e, n).map(WC) : [];
        } catch (n) {
          return console.error(n), [];
        }
      }
      async doComplete(e, t) {
        var n;
        try {
          let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
          if (!r) return [];
          let i = l0(t);
          return this._languageService.getCompletion(e, r, i).map((a) => HC(a));
        } catch (r) {
          return console.error(r), [];
        }
      }
      async doHover(e, t) {
        var n;
        try {
          let r = (n = this._getTextModel(e)) == null ? void 0 : n.getValue();
          if (!r) return null;
          let i = l0(t);
          return { content: this._languageService.getHover(e, r, i), range: u0(r0({ column: i.character, line: i.line }, r)) };
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
        let r = await Promise.resolve().then(() => (X2(), Tc)), i = await Promise.resolve().then(() => Uo(J2()));
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
      bb((e, t) => new YC(e, t));
    };
  })()), L0;
}
HT();
