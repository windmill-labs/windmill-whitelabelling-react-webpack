var b0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, y0 = {}, N0;
function BT() {
  return N0 || (N0 = 1, (() => {
    var or, ai, ur, Bn, si, Qi, lr, cr, oi, rn, Vn, ui, Bt, dr, ht, Lt, Zi, $n, li, Or, Ne, hr, yt, Kn, Nt, Yt, Sn, xr;
    var x0 = Object.create, Oo = Object.defineProperty, k0 = Object.getOwnPropertyDescriptor, M0 = Object.getOwnPropertyNames, U0 = Object.getPrototypeOf, P0 = Object.prototype.hasOwnProperty, B0 = (e, t) => () => (e && (t = e(e = 0)), t), pr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), V0 = (e, t) => {
      for (var n in t) Oo(e, n, { get: t[n], enumerable: !0 });
    }, $0 = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of M0(t)) !P0.call(e, i) && i !== n && Oo(e, i, { get: () => t[i], enumerable: !(r = k0(t, i)) || r.enumerable });
      return e;
    }, xo = (e, t, n) => (n = e != null ? x0(U0(e)) : {}, $0(!e || !e.__esModule ? Oo(n, "default", { value: e, enumerable: !0 }) : n, e)), K0 = pr((e, t) => {
      function n(r, i) {
        if (r != null) return r;
        var a = new Error(i !== void 0 ? i : "Got unexpected " + r);
        throw a.framesToPop = 1, a;
      }
      t.exports = n, t.exports.default = n, Object.defineProperty(t.exports, "__esModule", { value: !0 });
    }), Qa = pr((e, t) => {
      var n = "\\\\/", r = `[^${n}]`, i = "\\.", a = "\\+", s = "\\?", o = "\\/", u = "(?=.)", l = "[^/]", c = `(?:${o}|$)`, f = `(?:^|${o})`, p = `${i}{1,2}${c}`, m = `(?!${i})`, g = `(?!${f}${p})`, _ = `(?!${i}{0,1}${c})`, w = `(?!${p})`, S = `[^.${o}]`, F = `${l}*?`, C = "/", x = { DOT_LITERAL: i, PLUS_LITERAL: a, QMARK_LITERAL: s, SLASH_LITERAL: o, ONE_CHAR: u, QMARK: l, END_ANCHOR: c, DOTS_SLASH: p, NO_DOT: m, NO_DOTS: g, NO_DOT_SLASH: _, NO_DOTS_SLASH: w, QMARK_NO_DOT: S, STAR: F, START_ANCHOR: f, SEP: C }, U = { ...x, SLASH_LITERAL: `[${n}]`, QMARK: r, STAR: `${r}*?`, DOTS_SLASH: `${i}{1,2}(?:[${n}]|$)`, NO_DOT: `(?!${i})`, NO_DOTS: `(?!(?:^|[${n}])${i}{1,2}(?:[${n}]|$))`, NO_DOT_SLASH: `(?!${i}{0,1}(?:[${n}]|$))`, NO_DOTS_SLASH: `(?!${i}{1,2}(?:[${n}]|$))`, QMARK_NO_DOT: `[^.${n}]`, START_ANCHOR: `(?:^|[${n}])`, END_ANCHOR: `(?:[${n}]|$)`, SEP: "\\" }, H = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      t.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: H, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(O) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${O.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(O) {
        return O === !0 ? U : x;
      } };
    }), ko = pr((e) => {
      var { REGEX_BACKSLASH: t, REGEX_REMOVE_BACKSLASH: n, REGEX_SPECIAL_CHARS: r, REGEX_SPECIAL_CHARS_GLOBAL: i } = Qa();
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
    }), j0 = pr((e, t) => {
      var n = ko(), { CHAR_ASTERISK: r, CHAR_AT: i, CHAR_BACKWARD_SLASH: a, CHAR_COMMA: s, CHAR_DOT: o, CHAR_EXCLAMATION_MARK: u, CHAR_FORWARD_SLASH: l, CHAR_LEFT_CURLY_BRACE: c, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: p, CHAR_PLUS: m, CHAR_QUESTION_MARK: g, CHAR_RIGHT_CURLY_BRACE: _, CHAR_RIGHT_PARENTHESES: w, CHAR_RIGHT_SQUARE_BRACKET: S } = Qa(), F = (U) => U === l || U === a, C = (U) => {
        U.isPrefix !== !0 && (U.depth = U.isGlobstar ? 1 / 0 : 1);
      }, x = (U, H) => {
        let O = H || {}, B = U.length - 1, L = O.parts === !0 || O.scanToEnd === !0, j = [], $ = [], xe = [], Q = U, G = -1, Z = 0, ne = 0, oe = !1, de = !1, ce = !1, Ie = !1, ke = !1, y = !1, ee = !1, X = !1, re = !1, M = 0, P, ue, _e = { value: "", depth: 0, isGlob: !1 }, Xe = () => G >= B, Ct = () => Q.charCodeAt(G + 1), Se = () => (P = ue, Q.charCodeAt(++G));
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
                if (oe = _e.isBrace = !0, ce = _e.isGlob = !0, re = !0, L === !0) continue;
                break;
              }
              if (y !== !0 && ue === s) {
                if (oe = _e.isBrace = !0, ce = _e.isGlob = !0, re = !0, L === !0) continue;
                break;
              }
              if (ue === _ && (M--, M === 0)) {
                y = !1, oe = _e.isBrace = !0, re = !0;
                break;
              }
            }
            if (L === !0) continue;
            break;
          }
          if (ue === l) {
            if (j.push(G), $.push(_e), _e = { value: "", depth: 0, isGlob: !1 }, re === !0) continue;
            if (P === o && G === Z + 1) {
              Z += 2;
              continue;
            }
            ne = G + 1;
            continue;
          }
          if (O.noext !== !0 && (ue === m || ue === i || ue === r || ue === g || ue === u) && Ct() === f) {
            if (ce = _e.isGlob = !0, Ie = _e.isExtglob = !0, re = !0, L === !0) {
              for (; Xe() !== !0 && (ue = Se()); ) {
                if (ue === a) {
                  ee = _e.backslashes = !0, ue = Se();
                  continue;
                }
                if (ue === w) {
                  ce = _e.isGlob = !0, re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (ue === r) {
            if (P === r && (ke = _e.isGlobstar = !0), ce = _e.isGlob = !0, re = !0, L === !0) continue;
            break;
          }
          if (ue === g) {
            if (ce = _e.isGlob = !0, re = !0, L === !0) continue;
            break;
          }
          if (ue === p) for (; Xe() !== !0 && (De = Se()); ) {
            if (De === a) {
              ee = _e.backslashes = !0, Se();
              continue;
            }
            if (De === S) {
              if (de = _e.isBracket = !0, ce = _e.isGlob = !0, re = !0, L === !0) continue;
              break;
            }
          }
          if (O.nonegate !== !0 && ue === u && G === Z) {
            X = _e.negated = !0, Z++;
            continue;
          }
          if (O.noparen !== !0 && ue === f) {
            if (ce = _e.isGlob = !0, L === !0) {
              for (; Xe() !== !0 && (ue = Se()); ) {
                if (ue === f) {
                  ee = _e.backslashes = !0, ue = Se();
                  continue;
                }
                if (ue === w) {
                  re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (ce === !0) {
            if (re = !0, L === !0) continue;
            break;
          }
        }
        O.noext === !0 && (Ie = !1, ce = !1);
        let Je = Q, ci = "", an = "";
        Z > 0 && (ci = Q.slice(0, Z), Q = Q.slice(Z), ne -= Z), Je && ce === !0 && ne > 0 ? (Je = Q.slice(0, ne), an = Q.slice(ne)) : ce === !0 ? (Je = "", an = Q) : Je = Q, Je && Je !== "" && Je !== "/" && Je !== Q && F(Je.charCodeAt(Je.length - 1)) && (Je = Je.slice(0, -1)), O.unescape === !0 && (an && (an = n.removeBackslashes(an)), Je && ee === !0 && (Je = n.removeBackslashes(Je)));
        let Ft = { prefix: ci, input: U, start: Z, base: Je, glob: an, isBrace: oe, isBracket: de, isGlob: ce, isExtglob: Ie, isGlobstar: ke, negated: X };
        if (O.tokens === !0 && (Ft.maxDepth = 0, F(ue) || $.push(_e), Ft.tokens = $), O.parts === !0 || O.tokens === !0) {
          let De;
          for (let at = 0; at < j.length; at++) {
            let jn = De ? De + 1 : Z, ae = j[at], Be = U.slice(jn, ae);
            O.tokens && (at === 0 && Z !== 0 ? ($[at].isPrefix = !0, $[at].value = ci) : $[at].value = Be, C($[at]), Ft.maxDepth += $[at].depth), (at !== 0 || Be !== "") && xe.push(Be), De = ae;
          }
          if (De && De + 1 < U.length) {
            let at = U.slice(De + 1);
            xe.push(at), O.tokens && ($[$.length - 1].value = at, C($[$.length - 1]), Ft.maxDepth += $[$.length - 1].depth);
          }
          Ft.slashes = j, Ft.parts = xe;
        }
        return Ft;
      };
      t.exports = x;
    }), q0 = pr((e, t) => {
      var n = Qa(), r = ko(), { MAX_LENGTH: i, POSIX_REGEX_SOURCE: a, REGEX_NON_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_BACKREF: o, REPLACEMENTS: u } = n, l = (p, m) => {
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
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, w = p.length;
        if (w > _) throw new SyntaxError(`Input length: ${w}, exceeds maximum allowed length: ${_}`);
        let S = { type: "bos", value: "", output: g.prepend || "" }, F = [S], C = g.capture ? "" : "?:", x = n.globChars(g.windows), U = n.extglobChars(x), { DOT_LITERAL: H, PLUS_LITERAL: O, SLASH_LITERAL: B, ONE_CHAR: L, DOTS_SLASH: j, NO_DOT: $, NO_DOT_SLASH: xe, NO_DOTS_SLASH: Q, QMARK: G, QMARK_NO_DOT: Z, STAR: ne, START_ANCHOR: oe } = x, de = (ae) => `(${C}(?:(?!${oe}${ae.dot ? j : H}).)*?)`, ce = g.dot ? "" : $, Ie = g.dot ? G : Z, ke = g.bash === !0 ? de(g) : ne;
        g.capture && (ke = `(${ke})`), typeof g.noext == "boolean" && (g.noextglob = g.noext);
        let y = { input: p, index: -1, start: 0, dot: g.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: F };
        p = r.removePrefix(p, y), w = p.length;
        let ee = [], X = [], re = [], M = S, P, ue = () => y.index === w - 1, _e = y.peek = (ae = 1) => p[y.index + ae], Xe = y.advance = () => p[++y.index], Ct = () => p.slice(y.index + 1), Se = (ae = "", Be = 0) => {
          y.consumed += ae, y.index += Be;
        }, Je = (ae) => {
          y.output += ae.output != null ? ae.output : ae.value, Se(ae.value);
        }, ci = () => {
          let ae = 1;
          for (; _e() === "!" && (_e(2) !== "(" || _e(3) === "?"); ) Xe(), y.start++, ae++;
          return ae % 2 === 0 ? !1 : (y.negated = !0, y.start++, !0);
        }, an = (ae) => {
          y[ae]++, re.push(ae);
        }, Ft = (ae) => {
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
          an("parens"), De({ type: ae, value: Be, output: y.output ? "" : L }), De({ type: "paren", extglob: !0, value: Xe(), output: Le }), ee.push(te);
        }, jn = (ae) => {
          let Be = ae.close + (g.capture ? ")" : "");
          if (ae.type === "negate") {
            let te = ke;
            ae.inner && ae.inner.length > 1 && ae.inner.includes("/") && (te = de(g)), (te !== ke || ue() || /^\)+$/.test(Ct())) && (Be = ae.close = `)$))${te}`), ae.prev.type === "bos" && ue() && (y.negatedExtglob = !0);
          }
          De({ type: "paren", extglob: !0, value: P, output: Be }), Ft("parens");
        };
        if (g.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(p)) {
          let ae = !1, Be = p.replace(o, (te, Le, ft, It, st, sn) => It === "\\" ? (ae = !0, te) : It === "?" ? Le ? Le + It + (st ? G.repeat(st.length) : "") : sn === 0 ? Ie + (st ? G.repeat(st.length) : "") : G.repeat(ft.length) : It === "." ? H.repeat(ft.length) : It === "*" ? Le ? Le + It + (st ? ke : "") : ke : Le ? te : `\\${te}`);
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
            let Le = /^\\+/.exec(Ct()), ft = 0;
            if (Le && Le[0].length > 2 && (ft = Le[0].length, y.index += ft, ft % 2 !== 0 && (P += "\\")), g.unescape === !0 ? P = Xe() || "" : P += Xe() || "", y.brackets === 0) {
              De({ type: "text", value: P });
              continue;
            }
          }
          if (y.brackets > 0 && (P !== "]" || M.value === "[" || M.value === "[^")) {
            if (g.posix !== !1 && P === ":") {
              let te = M.value.slice(1);
              if (te.includes("[") && (M.posix = !0, te.includes(":"))) {
                let Le = M.value.lastIndexOf("["), ft = M.value.slice(0, Le), It = M.value.slice(Le + 2), st = a[It];
                if (st) {
                  M.value = ft + st, y.backtrack = !0, Xe(), !S.output && F.indexOf(M) === 1 && (S.output = L);
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
            an("parens"), De({ type: "paren", value: P });
            continue;
          }
          if (P === ")") {
            if (y.parens === 0 && g.strictBrackets === !0) throw new SyntaxError(c("opening", "("));
            let te = ee[ee.length - 1];
            if (te && y.parens === te.parens + 1) {
              jn(ee.pop());
              continue;
            }
            De({ type: "paren", value: P, output: y.parens ? ")" : "\\)" }), Ft("parens");
            continue;
          }
          if (P === "[") {
            if (g.nobracket === !0 || !Ct().includes("]")) {
              if (g.nobracket !== !0 && g.strictBrackets === !0) throw new SyntaxError(c("closing", "]"));
              P = `\\${P}`;
            } else an("brackets");
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
            Ft("brackets");
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
            an("braces");
            let te = { type: "brace", value: P, output: "(", outputIndex: y.output.length, tokensIndex: y.tokens.length };
            X.push(te), De(te);
            continue;
          }
          if (P === "}") {
            let te = X[X.length - 1];
            if (g.nobrace === !0 || !te) {
              De({ type: "text", value: P, output: P });
              continue;
            }
            let Le = ")";
            if (te.dots === !0) {
              let ft = F.slice(), It = [];
              for (let st = ft.length - 1; st >= 0 && (F.pop(), ft[st].type !== "brace"); st--) ft[st].type !== "dots" && It.unshift(ft[st].value);
              Le = l(It, g), y.backtrack = !0;
            }
            if (te.comma !== !0 && te.dots !== !0) {
              let ft = y.output.slice(0, te.outputIndex), It = y.tokens.slice(te.tokensIndex);
              te.value = te.output = "\\{", P = Le = "\\}", y.output = ft;
              for (let st of It) y.output += st.output || st.value;
            }
            De({ type: "brace", value: P, output: Le }), Ft("braces"), X.pop();
            continue;
          }
          if (P === "|") {
            ee.length > 0 && ee[ee.length - 1].conditions++, De({ type: "text", value: P });
            continue;
          }
          if (P === ",") {
            let te = P, Le = X[X.length - 1];
            Le && re[re.length - 1] === "braces" && (Le.comma = !0, te = "|"), De({ type: "comma", value: P, output: te });
            continue;
          }
          if (P === "/") {
            if (M.type === "dot" && y.index === y.start + 1) {
              y.start = y.index + 1, y.consumed = "", y.output = "", F.pop(), M = S;
              continue;
            }
            De({ type: "slash", value: P, output: B });
            continue;
          }
          if (P === ".") {
            if (y.braces > 0 && M.type === "dot") {
              M.value === "." && (M.output = H);
              let te = X[X.length - 1];
              M.type = "dots", M.output += P, M.value += P, te.dots = !0;
              continue;
            }
            if (y.braces + y.parens === 0 && M.type !== "bos" && M.type !== "slash") {
              De({ type: "text", value: P, output: H });
              continue;
            }
            De({ type: "dot", value: P, output: H });
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
              (M.value === "(" && !/[!=<:]/.test(te) || te === "<" && !/<([!=]|\w+>)/.test(Ct())) && (Le = `\\${P}`), De({ type: "text", value: P, output: Le });
              continue;
            }
            if (g.dot !== !0 && (M.type === "slash" || M.type === "bos")) {
              De({ type: "qmark", value: P, output: Z });
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
              ci();
              continue;
            }
          }
          if (P === "+") {
            if (g.noextglob !== !0 && _e() === "(" && _e(2) !== "?") {
              at("plus", P);
              continue;
            }
            if (M && M.value === "(" || g.regex === !1) {
              De({ type: "plus", value: P, output: O });
              continue;
            }
            if (M && (M.type === "bracket" || M.type === "paren" || M.type === "brace") || y.parens > 0) {
              De({ type: "plus", value: P });
              continue;
            }
            De({ type: "plus", value: O });
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
            let te = s.exec(Ct());
            te && (P += te[0], y.index += te[0].length), De({ type: "text", value: P });
            continue;
          }
          if (M && (M.type === "globstar" || M.star === !0)) {
            M.type = "star", M.star = !0, M.value += P, M.output = ke, y.backtrack = !0, y.globstar = !0, Se(P);
            continue;
          }
          let ae = Ct();
          if (g.noextglob !== !0 && /^\([^?]/.test(ae)) {
            at("star", P);
            continue;
          }
          if (M.type === "star") {
            if (g.noglobstar === !0) {
              Se(P);
              continue;
            }
            let te = M.prev, Le = te.prev, ft = te.type === "slash" || te.type === "bos", It = Le && (Le.type === "star" || Le.type === "globstar");
            if (g.bash === !0 && (!ft || ae[0] && ae[0] !== "/")) {
              De({ type: "star", value: P, output: "" });
              continue;
            }
            let st = y.braces > 0 && (te.type === "comma" || te.type === "brace"), sn = ee.length && (te.type === "pipe" || te.type === "paren");
            if (!ft && te.type !== "paren" && !st && !sn) {
              De({ type: "star", value: P, output: "" });
              continue;
            }
            for (; ae.slice(0, 3) === "/**"; ) {
              let ea = p[y.index + 4];
              if (ea && ea !== "/") break;
              ae = ae.slice(3), Se("/**", 3);
            }
            if (te.type === "bos" && ue()) {
              M.type = "globstar", M.value += P, M.output = de(g), y.output = M.output, y.globstar = !0, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && !It && ue()) {
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = de(g) + (g.strictSlashes ? ")" : "|$)"), M.value += P, y.globstar = !0, y.output += te.output + M.output, Se(P);
              continue;
            }
            if (te.type === "slash" && te.prev.type !== "bos" && ae[0] === "/") {
              let ea = ae[1] !== void 0 ? "|$" : "";
              y.output = y.output.slice(0, -(te.output + M.output).length), te.output = `(?:${te.output}`, M.type = "globstar", M.output = `${de(g)}${B}|${B}${ea})`, M.value += P, y.output += te.output + M.output, y.globstar = !0, Se(P + Xe()), De({ type: "slash", value: "/", output: "" });
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
            Be.output = ".*?", (M.type === "bos" || M.type === "slash") && (Be.output = ce + Be.output), De(Be);
            continue;
          }
          if (M && (M.type === "bracket" || M.type === "paren") && g.regex === !0) {
            Be.output = P, De(Be);
            continue;
          }
          (y.index === y.start || M.type === "slash" || M.type === "dot") && (M.type === "dot" ? (y.output += xe, M.output += xe) : g.dot === !0 ? (y.output += Q, M.output += Q) : (y.output += ce, M.output += ce), _e() !== "*" && (y.output += L, M.output += L)), De(Be);
        }
        for (; y.brackets > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "]"));
          y.output = r.escapeLast(y.output, "["), Ft("brackets");
        }
        for (; y.parens > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", ")"));
          y.output = r.escapeLast(y.output, "("), Ft("parens");
        }
        for (; y.braces > 0; ) {
          if (g.strictBrackets === !0) throw new SyntaxError(c("closing", "}"));
          y.output = r.escapeLast(y.output, "{"), Ft("braces");
        }
        if (g.strictSlashes !== !0 && (M.type === "star" || M.type === "bracket") && De({ type: "maybe_slash", value: "", output: `${B}?` }), y.backtrack === !0) {
          y.output = "";
          for (let ae of y.tokens) y.output += ae.output != null ? ae.output : ae.value, ae.suffix && (y.output += ae.suffix);
        }
        return y;
      };
      f.fastpaths = (p, m) => {
        let g = { ...m }, _ = typeof g.maxLength == "number" ? Math.min(i, g.maxLength) : i, w = p.length;
        if (w > _) throw new SyntaxError(`Input length: ${w}, exceeds maximum allowed length: ${_}`);
        p = u[p] || p;
        let { DOT_LITERAL: S, SLASH_LITERAL: F, ONE_CHAR: C, DOTS_SLASH: x, NO_DOT: U, NO_DOTS: H, NO_DOTS_SLASH: O, STAR: B, START_ANCHOR: L } = n.globChars(g.windows), j = g.dot ? H : U, $ = g.dot ? O : U, xe = g.capture ? "" : "?:", Q = { negated: !1, prefix: "" }, G = g.bash === !0 ? ".*?" : B;
        g.capture && (G = `(${G})`);
        let Z = (ce) => ce.noglobstar === !0 ? G : `(${xe}(?:(?!${L}${ce.dot ? x : S}).)*?)`, ne = (ce) => {
          switch (ce) {
            case "*":
              return `${j}${C}${G}`;
            case ".*":
              return `${S}${C}${G}`;
            case "*.*":
              return `${j}${G}${S}${C}${G}`;
            case "*/*":
              return `${j}${G}${F}${C}${$}${G}`;
            case "**":
              return j + Z(g);
            case "**/*":
              return `(?:${j}${Z(g)}${F})?${$}${C}${G}`;
            case "**/*.*":
              return `(?:${j}${Z(g)}${F})?${$}${G}${S}${C}${G}`;
            case "**/.*":
              return `(?:${j}${Z(g)}${F})?${S}${C}${G}`;
            default: {
              let Ie = /^(.*?)\.(\w+)$/.exec(ce);
              if (!Ie) return;
              let ke = ne(Ie[1]);
              return ke ? ke + S + Ie[2] : void 0;
            }
          }
        }, oe = r.removePrefix(p, Q), de = ne(oe);
        return de && g.strictSlashes !== !0 && (de += `${F}?`), de;
      }, t.exports = f;
    }), G0 = pr((e, t) => {
      var n = j0(), r = q0(), i = ko(), a = Qa(), s = (u) => u && typeof u == "object" && !Array.isArray(u), o = (u, l, c = !1) => {
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
        let w = () => !1;
        if (p.ignore) {
          let F = { ...l, ignore: null, onMatch: null, onResult: null };
          w = o(p.ignore, F, c);
        }
        let S = (F, C = !1) => {
          let { isMatch: x, match: U, output: H } = o.test(F, g, l, { glob: u, posix: m }), O = { glob: u, state: _, regex: g, posix: m, input: F, output: H, match: U, isMatch: x };
          return typeof p.onResult == "function" && p.onResult(O), x === !1 ? (O.isMatch = !1, C ? O : !1) : w(F) ? (typeof p.onIgnore == "function" && p.onIgnore(O), O.isMatch = !1, C ? O : !1) : (typeof p.onMatch == "function" && p.onMatch(O), C ? O : !0);
        };
        return c && (S.state = _), S;
      };
      o.test = (u, l, c, { glob: f, posix: p } = {}) => {
        if (typeof u != "string") throw new TypeError("Expected input to be a string");
        if (u === "") return { isMatch: !1, output: "" };
        let m = c || {}, g = m.format || (p ? i.toPosixSlashes : null), _ = u === f, w = _ && g ? g(u) : u;
        return _ === !1 && (w = g ? g(u) : u, _ = w === f), (_ === !1 || m.capture === !0) && (m.matchBase === !0 || m.basename === !0 ? _ = o.matchBase(u, l, c, p) : _ = l.exec(w)), { isMatch: !!_, match: _, output: w };
      }, o.matchBase = (u, l, c) => (l instanceof RegExp ? l : o.makeRe(l, c)).test(i.basename(u)), o.isMatch = (u, l, c) => o(l, c)(u), o.parse = (u, l) => Array.isArray(u) ? u.map((c) => o.parse(c, l)) : r(u, { ...l, fastpaths: !1 }), o.scan = (u, l) => n(u, l), o.compileRe = (u, l, c = !1, f = !1) => {
        if (c === !0) return u.output;
        let p = l || {}, m = p.contains ? "" : "^", g = p.contains ? "" : "$", _ = `${m}(?:${u.output})${g}`;
        u && u.negated === !0 && (_ = `^(?!${_}).*$`);
        let w = o.toRegex(_, l);
        return f === !0 && (w.state = u), w;
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
    }), H0 = pr((e, t) => {
      t.exports = G0();
    }), yc = {};
    V0(yc, { __debug: () => Iu, check: () => ld, default: () => Th, doc: () => Cs, format: () => Jo, formatWithCursor: () => Fs, getSupportInfo: () => Fu, util: () => Ts, version: () => Su });
    function Ln() {
    }
    function Nc(e, t, n, r, i) {
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
    function Cc(e, t) {
      var n;
      for (n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
      return e.slice(0, n);
    }
    function Tc(e, t) {
      var n;
      if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
      for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
      return e.slice(-n);
    }
    function Mo(e, t, n) {
      if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
      return n + e.slice(t.length);
    }
    function Uo(e, t, n) {
      if (!t) return e + n;
      if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
      return e.slice(0, -t.length) + n;
    }
    function la(e, t) {
      return Mo(e, t, "");
    }
    function Za(e, t) {
      return Uo(e, t, "");
    }
    function wc(e, t) {
      return t.slice(0, W0(e, t));
    }
    function W0(e, t) {
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
    function Ac(e, t, n, r) {
      if (t && n) {
        var i = t.value.match(/^\s*/)[0], a = t.value.match(/\s*$/)[0], s = n.value.match(/^\s*/)[0], o = n.value.match(/\s*$/)[0];
        if (e) {
          var u = Cc(i, s);
          e.value = Uo(e.value, s, u), t.value = la(t.value, u), n.value = la(n.value, u);
        }
        if (r) {
          var l = Tc(a, o);
          r.value = Mo(r.value, o, l), t.value = Za(t.value, l), n.value = Za(n.value, l);
        }
      } else if (n) e && (n.value = n.value.replace(/^\s*/, "")), r && (r.value = r.value.replace(/^\s*/, ""));
      else if (e && r) {
        var c = r.value.match(/^\s*/)[0], f = t.value.match(/^\s*/)[0], p = t.value.match(/\s*$/)[0], m = Cc(c, f);
        t.value = la(t.value, m);
        var g = Tc(la(c, m), p);
        t.value = Za(t.value, g), r.value = Mo(r.value, c, g), e.value = Uo(e.value, c, c.slice(0, c.length - g.length));
      } else if (r) {
        var _ = r.value.match(/^\s*/)[0], w = t.value.match(/\s*$/)[0], S = wc(w, _);
        t.value = Za(t.value, S);
      } else if (e) {
        var F = e.value.match(/\s*$/)[0], C = t.value.match(/^\s*/)[0], x = wc(F, C);
        t.value = la(t.value, x);
      }
    }
    function Po(e) {
      "@babel/helpers - typeof";
      return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Po(e);
    }
    function Bo(e, t, n, r, i) {
      t = t || [], n = n || [], r && (e = r(i, e));
      var a;
      for (a = 0; a < t.length; a += 1) if (t[a] === e) return n[a];
      var s;
      if (Object.prototype.toString.call(e) === "[object Array]") {
        for (t.push(e), s = new Array(e.length), n.push(s), a = 0; a < e.length; a += 1) s[a] = Bo(e[a], t, n, r, i);
        return t.pop(), n.pop(), s;
      }
      if (e && e.toJSON && (e = e.toJSON()), Po(e) === "object" && e !== null) {
        t.push(e), s = {}, n.push(s);
        var o = [], u;
        for (u in e) Object.prototype.hasOwnProperty.call(e, u) && o.push(u);
        for (o.sort(), a = 0; a < o.length; a += 1) u = o[a], s[u] = Bo(e[u], t, n, r, u);
        t.pop(), n.pop();
      } else s = e;
      return s;
    }
    function Y0(e, t, n) {
      return ga.diff(e, t, n);
    }
    function z0(e) {
      let t = e.indexOf("\r");
      return t !== -1 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
    }
    function Vo(e) {
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
    function Sc(e, t) {
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
    function X0(e) {
      return fa(!1, e, /\r\n?/gu, `
`);
    }
    function J0(e) {
      if (typeof e == "string") return mr;
      if (Array.isArray(e)) return Fn;
      if (!e) return;
      let { type: t } = e;
      if (tu.has(t)) return t;
    }
    function Q0(e) {
      let t = e === null ? "null" : typeof e;
      if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (Er(e)) throw new Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
      let r = Td([...tu].map((i) => `'${i}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }
    function Z0(e, t, n, r) {
      let i = [e];
      for (; i.length > 0; ) {
        let a = i.pop();
        if (a === nu) {
          n(i.pop());
          continue;
        }
        n && i.push(a, nu);
        let s = Er(a);
        if (!s) throw new Ur(a);
        if (t?.(a) !== !1) switch (s) {
          case Fn:
          case mn: {
            let o = s === Fn ? a : a.parts;
            for (let u = o.length, l = u - 1; l >= 0; --l) i.push(o[l]);
            break;
          }
          case Kt:
            i.push(a.flatContents, a.breakContents);
            break;
          case xt:
            if (r && a.expandedStates) for (let o = a.expandedStates.length, u = o - 1; u >= 0; --u) i.push(a.expandedStates[u]);
            else i.push(a.contents);
            break;
          case Rn:
          case In:
          case xn:
          case gn:
          case kn:
            i.push(a.contents);
            break;
          case mr:
          case gr:
          case On:
          case Mn:
          case Et:
          case Jt:
            break;
          default:
            throw new Ur(a);
        }
      }
    }
    function es(e, t) {
      if (typeof e == "string") return t(e);
      let n = /* @__PURE__ */ new Map();
      return r(e);
      function r(a) {
        if (n.has(a)) return n.get(a);
        let s = i(a);
        return n.set(a, s), s;
      }
      function i(a) {
        switch (Er(a)) {
          case Fn:
            return t(a.map(r));
          case mn:
            return t({ ...a, parts: a.parts.map(r) });
          case Kt:
            return t({ ...a, breakContents: r(a.breakContents), flatContents: r(a.flatContents) });
          case xt: {
            let { expandedStates: s, contents: o } = a;
            return s ? (s = s.map(r), o = s[0]) : o = r(o), t({ ...a, contents: o, expandedStates: s });
          }
          case Rn:
          case In:
          case xn:
          case gn:
          case kn:
            return t({ ...a, contents: r(a.contents) });
          case mr:
          case gr:
          case On:
          case Mn:
          case Et:
          case Jt:
            return t(a);
          default:
            throw new Ur(a);
        }
      }
    }
    function $o(e, t, n) {
      let r = n, i = !1;
      function a(s) {
        if (i) return !1;
        let o = t(s);
        o !== void 0 && (i = !0, r = o);
      }
      return hs(e, a), r;
    }
    function eE(e) {
      if (e.type === xt && e.break || e.type === Et && e.hard || e.type === Jt) return !0;
    }
    function tE(e) {
      return $o(e, eE, !1);
    }
    function Lc(e) {
      if (e.length > 0) {
        let t = mt(!1, e, -1);
        !t.expandedStates && !t.break && (t.break = "propagated");
      }
      return null;
    }
    function nE(e) {
      let t = /* @__PURE__ */ new Set(), n = [];
      function r(a) {
        if (a.type === Jt && Lc(n), a.type === xt) {
          if (n.push(a), t.has(a)) return !1;
          t.add(a);
        }
      }
      function i(a) {
        a.type === xt && n.pop().break && Lc(n);
      }
      hs(e, r, i, !0);
    }
    function rE(e) {
      return e.type === Et && !e.hard ? e.soft ? "" : " " : e.type === Kt ? e.flatContents : e;
    }
    function iE(e) {
      return es(e, rE);
    }
    function Fc(e) {
      for (e = [...e]; e.length >= 2 && mt(!1, e, -2).type === Et && mt(!1, e, -1).type === Jt; ) e.length -= 2;
      if (e.length > 0) {
        let t = ca(mt(!1, e, -1));
        e[e.length - 1] = t;
      }
      return e;
    }
    function ca(e) {
      switch (Er(e)) {
        case In:
        case xn:
        case xt:
        case kn:
        case gn: {
          let t = ca(e.contents);
          return { ...e, contents: t };
        }
        case Kt:
          return { ...e, breakContents: ca(e.breakContents), flatContents: ca(e.flatContents) };
        case mn:
          return { ...e, parts: Fc(e.parts) };
        case Fn:
          return Fc(e);
        case mr:
          return e.replace(/[\n\r]*$/u, "");
        case Rn:
        case gr:
        case On:
        case Mn:
        case Et:
        case Jt:
          break;
        default:
          throw new Ur(e);
      }
      return e;
    }
    function Ic(e) {
      return ca(sE(e));
    }
    function aE(e) {
      switch (Er(e)) {
        case mn:
          if (e.parts.every((t) => t === "")) return "";
          break;
        case xt:
          if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
          if (e.contents.type === xt && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
          break;
        case Rn:
        case In:
        case xn:
        case kn:
          if (!e.contents) return "";
          break;
        case Kt:
          if (!e.flatContents && !e.breakContents) return "";
          break;
        case Fn: {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [r, ...i] = Array.isArray(n) ? n : [n];
            typeof r == "string" && typeof mt(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...i);
          }
          return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
        }
        case mr:
        case gr:
        case On:
        case Mn:
        case Et:
        case gn:
        case Jt:
          break;
        default:
          throw new Ur(e);
      }
      return e;
    }
    function sE(e) {
      return es(e, (t) => aE(t));
    }
    function oE(e, t = su) {
      return es(e, (n) => typeof n == "string" ? Oc(t, n.split(`
`)) : n);
    }
    function uE(e) {
      if (e.type === Et) return !0;
    }
    function lE(e) {
      return $o(e, uE, !1);
    }
    function ts(e, t) {
      return e.type === gn ? { ...e, contents: t(e.contents) } : t(e);
    }
    function ns(e) {
      return En(e), { type: In, contents: e };
    }
    function gi(e, t) {
      return En(t), { type: Rn, contents: t, n: e };
    }
    function Rc(e, t = {}) {
      return En(e), ru(t.expandedStates, !0), { type: xt, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
    }
    function cE(e) {
      return gi(Number.NEGATIVE_INFINITY, e);
    }
    function dE(e) {
      return gi({ type: "root" }, e);
    }
    function hE(e) {
      return gi(-1, e);
    }
    function fE(e, t) {
      return Rc(e[0], { ...t, expandedStates: e });
    }
    function pE(e) {
      return Ad(e), { type: mn, parts: e };
    }
    function mE(e, t = "", n = {}) {
      return En(e), t !== "" && En(t), { type: Kt, breakContents: e, flatContents: t, groupId: n.groupId };
    }
    function gE(e, t) {
      return En(e), { type: xn, contents: e, groupId: t.groupId, negate: t.negate };
    }
    function Ko(e) {
      return En(e), { type: kn, contents: e };
    }
    function Oc(e, t) {
      En(e), ru(t);
      let n = [];
      for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
      return n;
    }
    function xc(e, t, n) {
      En(e);
      let r = e;
      if (t > 0) {
        for (let i = 0; i < Math.floor(t / n); ++i) r = ns(r);
        r = gi(t % n, r), r = gi(Number.NEGATIVE_INFINITY, r);
      }
      return r;
    }
    function EE(e, t) {
      return En(t), e ? { type: gn, label: e, contents: t } : t;
    }
    function Gn(e) {
      var t;
      if (!e) return "";
      if (Array.isArray(e)) {
        let n = [];
        for (let r of e) if (Array.isArray(r)) n.push(...Gn(r));
        else {
          let i = Gn(r);
          i !== "" && n.push(i);
        }
        return n;
      }
      return e.type === Kt ? { ...e, breakContents: Gn(e.breakContents), flatContents: Gn(e.flatContents) } : e.type === xt ? { ...e, contents: Gn(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(Gn) } : e.type === mn ? { type: "fill", parts: e.parts.map(Gn) } : e.contents ? { ...e, contents: Gn(e.contents) } : e;
    }
    function _E(e) {
      let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
      return r(Gn(e));
      function r(a, s, o) {
        var u, l;
        if (typeof a == "string") return JSON.stringify(a);
        if (Array.isArray(a)) {
          let c = a.map(r).filter(Boolean);
          return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
        }
        if (a.type === Et) {
          let c = ((u = o?.[s + 1]) == null ? void 0 : u.type) === Jt;
          return a.literal ? c ? "literalline" : "literallineWithoutBreakParent" : a.hard ? c ? "hardline" : "hardlineWithoutBreakParent" : a.soft ? "softline" : "line";
        }
        if (a.type === Jt) return ((l = o?.[s - 1]) == null ? void 0 : l.type) === Et && o[s - 1].hard ? void 0 : "breakParent";
        if (a.type === On) return "trim";
        if (a.type === In) return "indent(" + r(a.contents) + ")";
        if (a.type === Rn) return a.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(a.contents) + ")" : a.n < 0 ? "dedent(" + r(a.contents) + ")" : a.n.type === "root" ? "markAsRoot(" + r(a.contents) + ")" : "align(" + JSON.stringify(a.n) + ", " + r(a.contents) + ")";
        if (a.type === Kt) return "ifBreak(" + r(a.breakContents) + (a.flatContents ? ", " + r(a.flatContents) : "") + (a.groupId ? (a.flatContents ? "" : ', ""') + `, { groupId: ${i(a.groupId)} }` : "") + ")";
        if (a.type === xn) {
          let c = [];
          a.negate && c.push("negate: true"), a.groupId && c.push(`groupId: ${i(a.groupId)}`);
          let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return `indentIfBreak(${r(a.contents)}${f})`;
        }
        if (a.type === xt) {
          let c = [];
          a.break && a.break !== "propagated" && c.push("shouldBreak: true"), a.id && c.push(`id: ${i(a.id)}`);
          let f = c.length > 0 ? `, { ${c.join(", ")} }` : "";
          return a.expandedStates ? `conditionalGroup([${a.expandedStates.map((p) => r(p)).join(",")}]${f})` : `group(${r(a.contents)}${f})`;
        }
        if (a.type === mn) return `fill([${a.parts.map((c) => r(c)).join(", ")}])`;
        if (a.type === kn) return "lineSuffix(" + r(a.contents) + ")";
        if (a.type === Mn) return "lineSuffixBoundary";
        if (a.type === gn) return `label(${JSON.stringify(a.label)}, ${r(a.contents)})`;
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
    function DE(e) {
      return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
    }
    function vE(e) {
      return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
    }
    function bE(e) {
      if (!e) return 0;
      if (!Od.test(e)) return e.length;
      e = e.replace(Id(), "  ");
      let t = 0;
      for (let n of e) {
        let r = n.codePointAt(0);
        r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += Rd(r) ? 1 : 2);
      }
      return t;
    }
    function kc() {
      return { value: "", length: 0, queue: [] };
    }
    function yE(e, t) {
      return jo(e, { type: "indent" }, t);
    }
    function NE(e, t, n) {
      return t === Number.NEGATIVE_INFINITY ? e.root || kc() : t < 0 ? jo(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : jo(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
    }
    function jo(e, t, n) {
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
    function qo(e) {
      let t = 0, n = 0, r = e.length;
      e: for (; r--; ) {
        let i = e[r];
        if (i === Pr) {
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
      if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Pr);
      return t;
    }
    function rs(e, t, n, r, i, a) {
      if (n === Number.POSITIVE_INFINITY) return !0;
      let s = t.length, o = [e], u = [];
      for (; n >= 0; ) {
        if (o.length === 0) {
          if (s === 0) return !0;
          o.push(t[--s]);
          continue;
        }
        let { mode: l, doc: c } = o.pop(), f = Er(c);
        switch (f) {
          case mr:
            u.push(c), n -= ms(c);
            break;
          case Fn:
          case mn: {
            let p = f === Fn ? c : c.parts, m = c[gs] ?? 0;
            for (let g = p.length - 1; g >= m; g--) o.push({ mode: l, doc: p[g] });
            break;
          }
          case In:
          case Rn:
          case xn:
          case gn:
            o.push({ mode: l, doc: c.contents });
            break;
          case On:
            n += qo(u);
            break;
          case xt: {
            if (a && c.break) return !1;
            let p = c.break ? kt : l, m = c.expandedStates && p === kt ? mt(!1, c.expandedStates, -1) : c.contents;
            o.push({ mode: p, doc: m });
            break;
          }
          case Kt: {
            let p = (c.groupId ? i[c.groupId] || _n : l) === kt ? c.breakContents : c.flatContents;
            p && o.push({ mode: l, doc: p });
            break;
          }
          case Et:
            if (l === kt || c.hard) return !0;
            c.soft || (u.push(" "), n--);
            break;
          case kn:
            r = !0;
            break;
          case Mn:
            if (r) return !1;
            break;
        }
      }
      return !1;
    }
    function is(e, t) {
      let n = {}, r = t.printWidth, i = Vo(t.endOfLine), a = 0, s = [{ ind: kc(), mode: kt, doc: e }], o = [], u = !1, l = [], c = 0;
      for (nE(e); s.length > 0; ) {
        let { ind: p, mode: m, doc: g } = s.pop();
        switch (Er(g)) {
          case mr: {
            let _ = i !== `
` ? fa(!1, g, `
`, i) : g;
            o.push(_), s.length > 0 && (a += ms(_));
            break;
          }
          case Fn:
            for (let _ = g.length - 1; _ >= 0; _--) s.push({ ind: p, mode: m, doc: g[_] });
            break;
          case gr:
            if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
            o.push(Pr), c++;
            break;
          case In:
            s.push({ ind: yE(p, t), mode: m, doc: g.contents });
            break;
          case Rn:
            s.push({ ind: NE(p, g.n, t), mode: m, doc: g.contents });
            break;
          case On:
            a -= qo(o);
            break;
          case xt:
            switch (m) {
              case _n:
                if (!u) {
                  s.push({ ind: p, mode: g.break ? kt : _n, doc: g.contents });
                  break;
                }
              case kt: {
                u = !1;
                let _ = { ind: p, mode: _n, doc: g.contents }, w = r - a, S = l.length > 0;
                if (!g.break && rs(_, s, w, S, n)) s.push(_);
                else if (g.expandedStates) {
                  let F = mt(!1, g.expandedStates, -1);
                  if (g.break) {
                    s.push({ ind: p, mode: kt, doc: F });
                    break;
                  } else for (let C = 1; C < g.expandedStates.length + 1; C++) if (C >= g.expandedStates.length) {
                    s.push({ ind: p, mode: kt, doc: F });
                    break;
                  } else {
                    let x = g.expandedStates[C], U = { ind: p, mode: _n, doc: x };
                    if (rs(U, s, w, S, n)) {
                      s.push(U);
                      break;
                    }
                  }
                } else s.push({ ind: p, mode: kt, doc: g.contents });
                break;
              }
            }
            g.id && (n[g.id] = mt(!1, s, -1).mode);
            break;
          case mn: {
            let _ = r - a, w = g[gs] ?? 0, { parts: S } = g, F = S.length - w;
            if (F === 0) break;
            let C = S[w + 0], x = S[w + 1], U = { ind: p, mode: _n, doc: C }, H = { ind: p, mode: kt, doc: C }, O = rs(U, [], _, l.length > 0, n, !0);
            if (F === 1) {
              O ? s.push(U) : s.push(H);
              break;
            }
            let B = { ind: p, mode: _n, doc: x }, L = { ind: p, mode: kt, doc: x };
            if (F === 2) {
              O ? s.push(B, U) : s.push(L, H);
              break;
            }
            let j = S[w + 2], $ = { ind: p, mode: m, doc: { ...g, [gs]: w + 2 } };
            rs({ ind: p, mode: _n, doc: [C, x, j] }, [], _, l.length > 0, n, !0) ? s.push($, B, U) : O ? s.push($, L, U) : s.push($, L, H);
            break;
          }
          case Kt:
          case xn: {
            let _ = g.groupId ? n[g.groupId] : m;
            if (_ === kt) {
              let w = g.type === Kt ? g.breakContents : g.negate ? g.contents : ns(g.contents);
              w && s.push({ ind: p, mode: m, doc: w });
            }
            if (_ === _n) {
              let w = g.type === Kt ? g.flatContents : g.negate ? ns(g.contents) : g.contents;
              w && s.push({ ind: p, mode: m, doc: w });
            }
            break;
          }
          case kn:
            l.push({ ind: p, mode: m, doc: g.contents });
            break;
          case Mn:
            l.length > 0 && s.push({ ind: p, mode: m, doc: ps });
            break;
          case Et:
            switch (m) {
              case _n:
                if (g.hard) u = !0;
                else {
                  g.soft || (o.push(" "), a += 1);
                  break;
                }
              case kt:
                if (l.length > 0) {
                  s.push({ ind: p, mode: m, doc: g }, ...l.reverse()), l.length = 0;
                  break;
                }
                g.literal ? p.root ? (o.push(i, p.root.value), a = p.root.length) : (o.push(i), a = 0) : (a -= qo(o), o.push(i + p.value), a = p.length);
                break;
            }
            break;
          case gn:
            s.push({ ind: p, mode: m, doc: g.contents });
            break;
          case Jt:
            break;
          default:
            throw new Ur(g);
        }
        s.length === 0 && l.length > 0 && (s.push(...l.reverse()), l.length = 0);
      }
      let f = o.indexOf(Pr);
      if (f !== -1) {
        let p = o.indexOf(Pr, f + 1);
        if (p === -1) return { formatted: o.filter((w) => w !== Pr).join("") };
        let m = o.slice(0, f).join(""), g = o.slice(f + 1, p).join(""), _ = o.slice(p + 1).join("");
        return { formatted: m + g + _, cursorNodeStart: m.length, cursorNodeText: g };
      }
      return { formatted: o.join("") };
    }
    function CE(e, t, n = 0) {
      let r = 0;
      for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
      return r;
    }
    function TE(e) {
      return e !== null && typeof e == "object";
    }
    function* as(e, t) {
      let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (a) => Md(a) && r(a);
      for (let a of n(e)) {
        let s = e[a];
        if (Array.isArray(s)) for (let o of s) i(o) && (yield o);
        else i(s) && (yield s);
      }
    }
    function* wE(e, t) {
      let n = [e];
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (let a of as(i, t)) yield a, n.push(a);
      }
    }
    function AE(e, t) {
      return as(e, t).next().done;
    }
    function da(e) {
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
    function SE(e, t, n) {
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
    function LE(e, t, n = {}) {
      let r = Hn(e, n.backwards ? t - 1 : t, n), i = vr(e, r, n);
      return r !== i;
    }
    function FE(e) {
      return Array.isArray(e) && e.length > 0;
    }
    function IE(e) {
      return e ? (t) => e(t, du) : Bd;
    }
    function RE(e) {
      let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
      return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
    }
    function Go(e, t) {
      (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = RE(e);
    }
    function Ei(e, t) {
      t.leading = !0, t.trailing = !1, Go(e, t);
    }
    function ss(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), Go(e, t);
    }
    function _i(e, t) {
      t.leading = !1, t.trailing = !0, Go(e, t);
    }
    function Ho(e, t) {
      if (vs.has(e)) return vs.get(e);
      let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i }, locStart: a, locEnd: s } = t;
      if (!r) return [];
      let o = (n?.(e, t) ?? [...as(e, { getVisitorKeys: _a(i) })]).flatMap((u) => r(u) ? [u] : Ho(u, t));
      return o.sort((u, l) => a(u) - a(l) || s(u) - s(l)), vs.set(e, o), o;
    }
    function Mc(e, t, n, r) {
      let { locStart: i, locEnd: a } = n, s = i(t), o = a(t), u = Ho(e, n), l, c, f = 0, p = u.length;
      for (; f < p; ) {
        let m = f + p >> 1, g = u[m], _ = i(g), w = a(g);
        if (_ <= s && o <= w) return Mc(g, t, n, g);
        if (w <= s) {
          l = g, f = m + 1;
          continue;
        }
        if (o <= _) {
          c = g, p = m;
          continue;
        }
        throw new Error("Comment location overlaps with node location");
      }
      if (r?.type === "TemplateLiteral") {
        let { quasis: m } = r, g = Wo(m, t, n);
        l && Wo(m, l, n) !== g && (l = null), c && Wo(m, c, n) !== g && (c = null);
      }
      return { enclosingNode: r, precedingNode: l, followingNode: c };
    }
    function OE(e, t) {
      let { comments: n } = e;
      if (delete e.comments, !Pd(n) || !t.printer.canAttachComment) return;
      let r = [], { locStart: i, locEnd: a, printer: { experimentalFeatures: { avoidAstMutation: s = !1 } = {}, handleComments: o = {} }, originalText: u } = t, { ownLine: l = bs, endOfLine: c = bs, remaining: f = bs } = o, p = n.map((m, g) => ({ ...Mc(e, m, t), comment: m, text: u, options: t, ast: e, isLastComment: n.length - 1 === g }));
      for (let [m, g] of p.entries()) {
        let { comment: _, precedingNode: w, enclosingNode: S, followingNode: F, text: C, options: x, ast: U, isLastComment: H } = g;
        if (x.parser === "json" || x.parser === "json5" || x.parser === "jsonc" || x.parser === "__js_expression" || x.parser === "__ts_expression" || x.parser === "__vue_expression" || x.parser === "__vue_ts_expression") {
          if (i(_) - i(U) <= 0) {
            Ei(U, _);
            continue;
          }
          if (a(_) - a(U) >= 0) {
            _i(U, _);
            continue;
          }
        }
        let O;
        if (s ? O = [g] : (_.enclosingNode = S, _.precedingNode = w, _.followingNode = F, O = [_, C, x, U, H]), xE(C, x, p, m)) _.placement = "ownLine", l(...O) || (F ? Ei(F, _) : w ? _i(w, _) : ss(S || U, _));
        else if (kE(C, x, p, m)) _.placement = "endOfLine", c(...O) || (w ? _i(w, _) : F ? Ei(F, _) : ss(S || U, _));
        else if (_.placement = "remaining", !f(...O)) if (w && F) {
          let B = r.length;
          B > 0 && r[B - 1].followingNode !== F && Uc(r, x), r.push(g);
        } else w ? _i(w, _) : F ? Ei(F, _) : ss(S || U, _);
      }
      if (Uc(r, t), !s) for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
    }
    function xE(e, t, n, r) {
      let { comment: i, precedingNode: a } = n[r], { locStart: s, locEnd: o } = t, u = s(i);
      if (a) for (let l = r - 1; l >= 0; l--) {
        let { comment: c, precedingNode: f } = n[l];
        if (f !== a || !hu(e.slice(o(c), u))) break;
        u = s(c);
      }
      return Wn(e, u, { backwards: !0 });
    }
    function kE(e, t, n, r) {
      let { comment: i, followingNode: a } = n[r], { locStart: s, locEnd: o } = t, u = o(i);
      if (a) for (let l = r + 1; l < n.length; l++) {
        let { comment: c, followingNode: f } = n[l];
        if (f !== a || !hu(e.slice(u, s(c)))) break;
        u = o(c);
      }
      return Wn(e, u);
    }
    function Uc(e, t) {
      var n, r;
      let i = e.length;
      if (i === 0) return;
      let { precedingNode: a, followingNode: s } = e[0], o = t.locStart(s), u;
      for (u = i; u > 0; --u) {
        let { comment: l, precedingNode: c, followingNode: f } = e[u - 1];
        Ds.strictEqual(c, a), Ds.strictEqual(f, s);
        let p = t.originalText.slice(t.locEnd(l), o);
        if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, p, t)) ?? /^[\s(]*$/u.test(p)) o = t.locStart(l);
        else break;
      }
      for (let [l, { comment: c }] of e.entries()) l < u ? _i(a, c) : Ei(s, c);
      for (let l of [a, s]) l.comments && l.comments.length > 1 && l.comments.sort((c, f) => t.locStart(c) - t.locStart(f));
      e.length = 0;
    }
    function Wo(e, t, n) {
      let r = n.locStart(t) - 1;
      for (let i = 1; i < e.length; ++i) if (r < n.locStart(e[i])) return i - 1;
      return 0;
    }
    function ME(e, t) {
      let n = t - 1;
      n = Hn(e, n, { backwards: !0 }), n = vr(e, n, { backwards: !0 }), n = Hn(e, n, { backwards: !0 });
      let r = vr(e, n, { backwards: !0 });
      return n !== r;
    }
    function Pc(e, t) {
      let n = e.node;
      return n.printed = !0, t.printer.printComment(e, t);
    }
    function UE(e, t) {
      var n;
      let r = e.node, i = [Pc(e, t)], { printer: a, originalText: s, locStart: o, locEnd: u } = t;
      if ((n = a.isBlockComment) != null && n.call(a, r)) {
        let c = Wn(s, u(r)) ? Wn(s, o(r), { backwards: !0 }) ? _r : au : " ";
        i.push(c);
      } else i.push(_r);
      let l = vr(s, Hn(s, u(r)));
      return l !== !1 && Wn(s, l) && i.push(_r), i;
    }
    function PE(e, t, n) {
      var r;
      let i = e.node, a = Pc(e, t), { printer: s, originalText: o, locStart: u } = t, l = (r = s.isBlockComment) == null ? void 0 : r.call(s, i);
      if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || Wn(o, u(i), { backwards: !0 })) {
        let c = ys(o, u(i));
        return { doc: Ko([_r, c ? _r : "", a]), isBlock: l, hasLineSuffix: !0 };
      }
      return !l || n != null && n.hasLineSuffix ? { doc: [Ko([" ", a]), Ea], isBlock: l, hasLineSuffix: !0 } : { doc: [" ", a], isBlock: l, hasLineSuffix: !1 };
    }
    function BE(e, t) {
      let n = e.node;
      if (!n) return {};
      let r = t[Symbol.for("printedComments")];
      if ((n.comments || []).filter((o) => !r.has(o)).length === 0) return { leading: "", trailing: "" };
      let i = [], a = [], s;
      return e.each(() => {
        let o = e.node;
        if (r != null && r.has(o)) return;
        let { leading: u, trailing: l } = o;
        u ? i.push(UE(e, t)) : l && (s = PE(e, t, s), a.push(s.doc));
      }, "comments"), { leading: i, trailing: a };
    }
    function VE(e, t, n) {
      let { leading: r, trailing: i } = BE(e, n);
      return !r && !i ? t : ts(t, (a) => [r, a, i]);
    }
    function $E(e) {
      let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
      for (let r of t) {
        if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
        delete r.printed;
      }
    }
    function KE(e) {
      return () => {
      };
    }
    function Bc({ plugins: e = [], showDeprecated: t = !1 } = {}) {
      let n = e.flatMap((i) => i.languages ?? []), r = [];
      for (let i of qE(Object.assign({}, ...e.map(({ options: a }) => a), $d))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((a) => !a.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...jE(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter((a) => {
        var s;
        return ((s = a.defaultOptions) == null ? void 0 : s[i.name]) !== void 0;
      }).map((a) => [a.name, a.defaultOptions[i.name]])), r.push(i));
      return { languages: n, options: r };
    }
    function* jE(e, t, n) {
      let r = new Set(e.map((i) => i.value));
      for (let i of t) if (i.parsers) {
        for (let a of i.parsers) if (!r.has(a)) {
          r.add(a);
          let s = n.find((u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, a)), o = i.name;
          s != null && s.name && (o += ` (plugin: ${s.name})`), yield { value: a, description: o };
        }
      }
    }
    function qE(e) {
      let t = [];
      for (let [n, r] of Object.entries(e)) {
        let i = { name: n, ...r };
        Array.isArray(i.default) && (i.default = mt(!1, i.default, -1).value), t.push(i);
      }
      return t;
    }
    function Vc(e, t) {
      if (!t) return;
      let n = Kd(t).toLowerCase();
      return e.find(({ filenames: r }) => r?.some((i) => i.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r?.some((i) => n.endsWith(i)));
    }
    function GE(e, t) {
      if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n?.includes(t)) ?? e.find(({ extensions: n }) => n?.includes(`.${t}`));
    }
    function HE(e, t) {
      let n = e.plugins.flatMap((i) => i.languages ?? []);
      return (GE(n, t.language) ?? Vc(n, t.physicalFile) ?? Vc(n, t.file) ?? (t.physicalFile, void 0))?.parsers[0];
    }
    function $c(e, t, n, r) {
      return [`Invalid ${$r.default.red(r.key(e))} value.`, `Expected ${$r.default.blue(n)},`, `but received ${t === gu ? $r.default.gray("nothing") : $r.default.red(r.value(t))}.`].join(" ");
    }
    function Kc({ text: e, list: t }, n) {
      let r = [];
      return e && r.push(`- ${$r.default.blue(e)}`), t && r.push([`- ${$r.default.blue(t.title)}:`].concat(t.values.map((i) => Kc(i, n - Eu.length).replace(/^|\n/g, `$&${Eu}`))).join(`
`)), jc(r, n);
    }
    function jc(e, t) {
      if (e.length === 1) return e[0];
      let [n, r] = e, [i, a] = e.map((s) => s.split(`
`, 1)[0].length);
      return i > t && i > a ? r : n;
    }
    function WE(e, t) {
      if (e === t) return 0;
      let n = e;
      e.length > t.length && (e = t, t = n);
      let r = e.length, i = t.length;
      for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--;
      let a = 0;
      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
      if (r -= a, i -= a, r === 0) return i;
      let s, o, u, l, c = 0, f = 0;
      for (; c < r; ) Du[c] = e.charCodeAt(a + c), Ns[c] = ++c;
      for (; f < i; ) for (s = t.charCodeAt(a + f), u = f++, o = f, c = 0; c < r; c++) l = s === Du[c] ? u : u + 1, u = Ns[c], o = Ns[c] = u > o ? l > o ? o + 1 : l : l > u ? u + 1 : l;
      return o;
    }
    function YE(e, t) {
      let n = new e(t), r = Object.create(n);
      for (let i of Hd) i in t && (r[i] = zE(t[i], n, Yn.prototype[i].length));
      return r;
    }
    function zE(e, t, n) {
      return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
    }
    function qc({ from: e, to: t }) {
      return { from: [e], to: t };
    }
    function XE(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) {
        let i = r[t];
        if (n[i]) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n[i] = r;
      }
      return n;
    }
    function JE(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = r[t];
        if (n.has(i)) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`);
        n.set(i, r);
      }
      return n;
    }
    function QE() {
      let e = /* @__PURE__ */ Object.create(null);
      return (t) => {
        let n = JSON.stringify(t);
        return e[n] ? !0 : (e[n] = !0, !1);
      };
    }
    function ZE(e, t) {
      let n = [], r = [];
      for (let i of e) t(i) ? n.push(i) : r.push(i);
      return [n, r];
    }
    function e2(e) {
      return e === Math.floor(e);
    }
    function t2(e, t) {
      if (e === t) return 0;
      let n = typeof e, r = typeof t, i = ["undefined", "object", "boolean", "number", "string"];
      return n !== r ? i.indexOf(n) - i.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
    }
    function n2(e) {
      return (...t) => {
        let n = e(...t);
        return typeof n == "string" ? new Error(n) : n;
      };
    }
    function Gc(e) {
      return e === void 0 ? {} : e;
    }
    function Hc(e) {
      if (typeof e == "string") return { text: e };
      let { text: t, list: n } = e;
      return r2((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(Hc) } } : { text: t };
    }
    function Wc(e, t) {
      return e === !0 ? !0 : e === !1 ? { value: t } : e;
    }
    function Yc(e, t, n = !1) {
      return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
    }
    function zc(e, t) {
      return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
    }
    function Yo(e, t) {
      return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => zc(n, t)) : [zc(e, t)];
    }
    function Xc(e, t) {
      let n = Yo(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
      return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
    }
    function r2(e, t) {
      if (!e) throw new Error(t);
    }
    function i2(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: a, descriptor: s } = {}) {
      if (r) {
        if (!a) throw new Error("'FlagSchema' option is required.");
        if (!s) throw new Error("'descriptor' option is required.");
      } else s = Vr;
      let o = i ? Array.isArray(i) ? (p, m) => i.includes(p) ? { [p]: m } : void 0 : (p, m) => ({ [p]: m }) : (p, m, g) => {
        let { _, ...w } = g.schemas;
        return vu(p, m, { ...g, schemas: w });
      }, u = a2(t, { isCLI: r, FlagSchema: a }), l = new ih(u, { logger: n, unknown: o, descriptor: s }), c = n !== !1;
      c && yu && (l._hasDeprecationWarned = yu);
      let f = l.normalize(e);
      return c && (yu = l._hasDeprecationWarned), f;
    }
    function a2(e, { isCLI: t, FlagSchema: n }) {
      let r = [];
      t && r.push(Yd.create({ name: "_" }));
      for (let i of e) r.push(s2(i, { isCLI: t, optionInfos: e, FlagSchema: n })), i.alias && t && r.push(Wd.create({ name: i.alias, sourceName: i.name }));
      return r;
    }
    function s2(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
      let { name: i } = e, a = { name: i }, s, o = {};
      switch (e.type) {
        case "int":
          s = Zd, t && (a.preprocess = Number);
          break;
        case "string":
          s = bu;
          break;
        case "choice":
          s = Jd, a.choices = e.choices.map((u) => u != null && u.redirect ? { ...u, redirect: { to: { key: e.name, value: u.redirect } } } : u);
          break;
        case "boolean":
          s = Xd;
          break;
        case "flag":
          s = r, a.flags = n.flatMap((u) => [u.alias, u.description && u.name, u.oppositeDescription && `no-${u.name}`].filter(Boolean));
          break;
        case "path":
          s = bu;
          break;
        default:
          throw new Error(`Unexpected type ${e.type}`);
      }
      if (e.exception ? a.validate = (u, l, c) => e.exception(u) || l.validate(u, c) : a.validate = (u, l, c) => u === void 0 || l.validate(u, c), e.redirect && (o.redirect = (u) => u ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (o.deprecated = !0), t && !e.array) {
        let u = a.preprocess || ((l) => l);
        a.preprocess = (l, c, f) => c.preprocess(u(Array.isArray(l) ? mt(!1, l, -1) : l), f);
      }
      return e.array ? zd.create({ ...t ? { preprocess: (u) => Array.isArray(u) ? u : [u] } : {}, ...o, valueSchema: s.create(a) }) : s.create({ ...a, ...o });
    }
    function Jc(e, t) {
      if (!t) throw new Error("parserName is required.");
      let n = Nu(!1, e, (i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, t));
      if (n) return n;
      let r = `Couldn't resolve parser "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new fu(r);
    }
    function o2(e, t) {
      if (!t) throw new Error("astFormat is required.");
      let n = Nu(!1, e, (i) => i.printers && Object.prototype.hasOwnProperty.call(i.printers, t));
      if (n) return n;
      let r = `Couldn't find plugin for AST format "${t}".`;
      throw r += " Plugins must be explicitly added to the standalone bundle.", new fu(r);
    }
    function Qc({ plugins: e, parser: t }) {
      let n = Jc(e, t);
      return Zc(n, t);
    }
    function Zc(e, t) {
      let n = e.parsers[t];
      return typeof n == "function" ? n() : n;
    }
    function u2(e, t) {
      let n = e.printers[t];
      return typeof n == "function" ? n() : n;
    }
    async function l2(e, t = {}) {
      var n;
      let r = { ...e };
      if (!r.parser) if (r.filepath) {
        if (r.parser = jd(r, { physicalFile: r.filepath }), !r.parser) throw new pu(`No parser could be inferred for file "${r.filepath}".`);
      } else throw new pu("No parser and no file path given, couldn't infer a parser.");
      let i = Bc({ plugins: e.plugins, showDeprecated: !0 }).options, a = { ...Cu, ...Object.fromEntries(i.filter((p) => p.default !== void 0).map((p) => [p.name, p.default])) }, s = Jc(r.plugins, r.parser), o = await Zc(s, r.parser);
      r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
      let u = (n = s.printers) != null && n[o.astFormat] ? s : o2(r.plugins, o.astFormat), l = await u2(u, o.astFormat);
      r.printer = l;
      let c = u.defaultOptions ? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, p]) => p !== void 0)) : {}, f = { ...a, ...c };
      for (let [p, m] of Object.entries(f)) (r[p] === null || r[p] === void 0) && (r[p] = m);
      return r.parser === "json" && (r.trailingComma = "none"), ah(r, i, { passThrough: Object.keys(Cu), ...t });
    }
    async function c2(e, t) {
      let n = await Qc(t), r = n.preprocess ? n.preprocess(e, t) : e;
      t.originalText = r;
      let i;
      try {
        i = await n.parse(r, t, t);
      } catch (a) {
        d2(a, e);
      }
      return { text: r, ast: i };
    }
    function d2(e, t) {
      let { loc: n } = e;
      if (n) {
        let r = (0, oh.codeFrameColumns)(t, n, { highlightCode: !0 });
        throw e.message += `
` + r, e.codeFrame = r, e;
      }
      throw e;
    }
    async function h2(e, t, n, r, i) {
      let { embeddedLanguageFormatting: a, printer: { embed: s, hasPrettierIgnore: o = () => !1, getVisitorKeys: u } } = n;
      if (!s || a !== "auto") return;
      if (s.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
      let l = _a(s.getVisitorKeys ?? u), c = [];
      m();
      let f = e.stack;
      for (let { print: g, node: _, pathStack: w } of c) try {
        e.stack = w;
        let S = await g(p, t, e, n);
        S && i.set(_, S);
      } catch (S) {
        if (globalThis.PRETTIER_DEBUG) throw S;
      }
      e.stack = f;
      function p(g, _) {
        return f2(g, _, n, r);
      }
      function m() {
        let { node: g } = e;
        if (g === null || typeof g != "object" || o(e)) return;
        for (let w of l(g)) Array.isArray(g[w]) ? e.each(m, w) : e.call(m, w);
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
    async function f2(e, t, n, r) {
      let i = await Kr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: a } = await bi(e, i), s = await r(a, i);
      return Ic(s);
    }
    function p2(e, t) {
      let { originalText: n, [Symbol.for("comments")]: r, locStart: i, locEnd: a, [Symbol.for("printedComments")]: s } = t, { node: o } = e, u = i(o), l = a(o);
      for (let c of r) i(c) >= u && a(c) <= l && s.add(c);
      return n.slice(u, l);
    }
    async function os(e, t) {
      ({ ast: e } = await td(e, t));
      let n = /* @__PURE__ */ new Map(), r = new kd(e), i = Vd(t), a = /* @__PURE__ */ new Map();
      await h2(r, o, t, os, a);
      let s = await ed(r, t, o, void 0, a);
      if ($E(t), t.nodeAfterCursor && !t.nodeBeforeCursor) return [Dr, s];
      if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [s, Dr];
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
        let p = ed(r, t, o, l, a);
        return f && n.set(c, p), p;
      }
    }
    function ed(e, t, n, r, i) {
      var a;
      let { node: s } = e, { printer: o } = t, u;
      switch ((a = o.hasPrettierIgnore) != null && a.call(o, e) ? u = uh(e, t) : i.has(s) ? u = i.get(s) : u = o.print(e, t, n, r), s) {
        case t.cursorNode:
          u = ts(u, (l) => [Dr, l, Dr]);
          break;
        case t.nodeBeforeCursor:
          u = ts(u, (l) => [l, Dr]);
          break;
        case t.nodeAfterCursor:
          u = ts(u, (l) => [Dr, l]);
          break;
      }
      return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) && (u = VE(e, u, t)), u;
    }
    async function td(e, t) {
      let n = e.comments ?? [];
      t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), OE(e, t);
      let { printer: { preprocess: r } } = t;
      return e = r ? await r(e, t) : e, { ast: e, comments: n };
    }
    function m2(e, t) {
      let { cursorOffset: n, locStart: r, locEnd: i } = t, a = _a(t.printer.getVisitorKeys), s = (m) => r(m) <= n && i(m) >= n, o = e, u = [e];
      for (let m of wE(e, { getVisitorKeys: a, filter: s })) u.push(m), o = m;
      if (AE(o, { getVisitorKeys: a })) return { cursorNode: o };
      let l, c, f = -1, p = Number.POSITIVE_INFINITY;
      for (; u.length > 0 && (l === void 0 || c === void 0); ) {
        o = u.pop();
        let m = l !== void 0, g = c !== void 0;
        for (let _ of as(o, { getVisitorKeys: a })) {
          if (!m) {
            let w = i(_);
            w <= n && w > f && (l = _, f = w);
          }
          if (!g) {
            let w = r(_);
            w >= n && w < p && (c = _, p = w);
          }
        }
      }
      return { nodeBeforeCursor: l, nodeAfterCursor: c };
    }
    function g2(e, t) {
      let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
      if (!n) return e;
      let i = _a(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
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
    function E2(e, t) {
      let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
      return n.find((i) => Tu.has(i.type) && r.has(i));
    }
    function nd(e) {
      let t = hh(!1, e, (n) => n.type !== "Program" && n.type !== "File");
      return t === -1 ? e : e.slice(0, t + 1);
    }
    function _2(e, t, { locStart: n, locEnd: r }) {
      let i = e.node, a = t.node;
      if (i === a) return { startNode: i, endNode: a };
      let s = n(e.node);
      for (let u of nd(t.parentNodes)) if (n(u) >= s) a = u;
      else break;
      let o = r(t.node);
      for (let u of nd(e.parentNodes)) {
        if (r(u) <= o) i = u;
        else break;
        if (i === a) break;
      }
      return { startNode: i, endNode: a };
    }
    function zo(e, t, n, r, i = [], a) {
      let { locStart: s, locEnd: o } = n, u = s(e), l = o(e);
      if (!(t > l || t < u || a === "rangeEnd" && t === u || a === "rangeStart" && t === l)) {
        for (let c of Ho(e, n)) {
          let f = zo(c, t, n, r, [e, ...i], a);
          if (f) return f;
        }
        if (!r || r(e, i[0])) return { node: e, parentNodes: i };
      }
    }
    function D2(e, t) {
      return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
    }
    function rd(e, t, n) {
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
          return D2(t.type, n?.type);
        case "json":
        case "json5":
        case "jsonc":
        case "json-stringify":
          return Tu.has(t.type);
        case "graphql":
          return ph.has(t.kind);
        case "vue":
          return t.tag !== "root";
      }
      return !1;
    }
    function v2(e, t, n) {
      let { rangeStart: r, rangeEnd: i, locStart: a, locEnd: s } = t;
      Ds.ok(i > r);
      let o = e.slice(r, i).search(/\S/u), u = o === -1;
      if (!u) for (r += o; i > r && !/\S/u.test(e[i - 1]); --i) ;
      let l = zo(n, r, t, (m, g) => rd(t, m, g), [], "rangeStart"), c = u ? l : zo(n, i, t, (m) => rd(t, m), [], "rangeEnd");
      if (!l || !c) return { rangeStart: 0, rangeEnd: 0 };
      let f, p;
      if (fh(t)) {
        let m = E2(l, c);
        f = m, p = m;
      } else ({ startNode: f, endNode: p } = _2(l, c, t));
      return { rangeStart: Math.min(a(f), a(p)), rangeEnd: Math.max(s(f), s(p)) };
    }
    async function id(e, t, n = 0) {
      if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
      let { ast: r, text: i } = await bi(e, t);
      t.cursorOffset >= 0 && (t = { ...t, ...lh(r, t) });
      let a = await os(r, t);
      n > 0 && (a = xc([_r, a], n, t.tabWidth));
      let s = is(a, t);
      if (n > 0) {
        let u = s.formatted.trim();
        s.cursorNodeStart !== void 0 && (s.cursorNodeStart -= s.formatted.indexOf(u), s.cursorNodeStart < 0 && (s.cursorNodeStart = 0, s.cursorNodeText = s.cursorNodeText.trimStart()), s.cursorNodeStart + s.cursorNodeText.length > u.length && (s.cursorNodeText = s.cursorNodeText.trimEnd())), s.formatted = u + Vo(t.endOfLine);
      }
      let o = t[Symbol.for("comments")];
      if (t.cursorOffset >= 0) {
        let u, l, c, f;
        if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && s.cursorNodeText) if (c = s.cursorNodeStart, f = s.cursorNodeText, t.cursorNode) u = t.locStart(t.cursorNode), l = i.slice(u, t.locEnd(t.cursorNode));
        else {
          if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
          u = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
          let S = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : i.length;
          l = i.slice(u, S);
        }
        else u = 0, l = i, c = 0, f = s.formatted;
        let p = t.cursorOffset - u;
        if (l === f) return { formatted: s.formatted, cursorOffset: c + p, comments: o };
        let m = l.split("");
        m.splice(p, 0, Au);
        let g = f.split(""), _ = Y0(m, g), w = c;
        for (let S of _) if (S.removed) {
          if (S.value.includes(Au)) break;
        } else w += S.count;
        return { formatted: s.formatted, cursorOffset: w, comments: o };
      }
      return { formatted: s.formatted, cursorOffset: -1, comments: o };
    }
    async function b2(e, t) {
      let { ast: n, text: r } = await bi(e, t), { rangeStart: i, rangeEnd: a } = v2(r, t, n), s = r.slice(i, a), o = Math.min(i, r.lastIndexOf(`
`, i) + 1), u = r.slice(o, i).match(/^\s*/u)[0], l = Es(u, t.tabWidth), c = await id(s, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > i && t.cursorOffset <= a ? t.cursorOffset - i : -1, endOfLine: "lf" }, l), f = c.formatted.trimEnd(), { cursorOffset: p } = t;
      p > a ? p += f.length - s.length : c.cursorOffset >= 0 && (p = c.cursorOffset + i);
      let m = r.slice(0, i) + f + r.slice(a);
      if (t.endOfLine !== "lf") {
        let g = Vo(t.endOfLine);
        p >= 0 && g === `\r
` && (p += Sc(m.slice(0, p), `
`)), m = fa(!1, m, `
`, g);
      }
      return { formatted: m, cursorOffset: p, comments: c.comments };
    }
    function Xo(e, t, n) {
      return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
    }
    function ad(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
      return n = Xo(e, n, -1), r = Xo(e, r, 0), i = Xo(e, i, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i };
    }
    function sd(e, t) {
      let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a } = ad(e, t), s = e.charAt(0) === wu;
      if (s && (e = e.slice(1), n--, r--, i--), a === "auto" && (a = z0(e)), e.includes("\r")) {
        let o = (u) => Sc(e.slice(0, Math.max(u, 0)), `\r
`);
        n -= o(n), r -= o(r), i -= o(i), e = X0(e);
      }
      return { hasBOM: s, text: e, options: ad(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a }) };
    }
    async function od(e, t) {
      let n = await Qc(t);
      return !n.hasPragma || n.hasPragma(e);
    }
    async function ud(e, t) {
      let { hasBOM: n, text: r, options: i } = sd(e, await Kr(t));
      if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await od(r, i)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
      let a;
      return i.rangeStart > 0 || i.rangeEnd < r.length ? a = await b2(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await od(r, i) && (r = i.printer.insertPragma(r)), a = await id(r, i)), n && (a.formatted = wu + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
    }
    async function y2(e, t, n) {
      let { text: r, options: i } = sd(e, await Kr(t)), a = await bi(r, i);
      return n && (n.preprocessForPrint && (a.ast = await td(a.ast, i)), n.massage && (a.ast = ch(a.ast, i))), a;
    }
    async function N2(e, t) {
      t = await Kr(t);
      let n = await os(e, t);
      return is(n, t);
    }
    async function C2(e, t) {
      let n = _E(e), { formatted: r } = await ud(n, { ...t, parser: "__js_expression" });
      return r;
    }
    async function T2(e, t) {
      t = await Kr(t);
      let { ast: n } = await bi(e, t);
      return os(n, t);
    }
    async function w2(e, t) {
      return is(e, await Kr(t));
    }
    function A2(e, t) {
      if (t === !1) return !1;
      if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
        for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
      }
      return t;
    }
    function S2(e, t) {
      return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? cu(e, t) : t;
    }
    function L2(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = Hn(e, r), r = ws(e, r), r = As(e, r), r = vr(e, r);
      return r;
    }
    function F2(e, t) {
      let n = null, r = t;
      for (; r !== n; ) n = r, r = lu(e, r), r = ws(e, r), r = Hn(e, r);
      return r = As(e, r), r = vr(e, r), r !== !1 && Wn(e, r);
    }
    function I2(e, t) {
      let n = e.lastIndexOf(`
`);
      return n === -1 ? 0 : Es(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
    }
    function R2(e) {
      if (typeof e != "string") throw new TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function O2(e, t) {
      let n = e.match(new RegExp(`(${R2(t)})+`, "gu"));
      return n === null ? 0 : n.reduce((r, i) => Math.max(r, i.length / t.length), 0);
    }
    function x2(e, t) {
      let n = Ss(e, t);
      return n === !1 ? "" : e.charAt(n);
    }
    function k2(e, t) {
      let n = t === !0 || t === va ? va : Lu, r = n === va ? Lu : va, i = 0, a = 0;
      for (let s of e) s === n ? i++ : s === r && a++;
      return i > a ? r : n;
    }
    function M2(e, t, n) {
      for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
      return !1;
    }
    function U2(e, t, n = {}) {
      return Hn(e, n.backwards ? t - 1 : t, n) !== t;
    }
    function P2(e, t, n) {
      let r = t === '"' ? "'" : '"', i = fa(!1, e, /\\(.)|(["'])/gsu, (a, s, o) => s === r ? s : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
      return t + i + t;
    }
    function B2(e, t, n) {
      return Ss(e, n(t));
    }
    function V2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Ss(e, t) : B2(...arguments);
    }
    function $2(e, t, n) {
      return ys(e, n(t));
    }
    function K2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? ys(e, t) : $2(...arguments);
    }
    function j2(e, t, n) {
      return Ls(e, n(t));
    }
    function q2(e, t) {
      return arguments.length === 2 || typeof t == "number" ? Ls(e, t) : j2(...arguments);
    }
    function Mr(e, t = 1) {
      return async (...n) => {
        let r = n[t] ?? {}, i = r.plugins ?? [];
        return n[t] = { ...r, plugins: Array.isArray(i) ? i : Object.values(i) }, e(...n);
      };
    }
    async function Jo(e, t) {
      let { formatted: n } = await Fs(e, { ...t, cursorOffset: -1 });
      return n;
    }
    async function ld(e, t) {
      return await Jo(e, t) === e;
    }
    var cd, us, dd, hd, fd, pd, Qo, Zo, ls, md, ha, gd, Ed, Di, cs, _d, eu, Dd, fa, pa, vd, ma, bd, ds, yd, Nd, vi, ga, mr, Fn, gr, In, Rn, On, xt, mn, Kt, xn, kn, Mn, Et, gn, Jt, tu, Cd, mt, Er, Td, wd, Ur, nu, hs, fs, En, ru, Ad, Sd, Ea, Ld, ps, iu, au, Fd, _r, su, Dr, Id, Rd, Od, ms, kt, _n, Pr, gs, Es, Br, ou, _s, xd, kd, uu, Ds, Md, Ud, Hn, lu, cu, vr, Wn, Pd, du, Bd, _a, vs, bs, hu, ys, Vd, fu, pu, $d, Kd, jd, Vr, mu, qd, $r, gu, Da, Eu, Gd, _u, Ns, Du, vu, Hd, Yn, Wd, Yd, zd, Xd, Jd, Qd, Zd, bu, eh, th, nh, rh, ih, yu, ah, sh, Nu, Cu, Kr, oh, bi, uh, lh, ch, dh, hh, fh, Tu, ph, wu, Au, Cs, mh, gh, Eh, Su, Ts, ws, As, Ss, Ls, _h, Dh, vh, va, Lu, bh, yh, Nh, Ch, Fs, Fu, Iu, Th, G2 = B0(() => {
      cd = Object.create, us = Object.defineProperty, dd = Object.getOwnPropertyDescriptor, hd = Object.getOwnPropertyNames, fd = Object.getPrototypeOf, pd = Object.prototype.hasOwnProperty, Qo = (e) => {
        throw TypeError(e);
      }, Zo = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ls = (e, t) => {
        for (var n in t) us(e, n, { get: t[n], enumerable: !0 });
      }, md = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of hd(t)) !pd.call(e, i) && i !== n && us(e, i, { get: () => t[i], enumerable: !(r = dd(t, i)) || r.enumerable });
        return e;
      }, ha = (e, t, n) => (n = e != null ? cd(fd(e)) : {}, md(t || !e || !e.__esModule ? us(n, "default", { value: e, enumerable: !0 }) : n, e)), gd = (e, t, n) => t.has(e) || Qo("Cannot " + n), Ed = (e, t, n) => t.has(e) ? Qo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Di = (e, t, n) => (gd(e, t, "access private method"), n), cs = Zo((e, t) => {
        var n = new Proxy(String, { get: () => n });
        t.exports = n;
      }), _d = Zo((e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        function t() {
          return new Proxy({}, { get: () => (a) => a });
        }
        var n = /\r\n|[\n\r\u2028\u2029]/;
        function r(a, s, o) {
          let u = Object.assign({ column: 0, line: -1 }, a.start), l = Object.assign({}, u, a.end), { linesAbove: c = 2, linesBelow: f = 3 } = o || {}, p = u.line, m = u.column, g = l.line, _ = l.column, w = Math.max(p - (c + 1), 0), S = Math.min(s.length, g + f);
          p === -1 && (w = 0), g === -1 && (S = s.length);
          let F = g - p, C = {};
          if (F) for (let x = 0; x <= F; x++) {
            let U = x + p;
            if (!m) C[U] = !0;
            else if (x === 0) {
              let H = s[U - 1].length;
              C[U] = [m, H - m + 1];
            } else if (x === F) C[U] = [0, _];
            else {
              let H = s[U - x].length;
              C[U] = [0, H];
            }
          }
          else m === _ ? m ? C[p] = [m, 0] : C[p] = !0 : C[p] = [m, _ - m];
          return { start: w, end: S, markerLines: C };
        }
        function i(a, s, o = {}) {
          let u = t(), l = a.split(n), { start: c, end: f, markerLines: p } = r(s, l, o), m = s.start && typeof s.start.column == "number", g = String(f).length, _ = a.split(n, f).slice(c, f).map((w, S) => {
            let F = c + 1 + S, C = ` ${` ${F}`.slice(-g)} |`, x = p[F], U = !p[F + 1];
            if (x) {
              let H = "";
              if (Array.isArray(x)) {
                let O = w.slice(0, Math.max(x[0] - 1, 0)).replace(/[^\t]/g, " "), B = x[1] || 1;
                H = [`
 `, u.gutter(C.replace(/\d/g, " ")), " ", O, u.marker("^").repeat(B)].join(""), U && o.message && (H += " " + u.message(o.message));
              }
              return [u.marker(">"), u.gutter(C), w.length > 0 ? ` ${w}` : "", H].join("");
            } else return ` ${u.gutter(C)}${w.length > 0 ? ` ${w}` : ""}`;
          }).join(`
`);
          return o.message && !m && (_ = `${" ".repeat(g + 1)}${o.message}
${_}`), _;
        }
        e.codeFrameColumns = i;
      }), eu = {}, ls(eu, { __debug: () => Iu, check: () => ld, doc: () => Cs, format: () => Jo, formatWithCursor: () => Fs, getSupportInfo: () => Fu, util: () => Ts, version: () => Su }), Dd = (e, t, n, r) => {
        if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
      }, fa = Dd, Ln.prototype = { diff: function(e, t) {
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
        if (m[0].oldPos + 1 >= u && g + 1 >= o) return s(Nc(a, m[0].lastComponent, t, e, a.useLongestToken));
        var _ = -1 / 0, w = 1 / 0;
        function S() {
          for (var C = Math.max(_, -l); C <= Math.min(w, l); C += 2) {
            var x = void 0, U = m[C - 1], H = m[C + 1];
            U && (m[C - 1] = void 0);
            var O = !1;
            if (H) {
              var B = H.oldPos - C;
              O = H && 0 <= B && B < o;
            }
            var L = U && U.oldPos + 1 < u;
            if (!O && !L) {
              m[C] = void 0;
              continue;
            }
            if (!L || O && U.oldPos < H.oldPos ? x = a.addToPath(H, !0, !1, 0, r) : x = a.addToPath(U, !1, !0, 1, r), g = a.extractCommon(x, t, e, C, r), x.oldPos + 1 >= u && g + 1 >= o) return s(Nc(a, x.lastComponent, t, e, a.useLongestToken));
            m[C] = x, x.oldPos + 1 >= u && (w = Math.min(w, C - 1)), g + 1 >= o && (_ = Math.max(_, C + 1));
          }
          l++;
        }
        if (i) (function C() {
          setTimeout(function() {
            if (l > c || Date.now() > p) return i();
            S() || C();
          }, 0);
        })();
        else for (; l <= c && Date.now() <= p; ) {
          var F = S();
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
      } }, pa = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", vd = new RegExp("[".concat(pa, "]+|\\s+|[^").concat(pa, "]"), "ug"), ma = new Ln(), ma.equals = function(e, t, n) {
        return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
      }, ma.tokenize = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
        if (t.intlSegmenter) {
          if (t.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
          n = Array.from(t.intlSegmenter.segment(e), function(a) {
            return a.segment;
          });
        } else n = e.match(vd) || [];
        var r = [], i = null;
        return n.forEach(function(a) {
          /\s/.test(a) ? i == null ? r.push(a) : r.push(r.pop() + a) : /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + a) : r.push(i + a) : r.push(a), i = a;
        }), r;
      }, ma.join = function(e) {
        return e.map(function(t, n) {
          return n == 0 ? t : t.replace(/^\s+/, "");
        }).join("");
      }, ma.postProcess = function(e, t) {
        if (!e || t.oneChangePerToken) return e;
        var n = null, r = null, i = null;
        return e.forEach(function(a) {
          a.added ? r = a : a.removed ? i = a : ((r || i) && Ac(n, i, r, a), n = a, r = null, i = null);
        }), (r || i) && Ac(n, i, r, null), e;
      }, bd = new Ln(), bd.tokenize = function(e) {
        var t = new RegExp("(\\r?\\n)|[".concat(pa, "]+|[^\\S\\n\\r]+|[^").concat(pa, "]"), "ug");
        return e.match(t) || [];
      }, ds = new Ln(), ds.tokenize = function(e, t) {
        t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
        var n = [], r = e.split(/(\n|\r\n)/);
        r[r.length - 1] || r.pop();
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          i % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a);
        }
        return n;
      }, ds.equals = function(e, t, n) {
        return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), Ln.prototype.equals.call(this, e, t, n);
      }, yd = new Ln(), yd.tokenize = function(e) {
        return e.split(/(\S.+?[.!?])(?=\s+|$)/);
      }, Nd = new Ln(), Nd.tokenize = function(e) {
        return e.split(/([{}:;,]|\s+)/);
      }, vi = new Ln(), vi.useLongestToken = !0, vi.tokenize = ds.tokenize, vi.castInput = function(e, t) {
        var n = t.undefinedReplacement, r = t.stringifyReplacer, i = r === void 0 ? function(a, s) {
          return typeof s > "u" ? n : s;
        } : r;
        return typeof e == "string" ? e : JSON.stringify(Bo(e, null, null, i), i, "  ");
      }, vi.equals = function(e, t, n) {
        return Ln.prototype.equals.call(vi, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
      }, ga = new Ln(), ga.tokenize = function(e) {
        return e.slice();
      }, ga.join = ga.removeEmpty = function(e) {
        return e;
      }, mr = "string", Fn = "array", gr = "cursor", In = "indent", Rn = "align", On = "trim", xt = "group", mn = "fill", Kt = "if-break", xn = "indent-if-break", kn = "line-suffix", Mn = "line-suffix-boundary", Et = "line", gn = "label", Jt = "break-parent", tu = /* @__PURE__ */ new Set([gr, In, Rn, On, xt, mn, Kt, xn, kn, Mn, Et, gn, Jt]), Cd = (e, t, n) => {
        if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
      }, mt = Cd, Er = J0, Td = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), wd = class extends Error {
        name = "InvalidDocError";
        constructor(e) {
          super(Q0(e)), this.doc = e;
        }
      }, Ur = wd, nu = {}, hs = Z0, fs = () => {
      }, En = fs, ru = fs, Ad = fs, Sd = { type: Mn }, Ea = { type: Jt }, Ld = { type: On }, ps = { type: Et, hard: !0 }, iu = { type: Et, hard: !0, literal: !0 }, au = { type: Et }, Fd = { type: Et, soft: !0 }, _r = [ps, Ea], su = [iu, Ea], Dr = { type: gr }, Id = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, Rd = (e) => !(DE(e) || vE(e)), Od = /[^\x20-\x7F]/u, ms = bE, kt = Symbol("MODE_BREAK"), _n = Symbol("MODE_FLAT"), Pr = Symbol("cursor"), gs = Symbol("DOC_FILL_PRINTED_LENGTH"), Es = CE, xd = class {
        constructor(e) {
          Ed(this, Br), this.stack = [e];
        }
        get key() {
          let { stack: e, siblings: t } = this;
          return mt(!1, e, t === null ? -2 : -4) ?? null;
        }
        get index() {
          return this.siblings === null ? null : mt(!1, this.stack, -2);
        }
        get node() {
          return mt(!1, this.stack, -1);
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
          let { stack: e } = this, t = mt(!1, e, -3);
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
          return [...Di(this, Br, _s).call(this)];
        }
        getName() {
          let { stack: e } = this, { length: t } = e;
          return t > 1 ? mt(!1, e, -2) : null;
        }
        getValue() {
          return mt(!1, this.stack, -1);
        }
        getNode(e = 0) {
          let t = Di(this, Br, ou).call(this, e);
          return t === -1 ? null : this.stack[t];
        }
        getParentNode(e = 0) {
          return this.getNode(e + 1);
        }
        call(e, ...t) {
          let { stack: n } = this, { length: r } = n, i = mt(!1, n, -1);
          for (let a of t) i = i[a], n.push(a, i);
          try {
            return e(this);
          } finally {
            n.length = r;
          }
        }
        callParent(e, t = 0) {
          let n = Di(this, Br, ou).call(this, t + 1), r = this.stack.splice(n + 1);
          try {
            return e(this);
          } finally {
            this.stack.push(...r);
          }
        }
        each(e, ...t) {
          let { stack: n } = this, { length: r } = n, i = mt(!1, n, -1);
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
          for (let t of Di(this, Br, _s).call(this)) if (e(t)) return t;
        }
        hasAncestor(e) {
          for (let t of Di(this, Br, _s).call(this)) if (e(t)) return !0;
          return !1;
        }
      }, Br = /* @__PURE__ */ new WeakSet(), ou = function(e) {
        let { stack: t } = this;
        for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
        return -1;
      }, _s = function* () {
        let { stack: e } = this;
        for (let t = e.length - 3; t >= 0; t -= 2) {
          let n = e[t];
          Array.isArray(n) || (yield n);
        }
      }, kd = xd, uu = new Proxy(() => {
      }, { get: () => uu }), Ds = uu, Md = TE, Ud = da(/\s/u), Hn = da(" 	"), lu = da(",; 	"), cu = da(/[^\n\r]/u), vr = SE, Wn = LE, Pd = FE, du = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), Bd = (e) => Object.keys(e).filter((t) => !du.has(t)), _a = IE, vs = /* @__PURE__ */ new WeakMap(), bs = () => !1, hu = (e) => !/[\S\n\u2028\u2029]/u.test(e), ys = ME, Vd = KE, fu = class extends Error {
        name = "ConfigError";
      }, pu = class extends Error {
        name = "UndefinedParserError";
      }, $d = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, Kd = (e) => String(e).split(/[/\\]/u).pop(), jd = HE, Vr = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
        if (e === null || typeof e != "object") return JSON.stringify(e);
        if (Array.isArray(e)) return `[${e.map((n) => Vr.value(n)).join(", ")}]`;
        let t = Object.keys(e);
        return t.length === 0 ? "{}" : `{ ${t.map((n) => `${Vr.key(n)}: ${Vr.value(e[n])}`).join(", ")} }`;
      }, pair: ({ key: e, value: t }) => Vr.value({ [e]: t }) }, mu = ha(cs(), 1), qd = (e, t, { descriptor: n }) => {
        let r = [`${mu.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
        return t && r.push(`we now treat it as ${mu.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
      }, $r = ha(cs(), 1), gu = Symbol.for("vnopts.VALUE_NOT_EXIST"), Da = Symbol.for("vnopts.VALUE_UNCHANGED"), Eu = " ".repeat(2), Gd = (e, t, n) => {
        let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
        return r && a.push($c(e, t, r, n.descriptor)), i && a.push([$c(e, t, i.title, n.descriptor)].concat(i.values.map((s) => Kc(s, n.loggerPrintWidth))).join(`
`)), jc(a, n.loggerPrintWidth);
      }, _u = ha(cs(), 1), Ns = [], Du = [], vu = (e, t, { descriptor: n, logger: r, schemas: i }) => {
        let a = [`Ignored unknown option ${_u.default.yellow(n.pair({ key: e, value: t }))}.`], s = Object.keys(i).sort().find((o) => WE(e, o) < 3);
        s && a.push(`Did you mean ${_u.default.blue(n.key(s))}?`), r.warn(a.join(" "));
      }, Hd = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"], Yn = class {
        static create(e) {
          return YE(this, e);
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
          return Da;
        }
      }, Wd = class extends Yn {
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
      }, Yd = class extends Yn {
        expected() {
          return "anything";
        }
        validate() {
          return !0;
        }
      }, zd = class extends Yn {
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
            n.push(...i.map(qc));
          }
          return n;
        }
        redirect(e, t) {
          let n = [], r = [];
          for (let i of e) {
            let a = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
            "remain" in a && n.push(a.remain), r.push(...a.redirect.map(qc));
          }
          return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
        }
        overlap(e, t) {
          return e.concat(t);
        }
      }, Xd = class extends Yn {
        expected() {
          return "true or false";
        }
        validate(e) {
          return typeof e == "boolean";
        }
      }, Jd = class extends Yn {
        constructor(e) {
          super(e), this._choices = JE(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
        }
        expected({ descriptor: e }) {
          let t = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(t2).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
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
      }, Qd = class extends Yn {
        expected() {
          return "a number";
        }
        validate(e, t) {
          return typeof e == "number";
        }
      }, Zd = class extends Qd {
        expected() {
          return "an integer";
        }
        validate(e, t) {
          return t.normalizeValidateResult(super.validate(e, t), e) === !0 && e2(e);
        }
      }, bu = class extends Yn {
        expected() {
          return "a string";
        }
        validate(e) {
          return typeof e == "string";
        }
      }, eh = Vr, th = vu, nh = Gd, rh = qd, ih = class {
        constructor(e, t) {
          let { logger: n = console, loggerPrintWidth: r = 80, descriptor: i = eh, unknown: a = th, invalid: s = nh, deprecated: o = rh, missing: u = () => !1, required: l = () => !1, preprocess: c = (p) => p, postprocess: f = () => Da } = t || {};
          this._utils = { descriptor: i, logger: n || { warn: () => {
          } }, loggerPrintWidth: r, schemas: XE(e, "name"), normalizeDefaultResult: Gc, normalizeExpectedResult: Hc, normalizeDeprecatedResult: Yc, normalizeForwardResult: Yo, normalizeRedirectResult: Xc, normalizeValidateResult: Wc }, this._unknownHandler = a, this._invalidHandler = n2(s), this._deprecatedHandler = o, this._identifyMissing = (p, m) => !(p in m) || u(p, m), this._identifyRequired = l, this._preprocess = c, this._postprocess = f, this.cleanHistory();
        }
        cleanHistory() {
          this._hasDeprecationWarned = QE();
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
              let s = Gc(a.default(this._utils));
              "value" in s && n.push({ [i]: s.value });
            }
          }
          r();
          for (let i of Object.keys(this._utils.schemas)) {
            if (!(i in t)) continue;
            let a = this._utils.schemas[i], s = t[i], o = a.postprocess(s, this._utils);
            o !== Da && (this._applyValidation(o, i, a), t[i] = o);
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
              let m = Yc(s.deprecated(f, this._utils), o, !0);
              if (m !== !1) if (m === !0) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
              else for (let { value: g } of m) {
                let _ = { key: a, value: g };
                if (!this._hasDeprecationWarned(_)) {
                  let w = typeof p == "string" ? { key: p, value: g } : p;
                  this._utils.logger.warn(this._deprecatedHandler(_, w, this._utils));
                }
              }
            };
            Yo(s.forward(o, this._utils), o).forEach(u);
            let c = Xc(s.redirect(o, this._utils), o);
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
          for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, gu, this._utils);
        }
        _partitionOptionKeys(e) {
          let [t, n] = ZE(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
          return { knownKeys: t, unknownKeys: n };
        }
        _applyValidation(e, t, n) {
          let r = Wc(n.validate(e, this._utils), e);
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
          if (t !== Da) {
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
      }, ah = i2, sh = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLast) return t.findLast(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return i;
          }
        }
      }, Nu = sh, Cu = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null }, Kr = l2, oh = ha(_d(), 1), bi = c2, uh = p2, lh = m2, ch = g2, dh = (e, t, n) => {
        if (!(e && t == null)) {
          if (t.findLastIndex) return t.findLastIndex(n);
          for (let r = t.length - 1; r >= 0; r--) {
            let i = t[r];
            if (n(i, r, t)) return r;
          }
          return -1;
        }
      }, hh = dh, fh = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify", Tu = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), ph = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]), wu = "\uFEFF", Au = Symbol("cursor"), Cs = {}, ls(Cs, { builders: () => mh, printer: () => gh, utils: () => Eh }), mh = { join: Oc, line: au, softline: Fd, hardline: _r, literalline: su, group: Rc, conditionalGroup: fE, fill: pE, lineSuffix: Ko, lineSuffixBoundary: Sd, cursor: Dr, breakParent: Ea, ifBreak: mE, trim: Ld, indent: ns, indentIfBreak: gE, align: gi, addAlignmentToDoc: xc, markAsRoot: dE, dedentToRoot: cE, dedent: hE, hardlineWithoutBreakParent: ps, literallineWithoutBreakParent: iu, label: EE, concat: (e) => e }, gh = { printDocToString: is }, Eh = { willBreak: tE, traverseDoc: hs, findInDoc: $o, mapDoc: es, removeLines: iE, stripTrailingHardline: Ic, replaceEndOfLine: oE, canBreak: lE }, Su = "3.5.3", Ts = {}, ls(Ts, { addDanglingComment: () => ss, addLeadingComment: () => Ei, addTrailingComment: () => _i, getAlignmentSize: () => Es, getIndentSize: () => _h, getMaxContinuousCount: () => Dh, getNextNonSpaceNonCommentCharacter: () => vh, getNextNonSpaceNonCommentCharacterIndex: () => V2, getPreferredQuote: () => bh, getStringWidth: () => ms, hasNewline: () => Wn, hasNewlineInRange: () => yh, hasSpaces: () => Nh, isNextLineEmpty: () => q2, isNextLineEmptyAfterIndex: () => Ls, isPreviousLineEmpty: () => K2, makeString: () => Ch, skip: () => da, skipEverythingButNewLine: () => cu, skipInlineComment: () => ws, skipNewline: () => vr, skipSpaces: () => Hn, skipToLineEnd: () => lu, skipTrailingComment: () => As, skipWhitespace: () => Ud }), ws = A2, As = S2, Ss = L2, Ls = F2, _h = I2, Dh = O2, vh = x2, va = "'", Lu = '"', bh = k2, yh = M2, Nh = U2, Ch = P2, Fs = Mr(ud), Fu = Mr(Bc, 0), Iu = { parse: Mr(y2), formatAST: Mr(N2), formatDoc: Mr(C2), printToDoc: Mr(T2), printDocToString: Mr(w2) }, Th = eu;
    }), H2 = pr((e, t) => {
      (function(n) {
        function r() {
          var a = n();
          return a.default || a;
        }
        if (typeof e == "object" && typeof t == "object") t.exports = r();
        else {
          var i = typeof globalThis < "u" ? globalThis : typeof b0 < "u" ? b0 : typeof self < "u" ? self : this || {};
          i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.graphql = r();
        }
      })(function() {
        var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, s = (h, E) => {
          for (var D in E) n(h, D, { get: E[D], enumerable: !0 });
        }, o = (h, E, D, A) => {
          if (E && typeof E == "object" || typeof E == "function") for (let N of i(E)) !a.call(h, N) && N !== D && n(h, N, { get: () => E[N], enumerable: !(A = r(E, N)) || A.enumerable });
          return h;
        }, u = (h) => o(n({}, "__esModule", { value: !0 }), h), l = {};
        s(l, { languages: () => XC, options: () => ZC, parsers: () => l0, printers: () => PT });
        var c = (h, E, D, A) => {
          if (!(h && E == null)) return E.replaceAll ? E.replaceAll(D, A) : D.global ? E.replace(D, A) : E.split(D).join(A);
        }, f = c, p = "indent", m = "group", g = "if-break", _ = "line", w = "break-parent", S = () => {
        }, F = S;
        function C(h) {
          return { type: p, contents: h };
        }
        function x(h, E = {}) {
          return F(E.expandedStates), { type: m, id: E.id, contents: h, break: !!E.shouldBreak, expandedStates: E.expandedStates };
        }
        function U(h, E = "", D = {}) {
          return { type: g, breakContents: h, flatContents: E, groupId: D.groupId };
        }
        var H = { type: w }, O = { type: _, hard: !0 }, B = { type: _ }, L = { type: _, soft: !0 }, j = [O, H];
        function $(h, E) {
          let D = [];
          for (let A = 0; A < E.length; A++) A !== 0 && D.push(h), D.push(E[A]);
          return D;
        }
        function xe(h) {
          return (E, D, A) => {
            let N = !!(A != null && A.backwards);
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
        var Q = xe(" 	"), G = xe(",; 	"), Z = xe(/[^\n\r]/u);
        function ne(h, E, D) {
          let A = !!(D != null && D.backwards);
          if (E === !1) return !1;
          let N = h.charAt(E);
          if (A) {
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
          let A = Q(h, D.backwards ? E - 1 : E, D), N = oe(h, A, D);
          return A !== N;
        }
        var ce = de;
        function Ie(h, E) {
          if (E === !1) return !1;
          if (h.charAt(E) === "/" && h.charAt(E + 1) === "*") {
            for (let D = E + 2; D < h.length; ++D) if (h.charAt(D) === "*" && h.charAt(D + 1) === "/") return D + 2;
          }
          return E;
        }
        var ke = Ie;
        function y(h, E) {
          return E === !1 ? !1 : h.charAt(E) === "/" && h.charAt(E + 1) === "/" ? Z(h, E) : E;
        }
        var ee = y;
        function X(h, E) {
          let D = null, A = E;
          for (; A !== D; ) D = A, A = G(h, A), A = ke(h, A), A = Q(h, A);
          return A = ee(h, A), A = oe(h, A), A !== !1 && ce(h, A);
        }
        var re = X;
        function M(h) {
          return Array.isArray(h) && h.length > 0;
        }
        var P = M, ue = class extends Error {
          name = "UnexpectedNodeError";
          constructor(h, E, D = "type") {
            super(`Unexpected ${E} node ${D}: ${JSON.stringify(h[D])}.`), this.node = h;
          }
        }, _e = ue, Xe = null;
        function Ct(h) {
          if (Xe !== null && typeof Xe.property) {
            let E = Xe;
            return Xe = Ct.prototype = null, E;
          }
          return Xe = Ct.prototype = h ?? /* @__PURE__ */ Object.create(null), new Ct();
        }
        var Se = 10;
        for (let h = 0; h <= Se; h++) Ct();
        function Je(h) {
          return Ct(h);
        }
        function ci(h, E = "type") {
          Je(h);
          function D(A) {
            let N = A[E], V = h[N];
            if (!Array.isArray(V)) throw Object.assign(new Error(`Missing visitor keys for '${N}'.`), { node: A });
            return V;
          }
          return D;
        }
        var an = ci, Ft = class {
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
          constructor(h, E, D, A, N, V) {
            this.kind = h, this.start = E, this.end = D, this.line = A, this.column = N, this.value = V, this.prev = null, this.next = null;
          }
          get [Symbol.toStringTag]() {
            return "Token";
          }
          toJSON() {
            return { kind: this.kind, value: this.value, line: this.line, column: this.column };
          }
        }, at = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] };
        new Set(Object.keys(at));
        var jn;
        (function(h) {
          h.QUERY = "query", h.MUTATION = "mutation", h.SUBSCRIPTION = "subscription";
        })(jn || (jn = {}));
        var ae = an(at, "kind"), Be = ae;
        function te(h) {
          return h.loc.start;
        }
        function Le(h) {
          return h.loc.end;
        }
        function ft(h) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(h);
        }
        function It(h) {
          return `# @format

` + h;
        }
        function st(h, E, D) {
          let { node: A } = h;
          if (!A.description) return "";
          let N = [D("description")];
          return A.kind === "InputValueDefinition" && !A.description.block ? N.push(B) : N.push(j), N;
        }
        var sn = st;
        function ea(h, E, D) {
          let { node: A } = h;
          switch (A.kind) {
            case "Document":
              return [...$(j, qn(h, E, D, "definitions")), j];
            case "OperationDefinition": {
              let N = E.originalText[te(A)] !== "{", V = !!A.name;
              return [N ? A.operation : "", N && V ? [" ", D("name")] : "", N && !V && P(A.variableDefinitions) ? " " : "", o0(h, D), Vt(h, D, A), !N && !V ? "" : " ", D("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", D("name"), o0(h, D), " on ", D("typeCondition"), Vt(h, D, A), " ", D("selectionSet")];
            case "SelectionSet":
              return ["{", C([j, $(j, qn(h, E, D, "selections"))]), j, "}"];
            case "Field":
              return x([A.alias ? [D("alias"), ": "] : "", D("name"), A.arguments.length > 0 ? x(["(", C([L, $([U("", ", "), L], qn(h, E, D, "arguments"))]), L, ")"]) : "", Vt(h, D, A), A.selectionSet ? " " : "", D("selectionSet")]);
            case "Name":
              return A.value;
            case "StringValue":
              if (A.block) {
                let N = f(!1, A.value, '"""', String.raw`\"""`).split(`
`);
                return N.length === 1 && (N[0] = N[0].trim()), N.every((V) => V === "") && (N.length = 0), $(j, ['"""', ...N, '"""']);
              }
              return ['"', f(!1, f(!1, A.value, /["\\]/gu, String.raw`\$&`), `
`, String.raw`\n`), '"'];
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return A.value;
            case "BooleanValue":
              return A.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", D("name")];
            case "ListValue":
              return x(["[", C([L, $([U("", ", "), L], h.map(D, "values"))]), L, "]"]);
            case "ObjectValue": {
              let N = E.bracketSpacing && A.fields.length > 0 ? " " : "";
              return x(["{", N, C([L, $([U("", ", "), L], h.map(D, "fields"))]), L, U("", N), "}"]);
            }
            case "ObjectField":
            case "Argument":
              return [D("name"), ": ", D("value")];
            case "Directive":
              return ["@", D("name"), A.arguments.length > 0 ? x(["(", C([L, $([U("", ", "), L], qn(h, E, D, "arguments"))]), L, ")"]) : ""];
            case "NamedType":
              return D("name");
            case "VariableDefinition":
              return [D("variable"), ": ", D("type"), A.defaultValue ? [" = ", D("defaultValue")] : "", Vt(h, D, A)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition": {
              let { kind: N } = A, V = [];
              return N.endsWith("TypeDefinition") ? V.push(sn(h, E, D)) : V.push("extend "), N.startsWith("ObjectType") ? V.push("type") : N.startsWith("InputObjectType") ? V.push("input") : V.push("interface"), V.push(" ", D("name")), !N.startsWith("InputObjectType") && A.interfaces.length > 0 && V.push(" implements ", ...HC(h, E, D)), V.push(Vt(h, D, A)), A.fields.length > 0 && V.push([" {", C([j, $(j, qn(h, E, D, "fields"))]), j, "}"]), V;
            }
            case "FieldDefinition":
              return [sn(h, E, D), D("name"), A.arguments.length > 0 ? x(["(", C([L, $([U("", ", "), L], qn(h, E, D, "arguments"))]), L, ")"]) : "", ": ", D("type"), Vt(h, D, A)];
            case "DirectiveDefinition":
              return [sn(h, E, D), "directive ", "@", D("name"), A.arguments.length > 0 ? x(["(", C([L, $([U("", ", "), L], qn(h, E, D, "arguments"))]), L, ")"]) : "", A.repeatable ? " repeatable" : "", " on ", ...$(" | ", h.map(D, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [sn(h, E, D), A.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), Vt(h, D, A), A.values.length > 0 ? [" {", C([j, $(j, qn(h, E, D, "values"))]), j, "}"] : ""];
            case "EnumValueDefinition":
              return [sn(h, E, D), D("name"), Vt(h, D, A)];
            case "InputValueDefinition":
              return [sn(h, E, D), D("name"), ": ", D("type"), A.defaultValue ? [" = ", D("defaultValue")] : "", Vt(h, D, A)];
            case "SchemaExtension":
              return ["extend schema", Vt(h, D, A), ...A.operationTypes.length > 0 ? [" {", C([j, $(j, qn(h, E, D, "operationTypes"))]), j, "}"] : []];
            case "SchemaDefinition":
              return [sn(h, E, D), "schema", Vt(h, D, A), " {", A.operationTypes.length > 0 ? C([j, $(j, qn(h, E, D, "operationTypes"))]) : "", j, "}"];
            case "OperationTypeDefinition":
              return [A.operation, ": ", D("type")];
            case "FragmentSpread":
              return ["...", D("name"), Vt(h, D, A)];
            case "InlineFragment":
              return ["...", A.typeCondition ? [" on ", D("typeCondition")] : "", Vt(h, D, A), " ", D("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return x([sn(h, E, D), x([A.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), Vt(h, D, A), A.types.length > 0 ? [" =", U("", " "), C([U([B, "| "]), $([B, "| "], h.map(D, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [sn(h, E, D), A.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), Vt(h, D, A)];
            case "NonNullType":
              return [D("type"), "!"];
            case "ListType":
              return ["[", D("type"), "]"];
            default:
              throw new _e(A, "Graphql", "kind");
          }
        }
        function Vt(h, E, D) {
          if (D.directives.length === 0) return "";
          let A = $(B, h.map(E, "directives"));
          return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? x([B, A]) : [" ", x(C([L, A]))];
        }
        function qn(h, E, D, A) {
          return h.map(({ isLast: N, node: V }) => {
            let ge = D();
            return !N && re(E.originalText, Le(V)) ? [ge, j] : ge;
          }, A);
        }
        function qC(h) {
          return h.kind !== "Comment";
        }
        function GC(h) {
          let E = h.node;
          if (E.kind === "Comment") return "#" + E.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(E));
        }
        function HC(h, E, D) {
          let { node: A } = h, N = [], { interfaces: V } = A, ge = h.map(D, "interfaces");
          for (let Pe = 0; Pe < V.length; Pe++) {
            let et = V[Pe];
            N.push(ge[Pe]);
            let zt = V[Pe + 1];
            if (zt) {
              let Xt = E.originalText.slice(et.loc.end, zt.loc.start).includes("#");
              N.push(" &", Xt ? B : " ");
            }
          }
          return N;
        }
        function o0(h, E) {
          let { node: D } = h;
          return P(D.variableDefinitions) ? x(["(", C([L, $([U("", ", "), L], h.map(E, "variableDefinitions"))]), L, ")"]) : "";
        }
        function u0(h, E) {
          h.kind === "StringValue" && h.block && !h.value.includes(`
`) && (E.value = h.value.trim());
        }
        u0.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function WC(h) {
          var E;
          let { node: D } = h;
          return (E = D?.comments) == null ? void 0 : E.some((A) => A.value.trim() === "prettier-ignore");
        }
        var YC = { print: ea, massageAstNode: u0, hasPrettierIgnore: WC, insertPragma: It, printComment: GC, canAttachComment: qC, getVisitorKeys: Be }, zC = YC, XC = [{ linguistLanguageId: 139, name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }], JC = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." } }, QC = { bracketSpacing: JC.bracketSpacing }, ZC = QC, l0 = {};
        s(l0, { graphql: () => UT });
        function eT(h) {
          return typeof h == "object" && h !== null;
        }
        function tT(h, E) {
          throw new Error("Unexpected invariant triggered.");
        }
        var nT = /\r\n|[\n\r]/g;
        function pc(h, E) {
          let D = 0, A = 1;
          for (let N of h.body.matchAll(nT)) {
            if (typeof N.index == "number" || tT(), N.index >= E) break;
            D = N.index + N[0].length, A += 1;
          }
          return { line: A, column: E + 1 - D };
        }
        function rT(h) {
          return c0(h.source, pc(h.source, h.start));
        }
        function c0(h, E) {
          let D = h.locationOffset.column - 1, A = "".padStart(D) + h.body, N = E.line - 1, V = h.locationOffset.line - 1, ge = E.line + V, Pe = E.line === 1 ? D : 0, et = E.column + Pe, zt = `${h.name}:${ge}:${et}
`, Xt = A.split(/\r\n|[\n\r]/g), na = Xt[N];
          if (na.length > 120) {
            let hi = Math.floor(et / 80), _c = et % 80, $t = [];
            for (let ra = 0; ra < na.length; ra += 80) $t.push(na.slice(ra, ra + 80));
            return zt + d0([[`${ge} |`, $t[0]], ...$t.slice(1, hi + 1).map((ra) => ["|", ra]), ["|", "^".padStart(_c)], ["|", $t[hi + 1]]]);
          }
          return zt + d0([[`${ge - 1} |`, Xt[N - 1]], [`${ge} |`, na], ["|", "^".padStart(et)], [`${ge + 1} |`, Xt[N + 1]]]);
        }
        function d0(h) {
          let E = h.filter(([A, N]) => N !== void 0), D = Math.max(...E.map(([A]) => A.length));
          return E.map(([A, N]) => A.padStart(D) + (N ? " " + N : "")).join(`
`);
        }
        function iT(h) {
          let E = h[0];
          return E == null || "kind" in E || "length" in E ? { nodes: E, source: h[1], positions: h[2], path: h[3], originalError: h[4], extensions: h[5] } : E;
        }
        var aT = class C0 extends Error {
          constructor(E, ...D) {
            var A, N, V;
            let { nodes: ge, source: Pe, positions: et, path: zt, originalError: Xt, extensions: na } = iT(D);
            super(E), this.name = "GraphQLError", this.path = zt ?? void 0, this.originalError = Xt ?? void 0, this.nodes = h0(Array.isArray(ge) ? ge : ge ? [ge] : void 0);
            let hi = h0((A = this.nodes) === null || A === void 0 ? void 0 : A.map(($t) => $t.loc).filter(($t) => $t != null));
            this.source = Pe ?? (hi == null || (N = hi[0]) === null || N === void 0 ? void 0 : N.source), this.positions = et ?? hi?.map(($t) => $t.start), this.locations = et && Pe ? et.map(($t) => pc(Pe, $t)) : hi?.map(($t) => pc($t.source, $t.start));
            let _c = eT(Xt?.extensions) ? Xt?.extensions : void 0;
            this.extensions = (V = na ?? _c) !== null && V !== void 0 ? V : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), Xt != null && Xt.stack ? Object.defineProperty(this, "stack", { value: Xt.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, C0) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
          }
          get [Symbol.toStringTag]() {
            return "GraphQLError";
          }
          toString() {
            let E = this.message;
            if (this.nodes) for (let D of this.nodes) D.loc && (E += `

` + rT(D.loc));
            else if (this.source && this.locations) for (let D of this.locations) E += `

` + c0(this.source, D);
            return E;
          }
          toJSON() {
            let E = { message: this.message };
            return this.locations != null && (E.locations = this.locations), this.path != null && (E.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (E.extensions = this.extensions), E;
          }
        };
        function h0(h) {
          return h === void 0 || h.length === 0 ? void 0 : h;
        }
        function Tt(h, E, D) {
          return new aT(`Syntax Error: ${D}`, { source: h, positions: [E] });
        }
        var mc;
        (function(h) {
          h.QUERY = "QUERY", h.MUTATION = "MUTATION", h.SUBSCRIPTION = "SUBSCRIPTION", h.FIELD = "FIELD", h.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", h.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", h.INLINE_FRAGMENT = "INLINE_FRAGMENT", h.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", h.SCHEMA = "SCHEMA", h.SCALAR = "SCALAR", h.OBJECT = "OBJECT", h.FIELD_DEFINITION = "FIELD_DEFINITION", h.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", h.INTERFACE = "INTERFACE", h.UNION = "UNION", h.ENUM = "ENUM", h.ENUM_VALUE = "ENUM_VALUE", h.INPUT_OBJECT = "INPUT_OBJECT", h.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
        })(mc || (mc = {}));
        var ve;
        (function(h) {
          h.NAME = "Name", h.DOCUMENT = "Document", h.OPERATION_DEFINITION = "OperationDefinition", h.VARIABLE_DEFINITION = "VariableDefinition", h.SELECTION_SET = "SelectionSet", h.FIELD = "Field", h.ARGUMENT = "Argument", h.FRAGMENT_SPREAD = "FragmentSpread", h.INLINE_FRAGMENT = "InlineFragment", h.FRAGMENT_DEFINITION = "FragmentDefinition", h.VARIABLE = "Variable", h.INT = "IntValue", h.FLOAT = "FloatValue", h.STRING = "StringValue", h.BOOLEAN = "BooleanValue", h.NULL = "NullValue", h.ENUM = "EnumValue", h.LIST = "ListValue", h.OBJECT = "ObjectValue", h.OBJECT_FIELD = "ObjectField", h.DIRECTIVE = "Directive", h.NAMED_TYPE = "NamedType", h.LIST_TYPE = "ListType", h.NON_NULL_TYPE = "NonNullType", h.SCHEMA_DEFINITION = "SchemaDefinition", h.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", h.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", h.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", h.FIELD_DEFINITION = "FieldDefinition", h.INPUT_VALUE_DEFINITION = "InputValueDefinition", h.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", h.UNION_TYPE_DEFINITION = "UnionTypeDefinition", h.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", h.ENUM_VALUE_DEFINITION = "EnumValueDefinition", h.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", h.DIRECTIVE_DEFINITION = "DirectiveDefinition", h.SCHEMA_EXTENSION = "SchemaExtension", h.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", h.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", h.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", h.UNION_TYPE_EXTENSION = "UnionTypeExtension", h.ENUM_TYPE_EXTENSION = "EnumTypeExtension", h.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
        })(ve || (ve = {}));
        function sT(h) {
          return h === 9 || h === 32;
        }
        function za(h) {
          return h >= 48 && h <= 57;
        }
        function f0(h) {
          return h >= 97 && h <= 122 || h >= 65 && h <= 90;
        }
        function p0(h) {
          return f0(h) || h === 95;
        }
        function oT(h) {
          return f0(h) || za(h) || h === 95;
        }
        function uT(h) {
          var E;
          let D = Number.MAX_SAFE_INTEGER, A = null, N = -1;
          for (let ge = 0; ge < h.length; ++ge) {
            var V;
            let Pe = h[ge], et = lT(Pe);
            et !== Pe.length && (A = (V = A) !== null && V !== void 0 ? V : ge, N = ge, ge !== 0 && et < D && (D = et));
          }
          return h.map((ge, Pe) => Pe === 0 ? ge : ge.slice(D)).slice((E = A) !== null && E !== void 0 ? E : 0, N + 1);
        }
        function lT(h) {
          let E = 0;
          for (; E < h.length && sT(h.charCodeAt(E)); ) ++E;
          return E;
        }
        var W;
        (function(h) {
          h.SOF = "<SOF>", h.EOF = "<EOF>", h.BANG = "!", h.DOLLAR = "$", h.AMP = "&", h.PAREN_L = "(", h.PAREN_R = ")", h.SPREAD = "...", h.COLON = ":", h.EQUALS = "=", h.AT = "@", h.BRACKET_L = "[", h.BRACKET_R = "]", h.BRACE_L = "{", h.PIPE = "|", h.BRACE_R = "}", h.NAME = "Name", h.INT = "Int", h.FLOAT = "Float", h.STRING = "String", h.BLOCK_STRING = "BlockString", h.COMMENT = "Comment";
        })(W || (W = {}));
        var cT = class {
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
                let E = hT(this, h.end);
                h.next = E, E.prev = h, h = E;
              }
            while (h.kind === W.COMMENT);
            return h;
          }
        };
        function dT(h) {
          return h === W.BANG || h === W.DOLLAR || h === W.AMP || h === W.PAREN_L || h === W.PAREN_R || h === W.SPREAD || h === W.COLON || h === W.EQUALS || h === W.AT || h === W.BRACKET_L || h === W.BRACKET_R || h === W.BRACE_L || h === W.PIPE || h === W.BRACE_R;
        }
        function ta(h) {
          return h >= 0 && h <= 55295 || h >= 57344 && h <= 1114111;
        }
        function So(h, E) {
          return m0(h.charCodeAt(E)) && g0(h.charCodeAt(E + 1));
        }
        function m0(h) {
          return h >= 55296 && h <= 56319;
        }
        function g0(h) {
          return h >= 56320 && h <= 57343;
        }
        function di(h, E) {
          let D = h.source.body.codePointAt(E);
          if (D === void 0) return W.EOF;
          if (D >= 32 && D <= 126) {
            let A = String.fromCodePoint(D);
            return A === '"' ? `'"'` : `"${A}"`;
          }
          return "U+" + D.toString(16).toUpperCase().padStart(4, "0");
        }
        function pt(h, E, D, A, N) {
          let V = h.line, ge = 1 + D - h.lineStart;
          return new De(E, D, A, V, ge, N);
        }
        function hT(h, E) {
          let D = h.source.body, A = D.length, N = E;
          for (; N < A; ) {
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
                return fT(h, N);
              case 33:
                return pt(h, W.BANG, N, N + 1);
              case 36:
                return pt(h, W.DOLLAR, N, N + 1);
              case 38:
                return pt(h, W.AMP, N, N + 1);
              case 40:
                return pt(h, W.PAREN_L, N, N + 1);
              case 41:
                return pt(h, W.PAREN_R, N, N + 1);
              case 46:
                if (D.charCodeAt(N + 1) === 46 && D.charCodeAt(N + 2) === 46) return pt(h, W.SPREAD, N, N + 3);
                break;
              case 58:
                return pt(h, W.COLON, N, N + 1);
              case 61:
                return pt(h, W.EQUALS, N, N + 1);
              case 64:
                return pt(h, W.AT, N, N + 1);
              case 91:
                return pt(h, W.BRACKET_L, N, N + 1);
              case 93:
                return pt(h, W.BRACKET_R, N, N + 1);
              case 123:
                return pt(h, W.BRACE_L, N, N + 1);
              case 124:
                return pt(h, W.PIPE, N, N + 1);
              case 125:
                return pt(h, W.BRACE_R, N, N + 1);
              case 34:
                return D.charCodeAt(N + 1) === 34 && D.charCodeAt(N + 2) === 34 ? DT(h, N) : mT(h, N);
            }
            if (za(V) || V === 45) return pT(h, N, V);
            if (p0(V)) return vT(h, N);
            throw Tt(h.source, N, V === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ta(V) || So(D, N) ? `Unexpected character: ${di(h, N)}.` : `Invalid character: ${di(h, N)}.`);
          }
          return pt(h, W.EOF, A, A);
        }
        function fT(h, E) {
          let D = h.source.body, A = D.length, N = E + 1;
          for (; N < A; ) {
            let V = D.charCodeAt(N);
            if (V === 10 || V === 13) break;
            if (ta(V)) ++N;
            else if (So(D, N)) N += 2;
            else break;
          }
          return pt(h, W.COMMENT, E, N, D.slice(E + 1, N));
        }
        function pT(h, E, D) {
          let A = h.source.body, N = E, V = D, ge = !1;
          if (V === 45 && (V = A.charCodeAt(++N)), V === 48) {
            if (V = A.charCodeAt(++N), za(V)) throw Tt(h.source, N, `Invalid number, unexpected digit after 0: ${di(h, N)}.`);
          } else N = gc(h, N, V), V = A.charCodeAt(N);
          if (V === 46 && (ge = !0, V = A.charCodeAt(++N), N = gc(h, N, V), V = A.charCodeAt(N)), (V === 69 || V === 101) && (ge = !0, V = A.charCodeAt(++N), (V === 43 || V === 45) && (V = A.charCodeAt(++N)), N = gc(h, N, V), V = A.charCodeAt(N)), V === 46 || p0(V)) throw Tt(h.source, N, `Invalid number, expected digit but got: ${di(h, N)}.`);
          return pt(h, ge ? W.FLOAT : W.INT, E, N, A.slice(E, N));
        }
        function gc(h, E, D) {
          if (!za(D)) throw Tt(h.source, E, `Invalid number, expected digit but got: ${di(h, E)}.`);
          let A = h.source.body, N = E + 1;
          for (; za(A.charCodeAt(N)); ) ++N;
          return N;
        }
        function mT(h, E) {
          let D = h.source.body, A = D.length, N = E + 1, V = N, ge = "";
          for (; N < A; ) {
            let Pe = D.charCodeAt(N);
            if (Pe === 34) return ge += D.slice(V, N), pt(h, W.STRING, E, N + 1, ge);
            if (Pe === 92) {
              ge += D.slice(V, N);
              let et = D.charCodeAt(N + 1) === 117 ? D.charCodeAt(N + 2) === 123 ? gT(h, N) : ET(h, N) : _T(h, N);
              ge += et.value, N += et.size, V = N;
              continue;
            }
            if (Pe === 10 || Pe === 13) break;
            if (ta(Pe)) ++N;
            else if (So(D, N)) N += 2;
            else throw Tt(h.source, N, `Invalid character within String: ${di(h, N)}.`);
          }
          throw Tt(h.source, N, "Unterminated string.");
        }
        function gT(h, E) {
          let D = h.source.body, A = 0, N = 3;
          for (; N < 12; ) {
            let V = D.charCodeAt(E + N++);
            if (V === 125) {
              if (N < 5 || !ta(A)) break;
              return { value: String.fromCodePoint(A), size: N };
            }
            if (A = A << 4 | Xa(V), A < 0) break;
          }
          throw Tt(h.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + N)}".`);
        }
        function ET(h, E) {
          let D = h.source.body, A = E0(D, E + 2);
          if (ta(A)) return { value: String.fromCodePoint(A), size: 6 };
          if (m0(A) && D.charCodeAt(E + 6) === 92 && D.charCodeAt(E + 7) === 117) {
            let N = E0(D, E + 8);
            if (g0(N)) return { value: String.fromCodePoint(A, N), size: 12 };
          }
          throw Tt(h.source, E, `Invalid Unicode escape sequence: "${D.slice(E, E + 6)}".`);
        }
        function E0(h, E) {
          return Xa(h.charCodeAt(E)) << 12 | Xa(h.charCodeAt(E + 1)) << 8 | Xa(h.charCodeAt(E + 2)) << 4 | Xa(h.charCodeAt(E + 3));
        }
        function Xa(h) {
          return h >= 48 && h <= 57 ? h - 48 : h >= 65 && h <= 70 ? h - 55 : h >= 97 && h <= 102 ? h - 87 : -1;
        }
        function _T(h, E) {
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
          throw Tt(h.source, E, `Invalid character escape sequence: "${D.slice(E, E + 2)}".`);
        }
        function DT(h, E) {
          let D = h.source.body, A = D.length, N = h.lineStart, V = E + 3, ge = V, Pe = "", et = [];
          for (; V < A; ) {
            let zt = D.charCodeAt(V);
            if (zt === 34 && D.charCodeAt(V + 1) === 34 && D.charCodeAt(V + 2) === 34) {
              Pe += D.slice(ge, V), et.push(Pe);
              let Xt = pt(h, W.BLOCK_STRING, E, V + 3, uT(et).join(`
`));
              return h.line += et.length - 1, h.lineStart = N, Xt;
            }
            if (zt === 92 && D.charCodeAt(V + 1) === 34 && D.charCodeAt(V + 2) === 34 && D.charCodeAt(V + 3) === 34) {
              Pe += D.slice(ge, V), ge = V + 1, V += 4;
              continue;
            }
            if (zt === 10 || zt === 13) {
              Pe += D.slice(ge, V), et.push(Pe), zt === 13 && D.charCodeAt(V + 1) === 10 ? V += 2 : ++V, Pe = "", ge = V, N = V;
              continue;
            }
            if (ta(zt)) ++V;
            else if (So(D, V)) V += 2;
            else throw Tt(h.source, V, `Invalid character within String: ${di(h, V)}.`);
          }
          throw Tt(h.source, V, "Unterminated string.");
        }
        function vT(h, E) {
          let D = h.source.body, A = D.length, N = E + 1;
          for (; N < A; ) {
            let V = D.charCodeAt(N);
            if (oT(V)) ++N;
            else break;
          }
          return pt(h, W.NAME, E, N, D.slice(E, N));
        }
        function Ec(h, E) {
          throw new Error(E);
        }
        function _0(h) {
          return Lo(h, []);
        }
        function Lo(h, E) {
          switch (typeof h) {
            case "string":
              return JSON.stringify(h);
            case "function":
              return h.name ? `[function ${h.name}]` : "[function]";
            case "object":
              return bT(h, E);
            default:
              return String(h);
          }
        }
        function bT(h, E) {
          if (h === null) return "null";
          if (E.includes(h)) return "[Circular]";
          let D = [...E, h];
          if (yT(h)) {
            let A = h.toJSON();
            if (A !== h) return typeof A == "string" ? A : Lo(A, D);
          } else if (Array.isArray(h)) return CT(h, D);
          return NT(h, D);
        }
        function yT(h) {
          return typeof h.toJSON == "function";
        }
        function NT(h, E) {
          let D = Object.entries(h);
          return D.length === 0 ? "{}" : E.length > 2 ? "[" + TT(h) + "]" : "{ " + D.map(([A, N]) => A + ": " + Lo(N, E)).join(", ") + " }";
        }
        function CT(h, E) {
          if (h.length === 0) return "[]";
          if (E.length > 2) return "[Array]";
          let D = Math.min(10, h.length), A = h.length - D, N = [];
          for (let V = 0; V < D; ++V) N.push(Lo(h[V], E));
          return A === 1 ? N.push("... 1 more item") : A > 1 && N.push(`... ${A} more items`), "[" + N.join(", ") + "]";
        }
        function TT(h) {
          let E = Object.prototype.toString.call(h).replace(/^\[object /, "").replace(/]$/, "");
          if (E === "Object" && typeof h.constructor == "function") {
            let D = h.constructor.name;
            if (typeof D == "string" && D !== "") return D;
          }
          return E;
        }
        var wT = globalThis.process && !0, AT = wT ? function(h, E) {
          return h instanceof E;
        } : function(h, E) {
          if (h instanceof E) return !0;
          if (typeof h == "object" && h !== null) {
            var D;
            let A = E.prototype[Symbol.toStringTag], N = Symbol.toStringTag in h ? h[Symbol.toStringTag] : (D = h.constructor) === null || D === void 0 ? void 0 : D.name;
            if (A === N) {
              let V = _0(h);
              throw new Error(`Cannot use ${A} "${V}" from another module or realm.

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
        }, D0 = class {
          constructor(h, E = "GraphQL request", D = { line: 1, column: 1 }) {
            typeof h == "string" || Ec(!1, `Body must be a string. Received: ${_0(h)}.`), this.body = h, this.name = E, this.locationOffset = D, this.locationOffset.line > 0 || Ec(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Ec(!1, "column in locationOffset is 1-indexed and must be positive.");
          }
          get [Symbol.toStringTag]() {
            return "Source";
          }
        };
        function ST(h) {
          return AT(h, D0);
        }
        function LT(h, E) {
          let D = new FT(h, E), A = D.parseDocument();
          return Object.defineProperty(A, "tokenCount", { enumerable: !1, value: D.tokenCount }), A;
        }
        var FT = class {
          constructor(h, E = {}) {
            let D = ST(h) ? h : new D0(h);
            this._lexer = new cT(D), this._options = E, this._tokenCounter = 0;
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
              if (h) throw Tt(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
            if (this.peek(W.BRACE_L)) return this.node(h, { kind: ve.OPERATION_DEFINITION, operation: jn.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
            let E = this.parseOperationType(), D;
            return this.peek(W.NAME) && (D = this.parseName()), this.node(h, { kind: ve.OPERATION_DEFINITION, operation: E, name: D, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
          }
          parseOperationType() {
            let h = this.expectToken(W.NAME);
            switch (h.value) {
              case "query":
                return jn.QUERY;
              case "mutation":
                return jn.MUTATION;
              case "subscription":
                return jn.SUBSCRIPTION;
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
            let h = this._lexer.token, E = this.parseName(), D, A;
            return this.expectOptionalToken(W.COLON) ? (D = E, A = this.parseName()) : A = E, this.node(h, { kind: ve.FIELD, alias: D, name: A, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(W.BRACE_L) ? this.parseSelectionSet() : void 0 });
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
                  throw Tt(this._lexer.source, E.start, `Unexpected variable "$${D}" in constant value.`);
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
            let D = this.parseConstDirectives(), A = this.many(W.BRACE_L, this.parseOperationTypeDefinition, W.BRACE_R);
            return this.node(h, { kind: ve.SCHEMA_DEFINITION, description: E, directives: D, operationTypes: A });
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
            let D = this.parseName(), A = this.parseConstDirectives();
            return this.node(h, { kind: ve.SCALAR_TYPE_DEFINITION, description: E, name: D, directives: A });
          }
          parseObjectTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("type");
            let D = this.parseName(), A = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), V = this.parseFieldsDefinition();
            return this.node(h, { kind: ve.OBJECT_TYPE_DEFINITION, description: E, name: D, interfaces: A, directives: N, fields: V });
          }
          parseImplementsInterfaces() {
            return this.expectOptionalKeyword("implements") ? this.delimitedMany(W.AMP, this.parseNamedType) : [];
          }
          parseFieldsDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseFieldDefinition, W.BRACE_R);
          }
          parseFieldDefinition() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseName(), A = this.parseArgumentDefs();
            this.expectToken(W.COLON);
            let N = this.parseTypeReference(), V = this.parseConstDirectives();
            return this.node(h, { kind: ve.FIELD_DEFINITION, description: E, name: D, arguments: A, type: N, directives: V });
          }
          parseArgumentDefs() {
            return this.optionalMany(W.PAREN_L, this.parseInputValueDef, W.PAREN_R);
          }
          parseInputValueDef() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseName();
            this.expectToken(W.COLON);
            let A = this.parseTypeReference(), N;
            this.expectOptionalToken(W.EQUALS) && (N = this.parseConstValueLiteral());
            let V = this.parseConstDirectives();
            return this.node(h, { kind: ve.INPUT_VALUE_DEFINITION, description: E, name: D, type: A, defaultValue: N, directives: V });
          }
          parseInterfaceTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("interface");
            let D = this.parseName(), A = this.parseImplementsInterfaces(), N = this.parseConstDirectives(), V = this.parseFieldsDefinition();
            return this.node(h, { kind: ve.INTERFACE_TYPE_DEFINITION, description: E, name: D, interfaces: A, directives: N, fields: V });
          }
          parseUnionTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("union");
            let D = this.parseName(), A = this.parseConstDirectives(), N = this.parseUnionMemberTypes();
            return this.node(h, { kind: ve.UNION_TYPE_DEFINITION, description: E, name: D, directives: A, types: N });
          }
          parseUnionMemberTypes() {
            return this.expectOptionalToken(W.EQUALS) ? this.delimitedMany(W.PIPE, this.parseNamedType) : [];
          }
          parseEnumTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("enum");
            let D = this.parseName(), A = this.parseConstDirectives(), N = this.parseEnumValuesDefinition();
            return this.node(h, { kind: ve.ENUM_TYPE_DEFINITION, description: E, name: D, directives: A, values: N });
          }
          parseEnumValuesDefinition() {
            return this.optionalMany(W.BRACE_L, this.parseEnumValueDefinition, W.BRACE_R);
          }
          parseEnumValueDefinition() {
            let h = this._lexer.token, E = this.parseDescription(), D = this.parseEnumValueName(), A = this.parseConstDirectives();
            return this.node(h, { kind: ve.ENUM_VALUE_DEFINITION, description: E, name: D, directives: A });
          }
          parseEnumValueName() {
            if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw Tt(this._lexer.source, this._lexer.token.start, `${Fo(this._lexer.token)} is reserved and cannot be used for an enum value.`);
            return this.parseName();
          }
          parseInputObjectTypeDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("input");
            let D = this.parseName(), A = this.parseConstDirectives(), N = this.parseInputFieldsDefinition();
            return this.node(h, { kind: ve.INPUT_OBJECT_TYPE_DEFINITION, description: E, name: D, directives: A, fields: N });
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
            let E = this.parseName(), D = this.parseImplementsInterfaces(), A = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && A.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.OBJECT_TYPE_EXTENSION, name: E, interfaces: D, directives: A, fields: N });
          }
          parseInterfaceTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("interface");
            let E = this.parseName(), D = this.parseImplementsInterfaces(), A = this.parseConstDirectives(), N = this.parseFieldsDefinition();
            if (D.length === 0 && A.length === 0 && N.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.INTERFACE_TYPE_EXTENSION, name: E, interfaces: D, directives: A, fields: N });
          }
          parseUnionTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("union");
            let E = this.parseName(), D = this.parseConstDirectives(), A = this.parseUnionMemberTypes();
            if (D.length === 0 && A.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.UNION_TYPE_EXTENSION, name: E, directives: D, types: A });
          }
          parseEnumTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("enum");
            let E = this.parseName(), D = this.parseConstDirectives(), A = this.parseEnumValuesDefinition();
            if (D.length === 0 && A.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.ENUM_TYPE_EXTENSION, name: E, directives: D, values: A });
          }
          parseInputObjectTypeExtension() {
            let h = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("input");
            let E = this.parseName(), D = this.parseConstDirectives(), A = this.parseInputFieldsDefinition();
            if (D.length === 0 && A.length === 0) throw this.unexpected();
            return this.node(h, { kind: ve.INPUT_OBJECT_TYPE_EXTENSION, name: E, directives: D, fields: A });
          }
          parseDirectiveDefinition() {
            let h = this._lexer.token, E = this.parseDescription();
            this.expectKeyword("directive"), this.expectToken(W.AT);
            let D = this.parseName(), A = this.parseArgumentDefs(), N = this.expectOptionalKeyword("repeatable");
            this.expectKeyword("on");
            let V = this.parseDirectiveLocations();
            return this.node(h, { kind: ve.DIRECTIVE_DEFINITION, description: E, name: D, arguments: A, repeatable: N, locations: V });
          }
          parseDirectiveLocations() {
            return this.delimitedMany(W.PIPE, this.parseDirectiveLocation);
          }
          parseDirectiveLocation() {
            let h = this._lexer.token, E = this.parseName();
            if (Object.prototype.hasOwnProperty.call(mc, E.value)) return E;
            throw this.unexpected(h);
          }
          node(h, E) {
            return this._options.noLocation !== !0 && (E.loc = new Ft(h, this._lexer.lastToken, this._lexer.source)), E;
          }
          peek(h) {
            return this._lexer.token.kind === h;
          }
          expectToken(h) {
            let E = this._lexer.token;
            if (E.kind === h) return this.advanceLexer(), E;
            throw Tt(this._lexer.source, E.start, `Expected ${v0(h)}, found ${Fo(E)}.`);
          }
          expectOptionalToken(h) {
            return this._lexer.token.kind === h ? (this.advanceLexer(), !0) : !1;
          }
          expectKeyword(h) {
            let E = this._lexer.token;
            if (E.kind === W.NAME && E.value === h) this.advanceLexer();
            else throw Tt(this._lexer.source, E.start, `Expected "${h}", found ${Fo(E)}.`);
          }
          expectOptionalKeyword(h) {
            let E = this._lexer.token;
            return E.kind === W.NAME && E.value === h ? (this.advanceLexer(), !0) : !1;
          }
          unexpected(h) {
            let E = h ?? this._lexer.token;
            return Tt(this._lexer.source, E.start, `Unexpected ${Fo(E)}.`);
          }
          any(h, E, D) {
            this.expectToken(h);
            let A = [];
            for (; !this.expectOptionalToken(D); ) A.push(E.call(this));
            return A;
          }
          optionalMany(h, E, D) {
            if (this.expectOptionalToken(h)) {
              let A = [];
              do
                A.push(E.call(this));
              while (!this.expectOptionalToken(D));
              return A;
            }
            return [];
          }
          many(h, E, D) {
            this.expectToken(h);
            let A = [];
            do
              A.push(E.call(this));
            while (!this.expectOptionalToken(D));
            return A;
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
            if (E.kind !== W.EOF && (++this._tokenCounter, h !== void 0 && this._tokenCounter > h)) throw Tt(this._lexer.source, E.start, `Document contains more that ${h} tokens. Parsing aborted.`);
          }
        };
        function Fo(h) {
          let E = h.value;
          return v0(h.kind) + (E != null ? ` "${E}"` : "");
        }
        function v0(h) {
          return dT(h) ? `"${h}"` : h;
        }
        function IT(h, E) {
          let D = new SyntaxError(h + " (" + E.loc.start.line + ":" + E.loc.start.column + ")");
          return Object.assign(D, E);
        }
        var RT = IT;
        function OT(h) {
          let E = [], { startToken: D, endToken: A } = h.loc;
          for (let N = D; N !== A; N = N.next) N.kind === "Comment" && E.push({ ...N, loc: { start: N.start, end: N.end } });
          return E;
        }
        var xT = { allowLegacyFragmentVariables: !0 };
        function kT(h) {
          if (h?.name === "GraphQLError") {
            let { message: E, locations: [D] } = h;
            return RT(E, { loc: { start: D }, cause: h });
          }
          return h;
        }
        function MT(h) {
          let E;
          try {
            E = LT(h, xT);
          } catch (D) {
            throw kT(D);
          }
          return E.comments = OT(E), E;
        }
        var UT = { parse: MT, astFormat: "graphql", hasPragma: ft, locStart: te, locEnd: Le }, PT = { graphql: zC };
        return u(l);
      });
    }), R;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
    })(R || (R = {}));
    var W2 = class {
      constructor() {
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
          setTimeout(() => {
            throw e.stack ? xu.isErrorNoTelemetry(e) ? new xu(e.message + `

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
    }, Y2 = new W2();
    function ba(e) {
      z2(e) || Y2.onUnexpectedError(e);
    }
    function Ru(e) {
      if (e instanceof Error) {
        let { name: t, message: n, cause: r } = e, i = e.stacktrace || e.stack;
        return { $isError: !0, name: t, message: n, stack: i, noTelemetry: xu.isErrorNoTelemetry(e), cause: r ? Ru(r) : void 0, code: e.code };
      }
      return e;
    }
    var Ou = "Canceled";
    function z2(e) {
      return e instanceof X2 ? !0 : e instanceof Error && e.name === Ou && e.message === Ou;
    }
    var X2 = class extends Error {
      constructor() {
        super(Ou), this.name = this.message;
      }
    };
    or = class extends Error {
      static is(t) {
        return t instanceof or || t instanceof Error && t.name === or._name;
      }
      constructor(t) {
        super(t), this.name = or._name;
      }
    }, or._name = "PendingMigrationError";
    var xu = class Dc extends Error {
      constructor(t) {
        super(t), this.name = "CodeExpectedError";
      }
      static fromError(t) {
        if (t instanceof Dc) return t;
        let n = new Dc();
        return n.message = t.message, n.stack = t.stack, n;
      }
      static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
      }
    }, ut = class T0 extends Error {
      constructor(t) {
        super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, T0.prototype);
      }
    };
    function J2(e, t) {
      let n = this, r = !1, i;
      return function() {
        return r || (r = !0, t || (i = e.apply(n, arguments))), i;
      };
    }
    function yi(e, t) {
      let n = Ni(e, t);
      return n === -1 ? void 0 : e[n];
    }
    function Ni(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? i = s + 1 : a = s;
      }
      return i - 1;
    }
    function Q2(e, t) {
      let n = ku(e, t);
      return n === e.length ? void 0 : e[n];
    }
    function ku(e, t, n = 0, r = e.length) {
      let i = n, a = r;
      for (; i < a; ) {
        let s = Math.floor((i + a) / 2);
        t(e[s]) ? a = s : i = s + 1;
      }
      return i;
    }
    var wh = (ai = class {
      constructor(t) {
        this._array = t, this._findLastMonotonousLastIdx = 0;
      }
      findLastMonotonous(t) {
        if (ai.assertInvariants) {
          if (this._prevFindLastPredicate) {
            for (let r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
          this._prevFindLastPredicate = t;
        }
        let n = Ni(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
      }
    }, ai.assertInvariants = !1, ai);
    function Ah(e, t, n = (r, i) => r === i) {
      if (e === t) return !0;
      if (!e || !t || e.length !== t.length) return !1;
      for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
      return !0;
    }
    function* Z2(e, t) {
      let n, r;
      for (let i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
      n && (yield n);
    }
    function e_(e, t) {
      for (let n = 0; n <= e.length; n++) t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
    }
    function t_(e, t) {
      for (let n = 0; n < e.length; n++) t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
    }
    function n_(e, t) {
      for (let n of t) e.push(n);
    }
    var Mu;
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
    })(Mu || (Mu = {}));
    function Ci(e, t) {
      return (n, r) => t(e(n), e(r));
    }
    var ya = (e, t) => e - t;
    function r_(e) {
      return (t, n) => -e(t, n);
    }
    ur = class {
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
        return new ur((n) => this.iterate((r) => t(r) ? n(r) : !0));
      }
      map(t) {
        return new ur((n) => this.iterate((r) => n(t(r))));
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
        return this.iterate((i) => ((r || Mu.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
      }
    }, ur.empty = new ur((t) => {
    });
    function i_(e, t) {
      return e.reduce((n, r) => n + t(r), 0);
    }
    var Sh, Lh, a_ = class {
      constructor(e, t) {
        this.uri = e, this.value = t;
      }
    };
    function s_(e) {
      return Array.isArray(e);
    }
    var o_ = (Bn = class {
      constructor(t, n) {
        if (this[Sh] = "ResourceMap", t instanceof Bn) this.map = new Map(t.map), this.toKey = n ?? Bn.defaultToKey;
        else if (s_(t)) {
          this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? Bn.defaultToKey;
          for (let [r, i] of t) this.set(r, i);
        } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Bn.defaultToKey;
      }
      set(t, n) {
        return this.map.set(this.toKey(t), new a_(t, n)), this;
      }
      get(t) {
        return this.map.get(this.toKey(t))?.value;
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
      *[(Sh = Symbol.toStringTag, Symbol.iterator)]() {
        for (let [, t] of this.map) yield [t.uri, t.value];
      }
    }, Bn.defaultToKey = (t) => t.toString(), Bn), Rt;
    (function(e) {
      e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
    })(Rt || (Rt = {}));
    var u_ = class {
      constructor() {
        this[Lh] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(e) {
        return this._map.has(e);
      }
      get(e, t = Rt.None) {
        let n = this._map.get(e);
        if (n) return t !== Rt.None && this.touch(n, t), n.value;
      }
      set(e, t, n = Rt.None) {
        let r = this._map.get(e);
        if (r) r.value = t, n !== Rt.None && this.touch(r, n);
        else {
          switch (r = { key: e, value: t, next: void 0, previous: void 0 }, n) {
            case Rt.None:
              this.addItemLast(r);
              break;
            case Rt.AsOld:
              this.addItemFirst(r);
              break;
            case Rt.AsNew:
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
      [(Lh = Symbol.toStringTag, Symbol.iterator)]() {
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
        if (!(t !== Rt.AsOld && t !== Rt.AsNew)) {
          if (t === Rt.AsOld) {
            if (e === this._head) return;
            let n = e.next, r = e.previous;
            e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
          } else if (t === Rt.AsNew) {
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
    }, l_ = class extends u_ {
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
      get(e, t = Rt.AsNew) {
        return super.get(e, t);
      }
      peek(e) {
        return super.get(e, Rt.None);
      }
      set(e, t) {
        return super.set(e, t, Rt.AsNew), this;
      }
      checkTrim() {
        this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
      }
    }, c_ = class extends l_ {
      constructor(e, t = 1) {
        super(e, t);
      }
      trim(e) {
        this.trimOld(e);
      }
      set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
      }
    }, d_ = class {
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
    function h_(e, t = "Unreachable") {
      throw new Error(t);
    }
    function f_(e, t = "unexpected state") {
      if (!e) throw typeof t == "string" ? new ut(`Assertion Failed: ${t}`) : t;
    }
    function Na(e) {
      if (!e()) {
        debugger;
        e(), ba(new ut("Assertion Failed"));
      }
    }
    function Uu(e, t) {
      let n = 0;
      for (; n < e.length - 1; ) {
        let r = e[n], i = e[n + 1];
        if (!t(r, i)) return !1;
        n++;
      }
      return !0;
    }
    function p_(e) {
      return typeof e == "string";
    }
    function m_(e) {
      return !!e && typeof e[Symbol.iterator] == "function";
    }
    var Is;
    (function(e) {
      function t(O) {
        return !!O && typeof O == "object" && typeof O[Symbol.iterator] == "function";
      }
      e.is = t;
      let n = Object.freeze([]);
      function r() {
        return n;
      }
      e.empty = r;
      function* i(O) {
        yield O;
      }
      e.single = i;
      function a(O) {
        return t(O) ? O : i(O);
      }
      e.wrap = a;
      function s(O) {
        return O || n;
      }
      e.from = s;
      function* o(O) {
        for (let B = O.length - 1; B >= 0; B--) yield O[B];
      }
      e.reverse = o;
      function u(O) {
        return !O || O[Symbol.iterator]().next().done === !0;
      }
      e.isEmpty = u;
      function l(O) {
        return O[Symbol.iterator]().next().value;
      }
      e.first = l;
      function c(O, B) {
        let L = 0;
        for (let j of O) if (B(j, L++)) return !0;
        return !1;
      }
      e.some = c;
      function f(O, B) {
        let L = 0;
        for (let j of O) if (!B(j, L++)) return !1;
        return !0;
      }
      e.every = f;
      function p(O, B) {
        for (let L of O) if (B(L)) return L;
      }
      e.find = p;
      function* m(O, B) {
        for (let L of O) B(L) && (yield L);
      }
      e.filter = m;
      function* g(O, B) {
        let L = 0;
        for (let j of O) yield B(j, L++);
      }
      e.map = g;
      function* _(O, B) {
        let L = 0;
        for (let j of O) yield* B(j, L++);
      }
      e.flatMap = _;
      function* w(...O) {
        for (let B of O) m_(B) ? yield* B : yield B;
      }
      e.concat = w;
      function S(O, B, L) {
        let j = L;
        for (let $ of O) j = B(j, $);
        return j;
      }
      e.reduce = S;
      function F(O) {
        let B = 0;
        for (let L of O) B++;
        return B;
      }
      e.length = F;
      function* C(O, B, L = O.length) {
        for (B < -O.length && (B = 0), B < 0 && (B += O.length), L < 0 ? L += O.length : L > O.length && (L = O.length); B < L; B++) yield O[B];
      }
      e.slice = C;
      function x(O, B = Number.POSITIVE_INFINITY) {
        let L = [];
        if (B === 0) return [L, O];
        let j = O[Symbol.iterator]();
        for (let $ = 0; $ < B; $++) {
          let xe = j.next();
          if (xe.done) return [L, e.empty()];
          L.push(xe.value);
        }
        return [L, { [Symbol.iterator]() {
          return j;
        } }];
      }
      e.consume = x;
      async function U(O) {
        let B = [];
        for await (let L of O) B.push(L);
        return B;
      }
      e.asyncToArray = U;
      async function H(O) {
        let B = [];
        for await (let L of O) B = B.concat(L);
        return B;
      }
      e.asyncToArrayFlat = H;
    })(Is || (Is = {}));
    function VT(e) {
      return e;
    }
    function $T(e, t) {
    }
    function Fh(e) {
      if (Is.is(e)) {
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
    function g_(...e) {
      return Ca(() => Fh(e));
    }
    function Ca(e) {
      return { dispose: J2(() => {
        e();
      }) };
    }
    var Pu = (si = class {
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
          Fh(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
      }
      add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._isDisposed ? si.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t;
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
    }, si.DISABLE_DISPOSED_WARNING = !1, si), Rs = (Qi = class {
      constructor() {
        this._store = new Pu(), this._store;
      }
      dispose() {
        this._store.dispose();
      }
      _register(t) {
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(t);
      }
    }, Qi.None = Object.freeze({ dispose() {
    } }), Qi), ze = (lr = class {
      constructor(t) {
        this.element = t, this.next = lr.Undefined, this.prev = lr.Undefined;
      }
    }, lr.Undefined = new lr(void 0), lr), E_ = class {
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
    }, __ = globalThis.performance.now.bind(globalThis.performance), Ih = class w0 {
      static create(t) {
        return new w0(t);
      }
      constructor(t) {
        this._now = t === !1 ? Date.now : __, this._startTime = this._now(), this._stopTime = -1;
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
    }, Os;
    (function(e) {
      e.None = () => Rs.None;
      function t(Q, G) {
        return p(Q, () => {
        }, 0, void 0, !0, void 0, G);
      }
      e.defer = t;
      function n(Q) {
        return (G, Z = null, ne) => {
          let oe = !1, de;
          return de = Q((ce) => {
            if (!oe) return de ? de.dispose() : oe = !0, G.call(Z, ce);
          }, null, ne), oe && de.dispose(), de;
        };
      }
      e.once = n;
      function r(Q, G) {
        return e.once(e.filter(Q, G));
      }
      e.onceIf = r;
      function i(Q, G, Z) {
        return c((ne, oe = null, de) => Q((ce) => ne.call(oe, G(ce)), null, de), Z);
      }
      e.map = i;
      function a(Q, G, Z) {
        return c((ne, oe = null, de) => Q((ce) => {
          G(ce), ne.call(oe, ce);
        }, null, de), Z);
      }
      e.forEach = a;
      function s(Q, G, Z) {
        return c((ne, oe = null, de) => Q((ce) => G(ce) && ne.call(oe, ce), null, de), Z);
      }
      e.filter = s;
      function o(Q) {
        return Q;
      }
      e.signal = o;
      function u(...Q) {
        return (G, Z = null, ne) => {
          let oe = g_(...Q.map((de) => de((ce) => G.call(Z, ce))));
          return f(oe, ne);
        };
      }
      e.any = u;
      function l(Q, G, Z, ne) {
        let oe = Z;
        return i(Q, (de) => (oe = G(oe, de), oe), ne);
      }
      e.reduce = l;
      function c(Q, G) {
        let Z, ne = { onWillAddFirstListener() {
          Z = Q(oe.fire, oe);
        }, onDidRemoveLastListener() {
          Z?.dispose();
        } }, oe = new un(ne);
        return G?.add(oe), oe.event;
      }
      function f(Q, G) {
        return G instanceof Array ? G.push(Q) : G && G.add(Q), Q;
      }
      function p(Q, G, Z = 100, ne = !1, oe = !1, de, ce) {
        let Ie, ke, y, ee = 0, X, re = { leakWarningThreshold: de, onWillAddFirstListener() {
          Ie = Q((P) => {
            ee++, ke = G(ke, P), ne && !y && (M.fire(ke), ke = void 0), X = () => {
              let ue = ke;
              ke = void 0, y = void 0, (!ne || ee > 1) && M.fire(ue), ee = 0;
            }, typeof Z == "number" ? (y && clearTimeout(y), y = setTimeout(X, Z)) : y === void 0 && (y = null, queueMicrotask(X));
          });
        }, onWillRemoveListener() {
          oe && ee > 0 && X?.();
        }, onDidRemoveLastListener() {
          X = void 0, Ie.dispose();
        } }, M = new un(re);
        return ce?.add(M), M.event;
      }
      e.debounce = p;
      function m(Q, G = 0, Z) {
        return e.debounce(Q, (ne, oe) => ne ? (ne.push(oe), ne) : [oe], G, void 0, !0, void 0, Z);
      }
      e.accumulate = m;
      function g(Q, G = (ne, oe) => ne === oe, Z) {
        let ne = !0, oe;
        return s(Q, (de) => {
          let ce = ne || !G(de, oe);
          return ne = !1, oe = de, ce;
        }, Z);
      }
      e.latch = g;
      function _(Q, G, Z) {
        return [e.filter(Q, G, Z), e.filter(Q, (ne) => !G(ne), Z)];
      }
      e.split = _;
      function w(Q, G = !1, Z = [], ne) {
        let oe = Z.slice(), de = Q((ke) => {
          oe ? oe.push(ke) : Ie.fire(ke);
        });
        ne && ne.add(de);
        let ce = () => {
          oe?.forEach((ke) => Ie.fire(ke)), oe = null;
        }, Ie = new un({ onWillAddFirstListener() {
          de || (de = Q((ke) => Ie.fire(ke)), ne && ne.add(de));
        }, onDidAddFirstListener() {
          oe && (G ? setTimeout(ce) : ce());
        }, onDidRemoveLastListener() {
          de && de.dispose(), de = null;
        } });
        return ne && ne.add(Ie), Ie.event;
      }
      e.buffer = w;
      function S(Q, G) {
        return (Z, ne, oe) => {
          let de = G(new C());
          return Q(function(ce) {
            let Ie = de.evaluate(ce);
            Ie !== F && Z.call(ne, Ie);
          }, void 0, oe);
        };
      }
      e.chain = S;
      let F = Symbol("HaltChainable");
      class C {
        constructor() {
          this.steps = [];
        }
        map(G) {
          return this.steps.push(G), this;
        }
        forEach(G) {
          return this.steps.push((Z) => (G(Z), Z)), this;
        }
        filter(G) {
          return this.steps.push((Z) => G(Z) ? Z : F), this;
        }
        reduce(G, Z) {
          let ne = Z;
          return this.steps.push((oe) => (ne = G(ne, oe), ne)), this;
        }
        latch(G = (Z, ne) => Z === ne) {
          let Z = !0, ne;
          return this.steps.push((oe) => {
            let de = Z || !G(oe, ne);
            return Z = !1, ne = oe, de ? oe : F;
          }), this;
        }
        evaluate(G) {
          for (let Z of this.steps) if (G = Z(G), G === F) break;
          return G;
        }
      }
      function x(Q, G, Z = (ne) => ne) {
        let ne = (...Ie) => ce.fire(Z(...Ie)), oe = () => Q.on(G, ne), de = () => Q.removeListener(G, ne), ce = new un({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return ce.event;
      }
      e.fromNodeEventEmitter = x;
      function U(Q, G, Z = (ne) => ne) {
        let ne = (...Ie) => ce.fire(Z(...Ie)), oe = () => Q.addEventListener(G, ne), de = () => Q.removeEventListener(G, ne), ce = new un({ onWillAddFirstListener: oe, onDidRemoveLastListener: de });
        return ce.event;
      }
      e.fromDOMEventEmitter = U;
      function H(Q, G) {
        let Z, ne = new Promise((oe, de) => {
          let ce = n(Q)(oe, null, G);
          Z = () => ce.dispose();
        });
        return ne.cancel = Z, ne;
      }
      e.toPromise = H;
      function O(Q) {
        let G = new un();
        return Q.then((Z) => {
          G.fire(Z);
        }, () => {
          G.fire(void 0);
        }).finally(() => {
          G.dispose();
        }), G.event;
      }
      e.fromPromise = O;
      function B(Q, G) {
        return Q((Z) => G.fire(Z));
      }
      e.forward = B;
      function L(Q, G, Z) {
        return G(Z), Q((ne) => G(ne));
      }
      e.runAndSubscribe = L;
      class j {
        constructor(G, Z) {
          this._observable = G, this._counter = 0, this._hasChanged = !1;
          let ne = { onWillAddFirstListener: () => {
            G.addObserver(this), this._observable.reportChanges();
          }, onDidRemoveLastListener: () => {
            G.removeObserver(this);
          } };
          this.emitter = new un(ne), Z && Z.add(this.emitter);
        }
        beginUpdate(G) {
          this._counter++;
        }
        handlePossibleChange(G) {
        }
        handleChange(G, Z) {
          this._hasChanged = !0;
        }
        endUpdate(G) {
          this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
      }
      function $(Q, G) {
        return new j(Q, G).emitter.event;
      }
      e.fromObservable = $;
      function xe(Q) {
        return (G, Z, ne) => {
          let oe = 0, de = !1, ce = { beginUpdate() {
            oe++;
          }, endUpdate() {
            oe--, oe === 0 && (Q.reportChanges(), de && (de = !1, G.call(Z)));
          }, handlePossibleChange() {
          }, handleChange() {
            de = !0;
          } };
          Q.addObserver(ce), Q.reportChanges();
          let Ie = { dispose() {
            Q.removeObserver(ce);
          } };
          return ne instanceof Pu ? ne.add(Ie) : Array.isArray(ne) && ne.push(Ie), Ie;
        };
      }
      e.fromObservableLight = xe;
    })(Os || (Os = {}));
    var D_ = (cr = class {
      constructor(t) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${cr._idPool++}`, cr.all.add(this);
      }
      start(t) {
        this._stopWatch = new Ih(), this.listenerCount = t;
      }
      stop() {
        if (this._stopWatch) {
          let t = this._stopWatch.elapsed();
          this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
      }
    }, cr.all = /* @__PURE__ */ new Set(), cr._idPool = 0, cr), v_ = -1, b_ = (oi = class {
      constructor(t, n, r = (oi._idPool++).toString(16).padStart(3, "0")) {
        this._errorHandler = t, this.threshold = n, this.name = r, this._warnCountdown = 0;
      }
      dispose() {
        this._stacks?.clear();
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
          let u = new N_(o, a);
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
    }, oi._idPool = 1, oi), y_ = class A0 {
      static create() {
        let t = new Error();
        return new A0(t.stack ?? "");
      }
      constructor(t) {
        this.value = t;
      }
      print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
      }
    }, N_ = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerLeakError", this.stack = t;
      }
    }, C_ = class extends Error {
      constructor(e, t) {
        super(e), this.name = "ListenerRefusalError", this.stack = t;
      }
    }, T_ = 0, Bu = class {
      constructor(e) {
        this.value = e, this.id = T_++;
      }
    }, w_ = 2, un = class {
      constructor(e) {
        this._size = 0, this._options = e, this._leakageMon = this._options?.leakWarningThreshold ? new b_(e?.onListenerError ?? ba, this._options?.leakWarningThreshold ?? v_) : void 0, this._perfMon = this._options?._profName ? new D_(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
      }
      dispose() {
        this._disposed || (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
      }
      get event() {
        return this._event ??= (e, t, n) => {
          if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
            let s = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
            console.warn(s);
            let o = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = new C_(`${s}. HINT: Stack shows most frequent listener (${o[1]}-times)`, o[0]);
            return (this._options?.onListenerError || ba)(u), Rs.None;
          }
          if (this._disposed) return Rs.None;
          t && (e = e.bind(t));
          let r = new Bu(e), i;
          this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = y_.create(), i = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Bu ? (this._deliveryQueue ??= new A_(), this._listeners = [this._listeners, r]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
          let a = Ca(() => {
            i?.(), this._removeListener(r);
          });
          return n instanceof Pu ? n.add(a) : Array.isArray(n) && n.push(a), a;
        }, this._event;
      }
      _removeListener(e) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (this._size === 1) {
          this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
          return;
        }
        let t = this._listeners, n = t.indexOf(e);
        if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[n] = void 0;
        let r = this._deliveryQueue.current === this;
        if (this._size * w_ <= t.length) {
          let i = 0;
          for (let a = 0; a < t.length; a++) t[a] ? t[i++] = t[a] : r && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
          t.length = i;
        }
      }
      _deliver(e, t) {
        if (!e) return;
        let n = this._options?.onListenerError || ba;
        if (!n) {
          e.value(t);
          return;
        }
        try {
          e.value(t);
        } catch (r) {
          n(r);
        }
      }
      _deliverQueue(e) {
        let t = e.current._listeners;
        for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
        e.reset();
      }
      fire(e) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Bu) this._deliver(this._listeners, e);
        else {
          let t = this._deliveryQueue;
          t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
        }
        this._perfMon?.stop();
      }
      hasListeners() {
        return this._size > 0;
      }
    }, A_ = class {
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
    function S_() {
      return globalThis._VSCODE_NLS_MESSAGES;
    }
    function Rh() {
      return globalThis._VSCODE_NLS_LANGUAGE;
    }
    var L_ = Rh() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
    function F_(e, t) {
      let n;
      return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
        let a = i[0], s = t[a], o = r;
        return typeof s == "string" ? o = s : (typeof s == "number" || typeof s == "boolean" || s === void 0 || s === null) && (o = String(s)), o;
      }), L_ && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
    }
    function me(e, t, ...n) {
      return F_(typeof e == "number" ? I_(e, t) : t, n);
    }
    function I_(e, t) {
      let n = S_()?.[e];
      if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
      }
      return n;
    }
    var Ti = "en", Ta = !1, wa = !1, xs = !1, Oh = !1, Vu = !1, xh = !1, ks, Ms = Ti, kh = Ti, R_, zn, Xn = globalThis, Qt;
    typeof Xn.vscode < "u" && typeof Xn.vscode.process < "u" ? Qt = Xn.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (Qt = process);
    var O_ = typeof Qt?.versions?.electron == "string", x_ = O_ && Qt?.type === "renderer";
    if (typeof Qt == "object") {
      Ta = Qt.platform === "win32", wa = Qt.platform === "darwin", xs = Qt.platform === "linux", xs && Qt.env.SNAP && Qt.env.SNAP_REVISION, Qt.env.CI || Qt.env.BUILD_ARTIFACTSTAGINGDIRECTORY, ks = Ti, Ms = Ti;
      let e = Qt.env.VSCODE_NLS_CONFIG;
      if (e) try {
        let t = JSON.parse(e);
        ks = t.userLocale, kh = t.osLocale, Ms = t.resolvedLanguage || Ti, R_ = t.languagePack?.translationsConfigFile;
      } catch {
      }
      Oh = !0;
    } else typeof navigator == "object" && !x_ ? (zn = navigator.userAgent, Ta = zn.indexOf("Windows") >= 0, wa = zn.indexOf("Macintosh") >= 0, xh = (zn.indexOf("Macintosh") >= 0 || zn.indexOf("iPad") >= 0 || zn.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, xs = zn.indexOf("Linux") >= 0, zn?.indexOf("Mobi") >= 0, Vu = !0, Ms = Rh() || Ti, ks = navigator.language.toLowerCase(), kh = ks) : console.error("Unable to resolve platform.");
    var wi;
    (function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    })(wi || (wi = {})), wi.Web, wa ? wi.Mac : Ta ? wi.Windows : xs && wi.Linux;
    var Ai = Ta, k_ = wa, M_ = Oh, U_ = Vu, P_ = Vu && typeof Xn.importScripts == "function", B_ = P_ ? Xn.origin : void 0, Un = zn, br = Ms, Mh;
    (function(e) {
      function t() {
        return br;
      }
      e.value = t;
      function n() {
        return br.length === 2 ? br === "en" : br.length >= 3 ? br[0] === "e" && br[1] === "n" && br[2] === "-" : !1;
      }
      e.isDefaultVariant = n;
      function r() {
        return br === "en";
      }
      e.isDefault = r;
    })(Mh || (Mh = {}));
    var V_ = typeof Xn.postMessage == "function" && !Xn.importScripts;
    (() => {
      if (V_) {
        let e = [];
        Xn.addEventListener("message", (n) => {
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
          e.push({ id: r, callback: n }), Xn.postMessage({ vscodeScheduleAsyncWork: r }, "*");
        };
      }
      return (e) => setTimeout(e);
    })();
    var Aa;
    (function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
    })(Aa || (Aa = {})), wa || xh ? Aa.Macintosh : Ta ? Aa.Windows : Aa.Linux;
    var $_ = !!(Un && Un.indexOf("Chrome") >= 0);
    Un && Un.indexOf("Firefox") >= 0, !$_ && Un && Un.indexOf("Safari") >= 0, Un && Un.indexOf("Edg/") >= 0, Un && Un.indexOf("Android") >= 0;
    var Uh = Object.freeze(function(e, t) {
      let n = setTimeout(e.bind(t), 0);
      return { dispose() {
        clearTimeout(n);
      } };
    }), Us;
    (function(e) {
      function t(n) {
        return n === e.None || n === e.Cancelled || n instanceof Ps ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
      }
      e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: Os.None }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Uh });
    })(Us || (Us = {}));
    var Ps = class {
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
        return this._isCancelled ? Uh : (this._emitter || (this._emitter = new un()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
      }
    }, K_ = class {
      constructor(e) {
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
      }
      get token() {
        return this._token || (this._token = new Ps()), this._token;
      }
      cancel() {
        this._token ? this._token instanceof Ps && this._token.cancel() : this._token = Us.Cancelled;
      }
      dispose(e = !1) {
        e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof Ps && this._token.dispose() : this._token = Us.None;
      }
    };
    function j_(e) {
      return e;
    }
    var q_ = class {
      constructor(e, t) {
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = j_) : (this._fn = t, this._computeKey = e.getCacheKey);
      }
      get(e) {
        let t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
      }
    }, Ph = class {
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
    }, ln;
    (function(e) {
      e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
    })(ln || (ln = {}));
    function Bh(e) {
      return e < 0 ? 0 : e > ln.MAX_UINT_8 ? ln.MAX_UINT_8 : e | 0;
    }
    function Si(e) {
      return e < 0 ? 0 : e > ln.MAX_UINT_32 ? ln.MAX_UINT_32 : e | 0;
    }
    function G_(e) {
      return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
    }
    function H_(e) {
      return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
    }
    function Vh(e) {
      return e.split(/\r\n|\r|\n/);
    }
    function W_(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        let r = e.charCodeAt(t);
        if (r !== R.Space && r !== R.Tab) return t;
      }
      return -1;
    }
    function Y_(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        let r = e.charCodeAt(n);
        if (r !== R.Space && r !== R.Tab) return n;
      }
      return -1;
    }
    function z_(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    function X_(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let u = e.charCodeAt(n), l = t.charCodeAt(i);
        if (u < l) return -1;
        if (u > l) return 1;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function $h(e, t, n = 0, r = e.length, i = 0, a = t.length) {
      for (; n < r && i < a; n++, i++) {
        let u = e.charCodeAt(n), l = t.charCodeAt(i);
        if (u === l) continue;
        if (u >= 128 || l >= 128) return X_(e.toLowerCase(), t.toLowerCase(), n, r, i, a);
        Kh(u) && (u -= 32), Kh(l) && (l -= 32);
        let c = u - l;
        if (c !== 0) return c;
      }
      let s = r - n, o = a - i;
      return s < o ? -1 : s > o ? 1 : 0;
    }
    function Kh(e) {
      return e >= R.a && e <= R.z;
    }
    function jh(e) {
      return e >= R.A && e <= R.Z;
    }
    function J_(e, t) {
      return e.length === t.length && $h(e, t) === 0;
    }
    function Q_(e, t) {
      let n = t.length;
      return t.length > e.length ? !1 : $h(e, t, 0, n) === 0;
    }
    function Bs(e, t) {
      let n = Math.min(e.length, t.length), r;
      for (r = 0; r < n; r++) if (e.charCodeAt(r) !== t.charCodeAt(r)) return r;
      return n;
    }
    function $u(e, t) {
      let n = Math.min(e.length, t.length), r, i = e.length - 1, a = t.length - 1;
      for (r = 0; r < n; r++) if (e.charCodeAt(i - r) !== t.charCodeAt(a - r)) return r;
      return n;
    }
    function Ku(e) {
      return 55296 <= e && e <= 56319;
    }
    function Z_(e) {
      return 56320 <= e && e <= 57343;
    }
    function eD(e, t) {
      return (e - 55296 << 10) + (t - 56320) + 65536;
    }
    function tD(e, t, n) {
      let r = e.charCodeAt(n);
      if (Ku(r) && n + 1 < t) {
        let i = e.charCodeAt(n + 1);
        if (Z_(i)) return eD(r, i);
      }
      return r;
    }
    var nD = /^[\t\n\r\x20-\x7E]*$/;
    function rD(e) {
      return nD.test(e);
    }
    String.fromCharCode(R.UTF8_BOM);
    var qh;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
    })(qh || (qh = {}));
    var ju;
    (function(e) {
      e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
    })(ju || (ju = {}));
    var qu = (rn = class {
      static getInstance(t) {
        return rn.cache.get(Array.from(t));
      }
      static getLocales() {
        return rn._locales.value;
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
    }, rn.ambiguousCharacterData = new Ph(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), rn.cache = new q_({ getCacheKey: JSON.stringify }, (t) => {
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
      let a = rn.ambiguousCharacterData.value, s = t.filter((c) => !c.startsWith("_") && c in a);
      s.length === 0 && (s = ["_default"]);
      let o;
      for (let c of s) {
        let f = n(a[c]);
        o = i(o, f);
      }
      let u = n(a._common), l = r(u, o);
      return new rn(l);
    }), rn._locales = new Ph(() => Object.keys(rn.ambiguousCharacterData.value).filter((t) => !t.startsWith("_"))), rn), Gu = (Vn = class {
      static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
      }
      static getData() {
        return this._data || (this._data = new Set([...Object.values(Vn.getRawData())].flat())), this._data;
      }
      static isInvisibleCharacter(t) {
        return Vn.getData().has(t);
      }
      static containsInvisibleCharacter(t) {
        for (let n = 0; n < t.length; n++) {
          let r = t.codePointAt(n);
          if (typeof r == "number" && (Vn.isInvisibleCharacter(r) || r === ju.space)) return !0;
        }
        return !1;
      }
      static get codePoints() {
        return Vn.getData();
      }
    }, Vn._data = void 0, Vn), Hu = "default", iD = "$initialize", jt;
    (function(e) {
      e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
    })(jt || (jt = {}));
    var aD = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.method = r, this.args = i, this.type = jt.Request;
      }
    }, Gh = class {
      constructor(e, t, n, r) {
        this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = jt.Reply;
      }
    }, sD = class {
      constructor(e, t, n, r, i) {
        this.vsWorker = e, this.req = t, this.channel = n, this.eventName = r, this.arg = i, this.type = jt.SubscribeEvent;
      }
    }, oD = class {
      constructor(e, t, n) {
        this.vsWorker = e, this.req = t, this.event = n, this.type = jt.Event;
      }
    }, uD = class {
      constructor(e, t) {
        this.vsWorker = e, this.req = t, this.type = jt.UnsubscribeEvent;
      }
    }, lD = class {
      constructor(e) {
        this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
      }
      setWorkerId(e) {
        this._workerId = e;
      }
      sendMessage(e, t, n) {
        let r = String(++this._lastSentReq);
        return new Promise((i, a) => {
          this._pendingReplies[r] = { resolve: i, reject: a }, this._send(new aD(this._workerId, r, e, t, n));
        });
      }
      listen(e, t, n) {
        let r = null, i = new un({ onWillAddFirstListener: () => {
          r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new sD(this._workerId, r, e, t, n));
        }, onDidRemoveLastListener: () => {
          this._pendingEmitters.delete(r), this._send(new uD(this._workerId, r)), r = null;
        } });
        return i.event;
      }
      handleMessage(e) {
        !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
      }
      createProxyToRemoteChannel(e, t) {
        let n = { get: (r, i) => (typeof i == "string" && !r[i] && (Wh(i) ? r[i] = (a) => this.listen(e, i, a) : Hh(i) ? r[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === R.DollarSign && (r[i] = async (...a) => (await t?.(), this.sendMessage(e, i, a)))), r[i]) };
        return new Proxy(/* @__PURE__ */ Object.create(null), n);
      }
      _handleMessage(e) {
        switch (e.type) {
          case jt.Reply:
            return this._handleReplyMessage(e);
          case jt.Request:
            return this._handleRequestMessage(e);
          case jt.SubscribeEvent:
            return this._handleSubscribeEventMessage(e);
          case jt.Event:
            return this._handleEventMessage(e);
          case jt.UnsubscribeEvent:
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
          this._send(new Gh(this._workerId, t, n, void 0));
        }, (n) => {
          n.detail instanceof Error && (n.detail = Ru(n.detail)), this._send(new Gh(this._workerId, t, void 0, Ru(n)));
        });
      }
      _handleSubscribeEventMessage(e) {
        let t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((r) => {
          this._send(new oD(this._workerId, t, r));
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
        if (e.type === jt.Request) for (let n = 0; n < e.args.length; n++) e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
        else e.type === jt.Reply && e.res instanceof ArrayBuffer && t.push(e.res);
        this._handler.sendMessage(e, t);
      }
    };
    function Hh(e) {
      return e[0] === "o" && e[1] === "n" && jh(e.charCodeAt(2));
    }
    function Wh(e) {
      return /^onDynamic/.test(e) && jh(e.charCodeAt(9));
    }
    var cD = class {
      constructor(e, t) {
        this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new lD({ sendMessage: (n, r) => {
          e(n, r);
        }, handleMessage: (n, r, i) => this._handleMessage(n, r, i), handleEvent: (n, r, i) => this._handleEvent(n, r, i) }), this.requestHandler = t(this);
      }
      onmessage(e) {
        this._protocol.handleMessage(e);
      }
      _handleMessage(e, t, n) {
        if (e === Hu && t === iD) return this.initialize(n[0]);
        let r = e === Hu ? this.requestHandler : this._localChannels.get(e);
        if (!r) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
        if (typeof r[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
        try {
          return Promise.resolve(r[t].apply(r, n));
        } catch (i) {
          return Promise.reject(i);
        }
      }
      _handleEvent(e, t, n) {
        let r = e === Hu ? this.requestHandler : this._localChannels.get(e);
        if (!r) throw new Error(`Missing channel ${e} on worker thread`);
        if (Wh(t)) {
          let i = r[t].call(r, n);
          if (typeof i != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
          return i;
        }
        if (Hh(t)) {
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
    }, Wu = !1;
    function Yh(e) {
      if (Wu) throw new Error("WebWorker already initialized!");
      Wu = !0;
      let t = new cD((n) => globalThis.postMessage(n), (n) => e(n));
      return globalThis.onmessage = (n) => {
        t.onmessage(n.data);
      }, t;
    }
    function dD(e) {
      globalThis.onmessage = (t) => {
        Wu || Yh(e);
      };
    }
    var yr = class {
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
    function zh(e, t) {
      return (t << 5) - t + e | 0;
    }
    function hD(e, t) {
      t = zh(149417, t);
      for (let n = 0, r = e.length; n < r; n++) t = zh(e.charCodeAt(n), t);
      return t;
    }
    var Xh;
    (function(e) {
      e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
    })(Xh || (Xh = {}));
    var Jh = class {
      constructor(e) {
        this.source = e;
      }
      getElements() {
        let e = this.source, t = new Int32Array(e.length);
        for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
        return t;
      }
    };
    function fD(e, t, n) {
      return new Zh(new Jh(e), new Jh(t)).ComputeDiff(n).changes;
    }
    var Li = class {
      static Assert(e, t) {
        if (!e) throw new Error(t);
      }
    }, Fi = class {
      static Copy(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
      static Copy2(e, t, n, r, i) {
        for (let a = 0; a < i; a++) n[r + a] = e[t + a];
      }
    }, Jn;
    (function(e) {
      e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
    })(Jn || (Jn = {}));
    var Qh = class {
      constructor() {
        this.m_changes = [], this.m_originalStart = ln.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = ln.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
      }
      MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new yr(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = ln.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = ln.MAX_SAFE_SMALL_INTEGER;
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
    }, Zh = class ia {
      constructor(t, n, r = null) {
        this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
        let [i, a, s] = ia._getElements(t), [o, u, l] = ia._getElements(n);
        this._hasStrings = s && l, this._originalStringElements = i, this._originalElementsOrHash = a, this._modifiedStringElements = o, this._modifiedElementsOrHash = u, this.m_forwardHistory = [], this.m_reverseHistory = [];
      }
      static _isStringArray(t) {
        return t.length > 0 && typeof t[0] == "string";
      }
      static _getElements(t) {
        let n = t.getElements();
        if (ia._isStringArray(n)) {
          let r = new Int32Array(n.length);
          for (let i = 0, a = n.length; i < a; i++) r[i] = hD(n[i], 0);
          return [n, r, !0];
        }
        return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
      }
      ElementsAreEqual(t, n) {
        return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
      }
      ElementsAreStrictEqual(t, n) {
        if (!this.ElementsAreEqual(t, n)) return !1;
        let r = ia._getStrictElement(this._originalSequence, t), i = ia._getStrictElement(this._modifiedSequence, n);
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
          return r <= i ? (Li.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), f = [new yr(t, 0, r, i - r + 1)]) : t <= n ? (Li.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = [new yr(t, n - t + 1, r, 0)]) : (Li.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), Li.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = []), f;
        }
        let s = [0], o = [0], u = this.ComputeRecursionPoint(t, n, r, i, s, o, a), l = s[0], c = o[0];
        if (u !== null) return u;
        if (!a[0]) {
          let f = this.ComputeDiffRecursive(t, l, r, c, a), p = [];
          return a[0] ? p = [new yr(l + 1, n - (l + 1) + 1, c + 1, i - (c + 1) + 1)] : p = this.ComputeDiffRecursive(l + 1, n, c + 1, i, a), this.ConcatenateChanges(f, p);
        }
        return [new yr(t, n - t + 1, r, i - r + 1)];
      }
      WALKTRACE(t, n, r, i, a, s, o, u, l, c, f, p, m, g, _, w, S, F) {
        let C = null, x = null, U = new Qh(), H = n, O = r, B = m[0] - w[0] - i, L = ln.MIN_SAFE_SMALL_INTEGER, j = this.m_forwardHistory.length - 1;
        do {
          let $ = B + t;
          $ === H || $ < O && l[$ - 1] < l[$ + 1] ? (f = l[$ + 1], g = f - B - i, f < L && U.MarkNextChange(), L = f, U.AddModifiedElement(f + 1, g), B = $ + 1 - t) : (f = l[$ - 1] + 1, g = f - B - i, f < L && U.MarkNextChange(), L = f - 1, U.AddOriginalElement(f, g + 1), B = $ - 1 - t), j >= 0 && (l = this.m_forwardHistory[j], t = l[0], H = 1, O = l.length - 1);
        } while (--j >= -1);
        if (C = U.getReverseChanges(), F[0]) {
          let $ = m[0] + 1, xe = w[0] + 1;
          if (C !== null && C.length > 0) {
            let Q = C[C.length - 1];
            $ = Math.max($, Q.getOriginalEnd()), xe = Math.max(xe, Q.getModifiedEnd());
          }
          x = [new yr($, p - $ + 1, xe, _ - xe + 1)];
        } else {
          U = new Qh(), H = s, O = o, B = m[0] - w[0] - u, L = ln.MAX_SAFE_SMALL_INTEGER, j = S ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
          do {
            let $ = B + a;
            $ === H || $ < O && c[$ - 1] >= c[$ + 1] ? (f = c[$ + 1] - 1, g = f - B - u, f > L && U.MarkNextChange(), L = f + 1, U.AddOriginalElement(f + 1, g + 1), B = $ + 1 - a) : (f = c[$ - 1], g = f - B - u, f > L && U.MarkNextChange(), L = f, U.AddModifiedElement(f + 1, g + 1), B = $ - 1 - a), j >= 0 && (c = this.m_reverseHistory[j], a = c[0], H = 1, O = c.length - 1);
          } while (--j >= -1);
          x = U.getChanges();
        }
        return this.ConcatenateChanges(C, x);
      }
      ComputeRecursionPoint(t, n, r, i, a, s, o) {
        let u = 0, l = 0, c = 0, f = 0, p = 0, m = 0;
        t--, r--, a[0] = 0, s[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        let g = n - t + (i - r), _ = g + 1, w = new Int32Array(_), S = new Int32Array(_), F = i - r, C = n - t, x = t - r, U = n - i, H = (C - F) % 2 === 0;
        w[F] = t, S[C] = n, o[0] = !1;
        for (let O = 1; O <= g / 2 + 1; O++) {
          let B = 0, L = 0;
          c = this.ClipDiagonalBound(F - O, O, F, _), f = this.ClipDiagonalBound(F + O, O, F, _);
          for (let $ = c; $ <= f; $ += 2) {
            $ === c || $ < f && w[$ - 1] < w[$ + 1] ? u = w[$ + 1] : u = w[$ - 1] + 1, l = u - ($ - F) - x;
            let xe = u;
            for (; u < n && l < i && this.ElementsAreEqual(u + 1, l + 1); ) u++, l++;
            if (w[$] = u, u + l > B + L && (B = u, L = l), !H && Math.abs($ - C) <= O - 1 && u >= S[$]) return a[0] = u, s[0] = l, xe <= S[$] && Jn.MaxDifferencesHistory > 0 && O <= Jn.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, w, S, u, n, a, l, i, s, H, o) : null;
          }
          let j = (B - t + (L - r) - O) / 2;
          if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(B, j)) return o[0] = !0, a[0] = B, s[0] = L, j > 0 && Jn.MaxDifferencesHistory > 0 && O <= Jn.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, w, S, u, n, a, l, i, s, H, o) : (t++, r++, [new yr(t, n - t + 1, r, i - r + 1)]);
          p = this.ClipDiagonalBound(C - O, O, C, _), m = this.ClipDiagonalBound(C + O, O, C, _);
          for (let $ = p; $ <= m; $ += 2) {
            $ === p || $ < m && S[$ - 1] >= S[$ + 1] ? u = S[$ + 1] - 1 : u = S[$ - 1], l = u - ($ - C) - U;
            let xe = u;
            for (; u > t && l > r && this.ElementsAreEqual(u, l); ) u--, l--;
            if (S[$] = u, H && Math.abs($ - F) <= O && u <= w[$]) return a[0] = u, s[0] = l, xe >= w[$] && Jn.MaxDifferencesHistory > 0 && O <= Jn.MaxDifferencesHistory + 1 ? this.WALKTRACE(F, c, f, x, C, p, m, U, w, S, u, n, a, l, i, s, H, o) : null;
          }
          if (O <= Jn.MaxDifferencesHistory) {
            let $ = new Int32Array(f - c + 2);
            $[0] = F - c + 1, Fi.Copy2(w, c, $, 1, f - c + 1), this.m_forwardHistory.push($), $ = new Int32Array(m - p + 2), $[0] = C - p + 1, Fi.Copy2(S, p, $, 1, m - p + 1), this.m_reverseHistory.push($);
          }
        }
        return this.WALKTRACE(F, c, f, x, C, p, m, U, w, S, u, n, a, l, i, s, H, o);
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
          return Fi.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], Fi.Copy(n, 1, i, t.length, n.length - 1), i;
        } else {
          let i = new Array(t.length + n.length);
          return Fi.Copy(t, 0, i, 0, t.length), Fi.Copy(n, 0, i, t.length, n.length), i;
        }
      }
      ChangesOverlap(t, n, r) {
        if (Li.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Li.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
          let i = t.originalStart, a = t.originalLength, s = t.modifiedStart, o = t.modifiedLength;
          return t.originalStart + t.originalLength >= n.originalStart && (a = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (o = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new yr(i, a, s, o), !0;
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
    }, Te = class fi {
      constructor(t, n) {
        this.lineNumber = t, this.column = n;
      }
      with(t = this.lineNumber, n = this.column) {
        return t === this.lineNumber && n === this.column ? this : new fi(t, n);
      }
      delta(t = 0, n = 0) {
        return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
      }
      equals(t) {
        return fi.equals(this, t);
      }
      static equals(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
      }
      isBefore(t) {
        return fi.isBefore(this, t);
      }
      static isBefore(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
      }
      isBeforeOrEqual(t) {
        return fi.isBeforeOrEqual(this, t);
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
        return new fi(this.lineNumber, this.column);
      }
      toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
      }
      static lift(t) {
        return new fi(t.lineNumber, t.column);
      }
      static isIPosition(t) {
        return t && typeof t.lineNumber == "number" && typeof t.column == "number";
      }
      toJSON() {
        return { lineNumber: this.lineNumber, column: this.column };
      }
    }, fe = class ot {
      constructor(t, n, r, i) {
        t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
      }
      isEmpty() {
        return ot.isEmpty(this);
      }
      static isEmpty(t) {
        return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
      }
      containsPosition(t) {
        return ot.containsPosition(this, t);
      }
      static containsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
      }
      static strictContainsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
      }
      containsRange(t) {
        return ot.containsRange(this, t);
      }
      static containsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
      }
      strictContainsRange(t) {
        return ot.strictContainsRange(this, t);
      }
      static strictContainsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
      }
      plusRange(t) {
        return ot.plusRange(this, t);
      }
      static plusRange(t, n) {
        let r, i, a, s;
        return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (a = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (a = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (a = t.endLineNumber, s = t.endColumn), new ot(r, i, a, s);
      }
      intersectRanges(t) {
        return ot.intersectRanges(this, t);
      }
      static intersectRanges(t, n) {
        let r = t.startLineNumber, i = t.startColumn, a = t.endLineNumber, s = t.endColumn, o = n.startLineNumber, u = n.startColumn, l = n.endLineNumber, c = n.endColumn;
        return r < o ? (r = o, i = u) : r === o && (i = Math.max(i, u)), a > l ? (a = l, s = c) : a === l && (s = Math.min(s, c)), r > a || r === a && i > s ? null : new ot(r, i, a, s);
      }
      equalsRange(t) {
        return ot.equalsRange(this, t);
      }
      static equalsRange(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
      }
      getEndPosition() {
        return ot.getEndPosition(this);
      }
      static getEndPosition(t) {
        return new Te(t.endLineNumber, t.endColumn);
      }
      getStartPosition() {
        return ot.getStartPosition(this);
      }
      static getStartPosition(t) {
        return new Te(t.startLineNumber, t.startColumn);
      }
      toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
      }
      setEndPosition(t, n) {
        return new ot(this.startLineNumber, this.startColumn, t, n);
      }
      setStartPosition(t, n) {
        return new ot(t, n, this.endLineNumber, this.endColumn);
      }
      collapseToStart() {
        return ot.collapseToStart(this);
      }
      static collapseToStart(t) {
        return new ot(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
      }
      collapseToEnd() {
        return ot.collapseToEnd(this);
      }
      static collapseToEnd(t) {
        return new ot(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
      }
      delta(t) {
        return new ot(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
      }
      isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
      }
      static fromPositions(t, n = t) {
        return new ot(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static lift(t) {
        return t ? new ot(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
    }, pD = class S0 {
      constructor(t) {
        let n = Bh(t);
        this._defaultValue = n, this._asciiMap = S0._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
      }
      static _createAsciiMap(t) {
        let n = new Uint8Array(256);
        return n.fill(t), n;
      }
      set(t, n) {
        let r = Bh(n);
        t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
      }
      get(t) {
        return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
      }
      clear() {
        this._asciiMap.fill(this._defaultValue), this._map.clear();
      }
    }, ef;
    (function(e) {
      e[e.False = 0] = "False", e[e.True = 1] = "True";
    })(ef || (ef = {}));
    var pe;
    (function(e) {
      e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
    })(pe || (pe = {}));
    var mD = class {
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
    }, gD = class {
      constructor(e) {
        let t = 0, n = pe.Invalid;
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, u] = e[i];
          o > t && (t = o), s > n && (n = s), u > n && (n = u);
        }
        t++, n++;
        let r = new mD(n, t, pe.Invalid);
        for (let i = 0, a = e.length; i < a; i++) {
          let [s, o, u] = e[i];
          r.set(s, o, u);
        }
        this._states = r, this._maxCharCode = t;
      }
      nextState(e, t) {
        return t < 0 || t >= this._maxCharCode ? pe.Invalid : this._states.get(e, t);
      }
    }, Yu = null;
    function ED() {
      return Yu === null && (Yu = new gD([[pe.Start, R.h, pe.H], [pe.Start, R.H, pe.H], [pe.Start, R.f, pe.F], [pe.Start, R.F, pe.F], [pe.H, R.t, pe.HT], [pe.H, R.T, pe.HT], [pe.HT, R.t, pe.HTT], [pe.HT, R.T, pe.HTT], [pe.HTT, R.p, pe.HTTP], [pe.HTT, R.P, pe.HTTP], [pe.HTTP, R.s, pe.BeforeColon], [pe.HTTP, R.S, pe.BeforeColon], [pe.HTTP, R.Colon, pe.AfterColon], [pe.F, R.i, pe.FI], [pe.F, R.I, pe.FI], [pe.FI, R.l, pe.FIL], [pe.FI, R.L, pe.FIL], [pe.FIL, R.e, pe.BeforeColon], [pe.FIL, R.E, pe.BeforeColon], [pe.BeforeColon, R.Colon, pe.AfterColon], [pe.AfterColon, R.Slash, pe.AlmostThere], [pe.AlmostThere, R.Slash, pe.End]])), Yu;
    }
    var Ve;
    (function(e) {
      e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
    })(Ve || (Ve = {}));
    var Sa = null;
    function _D() {
      if (Sa === null) {
        Sa = new pD(Ve.None);
        let e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
        for (let n = 0; n < e.length; n++) Sa.set(e.charCodeAt(n), Ve.ForceTermination);
        let t = ".,;:";
        for (let n = 0; n < t.length; n++) Sa.set(t.charCodeAt(n), Ve.CannotEndIn);
      }
      return Sa;
    }
    var DD = class vc {
      static _createLink(t, n, r, i, a) {
        let s = a - 1;
        do {
          let o = n.charCodeAt(s);
          if (t.get(o) !== Ve.CannotEndIn) break;
          s--;
        } while (s > i);
        if (i > 0) {
          let o = n.charCodeAt(i - 1), u = n.charCodeAt(s);
          (o === R.OpenParen && u === R.CloseParen || o === R.OpenSquareBracket && u === R.CloseSquareBracket || o === R.OpenCurlyBrace && u === R.CloseCurlyBrace) && s--;
        }
        return { range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: s + 2 }, url: n.substring(i, s + 1) };
      }
      static computeLinks(t, n = ED()) {
        let r = _D(), i = [];
        for (let a = 1, s = t.getLineCount(); a <= s; a++) {
          let o = t.getLineContent(a), u = o.length, l = 0, c = 0, f = 0, p = pe.Start, m = !1, g = !1, _ = !1, w = !1;
          for (; l < u; ) {
            let S = !1, F = o.charCodeAt(l);
            if (p === pe.Accept) {
              let C;
              switch (F) {
                case R.OpenParen:
                  m = !0, C = Ve.None;
                  break;
                case R.CloseParen:
                  C = m ? Ve.None : Ve.ForceTermination;
                  break;
                case R.OpenSquareBracket:
                  _ = !0, g = !0, C = Ve.None;
                  break;
                case R.CloseSquareBracket:
                  _ = !1, C = g ? Ve.None : Ve.ForceTermination;
                  break;
                case R.OpenCurlyBrace:
                  w = !0, C = Ve.None;
                  break;
                case R.CloseCurlyBrace:
                  C = w ? Ve.None : Ve.ForceTermination;
                  break;
                case R.SingleQuote:
                case R.DoubleQuote:
                case R.BackTick:
                  f === F ? C = Ve.ForceTermination : f === R.SingleQuote || f === R.DoubleQuote || f === R.BackTick ? C = Ve.None : C = Ve.ForceTermination;
                  break;
                case R.Asterisk:
                  C = f === R.Asterisk ? Ve.ForceTermination : Ve.None;
                  break;
                case R.Pipe:
                  C = f === R.Pipe ? Ve.ForceTermination : Ve.None;
                  break;
                case R.Space:
                  C = _ ? Ve.None : Ve.ForceTermination;
                  break;
                default:
                  C = r.get(F);
              }
              C === Ve.ForceTermination && (i.push(vc._createLink(r, o, a, c, l)), S = !0);
            } else if (p === pe.End) {
              let C;
              F === R.OpenSquareBracket ? (g = !0, C = Ve.None) : C = r.get(F), C === Ve.ForceTermination ? S = !0 : p = pe.Accept;
            } else p = n.nextState(p, F), p === pe.Invalid && (S = !0);
            S && (p = pe.Start, m = !1, g = !1, w = !1, c = l + 1, f = F), l++;
          }
          p === pe.Accept && i.push(vc._createLink(r, o, a, c, u));
        }
        return i;
      }
    };
    function vD(e) {
      return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : DD.computeLinks(e);
    }
    var bD = (ui = class {
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
    }, ui.INSTANCE = new ui(), ui), b;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(b || (b = {}));
    var T;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
    })(T || (T = {}));
    var zu = class {
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
    }, Vs = new zu(), Xu = new zu(), Ju = new zu(), yD = new Array(230), ND = /* @__PURE__ */ Object.create(null), CD = /* @__PURE__ */ Object.create(null), Qu = [];
    for (let e = 0; e <= T.MAX_VALUE; e++) b.DependsOnKbLayout;
    for (let e = 0; e <= b.MAX_VALUE; e++) Qu[e] = T.DependsOnKbLayout;
    (function() {
      let e = "", t = [[1, T.None, "None", b.Unknown, "unknown", 0, "VK_UNKNOWN", e, e], [1, T.Hyper, "Hyper", b.Unknown, e, 0, e, e, e], [1, T.Super, "Super", b.Unknown, e, 0, e, e, e], [1, T.Fn, "Fn", b.Unknown, e, 0, e, e, e], [1, T.FnLock, "FnLock", b.Unknown, e, 0, e, e, e], [1, T.Suspend, "Suspend", b.Unknown, e, 0, e, e, e], [1, T.Resume, "Resume", b.Unknown, e, 0, e, e, e], [1, T.Turbo, "Turbo", b.Unknown, e, 0, e, e, e], [1, T.Sleep, "Sleep", b.Unknown, e, 0, "VK_SLEEP", e, e], [1, T.WakeUp, "WakeUp", b.Unknown, e, 0, e, e, e], [0, T.KeyA, "KeyA", b.KeyA, "A", 65, "VK_A", e, e], [0, T.KeyB, "KeyB", b.KeyB, "B", 66, "VK_B", e, e], [0, T.KeyC, "KeyC", b.KeyC, "C", 67, "VK_C", e, e], [0, T.KeyD, "KeyD", b.KeyD, "D", 68, "VK_D", e, e], [0, T.KeyE, "KeyE", b.KeyE, "E", 69, "VK_E", e, e], [0, T.KeyF, "KeyF", b.KeyF, "F", 70, "VK_F", e, e], [0, T.KeyG, "KeyG", b.KeyG, "G", 71, "VK_G", e, e], [0, T.KeyH, "KeyH", b.KeyH, "H", 72, "VK_H", e, e], [0, T.KeyI, "KeyI", b.KeyI, "I", 73, "VK_I", e, e], [0, T.KeyJ, "KeyJ", b.KeyJ, "J", 74, "VK_J", e, e], [0, T.KeyK, "KeyK", b.KeyK, "K", 75, "VK_K", e, e], [0, T.KeyL, "KeyL", b.KeyL, "L", 76, "VK_L", e, e], [0, T.KeyM, "KeyM", b.KeyM, "M", 77, "VK_M", e, e], [0, T.KeyN, "KeyN", b.KeyN, "N", 78, "VK_N", e, e], [0, T.KeyO, "KeyO", b.KeyO, "O", 79, "VK_O", e, e], [0, T.KeyP, "KeyP", b.KeyP, "P", 80, "VK_P", e, e], [0, T.KeyQ, "KeyQ", b.KeyQ, "Q", 81, "VK_Q", e, e], [0, T.KeyR, "KeyR", b.KeyR, "R", 82, "VK_R", e, e], [0, T.KeyS, "KeyS", b.KeyS, "S", 83, "VK_S", e, e], [0, T.KeyT, "KeyT", b.KeyT, "T", 84, "VK_T", e, e], [0, T.KeyU, "KeyU", b.KeyU, "U", 85, "VK_U", e, e], [0, T.KeyV, "KeyV", b.KeyV, "V", 86, "VK_V", e, e], [0, T.KeyW, "KeyW", b.KeyW, "W", 87, "VK_W", e, e], [0, T.KeyX, "KeyX", b.KeyX, "X", 88, "VK_X", e, e], [0, T.KeyY, "KeyY", b.KeyY, "Y", 89, "VK_Y", e, e], [0, T.KeyZ, "KeyZ", b.KeyZ, "Z", 90, "VK_Z", e, e], [0, T.Digit1, "Digit1", b.Digit1, "1", 49, "VK_1", e, e], [0, T.Digit2, "Digit2", b.Digit2, "2", 50, "VK_2", e, e], [0, T.Digit3, "Digit3", b.Digit3, "3", 51, "VK_3", e, e], [0, T.Digit4, "Digit4", b.Digit4, "4", 52, "VK_4", e, e], [0, T.Digit5, "Digit5", b.Digit5, "5", 53, "VK_5", e, e], [0, T.Digit6, "Digit6", b.Digit6, "6", 54, "VK_6", e, e], [0, T.Digit7, "Digit7", b.Digit7, "7", 55, "VK_7", e, e], [0, T.Digit8, "Digit8", b.Digit8, "8", 56, "VK_8", e, e], [0, T.Digit9, "Digit9", b.Digit9, "9", 57, "VK_9", e, e], [0, T.Digit0, "Digit0", b.Digit0, "0", 48, "VK_0", e, e], [1, T.Enter, "Enter", b.Enter, "Enter", 13, "VK_RETURN", e, e], [1, T.Escape, "Escape", b.Escape, "Escape", 27, "VK_ESCAPE", e, e], [1, T.Backspace, "Backspace", b.Backspace, "Backspace", 8, "VK_BACK", e, e], [1, T.Tab, "Tab", b.Tab, "Tab", 9, "VK_TAB", e, e], [1, T.Space, "Space", b.Space, "Space", 32, "VK_SPACE", e, e], [0, T.Minus, "Minus", b.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"], [0, T.Equal, "Equal", b.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"], [0, T.BracketLeft, "BracketLeft", b.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"], [0, T.BracketRight, "BracketRight", b.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"], [0, T.Backslash, "Backslash", b.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"], [0, T.IntlHash, "IntlHash", b.Unknown, e, 0, e, e, e], [0, T.Semicolon, "Semicolon", b.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"], [0, T.Quote, "Quote", b.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"], [0, T.Backquote, "Backquote", b.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"], [0, T.Comma, "Comma", b.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"], [0, T.Period, "Period", b.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"], [0, T.Slash, "Slash", b.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"], [1, T.CapsLock, "CapsLock", b.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e], [1, T.F1, "F1", b.F1, "F1", 112, "VK_F1", e, e], [1, T.F2, "F2", b.F2, "F2", 113, "VK_F2", e, e], [1, T.F3, "F3", b.F3, "F3", 114, "VK_F3", e, e], [1, T.F4, "F4", b.F4, "F4", 115, "VK_F4", e, e], [1, T.F5, "F5", b.F5, "F5", 116, "VK_F5", e, e], [1, T.F6, "F6", b.F6, "F6", 117, "VK_F6", e, e], [1, T.F7, "F7", b.F7, "F7", 118, "VK_F7", e, e], [1, T.F8, "F8", b.F8, "F8", 119, "VK_F8", e, e], [1, T.F9, "F9", b.F9, "F9", 120, "VK_F9", e, e], [1, T.F10, "F10", b.F10, "F10", 121, "VK_F10", e, e], [1, T.F11, "F11", b.F11, "F11", 122, "VK_F11", e, e], [1, T.F12, "F12", b.F12, "F12", 123, "VK_F12", e, e], [1, T.PrintScreen, "PrintScreen", b.Unknown, e, 0, e, e, e], [1, T.ScrollLock, "ScrollLock", b.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e], [1, T.Pause, "Pause", b.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e], [1, T.Insert, "Insert", b.Insert, "Insert", 45, "VK_INSERT", e, e], [1, T.Home, "Home", b.Home, "Home", 36, "VK_HOME", e, e], [1, T.PageUp, "PageUp", b.PageUp, "PageUp", 33, "VK_PRIOR", e, e], [1, T.Delete, "Delete", b.Delete, "Delete", 46, "VK_DELETE", e, e], [1, T.End, "End", b.End, "End", 35, "VK_END", e, e], [1, T.PageDown, "PageDown", b.PageDown, "PageDown", 34, "VK_NEXT", e, e], [1, T.ArrowRight, "ArrowRight", b.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e], [1, T.ArrowLeft, "ArrowLeft", b.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e], [1, T.ArrowDown, "ArrowDown", b.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e], [1, T.ArrowUp, "ArrowUp", b.UpArrow, "UpArrow", 38, "VK_UP", "Up", e], [1, T.NumLock, "NumLock", b.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e], [1, T.NumpadDivide, "NumpadDivide", b.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e], [1, T.NumpadMultiply, "NumpadMultiply", b.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e], [1, T.NumpadSubtract, "NumpadSubtract", b.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e], [1, T.NumpadAdd, "NumpadAdd", b.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e], [1, T.NumpadEnter, "NumpadEnter", b.Enter, e, 0, e, e, e], [1, T.Numpad1, "Numpad1", b.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e], [1, T.Numpad2, "Numpad2", b.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e], [1, T.Numpad3, "Numpad3", b.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e], [1, T.Numpad4, "Numpad4", b.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e], [1, T.Numpad5, "Numpad5", b.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e], [1, T.Numpad6, "Numpad6", b.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e], [1, T.Numpad7, "Numpad7", b.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e], [1, T.Numpad8, "Numpad8", b.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e], [1, T.Numpad9, "Numpad9", b.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e], [1, T.Numpad0, "Numpad0", b.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e], [1, T.NumpadDecimal, "NumpadDecimal", b.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e], [0, T.IntlBackslash, "IntlBackslash", b.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e], [1, T.ContextMenu, "ContextMenu", b.ContextMenu, "ContextMenu", 93, e, e, e], [1, T.Power, "Power", b.Unknown, e, 0, e, e, e], [1, T.NumpadEqual, "NumpadEqual", b.Unknown, e, 0, e, e, e], [1, T.F13, "F13", b.F13, "F13", 124, "VK_F13", e, e], [1, T.F14, "F14", b.F14, "F14", 125, "VK_F14", e, e], [1, T.F15, "F15", b.F15, "F15", 126, "VK_F15", e, e], [1, T.F16, "F16", b.F16, "F16", 127, "VK_F16", e, e], [1, T.F17, "F17", b.F17, "F17", 128, "VK_F17", e, e], [1, T.F18, "F18", b.F18, "F18", 129, "VK_F18", e, e], [1, T.F19, "F19", b.F19, "F19", 130, "VK_F19", e, e], [1, T.F20, "F20", b.F20, "F20", 131, "VK_F20", e, e], [1, T.F21, "F21", b.F21, "F21", 132, "VK_F21", e, e], [1, T.F22, "F22", b.F22, "F22", 133, "VK_F22", e, e], [1, T.F23, "F23", b.F23, "F23", 134, "VK_F23", e, e], [1, T.F24, "F24", b.F24, "F24", 135, "VK_F24", e, e], [1, T.Open, "Open", b.Unknown, e, 0, e, e, e], [1, T.Help, "Help", b.Unknown, e, 0, e, e, e], [1, T.Select, "Select", b.Unknown, e, 0, e, e, e], [1, T.Again, "Again", b.Unknown, e, 0, e, e, e], [1, T.Undo, "Undo", b.Unknown, e, 0, e, e, e], [1, T.Cut, "Cut", b.Unknown, e, 0, e, e, e], [1, T.Copy, "Copy", b.Unknown, e, 0, e, e, e], [1, T.Paste, "Paste", b.Unknown, e, 0, e, e, e], [1, T.Find, "Find", b.Unknown, e, 0, e, e, e], [1, T.AudioVolumeMute, "AudioVolumeMute", b.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e], [1, T.AudioVolumeUp, "AudioVolumeUp", b.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e], [1, T.AudioVolumeDown, "AudioVolumeDown", b.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e], [1, T.NumpadComma, "NumpadComma", b.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e], [0, T.IntlRo, "IntlRo", b.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e], [1, T.KanaMode, "KanaMode", b.Unknown, e, 0, e, e, e], [0, T.IntlYen, "IntlYen", b.Unknown, e, 0, e, e, e], [1, T.Convert, "Convert", b.Unknown, e, 0, e, e, e], [1, T.NonConvert, "NonConvert", b.Unknown, e, 0, e, e, e], [1, T.Lang1, "Lang1", b.Unknown, e, 0, e, e, e], [1, T.Lang2, "Lang2", b.Unknown, e, 0, e, e, e], [1, T.Lang3, "Lang3", b.Unknown, e, 0, e, e, e], [1, T.Lang4, "Lang4", b.Unknown, e, 0, e, e, e], [1, T.Lang5, "Lang5", b.Unknown, e, 0, e, e, e], [1, T.Abort, "Abort", b.Unknown, e, 0, e, e, e], [1, T.Props, "Props", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenLeft, "NumpadParenLeft", b.Unknown, e, 0, e, e, e], [1, T.NumpadParenRight, "NumpadParenRight", b.Unknown, e, 0, e, e, e], [1, T.NumpadBackspace, "NumpadBackspace", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryStore, "NumpadMemoryStore", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryRecall, "NumpadMemoryRecall", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryClear, "NumpadMemoryClear", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemoryAdd, "NumpadMemoryAdd", b.Unknown, e, 0, e, e, e], [1, T.NumpadMemorySubtract, "NumpadMemorySubtract", b.Unknown, e, 0, e, e, e], [1, T.NumpadClear, "NumpadClear", b.Clear, "Clear", 12, "VK_CLEAR", e, e], [1, T.NumpadClearEntry, "NumpadClearEntry", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e], [1, T.None, e, b.Shift, "Shift", 16, "VK_SHIFT", e, e], [1, T.None, e, b.Alt, "Alt", 18, "VK_MENU", e, e], [1, T.None, e, b.Meta, "Meta", 91, "VK_COMMAND", e, e], [1, T.ControlLeft, "ControlLeft", b.Ctrl, e, 0, "VK_LCONTROL", e, e], [1, T.ShiftLeft, "ShiftLeft", b.Shift, e, 0, "VK_LSHIFT", e, e], [1, T.AltLeft, "AltLeft", b.Alt, e, 0, "VK_LMENU", e, e], [1, T.MetaLeft, "MetaLeft", b.Meta, e, 0, "VK_LWIN", e, e], [1, T.ControlRight, "ControlRight", b.Ctrl, e, 0, "VK_RCONTROL", e, e], [1, T.ShiftRight, "ShiftRight", b.Shift, e, 0, "VK_RSHIFT", e, e], [1, T.AltRight, "AltRight", b.Alt, e, 0, "VK_RMENU", e, e], [1, T.MetaRight, "MetaRight", b.Meta, e, 0, "VK_RWIN", e, e], [1, T.BrightnessUp, "BrightnessUp", b.Unknown, e, 0, e, e, e], [1, T.BrightnessDown, "BrightnessDown", b.Unknown, e, 0, e, e, e], [1, T.MediaPlay, "MediaPlay", b.Unknown, e, 0, e, e, e], [1, T.MediaRecord, "MediaRecord", b.Unknown, e, 0, e, e, e], [1, T.MediaFastForward, "MediaFastForward", b.Unknown, e, 0, e, e, e], [1, T.MediaRewind, "MediaRewind", b.Unknown, e, 0, e, e, e], [1, T.MediaTrackNext, "MediaTrackNext", b.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e], [1, T.MediaTrackPrevious, "MediaTrackPrevious", b.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e], [1, T.MediaStop, "MediaStop", b.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e], [1, T.Eject, "Eject", b.Unknown, e, 0, e, e, e], [1, T.MediaPlayPause, "MediaPlayPause", b.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e], [1, T.MediaSelect, "MediaSelect", b.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e], [1, T.LaunchMail, "LaunchMail", b.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e], [1, T.LaunchApp2, "LaunchApp2", b.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e], [1, T.LaunchApp1, "LaunchApp1", b.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e], [1, T.SelectTask, "SelectTask", b.Unknown, e, 0, e, e, e], [1, T.LaunchScreenSaver, "LaunchScreenSaver", b.Unknown, e, 0, e, e, e], [1, T.BrowserSearch, "BrowserSearch", b.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e], [1, T.BrowserHome, "BrowserHome", b.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e], [1, T.BrowserBack, "BrowserBack", b.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e], [1, T.BrowserForward, "BrowserForward", b.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e], [1, T.BrowserStop, "BrowserStop", b.Unknown, e, 0, "VK_BROWSER_STOP", e, e], [1, T.BrowserRefresh, "BrowserRefresh", b.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e], [1, T.BrowserFavorites, "BrowserFavorites", b.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e], [1, T.ZoomToggle, "ZoomToggle", b.Unknown, e, 0, e, e, e], [1, T.MailReply, "MailReply", b.Unknown, e, 0, e, e, e], [1, T.MailForward, "MailForward", b.Unknown, e, 0, e, e, e], [1, T.MailSend, "MailSend", b.Unknown, e, 0, e, e, e], [1, T.None, e, b.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e], [1, T.None, e, b.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e], [1, T.None, e, b.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANGUL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_JUNJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_FINAL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HANJA", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_KANJI", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONCONVERT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ACCEPT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_MODECHANGE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SELECT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PRINT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXECUTE", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_SNAPSHOT", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_HELP", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_APPS", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PROCESSKEY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PACKET", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ATTN", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_CRSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EXSEL", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_EREOF", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PLAY", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_ZOOM", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_NONAME", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_PA1", e, e], [1, T.None, e, b.Unknown, e, 0, "VK_OEM_CLEAR", e, e]], n = [], r = [];
      for (let i of t) {
        let [a, s, o, u, l, c, f, p, m] = i;
        if (r[s] || (r[s] = !0, ND[o] = s, CD[o.toLowerCase()] = s, a && u !== b.Unknown && u !== b.Enter && u !== b.Ctrl && u !== b.Shift && u !== b.Alt && u !== b.Meta && (Qu[u] = s)), !n[u]) {
          if (n[u] = !0, !l) throw new Error(`String representation missing for key code ${u} around scan code ${o}`);
          Vs.define(u, l), Xu.define(u, p || l), Ju.define(u, m || p || l);
        }
        c && (yD[c] = u);
      }
      Qu[b.Enter] = T.Enter;
    })();
    var tf;
    (function(e) {
      function t(o) {
        return Vs.keyCodeToStr(o);
      }
      e.toString = t;
      function n(o) {
        return Vs.strToKeyCode(o);
      }
      e.fromString = n;
      function r(o) {
        return Xu.keyCodeToStr(o);
      }
      e.toUserSettingsUS = r;
      function i(o) {
        return Ju.keyCodeToStr(o);
      }
      e.toUserSettingsGeneral = i;
      function a(o) {
        return Xu.strToKeyCode(o) || Ju.strToKeyCode(o);
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
        return Vs.keyCodeToStr(o);
      }
      e.toElectronAccelerator = s;
    })(tf || (tf = {}));
    var Ii;
    (function(e) {
      e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
    })(Ii || (Ii = {}));
    function TD(e, t) {
      let n = (t & 65535) << 16 >>> 0;
      return (e | n) >>> 0;
    }
    var Zu;
    (function(e) {
      e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart";
    })(Zu || (Zu = {}));
    var jr, el = globalThis.vscode;
    if (typeof el < "u" && typeof el.process < "u") {
      let e = el.process;
      jr = { get platform() {
        return e.platform;
      }, get arch() {
        return e.arch;
      }, get env() {
        return e.env;
      }, cwd() {
        return e.cwd();
      } };
    } else typeof process < "u" && typeof process?.versions?.node == "string" ? jr = { get platform() {
      return process.platform;
    }, get arch() {
      return process.arch;
    }, get env() {
      return process.env;
    }, cwd() {
      return process.env.VSCODE_CWD || process.cwd();
    } } : jr = { get platform() {
      return Ai ? "win32" : k_ ? "darwin" : "linux";
    }, get arch() {
    }, get env() {
      return {};
    }, cwd() {
      return "/";
    } };
    var $s = jr.cwd, wD = jr.env, AD = jr.platform;
    jr.arch;
    var SD = 65, LD = 97, FD = 90, ID = 122, qr = 46, _t = 47, qt = 92, Qn = 58, RD = 63, nf = class extends Error {
      constructor(e, t, n) {
        let r;
        typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
        let i = e.indexOf(".") !== -1 ? "property" : "argument", a = `The "${e}" ${i} ${r} of type ${t}`;
        a += `. Received type ${typeof n}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
      }
    };
    function OD(e, t) {
      if (e === null || typeof e != "object") throw new nf(t, "Object", e);
    }
    function Qe(e, t) {
      if (typeof e != "string") throw new nf(t, "string", e);
    }
    var Dn = AD === "win32";
    function ye(e) {
      return e === _t || e === qt;
    }
    function tl(e) {
      return e === _t;
    }
    function Zn(e) {
      return e >= SD && e <= FD || e >= LD && e <= ID;
    }
    function Ks(e, t, n, r) {
      let i = "", a = 0, s = -1, o = 0, u = 0;
      for (let l = 0; l <= e.length; ++l) {
        if (l < e.length) u = e.charCodeAt(l);
        else {
          if (r(u)) break;
          u = _t;
        }
        if (r(u)) {
          if (!(s === l - 1 || o === 1)) if (o === 2) {
            if (i.length < 2 || a !== 2 || i.charCodeAt(i.length - 1) !== qr || i.charCodeAt(i.length - 2) !== qr) {
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
        } else u === qr && o !== -1 ? ++o : o = -1;
      }
      return i;
    }
    function xD(e) {
      return e ? `${e[0] === "." ? "" : "."}${e}` : "";
    }
    function rf(e, t) {
      OD(t, "pathObject");
      let n = t.dir || t.root, r = t.base || `${t.name || ""}${xD(t.ext)}`;
      return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
    }
    var Dt = { resolve(...e) {
      let t = "", n = "", r = !1;
      for (let i = e.length - 1; i >= -1; i--) {
        let a;
        if (i >= 0) {
          if (a = e[i], Qe(a, `paths[${i}]`), a.length === 0) continue;
        } else t.length === 0 ? a = $s() : (a = wD[`=${t}`] || $s(), (a === void 0 || a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === qt) && (a = `${t}\\`));
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
        else Zn(c) && a.charCodeAt(1) === Qn && (u = a.slice(0, 2), o = 2, s > 2 && ye(a.charCodeAt(2)) && (l = !0, o = 3));
        if (u.length > 0) if (t.length > 0) {
          if (u.toLowerCase() !== t.toLowerCase()) continue;
        } else t = u;
        if (r) {
          if (t.length > 0) break;
        } else if (n = `${a.slice(o)}\\${n}`, r = l, l && t.length > 0) break;
      }
      return n = Ks(n, !r, "\\", ye), r ? `${t}\\${n}` : `${t}${n}` || ".";
    }, normalize(e) {
      Qe(e, "path");
      let t = e.length;
      if (t === 0) return ".";
      let n = 0, r, i = !1, a = e.charCodeAt(0);
      if (t === 1) return tl(a) ? "\\" : e;
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
      else Zn(a) && e.charCodeAt(1) === Qn && (r = e.slice(0, 2), n = 2, t > 2 && ye(e.charCodeAt(2)) && (i = !0, n = 3));
      let s = n < t ? Ks(e.slice(n), !i, "\\", ye) : "";
      if (s.length === 0 && !i && (s = "."), s.length > 0 && ye(e.charCodeAt(t - 1)) && (s += "\\"), !i && r === void 0 && e.includes(":")) {
        if (s.length >= 2 && Zn(s.charCodeAt(0)) && s.charCodeAt(1) === Qn) return `.\\${s}`;
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
      return ye(n) || t > 2 && Zn(n) && e.charCodeAt(1) === Qn && ye(e.charCodeAt(2));
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
      return Dt.normalize(t);
    }, relative(e, t) {
      if (Qe(e, "from"), Qe(t, "to"), e === t) return "";
      let n = Dt.resolve(e), r = Dt.resolve(t);
      if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
      if (n.length !== e.length || r.length !== t.length) {
        let g = n.split("\\"), _ = r.split("\\");
        g[g.length - 1] === "" && g.pop(), _[_.length - 1] === "" && _.pop();
        let w = g.length, S = _.length, F = w < S ? w : S, C;
        for (C = 0; C < F && g[C].toLowerCase() === _[C].toLowerCase(); C++) ;
        return C === 0 ? r : C === F ? S > F ? _.slice(C).join("\\") : w > F ? "..\\".repeat(w - 1 - C) + ".." : "" : "..\\".repeat(w - C) + _.slice(C).join("\\");
      }
      let i = 0;
      for (; i < e.length && e.charCodeAt(i) === qt; ) i++;
      let a = e.length;
      for (; a - 1 > i && e.charCodeAt(a - 1) === qt; ) a--;
      let s = a - i, o = 0;
      for (; o < t.length && t.charCodeAt(o) === qt; ) o++;
      let u = t.length;
      for (; u - 1 > o && t.charCodeAt(u - 1) === qt; ) u--;
      let l = u - o, c = s < l ? s : l, f = -1, p = 0;
      for (; p < c; p++) {
        let g = e.charCodeAt(i + p);
        if (g !== t.charCodeAt(o + p)) break;
        g === qt && (f = p);
      }
      if (p !== c) {
        if (f === -1) return r;
      } else {
        if (l > c) {
          if (t.charCodeAt(o + p) === qt) return r.slice(o + p + 1);
          if (p === 2) return r.slice(o + p);
        }
        s > c && (e.charCodeAt(i + p) === qt ? f = p : p === 2 && (f = 3)), f === -1 && (f = 0);
      }
      let m = "";
      for (p = i + f + 1; p <= a; ++p) (p === a || e.charCodeAt(p) === qt) && (m += m.length === 0 ? ".." : "\\..");
      return o += f, m.length > 0 ? `${m}${r.slice(o, u)}` : (r.charCodeAt(o) === qt && ++o, r.slice(o, u));
    }, toNamespacedPath(e) {
      if (typeof e != "string" || e.length === 0) return e;
      let t = Dt.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === qt) {
        if (t.charCodeAt(1) === qt) {
          let n = t.charCodeAt(2);
          if (n !== RD && n !== qr) return `\\\\?\\UNC\\${t.slice(2)}`;
        }
      } else if (Zn(t.charCodeAt(0)) && t.charCodeAt(1) === Qn && t.charCodeAt(2) === qt) return `\\\\?\\${t}`;
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
      } else Zn(i) && e.charCodeAt(1) === Qn && (n = t > 2 && ye(e.charCodeAt(2)) ? 3 : 2, r = n);
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
      if (e.length >= 2 && Zn(e.charCodeAt(0)) && e.charCodeAt(1) === Qn && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
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
      e.length >= 2 && e.charCodeAt(1) === Qn && Zn(e.charCodeAt(0)) && (t = r = 2);
      for (let o = e.length - 1; o >= t; --o) {
        let u = e.charCodeAt(o);
        if (ye(u)) {
          if (!a) {
            r = o + 1;
            break;
          }
          continue;
        }
        i === -1 && (a = !1, i = o + 1), u === qr ? n === -1 ? n = o : s !== 1 && (s = 1) : n !== -1 && (s = -1);
      }
      return n === -1 || i === -1 || s === 0 || s === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
    }, format: rf.bind(null, "\\"), parse(e) {
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
      } else if (Zn(i) && e.charCodeAt(1) === Qn) {
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
        o === -1 && (u = !1, o = l + 1), i === qr ? a === -1 ? a = l : c !== 1 && (c = 1) : a !== -1 && (c = -1);
      }
      return o !== -1 && (a === -1 || c === 0 || c === 1 && a === o - 1 && a === s + 1 ? t.base = t.name = e.slice(s, o) : (t.name = e.slice(s, a), t.base = e.slice(s, o), t.ext = e.slice(a, o))), s > 0 && s !== r ? t.dir = e.slice(0, s - 1) : t.dir = t.root, t;
    }, sep: "\\", delimiter: ";", win32: null, posix: null }, kD = (() => {
      if (Dn) {
        let e = /\\/g;
        return () => {
          let t = $s().replace(e, "/");
          return t.slice(t.indexOf("/"));
        };
      }
      return () => $s();
    })(), $e = { resolve(...e) {
      let t = "", n = !1;
      for (let r = e.length - 1; r >= 0 && !n; r--) {
        let i = e[r];
        Qe(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === _t);
      }
      if (!n) {
        let r = kD();
        t = `${r}/${t}`, n = r.charCodeAt(0) === _t;
      }
      return t = Ks(t, !n, "/", tl), n ? `/${t}` : t.length > 0 ? t : ".";
    }, normalize(e) {
      if (Qe(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === _t, n = e.charCodeAt(e.length - 1) === _t;
      return e = Ks(e, !t, "/", tl), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    }, isAbsolute(e) {
      return Qe(e, "path"), e.length > 0 && e.charCodeAt(0) === _t;
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
        f === _t && (u = l);
      }
      if (l === o) if (s > o) {
        if (t.charCodeAt(a + l) === _t) return t.slice(a + l + 1);
        if (l === 0) return t.slice(a + l);
      } else i > o && (e.charCodeAt(n + l) === _t ? u = l : l === 0 && (u = 0));
      let c = "";
      for (l = n + u + 1; l <= r; ++l) (l === r || e.charCodeAt(l) === _t) && (c += c.length === 0 ? ".." : "/..");
      return `${c}${t.slice(a + u)}`;
    }, toNamespacedPath(e) {
      return e;
    }, dirname(e) {
      if (Qe(e, "path"), e.length === 0) return ".";
      let t = e.charCodeAt(0) === _t, n = -1, r = !0;
      for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === _t) {
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
          if (u === _t) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else o === -1 && (i = !1, o = a + 1), s >= 0 && (u === t.charCodeAt(s) ? --s === -1 && (r = a) : (s = -1, r = o));
        }
        return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (a = e.length - 1; a >= 0; --a) if (e.charCodeAt(a) === _t) {
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
    }, format: rf.bind(null, "/"), parse(e) {
      Qe(e, "path");
      let t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      let n = e.charCodeAt(0) === _t, r;
      n ? (t.root = "/", r = 1) : r = 0;
      let i = -1, a = 0, s = -1, o = !0, u = e.length - 1, l = 0;
      for (; u >= r; --u) {
        let c = e.charCodeAt(u);
        if (c === _t) {
          if (!o) {
            a = u + 1;
            break;
          }
          continue;
        }
        s === -1 && (o = !1, s = u + 1), c === qr ? i === -1 ? i = u : l !== 1 && (l = 1) : i !== -1 && (l = -1);
      }
      if (s !== -1) {
        let c = a === 0 && n ? 1 : a;
        i === -1 || l === 0 || l === 1 && i === s - 1 && i === a + 1 ? t.base = t.name = e.slice(c, s) : (t.name = e.slice(c, i), t.base = e.slice(c, s), t.ext = e.slice(i, s));
      }
      return a > 0 ? t.dir = e.slice(0, a - 1) : n && (t.dir = "/"), t;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    $e.win32 = Dt.win32 = Dt, $e.posix = Dt.posix = $e;
    var MD = Dn ? Dt.normalize : $e.normalize;
    Dn ? Dt.isAbsolute : $e.isAbsolute;
    var UD = Dn ? Dt.join : $e.join, PD = Dn ? Dt.resolve : $e.resolve, BD = Dn ? Dt.relative : $e.relative, VD = Dn ? Dt.dirname : $e.dirname;
    Dn ? Dt.basename : $e.basename, Dn ? Dt.extname : $e.extname, Dn ? Dt.parse : $e.parse;
    var js = Dn ? Dt.sep : $e.sep, $D = /^\w[\w\d+.-]*$/, KD = /^\//, jD = /^\/\//;
    function qD(e, t) {
      if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
      if (e.scheme && !$D.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (e.path) {
        if (e.authority) {
          if (!KD.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (jD.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    function GD(e, t) {
      return !e && !t ? "file" : e;
    }
    function HD(e, t) {
      switch (e) {
        case "https":
        case "http":
        case "file":
          t ? t[0] !== vn && (t = vn + t) : t = vn;
          break;
      }
      return t;
    }
    var Ke = "", vn = "/", WD = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Gt = class Io {
      static isUri(t) {
        return t instanceof Io ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
      }
      constructor(t, n, r, i, a, s = !1) {
        typeof t == "object" ? (this.scheme = t.scheme || Ke, this.authority = t.authority || Ke, this.path = t.path || Ke, this.query = t.query || Ke, this.fragment = t.fragment || Ke) : (this.scheme = GD(t, s), this.authority = n || Ke, this.path = HD(this.scheme, r || Ke), this.query = i || Ke, this.fragment = a || Ke, qD(this, s));
      }
      get fsPath() {
        return qs(this, !1);
      }
      with(t) {
        if (!t) return this;
        let { scheme: n, authority: r, path: i, query: a, fragment: s } = t;
        return n === void 0 ? n = this.scheme : n === null && (n = Ke), r === void 0 ? r = this.authority : r === null && (r = Ke), i === void 0 ? i = this.path : i === null && (i = Ke), a === void 0 ? a = this.query : a === null && (a = Ke), s === void 0 ? s = this.fragment : s === null && (s = Ke), n === this.scheme && r === this.authority && i === this.path && a === this.query && s === this.fragment ? this : new Ri(n, r, i, a, s);
      }
      static parse(t, n = !1) {
        let r = WD.exec(t);
        return r ? new Ri(r[2] || Ke, Gs(r[4] || Ke), Gs(r[5] || Ke), Gs(r[7] || Ke), Gs(r[9] || Ke), n) : new Ri(Ke, Ke, Ke, Ke, Ke);
      }
      static file(t) {
        let n = Ke;
        if (Ai && (t = t.replace(/\\/g, vn)), t[0] === vn && t[1] === vn) {
          let r = t.indexOf(vn, 2);
          r === -1 ? (n = t.substring(2), t = vn) : (n = t.substring(2, r), t = t.substring(r) || vn);
        }
        return new Ri("file", n, t, Ke, Ke);
      }
      static from(t, n) {
        return new Ri(t.scheme, t.authority, t.path, t.query, t.fragment, n);
      }
      static joinPath(t, ...n) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let r;
        return Ai && t.scheme === "file" ? r = Io.file(Dt.join(qs(t, !0), ...n)).path : r = $e.join(t.path, ...n), t.with({ path: r });
      }
      toString(t = !1) {
        return nl(this, t);
      }
      toJSON() {
        return this;
      }
      static revive(t) {
        if (t) {
          if (t instanceof Io) return t;
          {
            let n = new Ri(t);
            return n._formatted = t.external ?? null, n._fsPath = t._sep === af ? t.fsPath ?? null : null, n;
          }
        } else return t;
      }
      [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
      }
    }, af = Ai ? 1 : void 0, Ri = class extends Gt {
      constructor() {
        super(...arguments), this._formatted = null, this._fsPath = null;
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = qs(this, !1)), this._fsPath;
      }
      toString(e = !1) {
        return e ? nl(this, !0) : (this._formatted || (this._formatted = nl(this, !1)), this._formatted);
      }
      toJSON() {
        let e = { $mid: Zu.Uri };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = af), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }
    }, sf = { [R.Colon]: "%3A", [R.Slash]: "%2F", [R.QuestionMark]: "%3F", [R.Hash]: "%23", [R.OpenSquareBracket]: "%5B", [R.CloseSquareBracket]: "%5D", [R.AtSign]: "%40", [R.ExclamationMark]: "%21", [R.DollarSign]: "%24", [R.Ampersand]: "%26", [R.SingleQuote]: "%27", [R.OpenParen]: "%28", [R.CloseParen]: "%29", [R.Asterisk]: "%2A", [R.Plus]: "%2B", [R.Comma]: "%2C", [R.Semicolon]: "%3B", [R.Equals]: "%3D", [R.Space]: "%20" };
    function of(e, t, n) {
      let r, i = -1;
      for (let a = 0; a < e.length; a++) {
        let s = e.charCodeAt(a);
        if (s >= R.a && s <= R.z || s >= R.A && s <= R.Z || s >= R.Digit0 && s <= R.Digit9 || s === R.Dash || s === R.Period || s === R.Underline || s === R.Tilde || t && s === R.Slash || n && s === R.OpenSquareBracket || n && s === R.CloseSquareBracket || n && s === R.Colon) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
        else {
          r === void 0 && (r = e.substr(0, a));
          let o = sf[s];
          o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += o) : i === -1 && (i = a);
        }
      }
      return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
    }
    function YD(e) {
      let t;
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        r === R.Hash || r === R.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += sf[r]) : t !== void 0 && (t += e[n]);
      }
      return t !== void 0 ? t : e;
    }
    function qs(e, t) {
      let n;
      return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === R.Slash && (e.path.charCodeAt(1) >= R.A && e.path.charCodeAt(1) <= R.Z || e.path.charCodeAt(1) >= R.a && e.path.charCodeAt(1) <= R.z) && e.path.charCodeAt(2) === R.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Ai && (n = n.replace(/\//g, "\\")), n;
    }
    function nl(e, t) {
      let n = t ? YD : of, r = "", { scheme: i, authority: a, path: s, query: o, fragment: u } = e;
      if (i && (r += i, r += ":"), (a || i === "file") && (r += vn, r += vn), a) {
        let l = a.indexOf("@");
        if (l !== -1) {
          let c = a.substr(0, l);
          a = a.substr(l + 1), l = c.lastIndexOf(":"), l === -1 ? r += n(c, !1, !1) : (r += n(c.substr(0, l), !1, !1), r += ":", r += n(c.substr(l + 1), !1, !0)), r += "@";
        }
        a = a.toLowerCase(), l = a.lastIndexOf(":"), l === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, l), !1, !0), r += a.substr(l));
      }
      if (s) {
        if (s.length >= 3 && s.charCodeAt(0) === R.Slash && s.charCodeAt(2) === R.Colon) {
          let l = s.charCodeAt(1);
          l >= R.A && l <= R.Z && (s = `/${String.fromCharCode(l + 32)}:${s.substr(3)}`);
        } else if (s.length >= 2 && s.charCodeAt(1) === R.Colon) {
          let l = s.charCodeAt(0);
          l >= R.A && l <= R.Z && (s = `${String.fromCharCode(l + 32)}:${s.substr(2)}`);
        }
        r += n(s, !0, !1);
      }
      return o && (r += "?", r += n(o, !1, !1)), u && (r += "#", r += t ? u : of(u, !1, !1)), r;
    }
    function uf(e) {
      try {
        return decodeURIComponent(e);
      } catch {
        return e.length > 3 ? e.substr(0, 3) + uf(e.substr(3)) : e;
      }
    }
    var lf = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function Gs(e) {
      return e.match(lf) ? e.replace(lf, (t) => uf(t)) : e;
    }
    var Nr;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(Nr || (Nr = {}));
    var zD = class pn extends fe {
      constructor(t, n, r, i) {
        super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
      }
      toString() {
        return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
      }
      equalsSelection(t) {
        return pn.selectionsEqual(this, t);
      }
      static selectionsEqual(t, n) {
        return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
      }
      getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? Nr.LTR : Nr.RTL;
      }
      setEndPosition(t, n) {
        return this.getDirection() === Nr.LTR ? new pn(this.startLineNumber, this.startColumn, t, n) : new pn(t, n, this.startLineNumber, this.startColumn);
      }
      getPosition() {
        return new Te(this.positionLineNumber, this.positionColumn);
      }
      getSelectionStart() {
        return new Te(this.selectionStartLineNumber, this.selectionStartColumn);
      }
      setStartPosition(t, n) {
        return this.getDirection() === Nr.LTR ? new pn(t, n, this.endLineNumber, this.endColumn) : new pn(this.endLineNumber, this.endColumn, t, n);
      }
      static fromPositions(t, n = t) {
        return new pn(t.lineNumber, t.column, n.lineNumber, n.column);
      }
      static fromRange(t, n) {
        return n === Nr.LTR ? new pn(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new pn(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
      }
      static liftSelection(t) {
        return new pn(t.selectionStartLineNumber, t.selectionStartColumn, t.positionLineNumber, t.positionColumn);
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
        return a === Nr.LTR ? new pn(t, n, r, i) : new pn(r, i, t, n);
      }
    }, cf = /* @__PURE__ */ Object.create(null);
    function d(e, t) {
      if (p_(t)) {
        let n = cf[t];
        if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
        t = n;
      }
      return cf[e] = t, { id: e };
    }
    var XD = { add: d("add", 6e4), plus: d("plus", 6e4), gistNew: d("gist-new", 6e4), repoCreate: d("repo-create", 6e4), lightbulb: d("lightbulb", 60001), lightBulb: d("light-bulb", 60001), repo: d("repo", 60002), repoDelete: d("repo-delete", 60002), gistFork: d("gist-fork", 60003), repoForked: d("repo-forked", 60003), gitPullRequest: d("git-pull-request", 60004), gitPullRequestAbandoned: d("git-pull-request-abandoned", 60004), recordKeys: d("record-keys", 60005), keyboard: d("keyboard", 60005), tag: d("tag", 60006), gitPullRequestLabel: d("git-pull-request-label", 60006), tagAdd: d("tag-add", 60006), tagRemove: d("tag-remove", 60006), person: d("person", 60007), personFollow: d("person-follow", 60007), personOutline: d("person-outline", 60007), personFilled: d("person-filled", 60007), gitBranch: d("git-branch", 60008), gitBranchCreate: d("git-branch-create", 60008), gitBranchDelete: d("git-branch-delete", 60008), sourceControl: d("source-control", 60008), mirror: d("mirror", 60009), mirrorPublic: d("mirror-public", 60009), star: d("star", 60010), starAdd: d("star-add", 60010), starDelete: d("star-delete", 60010), starEmpty: d("star-empty", 60010), comment: d("comment", 60011), commentAdd: d("comment-add", 60011), alert: d("alert", 60012), warning: d("warning", 60012), search: d("search", 60013), searchSave: d("search-save", 60013), logOut: d("log-out", 60014), signOut: d("sign-out", 60014), logIn: d("log-in", 60015), signIn: d("sign-in", 60015), eye: d("eye", 60016), eyeUnwatch: d("eye-unwatch", 60016), eyeWatch: d("eye-watch", 60016), circleFilled: d("circle-filled", 60017), primitiveDot: d("primitive-dot", 60017), closeDirty: d("close-dirty", 60017), debugBreakpoint: d("debug-breakpoint", 60017), debugBreakpointDisabled: d("debug-breakpoint-disabled", 60017), debugHint: d("debug-hint", 60017), terminalDecorationSuccess: d("terminal-decoration-success", 60017), primitiveSquare: d("primitive-square", 60018), edit: d("edit", 60019), pencil: d("pencil", 60019), info: d("info", 60020), issueOpened: d("issue-opened", 60020), gistPrivate: d("gist-private", 60021), gitForkPrivate: d("git-fork-private", 60021), lock: d("lock", 60021), mirrorPrivate: d("mirror-private", 60021), close: d("close", 60022), removeClose: d("remove-close", 60022), x: d("x", 60022), repoSync: d("repo-sync", 60023), sync: d("sync", 60023), clone: d("clone", 60024), desktopDownload: d("desktop-download", 60024), beaker: d("beaker", 60025), microscope: d("microscope", 60025), vm: d("vm", 60026), deviceDesktop: d("device-desktop", 60026), file: d("file", 60027), fileText: d("file-text", 60027), more: d("more", 60028), ellipsis: d("ellipsis", 60028), kebabHorizontal: d("kebab-horizontal", 60028), mailReply: d("mail-reply", 60029), reply: d("reply", 60029), organization: d("organization", 60030), organizationFilled: d("organization-filled", 60030), organizationOutline: d("organization-outline", 60030), newFile: d("new-file", 60031), fileAdd: d("file-add", 60031), newFolder: d("new-folder", 60032), fileDirectoryCreate: d("file-directory-create", 60032), trash: d("trash", 60033), trashcan: d("trashcan", 60033), history: d("history", 60034), clock: d("clock", 60034), folder: d("folder", 60035), fileDirectory: d("file-directory", 60035), symbolFolder: d("symbol-folder", 60035), logoGithub: d("logo-github", 60036), markGithub: d("mark-github", 60036), github: d("github", 60036), terminal: d("terminal", 60037), console: d("console", 60037), repl: d("repl", 60037), zap: d("zap", 60038), symbolEvent: d("symbol-event", 60038), error: d("error", 60039), stop: d("stop", 60039), variable: d("variable", 60040), symbolVariable: d("symbol-variable", 60040), array: d("array", 60042), symbolArray: d("symbol-array", 60042), symbolModule: d("symbol-module", 60043), symbolPackage: d("symbol-package", 60043), symbolNamespace: d("symbol-namespace", 60043), symbolObject: d("symbol-object", 60043), symbolMethod: d("symbol-method", 60044), symbolFunction: d("symbol-function", 60044), symbolConstructor: d("symbol-constructor", 60044), symbolBoolean: d("symbol-boolean", 60047), symbolNull: d("symbol-null", 60047), symbolNumeric: d("symbol-numeric", 60048), symbolNumber: d("symbol-number", 60048), symbolStructure: d("symbol-structure", 60049), symbolStruct: d("symbol-struct", 60049), symbolParameter: d("symbol-parameter", 60050), symbolTypeParameter: d("symbol-type-parameter", 60050), symbolKey: d("symbol-key", 60051), symbolText: d("symbol-text", 60051), symbolReference: d("symbol-reference", 60052), goToFile: d("go-to-file", 60052), symbolEnum: d("symbol-enum", 60053), symbolValue: d("symbol-value", 60053), symbolRuler: d("symbol-ruler", 60054), symbolUnit: d("symbol-unit", 60054), activateBreakpoints: d("activate-breakpoints", 60055), archive: d("archive", 60056), arrowBoth: d("arrow-both", 60057), arrowDown: d("arrow-down", 60058), arrowLeft: d("arrow-left", 60059), arrowRight: d("arrow-right", 60060), arrowSmallDown: d("arrow-small-down", 60061), arrowSmallLeft: d("arrow-small-left", 60062), arrowSmallRight: d("arrow-small-right", 60063), arrowSmallUp: d("arrow-small-up", 60064), arrowUp: d("arrow-up", 60065), bell: d("bell", 60066), bold: d("bold", 60067), book: d("book", 60068), bookmark: d("bookmark", 60069), debugBreakpointConditionalUnverified: d("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: d("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: d("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: d("debug-breakpoint-data-unverified", 60072), debugBreakpointData: d("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: d("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: d("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: d("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: d("debug-breakpoint-log-disabled", 60075), briefcase: d("briefcase", 60076), broadcast: d("broadcast", 60077), browser: d("browser", 60078), bug: d("bug", 60079), calendar: d("calendar", 60080), caseSensitive: d("case-sensitive", 60081), check: d("check", 60082), checklist: d("checklist", 60083), chevronDown: d("chevron-down", 60084), chevronLeft: d("chevron-left", 60085), chevronRight: d("chevron-right", 60086), chevronUp: d("chevron-up", 60087), chromeClose: d("chrome-close", 60088), chromeMaximize: d("chrome-maximize", 60089), chromeMinimize: d("chrome-minimize", 60090), chromeRestore: d("chrome-restore", 60091), circleOutline: d("circle-outline", 60092), circle: d("circle", 60092), debugBreakpointUnverified: d("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: d("terminal-decoration-incomplete", 60092), circleSlash: d("circle-slash", 60093), circuitBoard: d("circuit-board", 60094), clearAll: d("clear-all", 60095), clippy: d("clippy", 60096), closeAll: d("close-all", 60097), cloudDownload: d("cloud-download", 60098), cloudUpload: d("cloud-upload", 60099), code: d("code", 60100), collapseAll: d("collapse-all", 60101), colorMode: d("color-mode", 60102), commentDiscussion: d("comment-discussion", 60103), creditCard: d("credit-card", 60105), dash: d("dash", 60108), dashboard: d("dashboard", 60109), database: d("database", 60110), debugContinue: d("debug-continue", 60111), debugDisconnect: d("debug-disconnect", 60112), debugPause: d("debug-pause", 60113), debugRestart: d("debug-restart", 60114), debugStart: d("debug-start", 60115), debugStepInto: d("debug-step-into", 60116), debugStepOut: d("debug-step-out", 60117), debugStepOver: d("debug-step-over", 60118), debugStop: d("debug-stop", 60119), debug: d("debug", 60120), deviceCameraVideo: d("device-camera-video", 60121), deviceCamera: d("device-camera", 60122), deviceMobile: d("device-mobile", 60123), diffAdded: d("diff-added", 60124), diffIgnored: d("diff-ignored", 60125), diffModified: d("diff-modified", 60126), diffRemoved: d("diff-removed", 60127), diffRenamed: d("diff-renamed", 60128), diff: d("diff", 60129), diffSidebyside: d("diff-sidebyside", 60129), discard: d("discard", 60130), editorLayout: d("editor-layout", 60131), emptyWindow: d("empty-window", 60132), exclude: d("exclude", 60133), extensions: d("extensions", 60134), eyeClosed: d("eye-closed", 60135), fileBinary: d("file-binary", 60136), fileCode: d("file-code", 60137), fileMedia: d("file-media", 60138), filePdf: d("file-pdf", 60139), fileSubmodule: d("file-submodule", 60140), fileSymlinkDirectory: d("file-symlink-directory", 60141), fileSymlinkFile: d("file-symlink-file", 60142), fileZip: d("file-zip", 60143), files: d("files", 60144), filter: d("filter", 60145), flame: d("flame", 60146), foldDown: d("fold-down", 60147), foldUp: d("fold-up", 60148), fold: d("fold", 60149), folderActive: d("folder-active", 60150), folderOpened: d("folder-opened", 60151), gear: d("gear", 60152), gift: d("gift", 60153), gistSecret: d("gist-secret", 60154), gist: d("gist", 60155), gitCommit: d("git-commit", 60156), gitCompare: d("git-compare", 60157), compareChanges: d("compare-changes", 60157), gitMerge: d("git-merge", 60158), githubAction: d("github-action", 60159), githubAlt: d("github-alt", 60160), globe: d("globe", 60161), grabber: d("grabber", 60162), graph: d("graph", 60163), gripper: d("gripper", 60164), heart: d("heart", 60165), home: d("home", 60166), horizontalRule: d("horizontal-rule", 60167), hubot: d("hubot", 60168), inbox: d("inbox", 60169), issueReopened: d("issue-reopened", 60171), issues: d("issues", 60172), italic: d("italic", 60173), jersey: d("jersey", 60174), json: d("json", 60175), kebabVertical: d("kebab-vertical", 60176), key: d("key", 60177), law: d("law", 60178), lightbulbAutofix: d("lightbulb-autofix", 60179), linkExternal: d("link-external", 60180), link: d("link", 60181), listOrdered: d("list-ordered", 60182), listUnordered: d("list-unordered", 60183), liveShare: d("live-share", 60184), loading: d("loading", 60185), location: d("location", 60186), mailRead: d("mail-read", 60187), mail: d("mail", 60188), markdown: d("markdown", 60189), megaphone: d("megaphone", 60190), mention: d("mention", 60191), milestone: d("milestone", 60192), gitPullRequestMilestone: d("git-pull-request-milestone", 60192), mortarBoard: d("mortar-board", 60193), move: d("move", 60194), multipleWindows: d("multiple-windows", 60195), mute: d("mute", 60196), noNewline: d("no-newline", 60197), note: d("note", 60198), octoface: d("octoface", 60199), openPreview: d("open-preview", 60200), package: d("package", 60201), paintcan: d("paintcan", 60202), pin: d("pin", 60203), play: d("play", 60204), run: d("run", 60204), plug: d("plug", 60205), preserveCase: d("preserve-case", 60206), preview: d("preview", 60207), project: d("project", 60208), pulse: d("pulse", 60209), question: d("question", 60210), quote: d("quote", 60211), radioTower: d("radio-tower", 60212), reactions: d("reactions", 60213), references: d("references", 60214), refresh: d("refresh", 60215), regex: d("regex", 60216), remoteExplorer: d("remote-explorer", 60217), remote: d("remote", 60218), remove: d("remove", 60219), replaceAll: d("replace-all", 60220), replace: d("replace", 60221), repoClone: d("repo-clone", 60222), repoForcePush: d("repo-force-push", 60223), repoPull: d("repo-pull", 60224), repoPush: d("repo-push", 60225), report: d("report", 60226), requestChanges: d("request-changes", 60227), rocket: d("rocket", 60228), rootFolderOpened: d("root-folder-opened", 60229), rootFolder: d("root-folder", 60230), rss: d("rss", 60231), ruby: d("ruby", 60232), saveAll: d("save-all", 60233), saveAs: d("save-as", 60234), save: d("save", 60235), screenFull: d("screen-full", 60236), screenNormal: d("screen-normal", 60237), searchStop: d("search-stop", 60238), server: d("server", 60240), settingsGear: d("settings-gear", 60241), settings: d("settings", 60242), shield: d("shield", 60243), smiley: d("smiley", 60244), sortPrecedence: d("sort-precedence", 60245), splitHorizontal: d("split-horizontal", 60246), splitVertical: d("split-vertical", 60247), squirrel: d("squirrel", 60248), starFull: d("star-full", 60249), starHalf: d("star-half", 60250), symbolClass: d("symbol-class", 60251), symbolColor: d("symbol-color", 60252), symbolConstant: d("symbol-constant", 60253), symbolEnumMember: d("symbol-enum-member", 60254), symbolField: d("symbol-field", 60255), symbolFile: d("symbol-file", 60256), symbolInterface: d("symbol-interface", 60257), symbolKeyword: d("symbol-keyword", 60258), symbolMisc: d("symbol-misc", 60259), symbolOperator: d("symbol-operator", 60260), symbolProperty: d("symbol-property", 60261), wrench: d("wrench", 60261), wrenchSubaction: d("wrench-subaction", 60261), symbolSnippet: d("symbol-snippet", 60262), tasklist: d("tasklist", 60263), telescope: d("telescope", 60264), textSize: d("text-size", 60265), threeBars: d("three-bars", 60266), thumbsdown: d("thumbsdown", 60267), thumbsup: d("thumbsup", 60268), tools: d("tools", 60269), triangleDown: d("triangle-down", 60270), triangleLeft: d("triangle-left", 60271), triangleRight: d("triangle-right", 60272), triangleUp: d("triangle-up", 60273), twitter: d("twitter", 60274), unfold: d("unfold", 60275), unlock: d("unlock", 60276), unmute: d("unmute", 60277), unverified: d("unverified", 60278), verified: d("verified", 60279), versions: d("versions", 60280), vmActive: d("vm-active", 60281), vmOutline: d("vm-outline", 60282), vmRunning: d("vm-running", 60283), watch: d("watch", 60284), whitespace: d("whitespace", 60285), wholeWord: d("whole-word", 60286), window: d("window", 60287), wordWrap: d("word-wrap", 60288), zoomIn: d("zoom-in", 60289), zoomOut: d("zoom-out", 60290), listFilter: d("list-filter", 60291), listFlat: d("list-flat", 60292), listSelection: d("list-selection", 60293), selection: d("selection", 60293), listTree: d("list-tree", 60294), debugBreakpointFunctionUnverified: d("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: d("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: d("debug-breakpoint-function-disabled", 60296), debugStackframeActive: d("debug-stackframe-active", 60297), circleSmallFilled: d("circle-small-filled", 60298), debugStackframeDot: d("debug-stackframe-dot", 60298), terminalDecorationMark: d("terminal-decoration-mark", 60298), debugStackframe: d("debug-stackframe", 60299), debugStackframeFocused: d("debug-stackframe-focused", 60299), debugBreakpointUnsupported: d("debug-breakpoint-unsupported", 60300), symbolString: d("symbol-string", 60301), debugReverseContinue: d("debug-reverse-continue", 60302), debugStepBack: d("debug-step-back", 60303), debugRestartFrame: d("debug-restart-frame", 60304), debugAlt: d("debug-alt", 60305), callIncoming: d("call-incoming", 60306), callOutgoing: d("call-outgoing", 60307), menu: d("menu", 60308), expandAll: d("expand-all", 60309), feedback: d("feedback", 60310), gitPullRequestReviewer: d("git-pull-request-reviewer", 60310), groupByRefType: d("group-by-ref-type", 60311), ungroupByRefType: d("ungroup-by-ref-type", 60312), account: d("account", 60313), gitPullRequestAssignee: d("git-pull-request-assignee", 60313), bellDot: d("bell-dot", 60314), debugConsole: d("debug-console", 60315), library: d("library", 60316), output: d("output", 60317), runAll: d("run-all", 60318), syncIgnored: d("sync-ignored", 60319), pinned: d("pinned", 60320), githubInverted: d("github-inverted", 60321), serverProcess: d("server-process", 60322), serverEnvironment: d("server-environment", 60323), pass: d("pass", 60324), issueClosed: d("issue-closed", 60324), stopCircle: d("stop-circle", 60325), playCircle: d("play-circle", 60326), record: d("record", 60327), debugAltSmall: d("debug-alt-small", 60328), vmConnect: d("vm-connect", 60329), cloud: d("cloud", 60330), merge: d("merge", 60331), export: d("export", 60332), graphLeft: d("graph-left", 60333), magnet: d("magnet", 60334), notebook: d("notebook", 60335), redo: d("redo", 60336), checkAll: d("check-all", 60337), pinnedDirty: d("pinned-dirty", 60338), passFilled: d("pass-filled", 60339), circleLargeFilled: d("circle-large-filled", 60340), circleLarge: d("circle-large", 60341), circleLargeOutline: d("circle-large-outline", 60341), combine: d("combine", 60342), gather: d("gather", 60342), table: d("table", 60343), variableGroup: d("variable-group", 60344), typeHierarchy: d("type-hierarchy", 60345), typeHierarchySub: d("type-hierarchy-sub", 60346), typeHierarchySuper: d("type-hierarchy-super", 60347), gitPullRequestCreate: d("git-pull-request-create", 60348), runAbove: d("run-above", 60349), runBelow: d("run-below", 60350), notebookTemplate: d("notebook-template", 60351), debugRerun: d("debug-rerun", 60352), workspaceTrusted: d("workspace-trusted", 60353), workspaceUntrusted: d("workspace-untrusted", 60354), workspaceUnknown: d("workspace-unknown", 60355), terminalCmd: d("terminal-cmd", 60356), terminalDebian: d("terminal-debian", 60357), terminalLinux: d("terminal-linux", 60358), terminalPowershell: d("terminal-powershell", 60359), terminalTmux: d("terminal-tmux", 60360), terminalUbuntu: d("terminal-ubuntu", 60361), terminalBash: d("terminal-bash", 60362), arrowSwap: d("arrow-swap", 60363), copy: d("copy", 60364), personAdd: d("person-add", 60365), filterFilled: d("filter-filled", 60366), wand: d("wand", 60367), debugLineByLine: d("debug-line-by-line", 60368), inspect: d("inspect", 60369), layers: d("layers", 60370), layersDot: d("layers-dot", 60371), layersActive: d("layers-active", 60372), compass: d("compass", 60373), compassDot: d("compass-dot", 60374), compassActive: d("compass-active", 60375), azure: d("azure", 60376), issueDraft: d("issue-draft", 60377), gitPullRequestClosed: d("git-pull-request-closed", 60378), gitPullRequestDraft: d("git-pull-request-draft", 60379), debugAll: d("debug-all", 60380), debugCoverage: d("debug-coverage", 60381), runErrors: d("run-errors", 60382), folderLibrary: d("folder-library", 60383), debugContinueSmall: d("debug-continue-small", 60384), beakerStop: d("beaker-stop", 60385), graphLine: d("graph-line", 60386), graphScatter: d("graph-scatter", 60387), pieChart: d("pie-chart", 60388), bracket: d("bracket", 60175), bracketDot: d("bracket-dot", 60389), bracketError: d("bracket-error", 60390), lockSmall: d("lock-small", 60391), azureDevops: d("azure-devops", 60392), verifiedFilled: d("verified-filled", 60393), newline: d("newline", 60394), layout: d("layout", 60395), layoutActivitybarLeft: d("layout-activitybar-left", 60396), layoutActivitybarRight: d("layout-activitybar-right", 60397), layoutPanelLeft: d("layout-panel-left", 60398), layoutPanelCenter: d("layout-panel-center", 60399), layoutPanelJustify: d("layout-panel-justify", 60400), layoutPanelRight: d("layout-panel-right", 60401), layoutPanel: d("layout-panel", 60402), layoutSidebarLeft: d("layout-sidebar-left", 60403), layoutSidebarRight: d("layout-sidebar-right", 60404), layoutStatusbar: d("layout-statusbar", 60405), layoutMenubar: d("layout-menubar", 60406), layoutCentered: d("layout-centered", 60407), target: d("target", 60408), indent: d("indent", 60409), recordSmall: d("record-small", 60410), errorSmall: d("error-small", 60411), terminalDecorationError: d("terminal-decoration-error", 60411), arrowCircleDown: d("arrow-circle-down", 60412), arrowCircleLeft: d("arrow-circle-left", 60413), arrowCircleRight: d("arrow-circle-right", 60414), arrowCircleUp: d("arrow-circle-up", 60415), layoutSidebarRightOff: d("layout-sidebar-right-off", 60416), layoutPanelOff: d("layout-panel-off", 60417), layoutSidebarLeftOff: d("layout-sidebar-left-off", 60418), blank: d("blank", 60419), heartFilled: d("heart-filled", 60420), map: d("map", 60421), mapHorizontal: d("map-horizontal", 60421), foldHorizontal: d("fold-horizontal", 60421), mapFilled: d("map-filled", 60422), mapHorizontalFilled: d("map-horizontal-filled", 60422), foldHorizontalFilled: d("fold-horizontal-filled", 60422), circleSmall: d("circle-small", 60423), bellSlash: d("bell-slash", 60424), bellSlashDot: d("bell-slash-dot", 60425), commentUnresolved: d("comment-unresolved", 60426), gitPullRequestGoToChanges: d("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: d("git-pull-request-new-changes", 60428), searchFuzzy: d("search-fuzzy", 60429), commentDraft: d("comment-draft", 60430), send: d("send", 60431), sparkle: d("sparkle", 60432), insert: d("insert", 60433), mic: d("mic", 60434), thumbsdownFilled: d("thumbsdown-filled", 60435), thumbsupFilled: d("thumbsup-filled", 60436), coffee: d("coffee", 60437), snake: d("snake", 60438), game: d("game", 60439), vr: d("vr", 60440), chip: d("chip", 60441), piano: d("piano", 60442), music: d("music", 60443), micFilled: d("mic-filled", 60444), repoFetch: d("repo-fetch", 60445), copilot: d("copilot", 60446), lightbulbSparkle: d("lightbulb-sparkle", 60447), robot: d("robot", 60448), sparkleFilled: d("sparkle-filled", 60449), diffSingle: d("diff-single", 60450), diffMultiple: d("diff-multiple", 60451), surroundWith: d("surround-with", 60452), share: d("share", 60453), gitStash: d("git-stash", 60454), gitStashApply: d("git-stash-apply", 60455), gitStashPop: d("git-stash-pop", 60456), vscode: d("vscode", 60457), vscodeInsiders: d("vscode-insiders", 60458), codeOss: d("code-oss", 60459), runCoverage: d("run-coverage", 60460), runAllCoverage: d("run-all-coverage", 60461), coverage: d("coverage", 60462), githubProject: d("github-project", 60463), mapVertical: d("map-vertical", 60464), foldVertical: d("fold-vertical", 60464), mapVerticalFilled: d("map-vertical-filled", 60465), foldVerticalFilled: d("fold-vertical-filled", 60465), goToSearch: d("go-to-search", 60466), percentage: d("percentage", 60467), sortPercentage: d("sort-percentage", 60467), attach: d("attach", 60468), goToEditingSession: d("go-to-editing-session", 60469), editSession: d("edit-session", 60470), codeReview: d("code-review", 60471), copilotWarning: d("copilot-warning", 60472), python: d("python", 60473), copilotLarge: d("copilot-large", 60474), copilotWarningLarge: d("copilot-warning-large", 60475), keyboardTab: d("keyboard-tab", 60476), copilotBlocked: d("copilot-blocked", 60477), copilotNotConnected: d("copilot-not-connected", 60478), flag: d("flag", 60479), lightbulbEmpty: d("lightbulb-empty", 60480), symbolMethodArrow: d("symbol-method-arrow", 60481), copilotUnavailable: d("copilot-unavailable", 60482), repoPinned: d("repo-pinned", 60483), keyboardTabAbove: d("keyboard-tab-above", 60484), keyboardTabBelow: d("keyboard-tab-below", 60485), gitPullRequestDone: d("git-pull-request-done", 60486), mcp: d("mcp", 60487), extensionsLarge: d("extensions-large", 60488), layoutPanelDock: d("layout-panel-dock", 60489), layoutSidebarLeftDock: d("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: d("layout-sidebar-right-dock", 60491), copilotInProgress: d("copilot-in-progress", 60492), copilotError: d("copilot-error", 60493), copilotSuccess: d("copilot-success", 60494), chatSparkle: d("chat-sparkle", 60495), searchSparkle: d("search-sparkle", 60496), editSparkle: d("edit-sparkle", 60497), copilotSnooze: d("copilot-snooze", 60498) }, JD = { dialogError: d("dialog-error", "error"), dialogWarning: d("dialog-warning", "warning"), dialogInfo: d("dialog-info", "info"), dialogClose: d("dialog-close", "close"), treeItemExpanded: d("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: d("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: d("tree-filter-on-type-off", "list-selection"), treeFilterClear: d("tree-filter-clear", "close"), treeItemLoading: d("tree-item-loading", "loading"), menuSelection: d("menu-selection", "check"), menuSubmenu: d("menu-submenu", "chevron-right"), menuBarMore: d("menubar-more", "more"), scrollbarButtonLeft: d("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: d("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: d("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: d("scrollbar-button-down", "triangle-down"), toolBarMore: d("toolbar-more", "more"), quickInputBack: d("quick-input-back", "arrow-left"), dropDownButton: d("drop-down-button", 60084), symbolCustomColor: d("symbol-customcolor", 60252), exportIcon: d("export", 60332), workspaceUnspecified: d("workspace-unspecified", 60355), newLine: d("newline", 60394), thumbsDownFilled: d("thumbsdown-filled", 60435), thumbsUpFilled: d("thumbsup-filled", 60436), gitFetch: d("git-fetch", 60445), lightbulbSparkleAutofix: d("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: d("debug-breakpoint-pending", 60377) }, he = { ...XD, ...JD }, df;
    (function(e) {
      e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
    })(df || (df = {}));
    var hf;
    (function(e) {
      e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
    })(hf || (hf = {}));
    var Hs;
    (function(e) {
      e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
    })(Hs || (Hs = {}));
    var ff;
    (function(e) {
      e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
    })(ff || (ff = {}));
    var pf;
    (function(e) {
      e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
    })(pf || (pf = {}));
    var QD = class {
      constructor() {
        this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new un(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
      }
      handleChange(e) {
        this._onDidChange.fire({ changedLanguages: e, changedColorMap: !1 });
      }
      register(e, t) {
        return this._tokenizationSupports.set(e, t), this.handleChange([e]), Ca(() => {
          this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
        });
      }
      get(e) {
        return this._tokenizationSupports.get(e) || null;
      }
      registerFactory(e, t) {
        this._factories.get(e)?.dispose();
        let n = new ZD(this, e, t);
        return this._factories.set(e, n), Ca(() => {
          let r = this._factories.get(e);
          !r || r !== n || (this._factories.delete(e), r.dispose());
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
        return this._colorMap && this._colorMap.length > Hs.DefaultBackground ? this._colorMap[Hs.DefaultBackground] : null;
      }
    }, ZD = class extends Rs {
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
    }, ev = class {
      constructor(e, t, n) {
        this.offset = e, this.type = t, this.language = n, this._tokenBrand = void 0;
      }
      toString() {
        return "(" + this.offset + ", " + this.type + ")";
      }
    }, mf;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(mf || (mf = {}));
    var K;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(K || (K = {}));
    var gf;
    (function(e) {
      let t = /* @__PURE__ */ new Map();
      t.set(K.Method, he.symbolMethod), t.set(K.Function, he.symbolFunction), t.set(K.Constructor, he.symbolConstructor), t.set(K.Field, he.symbolField), t.set(K.Variable, he.symbolVariable), t.set(K.Class, he.symbolClass), t.set(K.Struct, he.symbolStruct), t.set(K.Interface, he.symbolInterface), t.set(K.Module, he.symbolModule), t.set(K.Property, he.symbolProperty), t.set(K.Event, he.symbolEvent), t.set(K.Operator, he.symbolOperator), t.set(K.Unit, he.symbolUnit), t.set(K.Value, he.symbolValue), t.set(K.Enum, he.symbolEnum), t.set(K.Constant, he.symbolConstant), t.set(K.Enum, he.symbolEnum), t.set(K.EnumMember, he.symbolEnumMember), t.set(K.Keyword, he.symbolKeyword), t.set(K.Snippet, he.symbolSnippet), t.set(K.Text, he.symbolText), t.set(K.Color, he.symbolColor), t.set(K.File, he.symbolFile), t.set(K.Reference, he.symbolReference), t.set(K.Customcolor, he.symbolCustomColor), t.set(K.Folder, he.symbolFolder), t.set(K.TypeParameter, he.symbolTypeParameter), t.set(K.User, he.account), t.set(K.Issue, he.issues), t.set(K.Tool, he.tools);
      function n(s) {
        let o = t.get(s);
        return o || (console.info("No codicon found for CompletionItemKind " + s), o = he.symbolProperty), o;
      }
      e.toIcon = n;
      function r(s) {
        switch (s) {
          case K.Method:
            return me(776, "Method");
          case K.Function:
            return me(777, "Function");
          case K.Constructor:
            return me(778, "Constructor");
          case K.Field:
            return me(779, "Field");
          case K.Variable:
            return me(780, "Variable");
          case K.Class:
            return me(781, "Class");
          case K.Struct:
            return me(782, "Struct");
          case K.Interface:
            return me(783, "Interface");
          case K.Module:
            return me(784, "Module");
          case K.Property:
            return me(785, "Property");
          case K.Event:
            return me(786, "Event");
          case K.Operator:
            return me(787, "Operator");
          case K.Unit:
            return me(788, "Unit");
          case K.Value:
            return me(789, "Value");
          case K.Constant:
            return me(790, "Constant");
          case K.Enum:
            return me(791, "Enum");
          case K.EnumMember:
            return me(792, "Enum Member");
          case K.Keyword:
            return me(793, "Keyword");
          case K.Text:
            return me(794, "Text");
          case K.Color:
            return me(795, "Color");
          case K.File:
            return me(796, "File");
          case K.Reference:
            return me(797, "Reference");
          case K.Customcolor:
            return me(798, "Custom Color");
          case K.Folder:
            return me(799, "Folder");
          case K.TypeParameter:
            return me(800, "Type Parameter");
          case K.User:
            return me(801, "User");
          case K.Issue:
            return me(802, "Issue");
          case K.Tool:
            return me(803, "Tool");
          case K.Snippet:
            return me(804, "Snippet");
          default:
            return "";
        }
      }
      e.toLabel = r;
      let i = /* @__PURE__ */ new Map();
      i.set("method", K.Method), i.set("function", K.Function), i.set("constructor", K.Constructor), i.set("field", K.Field), i.set("variable", K.Variable), i.set("class", K.Class), i.set("struct", K.Struct), i.set("interface", K.Interface), i.set("module", K.Module), i.set("property", K.Property), i.set("event", K.Event), i.set("operator", K.Operator), i.set("unit", K.Unit), i.set("value", K.Value), i.set("constant", K.Constant), i.set("enum", K.Enum), i.set("enum-member", K.EnumMember), i.set("enumMember", K.EnumMember), i.set("keyword", K.Keyword), i.set("snippet", K.Snippet), i.set("text", K.Text), i.set("color", K.Color), i.set("file", K.File), i.set("reference", K.Reference), i.set("customcolor", K.Customcolor), i.set("folder", K.Folder), i.set("type-parameter", K.TypeParameter), i.set("typeParameter", K.TypeParameter), i.set("account", K.User), i.set("issue", K.Issue), i.set("tool", K.Tool);
      function a(s, o) {
        let u = i.get(s);
        return typeof u > "u" && !o && (u = K.Property), u;
      }
      e.fromString = a;
    })(gf || (gf = {}));
    var Ef;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Ef || (Ef = {}));
    var _f;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })(_f || (_f = {}));
    var Df;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(Df || (Df = {}));
    var vf;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(vf || (vf = {}));
    var bf;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(bf || (bf = {}));
    var yf;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(yf || (yf = {}));
    var Nf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(Nf || (Nf = {}));
    var Cf;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
    })(Cf || (Cf = {}));
    var Tf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(Tf || (Tf = {}));
    var wf;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(wf || (wf = {}));
    var ie;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(ie || (ie = {})), ie.Array + "", me(805, "array"), ie.Boolean + "", me(806, "boolean"), ie.Class + "", me(807, "class"), ie.Constant + "", me(808, "constant"), ie.Constructor + "", me(809, "constructor"), ie.Enum + "", me(810, "enumeration"), ie.EnumMember + "", me(811, "enumeration member"), ie.Event + "", me(812, "event"), ie.Field + "", me(813, "field"), ie.File + "", me(814, "file"), ie.Function + "", me(815, "function"), ie.Interface + "", me(816, "interface"), ie.Key + "", me(817, "key"), ie.Method + "", me(818, "method"), ie.Module + "", me(819, "module"), ie.Namespace + "", me(820, "namespace"), ie.Null + "", me(821, "null"), ie.Number + "", me(822, "number"), ie.Object + "", me(823, "object"), ie.Operator + "", me(824, "operator"), ie.Package + "", me(825, "package"), ie.Property + "", me(826, "property"), ie.String + "", me(827, "string"), ie.Struct + "", me(828, "struct"), ie.TypeParameter + "", me(829, "type parameter"), ie.Variable + "", me(830, "variable");
    var Af;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(Af || (Af = {}));
    var Sf;
    (function(e) {
      let t = /* @__PURE__ */ new Map();
      t.set(ie.File, he.symbolFile), t.set(ie.Module, he.symbolModule), t.set(ie.Namespace, he.symbolNamespace), t.set(ie.Package, he.symbolPackage), t.set(ie.Class, he.symbolClass), t.set(ie.Method, he.symbolMethod), t.set(ie.Property, he.symbolProperty), t.set(ie.Field, he.symbolField), t.set(ie.Constructor, he.symbolConstructor), t.set(ie.Enum, he.symbolEnum), t.set(ie.Interface, he.symbolInterface), t.set(ie.Function, he.symbolFunction), t.set(ie.Variable, he.symbolVariable), t.set(ie.Constant, he.symbolConstant), t.set(ie.String, he.symbolString), t.set(ie.Number, he.symbolNumber), t.set(ie.Boolean, he.symbolBoolean), t.set(ie.Array, he.symbolArray), t.set(ie.Object, he.symbolObject), t.set(ie.Key, he.symbolKey), t.set(ie.Null, he.symbolNull), t.set(ie.EnumMember, he.symbolEnumMember), t.set(ie.Struct, he.symbolStruct), t.set(ie.Event, he.symbolEvent), t.set(ie.Operator, he.symbolOperator), t.set(ie.TypeParameter, he.symbolTypeParameter);
      function n(a) {
        let s = t.get(a);
        return s || (console.info("No codicon found for SymbolKind " + a), s = he.symbolProperty), s;
      }
      e.toIcon = n;
      let r = /* @__PURE__ */ new Map();
      r.set(ie.File, K.File), r.set(ie.Module, K.Module), r.set(ie.Namespace, K.Module), r.set(ie.Package, K.Module), r.set(ie.Class, K.Class), r.set(ie.Method, K.Method), r.set(ie.Property, K.Property), r.set(ie.Field, K.Field), r.set(ie.Constructor, K.Constructor), r.set(ie.Enum, K.Enum), r.set(ie.Interface, K.Interface), r.set(ie.Function, K.Function), r.set(ie.Variable, K.Variable), r.set(ie.Constant, K.Constant), r.set(ie.String, K.Text), r.set(ie.Number, K.Value), r.set(ie.Boolean, K.Value), r.set(ie.Array, K.Value), r.set(ie.Object, K.Value), r.set(ie.Key, K.Keyword), r.set(ie.Null, K.Value), r.set(ie.EnumMember, K.EnumMember), r.set(ie.Struct, K.Struct), r.set(ie.Event, K.Event), r.set(ie.Operator, K.Operator), r.set(ie.TypeParameter, K.TypeParameter);
      function i(a) {
        let s = r.get(a);
        return s === void 0 && (console.info("No completion kind found for SymbolKind " + a), s = K.File), s;
      }
      e.toCompletionKind = i;
    })(Sf || (Sf = {})), Bt = class {
      static fromValue(t) {
        switch (t) {
          case "comment":
            return Bt.Comment;
          case "imports":
            return Bt.Imports;
          case "region":
            return Bt.Region;
        }
        return new Bt(t);
      }
      constructor(t) {
        this.value = t;
      }
    }, Bt.Comment = new Bt("comment"), Bt.Imports = new Bt("imports"), Bt.Region = new Bt("region");
    var Lf;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(Lf || (Lf = {}));
    var Ff;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(Ff || (Ff = {}));
    var If;
    (function(e) {
      function t(n) {
        return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
      }
      e.is = t;
    })(If || (If = {}));
    var Rf;
    (function(e) {
      e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
    })(Rf || (Rf = {}));
    var Of;
    (function(e) {
      e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
    })(Of || (Of = {}));
    var xf;
    (function(e) {
      e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
    })(xf || (xf = {}));
    var kf;
    (function(e) {
      e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
    })(kf || (kf = {}));
    var Mf;
    (function(e) {
      e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
    })(Mf || (Mf = {}));
    var Uf;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(Uf || (Uf = {})), new QD();
    var Pf;
    (function(e) {
      e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
    })(Pf || (Pf = {}));
    var Bf;
    (function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
    })(Bf || (Bf = {}));
    var Vf;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
    })(Vf || (Vf = {}));
    var $f;
    (function(e) {
      e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
    })($f || ($f = {}));
    var Kf;
    (function(e) {
      e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
    })(Kf || (Kf = {}));
    var jf;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(jf || (jf = {}));
    var qf;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
    })(qf || (qf = {}));
    var Gf;
    (function(e) {
      e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
    })(Gf || (Gf = {}));
    var Hf;
    (function(e) {
      e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
    })(Hf || (Hf = {}));
    var Wf;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Wf || (Wf = {}));
    var Yf;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
    })(Yf || (Yf = {}));
    var zf;
    (function(e) {
      e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
    })(zf || (zf = {}));
    var Xf;
    (function(e) {
      e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowVariableLineHeights = 4] = "allowVariableLineHeights", e[e.allowVariableFonts = 5] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 6] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 7] = "ariaLabel", e[e.ariaRequired = 8] = "ariaRequired", e[e.autoClosingBrackets = 9] = "autoClosingBrackets", e[e.autoClosingComments = 10] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 11] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 12] = "autoClosingDelete", e[e.autoClosingOvertype = 13] = "autoClosingOvertype", e[e.autoClosingQuotes = 14] = "autoClosingQuotes", e[e.autoIndent = 15] = "autoIndent", e[e.autoIndentOnPaste = 16] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 17] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 18] = "automaticLayout", e[e.autoSurround = 19] = "autoSurround", e[e.bracketPairColorization = 20] = "bracketPairColorization", e[e.guides = 21] = "guides", e[e.codeLens = 22] = "codeLens", e[e.codeLensFontFamily = 23] = "codeLensFontFamily", e[e.codeLensFontSize = 24] = "codeLensFontSize", e[e.colorDecorators = 25] = "colorDecorators", e[e.colorDecoratorsLimit = 26] = "colorDecoratorsLimit", e[e.columnSelection = 27] = "columnSelection", e[e.comments = 28] = "comments", e[e.contextmenu = 29] = "contextmenu", e[e.copyWithSyntaxHighlighting = 30] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 31] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 32] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 33] = "cursorStyle", e[e.cursorSurroundingLines = 34] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 35] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 36] = "cursorWidth", e[e.disableLayerHinting = 37] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 38] = "disableMonospaceOptimizations", e[e.domReadOnly = 39] = "domReadOnly", e[e.dragAndDrop = 40] = "dragAndDrop", e[e.dropIntoEditor = 41] = "dropIntoEditor", e[e.editContext = 42] = "editContext", e[e.emptySelectionClipboard = 43] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 44] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 45] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 46] = "extraEditorClassName", e[e.fastScrollSensitivity = 47] = "fastScrollSensitivity", e[e.find = 48] = "find", e[e.fixedOverflowWidgets = 49] = "fixedOverflowWidgets", e[e.folding = 50] = "folding", e[e.foldingStrategy = 51] = "foldingStrategy", e[e.foldingHighlight = 52] = "foldingHighlight", e[e.foldingImportsByDefault = 53] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 54] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 55] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 56] = "fontFamily", e[e.fontInfo = 57] = "fontInfo", e[e.fontLigatures = 58] = "fontLigatures", e[e.fontSize = 59] = "fontSize", e[e.fontWeight = 60] = "fontWeight", e[e.fontVariations = 61] = "fontVariations", e[e.formatOnPaste = 62] = "formatOnPaste", e[e.formatOnType = 63] = "formatOnType", e[e.glyphMargin = 64] = "glyphMargin", e[e.gotoLocation = 65] = "gotoLocation", e[e.hideCursorInOverviewRuler = 66] = "hideCursorInOverviewRuler", e[e.hover = 67] = "hover", e[e.inDiffEditor = 68] = "inDiffEditor", e[e.inlineSuggest = 69] = "inlineSuggest", e[e.letterSpacing = 70] = "letterSpacing", e[e.lightbulb = 71] = "lightbulb", e[e.lineDecorationsWidth = 72] = "lineDecorationsWidth", e[e.lineHeight = 73] = "lineHeight", e[e.lineNumbers = 74] = "lineNumbers", e[e.lineNumbersMinChars = 75] = "lineNumbersMinChars", e[e.linkedEditing = 76] = "linkedEditing", e[e.links = 77] = "links", e[e.matchBrackets = 78] = "matchBrackets", e[e.minimap = 79] = "minimap", e[e.mouseStyle = 80] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 81] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 82] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 83] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 84] = "multiCursorModifier", e[e.multiCursorPaste = 85] = "multiCursorPaste", e[e.multiCursorLimit = 86] = "multiCursorLimit", e[e.occurrencesHighlight = 87] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 88] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 89] = "overtypeCursorStyle", e[e.overtypeOnPaste = 90] = "overtypeOnPaste", e[e.overviewRulerBorder = 91] = "overviewRulerBorder", e[e.overviewRulerLanes = 92] = "overviewRulerLanes", e[e.padding = 93] = "padding", e[e.pasteAs = 94] = "pasteAs", e[e.parameterHints = 95] = "parameterHints", e[e.peekWidgetDefaultFocus = 96] = "peekWidgetDefaultFocus", e[e.placeholder = 97] = "placeholder", e[e.definitionLinkOpensInPeek = 98] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 99] = "quickSuggestions", e[e.quickSuggestionsDelay = 100] = "quickSuggestionsDelay", e[e.readOnly = 101] = "readOnly", e[e.readOnlyMessage = 102] = "readOnlyMessage", e[e.renameOnType = 103] = "renameOnType", e[e.renderControlCharacters = 104] = "renderControlCharacters", e[e.renderFinalNewline = 105] = "renderFinalNewline", e[e.renderLineHighlight = 106] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 107] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 108] = "renderValidationDecorations", e[e.renderWhitespace = 109] = "renderWhitespace", e[e.revealHorizontalRightPadding = 110] = "revealHorizontalRightPadding", e[e.roundedSelection = 111] = "roundedSelection", e[e.rulers = 112] = "rulers", e[e.scrollbar = 113] = "scrollbar", e[e.scrollBeyondLastColumn = 114] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 115] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 116] = "scrollPredominantAxis", e[e.selectionClipboard = 117] = "selectionClipboard", e[e.selectionHighlight = 118] = "selectionHighlight", e[e.selectOnLineNumbers = 119] = "selectOnLineNumbers", e[e.showFoldingControls = 120] = "showFoldingControls", e[e.showUnused = 121] = "showUnused", e[e.snippetSuggestions = 122] = "snippetSuggestions", e[e.smartSelect = 123] = "smartSelect", e[e.smoothScrolling = 124] = "smoothScrolling", e[e.stickyScroll = 125] = "stickyScroll", e[e.stickyTabStops = 126] = "stickyTabStops", e[e.stopRenderingLineAfter = 127] = "stopRenderingLineAfter", e[e.suggest = 128] = "suggest", e[e.suggestFontSize = 129] = "suggestFontSize", e[e.suggestLineHeight = 130] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 131] = "suggestOnTriggerCharacters", e[e.suggestSelection = 132] = "suggestSelection", e[e.tabCompletion = 133] = "tabCompletion", e[e.tabIndex = 134] = "tabIndex", e[e.unicodeHighlighting = 135] = "unicodeHighlighting", e[e.unusualLineTerminators = 136] = "unusualLineTerminators", e[e.useShadowDOM = 137] = "useShadowDOM", e[e.useTabStops = 138] = "useTabStops", e[e.wordBreak = 139] = "wordBreak", e[e.wordSegmenterLocales = 140] = "wordSegmenterLocales", e[e.wordSeparators = 141] = "wordSeparators", e[e.wordWrap = 142] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 143] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 144] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 145] = "wordWrapColumn", e[e.wordWrapOverride1 = 146] = "wordWrapOverride1", e[e.wordWrapOverride2 = 147] = "wordWrapOverride2", e[e.wrappingIndent = 148] = "wrappingIndent", e[e.wrappingStrategy = 149] = "wrappingStrategy", e[e.showDeprecated = 150] = "showDeprecated", e[e.inlayHints = 151] = "inlayHints", e[e.effectiveCursorStyle = 152] = "effectiveCursorStyle", e[e.editorClassName = 153] = "editorClassName", e[e.pixelRatio = 154] = "pixelRatio", e[e.tabFocusMode = 155] = "tabFocusMode", e[e.layoutInfo = 156] = "layoutInfo", e[e.wrappingInfo = 157] = "wrappingInfo", e[e.defaultColorDecorators = 158] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 159] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 160] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 161] = "effectiveEditContext", e[e.scrollOnMiddleClick = 162] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 163] = "effectiveAllowVariableFonts";
    })(Xf || (Xf = {}));
    var Jf;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(Jf || (Jf = {}));
    var Qf;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })(Qf || (Qf = {}));
    var Zf;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(Zf || (Zf = {}));
    var e1;
    (function(e) {
      e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
    })(e1 || (e1 = {}));
    var t1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
    })(t1 || (t1 = {}));
    var n1;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(n1 || (n1 = {}));
    var r1;
    (function(e) {
      e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
    })(r1 || (r1 = {}));
    var i1;
    (function(e) {
      e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
    })(i1 || (i1 = {}));
    var a1;
    (function(e) {
      e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
    })(a1 || (a1 = {}));
    var rl;
    (function(e) {
      e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
    })(rl || (rl = {}));
    var il;
    (function(e) {
      e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
    })(il || (il = {}));
    var al;
    (function(e) {
      e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
    })(al || (al = {}));
    var s1;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(s1 || (s1 = {}));
    var o1;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(o1 || (o1 = {}));
    var u1;
    (function(e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
    })(u1 || (u1 = {}));
    var l1;
    (function(e) {
      e[e.AIGenerated = 1] = "AIGenerated";
    })(l1 || (l1 = {}));
    var c1;
    (function(e) {
      e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
    })(c1 || (c1 = {}));
    var d1;
    (function(e) {
      e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
    })(d1 || (d1 = {}));
    var h1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(h1 || (h1 = {}));
    var f1;
    (function(e) {
      e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
    })(f1 || (f1 = {}));
    var p1;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(p1 || (p1 = {}));
    var m1;
    (function(e) {
      e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
    })(m1 || (m1 = {}));
    var g1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
    })(g1 || (g1 = {}));
    var E1;
    (function(e) {
      e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
    })(E1 || (E1 = {}));
    var _1;
    (function(e) {
      e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
    })(_1 || (_1 = {}));
    var sl;
    (function(e) {
      e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
    })(sl || (sl = {}));
    var D1;
    (function(e) {
      e.Off = "off", e.OnCode = "onCode", e.On = "on";
    })(D1 || (D1 = {}));
    var v1;
    (function(e) {
      e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
    })(v1 || (v1 = {}));
    var b1;
    (function(e) {
      e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
    })(b1 || (b1 = {}));
    var y1;
    (function(e) {
      e[e.Deprecated = 1] = "Deprecated";
    })(y1 || (y1 = {}));
    var N1;
    (function(e) {
      e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
    })(N1 || (N1 = {}));
    var C1;
    (function(e) {
      e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
    })(C1 || (C1 = {}));
    var T1;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(T1 || (T1 = {}));
    var w1;
    (function(e) {
      e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
    })(w1 || (w1 = {}));
    var tv = (dr = class {
      static chord(t, n) {
        return TD(t, n);
      }
    }, dr.CtrlCmd = Ii.CtrlCmd, dr.Shift = Ii.Shift, dr.Alt = Ii.Alt, dr.WinCtrl = Ii.WinCtrl, dr);
    function nv() {
      return { editor: void 0, languages: void 0, CancellationTokenSource: K_, Emitter: un, KeyCode: rl, KeyMod: tv, Position: Te, Range: fe, Selection: zD, SelectionDirection: sl, MarkerSeverity: il, MarkerTag: al, Uri: Gt, Token: ev };
    }
    var Oi;
    (function(e) {
      e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
    })(Oi || (Oi = {})), new c_(10);
    var A1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
    })(A1 || (A1 = {}));
    var S1;
    (function(e) {
      e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
    })(S1 || (S1 = {}));
    var L1;
    (function(e) {
      e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
    })(L1 || (L1 = {}));
    var F1;
    (function(e) {
      e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
    })(F1 || (F1 = {}));
    var I1;
    (function(e) {
      e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
    })(I1 || (I1 = {}));
    var R1;
    (function(e) {
      e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(R1 || (R1 = {}));
    var O1;
    (function(e) {
      e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
    })(O1 || (O1 = {}));
    var x1;
    (function(e) {
      e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
    })(x1 || (x1 = {}));
    var k1;
    (function(e) {
      e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
    })(k1 || (k1 = {}));
    var M1;
    (function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
    })(M1 || (M1 = {}));
    var U1;
    (function(e) {
      e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
    })(U1 || (U1 = {}));
    function rv(e) {
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
    function iv(e, t, n, r, i) {
      if (r === 0) return !0;
      let a = t.charCodeAt(r - 1);
      if (e.get(a) !== Oi.Regular || a === R.CarriageReturn || a === R.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r);
        if (e.get(s) !== Oi.Regular) return !0;
      }
      return !1;
    }
    function av(e, t, n, r, i) {
      if (r + i === n) return !0;
      let a = t.charCodeAt(r + i);
      if (e.get(a) !== Oi.Regular || a === R.CarriageReturn || a === R.LineFeed) return !0;
      if (i > 0) {
        let s = t.charCodeAt(r + i - 1);
        if (e.get(s) !== Oi.Regular) return !0;
      }
      return !1;
    }
    function sv(e, t, n, r, i) {
      return iv(e, t, n, r, i) && av(e, t, n, r, i);
    }
    var ov = class {
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
              tD(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
              continue;
            }
            return null;
          }
          if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || sv(this._wordSeparators, e, t, r, i)) return n;
        } while (n);
        return null;
      }
    }, uv = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function lv(e = "") {
      let t = "(-?\\d*\\.\\d\\w*)|([^";
      for (let n of uv) e.indexOf(n) >= 0 || (t += "\\" + n);
      return t += "\\s]+)", new RegExp(t, "g");
    }
    var P1 = lv();
    function B1(e) {
      let t = P1;
      if (e && e instanceof RegExp) if (e.global) t = e;
      else {
        let n = "g";
        e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
      }
      return t.lastIndex = 0, t;
    }
    var V1 = new E_();
    V1.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
    function ol(e, t, n, r, i) {
      if (t = B1(t), i || (i = Is.first(V1)), n.length > i.maxLen) {
        let l = e - i.maxLen / 2;
        return l < 0 ? l = 0 : r += l, n = n.substring(l, e + i.maxLen / 2), ol(e, t, n, r, i);
      }
      let a = Date.now(), s = e - 1 - r, o = -1, u = null;
      for (let l = 1; !(Date.now() - a >= i.timeBudget); l++) {
        let c = s - i.windowSize * l;
        t.lastIndex = Math.max(0, c);
        let f = cv(t, n, s, o);
        if (!f && u || (u = f, c <= 0)) break;
        o = c;
      }
      if (u) {
        let l = { word: u[0], startColumn: r + 1 + u.index, endColumn: r + 1 + u.index + u[0].length };
        return t.lastIndex = 0, l;
      }
      return null;
    }
    function cv(e, t, n, r) {
      let i;
      for (; i = e.exec(t); ) {
        let a = i.index || 0;
        if (a <= n && e.lastIndex >= n) return i;
        if (r > 0 && a > r) return null;
      }
      return null;
    }
    var dv = class {
      static computeUnicodeHighlights(e, t, n) {
        let r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : e.getLineCount(), a = new $1(t), s = a.getCandidateCodePoints(), o;
        s === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${hv(Array.from(s))}`, "g");
        let u = new ov(null, o), l = [], c = !1, f, p = 0, m = 0, g = 0;
        e: for (let _ = r, w = i; _ <= w; _++) {
          let S = e.getLineContent(_), F = S.length;
          u.reset(0);
          do
            if (f = u.next(S), f) {
              let C = f.index, x = f.index + f[0].length;
              if (C > 0) {
                let B = S.charCodeAt(C - 1);
                Ku(B) && C--;
              }
              if (x + 1 < F) {
                let B = S.charCodeAt(x - 1);
                Ku(B) && x++;
              }
              let U = S.substring(C, x), H = ol(C + 1, P1, S, 0);
              H && H.endColumn <= C + 1 && (H = null);
              let O = a.shouldHighlightNonBasicASCII(U, H ? H.word : null);
              if (O !== Ot.None) {
                if (O === Ot.Ambiguous ? p++ : O === Ot.Invisible ? m++ : O === Ot.NonBasicASCII ? g++ : h_(), l.length >= 1e3) {
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
        let n = new $1(t);
        switch (n.shouldHighlightNonBasicASCII(e, null)) {
          case Ot.None:
            return null;
          case Ot.Invisible:
            return { kind: La.Invisible };
          case Ot.Ambiguous: {
            let r = e.codePointAt(0), i = n.ambiguousCharacters.getPrimaryConfusable(r), a = qu.getLocales().filter((s) => !qu.getInstance(/* @__PURE__ */ new Set([...t.allowedLocales, s])).isAmbiguous(r));
            return { kind: La.Ambiguous, confusableWith: String.fromCodePoint(i), notAmbiguousInLocales: a };
          }
          case Ot.NonBasicASCII:
            return { kind: La.NonBasicAscii };
        }
      }
    };
    function hv(e, t) {
      return `[${G_(e.map((n) => String.fromCodePoint(n)).join(""))}]`;
    }
    var La;
    (function(e) {
      e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
    })(La || (La = {}));
    var $1 = class {
      constructor(e) {
        this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = qu.getInstance(new Set(e.allowedLocales));
      }
      getCandidateCodePoints() {
        if (this.options.nonBasicASCII) return "allNonBasicAscii";
        let e = /* @__PURE__ */ new Set();
        if (this.options.invisibleCharacters) for (let t of Gu.codePoints) K1(String.fromCodePoint(t)) || e.add(t);
        if (this.options.ambiguousCharacters) for (let t of this.ambiguousCharacters.getConfusableCodePoints()) e.add(t);
        for (let t of this.allowedCodePoints) e.delete(t);
        return e;
      }
      shouldHighlightNonBasicASCII(e, t) {
        let n = e.codePointAt(0);
        if (this.allowedCodePoints.has(n)) return Ot.None;
        if (this.options.nonBasicASCII) return Ot.NonBasicASCII;
        let r = !1, i = !1;
        if (t) for (let a of t) {
          let s = a.codePointAt(0), o = rD(a);
          r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(s) && !Gu.isInvisibleCharacter(s) && (i = !0);
        }
        return !r && i ? Ot.None : this.options.invisibleCharacters && !K1(e) && Gu.isInvisibleCharacter(n) ? Ot.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? Ot.Ambiguous : Ot.None;
      }
    };
    function K1(e) {
      return e === " " || e === `
` || e === "	";
    }
    var Ot;
    (function(e) {
      e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
    })(Ot || (Ot = {}));
    var Ws = class {
      constructor(e, t, n) {
        this.changes = e, this.moves = t, this.hitTimeout = n;
      }
    }, fv = class L0 {
      constructor(t, n) {
        this.lineRangeMapping = t, this.changes = n;
      }
      flip() {
        return new L0(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
      }
    }, Ee = class on {
      static fromTo(t, n) {
        return new on(t, n);
      }
      static addRange(t, n) {
        let r = 0;
        for (; r < n.length && n[r].endExclusive < t.start; ) r++;
        let i = r;
        for (; i < n.length && n[i].start <= t.endExclusive; ) i++;
        if (r === i) n.splice(r, 0, t);
        else {
          let a = Math.min(t.start, n[r].start), s = Math.max(t.endExclusive, n[i - 1].endExclusive);
          n.splice(r, i - r, new on(a, s));
        }
      }
      static tryCreate(t, n) {
        if (!(t > n)) return new on(t, n);
      }
      static ofLength(t) {
        return new on(0, t);
      }
      static ofStartAndLength(t, n) {
        return new on(t, t + n);
      }
      static emptyAt(t) {
        return new on(t, t);
      }
      constructor(t, n) {
        if (this.start = t, this.endExclusive = n, t > n) throw new ut(`Invalid range: ${this.toString()}`);
      }
      get isEmpty() {
        return this.start === this.endExclusive;
      }
      delta(t) {
        return new on(this.start + t, this.endExclusive + t);
      }
      deltaStart(t) {
        return new on(this.start + t, this.endExclusive);
      }
      deltaEnd(t) {
        return new on(this.start, this.endExclusive + t);
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
        return new on(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
      }
      intersect(t) {
        let n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
        if (n <= r) return new on(n, r);
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
        return new on(this.start, t.endExclusive);
      }
    }, Fe = (ht = class {
      static ofLength(t, n) {
        return new ht(t, t + n);
      }
      static fromRange(t) {
        return new ht(t.startLineNumber, t.endLineNumber);
      }
      static fromRangeInclusive(t) {
        return new ht(t.startLineNumber, t.endLineNumber + 1);
      }
      static subtract(t, n) {
        return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [new ht(t.startLineNumber, n.startLineNumber), new ht(n.endLineNumberExclusive, t.endLineNumberExclusive)] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new ht(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)] : [new ht(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
      }
      static joinMany(t) {
        if (t.length === 0) return [];
        let n = new Ys(t[0].slice());
        for (let r = 1; r < t.length; r++) n = n.getUnion(new Ys(t[r].slice()));
        return n.ranges;
      }
      static join(t) {
        if (t.length === 0) throw new ut("lineRanges cannot be empty");
        let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
        for (let i = 1; i < t.length; i++) n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
        return new ht(n, r);
      }
      static deserialize(t) {
        return new ht(t[0], t[1]);
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
        return new ht(this.startLineNumber + t, this.endLineNumberExclusive + t);
      }
      deltaLength(t) {
        return new ht(this.startLineNumber, this.endLineNumberExclusive + t);
      }
      get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
      }
      join(t) {
        return new ht(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
      }
      toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
      }
      intersect(t) {
        let n = Math.max(this.startLineNumber, t.startLineNumber), r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
        if (n <= r) return new ht(n, r);
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
        return new ht(this.startLineNumber - t, this.endLineNumberExclusive + n);
      }
    }, ht.compareByStart = Ci((t) => t.startLineNumber, ya), ht), Ys = class aa {
      constructor(t = []) {
        this._normalizedRanges = t;
      }
      get ranges() {
        return this._normalizedRanges;
      }
      addRange(t) {
        if (t.length === 0) return;
        let n = ku(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = Ni(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
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
        let n = yi(this._normalizedRanges, (r) => r.startLineNumber <= t);
        return !!n && n.endLineNumberExclusive > t;
      }
      intersects(t) {
        let n = yi(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
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
        return a !== null && n.push(a), new aa(n);
      }
      subtractFrom(t) {
        let n = ku(this._normalizedRanges, (s) => s.endLineNumberExclusive >= t.startLineNumber), r = Ni(this._normalizedRanges, (s) => s.startLineNumber <= t.endLineNumberExclusive) + 1;
        if (n === r) return new aa([t]);
        let i = [], a = t.startLineNumber;
        for (let s = n; s < r; s++) {
          let o = this._normalizedRanges[s];
          o.startLineNumber > a && i.push(new Fe(a, o.startLineNumber)), a = o.endLineNumberExclusive;
        }
        return a < t.endLineNumberExclusive && i.push(new Fe(a, t.endLineNumberExclusive)), new aa(i);
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
        return new aa(n);
      }
      getWithDelta(t) {
        return new aa(this._normalizedRanges.map((n) => n.delta(t)));
      }
    }, Fa = (Lt = class {
      static lengthDiffNonNegative(t, n) {
        return n.isLessThan(t) ? Lt.zero : t.lineCount === n.lineCount ? new Lt(0, n.columnCount - t.columnCount) : new Lt(n.lineCount - t.lineCount, n.columnCount);
      }
      static betweenPositions(t, n) {
        return t.lineNumber === n.lineNumber ? new Lt(0, n.column - t.column) : new Lt(n.lineNumber - t.lineNumber, n.column - 1);
      }
      static fromPosition(t) {
        return new Lt(t.lineNumber - 1, t.column - 1);
      }
      static ofRange(t) {
        return Lt.betweenPositions(t.getStartPosition(), t.getEndPosition());
      }
      static ofText(t) {
        let n = 0, r = 0;
        for (let i of t) i === `
` ? (n++, r = 0) : r++;
        return new Lt(n, r);
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
        return t.lineCount === 0 ? new Lt(this.lineCount, this.columnCount + t.columnCount) : new Lt(this.lineCount + t.lineCount, t.columnCount);
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
    }, Lt.zero = new Lt(0, 0), Lt), pv = class {
      getOffsetRange(e) {
        return new Ee(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
      }
      getRange(e) {
        return fe.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
      }
      getStringEdit(e) {
        let t = e.replacements.map((n) => this.getStringReplacement(n));
        return new Gr.deps.StringEdit(t);
      }
      getStringReplacement(e) {
        return new Gr.deps.StringReplacement(this.getOffsetRange(e.range), e.text);
      }
      getSingleTextEdit(e) {
        return new Gr.deps.TextReplacement(this.getRange(e.replaceRange), e.newText);
      }
      getTextEdit(e) {
        let t = e.replacements.map((n) => this.getSingleTextEdit(n));
        return new Gr.deps.TextEdit(t);
      }
    }, Gr = (Zi = class {
      static get deps() {
        if (!this._deps) throw new Error("Dependencies not set. Call _setDependencies first.");
        return this._deps;
      }
    }, Zi._deps = void 0, Zi);
    function mv(e) {
      Gr._deps = e;
    }
    var j1 = class extends pv {
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
        let t = Ni(this.lineStartOffsetByLineIdx, (i) => i <= e), n = t + 1, r = e - this.lineStartOffsetByLineIdx[t] + 1;
        return new Te(n, r);
      }
      getTextLength(e) {
        return Gr.deps.TextLength.ofRange(this.getRange(e));
      }
      get textLength() {
        let e = this.lineStartOffsetByLineIdx.length - 1;
        return new Gr.deps.TextLength(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
      }
      getLineLength(e) {
        return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
      }
    }, q1 = class {
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
        return this._transformer || (this._transformer = new j1(this.getValue())), this._transformer;
      }
      getLineAt(e) {
        return this.getValueOfRange(new fe(e, 1, e, Number.MAX_SAFE_INTEGER));
      }
      getLines() {
        let e = this.getValue();
        return Vh(e);
      }
      getLinesOfRange(e) {
        return e.mapToLineArray((t) => this.getLineAt(t));
      }
      equals(e) {
        return this === e ? !0 : this.getValue() === e.getValue();
      }
    }, gv = class extends q1 {
      constructor(e, t) {
        f_(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
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
        return new Fa(this._lineCount - 1, e.length);
      }
    }, zs = class extends gv {
      constructor(e) {
        super((t) => e[t - 1], e.length);
      }
    }, Ia = class extends q1 {
      constructor(e) {
        super(), this.value = e, this._t = new j1(this.value);
      }
      getValueOfRange(e) {
        return this._t.getOffsetRange(e).substring(this.value);
      }
      get length() {
        return this._t.textLength;
      }
    }, ul = class kr {
      static fromStringEdit(t, n) {
        let r = t.replacements.map((i) => er.fromStringReplacement(i, n));
        return new kr(r);
      }
      static replace(t, n) {
        return new kr([new er(t, n)]);
      }
      static delete(t) {
        return new kr([new er(t, "")]);
      }
      static insert(t, n) {
        return new kr([new er(fe.fromPositions(t, t), n)]);
      }
      static fromParallelReplacementsUnsorted(t) {
        let n = t.slice().sort(Ci((r) => r.range, fe.compareRangesUsingStarts));
        return new kr(n);
      }
      constructor(t) {
        this.replacements = t, Na(() => Uu(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
      }
      normalize() {
        let t = [];
        for (let n of this.replacements) if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
          let r = t[t.length - 1];
          t[t.length - 1] = new er(r.range.plusRange(n.range), r.text + n.text);
        } else n.isEmpty || t.push(n);
        return new kr(t);
      }
      mapPosition(t) {
        let n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = a.range.getStartPosition();
          if (t.isBeforeOrEqual(s)) break;
          let o = a.range.getEndPosition(), u = Fa.ofText(a.text);
          if (t.isBefore(o)) {
            let l = new Te(s.lineNumber + n, s.column + (s.lineNumber + n === r ? i : 0)), c = u.addToPosition(l);
            return Xs(l, c);
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
        return Xs(i, a);
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
          let s = a.range, o = s.getStartPosition(), u = s.getEndPosition(), l = Xs(r, o);
          l.isEmpty() || (n += t.getValueOfRange(l)), n += a.text, r = u;
        }
        let i = Xs(r, t.endPositionExclusive);
        return i.isEmpty() || (n += t.getValueOfRange(i)), n;
      }
      applyToString(t) {
        let n = new Ia(t);
        return this.apply(n);
      }
      inverse(t) {
        let n = this.getNewRanges();
        return new kr(this.replacements.map((r, i) => new er(n[i], t.getValueOfRange(r.range))));
      }
      getNewRanges() {
        let t = [], n = 0, r = 0, i = 0;
        for (let a of this.replacements) {
          let s = Fa.ofText(a.text), o = Te.lift({ lineNumber: a.range.startLineNumber + r, column: a.range.startColumn + (a.range.startLineNumber === n ? i : 0) }), u = s.createRange(o);
          t.push(u), r = u.endLineNumber - a.range.endLineNumber, i = u.endColumn - a.range.endColumn, n = a.range.endLineNumber;
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
            let o = this.replacements[a + 1], u = fe.fromPositions(s.range.getEndPosition(), o.range.getStartPosition()), l = t.getValueOfRange(u);
            i += l;
          }
        }
        return new er(fe.fromPositions(n, r), i);
      }
      equals(t) {
        return Ah(this.replacements, t.replacements, (n, r) => n.equals(r));
      }
      toString(t) {
        return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new Ia(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
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
    }, er = class pi {
      static joinReplacements(t, n) {
        if (t.length === 0) throw new ut();
        if (t.length === 1) return t[0];
        let r = t[0].range.getStartPosition(), i = t[t.length - 1].range.getEndPosition(), a = "";
        for (let s = 0; s < t.length; s++) {
          let o = t[s];
          if (a += o.text, s < t.length - 1) {
            let u = t[s + 1], l = fe.fromPositions(o.range.getEndPosition(), u.range.getStartPosition()), c = n.getValueOfRange(l);
            a += c;
          }
        }
        return new pi(fe.fromPositions(r, i), a);
      }
      static fromStringReplacement(t, n) {
        return new pi(n.getTransformer().getRange(t.replaceRange), t.newText);
      }
      static delete(t) {
        return new pi(t, "");
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
        return new ul([this]);
      }
      equals(t) {
        return pi.equals(this, t);
      }
      extendToCoverRange(t, n) {
        if (this.range.containsRange(t)) return this;
        let r = this.range.plusRange(t), i = n.getValueOfRange(fe.fromPositions(r.getStartPosition(), this.range.getStartPosition())), a = n.getValueOfRange(fe.fromPositions(this.range.getEndPosition(), r.getEndPosition())), s = i + this.text + a;
        return new pi(r, s);
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
`), i = Bs(n, r), a = Fa.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), s = r.substring(i), o = fe.fromPositions(a, this.range.getEndPosition());
        return new pi(o, s);
      }
      isEffectiveDeletion(t) {
        let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = Bs(n, r);
        n = n.substring(i), r = r.substring(i);
        let a = $u(n, r);
        return n = n.substring(0, n.length - a), r = r.substring(0, r.length - a), n === "";
      }
    };
    function Xs(e, t) {
      if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER) return fe.fromPositions(t, t);
      if (!e.isBeforeOrEqual(t)) throw new ut("start must be before end");
      return new fe(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    var xi = class sa {
      static inverse(t, n, r) {
        let i = [], a = 1, s = 1;
        for (let u of t) {
          let l = new sa(new Fe(a, u.original.startLineNumber), new Fe(s, u.modified.startLineNumber));
          l.modified.isEmpty || i.push(l), a = u.original.endLineNumberExclusive, s = u.modified.endLineNumberExclusive;
        }
        let o = new sa(new Fe(a, n + 1), new Fe(s, r + 1));
        return o.modified.isEmpty || i.push(o), i;
      }
      static clip(t, n, r) {
        let i = [];
        for (let a of t) {
          let s = a.original.intersect(n), o = a.modified.intersect(r);
          s && !s.isEmpty && o && !o.isEmpty && i.push(new sa(s, o));
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
        return new sa(this.modified, this.original);
      }
      join(t) {
        return new sa(this.original.join(t.original), this.modified.join(t.modified));
      }
      get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
      }
      toRangeMapping() {
        let t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
        if (t && n) return new tr(t, n);
        if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
          if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new ut("not a valid diff");
          return new tr(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        } else return new tr(new fe(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new fe(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
      }
      toRangeMapping2(t, n) {
        if (G1(this.original.endLineNumberExclusive, t) && G1(this.modified.endLineNumberExclusive, n)) return new tr(new fe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new fe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new tr(fe.fromPositions(new Te(this.original.startLineNumber, 1), ki(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(new Te(this.modified.startLineNumber, 1), ki(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new tr(fe.fromPositions(ki(new Te(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), ki(new Te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), fe.fromPositions(ki(new Te(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), ki(new Te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        throw new ut();
      }
    };
    function ki(e, t) {
      if (e.lineNumber < 1) return new Te(1, 1);
      if (e.lineNumber > t.length) return new Te(t.length, t[t.length - 1].length + 1);
      let n = t[e.lineNumber - 1];
      return e.column > n.length + 1 ? new Te(e.lineNumber, n.length + 1) : e;
    }
    function G1(e, t) {
      return e >= 1 && e <= t.length;
    }
    var Mi = class Ro extends xi {
      static toTextEdit(t, n) {
        let r = [];
        for (let i of t) for (let a of i.innerChanges ?? []) {
          let s = a.toTextEdit(n);
          r.push(s);
        }
        return new ul(r);
      }
      static fromRangeMappings(t) {
        let n = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.originalRange))), r = Fe.join(t.map((i) => Fe.fromRangeInclusive(i.modifiedRange)));
        return new Ro(n, r, t);
      }
      constructor(t, n, r) {
        super(t, n), this.innerChanges = r;
      }
      flip() {
        return new Ro(this.modified, this.original, this.innerChanges?.map((t) => t.flip()));
      }
      withInnerChangesFromLineRanges() {
        return new Ro(this.original, this.modified, [this.toRangeMapping()]);
      }
    }, tr = class oa {
      static fromEdit(t) {
        let n = t.getNewRanges();
        return t.replacements.map((r, i) => new oa(r.range, n[i]));
      }
      static fromEditJoin(t) {
        let n = t.getNewRanges(), r = t.replacements.map((i, a) => new oa(i.range, n[a]));
        return oa.join(r);
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
        return new oa(this.modifiedRange, this.originalRange);
      }
      toTextEdit(t) {
        let n = t.getValueOfRange(this.modifiedRange);
        return new er(this.originalRange, n);
      }
      join(t) {
        return new oa(this.originalRange.plusRange(t.originalRange), this.modifiedRange.plusRange(t.modifiedRange));
      }
    };
    function H1(e, t, n, r = !1) {
      let i = [];
      for (let a of Z2(e.map((s) => Ev(s, t, n)), (s, o) => s.original.intersectsOrTouches(o.original) || s.modified.intersectsOrTouches(o.modified))) {
        let s = a[0], o = a[a.length - 1];
        i.push(new Mi(s.original.join(o.original), s.modified.join(o.modified), a.map((u) => u.innerChanges[0])));
      }
      return Na(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : Uu(i, (a, s) => s.original.startLineNumber - a.original.endLineNumberExclusive === s.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < s.original.startLineNumber && a.modified.endLineNumberExclusive < s.modified.startLineNumber)), i;
    }
    function Ev(e, t, n) {
      let r = 0, i = 0;
      e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
      let a = new Fe(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i), s = new Fe(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i);
      return new Mi(a, s, [e]);
    }
    var _v = 3, Dv = class {
      computeDiff(e, t, n) {
        let r = new z1(e, t, { maxComputationTime: n.maxComputationTimeMs, shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace, shouldComputeCharChanges: !0, shouldMakePrettyDiff: !0, shouldPostProcessCharChanges: !0 }).computeDiff(), i = [], a = null;
        for (let s of r.changes) {
          let o;
          s.originalEndLineNumber === 0 ? o = new Fe(s.originalStartLineNumber + 1, s.originalStartLineNumber + 1) : o = new Fe(s.originalStartLineNumber, s.originalEndLineNumber + 1);
          let u;
          s.modifiedEndLineNumber === 0 ? u = new Fe(s.modifiedStartLineNumber + 1, s.modifiedStartLineNumber + 1) : u = new Fe(s.modifiedStartLineNumber, s.modifiedEndLineNumber + 1);
          let l = new Mi(o, u, s.charChanges?.map((c) => new tr(new fe(c.originalStartLineNumber, c.originalStartColumn, c.originalEndLineNumber, c.originalEndColumn), new fe(c.modifiedStartLineNumber, c.modifiedStartColumn, c.modifiedEndLineNumber, c.modifiedEndColumn))));
          a && (a.modified.endLineNumberExclusive === l.modified.startLineNumber || a.original.endLineNumberExclusive === l.original.startLineNumber) && (l = new Mi(a.original.join(l.original), a.modified.join(l.modified), a.innerChanges && l.innerChanges ? a.innerChanges.concat(l.innerChanges) : void 0), i.pop()), i.push(l), a = l;
        }
        return Na(() => Uu(i, (s, o) => o.original.startLineNumber - s.original.endLineNumberExclusive === o.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < o.original.startLineNumber && s.modified.endLineNumberExclusive < o.modified.startLineNumber)), new Ws(i, [], r.quitEarly);
      }
    };
    function W1(e, t, n, r) {
      return new Zh(e, t, n).ComputeDiff(r);
    }
    var Y1 = class {
      constructor(e) {
        let t = [], n = [];
        for (let r = 0, i = e.length; r < i; r++) t[r] = cl(e[r], 1), n[r] = dl(e[r], 1);
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
          !e && o < n && (r[s] = R.LineFeed, i[s] = o + 1, a[s] = u.length + 1, s++);
        }
        return new vv(r, i, a);
      }
    }, vv = class {
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
    }, Js = class F0 {
      constructor(t, n, r, i, a, s, o, u) {
        this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = a, this.modifiedStartColumn = s, this.modifiedEndLineNumber = o, this.modifiedEndColumn = u;
      }
      static createFromDiffChange(t, n, r) {
        let i = n.getStartLineNumber(t.originalStart), a = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), o = n.getEndColumn(t.originalStart + t.originalLength - 1), u = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
        return new F0(i, a, s, o, u, l, c, f);
      }
    };
    function bv(e) {
      if (e.length <= 1) return e;
      let t = [e[0]], n = t[0];
      for (let r = 1, i = e.length; r < i; r++) {
        let a = e[r], s = a.originalStart - (n.originalStart + n.originalLength), o = a.modifiedStart - (n.modifiedStart + n.modifiedLength);
        Math.min(s, o) < _v ? (n.originalLength = a.originalStart + a.originalLength - n.originalStart, n.modifiedLength = a.modifiedStart + a.modifiedLength - n.modifiedStart) : (t.push(a), n = a);
      }
      return t;
    }
    var ll = class I0 {
      constructor(t, n, r, i, a) {
        this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = a;
      }
      static createFromDiffResult(t, n, r, i, a, s, o) {
        let u, l, c, f, p;
        if (n.originalLength === 0 ? (u = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (u = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = i.getStartLineNumber(n.modifiedStart) - 1, f = 0) : (c = i.getStartLineNumber(n.modifiedStart), f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && a()) {
          let m = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
          if (m.getElements().length > 0 && g.getElements().length > 0) {
            let _ = W1(m, g, a, !0).changes;
            o && (_ = bv(_)), p = [];
            for (let w = 0, S = _.length; w < S; w++) p.push(Js.createFromDiffChange(_[w], m, g));
          }
        }
        return new I0(u, l, c, f, p);
      }
    }, z1 = class {
      constructor(e, t, n) {
        this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new Y1(e), this.modified = new Y1(t), this.continueLineDiff = X1(n.maxComputationTime), this.continueCharDiff = X1(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
      }
      computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: !1, changes: [] } : { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: void 0 }] };
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: void 0 }] };
        let e = W1(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
          let s = [];
          for (let o = 0, u = t.length; o < u; o++) s.push(ll.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          return { quitEarly: n, changes: s };
        }
        let r = [], i = 0, a = 0;
        for (let s = -1, o = t.length; s < o; s++) {
          let u = s + 1 < o ? t[s + 1] : null, l = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length;
          for (; i < l && a < c; ) {
            let f = this.originalLines[i], p = this.modifiedLines[a];
            if (f !== p) {
              {
                let m = cl(f, 1), g = cl(p, 1);
                for (; m > 1 && g > 1; ) {
                  let _ = f.charCodeAt(m - 2), w = p.charCodeAt(g - 2);
                  if (_ !== w) break;
                  m--, g--;
                }
                (m > 1 || g > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, m, a + 1, 1, g);
              }
              {
                let m = dl(f, 1), g = dl(p, 1), _ = f.length + 1, w = p.length + 1;
                for (; m < _ && g < w; ) {
                  let S = f.charCodeAt(m - 1), F = f.charCodeAt(g - 1);
                  if (S !== F) break;
                  m++, g++;
                }
                (m < _ || g < w) && this._pushTrimWhitespaceCharChange(r, i + 1, m, _, a + 1, g, w);
              }
            }
            i++, a++;
          }
          u && (r.push(ll.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += u.originalLength, a += u.modifiedLength);
        }
        return { quitEarly: n, changes: r };
      }
      _pushTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s)) return;
        let o;
        this.shouldComputeCharChanges && (o = [new Js(t, n, t, r, i, a, i, s)]), e.push(new ll(t, t, i, i, o));
      }
      _mergeTrimWhitespaceCharChange(e, t, n, r, i, a, s) {
        let o = e.length;
        if (o === 0) return !1;
        let u = e[o - 1];
        return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === t && u.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Js(t, n, t, r, i, a, i, s)), !0) : u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i ? (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Js(t, n, t, r, i, a, i, s)), !0) : !1;
      }
    };
    function cl(e, t) {
      let n = W_(e);
      return n === -1 ? t : n + 1;
    }
    function dl(e, t) {
      let n = Y_(e);
      return n === -1 ? t : n + 2;
    }
    function X1(e) {
      if (e === 0) return () => !0;
      let t = Date.now();
      return () => Date.now() - t < e;
    }
    var Ui = class bc {
      static trivial(t, n) {
        return new bc([new Ht(Ee.ofLength(t.length), Ee.ofLength(n.length))], !1);
      }
      static trivialTimedOut(t, n) {
        return new bc([new Ht(Ee.ofLength(t.length), Ee.ofLength(n.length))], !0);
      }
      constructor(t, n) {
        this.diffs = t, this.hitTimeout = n;
      }
    }, Ht = class fr {
      static invert(t, n) {
        let r = [];
        return e_(t, (i, a) => {
          r.push(fr.fromOffsetPairs(i ? i.getEndExclusives() : Hr.zero, a ? a.getStarts() : new Hr(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)));
        }), r;
      }
      static fromOffsetPairs(t, n) {
        return new fr(new Ee(t.offset1, n.offset1), new Ee(t.offset2, n.offset2));
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
        return new fr(this.seq2Range, this.seq1Range);
      }
      toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
      }
      join(t) {
        return new fr(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
      }
      delta(t) {
        return t === 0 ? this : new fr(this.seq1Range.delta(t), this.seq2Range.delta(t));
      }
      deltaStart(t) {
        return t === 0 ? this : new fr(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
      }
      deltaEnd(t) {
        return t === 0 ? this : new fr(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
      }
      intersectsOrTouches(t) {
        return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
      }
      intersect(t) {
        let n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
        if (!(!n || !r)) return new fr(n, r);
      }
      getStarts() {
        return new Hr(this.seq1Range.start, this.seq2Range.start);
      }
      getEndExclusives() {
        return new Hr(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
      }
    }, Hr = ($n = class {
      constructor(t, n) {
        this.offset1 = t, this.offset2 = n;
      }
      toString() {
        return `${this.offset1} <-> ${this.offset2}`;
      }
      delta(t) {
        return t === 0 ? this : new $n(this.offset1 + t, this.offset2 + t);
      }
      equals(t) {
        return this.offset1 === t.offset1 && this.offset2 === t.offset2;
      }
    }, $n.zero = new $n(0, 0), $n.max = new $n(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), $n), hl = (li = class {
      isValid() {
        return !0;
      }
    }, li.instance = new li(), li), yv = class {
      constructor(e) {
        if (this.timeout = e, this.startTime = Date.now(), this.valid = !0, e <= 0) throw new ut("timeout must be positive");
      }
      isValid() {
        return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
      }
      disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
      }
    }, fl = class {
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
    function pl(e) {
      return e === R.Space || e === R.Tab;
    }
    var J1 = (Or = class {
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
            let l = s[u], c = Or.getKey(l);
            this.histogram[c] = (this.histogram[c] || 0) + 1;
          }
          i++;
          let o = Or.getKey(`
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
    }, Or.chrKeys = /* @__PURE__ */ new Map(), Or), Nv = class {
      compute(e, t, n = hl.instance, r) {
        if (e.length === 0 || t.length === 0) return Ui.trivial(e, t);
        let i = new fl(e.length, t.length), a = new fl(e.length, t.length), s = new fl(e.length, t.length);
        for (let m = 0; m < e.length; m++) for (let g = 0; g < t.length; g++) {
          if (!n.isValid()) return Ui.trivialTimedOut(e, t);
          let _ = m === 0 ? 0 : i.get(m - 1, g), w = g === 0 ? 0 : i.get(m, g - 1), S;
          e.getElement(m) === t.getElement(g) ? (m === 0 || g === 0 ? S = 0 : S = i.get(m - 1, g - 1), m > 0 && g > 0 && a.get(m - 1, g - 1) === 3 && (S += s.get(m - 1, g - 1)), S += r ? r(m, g) : 1) : S = -1;
          let F = Math.max(_, w, S);
          if (F === S) {
            let C = m > 0 && g > 0 ? s.get(m - 1, g - 1) : 0;
            s.set(m, g, C + 1), a.set(m, g, 3);
          } else F === _ ? (s.set(m, g, 0), a.set(m, g, 1)) : F === w && (s.set(m, g, 0), a.set(m, g, 2));
          i.set(m, g, F);
        }
        let o = [], u = e.length, l = t.length;
        function c(m, g) {
          (m + 1 !== u || g + 1 !== l) && o.push(new Ht(new Ee(m + 1, u), new Ee(g + 1, l))), u = m, l = g;
        }
        let f = e.length - 1, p = t.length - 1;
        for (; f >= 0 && p >= 0; ) a.get(f, p) === 3 ? (c(f, p), f--, p--) : a.get(f, p) === 1 ? f-- : p--;
        return c(-1, -1), o.reverse(), new Ui(o, !1);
      }
    }, Q1 = class {
      compute(e, t, n = hl.instance) {
        if (e.length === 0 || t.length === 0) return Ui.trivial(e, t);
        let r = e, i = t;
        function a(g, _) {
          for (; g < r.length && _ < i.length && r.getElement(g) === i.getElement(_); ) g++, _++;
          return g;
        }
        let s = 0, o = new Cv();
        o.set(0, a(0, 0));
        let u = new Tv();
        u.set(0, o.get(0) === 0 ? null : new Z1(null, 0, 0, o.get(0)));
        let l = 0;
        e: for (; ; ) {
          if (s++, !n.isValid()) return Ui.trivialTimedOut(r, i);
          let g = -Math.min(s, i.length + s % 2), _ = Math.min(s, r.length + s % 2);
          for (l = g; l <= _; l += 2) {
            let w = l === _ ? -1 : o.get(l + 1), S = l === g ? -1 : o.get(l - 1) + 1, F = Math.min(Math.max(w, S), r.length), C = F - l;
            if (F > r.length || C > i.length) continue;
            let x = a(F, C);
            o.set(l, x);
            let U = F === w ? u.get(l + 1) : u.get(l - 1);
            if (u.set(l, x !== F ? new Z1(U, F, C, x - F) : U), o.get(l) === r.length && o.get(l) - l === i.length) break e;
          }
        }
        let c = u.get(l), f = [], p = r.length, m = i.length;
        for (; ; ) {
          let g = c ? c.x + c.length : 0, _ = c ? c.y + c.length : 0;
          if ((g !== p || _ !== m) && f.push(new Ht(new Ee(g, p), new Ee(_, m))), !c) break;
          p = c.x, m = c.y, c = c.prev;
        }
        return f.reverse(), new Ui(f, !1);
      }
    }, Z1 = class {
      constructor(e, t, n, r) {
        this.prev = e, this.x = t, this.y = n, this.length = r;
      }
    }, Cv = class {
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
    }, Tv = class {
      constructor() {
        this.positiveArr = [], this.negativeArr = [];
      }
      get(e) {
        return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
      }
      set(e, t) {
        e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
      }
    }, Qs = class {
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
        let t = np(e > 0 ? this.elements[e - 1] : -1), n = np(e < this.elements.length ? this.elements[e] : -1);
        if (t === We.LineBreakCR && n === We.LineBreakLF) return 0;
        if (t === We.LineBreakLF) return 150;
        let r = 0;
        return t !== n && (r += 10, t === We.WordLower && n === We.WordUpper && (r += 1)), r += tp(t), r += tp(n), r;
      }
      translateOffset(e, t = "right") {
        let n = Ni(this.firstElementOffsetByLineIdx, (i) => i <= e), r = e - this.firstElementOffsetByLineIdx[n];
        return new Te(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (r === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
      }
      translateRange(e) {
        let t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
        return n.isBefore(t) ? fe.fromPositions(n, n) : fe.fromPositions(t, n);
      }
      findWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Pi(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Pi(this.elements[t - 1]); ) t--;
        let n = e;
        for (; n < this.elements.length && Pi(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      findSubWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !Pi(this.elements[e])) return;
        let t = e;
        for (; t > 0 && Pi(this.elements[t - 1]) && !ep(this.elements[t]); ) t--;
        let n = e;
        for (; n < this.elements.length && Pi(this.elements[n]) && !ep(this.elements[n]); ) n++;
        return new Ee(t, n);
      }
      countLinesIn(e) {
        return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
      }
      isStronglyEqual(e, t) {
        return this.elements[e] === this.elements[t];
      }
      extendToFullLines(e) {
        let t = yi(this.firstElementOffsetByLineIdx, (r) => r <= e.start) ?? 0, n = Q2(this.firstElementOffsetByLineIdx, (r) => e.endExclusive <= r) ?? this.elements.length;
        return new Ee(t, n);
      }
    };
    function Pi(e) {
      return e >= R.a && e <= R.z || e >= R.A && e <= R.Z || e >= R.Digit0 && e <= R.Digit9;
    }
    function ep(e) {
      return e >= R.A && e <= R.Z;
    }
    var We;
    (function(e) {
      e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
    })(We || (We = {}));
    var wv = { [We.WordLower]: 0, [We.WordUpper]: 0, [We.WordNumber]: 0, [We.End]: 10, [We.Other]: 2, [We.Separator]: 30, [We.Space]: 3, [We.LineBreakCR]: 10, [We.LineBreakLF]: 10 };
    function tp(e) {
      return wv[e];
    }
    function np(e) {
      return e === R.LineFeed ? We.LineBreakLF : e === R.CarriageReturn ? We.LineBreakCR : pl(e) ? We.Space : e >= R.a && e <= R.z ? We.WordLower : e >= R.A && e <= R.Z ? We.WordUpper : e >= R.Digit0 && e <= R.Digit9 ? We.WordNumber : e === -1 ? We.End : e === R.Comma || e === R.Semicolon ? We.Separator : We.Other;
    }
    function Av(e, t, n, r, i, a) {
      let { moves: s, excludedChanges: o } = Lv(e, t, n, a);
      if (!a.isValid()) return [];
      let u = e.filter((c) => !o.has(c)), l = Fv(u, r, i, t, n, a);
      return n_(s, l), s = Iv(s), s = s.filter((c) => {
        let f = c.original.toOffsetRange().slice(t).map((p) => p.trim());
        return f.join(`
`).length >= 15 && Sv(f, (p) => p.length >= 2) >= 2;
      }), s = Rv(e, s), s;
    }
    function Sv(e, t) {
      let n = 0;
      for (let r of e) t(r) && n++;
      return n;
    }
    function Lv(e, t, n, r) {
      let i = [], a = e.filter((u) => u.modified.isEmpty && u.original.length >= 3).map((u) => new J1(u.original, t, u)), s = new Set(e.filter((u) => u.original.isEmpty && u.modified.length >= 3).map((u) => new J1(u.modified, n, u))), o = /* @__PURE__ */ new Set();
      for (let u of a) {
        let l = -1, c;
        for (let f of s) {
          let p = u.computeSimilarity(f);
          p > l && (l = p, c = f);
        }
        if (l > 0.9 && c && (s.delete(c), i.push(new xi(u.range, c.range)), o.add(u.source), o.add(c.source)), !r.isValid()) return { moves: i, excludedChanges: o };
      }
      return { moves: i, excludedChanges: o };
    }
    function Fv(e, t, n, r, i, a) {
      let s = [], o = new d_();
      for (let p of e) for (let m = p.original.startLineNumber; m < p.original.endLineNumberExclusive - 2; m++) {
        let g = `${t[m - 1]}:${t[m + 1 - 1]}:${t[m + 2 - 1]}`;
        o.add(g, { range: new Fe(m, m + 3) });
      }
      let u = [];
      e.sort(Ci((p) => p.modified.startLineNumber, ya));
      for (let p of e) {
        let m = [];
        for (let g = p.modified.startLineNumber; g < p.modified.endLineNumberExclusive - 2; g++) {
          let _ = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`, w = new Fe(g, g + 3), S = [];
          o.forEach(_, ({ range: F }) => {
            for (let x of m) if (x.originalLineRange.endLineNumberExclusive + 1 === F.endLineNumberExclusive && x.modifiedLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive) {
              x.originalLineRange = new Fe(x.originalLineRange.startLineNumber, F.endLineNumberExclusive), x.modifiedLineRange = new Fe(x.modifiedLineRange.startLineNumber, w.endLineNumberExclusive), S.push(x);
              return;
            }
            let C = { modifiedLineRange: w, originalLineRange: F };
            u.push(C), S.push(C);
          }), m = S;
        }
        if (!a.isValid()) return [];
      }
      u.sort(r_(Ci((p) => p.modifiedLineRange.length, ya)));
      let l = new Ys(), c = new Ys();
      for (let p of u) {
        let m = p.modifiedLineRange.startLineNumber - p.originalLineRange.startLineNumber, g = l.subtractFrom(p.modifiedLineRange), _ = c.subtractFrom(p.originalLineRange).getWithDelta(m), w = g.getIntersection(_);
        for (let S of w.ranges) {
          if (S.length < 3) continue;
          let F = S, C = S.delta(-m);
          s.push(new xi(C, F)), l.addRange(F), c.addRange(C);
        }
      }
      s.sort(Ci((p) => p.original.startLineNumber, ya));
      let f = new wh(e);
      for (let p = 0; p < s.length; p++) {
        let m = s[p], g = f.findLastMonotonous((H) => H.original.startLineNumber <= m.original.startLineNumber), _ = yi(e, (H) => H.modified.startLineNumber <= m.modified.startLineNumber), w = Math.max(m.original.startLineNumber - g.original.startLineNumber, m.modified.startLineNumber - _.modified.startLineNumber), S = f.findLastMonotonous((H) => H.original.startLineNumber < m.original.endLineNumberExclusive), F = yi(e, (H) => H.modified.startLineNumber < m.modified.endLineNumberExclusive), C = Math.max(S.original.endLineNumberExclusive - m.original.endLineNumberExclusive, F.modified.endLineNumberExclusive - m.modified.endLineNumberExclusive), x;
        for (x = 0; x < w; x++) {
          let H = m.original.startLineNumber - x - 1, O = m.modified.startLineNumber - x - 1;
          if (H > r.length || O > i.length || l.contains(O) || c.contains(H) || !rp(r[H - 1], i[O - 1], a)) break;
        }
        x > 0 && (c.addRange(new Fe(m.original.startLineNumber - x, m.original.startLineNumber)), l.addRange(new Fe(m.modified.startLineNumber - x, m.modified.startLineNumber)));
        let U;
        for (U = 0; U < C; U++) {
          let H = m.original.endLineNumberExclusive + U, O = m.modified.endLineNumberExclusive + U;
          if (H > r.length || O > i.length || l.contains(O) || c.contains(H) || !rp(r[H - 1], i[O - 1], a)) break;
        }
        U > 0 && (c.addRange(new Fe(m.original.endLineNumberExclusive, m.original.endLineNumberExclusive + U)), l.addRange(new Fe(m.modified.endLineNumberExclusive, m.modified.endLineNumberExclusive + U))), (x > 0 || U > 0) && (s[p] = new xi(new Fe(m.original.startLineNumber - x, m.original.endLineNumberExclusive + U), new Fe(m.modified.startLineNumber - x, m.modified.endLineNumberExclusive + U)));
      }
      return s;
    }
    function rp(e, t, n) {
      if (e.trim() === t.trim()) return !0;
      if (e.length > 300 && t.length > 300) return !1;
      let r = new Q1().compute(new Qs([e], new fe(1, 1, 1, e.length), !1), new Qs([t], new fe(1, 1, 1, t.length), !1), n), i = 0, a = Ht.invert(r.diffs, e.length);
      for (let u of a) u.seq1Range.forEach((l) => {
        pl(e.charCodeAt(l)) || i++;
      });
      function s(u) {
        let l = 0;
        for (let c = 0; c < e.length; c++) pl(u.charCodeAt(c)) || l++;
        return l;
      }
      let o = s(e.length > t.length ? e : t);
      return i / o > 0.6 && o > 10;
    }
    function Iv(e) {
      if (e.length === 0) return e;
      e.sort(Ci((n) => n.original.startLineNumber, ya));
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
    function Rv(e, t) {
      let n = new wh(e);
      return t = t.filter((r) => {
        let i = n.findLastMonotonous((s) => s.original.startLineNumber < r.original.endLineNumberExclusive) || new xi(new Fe(1, 1), new Fe(1, 1)), a = yi(e, (s) => s.modified.startLineNumber < r.modified.endLineNumberExclusive);
        return i !== a;
      }), t;
    }
    function ip(e, t, n) {
      let r = n;
      return r = ap(e, t, r), r = ap(e, t, r), r = Ov(e, t, r), r;
    }
    function ap(e, t, n) {
      if (n.length === 0) return n;
      let r = [];
      r.push(n[0]);
      for (let a = 1; a < n.length; a++) {
        let s = r[r.length - 1], o = n[a];
        if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
          let u = o.seq1Range.start - s.seq1Range.endExclusive, l;
          for (l = 1; l <= u && !(e.getElement(o.seq1Range.start - l) !== e.getElement(o.seq1Range.endExclusive - l) || t.getElement(o.seq2Range.start - l) !== t.getElement(o.seq2Range.endExclusive - l)); l++) ;
          if (l--, l === u) {
            r[r.length - 1] = new Ht(new Ee(s.seq1Range.start, o.seq1Range.endExclusive - u), new Ee(s.seq2Range.start, o.seq2Range.endExclusive - u));
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
            r[a + 1] = new Ht(new Ee(o.seq1Range.start + u, s.seq1Range.endExclusive), new Ee(o.seq2Range.start + u, s.seq2Range.endExclusive));
            continue;
          }
          l > 0 && (o = o.delta(l));
        }
        i.push(o);
      }
      return r.length > 0 && i.push(r[r.length - 1]), i;
    }
    function Ov(e, t, n) {
      if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
      for (let r = 0; r < n.length; r++) {
        let i = r > 0 ? n[r - 1] : void 0, a = n[r], s = r + 1 < n.length ? n[r + 1] : void 0, o = new Ee(i ? i.seq1Range.endExclusive + 1 : 0, s ? s.seq1Range.start - 1 : e.length), u = new Ee(i ? i.seq2Range.endExclusive + 1 : 0, s ? s.seq2Range.start - 1 : t.length);
        a.seq1Range.isEmpty ? n[r] = sp(a, e, t, o, u) : a.seq2Range.isEmpty && (n[r] = sp(a.swap(), t, e, u, o).swap());
      }
      return n;
    }
    function sp(e, t, n, r, i) {
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
    function xv(e, t, n) {
      let r = [];
      for (let i of n) {
        let a = r[r.length - 1];
        if (!a) {
          r.push(i);
          continue;
        }
        i.seq1Range.start - a.seq1Range.endExclusive <= 2 || i.seq2Range.start - a.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new Ht(a.seq1Range.join(i.seq1Range), a.seq2Range.join(i.seq2Range)) : r.push(i);
      }
      return r;
    }
    function op(e, t, n, r, i = !1) {
      let a = Ht.invert(n, e.length), s = [], o = new Hr(0, 0);
      function u(l, c) {
        if (l.offset1 < o.offset1 || l.offset2 < o.offset2) return;
        let f = r(e, l.offset1), p = r(t, l.offset2);
        if (!f || !p) return;
        let m = new Ht(f, p), g = m.intersect(c), _ = g.seq1Range.length, w = g.seq2Range.length;
        for (; a.length > 0; ) {
          let S = a[0];
          if (!(S.seq1Range.intersects(m.seq1Range) || S.seq2Range.intersects(m.seq2Range))) break;
          let F = r(e, S.seq1Range.start), C = r(t, S.seq2Range.start), x = new Ht(F, C), U = x.intersect(S);
          if (_ += U.seq1Range.length, w += U.seq2Range.length, m = m.join(x), m.seq1Range.endExclusive >= S.seq1Range.endExclusive) a.shift();
          else break;
        }
        (i && _ + w < m.seq1Range.length + m.seq2Range.length || _ + w < (m.seq1Range.length + m.seq2Range.length) * 2 / 3) && s.push(m), o = m.getEndExclusives();
      }
      for (; a.length > 0; ) {
        let l = a.shift();
        l.seq1Range.isEmpty || (u(l.getStarts(), l), u(l.getEndExclusives().delta(-1), l));
      }
      return kv(n, s);
    }
    function kv(e, t) {
      let n = [];
      for (; e.length > 0 || t.length > 0; ) {
        let r = e[0], i = t[0], a;
        r && (!i || r.seq1Range.start < i.seq1Range.start) ? a = e.shift() : a = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= a.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(a) : n.push(a);
      }
      return n;
    }
    function Mv(e, t, n) {
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
    function Uv(e, t, n) {
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
            let w = e.countLinesIn(p.seq1Range), S = p.seq1Range.length, F = t.countLinesIn(p.seq2Range), C = p.seq2Range.length, x = e.countLinesIn(m.seq1Range), U = m.seq1Range.length, H = t.countLinesIn(m.seq2Range), O = m.seq2Range.length, B = 2 * 40 + 50;
            function L(j) {
              return Math.min(j, B);
            }
            return Math.pow(Math.pow(L(w * 40 + S), 1.5) + Math.pow(L(F * 40 + C), 1.5), 1.5) + Math.pow(Math.pow(L(x * 40 + U), 1.5) + Math.pow(L(H * 40 + O), 1.5), 1.5) > (B ** 1.5) ** 1.5 * 1.3;
          }, c = r[u], f = o[o.length - 1];
          l(f, c) ? (a = !0, o[o.length - 1] = o[o.length - 1].join(c)) : o.push(c);
        }
        r = o;
      } while (i++ < 10 && a);
      let s = [];
      return t_(r, (o, u, l) => {
        let c = u;
        function f(S) {
          return S.length > 0 && S.trim().length <= 3 && u.seq1Range.length + u.seq2Range.length > 100;
        }
        let p = e.extendToFullLines(u.seq1Range), m = e.getText(new Ee(p.start, u.seq1Range.start));
        f(m) && (c = c.deltaStart(-m.length));
        let g = e.getText(new Ee(u.seq1Range.endExclusive, p.endExclusive));
        f(g) && (c = c.deltaEnd(g.length));
        let _ = Ht.fromOffsetPairs(o ? o.getEndExclusives() : Hr.zero, l ? l.getStarts() : Hr.max), w = c.intersect(_);
        s.length > 0 && w.getStarts().equals(s[s.length - 1].getEndExclusives()) ? s[s.length - 1] = s[s.length - 1].join(w) : s.push(w);
      }), s;
    }
    var up = class {
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
        let t = e === 0 ? 0 : lp(this.lines[e - 1]), n = e === this.lines.length ? 0 : lp(this.lines[e]);
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
    function lp(e) {
      let t = 0;
      for (; t < e.length && (e.charCodeAt(t) === R.Space || e.charCodeAt(t) === R.Tab); ) t++;
      return t;
    }
    var Pv = class {
      constructor() {
        this.dynamicProgrammingDiffing = new Nv(), this.myersDiffingAlgorithm = new Q1();
      }
      computeDiff(e, t, n) {
        if (e.length <= 1 && Ah(e, t, (H, O) => H === O)) return new Ws([], [], !1);
        if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0) return new Ws([new Mi(new Fe(1, e.length + 1), new Fe(1, t.length + 1), [new tr(new fe(1, 1, e.length, e[e.length - 1].length + 1), new fe(1, 1, t.length, t[t.length - 1].length + 1))])], [], !1);
        let r = n.maxComputationTimeMs === 0 ? hl.instance : new yv(n.maxComputationTimeMs), i = !n.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
        function s(H) {
          let O = a.get(H);
          return O === void 0 && (O = a.size, a.set(H, O)), O;
        }
        let o = e.map((H) => s(H.trim())), u = t.map((H) => s(H.trim())), l = new up(o, e), c = new up(u, t), f = l.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(l, c, r, (H, O) => e[H] === t[O] ? t[O].length === 0 ? 0.1 : 1 + Math.log(1 + t[O].length) : 0.99) : this.myersDiffingAlgorithm.compute(l, c, r), p = f.diffs, m = f.hitTimeout;
        p = ip(l, c, p), p = Mv(l, c, p);
        let g = [], _ = (H) => {
          if (i) for (let O = 0; O < H; O++) {
            let B = w + O, L = S + O;
            if (e[B] !== t[L]) {
              let j = this.refineDiff(e, t, new Ht(new Ee(B, B + 1), new Ee(L, L + 1)), r, i, n);
              for (let $ of j.mappings) g.push($);
              j.hitTimeout && (m = !0);
            }
          }
        }, w = 0, S = 0;
        for (let H of p) {
          Na(() => H.seq1Range.start - w === H.seq2Range.start - S);
          let O = H.seq1Range.start - w;
          _(O), w = H.seq1Range.endExclusive, S = H.seq2Range.endExclusive;
          let B = this.refineDiff(e, t, H, r, i, n);
          B.hitTimeout && (m = !0);
          for (let L of B.mappings) g.push(L);
        }
        _(e.length - w);
        let F = new zs(e), C = new zs(t), x = H1(g, F, C), U = [];
        return n.computeMoves && (U = this.computeMoves(x, e, t, o, u, r, i, n)), Na(() => {
          function H(B, L) {
            if (B.lineNumber < 1 || B.lineNumber > L.length) return !1;
            let j = L[B.lineNumber - 1];
            return !(B.column < 1 || B.column > j.length + 1);
          }
          function O(B, L) {
            return !(B.startLineNumber < 1 || B.startLineNumber > L.length + 1 || B.endLineNumberExclusive < 1 || B.endLineNumberExclusive > L.length + 1);
          }
          for (let B of x) {
            if (!B.innerChanges) return !1;
            for (let L of B.innerChanges) if (!(H(L.modifiedRange.getStartPosition(), t) && H(L.modifiedRange.getEndPosition(), t) && H(L.originalRange.getStartPosition(), e) && H(L.originalRange.getEndPosition(), e))) return !1;
            if (!O(B.modified, t) || !O(B.original, e)) return !1;
          }
          return !0;
        }), new Ws(x, U, m);
      }
      computeMoves(e, t, n, r, i, a, s, o) {
        return Av(e, t, n, r, i, a).map((u) => {
          let l = this.refineDiff(t, n, new Ht(u.original.toOffsetRange(), u.modified.toOffsetRange()), a, s, o), c = H1(l.mappings, new zs(t), new zs(n), !0);
          return new fv(u, c);
        });
      }
      refineDiff(e, t, n, r, i, a) {
        let s = Bv(n).toRangeMapping2(e, t), o = new Qs(e, s.originalRange, i), u = new Qs(t, s.modifiedRange, i), l = o.length + u.length < 500 ? this.dynamicProgrammingDiffing.compute(o, u, r) : this.myersDiffingAlgorithm.compute(o, u, r), c = l.diffs;
        return c = ip(o, u, c), c = op(o, u, c, (f, p) => f.findWordContaining(p)), a.extendToSubwords && (c = op(o, u, c, (f, p) => f.findSubWordContaining(p), !0)), c = xv(o, u, c), c = Uv(o, u, c), { mappings: c.map((f) => new tr(o.translateRange(f.seq1Range), u.translateRange(f.seq2Range))), hitTimeout: l.hitTimeout };
      }
    };
    function Bv(e) {
      return new xi(new Fe(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new Fe(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
    }
    var Ra = { getLegacy: () => new Dv(), getDefault: () => new Pv() };
    function Cr(e, t) {
      let n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    var I = class {
      constructor(e, t, n, r = 1) {
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = Cr(Math.max(Math.min(1, r), 0), 3);
      }
      static equals(e, t) {
        return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
      }
    }, Wr = class Ja {
      constructor(t, n, r, i) {
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Cr(Math.max(Math.min(1, n), 0), 3), this.l = Cr(Math.max(Math.min(1, r), 0), 3), this.a = Cr(Math.max(Math.min(1, i), 0), 3);
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
        return new Ja(u, l, c, a);
      }
      static _hue2rgb(t, n, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
      }
      static toRGBA(t) {
        let n = t.h / 360, { s: r, l: i, a } = t, s, o, u;
        if (r === 0) s = o = u = i;
        else {
          let l = i < 0.5 ? i * (1 + r) : i + r - i * r, c = 2 * i - l;
          s = Ja._hue2rgb(c, l, n + 1 / 3), o = Ja._hue2rgb(c, l, n), u = Ja._hue2rgb(c, l, n - 1 / 3);
        }
        return new I(Math.round(s * 255), Math.round(o * 255), Math.round(u * 255), a);
      }
    }, Zs = class R0 {
      constructor(t, n, r, i) {
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Cr(Math.max(Math.min(1, n), 0), 3), this.v = Cr(Math.max(Math.min(1, r), 0), 3), this.a = Cr(Math.max(Math.min(1, i), 0), 3);
      }
      static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
      }
      static fromRGBA(t) {
        let n = t.r / 255, r = t.g / 255, i = t.b / 255, a = Math.max(n, r, i), s = Math.min(n, r, i), o = a - s, u = a === 0 ? 0 : o / a, l;
        return o === 0 ? l = 0 : a === n ? l = ((r - i) / o % 6 + 6) % 6 : a === r ? l = (i - n) / o + 2 : l = (n - r) / o + 4, new R0(Math.round(l * 60), u, a, t.a);
      }
      static toRGBA(t) {
        let { h: n, s: r, v: i, a } = t, s = i * r, o = s * (1 - Math.abs(n / 60 % 2 - 1)), u = i - s, [l, c, f] = [0, 0, 0];
        return n < 60 ? (l = s, c = o) : n < 120 ? (l = o, c = s) : n < 180 ? (c = s, f = o) : n < 240 ? (c = o, f = s) : n < 300 ? (l = o, f = s) : n <= 360 && (l = s, f = o), l = Math.round((l + u) * 255), c = Math.round((c + u) * 255), f = Math.round((f + u) * 255), new I(l, c, f, a);
      }
    }, eo = (Ne = class {
      static fromHex(t) {
        return Ne.Format.CSS.parseHex(t) || Ne.red;
      }
      static equals(t, n) {
        return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
      }
      get hsla() {
        return this._hsla ? this._hsla : Wr.fromRGBA(this.rgba);
      }
      get hsva() {
        return this._hsva ? this._hsva : Zs.fromRGBA(this.rgba);
      }
      constructor(t) {
        if (t) if (t instanceof I) this.rgba = t;
        else if (t instanceof Wr) this._hsla = t, this.rgba = Wr.toRGBA(t);
        else if (t instanceof Zs) this._hsva = t, this.rgba = Zs.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
      }
      equals(t) {
        return !!t && I.equals(this.rgba, t.rgba) && Wr.equals(this.hsla, t.hsla) && Zs.equals(this.hsva, t.hsva);
      }
      getRelativeLuminance() {
        let t = Ne._relativeLuminanceForComponent(this.rgba.r), n = Ne._relativeLuminanceForComponent(this.rgba.g), r = Ne._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
        return Cr(i, 4);
      }
      reduceRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r > 0 || i > 0 || a > 0); ) r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), a -= Math.max(0, Math.ceil(a * 0.1)), s = this.getContrastRatio(new Ne(new I(r, i, a)));
        return new Ne(new I(r, i, a));
      }
      increaseRelativeLuminace(t, n) {
        let { r, g: i, b: a } = t.rgba, s = this.getContrastRatio(t);
        for (; s < n && (r < 255 || i < 255 || a < 255); ) r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), a = Math.min(255, a + Math.ceil((255 - a) * 0.1)), s = this.getContrastRatio(new Ne(new I(r, i, a)));
        return new Ne(new I(r, i, a));
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
        return new Ne(new Wr(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
      }
      darken(t) {
        return new Ne(new Wr(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
      }
      transparent(t) {
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new I(n, r, i, a * t));
      }
      isTransparent() {
        return this.rgba.a === 0;
      }
      isOpaque() {
        return this.rgba.a === 1;
      }
      opposite() {
        return new Ne(new I(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
      }
      blend(t) {
        let n = t.rgba, r = this.rgba.a, i = n.a, a = r + i * (1 - r);
        if (a < 1e-6) return Ne.transparent;
        let s = this.rgba.r * r / a + n.r * i * (1 - r) / a, o = this.rgba.g * r / a + n.g * i * (1 - r) / a, u = this.rgba.b * r / a + n.b * i * (1 - r) / a;
        return new Ne(new I(s, o, u, a));
      }
      mix(t, n = 0.5) {
        let r = Math.min(Math.max(n, 0), 1), i = this.rgba, a = t.rgba, s = i.r + (a.r - i.r) * r, o = i.g + (a.g - i.g) * r, u = i.b + (a.b - i.b) * r, l = i.a + (a.a - i.a) * r;
        return new Ne(new I(s, o, u, l));
      }
      makeOpaque(t) {
        if (this.isOpaque() || t.rgba.a !== 1) return this;
        let { r: n, g: r, b: i, a } = this.rgba;
        return new Ne(new I(t.rgba.r - a * (t.rgba.r - n), t.rgba.g - a * (t.rgba.g - r), t.rgba.b - a * (t.rgba.b - i), 1));
      }
      flatten(...t) {
        let n = t.reduceRight((r, i) => Ne._flatten(i, r));
        return Ne._flatten(this, n);
      }
      static _flatten(t, n) {
        let r = 1 - t.rgba.a;
        return new Ne(new I(r * n.rgba.r + t.rgba.a * t.rgba.r, r * n.rgba.g + t.rgba.a * t.rgba.g, r * n.rgba.b + t.rgba.a * t.rgba.b));
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
    }, Ne.white = new Ne(new I(255, 255, 255, 1)), Ne.black = new Ne(new I(0, 0, 0, 1)), Ne.red = new Ne(new I(255, 0, 0, 1)), Ne.blue = new Ne(new I(0, 0, 255, 1)), Ne.green = new Ne(new I(0, 255, 0, 1)), Ne.cyan = new Ne(new I(0, 255, 255, 1)), Ne.lightgrey = new Ne(new I(211, 211, 211, 1)), Ne.transparent = new Ne(new I(0, 0, 0, 0)), Ne);
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
            let w = _.toString(16);
            return w.length !== 2 ? "0" + w : w;
          }
          function u(_) {
            return `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}`;
          }
          n.formatHex = u;
          function l(_, w = !1) {
            return w && _.rgba.a === 1 ? e.Format.CSS.formatHex(_) : `#${o(_.rgba.r)}${o(_.rgba.g)}${o(_.rgba.b)}${o(Math.round(_.rgba.a * 255))}`;
          }
          n.formatHexA = l;
          function c(_) {
            return _.isOpaque() ? e.Format.CSS.formatHex(_) : e.Format.CSS.formatRGBA(_);
          }
          n.format = c;
          function f(_) {
            if (_ === "transparent") return e.transparent;
            if (_.startsWith("#")) return m(_);
            if (_.startsWith("rgba(")) {
              let w = _.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
              if (!w) throw new Error("Invalid color format " + _);
              let S = parseInt(w.groups?.r ?? "0"), F = parseInt(w.groups?.g ?? "0"), C = parseInt(w.groups?.b ?? "0"), x = parseFloat(w.groups?.a ?? "0");
              return new e(new I(S, F, C, x));
            }
            if (_.startsWith("rgb(")) {
              let w = _.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
              if (!w) throw new Error("Invalid color format " + _);
              let S = parseInt(w.groups?.r ?? "0"), F = parseInt(w.groups?.g ?? "0"), C = parseInt(w.groups?.b ?? "0");
              return new e(new I(S, F, C));
            }
            return p(_);
          }
          n.parse = f;
          function p(_) {
            switch (_) {
              case "aliceblue":
                return new e(new I(240, 248, 255, 1));
              case "antiquewhite":
                return new e(new I(250, 235, 215, 1));
              case "aqua":
                return new e(new I(0, 255, 255, 1));
              case "aquamarine":
                return new e(new I(127, 255, 212, 1));
              case "azure":
                return new e(new I(240, 255, 255, 1));
              case "beige":
                return new e(new I(245, 245, 220, 1));
              case "bisque":
                return new e(new I(255, 228, 196, 1));
              case "black":
                return new e(new I(0, 0, 0, 1));
              case "blanchedalmond":
                return new e(new I(255, 235, 205, 1));
              case "blue":
                return new e(new I(0, 0, 255, 1));
              case "blueviolet":
                return new e(new I(138, 43, 226, 1));
              case "brown":
                return new e(new I(165, 42, 42, 1));
              case "burlywood":
                return new e(new I(222, 184, 135, 1));
              case "cadetblue":
                return new e(new I(95, 158, 160, 1));
              case "chartreuse":
                return new e(new I(127, 255, 0, 1));
              case "chocolate":
                return new e(new I(210, 105, 30, 1));
              case "coral":
                return new e(new I(255, 127, 80, 1));
              case "cornflowerblue":
                return new e(new I(100, 149, 237, 1));
              case "cornsilk":
                return new e(new I(255, 248, 220, 1));
              case "crimson":
                return new e(new I(220, 20, 60, 1));
              case "cyan":
                return new e(new I(0, 255, 255, 1));
              case "darkblue":
                return new e(new I(0, 0, 139, 1));
              case "darkcyan":
                return new e(new I(0, 139, 139, 1));
              case "darkgoldenrod":
                return new e(new I(184, 134, 11, 1));
              case "darkgray":
                return new e(new I(169, 169, 169, 1));
              case "darkgreen":
                return new e(new I(0, 100, 0, 1));
              case "darkgrey":
                return new e(new I(169, 169, 169, 1));
              case "darkkhaki":
                return new e(new I(189, 183, 107, 1));
              case "darkmagenta":
                return new e(new I(139, 0, 139, 1));
              case "darkolivegreen":
                return new e(new I(85, 107, 47, 1));
              case "darkorange":
                return new e(new I(255, 140, 0, 1));
              case "darkorchid":
                return new e(new I(153, 50, 204, 1));
              case "darkred":
                return new e(new I(139, 0, 0, 1));
              case "darksalmon":
                return new e(new I(233, 150, 122, 1));
              case "darkseagreen":
                return new e(new I(143, 188, 143, 1));
              case "darkslateblue":
                return new e(new I(72, 61, 139, 1));
              case "darkslategray":
                return new e(new I(47, 79, 79, 1));
              case "darkslategrey":
                return new e(new I(47, 79, 79, 1));
              case "darkturquoise":
                return new e(new I(0, 206, 209, 1));
              case "darkviolet":
                return new e(new I(148, 0, 211, 1));
              case "deeppink":
                return new e(new I(255, 20, 147, 1));
              case "deepskyblue":
                return new e(new I(0, 191, 255, 1));
              case "dimgray":
                return new e(new I(105, 105, 105, 1));
              case "dimgrey":
                return new e(new I(105, 105, 105, 1));
              case "dodgerblue":
                return new e(new I(30, 144, 255, 1));
              case "firebrick":
                return new e(new I(178, 34, 34, 1));
              case "floralwhite":
                return new e(new I(255, 250, 240, 1));
              case "forestgreen":
                return new e(new I(34, 139, 34, 1));
              case "fuchsia":
                return new e(new I(255, 0, 255, 1));
              case "gainsboro":
                return new e(new I(220, 220, 220, 1));
              case "ghostwhite":
                return new e(new I(248, 248, 255, 1));
              case "gold":
                return new e(new I(255, 215, 0, 1));
              case "goldenrod":
                return new e(new I(218, 165, 32, 1));
              case "gray":
                return new e(new I(128, 128, 128, 1));
              case "green":
                return new e(new I(0, 128, 0, 1));
              case "greenyellow":
                return new e(new I(173, 255, 47, 1));
              case "grey":
                return new e(new I(128, 128, 128, 1));
              case "honeydew":
                return new e(new I(240, 255, 240, 1));
              case "hotpink":
                return new e(new I(255, 105, 180, 1));
              case "indianred":
                return new e(new I(205, 92, 92, 1));
              case "indigo":
                return new e(new I(75, 0, 130, 1));
              case "ivory":
                return new e(new I(255, 255, 240, 1));
              case "khaki":
                return new e(new I(240, 230, 140, 1));
              case "lavender":
                return new e(new I(230, 230, 250, 1));
              case "lavenderblush":
                return new e(new I(255, 240, 245, 1));
              case "lawngreen":
                return new e(new I(124, 252, 0, 1));
              case "lemonchiffon":
                return new e(new I(255, 250, 205, 1));
              case "lightblue":
                return new e(new I(173, 216, 230, 1));
              case "lightcoral":
                return new e(new I(240, 128, 128, 1));
              case "lightcyan":
                return new e(new I(224, 255, 255, 1));
              case "lightgoldenrodyellow":
                return new e(new I(250, 250, 210, 1));
              case "lightgray":
                return new e(new I(211, 211, 211, 1));
              case "lightgreen":
                return new e(new I(144, 238, 144, 1));
              case "lightgrey":
                return new e(new I(211, 211, 211, 1));
              case "lightpink":
                return new e(new I(255, 182, 193, 1));
              case "lightsalmon":
                return new e(new I(255, 160, 122, 1));
              case "lightseagreen":
                return new e(new I(32, 178, 170, 1));
              case "lightskyblue":
                return new e(new I(135, 206, 250, 1));
              case "lightslategray":
                return new e(new I(119, 136, 153, 1));
              case "lightslategrey":
                return new e(new I(119, 136, 153, 1));
              case "lightsteelblue":
                return new e(new I(176, 196, 222, 1));
              case "lightyellow":
                return new e(new I(255, 255, 224, 1));
              case "lime":
                return new e(new I(0, 255, 0, 1));
              case "limegreen":
                return new e(new I(50, 205, 50, 1));
              case "linen":
                return new e(new I(250, 240, 230, 1));
              case "magenta":
                return new e(new I(255, 0, 255, 1));
              case "maroon":
                return new e(new I(128, 0, 0, 1));
              case "mediumaquamarine":
                return new e(new I(102, 205, 170, 1));
              case "mediumblue":
                return new e(new I(0, 0, 205, 1));
              case "mediumorchid":
                return new e(new I(186, 85, 211, 1));
              case "mediumpurple":
                return new e(new I(147, 112, 219, 1));
              case "mediumseagreen":
                return new e(new I(60, 179, 113, 1));
              case "mediumslateblue":
                return new e(new I(123, 104, 238, 1));
              case "mediumspringgreen":
                return new e(new I(0, 250, 154, 1));
              case "mediumturquoise":
                return new e(new I(72, 209, 204, 1));
              case "mediumvioletred":
                return new e(new I(199, 21, 133, 1));
              case "midnightblue":
                return new e(new I(25, 25, 112, 1));
              case "mintcream":
                return new e(new I(245, 255, 250, 1));
              case "mistyrose":
                return new e(new I(255, 228, 225, 1));
              case "moccasin":
                return new e(new I(255, 228, 181, 1));
              case "navajowhite":
                return new e(new I(255, 222, 173, 1));
              case "navy":
                return new e(new I(0, 0, 128, 1));
              case "oldlace":
                return new e(new I(253, 245, 230, 1));
              case "olive":
                return new e(new I(128, 128, 0, 1));
              case "olivedrab":
                return new e(new I(107, 142, 35, 1));
              case "orange":
                return new e(new I(255, 165, 0, 1));
              case "orangered":
                return new e(new I(255, 69, 0, 1));
              case "orchid":
                return new e(new I(218, 112, 214, 1));
              case "palegoldenrod":
                return new e(new I(238, 232, 170, 1));
              case "palegreen":
                return new e(new I(152, 251, 152, 1));
              case "paleturquoise":
                return new e(new I(175, 238, 238, 1));
              case "palevioletred":
                return new e(new I(219, 112, 147, 1));
              case "papayawhip":
                return new e(new I(255, 239, 213, 1));
              case "peachpuff":
                return new e(new I(255, 218, 185, 1));
              case "peru":
                return new e(new I(205, 133, 63, 1));
              case "pink":
                return new e(new I(255, 192, 203, 1));
              case "plum":
                return new e(new I(221, 160, 221, 1));
              case "powderblue":
                return new e(new I(176, 224, 230, 1));
              case "purple":
                return new e(new I(128, 0, 128, 1));
              case "rebeccapurple":
                return new e(new I(102, 51, 153, 1));
              case "red":
                return new e(new I(255, 0, 0, 1));
              case "rosybrown":
                return new e(new I(188, 143, 143, 1));
              case "royalblue":
                return new e(new I(65, 105, 225, 1));
              case "saddlebrown":
                return new e(new I(139, 69, 19, 1));
              case "salmon":
                return new e(new I(250, 128, 114, 1));
              case "sandybrown":
                return new e(new I(244, 164, 96, 1));
              case "seagreen":
                return new e(new I(46, 139, 87, 1));
              case "seashell":
                return new e(new I(255, 245, 238, 1));
              case "sienna":
                return new e(new I(160, 82, 45, 1));
              case "silver":
                return new e(new I(192, 192, 192, 1));
              case "skyblue":
                return new e(new I(135, 206, 235, 1));
              case "slateblue":
                return new e(new I(106, 90, 205, 1));
              case "slategray":
                return new e(new I(112, 128, 144, 1));
              case "slategrey":
                return new e(new I(112, 128, 144, 1));
              case "snow":
                return new e(new I(255, 250, 250, 1));
              case "springgreen":
                return new e(new I(0, 255, 127, 1));
              case "steelblue":
                return new e(new I(70, 130, 180, 1));
              case "tan":
                return new e(new I(210, 180, 140, 1));
              case "teal":
                return new e(new I(0, 128, 128, 1));
              case "thistle":
                return new e(new I(216, 191, 216, 1));
              case "tomato":
                return new e(new I(255, 99, 71, 1));
              case "turquoise":
                return new e(new I(64, 224, 208, 1));
              case "violet":
                return new e(new I(238, 130, 238, 1));
              case "wheat":
                return new e(new I(245, 222, 179, 1));
              case "white":
                return new e(new I(255, 255, 255, 1));
              case "whitesmoke":
                return new e(new I(245, 245, 245, 1));
              case "yellow":
                return new e(new I(255, 255, 0, 1));
              case "yellowgreen":
                return new e(new I(154, 205, 50, 1));
              default:
                return null;
            }
          }
          function m(_) {
            let w = _.length;
            if (w === 0 || _.charCodeAt(0) !== R.Hash) return null;
            if (w === 7) {
              let S = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6));
              return new e(new I(S, F, C, 1));
            }
            if (w === 9) {
              let S = 16 * g(_.charCodeAt(1)) + g(_.charCodeAt(2)), F = 16 * g(_.charCodeAt(3)) + g(_.charCodeAt(4)), C = 16 * g(_.charCodeAt(5)) + g(_.charCodeAt(6)), x = 16 * g(_.charCodeAt(7)) + g(_.charCodeAt(8));
              return new e(new I(S, F, C, x / 255));
            }
            if (w === 4) {
              let S = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3));
              return new e(new I(16 * S + S, 16 * F + F, 16 * C + C));
            }
            if (w === 5) {
              let S = g(_.charCodeAt(1)), F = g(_.charCodeAt(2)), C = g(_.charCodeAt(3)), x = g(_.charCodeAt(4));
              return new e(new I(16 * S + S, 16 * F + F, 16 * C + C, (16 * x + x) / 255));
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
    })(eo || (eo = {}));
    function cp(e) {
      let t = [];
      for (let n of e) {
        let r = Number(n);
        (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
      }
      return t;
    }
    function ml(e, t, n, r) {
      return { red: e / 255, blue: n / 255, green: t / 255, alpha: r };
    }
    function Oa(e, t) {
      let n = t.index, r = t[0].length;
      if (n === void 0) return;
      let i = e.positionAt(n);
      return { startLineNumber: i.lineNumber, startColumn: i.column, endLineNumber: i.lineNumber, endColumn: i.column + r };
    }
    function Vv(e, t) {
      if (!e) return;
      let n = eo.Format.CSS.parseHex(t);
      if (n) return { range: e, color: ml(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
    }
    function dp(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = cp(r);
      return { range: e, color: ml(i[0], i[1], i[2], n ? i[3] : 1) };
    }
    function hp(e, t, n) {
      if (!e || t.length !== 1) return;
      let r = t[0].values(), i = cp(r), a = new eo(new Wr(i[0], i[1] / 100, i[2] / 100, n ? i[3] : 1));
      return { range: e, color: ml(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a) };
    }
    function xa(e, t) {
      return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
    }
    function $v(e) {
      let t = [], n = xa(e, new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"));
      if (n.length > 0) for (let r of n) {
        let i = r.filter((u) => u !== void 0), a = i[1], s = i[2];
        if (!s) continue;
        let o;
        if (a === "rgb") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
          o = dp(Oa(e, r), xa(s, u), !1);
        } else if (a === "rgba") {
          let u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = dp(Oa(e, r), xa(s, u), !0);
        } else if (a === "hsl") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
          o = hp(Oa(e, r), xa(s, u), !1);
        } else if (a === "hsla") {
          let u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          o = hp(Oa(e, r), xa(s, u), !0);
        } else a === "#" && (o = Vv(Oa(e, r), a + s));
        o && t.push(o);
      }
      return t;
    }
    function Kv(e) {
      return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : $v(e);
    }
    var jv = /^-+|-+$/g, fp = 100, qv = 5;
    function Gv(e, t) {
      let n = [];
      if (t.findRegionSectionHeaders && t.foldingRules?.markers) {
        let r = Hv(e, t);
        n = n.concat(r);
      }
      if (t.findMarkSectionHeaders) {
        let r = Wv(e, t);
        n = n.concat(r);
      }
      return n;
    }
    function Hv(e, t) {
      let n = [], r = e.getLineCount();
      for (let i = 1; i <= r; i++) {
        let a = e.getLineContent(i), s = a.match(t.foldingRules.markers.start);
        if (s) {
          let o = { startLineNumber: i, startColumn: s[0].length + 1, endLineNumber: i, endColumn: a.length + 1 };
          if (o.endColumn > o.startColumn) {
            let u = { range: o, ...Yv(a.substring(s[0].length)), shouldBeInComments: !1 };
            (u.text || u.hasSeparatorLine) && n.push(u);
          }
        }
      }
      return n;
    }
    function Wv(e, t) {
      let n = [], r = e.getLineCount();
      if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "") return n;
      let i = rv(t.markSectionHeaderRegex), a = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
      if (H_(a)) return n;
      for (let s = 1; s <= r; s += fp - qv) {
        let o = Math.min(s + fp - 1, r), u = [];
        for (let f = s; f <= o; f++) u.push(e.getLineContent(f));
        let l = u.join(`
`);
        a.lastIndex = 0;
        let c;
        for (; (c = a.exec(l)) !== null; ) {
          let f = l.substring(0, c.index), p = (f.match(/\n/g) || []).length, m = s + p, g = c[0].split(`
`), _ = g.length, w = m + _ - 1, S = f.lastIndexOf(`
`) + 1, F = c.index - S + 1, C = g[g.length - 1], x = _ === 1 ? F + c[0].length : C.length + 1, U = { startLineNumber: m, startColumn: F, endLineNumber: w, endColumn: x }, H = (c.groups ?? {}).label ?? "", O = ((c.groups ?? {}).separator ?? "") !== "", B = { range: U, text: H, hasSeparatorLine: O, shouldBeInComments: !0 };
          (B.text || B.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < B.range.startLineNumber) && n.push(B), a.lastIndex = c.index + c[0].length;
        }
      }
      return n;
    }
    function Yv(e) {
      e = e.trim();
      let t = e.startsWith("-");
      return e = e.replace(jv, ""), { text: e, hasSeparatorLine: t };
    }
    function Tr(e) {
      return e === R.Slash || e === R.Backslash;
    }
    function pp(e) {
      return e.replace(/[\\/]/g, $e.sep);
    }
    function zv(e) {
      return e.indexOf("/") === -1 && (e = pp(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
    }
    function mp(e, t = $e.sep) {
      if (!e) return "";
      let n = e.length, r = e.charCodeAt(0);
      if (Tr(r)) {
        if (Tr(e.charCodeAt(1)) && !Tr(e.charCodeAt(2))) {
          let a = 3, s = a;
          for (; a < n && !Tr(e.charCodeAt(a)); a++) ;
          if (s !== a && !Tr(e.charCodeAt(a + 1))) {
            for (a += 1; a < n; a++) if (Tr(e.charCodeAt(a))) return e.slice(0, a + 1).replace(/[\\/]/g, t);
          }
        }
        return t;
      } else if (Xv(r) && e.charCodeAt(1) === R.Colon) return Tr(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
      let i = e.indexOf("://");
      if (i !== -1) {
        for (i += 3; i < n; i++) if (Tr(e.charCodeAt(i))) return e.slice(0, i + 1);
      }
      return "";
    }
    function gp(e, t, n, r = js) {
      if (e === t) return !0;
      if (!e || !t || t.length > e.length) return !1;
      if (n) {
        if (!Q_(e, t)) return !1;
        if (t.length === e.length) return !0;
        let i = t.length;
        return t.charAt(t.length - 1) === r && i--, e.charAt(i) === r;
      }
      return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
    }
    function Xv(e) {
      return e >= R.A && e <= R.Z || e >= R.a && e <= R.z;
    }
    var Jv = {}, wt;
    (function(e) {
      e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
    })(wt || (wt = {}));
    var Qv = "tkn", Zv = class {
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
        this._serverRootPath = $e.join(t ?? "/", tb(e));
      }
      getServerRootPath() {
        return this._serverRootPath;
      }
      get _remoteResourcesPath() {
        return $e.join(this._serverRootPath, wt.vscodeRemoteResource);
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
          return ba(s), e;
        }
        let t = e.authority, n = this._hosts[t];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        let r = this._ports[t], i = this._connectionTokens[t], a = `path=${encodeURIComponent(e.path)}`;
        return typeof i == "string" && (a += `&${Qv}=${encodeURIComponent(i)}`), Gt.from({ scheme: U_ ? this._preferredWebSchema : wt.vscodeRemoteResource, authority: `${n}:${r}`, path: this._remoteResourcesPath, query: a });
      }
    }, eb = new Zv();
    function tb(e) {
      return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
    }
    var nb = "vscode-app", rb = (hr = class {
      constructor() {
        this.staticBrowserUris = new o_(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
      }
      registerAppResourcePathUrl(t, n) {
        this.appResourcePathUrls.set(t, n);
      }
      toUrl(t) {
        let n = this.appResourcePathUrls.get(t);
        return typeof n == "function" && (n = n()), new URL(n ?? t, globalThis.location?.href ?? Jv.url).toString();
      }
      asBrowserUri(t) {
        let n = this.toUri(t);
        return this.uriToBrowserUri(n);
      }
      uriToBrowserUri(t) {
        return t.scheme === wt.vscodeRemote ? eb.rewrite(t) : t.scheme === wt.file && (M_ || B_ === `${wt.vscodeFileResource}://${hr.FALLBACK_AUTHORITY}`) ? t.with({ scheme: wt.vscodeFileResource, authority: t.authority || hr.FALLBACK_AUTHORITY, query: null, fragment: null }) : this.staticBrowserUris.get(t) ?? t;
      }
      asFileUri(t) {
        let n = this.toUri(t);
        return this.uriToFileUri(n);
      }
      uriToFileUri(t) {
        return t.scheme === wt.vscodeFileResource ? t.with({ scheme: wt.file, authority: t.authority !== hr.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
      }
      toUri(t) {
        if (Gt.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
          let n = globalThis._VSCODE_FILE_ROOT;
          if (/^\w[\w\d+.-]*:\/\//.test(n)) return Gt.joinPath(Gt.parse(n, !0), t);
          let r = UD(n, t);
          return Gt.file(r);
        }
        return Gt.parse(this.toUrl(t));
      }
      registerStaticBrowserUri(t, n) {
        return this.staticBrowserUris.set(t, n), Ca(() => {
          this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
        });
      }
      getRegisteredBrowserUris() {
        return this.staticBrowserUris.keys();
      }
    }, hr.FALLBACK_AUTHORITY = nb, hr);
    new rb();
    var Ep;
    (function(e) {
      let t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
      e.CoopAndCoep = Object.freeze(t.get("3"));
      let n = "vscode-coi";
      function r(a) {
        let s;
        typeof a == "string" ? s = new URL(a).searchParams : a instanceof URL ? s = a.searchParams : Gt.isUri(a) && (s = new URL(a.toString(!0)).searchParams);
        let o = s?.get(n);
        if (o) return t.get(o);
      }
      e.getHeadersFromQuery = r;
      function i(a, s, o) {
        if (!globalThis.crossOriginIsolated) return;
        let u = s && o ? "3" : o ? "2" : "1";
        a instanceof URLSearchParams ? a.set(n, u) : a[n] = u;
      }
      e.addSearchParam = i;
    })(Ep || (Ep = {}));
    function nr(e) {
      return qs(e, !0);
    }
    var ib = class {
      constructor(e) {
        this._ignorePathCasing = e;
      }
      compare(e, t, n = !1) {
        return e === t ? 0 : z_(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
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
          if (e.scheme === wt.file) return gp(nr(e), nr(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
          if (_p(e.authority, t.authority)) return gp(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
        }
        return !1;
      }
      joinPath(e, ...t) {
        return Gt.joinPath(e, ...t);
      }
      basenameOrAuthority(e) {
        return ab(e) || e.authority;
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
        return e.scheme === wt.file ? t = Gt.file(VD(nr(e))).path : (t = $e.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== R.Slash && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
      }
      normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === wt.file ? t = Gt.file(MD(nr(e))).path : t = $e.normalize(e.path), e.with({ path: t });
      }
      relativePath(e, t) {
        if (e.scheme !== t.scheme || !_p(e.authority, t.authority)) return;
        if (e.scheme === wt.file) {
          let i = BD(nr(e), nr(t));
          return Ai ? pp(i) : i;
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
        if (e.scheme === wt.file) {
          let n = Gt.file(PD(nr(e), t));
          return e.with({ authority: n.authority, path: n.path });
        }
        return t = zv(t), e.with({ path: $e.resolve(e.path, t) });
      }
      isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
      }
      isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && J_(e, t);
      }
      hasTrailingPathSeparator(e, t = js) {
        if (e.scheme === wt.file) {
          let n = nr(e);
          return n.length > mp(n).length && n[n.length - 1] === t;
        } else {
          let n = e.path;
          return n.length > 1 && n.charCodeAt(n.length - 1) === R.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
      }
      removeTrailingPathSeparator(e, t = js) {
        return Dp(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
      }
      addTrailingPathSeparator(e, t = js) {
        let n = !1;
        if (e.scheme === wt.file) {
          let r = nr(e);
          n = r !== void 0 && r.length === mp(r).length && r[r.length - 1] === t;
        } else {
          t = "/";
          let r = e.path;
          n = r.length === 1 && r.charCodeAt(r.length - 1) === R.Slash;
        }
        return !n && !Dp(e, t) ? e.with({ path: e.path + "/" }) : e;
      }
    }, Me = new ib(() => !1);
    Me.isEqual.bind(Me), Me.isEqualOrParent.bind(Me), Me.getComparisonKey.bind(Me), Me.basenameOrAuthority.bind(Me);
    var ab = Me.basename.bind(Me);
    Me.extname.bind(Me), Me.dirname.bind(Me), Me.joinPath.bind(Me), Me.normalizePath.bind(Me), Me.relativePath.bind(Me), Me.resolvePath.bind(Me), Me.isAbsolutePath.bind(Me);
    var _p = Me.isEqualAuthority.bind(Me), Dp = Me.hasTrailingPathSeparator.bind(Me);
    Me.removeTrailingPathSeparator.bind(Me), Me.addTrailingPathSeparator.bind(Me);
    var vp;
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
    })(vp || (vp = {}));
    var bp;
    (function(e) {
      e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
    })(bp || (bp = {}));
    var yp;
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
    })(yp || (yp = {}));
    var bn;
    (function(e) {
      e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
    })(bn || (bn = {})), yt = class {
      static fromArray(t) {
        return new yt((n) => {
          n.emitMany(t);
        });
      }
      static fromPromise(t) {
        return new yt(async (n) => {
          n.emitMany(await t);
        });
      }
      static fromPromisesResolveOrder(t) {
        return new yt(async (n) => {
          await Promise.all(t.map(async (r) => n.emitOne(await r)));
        });
      }
      static merge(t) {
        return new yt(async (n) => {
          await Promise.all(t.map(async (r) => {
            for await (let i of r) n.emitOne(i);
          }));
        });
      }
      constructor(t, n) {
        this._state = bn.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new un(), queueMicrotask(async () => {
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
            if (this._state === bn.DoneError) throw this._error;
            if (t < this._results.length) return { done: !1, value: this._results[t++] };
            if (this._state === bn.DoneOK) return { done: !0, value: void 0 };
            await Os.toPromise(this._onStateChanged.event);
          } while (!0);
        }, return: async () => (this._onReturn?.(), { done: !0, value: void 0 }) };
      }
      static map(t, n) {
        return new yt(async (r) => {
          for await (let i of t) r.emitOne(n(i));
        });
      }
      map(t) {
        return yt.map(this, t);
      }
      static filter(t, n) {
        return new yt(async (r) => {
          for await (let i of t) n(i) && r.emitOne(i);
        });
      }
      filter(t) {
        return yt.filter(this, t);
      }
      static coalesce(t) {
        return yt.filter(t, (n) => !!n);
      }
      coalesce() {
        return yt.coalesce(this);
      }
      static async toPromise(t) {
        let n = [];
        for await (let r of t) n.push(r);
        return n;
      }
      toPromise() {
        return yt.toPromise(this);
      }
      emitOne(t) {
        this._state === bn.Initial && (this._results.push(t), this._onStateChanged.fire());
      }
      emitMany(t) {
        this._state === bn.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
      }
      resolve() {
        this._state === bn.Initial && (this._state = bn.DoneOK, this._onStateChanged.fire());
      }
      reject(t) {
        this._state === bn.Initial && (this._state = bn.DoneError, this._error = t, this._onStateChanged.fire());
      }
    }, yt.EMPTY = yt.fromArray([]);
    var sb = class {
      constructor(e) {
        this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
      }
      getCount() {
        return this.values.length;
      }
      insertValues(e, t) {
        e = Si(e);
        let n = this.values, r = this.prefixSum, i = t.length;
        return i === 0 ? !1 : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      setValue(e, t) {
        return e = Si(e), t = Si(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
      }
      removeValues(e, t) {
        e = Si(e), t = Si(t);
        let n = this.values, r = this.prefixSum;
        if (e >= n.length) return !1;
        let i = n.length - e;
        return t >= i && (t = i), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
      }
      getTotalSum() {
        return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
      }
      getPrefixSum(e) {
        return e < 0 ? 0 : (e = Si(e), this._getPrefixSum(e));
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
        return new ob(r, e - a);
      }
    }, ob = class {
      constructor(e, t) {
        this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
      }
    }, ub = class {
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
          this._lineStarts = new sb(n);
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
        let n = Vh(t);
        if (n.length === 1) {
          this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
          return;
        }
        n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
        let r = new Uint32Array(n.length - 1);
        for (let i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
        this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
      }
    }, lb = "workerTextModelSync", cb = class {
      constructor() {
        this._models = /* @__PURE__ */ Object.create(null);
      }
      bindToServer(e) {
        e.setChannel(lb, this);
      }
      getModel(e) {
        return this._models[e];
      }
      getModels() {
        let e = [];
        return Object.keys(this._models).forEach((t) => e.push(this._models[t])), e;
      }
      $acceptNewModel(e) {
        this._models[e.url] = new db(Gt.parse(e.url), e.lines, e.EOL, e.versionId);
      }
      $acceptModelChanged(e, t) {
        this._models[e] && this._models[e].onEvents(t);
      }
      $acceptRemovedModel(e) {
        this._models[e] && delete this._models[e];
      }
    }, db = class extends ub {
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
        let n = ol(e.column, B1(t), this._lines[e.lineNumber - 1], 0);
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
    }, Np = class {
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
            if (!l) throw new ut("Invariant violation: lastIntersecting is undefined");
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
        return i_(this.replacements, (e) => e.getLengthDelta());
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
    }, hb = class {
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
    Kn = class extends Np {
      static create(t) {
        return new Kn(t);
      }
      static single(t) {
        return new Kn([t]);
      }
      _createNew(t) {
        return new Kn(t);
      }
    }, Kn.empty = new Kn([]);
    var Cp = class extends Np {
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
        for (let r of this.replacements) t.push(new cn(Ee.ofStartAndLength(r.replaceRange.start + n, r.newText.length), e.substring(r.replaceRange.start, r.replaceRange.endExclusive))), n += r.newText.length - r.replaceRange.length;
        return new wr(t);
      }
      tryRebase(e, t) {
        let n = [], r = 0, i = 0, a = 0;
        for (; i < this.replacements.length || r < e.replacements.length; ) {
          let s = e.replacements[r], o = this.replacements[i];
          if (o) if (!s) n.push(new cn(o.replaceRange.delta(a), o.newText)), i++;
          else if (o.replaceRange.intersectsOrTouches(s.replaceRange)) {
            if (i++, t) return;
          } else o.replaceRange.start < s.replaceRange.start ? (n.push(new cn(o.replaceRange.delta(a), o.newText)), i++) : (r++, a += s.newText.length - s.replaceRange.length);
          else break;
        }
        return new wr(n);
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
        return new wr(t);
      }
      normalizeEOL(e) {
        return new wr(this.replacements.map((t) => t.normalizeEOL(e)));
      }
      normalizeOnSource(e) {
        let t = this.apply(e), n = cn.replace(Ee.ofLength(e.length), t).removeCommonSuffixAndPrefix(e);
        return n.isEmpty ? wr.empty : n.toEdit();
      }
      removeCommonSuffixAndPrefix(e) {
        return this._createNew(this.replacements.map((t) => t.removeCommonSuffixAndPrefix(e))).normalize();
      }
      applyOnText(e) {
        return new Ia(this.apply(e.value));
      }
      mapData(e) {
        return new fb(this.replacements.map((t) => new to(t.replaceRange, t.newText, e(t))));
      }
    }, Tp = class extends hb {
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
        let t = e.substring(this.replaceRange.start, this.replaceRange.endExclusive), n = Bs(t, this.newText), r = Math.min(t.length - n, this.newText.length - n, $u(t, this.newText)), i = new Ee(this.replaceRange.start + n, this.replaceRange.endExclusive - r), a = this.newText.substring(n, this.newText.length - r);
        return new cn(i, a);
      }
      normalizeEOL(e) {
        let t = this.newText.replace(/\r\n|\n/g, e);
        return new cn(this.replaceRange, t);
      }
      removeCommonSuffixAndPrefix(e) {
        return this.removeCommonSuffix(e).removeCommonPrefix(e);
      }
      removeCommonPrefix(e) {
        let t = this.replaceRange.substring(e), n = Bs(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaStart(n), new Ee(n, this.newText.length));
      }
      removeCommonSuffix(e) {
        let t = this.replaceRange.substring(e), n = $u(t, this.newText);
        return n === 0 ? this : this.slice(this.replaceRange.deltaEnd(-n), new Ee(0, this.newText.length - n));
      }
      toEdit() {
        return new wr([this]);
      }
    }, wr = (Nt = class extends Cp {
      static create(t) {
        return new Nt(t);
      }
      static single(t) {
        return new Nt([t]);
      }
      static replace(t, n) {
        return new Nt([new cn(t, n)]);
      }
      static insert(t, n) {
        return new Nt([new cn(Ee.emptyAt(t), n)]);
      }
      static delete(t) {
        return new Nt([new cn(t, "")]);
      }
      static fromJson(t) {
        return new Nt(t.map(cn.fromJson));
      }
      static compose(t) {
        if (t.length === 0) return Nt.empty;
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
        return n;
      }
      static composeSequentialReplacements(t) {
        let n = Nt.empty, r = [];
        for (let i of t) {
          let a = r.at(-1);
          !a || i.replaceRange.isBefore(a.replaceRange) ? r.push(i) : (n = n.compose(Nt.create(r.reverse())), r = [i]);
        }
        return n = n.compose(Nt.create(r.reverse())), n;
      }
      constructor(t) {
        super(t);
      }
      _createNew(t) {
        return new Nt(t);
      }
    }, Nt.empty = new Nt([]), Nt), cn = class mi extends Tp {
      static insert(t, n) {
        return new mi(Ee.emptyAt(t), n);
      }
      static replace(t, n) {
        return new mi(t, n);
      }
      static delete(t) {
        return new mi(t, "");
      }
      static fromJson(t) {
        return new mi(Ee.ofStartAndLength(t.pos, t.len), t.txt);
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
      }
      tryJoinTouching(t) {
        return new mi(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText);
      }
      slice(t, n) {
        return new mi(t, n.substring(this.newText));
      }
    }, fb = (Yt = class extends Cp {
      static create(t) {
        return new Yt(t);
      }
      static single(t) {
        return new Yt([t]);
      }
      static replace(t, n, r) {
        return new Yt([new to(t, n, r)]);
      }
      static insert(t, n, r) {
        return new Yt([new to(Ee.emptyAt(t), n, r)]);
      }
      static delete(t, n) {
        return new Yt([new to(t, "", n)]);
      }
      static compose(t) {
        if (t.length === 0) return Yt.empty;
        let n = t[0];
        for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
        return n;
      }
      constructor(t) {
        super(t);
      }
      _createNew(t) {
        return new Yt(t);
      }
      toStringEdit() {
        return new wr(this.replacements.map((t) => new cn(t.replaceRange, t.newText)));
      }
    }, Yt.empty = new Yt([]), Yt), to = class ua extends Tp {
      static insert(t, n, r) {
        return new ua(Ee.emptyAt(t), n, r);
      }
      static replace(t, n, r) {
        return new ua(t, n, r);
      }
      static delete(t, n) {
        return new ua(t, "", n);
      }
      constructor(t, n, r) {
        super(t, n), this.data = r;
      }
      equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
      }
      tryJoinTouching(t) {
        let n = this.data.join(t.data);
        if (n !== void 0) return new ua(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText, n);
      }
      slice(t, n) {
        return new ua(t, n ? n.substring(this.newText) : this.newText, this.data);
      }
    };
    mv({ StringEdit: wr, StringReplacement: cn, TextReplacement: er, TextEdit: ul, TextLength: Fa });
    var wp = (Sn = class {
      constructor(t = null) {
        this._foreignModule = t, this._workerTextModelSyncServer = new cb();
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
        return i ? dv.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
      }
      async $findSectionHeaders(t, n) {
        let r = this._getModel(t);
        return r ? Gv(r, n) : [];
      }
      async $computeDiff(t, n, r, i) {
        let a = this._getModel(t), s = this._getModel(n);
        return !a || !s ? null : Sn.computeDiff(a, s, r, i);
      }
      static computeDiff(t, n, r, i) {
        let a = i === "advanced" ? Ra.getDefault() : Ra.getLegacy(), s = t.getLinesContent(), o = n.getLinesContent(), u = a.computeDiff(s, o, r), l = u.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
        function c(f) {
          return f.map((p) => [p.original.startLineNumber, p.original.endLineNumberExclusive, p.modified.startLineNumber, p.modified.endLineNumberExclusive, p.innerChanges?.map((m) => [m.originalRange.startLineNumber, m.originalRange.startColumn, m.originalRange.endLineNumber, m.originalRange.endColumn, m.modifiedRange.startLineNumber, m.modifiedRange.startColumn, m.modifiedRange.endLineNumber, m.modifiedRange.endColumn])]);
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
        return new z1(s, o, { shouldComputeCharChanges: !1, shouldPostProcessCharChanges: !1, shouldIgnoreTrimWhitespace: r, shouldMakePrettyDiff: !0, maxComputationTime: 1e3 }).computeDiff().changes;
      }
      $computeStringDiff(t, n, r, i) {
        let a = i === "advanced" ? Ra.getDefault() : Ra.getLegacy(), s = new Ia(t), o = s.getLines(), u = new Ia(n), l = u.getLines(), c = a.computeDiff(o, l, { ignoreTrimWhitespace: !1, maxComputationTimeMs: r.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), f = Mi.toTextEdit(c.changes, u);
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
          if (Math.max(l.length, f.length) > Sn._diffLimit) {
            a.push({ range: u, text: l });
            continue;
          }
          let p = fD(f, l, r), m = i.offsetAt(fe.lift(u).getStartPosition());
          for (let g of p) {
            let _ = i.positionAt(m + g.originalStart), w = i.positionAt(m + g.originalStart + g.originalLength), S = { text: l.substr(g.modifiedStart, g.modifiedLength), range: { startLineNumber: _.lineNumber, startColumn: _.column, endLineNumber: w.lineNumber, endColumn: w.column } };
            i.getValueInRange(S.range) !== S.text && a.push(S);
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
          let c = function(S, F) {
            return new Te(S.lineNumber + F.lineNumber - 1, F.lineNumber === 1 ? S.column + F.column - 1 : F.column);
          }, f = function(S, F) {
            let C = [];
            for (let x = F.startLineNumber; x <= F.endLineNumber; x++) {
              let U = S[x - 1];
              x === F.startLineNumber && x === F.endLineNumber ? C.push(U.substring(F.startColumn - 1, F.endColumn - 1)) : x === F.startLineNumber ? C.push(U.substring(F.startColumn - 1)) : x === F.endLineNumber ? C.push(U.substring(0, F.endColumn - 1)) : C.push(U);
            }
            return C;
          };
          if (typeof l == "number" && (s = l), fe.isEmpty(o) && !u) continue;
          let p = i.getValueInRange(o);
          if (u = u.replace(/\r\n|\n|\r/g, i.eol), p === u) continue;
          if (Math.max(u.length, p.length) > Sn._diffLimit) {
            a.push({ range: o, text: u });
            continue;
          }
          let m = p.split(/\r\n|\n|\r/), g = u.split(/\r\n|\n|\r/), _ = Ra.getDefault().computeDiff(m, g, r), w = fe.lift(o).getStartPosition();
          for (let S of _.changes) if (S.innerChanges) for (let F of S.innerChanges) a.push({ range: fe.fromPositions(c(w, F.originalRange.getStartPosition()), c(w, F.originalRange.getEndPosition())), text: f(g, F.modifiedRange).join(i.eol) });
          else throw new ut("The experimental diff algorithm always produces inner changes");
        }
        return typeof s == "number" && a.push({ eol: s, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), a;
      }
      async $computeLinks(t) {
        let n = this._getModel(t);
        return n ? vD(n) : null;
      }
      async $computeDefaultDocumentColors(t) {
        let n = this._getModel(t);
        return n ? Kv(n) : null;
      }
      async $textualSuggest(t, n, r, i) {
        let a = new Ih(), s = new RegExp(r, i), o = /* @__PURE__ */ new Set();
        e: for (let u of t) {
          let l = this._getModel(u);
          if (l) {
            for (let c of l.words(s)) if (!(c === n || !isNaN(Number(c))) && (o.add(c), o.size > Sn._suggestionsLimit)) break e;
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
        return bD.INSTANCE.navigateValueSet(n, u, l, c, r);
      }
      $fmr(t, n) {
        if (!this._foreignModule || typeof this._foreignModule[t] != "function") return Promise.reject(new Error("Missing requestHandler or method: " + t));
        try {
          return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n));
        } catch (r) {
          return Promise.reject(r);
        }
      }
    }, Sn._diffLimit = 1e5, Sn._suggestionsLimit = 1e4, Sn);
    typeof importScripts == "function" && (globalThis.monaco = nv()), dD(() => new wp(null));
    var pb = (xr = class {
      static getChannel(t) {
        return t.getChannel(xr.CHANNEL_NAME);
      }
      static setChannel(t, n) {
        t.setChannel(xr.CHANNEL_NAME, n);
      }
    }, xr.CHANNEL_NAME = "editorWorkerHost", xr);
    function mb(e) {
      let t = Yh(() => new wp(e)), n = pb.getChannel(t);
      return { host: new Proxy({}, { get(r, i, a) {
        if (typeof i != "string") throw new Error("Not supported");
        return (...s) => n.$fhr(i, s);
      } }), getMirrorModels: () => t.requestHandler.getModels() };
    }
    function gb(e) {
      let t, n = new Proxy({}, { get(i, a) {
        if (a === "$initialize") return async (o) => {
          t || (t = e(r, o));
        };
        let s = t?.[a];
        return typeof s == "function" ? s.bind(t) : s;
      } }), r = mb(n);
    }
    function Re(e, t) {
      throw new Error(t);
    }
    function rr(e) {
      return typeof e == "object" && e !== null;
    }
    function Wt(e, t) {
      throw new Error(t ?? "Unexpected invariant triggered.");
    }
    var Eb = /\r\n|[\n\r]/g;
    function gl(e, t) {
      let n = 0, r = 1;
      for (let i of e.body.matchAll(Eb)) {
        if (typeof i.index == "number" || Wt(), i.index >= t) break;
        n = i.index + i[0].length, r += 1;
      }
      return { line: r, column: t + 1 - n };
    }
    function _b(e) {
      return Ap(e.source, gl(e.source, e.start));
    }
    function Ap(e, t) {
      let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${s}:${u}
`, c = r.split(/\r\n|[\n\r]/g), f = c[i];
      if (f.length > 120) {
        let p = Math.floor(u / 80), m = u % 80, g = [];
        for (let _ = 0; _ < f.length; _ += 80) g.push(f.slice(_, _ + 80));
        return l + Sp([[`${s} |`, g[0]], ...g.slice(1, p + 1).map((_) => ["|", _]), ["|", "^".padStart(m)], ["|", g[p + 1]]]);
      }
      return l + Sp([[`${s - 1} |`, c[i - 1]], [`${s} |`, f], ["|", "^".padStart(u)], [`${s + 1} |`, c[i + 1]]]);
    }
    function Sp(e) {
      let t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
      return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
    }
    function Db(e) {
      let t = e[0];
      return t == null || "kind" in t || "length" in t ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] } : t;
    }
    var Y = class O0 extends Error {
      constructor(t, ...n) {
        var r, i, a;
        let { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: f } = Db(n);
        super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Lp(Array.isArray(s) ? s : s ? [s] : void 0);
        let p = Lp((r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null));
        this.source = o ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? p?.map((g) => g.start), this.locations = u && o ? u.map((g) => gl(o, g)) : p?.map((g) => gl(g.source, g.start));
        let m = rr(c?.extensions) ? c?.extensions : void 0;
        this.extensions = (a = f ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: !0, enumerable: !0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), c != null && c.stack ? Object.defineProperty(this, "stack", { value: c.stack, writable: !0, configurable: !0 }) : Error.captureStackTrace ? Error.captureStackTrace(this, O0) : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let t = this.message;
        if (this.nodes) for (let n of this.nodes) n.loc && (t += `

` + _b(n.loc));
        else if (this.source && this.locations) for (let n of this.locations) t += `

` + Ap(this.source, n);
        return t;
      }
      toJSON() {
        let t = { message: this.message };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
      }
    };
    function Lp(e) {
      return e === void 0 || e.length === 0 ? void 0 : e;
    }
    function vt(e, t, n) {
      return new Y(`Syntax Error: ${n}`, { source: e, positions: [t] });
    }
    var vb = class {
      constructor(e, t, n) {
        this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return { start: this.start, end: this.end };
      }
    }, Fp = class {
      constructor(e, t, n, r, i, a) {
        this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return { kind: this.kind, value: this.value, line: this.line, column: this.column };
      }
    }, Ip = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] }, bb = new Set(Object.keys(Ip));
    function El(e) {
      let t = e?.kind;
      return typeof t == "string" && bb.has(t);
    }
    var Mt;
    (function(e) {
      e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
    })(Mt || (Mt = {}));
    var se;
    (function(e) {
      e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
    })(se || (se = {}));
    var v;
    (function(e) {
      e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
    })(v || (v = {}));
    function _l(e) {
      return e === 9 || e === 32;
    }
    function ka(e) {
      return e >= 48 && e <= 57;
    }
    function Rp(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90;
    }
    function Dl(e) {
      return Rp(e) || e === 95;
    }
    function Op(e) {
      return Rp(e) || ka(e) || e === 95;
    }
    function yb(e) {
      var t;
      let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
      for (let s = 0; s < e.length; ++s) {
        var a;
        let o = e[s], u = Nb(o);
        u !== o.length && (r = (a = r) !== null && a !== void 0 ? a : s, i = s, s !== 0 && u < n && (n = u));
      }
      return e.map((s, o) => o === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
    }
    function Nb(e) {
      let t = 0;
      for (; t < e.length && _l(e.charCodeAt(t)); ) ++t;
      return t;
    }
    function Cb(e, t) {
      let n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((m) => m.length === 0 || _l(m.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, u = e.endsWith("\\"), l = o || u, c = !i || e.length > 70 || l || a || s, f = "", p = i && _l(e.charCodeAt(0));
      return (c && !p || a) && (f += `
`), f += n, (c || l) && (f += `
`), '"""' + f + '"""';
    }
    var q;
    (function(e) {
      e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
    })(q || (q = {}));
    var Tb = class {
      constructor(e) {
        let t = new Fp(q.SOF, 0, 0, 0, 0);
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
        if (e.kind !== q.EOF) do
          if (e.next) e = e.next;
          else {
            let t = Ab(this, e.end);
            e.next = t, t.prev = e, e = t;
          }
        while (e.kind === q.COMMENT);
        return e;
      }
    };
    function wb(e) {
      return e === q.BANG || e === q.DOLLAR || e === q.AMP || e === q.PAREN_L || e === q.PAREN_R || e === q.SPREAD || e === q.COLON || e === q.EQUALS || e === q.AT || e === q.BRACKET_L || e === q.BRACKET_R || e === q.BRACE_L || e === q.PIPE || e === q.BRACE_R;
    }
    function Bi(e) {
      return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
    }
    function no(e, t) {
      return xp(e.charCodeAt(t)) && kp(e.charCodeAt(t + 1));
    }
    function xp(e) {
      return e >= 55296 && e <= 56319;
    }
    function kp(e) {
      return e >= 56320 && e <= 57343;
    }
    function Yr(e, t) {
      let n = e.source.body.codePointAt(t);
      if (n === void 0) return q.EOF;
      if (n >= 32 && n <= 126) {
        let r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`;
      }
      return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
    }
    function lt(e, t, n, r, i) {
      let a = e.line, s = 1 + n - e.lineStart;
      return new Fp(t, n, r, a, s, i);
    }
    function Ab(e, t) {
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
            return Sb(e, i);
          case 33:
            return lt(e, q.BANG, i, i + 1);
          case 36:
            return lt(e, q.DOLLAR, i, i + 1);
          case 38:
            return lt(e, q.AMP, i, i + 1);
          case 40:
            return lt(e, q.PAREN_L, i, i + 1);
          case 41:
            return lt(e, q.PAREN_R, i, i + 1);
          case 46:
            if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return lt(e, q.SPREAD, i, i + 3);
            break;
          case 58:
            return lt(e, q.COLON, i, i + 1);
          case 61:
            return lt(e, q.EQUALS, i, i + 1);
          case 64:
            return lt(e, q.AT, i, i + 1);
          case 91:
            return lt(e, q.BRACKET_L, i, i + 1);
          case 93:
            return lt(e, q.BRACKET_R, i, i + 1);
          case 123:
            return lt(e, q.BRACE_L, i, i + 1);
          case 124:
            return lt(e, q.PIPE, i, i + 1);
          case 125:
            return lt(e, q.BRACE_R, i, i + 1);
          case 34:
            return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? xb(e, i) : Fb(e, i);
        }
        if (ka(a) || a === 45) return Lb(e, i, a);
        if (Dl(a)) return kb(e, i);
        throw vt(e.source, i, a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Bi(a) || no(n, i) ? `Unexpected character: ${Yr(e, i)}.` : `Invalid character: ${Yr(e, i)}.`);
      }
      return lt(e, q.EOF, r, r);
    }
    function Sb(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (a === 10 || a === 13) break;
        if (Bi(a)) ++i;
        else if (no(n, i)) i += 2;
        else break;
      }
      return lt(e, q.COMMENT, t, i, n.slice(t + 1, i));
    }
    function Lb(e, t, n) {
      let r = e.source.body, i = t, a = n, s = !1;
      if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
        if (a = r.charCodeAt(++i), ka(a)) throw vt(e.source, i, `Invalid number, unexpected digit after 0: ${Yr(e, i)}.`);
      } else i = vl(e, i, a), a = r.charCodeAt(i);
      if (a === 46 && (s = !0, a = r.charCodeAt(++i), i = vl(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = vl(e, i, a), a = r.charCodeAt(i)), a === 46 || Dl(a)) throw vt(e.source, i, `Invalid number, expected digit but got: ${Yr(e, i)}.`);
      return lt(e, s ? q.FLOAT : q.INT, t, i, r.slice(t, i));
    }
    function vl(e, t, n) {
      if (!ka(n)) throw vt(e.source, t, `Invalid number, expected digit but got: ${Yr(e, t)}.`);
      let r = e.source.body, i = t + 1;
      for (; ka(r.charCodeAt(i)); ) ++i;
      return i;
    }
    function Fb(e, t) {
      let n = e.source.body, r = n.length, i = t + 1, a = i, s = "";
      for (; i < r; ) {
        let o = n.charCodeAt(i);
        if (o === 34) return s += n.slice(a, i), lt(e, q.STRING, t, i + 1, s);
        if (o === 92) {
          s += n.slice(a, i);
          let u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Ib(e, i) : Rb(e, i) : Ob(e, i);
          s += u.value, i += u.size, a = i;
          continue;
        }
        if (o === 10 || o === 13) break;
        if (Bi(o)) ++i;
        else if (no(n, i)) i += 2;
        else throw vt(e.source, i, `Invalid character within String: ${Yr(e, i)}.`);
      }
      throw vt(e.source, i, "Unterminated string.");
    }
    function Ib(e, t) {
      let n = e.source.body, r = 0, i = 3;
      for (; i < 12; ) {
        let a = n.charCodeAt(t + i++);
        if (a === 125) {
          if (i < 5 || !Bi(r)) break;
          return { value: String.fromCodePoint(r), size: i };
        }
        if (r = r << 4 | Ma(a), r < 0) break;
      }
      throw vt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
    }
    function Rb(e, t) {
      let n = e.source.body, r = Mp(n, t + 2);
      if (Bi(r)) return { value: String.fromCodePoint(r), size: 6 };
      if (xp(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        let i = Mp(n, t + 8);
        if (kp(i)) return { value: String.fromCodePoint(r, i), size: 12 };
      }
      throw vt(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
    }
    function Mp(e, t) {
      return Ma(e.charCodeAt(t)) << 12 | Ma(e.charCodeAt(t + 1)) << 8 | Ma(e.charCodeAt(t + 2)) << 4 | Ma(e.charCodeAt(t + 3));
    }
    function Ma(e) {
      return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
    }
    function Ob(e, t) {
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
      throw vt(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
    }
    function xb(e, t) {
      let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, s = a, o = "", u = [];
      for (; a < r; ) {
        let l = n.charCodeAt(a);
        if (l === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
          o += n.slice(s, a), u.push(o);
          let c = lt(e, q.BLOCK_STRING, t, a + 3, yb(u).join(`
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
        if (Bi(l)) ++a;
        else if (no(n, a)) a += 2;
        else throw vt(e.source, a, `Invalid character within String: ${Yr(e, a)}.`);
      }
      throw vt(e.source, a, "Unterminated string.");
    }
    function kb(e, t) {
      let n = e.source.body, r = n.length, i = t + 1;
      for (; i < r; ) {
        let a = n.charCodeAt(i);
        if (Op(a)) ++i;
        else break;
      }
      return lt(e, q.NAME, t, i, n.slice(t, i));
    }
    function J(e) {
      return ro(e, []);
    }
    function ro(e, t) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
          return Mb(e, t);
        default:
          return String(e);
      }
    }
    function Mb(e, t) {
      if (e === null) return "null";
      if (t.includes(e)) return "[Circular]";
      let n = [...t, e];
      if (Ub(e)) {
        let r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : ro(r, n);
      } else if (Array.isArray(e)) return Bb(e, n);
      return Pb(e, n);
    }
    function Ub(e) {
      return typeof e.toJSON == "function";
    }
    function Pb(e, t) {
      let n = Object.entries(e);
      return n.length === 0 ? "{}" : t.length > 2 ? "[" + Vb(e) + "]" : "{ " + n.map(([r, i]) => r + ": " + ro(i, t)).join(", ") + " }";
    }
    function Bb(e, t) {
      if (e.length === 0) return "[]";
      if (t.length > 2) return "[Array]";
      let n = Math.min(10, e.length), r = e.length - n, i = [];
      for (let a = 0; a < n; ++a) i.push(ro(e[a], t));
      return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
    }
    function Vb(e) {
      let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
      if (t === "Object" && typeof e.constructor == "function") {
        let n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n;
      }
      return t;
    }
    var $b = globalThis.process && !0, yn = $b ? function(e, t) {
      return e instanceof t;
    } : function(e, t) {
      if (e instanceof t) return !0;
      if (typeof e == "object" && e !== null) {
        var n;
        let r = t.prototype[Symbol.toStringTag], i = Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name;
        if (r === i) {
          let a = J(e);
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
    }, Up = class {
      constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
        typeof e == "string" || Re(!1, `Body must be a string. Received: ${J(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Re(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Re(!1, "column in locationOffset is 1-indexed and must be positive.");
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
    function Kb(e) {
      return yn(e, Up);
    }
    function io(e, t) {
      let n = new Pp(e, t), r = n.parseDocument();
      return Object.defineProperty(r, "tokenCount", { enumerable: !1, value: n.tokenCount }), r;
    }
    function jb(e, t) {
      let n = new Pp(e, t);
      n.expectToken(q.SOF);
      let r = n.parseValueLiteral(!1);
      return n.expectToken(q.EOF), r;
    }
    var Pp = class {
      constructor(e, t = {}) {
        let n = Kb(e) ? e : new Up(e);
        this._lexer = new Tb(n), this._options = t, this._tokenCounter = 0;
      }
      get tokenCount() {
        return this._tokenCounter;
      }
      parseName() {
        let e = this.expectToken(q.NAME);
        return this.node(e, { kind: v.NAME, value: e.value });
      }
      parseDocument() {
        return this.node(this._lexer.token, { kind: v.DOCUMENT, definitions: this.many(q.SOF, this.parseDefinition, q.EOF) });
      }
      parseDefinition() {
        if (this.peek(q.BRACE_L)) return this.parseOperationDefinition();
        let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
        if (t.kind === q.NAME) {
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
          if (e) throw vt(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
        if (this.peek(q.BRACE_L)) return this.node(e, { kind: v.OPERATION_DEFINITION, operation: Mt.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
        let t = this.parseOperationType(), n;
        return this.peek(q.NAME) && (n = this.parseName()), this.node(e, { kind: v.OPERATION_DEFINITION, operation: t, name: n, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
      }
      parseOperationType() {
        let e = this.expectToken(q.NAME);
        switch (e.value) {
          case "query":
            return Mt.QUERY;
          case "mutation":
            return Mt.MUTATION;
          case "subscription":
            return Mt.SUBSCRIPTION;
        }
        throw this.unexpected(e);
      }
      parseVariableDefinitions() {
        return this.optionalMany(q.PAREN_L, this.parseVariableDefinition, q.PAREN_R);
      }
      parseVariableDefinition() {
        return this.node(this._lexer.token, { kind: v.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(q.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(q.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
      }
      parseVariable() {
        let e = this._lexer.token;
        return this.expectToken(q.DOLLAR), this.node(e, { kind: v.VARIABLE, name: this.parseName() });
      }
      parseSelectionSet() {
        return this.node(this._lexer.token, { kind: v.SELECTION_SET, selections: this.many(q.BRACE_L, this.parseSelection, q.BRACE_R) });
      }
      parseSelection() {
        return this.peek(q.SPREAD) ? this.parseFragment() : this.parseField();
      }
      parseField() {
        let e = this._lexer.token, t = this.parseName(), n, r;
        return this.expectOptionalToken(q.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, { kind: v.FIELD, alias: n, name: r, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(q.BRACE_L) ? this.parseSelectionSet() : void 0 });
      }
      parseArguments(e) {
        let t = e ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(q.PAREN_L, t, q.PAREN_R);
      }
      parseArgument(e = !1) {
        let t = this._lexer.token, n = this.parseName();
        return this.expectToken(q.COLON), this.node(t, { kind: v.ARGUMENT, name: n, value: this.parseValueLiteral(e) });
      }
      parseConstArgument() {
        return this.parseArgument(!0);
      }
      parseFragment() {
        let e = this._lexer.token;
        this.expectToken(q.SPREAD);
        let t = this.expectOptionalKeyword("on");
        return !t && this.peek(q.NAME) ? this.node(e, { kind: v.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1) }) : this.node(e, { kind: v.INLINE_FRAGMENT, typeCondition: t ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet() });
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
          case q.BRACKET_L:
            return this.parseList(e);
          case q.BRACE_L:
            return this.parseObject(e);
          case q.INT:
            return this.advanceLexer(), this.node(t, { kind: v.INT, value: t.value });
          case q.FLOAT:
            return this.advanceLexer(), this.node(t, { kind: v.FLOAT, value: t.value });
          case q.STRING:
          case q.BLOCK_STRING:
            return this.parseStringLiteral();
          case q.NAME:
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
          case q.DOLLAR:
            if (e) if (this.expectToken(q.DOLLAR), this._lexer.token.kind === q.NAME) {
              let n = this._lexer.token.value;
              throw vt(this._lexer.source, t.start, `Unexpected variable "$${n}" in constant value.`);
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
        return this.advanceLexer(), this.node(e, { kind: v.STRING, value: e.value, block: e.kind === q.BLOCK_STRING });
      }
      parseList(e) {
        let t = () => this.parseValueLiteral(e);
        return this.node(this._lexer.token, { kind: v.LIST, values: this.any(q.BRACKET_L, t, q.BRACKET_R) });
      }
      parseObject(e) {
        let t = () => this.parseObjectField(e);
        return this.node(this._lexer.token, { kind: v.OBJECT, fields: this.any(q.BRACE_L, t, q.BRACE_R) });
      }
      parseObjectField(e) {
        let t = this._lexer.token, n = this.parseName();
        return this.expectToken(q.COLON), this.node(t, { kind: v.OBJECT_FIELD, name: n, value: this.parseValueLiteral(e) });
      }
      parseDirectives(e) {
        let t = [];
        for (; this.peek(q.AT); ) t.push(this.parseDirective(e));
        return t;
      }
      parseConstDirectives() {
        return this.parseDirectives(!0);
      }
      parseDirective(e) {
        let t = this._lexer.token;
        return this.expectToken(q.AT), this.node(t, { kind: v.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e) });
      }
      parseTypeReference() {
        let e = this._lexer.token, t;
        if (this.expectOptionalToken(q.BRACKET_L)) {
          let n = this.parseTypeReference();
          this.expectToken(q.BRACKET_R), t = this.node(e, { kind: v.LIST_TYPE, type: n });
        } else t = this.parseNamedType();
        return this.expectOptionalToken(q.BANG) ? this.node(e, { kind: v.NON_NULL_TYPE, type: t }) : t;
      }
      parseNamedType() {
        return this.node(this._lexer.token, { kind: v.NAMED_TYPE, name: this.parseName() });
      }
      peekDescription() {
        return this.peek(q.STRING) || this.peek(q.BLOCK_STRING);
      }
      parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
      }
      parseSchemaDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("schema");
        let n = this.parseConstDirectives(), r = this.many(q.BRACE_L, this.parseOperationTypeDefinition, q.BRACE_R);
        return this.node(e, { kind: v.SCHEMA_DEFINITION, description: t, directives: n, operationTypes: r });
      }
      parseOperationTypeDefinition() {
        let e = this._lexer.token, t = this.parseOperationType();
        this.expectToken(q.COLON);
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
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(q.AMP, this.parseNamedType) : [];
      }
      parseFieldsDefinition() {
        return this.optionalMany(q.BRACE_L, this.parseFieldDefinition, q.BRACE_R);
      }
      parseFieldDefinition() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
        this.expectToken(q.COLON);
        let i = this.parseTypeReference(), a = this.parseConstDirectives();
        return this.node(e, { kind: v.FIELD_DEFINITION, description: t, name: n, arguments: r, type: i, directives: a });
      }
      parseArgumentDefs() {
        return this.optionalMany(q.PAREN_L, this.parseInputValueDef, q.PAREN_R);
      }
      parseInputValueDef() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
        this.expectToken(q.COLON);
        let r = this.parseTypeReference(), i;
        this.expectOptionalToken(q.EQUALS) && (i = this.parseConstValueLiteral());
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
        return this.expectOptionalToken(q.EQUALS) ? this.delimitedMany(q.PIPE, this.parseNamedType) : [];
      }
      parseEnumTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("enum");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
        return this.node(e, { kind: v.ENUM_TYPE_DEFINITION, description: t, name: n, directives: r, values: i });
      }
      parseEnumValuesDefinition() {
        return this.optionalMany(q.BRACE_L, this.parseEnumValueDefinition, q.BRACE_R);
      }
      parseEnumValueDefinition() {
        let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
        return this.node(e, { kind: v.ENUM_VALUE_DEFINITION, description: t, name: n, directives: r });
      }
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw vt(this._lexer.source, this._lexer.token.start, `${ao(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
      }
      parseInputObjectTypeDefinition() {
        let e = this._lexer.token, t = this.parseDescription();
        this.expectKeyword("input");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
        return this.node(e, { kind: v.INPUT_OBJECT_TYPE_DEFINITION, description: t, name: n, directives: r, fields: i });
      }
      parseInputFieldsDefinition() {
        return this.optionalMany(q.BRACE_L, this.parseInputValueDef, q.BRACE_R);
      }
      parseTypeSystemExtension() {
        let e = this._lexer.lookahead();
        if (e.kind === q.NAME) switch (e.value) {
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
        let t = this.parseConstDirectives(), n = this.optionalMany(q.BRACE_L, this.parseOperationTypeDefinition, q.BRACE_R);
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
        this.expectKeyword("directive"), this.expectToken(q.AT);
        let n = this.parseName(), r = this.parseArgumentDefs(), i = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        let a = this.parseDirectiveLocations();
        return this.node(e, { kind: v.DIRECTIVE_DEFINITION, description: t, name: n, arguments: r, repeatable: i, locations: a });
      }
      parseDirectiveLocations() {
        return this.delimitedMany(q.PIPE, this.parseDirectiveLocation);
      }
      parseDirectiveLocation() {
        let e = this._lexer.token, t = this.parseName();
        if (Object.prototype.hasOwnProperty.call(se, t.value)) return t;
        throw this.unexpected(e);
      }
      node(e, t) {
        return this._options.noLocation !== !0 && (t.loc = new vb(e, this._lexer.lastToken, this._lexer.source)), t;
      }
      peek(e) {
        return this._lexer.token.kind === e;
      }
      expectToken(e) {
        let t = this._lexer.token;
        if (t.kind === e) return this.advanceLexer(), t;
        throw vt(this._lexer.source, t.start, `Expected ${Bp(e)}, found ${ao(t)}.`);
      }
      expectOptionalToken(e) {
        return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
      }
      expectKeyword(e) {
        let t = this._lexer.token;
        if (t.kind === q.NAME && t.value === e) this.advanceLexer();
        else throw vt(this._lexer.source, t.start, `Expected "${e}", found ${ao(t)}.`);
      }
      expectOptionalKeyword(e) {
        let t = this._lexer.token;
        return t.kind === q.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
      }
      unexpected(e) {
        let t = e ?? this._lexer.token;
        return vt(this._lexer.source, t.start, `Unexpected ${ao(t)}.`);
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
        if (t.kind !== q.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw vt(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
      }
    };
    function ao(e) {
      let t = e.value;
      return Bp(e.kind) + (t != null ? ` "${t}"` : "");
    }
    function Bp(e) {
      return wb(e) ? `"${e}"` : e;
    }
    function Ar(e, t) {
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
    function Vp(e) {
      return e;
    }
    function zr(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of e) n[t(r)] = r;
      return n;
    }
    function Xr(e, t, n) {
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of e) r[t(i)] = n(i);
      return r;
    }
    function ir(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.keys(e)) n[r] = t(e[r], r);
      return n;
    }
    function bl(e, t) {
      let n = 0, r = 0;
      for (; n < e.length && r < t.length; ) {
        let i = e.charCodeAt(n), a = t.charCodeAt(r);
        if (so(i) && so(a)) {
          let s = 0;
          do
            ++n, s = s * 10 + i - yl, i = e.charCodeAt(n);
          while (so(i) && s > 0);
          let o = 0;
          do
            ++r, o = o * 10 + a - yl, a = t.charCodeAt(r);
          while (so(a) && o > 0);
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
    var yl = 48, qb = 57;
    function so(e) {
      return !isNaN(e) && yl <= e && e <= qb;
    }
    function Jr(e, t) {
      let n = /* @__PURE__ */ Object.create(null), r = new Gb(e), i = Math.floor(e.length * 0.4) + 1;
      for (let a of t) {
        let s = r.measure(a, i);
        s !== void 0 && (n[a] = s);
      }
      return Object.keys(n).sort((a, s) => {
        let o = n[a] - n[s];
        return o !== 0 ? o : bl(a, s);
      });
    }
    var Gb = class {
      constructor(e) {
        this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = $p(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)];
      }
      measure(e, t) {
        if (this._input === e) return 0;
        let n = e.toLowerCase();
        if (this._inputLowerCase === n) return 1;
        let r = $p(n), i = this._inputArray;
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
              let w = o[(l - 2) % 3][m - 2];
              _ = Math.min(_, w + 1);
            }
            _ < p && (p = _), f[m] = _;
          }
          if (p > t) return;
        }
        let u = o[a % 3][s];
        return u <= t ? u : void 0;
      }
    };
    function $p(e) {
      let t = e.length, n = new Array(t);
      for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
      return n;
    }
    function dn(e) {
      if (e == null) return /* @__PURE__ */ Object.create(null);
      if (Object.getPrototypeOf(e) === null) return e;
      let t = /* @__PURE__ */ Object.create(null);
      for (let [n, r] of Object.entries(e)) t[n] = r;
      return t;
    }
    function Hb(e) {
      return `"${e.replace(Wb, Yb)}"`;
    }
    var Wb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function Yb(e) {
      return zb[e.charCodeAt(0)];
    }
    var zb = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"], Vi = Object.freeze({});
    function Sr(e, t, n = Ip) {
      let r = /* @__PURE__ */ new Map();
      for (let S of Object.values(v)) r.set(S, oo(t, S));
      let i, a = Array.isArray(e), s = [e], o = -1, u = [], l = e, c, f, p = [], m = [];
      do {
        o++;
        let S = o === s.length, F = S && u.length !== 0;
        if (S) {
          if (c = m.length === 0 ? void 0 : p[p.length - 1], l = f, f = m.pop(), F) if (a) {
            l = l.slice();
            let x = 0;
            for (let [U, H] of u) {
              let O = U - x;
              H === null ? (l.splice(O, 1), x++) : l[O] = H;
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
          if (El(l) || Re(!1, `Invalid AST Node: ${J(l)}.`), C = (S ? (g = r.get(l.kind)) === null || g === void 0 ? void 0 : g.leave : (_ = r.get(l.kind)) === null || _ === void 0 ? void 0 : _.enter)?.call(t, l, c, f, p, m), C === Vi) break;
          if (C === !1) {
            if (!S) {
              p.pop();
              continue;
            }
          } else if (C !== void 0 && (u.push([c, C]), !S)) if (El(C)) l = C;
          else {
            p.pop();
            continue;
          }
        }
        if (C === void 0 && F && u.push([c, l]), S) p.pop();
        else {
          var w;
          i = { inArray: a, index: o, keys: s, edits: u, prev: i }, a = Array.isArray(l), s = a ? l : (w = n[l.kind]) !== null && w !== void 0 ? w : [], o = -1, u = [], f && m.push(f), f = l;
        }
      } while (i !== void 0);
      return u.length !== 0 ? u[u.length - 1][1] : e;
    }
    function Kp(e) {
      let t = new Array(e.length).fill(null), n = /* @__PURE__ */ Object.create(null);
      for (let r of Object.values(v)) {
        let i = !1, a = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
        for (let u = 0; u < e.length; ++u) {
          let { enter: l, leave: c } = oo(e[u], r);
          i || (i = l != null || c != null), a[u] = l, s[u] = c;
        }
        if (!i) continue;
        let o = { enter(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++) if (t[f] === null) {
            var c;
            let p = (c = a[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
            if (p === !1) t[f] = l;
            else if (p === Vi) t[f] = Vi;
            else if (p !== void 0) return p;
          }
        }, leave(...u) {
          let l = u[0];
          for (let f = 0; f < e.length; f++) if (t[f] === null) {
            var c;
            let p = (c = s[f]) === null || c === void 0 ? void 0 : c.apply(e[f], u);
            if (p === Vi) t[f] = Vi;
            else if (p !== void 0 && p !== !1) return p;
          } else t[f] === l && (t[f] = null);
        } };
        n[r] = o;
      }
      return n;
    }
    function oo(e, t) {
      let n = e[t];
      return typeof n == "object" ? n : typeof n == "function" ? { enter: n, leave: void 0 } : { enter: e.enter, leave: e.leave };
    }
    function gt(e) {
      return Sr(e, Jb);
    }
    var Xb = 80, Jb = { Name: { leave: (e) => e.value }, Variable: { leave: (e) => "$" + e.name }, Document: { leave: (e) => le(e.definitions, `

`) }, OperationDefinition: { leave(e) {
      let t = Ae("(", le(e.variableDefinitions, ", "), ")"), n = le([e.operation, le([e.name, t]), le(e.directives, " ")], " ");
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    } }, VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + Ae(" = ", n) + Ae(" ", le(r, " ")) }, SelectionSet: { leave: ({ selections: e }) => Nn(e) }, Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      let a = Ae("", e, ": ") + t, s = a + Ae("(", le(n, ", "), ")");
      return s.length > Xb && (s = a + Ae(`(
`, uo(le(n, `
`)), `
)`)), le([s, le(r, " "), i], " ");
    } }, Argument: { leave: ({ name: e, value: t }) => e + ": " + t }, FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + Ae(" ", le(t, " ")) }, InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => le(["...", Ae("on ", e), le(t, " "), n], " ") }, FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => `fragment ${e}${Ae("(", le(n, ", "), ")")} on ${t} ${Ae("", le(r, " "), " ")}` + i }, IntValue: { leave: ({ value: e }) => e }, FloatValue: { leave: ({ value: e }) => e }, StringValue: { leave: ({ value: e, block: t }) => t ? Cb(e) : Hb(e) }, BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" }, NullValue: { leave: () => "null" }, EnumValue: { leave: ({ value: e }) => e }, ListValue: { leave: ({ values: e }) => "[" + le(e, ", ") + "]" }, ObjectValue: { leave: ({ fields: e }) => "{" + le(e, ", ") + "}" }, ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t }, Directive: { leave: ({ name: e, arguments: t }) => "@" + e + Ae("(", le(t, ", "), ")") }, NamedType: { leave: ({ name: e }) => e }, ListType: { leave: ({ type: e }) => "[" + e + "]" }, NonNullType: { leave: ({ type: e }) => e + "!" }, SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => Ae("", e, `
`) + le(["schema", le(t, " "), Nn(n)], " ") }, OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t }, ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + le(["scalar", t, le(n, " ")], " ") }, ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + le(["type", t, Ae("implements ", le(n, " & ")), le(r, " "), Nn(i)], " ") }, FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => Ae("", e, `
`) + t + (jp(n) ? Ae(`(
`, uo(le(n, `
`)), `
)`) : Ae("(", le(n, ", "), ")")) + ": " + r + Ae(" ", le(i, " ")) }, InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => Ae("", e, `
`) + le([t + ": " + n, Ae("= ", r), le(i, " ")], " ") }, InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => Ae("", e, `
`) + le(["interface", t, Ae("implements ", le(n, " & ")), le(r, " "), Nn(i)], " ") }, UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => Ae("", e, `
`) + le(["union", t, le(n, " "), Ae("= ", le(r, " | "))], " ") }, EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => Ae("", e, `
`) + le(["enum", t, le(n, " "), Nn(r)], " ") }, EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => Ae("", e, `
`) + le([t, le(n, " ")], " ") }, InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => Ae("", e, `
`) + le(["input", t, le(n, " "), Nn(r)], " ") }, DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => Ae("", e, `
`) + "directive @" + t + (jp(n) ? Ae(`(
`, uo(le(n, `
`)), `
)`) : Ae("(", le(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + le(i, " | ") }, SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => le(["extend schema", le(e, " "), Nn(t)], " ") }, ScalarTypeExtension: { leave: ({ name: e, directives: t }) => le(["extend scalar", e, le(t, " ")], " ") }, ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => le(["extend type", e, Ae("implements ", le(t, " & ")), le(n, " "), Nn(r)], " ") }, InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => le(["extend interface", e, Ae("implements ", le(t, " & ")), le(n, " "), Nn(r)], " ") }, UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => le(["extend union", e, le(t, " "), Ae("= ", le(n, " | "))], " ") }, EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => le(["extend enum", e, le(t, " "), Nn(n)], " ") }, InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => le(["extend input", e, le(t, " "), Nn(n)], " ") } };
    function le(e, t = "") {
      var n;
      return (n = e?.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
    }
    function Nn(e) {
      return Ae(`{
`, uo(le(e, `
`)), `
}`);
    }
    function Ae(e, t, n = "") {
      return t != null && t !== "" ? e + t + n : "";
    }
    function uo(e) {
      return Ae("  ", e.replace(/\n/g, `
  `));
    }
    function jp(e) {
      var t;
      return (t = e?.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
    }
    function Nl(e, t) {
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
          return e.values.map((n) => Nl(n, t));
        case v.OBJECT:
          return Xr(e.fields, (n) => n.name.value, (n) => Nl(n.value, t));
        case v.VARIABLE:
          return t?.[e.name.value];
      }
    }
    function Cn(e) {
      if (e != null || Re(!1, "Must provide name."), typeof e == "string" || Re(!1, "Expected name to be a string."), e.length === 0) throw new Y("Expected name to be a non-empty string.");
      for (let t = 1; t < e.length; ++t) if (!Op(e.charCodeAt(t))) throw new Y(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
      if (!Dl(e.charCodeAt(0))) throw new Y(`Names must start with [_a-zA-Z] but "${e}" does not.`);
      return e;
    }
    function Qb(e) {
      if (e === "true" || e === "false" || e === "null") throw new Y(`Enum values cannot be named: ${e}`);
      return Cn(e);
    }
    function Cl(e) {
      return hn(e) || je(e) || Ge(e) || Zt(e) || Ut(e) || Ze(e) || ct(e) || Ue(e);
    }
    function hn(e) {
      return yn(e, ar);
    }
    function je(e) {
      return yn(e, fn);
    }
    function Zb(e) {
      if (!je(e)) throw new Error(`Expected ${J(e)} to be a GraphQL Object type.`);
      return e;
    }
    function Ge(e) {
      return yn(e, Lr);
    }
    function ey(e) {
      if (!Ge(e)) throw new Error(`Expected ${J(e)} to be a GraphQL Interface type.`);
      return e;
    }
    function Zt(e) {
      return yn(e, lo);
    }
    function Ut(e) {
      return yn(e, Fr);
    }
    function Ze(e) {
      return yn(e, Pa);
    }
    function ct(e) {
      return yn(e, At);
    }
    function Ue(e) {
      return yn(e, Ce);
    }
    function en(e) {
      return hn(e) || Ut(e) || Ze(e) || Tl(e) && en(e.ofType);
    }
    function Qr(e) {
      return hn(e) || je(e) || Ge(e) || Zt(e) || Ut(e) || Tl(e) && Qr(e.ofType);
    }
    function $i(e) {
      return hn(e) || Ut(e);
    }
    function tn(e) {
      return je(e) || Ge(e) || Zt(e);
    }
    function Pn(e) {
      return Ge(e) || Zt(e);
    }
    function ty(e) {
      if (!Pn(e)) throw new Error(`Expected ${J(e)} to be a GraphQL abstract type.`);
      return e;
    }
    var At = class {
      constructor(e) {
        Cl(e) || Re(!1, `Expected ${J(e)} to be a GraphQL type.`), this.ofType = e;
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
        wl(e) || Re(!1, `Expected ${J(e)} to be a GraphQL nullable type.`), this.ofType = e;
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
    function Tl(e) {
      return ct(e) || Ue(e);
    }
    function wl(e) {
      return Cl(e) && !Ue(e);
    }
    function ny(e) {
      if (!wl(e)) throw new Error(`Expected ${J(e)} to be a GraphQL nullable type.`);
      return e;
    }
    function Al(e) {
      if (e) return Ue(e) ? e.ofType : e;
    }
    function ry(e) {
      return hn(e) || je(e) || Ge(e) || Zt(e) || Ut(e) || Ze(e);
    }
    function tt(e) {
      if (e) {
        let t = e;
        for (; Tl(t); ) t = t.ofType;
        return t;
      }
    }
    function qp(e) {
      return typeof e == "function" ? e() : e;
    }
    function Gp(e) {
      return typeof e == "function" ? e() : e;
    }
    var ar = class {
      constructor(e) {
        var t, n, r, i;
        let a = (t = e.parseValue) !== null && t !== void 0 ? t : Vp;
        this.name = Cn(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (n = e.serialize) !== null && n !== void 0 ? n : Vp, this.parseValue = a, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (s, o) => a(Nl(s, o)), this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (i = e.extensionASTNodes) !== null && i !== void 0 ? i : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || Re(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${J(e.specifiedByURL)}.`), e.serialize == null || typeof e.serialize == "function" || Re(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || Re(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
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
    }, fn = class {
      constructor(e) {
        var t;
        this.name = Cn(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = () => Wp(e), this._interfaces = () => Hp(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || Re(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${J(e.isTypeOf)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: zp(this.getFields()), isTypeOf: this.isTypeOf, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function Hp(e) {
      var t;
      let n = qp((t = e.interfaces) !== null && t !== void 0 ? t : []);
      return Array.isArray(n) || Re(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
    }
    function Wp(e) {
      let t = Gp(e.fields);
      return Ki(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), ir(t, (n, r) => {
        var i;
        Ki(n) || Re(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || Re(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${J(n.resolve)}.`);
        let a = (i = n.args) !== null && i !== void 0 ? i : {};
        return Ki(a) || Re(!1, `${e.name}.${r} args must be an object with argument names as keys.`), { name: Cn(r), description: n.description, type: n.type, args: Yp(a), resolve: n.resolve, subscribe: n.subscribe, deprecationReason: n.deprecationReason, extensions: dn(n.extensions), astNode: n.astNode };
      });
    }
    function Yp(e) {
      return Object.entries(e).map(([t, n]) => ({ name: Cn(t), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: dn(n.extensions), astNode: n.astNode }));
    }
    function Ki(e) {
      return rr(e) && !Array.isArray(e);
    }
    function zp(e) {
      return ir(e, (t) => ({ description: t.description, type: t.type, args: Xp(t.args), resolve: t.resolve, subscribe: t.subscribe, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function Xp(e) {
      return Xr(e, (t) => t.name, (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
    }
    function Ua(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    var Lr = class {
      constructor(e) {
        var t;
        this.name = Cn(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = Wp.bind(void 0, e), this._interfaces = Hp.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${J(e.resolveType)}.`);
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
        return { name: this.name, description: this.description, interfaces: this.getInterfaces(), fields: zp(this.getFields()), resolveType: this.resolveType, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, lo = class {
      constructor(e) {
        var t;
        this.name = Cn(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._types = iy.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Re(!1, `${this.name} must provide "resolveType" as a function, but got: ${J(e.resolveType)}.`);
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
    function iy(e) {
      let t = qp(e.types);
      return Array.isArray(t) || Re(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
    }
    var Fr = class {
      constructor(e) {
        var t;
        this.name = Cn(e.name), this.description = e.description, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._values = typeof e.values == "function" ? e.values : Jp(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
      }
      get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
      }
      getValues() {
        return typeof this._values == "function" && (this._values = Jp(this.name, this._values())), this._values;
      }
      getValue(e) {
        return this._nameLookup === null && (this._nameLookup = zr(this.getValues(), (t) => t.name)), this._nameLookup[e];
      }
      serialize(e) {
        this._valueLookup === null && (this._valueLookup = new Map(this.getValues().map((n) => [n.value, n])));
        let t = this._valueLookup.get(e);
        if (t === void 0) throw new Y(`Enum "${this.name}" cannot represent value: ${J(e)}`);
        return t.name;
      }
      parseValue(e) {
        if (typeof e != "string") {
          let n = J(e);
          throw new Y(`Enum "${this.name}" cannot represent non-string value: ${n}.` + co(this, n));
        }
        let t = this.getValue(e);
        if (t == null) throw new Y(`Value "${e}" does not exist in "${this.name}" enum.` + co(this, e));
        return t.value;
      }
      parseLiteral(e, t) {
        if (e.kind !== v.ENUM) {
          let r = gt(e);
          throw new Y(`Enum "${this.name}" cannot represent non-enum value: ${r}.` + co(this, r), { nodes: e });
        }
        let n = this.getValue(e.value);
        if (n == null) {
          let r = gt(e);
          throw new Y(`Value "${r}" does not exist in "${this.name}" enum.` + co(this, r), { nodes: e });
        }
        return n.value;
      }
      toConfig() {
        let e = Xr(this.getValues(), (t) => t.name, (t) => ({ description: t.description, value: t.value, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, values: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function co(e, t) {
      let n = e.getValues().map((i) => i.name), r = Jr(t, n);
      return Ar("the enum value", r);
    }
    function Jp(e, t) {
      return Ki(t) || Re(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r]) => (Ki(r) || Re(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${J(r)}.`), { name: Qb(n), description: r.description, value: r.value !== void 0 ? r.value : n, deprecationReason: r.deprecationReason, extensions: dn(r.extensions), astNode: r.astNode }));
    }
    var Pa = class {
      constructor(e) {
        var t, n;
        this.name = Cn(e.name), this.description = e.description, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this.isOneOf = (n = e.isOneOf) !== null && n !== void 0 ? n : !1, this._fields = ay.bind(void 0, e);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
      }
      getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
      }
      toConfig() {
        let e = ir(this.getFields(), (t) => ({ description: t.description, type: t.type, defaultValue: t.defaultValue, deprecationReason: t.deprecationReason, extensions: t.extensions, astNode: t.astNode }));
        return { name: this.name, description: this.description, fields: e, extensions: this.extensions, astNode: this.astNode, extensionASTNodes: this.extensionASTNodes, isOneOf: this.isOneOf };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    function ay(e) {
      let t = Gp(e.fields);
      return Ki(t) || Re(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), ir(t, (n, r) => (!("resolve" in n) || Re(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), { name: Cn(r), description: n.description, type: n.type, defaultValue: n.defaultValue, deprecationReason: n.deprecationReason, extensions: dn(n.extensions), astNode: n.astNode }));
    }
    function Qp(e) {
      return Ue(e.type) && e.defaultValue === void 0;
    }
    function Zp(e, t) {
      return e === t ? !0 : Ue(e) && Ue(t) || ct(e) && ct(t) ? Zp(e.ofType, t.ofType) : !1;
    }
    function ji(e, t, n) {
      return t === n ? !0 : Ue(n) ? Ue(t) ? ji(e, t.ofType, n.ofType) : !1 : Ue(t) ? ji(e, t.ofType, n) : ct(n) ? ct(t) ? ji(e, t.ofType, n.ofType) : !1 : ct(t) ? !1 : Pn(n) && (Ge(t) || je(t)) && e.isSubType(n, t);
    }
    function Sl(e, t, n) {
      return t === n ? !0 : Pn(t) ? Pn(n) ? e.getPossibleTypes(t).some((r) => e.isSubType(n, r)) : e.isSubType(t, n) : Pn(n) ? e.isSubType(n, t) : !1;
    }
    var Ll = 2147483647, Fl = -2147483648, sy = new ar({ name: "Int", description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.", serialize(e) {
      let t = Ba(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new Y(`Int cannot represent non-integer value: ${J(t)}`);
      if (n > Ll || n < Fl) throw new Y("Int cannot represent non 32-bit signed integer value: " + J(t));
      return n;
    }, parseValue(e) {
      if (typeof e != "number" || !Number.isInteger(e)) throw new Y(`Int cannot represent non-integer value: ${J(e)}`);
      if (e > Ll || e < Fl) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.INT) throw new Y(`Int cannot represent non-integer value: ${gt(e)}`, { nodes: e });
      let t = parseInt(e.value, 10);
      if (t > Ll || t < Fl) throw new Y(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e });
      return t;
    } }), em = new ar({ name: "Float", description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).", serialize(e) {
      let t = Ba(e);
      if (typeof t == "boolean") return t ? 1 : 0;
      let n = t;
      if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n)) throw new Y(`Float cannot represent non numeric value: ${J(t)}`);
      return n;
    }, parseValue(e) {
      if (typeof e != "number" || !Number.isFinite(e)) throw new Y(`Float cannot represent non numeric value: ${J(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.FLOAT && e.kind !== v.INT) throw new Y(`Float cannot represent non numeric value: ${gt(e)}`, e);
      return parseFloat(e.value);
    } }), nt = new ar({ name: "String", description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.", serialize(e) {
      let t = Ba(e);
      if (typeof t == "string") return t;
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "number" && Number.isFinite(t)) return t.toString();
      throw new Y(`String cannot represent value: ${J(e)}`);
    }, parseValue(e) {
      if (typeof e != "string") throw new Y(`String cannot represent a non string value: ${J(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.STRING) throw new Y(`String cannot represent a non string value: ${gt(e)}`, { nodes: e });
      return e.value;
    } }), bt = new ar({ name: "Boolean", description: "The `Boolean` scalar type represents `true` or `false`.", serialize(e) {
      let t = Ba(e);
      if (typeof t == "boolean") return t;
      if (Number.isFinite(t)) return t !== 0;
      throw new Y(`Boolean cannot represent a non boolean value: ${J(t)}`);
    }, parseValue(e) {
      if (typeof e != "boolean") throw new Y(`Boolean cannot represent a non boolean value: ${J(e)}`);
      return e;
    }, parseLiteral(e) {
      if (e.kind !== v.BOOLEAN) throw new Y(`Boolean cannot represent a non boolean value: ${gt(e)}`, { nodes: e });
      return e.value;
    } }), tm = new ar({ name: "ID", description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.', serialize(e) {
      let t = Ba(e);
      if (typeof t == "string") return t;
      if (Number.isInteger(t)) return String(t);
      throw new Y(`ID cannot represent value: ${J(e)}`);
    }, parseValue(e) {
      if (typeof e == "string") return e;
      if (typeof e == "number" && Number.isInteger(e)) return e.toString();
      throw new Y(`ID cannot represent value: ${J(e)}`);
    }, parseLiteral(e) {
      if (e.kind !== v.STRING && e.kind !== v.INT) throw new Y("ID cannot represent a non-string and non-integer value: " + gt(e), { nodes: e });
      return e.value;
    } }), ho = Object.freeze([nt, sy, em, bt, tm]);
    function oy(e) {
      return ho.some(({ name: t }) => e.name === t);
    }
    function Ba(e) {
      if (rr(e)) {
        if (typeof e.valueOf == "function") {
          let t = e.valueOf();
          if (!rr(t)) return t;
        }
        if (typeof e.toJSON == "function") return e.toJSON();
      }
      return e;
    }
    function nm(e) {
      return yn(e, sr);
    }
    var sr = class {
      constructor(e) {
        var t, n;
        this.name = Cn(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (t = e.isRepeatable) !== null && t !== void 0 ? t : !1, this.extensions = dn(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || Re(!1, `@${e.name} locations must be an Array.`);
        let r = (n = e.args) !== null && n !== void 0 ? n : {};
        rr(r) && !Array.isArray(r) || Re(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = Yp(r);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLDirective";
      }
      toConfig() {
        return { name: this.name, description: this.description, locations: this.locations, args: Xp(this.args), isRepeatable: this.isRepeatable, extensions: this.extensions, astNode: this.astNode };
      }
      toString() {
        return "@" + this.name;
      }
      toJSON() {
        return this.toString();
      }
    }, rm = new sr({ name: "include", description: "Directs the executor to include this field or fragment only when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(bt), description: "Included when true." } } }), im = new sr({ name: "skip", description: "Directs the executor to skip this field or fragment when the `if` argument is true.", locations: [se.FIELD, se.FRAGMENT_SPREAD, se.INLINE_FRAGMENT], args: { if: { type: new Ce(bt), description: "Skipped when true." } } }), uy = "No longer supported", Il = new sr({ name: "deprecated", description: "Marks an element of a GraphQL schema as no longer supported.", locations: [se.FIELD_DEFINITION, se.ARGUMENT_DEFINITION, se.INPUT_FIELD_DEFINITION, se.ENUM_VALUE], args: { reason: { type: nt, description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).", defaultValue: uy } } }), am = new sr({ name: "specifiedBy", description: "Exposes a URL that specifies the behavior of this scalar.", locations: [se.SCALAR], args: { url: { type: new Ce(nt), description: "The URL that specifies the behavior of this scalar." } } }), sm = new sr({ name: "oneOf", description: "Indicates exactly one field must be supplied and this field must not be `null`.", locations: [se.INPUT_OBJECT], args: {} }), qi = Object.freeze([rm, im, Il, am, sm]);
    function ly(e) {
      return typeof e == "object" && typeof e?.[Symbol.iterator] == "function";
    }
    function Va(e, t) {
      if (Ue(t)) {
        let n = Va(e, t.ofType);
        return n?.kind === v.NULL ? null : n;
      }
      if (e === null) return { kind: v.NULL };
      if (e === void 0) return null;
      if (ct(t)) {
        let n = t.ofType;
        if (ly(e)) {
          let r = [];
          for (let i of e) {
            let a = Va(i, n);
            a != null && r.push(a);
          }
          return { kind: v.LIST, values: r };
        }
        return Va(e, n);
      }
      if (Ze(t)) {
        if (!rr(e)) return null;
        let n = [];
        for (let r of Object.values(t.getFields())) {
          let i = Va(e[r.name], r.type);
          i && n.push({ kind: v.OBJECT_FIELD, name: { kind: v.NAME, value: r.name }, value: i });
        }
        return { kind: v.OBJECT, fields: n };
      }
      if ($i(t)) {
        let n = t.serialize(e);
        if (n == null) return null;
        if (typeof n == "boolean") return { kind: v.BOOLEAN, value: n };
        if (typeof n == "number" && Number.isFinite(n)) {
          let r = String(n);
          return om.test(r) ? { kind: v.INT, value: r } : { kind: v.FLOAT, value: r };
        }
        if (typeof n == "string") return Ut(t) ? { kind: v.ENUM, value: n } : t === tm && om.test(n) ? { kind: v.INT, value: n } : { kind: v.STRING, value: n };
        throw new TypeError(`Cannot convert value to AST: ${J(n)}.`);
      }
      Wt(!1, "Unexpected input type: " + J(t));
    }
    var om = /^-?(?:0|[1-9][0-9]*)$/, Rl = new fn({ name: "__Schema", description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.", fields: () => ({ description: { type: nt, resolve: (e) => e.description }, types: { description: "A list of all types supported by this server.", type: new Ce(new At(new Ce(Tn))), resolve(e) {
      return Object.values(e.getTypeMap());
    } }, queryType: { description: "The type that query operations will be rooted at.", type: new Ce(Tn), resolve: (e) => e.getQueryType() }, mutationType: { description: "If this server supports mutation, the type that mutation operations will be rooted at.", type: Tn, resolve: (e) => e.getMutationType() }, subscriptionType: { description: "If this server support subscription, the type that subscription operations will be rooted at.", type: Tn, resolve: (e) => e.getSubscriptionType() }, directives: { description: "A list of all directives supported by this server.", type: new Ce(new At(new Ce(um))), resolve: (e) => e.getDirectives() } }) }), um = new fn({ name: "__Directive", description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`, fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isRepeatable: { type: new Ce(bt), resolve: (e) => e.isRepeatable }, locations: { type: new Ce(new At(new Ce(lm))), resolve: (e) => e.locations }, args: { type: new Ce(new At(new Ce(fo))), args: { includeDeprecated: { type: bt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } } }) }), lm = new Fr({ name: "__DirectiveLocation", description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.", values: { QUERY: { value: se.QUERY, description: "Location adjacent to a query operation." }, MUTATION: { value: se.MUTATION, description: "Location adjacent to a mutation operation." }, SUBSCRIPTION: { value: se.SUBSCRIPTION, description: "Location adjacent to a subscription operation." }, FIELD: { value: se.FIELD, description: "Location adjacent to a field." }, FRAGMENT_DEFINITION: { value: se.FRAGMENT_DEFINITION, description: "Location adjacent to a fragment definition." }, FRAGMENT_SPREAD: { value: se.FRAGMENT_SPREAD, description: "Location adjacent to a fragment spread." }, INLINE_FRAGMENT: { value: se.INLINE_FRAGMENT, description: "Location adjacent to an inline fragment." }, VARIABLE_DEFINITION: { value: se.VARIABLE_DEFINITION, description: "Location adjacent to a variable definition." }, SCHEMA: { value: se.SCHEMA, description: "Location adjacent to a schema definition." }, SCALAR: { value: se.SCALAR, description: "Location adjacent to a scalar definition." }, OBJECT: { value: se.OBJECT, description: "Location adjacent to an object type definition." }, FIELD_DEFINITION: { value: se.FIELD_DEFINITION, description: "Location adjacent to a field definition." }, ARGUMENT_DEFINITION: { value: se.ARGUMENT_DEFINITION, description: "Location adjacent to an argument definition." }, INTERFACE: { value: se.INTERFACE, description: "Location adjacent to an interface definition." }, UNION: { value: se.UNION, description: "Location adjacent to a union definition." }, ENUM: { value: se.ENUM, description: "Location adjacent to an enum definition." }, ENUM_VALUE: { value: se.ENUM_VALUE, description: "Location adjacent to an enum value definition." }, INPUT_OBJECT: { value: se.INPUT_OBJECT, description: "Location adjacent to an input object type definition." }, INPUT_FIELD_DEFINITION: { value: se.INPUT_FIELD_DEFINITION, description: "Location adjacent to an input object field definition." } } }), Tn = new fn({ name: "__Type", description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.", fields: () => ({ kind: { type: new Ce(hm), resolve(e) {
      if (hn(e)) return qe.SCALAR;
      if (je(e)) return qe.OBJECT;
      if (Ge(e)) return qe.INTERFACE;
      if (Zt(e)) return qe.UNION;
      if (Ut(e)) return qe.ENUM;
      if (Ze(e)) return qe.INPUT_OBJECT;
      if (ct(e)) return qe.LIST;
      if (Ue(e)) return qe.NON_NULL;
      Wt(!1, `Unexpected type: "${J(e)}".`);
    } }, name: { type: nt, resolve: (e) => "name" in e ? e.name : void 0 }, description: { type: nt, resolve: (e) => "description" in e ? e.description : void 0 }, specifiedByURL: { type: nt, resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0 }, fields: { type: new At(new Ce(cm)), args: { includeDeprecated: { type: bt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (je(e) || Ge(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, interfaces: { type: new At(new Ce(Tn)), resolve(e) {
      if (je(e) || Ge(e)) return e.getInterfaces();
    } }, possibleTypes: { type: new At(new Ce(Tn)), resolve(e, t, n, { schema: r }) {
      if (Pn(e)) return r.getPossibleTypes(e);
    } }, enumValues: { type: new At(new Ce(dm)), args: { includeDeprecated: { type: bt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (Ut(e)) {
        let n = e.getValues();
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, inputFields: { type: new At(new Ce(fo)), args: { includeDeprecated: { type: bt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      if (Ze(e)) {
        let n = Object.values(e.getFields());
        return t ? n : n.filter((r) => r.deprecationReason == null);
      }
    } }, ofType: { type: Tn, resolve: (e) => "ofType" in e ? e.ofType : void 0 }, isOneOf: { type: bt, resolve: (e) => {
      if (Ze(e)) return e.isOneOf;
    } } }) }), cm = new fn({ name: "__Field", description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, args: { type: new Ce(new At(new Ce(fo))), args: { includeDeprecated: { type: bt, defaultValue: !1 } }, resolve(e, { includeDeprecated: t }) {
      return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
    } }, type: { type: new Ce(Tn), resolve: (e) => e.type }, isDeprecated: { type: new Ce(bt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), fo = new fn({ name: "__InputValue", description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, type: { type: new Ce(Tn), resolve: (e) => e.type }, defaultValue: { type: nt, description: "A GraphQL-formatted string representing the default value for this input value.", resolve(e) {
      let { type: t, defaultValue: n } = e, r = Va(n, t);
      return r ? gt(r) : null;
    } }, isDeprecated: { type: new Ce(bt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), dm = new fn({ name: "__EnumValue", description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.", fields: () => ({ name: { type: new Ce(nt), resolve: (e) => e.name }, description: { type: nt, resolve: (e) => e.description }, isDeprecated: { type: new Ce(bt), resolve: (e) => e.deprecationReason != null }, deprecationReason: { type: nt, resolve: (e) => e.deprecationReason } }) }), qe;
    (function(e) {
      e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
    })(qe || (qe = {}));
    var hm = new Fr({ name: "__TypeKind", description: "An enum describing what kind of type a given `__Type` is.", values: { SCALAR: { value: qe.SCALAR, description: "Indicates this type is a scalar." }, OBJECT: { value: qe.OBJECT, description: "Indicates this type is an object. `fields` and `interfaces` are valid fields." }, INTERFACE: { value: qe.INTERFACE, description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields." }, UNION: { value: qe.UNION, description: "Indicates this type is a union. `possibleTypes` is a valid field." }, ENUM: { value: qe.ENUM, description: "Indicates this type is an enum. `enumValues` is a valid field." }, INPUT_OBJECT: { value: qe.INPUT_OBJECT, description: "Indicates this type is an input object. `inputFields` is a valid field." }, LIST: { value: qe.LIST, description: "Indicates this type is a list. `ofType` is a valid field." }, NON_NULL: { value: qe.NON_NULL, description: "Indicates this type is a non-null. `ofType` is a valid field." } } }), $a = { name: "__schema", type: new Ce(Rl), description: "Access the current type schema of this server.", args: [], resolve: (e, t, n, { schema: r }) => r, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, Ka = { name: "__type", type: Tn, description: "Request the type information of a single type.", args: [{ name: "name", description: void 0, type: new Ce(nt), defaultValue: void 0, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }], resolve: (e, { name: t }, n, { schema: r }) => r.getType(t), deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, ja = { name: "__typename", type: new Ce(nt), description: "The name of the current Object type at runtime.", args: [], resolve: (e, t, n, { parentType: r }) => r.name, deprecationReason: void 0, extensions: /* @__PURE__ */ Object.create(null), astNode: void 0 }, po = Object.freeze([Rl, um, lm, Tn, cm, fo, dm, hm]);
    function fm(e) {
      return po.some(({ name: t }) => e.name === t);
    }
    function cy(e) {
      return yn(e, Ol);
    }
    function dy(e) {
      if (!cy(e)) throw new Error(`Expected ${J(e)} to be a GraphQL schema.`);
      return e;
    }
    var Ol = class {
      constructor(e) {
        var t, n;
        this.__validationErrors = e.assumeValid === !0 ? [] : void 0, rr(e) || Re(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || Re(!1, `"types" must be Array if provided but got: ${J(e.types)}.`), !e.directives || Array.isArray(e.directives) || Re(!1, `"directives" must be Array if provided but got: ${J(e.directives)}.`), this.description = e.description, this.extensions = dn(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (t = e.extensionASTNodes) !== null && t !== void 0 ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (n = e.directives) !== null && n !== void 0 ? n : qi;
        let r = new Set(e.types);
        if (e.types != null) for (let i of e.types) r.delete(i), wn(i, r);
        this._queryType != null && wn(this._queryType, r), this._mutationType != null && wn(this._mutationType, r), this._subscriptionType != null && wn(this._subscriptionType, r);
        for (let i of this._directives) if (nm(i)) for (let a of i.args) wn(a.type, r);
        wn(Rl, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
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
          case Mt.QUERY:
            return this.getQueryType();
          case Mt.MUTATION:
            return this.getMutationType();
          case Mt.SUBSCRIPTION:
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
        return Zt(e) ? e.getTypes() : this.getImplementations(e).objects;
      }
      getImplementations(e) {
        return this._implementationsMap[e.name] ?? { objects: [], interfaces: [] };
      }
      isSubType(e, t) {
        let n = this._subTypeMap[e.name];
        if (n === void 0) {
          if (n = /* @__PURE__ */ Object.create(null), Zt(e)) for (let r of e.getTypes()) n[r.name] = !0;
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
    function wn(e, t) {
      let n = tt(e);
      if (!t.has(n)) {
        if (t.add(n), Zt(n)) for (let r of n.getTypes()) wn(r, t);
        else if (je(n) || Ge(n)) {
          for (let r of n.getInterfaces()) wn(r, t);
          for (let r of Object.values(n.getFields())) {
            wn(r.type, t);
            for (let i of r.args) wn(i.type, t);
          }
        } else if (Ze(n)) for (let r of Object.values(n.getFields())) wn(r.type, t);
      }
      return t;
    }
    function hy(e) {
      if (dy(e), e.__validationErrors) return e.__validationErrors;
      let t = new py(e);
      my(t), gy(t), Ey(t);
      let n = t.getErrors();
      return e.__validationErrors = n, n;
    }
    function fy(e) {
      let t = hy(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    var py = class {
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
    function my(e) {
      let t = e.schema, n = t.getQueryType();
      if (!n) e.reportError("Query root type must be provided.", t.astNode);
      else if (!je(n)) {
        var r;
        e.reportError(`Query root type must be Object type, it cannot be ${J(n)}.`, (r = xl(t, Mt.QUERY)) !== null && r !== void 0 ? r : n.astNode);
      }
      let i = t.getMutationType();
      if (i && !je(i)) {
        var a;
        e.reportError(`Mutation root type must be Object type if provided, it cannot be ${J(i)}.`, (a = xl(t, Mt.MUTATION)) !== null && a !== void 0 ? a : i.astNode);
      }
      let s = t.getSubscriptionType();
      if (s && !je(s)) {
        var o;
        e.reportError(`Subscription root type must be Object type if provided, it cannot be ${J(s)}.`, (o = xl(t, Mt.SUBSCRIPTION)) !== null && o !== void 0 ? o : s.astNode);
      }
    }
    function xl(e, t) {
      var n;
      return (n = [e.astNode, ...e.extensionASTNodes].flatMap((r) => {
        var i;
        return (i = r?.operationTypes) !== null && i !== void 0 ? i : [];
      }).find((r) => r.operation === t)) === null || n === void 0 ? void 0 : n.type;
    }
    function gy(e) {
      for (let n of e.schema.getDirectives()) {
        if (!nm(n)) {
          e.reportError(`Expected directive but got: ${J(n)}.`, n?.astNode);
          continue;
        }
        Zr(e, n), n.locations.length === 0 && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
        for (let r of n.args) if (Zr(e, r), en(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${J(r.type)}.`, r.astNode), Ua(r) && r.deprecationReason != null) {
          var t;
          e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [kl(r.astNode), (t = r.astNode) === null || t === void 0 ? void 0 : t.type]);
        }
      }
    }
    function Zr(e, t) {
      t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
    }
    function Ey(e) {
      let t = wy(e), n = e.schema.getTypeMap();
      for (let r of Object.values(n)) {
        if (!ry(r)) {
          e.reportError(`Expected GraphQL named type but got: ${J(r)}.`, r.astNode);
          continue;
        }
        fm(r) || Zr(e, r), je(r) || Ge(r) ? (_y(e, r), Dy(e, r)) : Zt(r) ? yy(e, r) : Ut(r) ? Ny(e, r) : Ze(r) && (Cy(e, r), t(r));
      }
    }
    function _y(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let s of n) {
        if (Zr(e, s), !Qr(s.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${J(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        for (let o of s.args) {
          let u = o.name;
          if (Zr(e, o), !en(o.type)) {
            var i;
            e.reportError(`The type of ${t.name}.${s.name}(${u}:) must be Input Type but got: ${J(o.type)}.`, (i = o.astNode) === null || i === void 0 ? void 0 : i.type);
          }
          if (Ua(o) && o.deprecationReason != null) {
            var a;
            e.reportError(`Required argument ${t.name}.${s.name}(${u}:) cannot be deprecated.`, [kl(o.astNode), (a = o.astNode) === null || a === void 0 ? void 0 : a.type]);
          }
        }
      }
    }
    function Dy(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.getInterfaces()) {
        if (!Ge(r)) {
          e.reportError(`Type ${J(t)} must only implement Interface types, it cannot implement ${J(r)}.`, qa(t, r));
          continue;
        }
        if (t === r) {
          e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, qa(t, r));
          continue;
        }
        if (n[r.name]) {
          e.reportError(`Type ${t.name} can only implement ${r.name} once.`, qa(t, r));
          continue;
        }
        n[r.name] = !0, by(e, t, r), vy(e, t, r);
      }
    }
    function vy(e, t, n) {
      let r = t.getFields();
      for (let u of Object.values(n.getFields())) {
        let l = u.name, c = r[l];
        if (!c) {
          e.reportError(`Interface field ${n.name}.${l} expected but ${t.name} does not provide it.`, [u.astNode, t.astNode, ...t.extensionASTNodes]);
          continue;
        }
        if (!ji(e.schema, c.type, u.type)) {
          var i, a;
          e.reportError(`Interface field ${n.name}.${l} expects type ${J(u.type)} but ${t.name}.${l} is type ${J(c.type)}.`, [(i = u.astNode) === null || i === void 0 ? void 0 : i.type, (a = c.astNode) === null || a === void 0 ? void 0 : a.type]);
        }
        for (let f of u.args) {
          let p = f.name, m = c.args.find((g) => g.name === p);
          if (!m) {
            e.reportError(`Interface field argument ${n.name}.${l}(${p}:) expected but ${t.name}.${l} does not provide it.`, [f.astNode, c.astNode]);
            continue;
          }
          if (!Zp(f.type, m.type)) {
            var s, o;
            e.reportError(`Interface field argument ${n.name}.${l}(${p}:) expects type ${J(f.type)} but ${t.name}.${l}(${p}:) is type ${J(m.type)}.`, [(s = f.astNode) === null || s === void 0 ? void 0 : s.type, (o = m.astNode) === null || o === void 0 ? void 0 : o.type]);
          }
        }
        for (let f of c.args) {
          let p = f.name;
          !u.args.find((m) => m.name === p) && Ua(f) && e.reportError(`Object field ${t.name}.${l} includes required argument ${p} that is missing from the Interface field ${n.name}.${l}.`, [f.astNode, u.astNode]);
        }
      }
    }
    function by(e, t, n) {
      let r = t.getInterfaces();
      for (let i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...qa(n, i), ...qa(t, n)]);
    }
    function yy(e, t) {
      let n = t.getTypes();
      n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
      let r = /* @__PURE__ */ Object.create(null);
      for (let i of n) {
        if (r[i.name]) {
          e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, pm(t, i.name));
          continue;
        }
        r[i.name] = !0, je(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${J(i)}.`, pm(t, String(i)));
      }
    }
    function Ny(e, t) {
      let n = t.getValues();
      n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
      for (let r of n) Zr(e, r);
    }
    function Cy(e, t) {
      let n = Object.values(t.getFields());
      n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
      for (let a of n) {
        if (Zr(e, a), !en(a.type)) {
          var r;
          e.reportError(`The type of ${t.name}.${a.name} must be Input Type but got: ${J(a.type)}.`, (r = a.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        if (Qp(a) && a.deprecationReason != null) {
          var i;
          e.reportError(`Required input field ${t.name}.${a.name} cannot be deprecated.`, [kl(a.astNode), (i = a.astNode) === null || i === void 0 ? void 0 : i.type]);
        }
        t.isOneOf && Ty(t, a, e);
      }
    }
    function Ty(e, t, n) {
      if (Ue(t.type)) {
        var r;
        n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, (r = t.astNode) === null || r === void 0 ? void 0 : r.type);
      }
      t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
    }
    function wy(e) {
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
    function qa(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.interfaces) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t.name);
    }
    function pm(e, t) {
      let { astNode: n, extensionASTNodes: r } = e;
      return (n != null ? [n, ...r] : r).flatMap((i) => {
        var a;
        return (a = i.types) !== null && a !== void 0 ? a : [];
      }).filter((i) => i.name.value === t);
    }
    function kl(e) {
      var t;
      return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n) => n.name.value === Il.name);
    }
    function nn(e, t) {
      switch (t.kind) {
        case v.LIST_TYPE: {
          let n = nn(e, t.type);
          return n && new At(n);
        }
        case v.NON_NULL_TYPE: {
          let n = nn(e, t.type);
          return n && new Ce(n);
        }
        case v.NAMED_TYPE:
          return e.getType(t.name.value);
      }
    }
    var mm = class {
      constructor(e, t, n) {
        this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? Ay, t && (en(t) && this._inputTypeStack.push(t), tn(t) && this._parentTypeStack.push(t), Qr(t) && this._typeStack.push(t));
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
            this._parentTypeStack.push(tn(r) ? r : void 0);
            break;
          }
          case v.FIELD: {
            let r = this.getParentType(), i, a;
            r && (i = this._getFieldDef(t, r, e), i && (a = i.type)), this._fieldDefStack.push(i), this._typeStack.push(Qr(a) ? a : void 0);
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
            let r = e.typeCondition, i = r ? nn(t, r) : tt(this.getType());
            this._typeStack.push(Qr(i) ? i : void 0);
            break;
          }
          case v.VARIABLE_DEFINITION: {
            let r = nn(t, e.type);
            this._inputTypeStack.push(en(r) ? r : void 0);
            break;
          }
          case v.ARGUMENT: {
            var n;
            let r, i, a = (n = this.getDirective()) !== null && n !== void 0 ? n : this.getFieldDef();
            a && (r = a.args.find((s) => s.name === e.name.value), r && (i = r.type)), this._argument = r, this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(en(i) ? i : void 0);
            break;
          }
          case v.LIST: {
            let r = Al(this.getInputType()), i = ct(r) ? r.ofType : r;
            this._defaultValueStack.push(void 0), this._inputTypeStack.push(en(i) ? i : void 0);
            break;
          }
          case v.OBJECT_FIELD: {
            let r = tt(this.getInputType()), i, a;
            Ze(r) && (a = r.getFields()[e.name.value], a && (i = a.type)), this._defaultValueStack.push(a ? a.defaultValue : void 0), this._inputTypeStack.push(en(i) ? i : void 0);
            break;
          }
          case v.ENUM: {
            let r = tt(this.getInputType()), i;
            Ut(r) && (i = r.getValue(e.value)), this._enumValue = i;
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
    function Ay(e, t, n) {
      let r = n.name.value;
      if (r === $a.name && e.getQueryType() === t) return $a;
      if (r === Ka.name && e.getQueryType() === t) return Ka;
      if (r === ja.name && tn(t)) return ja;
      if (je(t) || Ge(t)) return t.getFields()[r];
    }
    function gm(e, t) {
      return { enter(...n) {
        let r = n[0];
        e.enter(r);
        let i = oo(t, r.kind).enter;
        if (i) {
          let a = i.apply(t, n);
          return a !== void 0 && (e.leave(r), El(a) && e.enter(a)), a;
        }
      }, leave(...n) {
        let r = n[0], i = oo(t, r.kind).leave, a;
        return i && (a = i.apply(t, n)), e.leave(r), a;
      } };
    }
    function Sy(e) {
      return e.kind === v.OPERATION_DEFINITION || e.kind === v.FRAGMENT_DEFINITION;
    }
    function Ly(e) {
      return e.kind === v.SCHEMA_DEFINITION || Ga(e) || e.kind === v.DIRECTIVE_DEFINITION;
    }
    function Ga(e) {
      return e.kind === v.SCALAR_TYPE_DEFINITION || e.kind === v.OBJECT_TYPE_DEFINITION || e.kind === v.INTERFACE_TYPE_DEFINITION || e.kind === v.UNION_TYPE_DEFINITION || e.kind === v.ENUM_TYPE_DEFINITION || e.kind === v.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function Fy(e) {
      return e.kind === v.SCHEMA_EXTENSION || Ml(e);
    }
    function Ml(e) {
      return e.kind === v.SCALAR_TYPE_EXTENSION || e.kind === v.OBJECT_TYPE_EXTENSION || e.kind === v.INTERFACE_TYPE_EXTENSION || e.kind === v.UNION_TYPE_EXTENSION || e.kind === v.ENUM_TYPE_EXTENSION || e.kind === v.INPUT_OBJECT_TYPE_EXTENSION;
    }
    function Em(e) {
      return { Document(t) {
        for (let n of t.definitions) if (!Sy(n)) {
          let r = n.kind === v.SCHEMA_DEFINITION || n.kind === v.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
          e.reportError(new Y(`The ${r} definition is not executable.`, { nodes: n }));
        }
        return !1;
      } };
    }
    function Iy(e) {
      return { Field(t) {
        let n = e.getParentType();
        if (n && !e.getFieldDef()) {
          let r = e.getSchema(), i = t.name.value, a = Ar("to use an inline fragment on", Ry(r, n, i));
          a === "" && (a = Ar(Oy(n, i))), e.reportError(new Y(`Cannot query field "${i}" on type "${n.name}".` + a, { nodes: t }));
        }
      } };
    }
    function Ry(e, t, n) {
      if (!Pn(t)) return [];
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
        return u !== 0 ? u : Ge(s) && e.isSubType(s, o) ? -1 : Ge(o) && e.isSubType(o, s) ? 1 : bl(s.name, o.name);
      }).map((s) => s.name);
    }
    function Oy(e, t) {
      if (je(e) || Ge(e)) {
        let n = Object.keys(e.getFields());
        return Jr(t, n);
      }
      return [];
    }
    function xy(e) {
      return { InlineFragment(t) {
        let n = t.typeCondition;
        if (n) {
          let r = nn(e.getSchema(), n);
          if (r && !tn(r)) {
            let i = gt(n);
            e.reportError(new Y(`Fragment cannot condition on non composite type "${i}".`, { nodes: n }));
          }
        }
      }, FragmentDefinition(t) {
        let n = nn(e.getSchema(), t.typeCondition);
        if (n && !tn(n)) {
          let r = gt(t.typeCondition);
          e.reportError(new Y(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, { nodes: t.typeCondition }));
        }
      } };
    }
    function ky(e) {
      return { ..._m(e), Argument(t) {
        let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
        if (!n && r && i) {
          let a = t.name.value, s = r.args.map((u) => u.name), o = Jr(a, s);
          e.reportError(new Y(`Unknown argument "${a}" on field "${i.name}.${r.name}".` + Ar(o), { nodes: t }));
        }
      } };
    }
    function _m(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qi;
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
            let f = Jr(c, u);
            e.reportError(new Y(`Unknown argument "${c}" on directive "@${o}".` + Ar(f), { nodes: l }));
          }
        }
        return !1;
      } };
    }
    function Dm(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qi;
      for (let a of r) t[a.name] = a.locations;
      let i = e.getDocument().definitions;
      for (let a of i) a.kind === v.DIRECTIVE_DEFINITION && (t[a.name.value] = a.locations.map((s) => s.value));
      return { Directive(a, s, o, u, l) {
        let c = a.name.value, f = t[c];
        if (!f) {
          e.reportError(new Y(`Unknown directive "@${c}".`, { nodes: a }));
          return;
        }
        let p = My(l);
        p && !f.includes(p) && e.reportError(new Y(`Directive "@${c}" may not be used on ${p}.`, { nodes: a }));
      } };
    }
    function My(e) {
      let t = e[e.length - 1];
      switch ("kind" in t || Wt(), t.kind) {
        case v.OPERATION_DEFINITION:
          return Uy(t.operation);
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
          return "kind" in n || Wt(), n.kind === v.INPUT_OBJECT_TYPE_DEFINITION ? se.INPUT_FIELD_DEFINITION : se.ARGUMENT_DEFINITION;
        }
        default:
          Wt(!1, "Unexpected kind: " + J(t.kind));
      }
    }
    function Uy(e) {
      switch (e) {
        case Mt.QUERY:
          return se.QUERY;
        case Mt.MUTATION:
          return se.MUTATION;
        case Mt.SUBSCRIPTION:
          return se.SUBSCRIPTION;
      }
    }
    function Py(e) {
      return { FragmentSpread(t) {
        let n = t.name.value;
        e.getFragment(n) || e.reportError(new Y(`Unknown fragment "${n}".`, { nodes: t.name }));
      } };
    }
    function vm(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      for (let a of e.getDocument().definitions) Ga(a) && (r[a.name.value] = !0);
      let i = [...Object.keys(n), ...Object.keys(r)];
      return { NamedType(a, s, o, u, l) {
        let c = a.name.value;
        if (!n[c] && !r[c]) {
          var f;
          let p = (f = l[2]) !== null && f !== void 0 ? f : o, m = p != null && By(p);
          if (m && bm.includes(c)) return;
          let g = Jr(c, m ? bm.concat(i) : i);
          e.reportError(new Y(`Unknown type "${c}".` + Ar(g), { nodes: a }));
        }
      } };
    }
    var bm = [...ho, ...po].map((e) => e.name);
    function By(e) {
      return "kind" in e && (Ly(e) || Fy(e));
    }
    function Vy(e) {
      let t = 0;
      return { Document(n) {
        t = n.definitions.filter((r) => r.kind === v.OPERATION_DEFINITION).length;
      }, OperationDefinition(n) {
        !n.name && t > 1 && e.reportError(new Y("This anonymous operation must be the only defined operation.", { nodes: n }));
      } };
    }
    function $y(e) {
      var t, n, r;
      let i = e.getSchema(), a = (t = (n = (r = i?.astNode) !== null && r !== void 0 ? r : i?.getQueryType()) !== null && n !== void 0 ? n : i?.getMutationType()) !== null && t !== void 0 ? t : i?.getSubscriptionType(), s = 0;
      return { SchemaDefinition(o) {
        if (a) {
          e.reportError(new Y("Cannot define a new schema within a schema extension.", { nodes: o }));
          return;
        }
        s > 0 && e.reportError(new Y("Must provide only one schema definition.", { nodes: o })), ++s;
      } };
    }
    var Ky = 3;
    function jy(e) {
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
        if (n.kind === v.FIELD && (n.name.value === "fields" || n.name.value === "interfaces" || n.name.value === "possibleTypes" || n.name.value === "inputFields") && (i++, i >= Ky)) return !0;
        if ("selectionSet" in n && n.selectionSet) {
          for (let a of n.selectionSet.selections) if (t(a, r, i)) return !0;
        }
        return !1;
      }
      return { Field(n) {
        if ((n.name.value === "__schema" || n.name.value === "__type") && t(n)) return e.reportError(new Y("Maximum introspection depth exceeded", { nodes: [n] })), !1;
      } };
    }
    function qy(e) {
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
    function Gy(e) {
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
    function ym(e) {
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
    function Hy(e) {
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
    function Ul(e) {
      switch (e.kind) {
        case v.OBJECT:
          return { ...e, fields: Wy(e.fields) };
        case v.LIST:
          return { ...e, values: e.values.map(Ul) };
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
    function Wy(e) {
      return e.map((t) => ({ ...t, value: Ul(t.value) })).sort((t, n) => bl(t.name.value, n.name.value));
    }
    function Nm(e) {
      return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + Nm(n)).join(" and ") : e;
    }
    function Yy(e) {
      let t = new Am(), n = new eN(), r = /* @__PURE__ */ new Map();
      return { SelectionSet(i) {
        let a = zy(e, r, t, n, e.getParentType(), i);
        for (let [[s, o], u, l] of a) {
          let c = Nm(o);
          e.reportError(new Y(`Fields "${s}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`, { nodes: u.concat(l) }));
        }
      } };
    }
    function zy(e, t, n, r, i, a) {
      let s = [], [o, u] = Eo(e, t, i, a);
      if (Jy(e, s, t, n, r, o), u.length !== 0) for (let l = 0; l < u.length; l++) {
        mo(e, s, t, n, r, !1, o, u[l]);
        for (let c = l + 1; c < u.length; c++) go(e, s, t, n, r, !1, u[l], u[c]);
      }
      return s;
    }
    function mo(e, t, n, r, i, a, s, o) {
      if (r.has(s, o, a)) return;
      r.add(s, o, a);
      let u = e.getFragment(o);
      if (!u) return;
      let [l, c] = Vl(e, n, u);
      if (s !== l) {
        Pl(e, t, n, r, i, a, s, l);
        for (let f of c) mo(e, t, n, r, i, a, s, f);
      }
    }
    function go(e, t, n, r, i, a, s, o) {
      if (s === o || i.has(s, o, a)) return;
      i.add(s, o, a);
      let u = e.getFragment(s), l = e.getFragment(o);
      if (!u || !l) return;
      let [c, f] = Vl(e, n, u), [p, m] = Vl(e, n, l);
      Pl(e, t, n, r, i, a, c, p);
      for (let g of m) go(e, t, n, r, i, a, s, g);
      for (let g of f) go(e, t, n, r, i, a, g, o);
    }
    function Xy(e, t, n, r, i, a, s, o, u) {
      let l = [], [c, f] = Eo(e, t, a, s), [p, m] = Eo(e, t, o, u);
      Pl(e, l, t, n, r, i, c, p);
      for (let g of m) mo(e, l, t, n, r, i, c, g);
      for (let g of f) mo(e, l, t, n, r, i, p, g);
      for (let g of f) for (let _ of m) go(e, l, t, n, r, i, g, _);
      return l;
    }
    function Jy(e, t, n, r, i, a) {
      for (let [s, o] of Object.entries(a)) if (o.length > 1) for (let u = 0; u < o.length; u++) for (let l = u + 1; l < o.length; l++) {
        let c = Cm(e, n, r, i, !1, s, o[u], o[l]);
        c && t.push(c);
      }
    }
    function Pl(e, t, n, r, i, a, s, o) {
      for (let [u, l] of Object.entries(s)) {
        let c = o[u];
        if (c) for (let f of l) for (let p of c) {
          let m = Cm(e, n, r, i, a, u, f, p);
          m && t.push(m);
        }
      }
    }
    function Cm(e, t, n, r, i, a, s, o) {
      let [u, l, c] = s, [f, p, m] = o, g = i || u !== f && je(u) && je(f);
      if (!g) {
        let C = l.name.value, x = p.name.value;
        if (C !== x) return [[a, `"${C}" and "${x}" are different fields`], [l], [p]];
        if (!Qy(l, p)) return [[a, "they have differing arguments"], [l], [p]];
      }
      let _ = c?.type, w = m?.type;
      if (_ && w && Bl(_, w)) return [[a, `they return conflicting types "${J(_)}" and "${J(w)}"`], [l], [p]];
      let S = l.selectionSet, F = p.selectionSet;
      if (S && F) {
        let C = Xy(e, t, n, r, g, tt(_), S, tt(w), F);
        return Zy(C, a, l, p);
      }
    }
    function Qy(e, t) {
      let n = e.arguments, r = t.arguments;
      if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
      if (r === void 0 || r.length === 0 || n.length !== r.length) return !1;
      let i = new Map(r.map(({ name: a, value: s }) => [a.value, s]));
      return n.every((a) => {
        let s = a.value, o = i.get(a.name.value);
        return o === void 0 ? !1 : Tm(s) === Tm(o);
      });
    }
    function Tm(e) {
      return gt(Ul(e));
    }
    function Bl(e, t) {
      return ct(e) ? ct(t) ? Bl(e.ofType, t.ofType) : !0 : ct(t) ? !0 : Ue(e) ? Ue(t) ? Bl(e.ofType, t.ofType) : !0 : Ue(t) ? !0 : $i(e) || $i(t) ? e !== t : !1;
    }
    function Eo(e, t, n, r) {
      let i = t.get(r);
      if (i) return i;
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      wm(e, n, r, a, s);
      let o = [a, Object.keys(s)];
      return t.set(r, o), o;
    }
    function Vl(e, t, n) {
      let r = t.get(n.selectionSet);
      if (r) return r;
      let i = nn(e.getSchema(), n.typeCondition);
      return Eo(e, t, i, n.selectionSet);
    }
    function wm(e, t, n, r, i) {
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
          let s = a.typeCondition, o = s ? nn(e.getSchema(), s) : t;
          wm(e, o, a.selectionSet, r, i);
          break;
        }
      }
    }
    function Zy(e, t, n, r) {
      if (e.length > 0) return [[t, e.map(([i]) => i)], [n, ...e.map(([, i]) => i).flat()], [r, ...e.map(([, , i]) => i).flat()]];
    }
    var Am = class {
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
    }, eN = class {
      constructor() {
        this._orderedPairSet = new Am();
      }
      has(e, t, n) {
        return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n);
      }
      add(e, t, n) {
        e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n);
      }
    };
    function tN(e) {
      return { InlineFragment(t) {
        let n = e.getType(), r = e.getParentType();
        if (tn(n) && tn(r) && !Sl(e.getSchema(), n, r)) {
          let i = J(r), a = J(n);
          e.reportError(new Y(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${a}".`, { nodes: t }));
        }
      }, FragmentSpread(t) {
        let n = t.name.value, r = nN(e, n), i = e.getParentType();
        if (r && i && !Sl(e.getSchema(), r, i)) {
          let a = J(i), s = J(r);
          e.reportError(new Y(`Fragment "${n}" cannot be spread here as objects of type "${a}" can never be of type "${s}".`, { nodes: t }));
        }
      } };
    }
    function nN(e, t) {
      let n = e.getFragment(t);
      if (n) {
        let r = nn(e.getSchema(), n.typeCondition);
        if (tn(r)) return r;
      }
    }
    function rN(e) {
      let t = e.getSchema(), n = /* @__PURE__ */ Object.create(null);
      for (let i of e.getDocument().definitions) Ga(i) && (n[i.name.value] = i);
      return { ScalarTypeExtension: r, ObjectTypeExtension: r, InterfaceTypeExtension: r, UnionTypeExtension: r, EnumTypeExtension: r, InputObjectTypeExtension: r };
      function r(i) {
        let a = i.name.value, s = n[a], o = t?.getType(a), u;
        if (s ? u = iN[s.kind] : o && (u = aN(o)), u) {
          if (u !== i.kind) {
            let l = sN(i.kind);
            e.reportError(new Y(`Cannot extend non-${l} type "${a}".`, { nodes: s ? [s, i] : i }));
          }
        } else {
          let l = Object.keys({ ...n, ...t?.getTypeMap() }), c = Jr(a, l);
          e.reportError(new Y(`Cannot extend type "${a}" because it is not defined.` + Ar(c), { nodes: i.name }));
        }
      }
    }
    var iN = { [v.SCALAR_TYPE_DEFINITION]: v.SCALAR_TYPE_EXTENSION, [v.OBJECT_TYPE_DEFINITION]: v.OBJECT_TYPE_EXTENSION, [v.INTERFACE_TYPE_DEFINITION]: v.INTERFACE_TYPE_EXTENSION, [v.UNION_TYPE_DEFINITION]: v.UNION_TYPE_EXTENSION, [v.ENUM_TYPE_DEFINITION]: v.ENUM_TYPE_EXTENSION, [v.INPUT_OBJECT_TYPE_DEFINITION]: v.INPUT_OBJECT_TYPE_EXTENSION };
    function aN(e) {
      if (hn(e)) return v.SCALAR_TYPE_EXTENSION;
      if (je(e)) return v.OBJECT_TYPE_EXTENSION;
      if (Ge(e)) return v.INTERFACE_TYPE_EXTENSION;
      if (Zt(e)) return v.UNION_TYPE_EXTENSION;
      if (Ut(e)) return v.ENUM_TYPE_EXTENSION;
      if (Ze(e)) return v.INPUT_OBJECT_TYPE_EXTENSION;
      Wt(!1, "Unexpected type: " + J(e));
    }
    function sN(e) {
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
          Wt(!1, "Unexpected kind: " + J(e));
      }
    }
    function oN(e) {
      return { ...Sm(e), Field: { leave(t) {
        var n;
        let r = e.getFieldDef();
        if (!r) return !1;
        let i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map((a) => a.name.value));
        for (let a of r.args) if (!i.has(a.name) && Ua(a)) {
          let s = J(a.type);
          e.reportError(new Y(`Field "${r.name}" argument "${a.name}" of type "${s}" is required, but it was not provided.`, { nodes: t }));
        }
      } } };
    }
    function Sm(e) {
      var t;
      let n = /* @__PURE__ */ Object.create(null), r = e.getSchema(), i = (t = r?.getDirectives()) !== null && t !== void 0 ? t : qi;
      for (let o of i) n[o.name] = zr(o.args.filter(Ua), (u) => u.name);
      let a = e.getDocument().definitions;
      for (let o of a) if (o.kind === v.DIRECTIVE_DEFINITION) {
        var s;
        let u = (s = o.arguments) !== null && s !== void 0 ? s : [];
        n[o.name.value] = zr(u.filter(uN), (l) => l.name.value);
      }
      return { Directive: { leave(o) {
        let u = o.name.value, l = n[u];
        if (l) {
          var c;
          let f = (c = o.arguments) !== null && c !== void 0 ? c : [], p = new Set(f.map((m) => m.name.value));
          for (let [m, g] of Object.entries(l)) if (!p.has(m)) {
            let _ = Cl(g.type) ? J(g.type) : gt(g.type);
            e.reportError(new Y(`Directive "@${u}" argument "${m}" of type "${_}" is required, but it was not provided.`, { nodes: o }));
          }
        }
      } } };
    }
    function uN(e) {
      return e.type.kind === v.NON_NULL_TYPE && e.defaultValue == null;
    }
    function lN(e) {
      return { Field(t) {
        let n = e.getType(), r = t.selectionSet;
        if (n) if ($i(tt(n))) {
          if (r) {
            let i = t.name.value, a = J(n);
            e.reportError(new Y(`Field "${i}" must not have a selection since type "${a}" has no subfields.`, { nodes: r }));
          }
        } else if (r) {
          if (r.selections.length === 0) {
            let i = t.name.value, a = J(n);
            e.reportError(new Y(`Field "${i}" of type "${a}" must have at least one field selected.`, { nodes: t }));
          }
        } else {
          let i = t.name.value, a = J(n);
          e.reportError(new Y(`Field "${i}" of type "${a}" must have a selection of subfields. Did you mean "${i} { ... }"?`, { nodes: t }));
        }
      } };
    }
    function Ir(e, t, n) {
      if (e) {
        if (e.kind === v.VARIABLE) {
          let r = e.name.value;
          if (n == null || n[r] === void 0) return;
          let i = n[r];
          return i === null && Ue(t) ? void 0 : i;
        }
        if (Ue(t)) return e.kind === v.NULL ? void 0 : Ir(e, t.ofType, n);
        if (e.kind === v.NULL) return null;
        if (ct(t)) {
          let r = t.ofType;
          if (e.kind === v.LIST) {
            let a = [];
            for (let s of e.values) if (Lm(s, n)) {
              if (Ue(r)) return;
              a.push(null);
            } else {
              let o = Ir(s, r, n);
              if (o === void 0) return;
              a.push(o);
            }
            return a;
          }
          let i = Ir(e, r, n);
          return i === void 0 ? void 0 : [i];
        }
        if (Ze(t)) {
          if (e.kind !== v.OBJECT) return;
          let r = /* @__PURE__ */ Object.create(null), i = zr(e.fields, (a) => a.name.value);
          for (let a of Object.values(t.getFields())) {
            let s = i[a.name];
            if (!s || Lm(s.value, n)) {
              if (a.defaultValue !== void 0) r[a.name] = a.defaultValue;
              else if (Ue(a.type)) return;
              continue;
            }
            let o = Ir(s.value, a.type, n);
            if (o === void 0) return;
            r[a.name] = o;
          }
          if (t.isOneOf) {
            let a = Object.keys(r);
            if (a.length !== 1 || r[a[0]] === null) return;
          }
          return r;
        }
        if ($i(t)) {
          let r;
          try {
            r = t.parseLiteral(e, n);
          } catch {
            return;
          }
          return r === void 0 ? void 0 : r;
        }
        Wt(!1, "Unexpected input type: " + J(t));
      }
    }
    function Lm(e, t) {
      return e.kind === v.VARIABLE && (t == null || t[e.name.value] === void 0);
    }
    function cN(e, t, n) {
      var r;
      let i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = zr(a, (o) => o.name.value);
      for (let o of e.args) {
        let u = o.name, l = o.type, c = s[u];
        if (!c) {
          if (o.defaultValue !== void 0) i[u] = o.defaultValue;
          else if (Ue(l)) throw new Y(`Argument "${u}" of required type "${J(l)}" was not provided.`, { nodes: t });
          continue;
        }
        let f = c.value, p = f.kind === v.NULL;
        if (f.kind === v.VARIABLE) {
          let g = f.name.value;
          if (n == null || !dN(n, g)) {
            if (o.defaultValue !== void 0) i[u] = o.defaultValue;
            else if (Ue(l)) throw new Y(`Argument "${u}" of required type "${J(l)}" was provided the variable "$${g}" which was not provided a runtime value.`, { nodes: f });
            continue;
          }
          p = n[g] == null;
        }
        if (p && Ue(l)) throw new Y(`Argument "${u}" of non-null type "${J(l)}" must not be null.`, { nodes: f });
        let m = Ir(f, l, n);
        if (m === void 0) throw new Y(`Argument "${u}" has invalid value ${gt(f)}.`, { nodes: f });
        i[u] = m;
      }
      return i;
    }
    function Ha(e, t, n) {
      var r;
      let i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((a) => a.name.value === e.name);
      if (i) return cN(e, i, n);
    }
    function dN(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function hN(e, t, n, r, i) {
      let a = /* @__PURE__ */ new Map();
      return $l(e, t, n, r, i, a, /* @__PURE__ */ new Set()), a;
    }
    function $l(e, t, n, r, i, a, s) {
      for (let o of i.selections) switch (o.kind) {
        case v.FIELD: {
          if (!Kl(n, o)) continue;
          let u = fN(o), l = a.get(u);
          l !== void 0 ? l.push(o) : a.set(u, [o]);
          break;
        }
        case v.INLINE_FRAGMENT: {
          if (!Kl(n, o) || !Fm(e, o, r)) continue;
          $l(e, t, n, r, o.selectionSet, a, s);
          break;
        }
        case v.FRAGMENT_SPREAD: {
          let u = o.name.value;
          if (s.has(u) || !Kl(n, o)) continue;
          s.add(u);
          let l = t[u];
          if (!l || !Fm(e, l, r)) continue;
          $l(e, t, n, r, l.selectionSet, a, s);
          break;
        }
      }
    }
    function Kl(e, t) {
      return Ha(im, t, e)?.if === !0 ? !1 : Ha(rm, t, e)?.if !== !1;
    }
    function Fm(e, t, n) {
      let r = t.typeCondition;
      if (!r) return !0;
      let i = nn(e, r);
      return i === n ? !0 : Pn(i) ? e.isSubType(i, n) : !1;
    }
    function fN(e) {
      return e.alias ? e.alias.value : e.name.value;
    }
    function pN(e) {
      return { OperationDefinition(t) {
        if (t.operation === "subscription") {
          let n = e.getSchema(), r = n.getSubscriptionType();
          if (r) {
            let i = t.name ? t.name.value : null, a = /* @__PURE__ */ Object.create(null), s = e.getDocument(), o = /* @__PURE__ */ Object.create(null);
            for (let l of s.definitions) l.kind === v.FRAGMENT_DEFINITION && (o[l.name.value] = l);
            let u = hN(n, o, a, r, t.selectionSet);
            if (u.size > 1) {
              let l = [...u.values()].slice(1).flat();
              e.reportError(new Y(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", { nodes: l }));
            }
            for (let l of u.values()) l[0].name.value.startsWith("__") && e.reportError(new Y(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", { nodes: l }));
          }
        }
      } };
    }
    function jl(e, t) {
      let n = /* @__PURE__ */ new Map();
      for (let r of e) {
        let i = t(r), a = n.get(i);
        a === void 0 ? n.set(i, [r]) : a.push(r);
      }
      return n;
    }
    function mN(e) {
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
        let a = jl(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`Argument "${r}(${s}:)" can only be defined once.`, { nodes: o.map((u) => u.name) }));
        return !1;
      }
    }
    function Im(e) {
      return { Field: t, Directive: t };
      function t(n) {
        var r;
        let i = (r = n.arguments) !== null && r !== void 0 ? r : [], a = jl(i, (s) => s.name.value);
        for (let [s, o] of a) o.length > 1 && e.reportError(new Y(`There can be only one argument named "${s}".`, { nodes: o.map((u) => u.name) }));
      }
    }
    function gN(e) {
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
    function Rm(e) {
      let t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qi;
      for (let o of r) t[o.name] = !o.isRepeatable;
      let i = e.getDocument().definitions;
      for (let o of i) o.kind === v.DIRECTIVE_DEFINITION && (t[o.name.value] = !o.repeatable);
      let a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
      return { enter(o) {
        if (!("directives" in o) || !o.directives) return;
        let u;
        if (o.kind === v.SCHEMA_DEFINITION || o.kind === v.SCHEMA_EXTENSION) u = a;
        else if (Ga(o) || Ml(o)) {
          let l = o.name.value;
          u = s[l], u === void 0 && (s[l] = u = /* @__PURE__ */ Object.create(null));
        } else u = /* @__PURE__ */ Object.create(null);
        for (let l of o.directives) {
          let c = l.name.value;
          t[c] && (u[c] ? e.reportError(new Y(`The directive "@${c}" can only be used once at this location.`, { nodes: [u[c], l] })) : u[c] = l);
        }
      } };
    }
    function EN(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { EnumTypeDefinition: i, EnumTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let u = (s = a.values) !== null && s !== void 0 ? s : [], l = r[o];
        for (let c of u) {
          let f = c.name.value, p = n[o];
          Ut(p) && p.getValue(f) ? e.reportError(new Y(`Enum value "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : l[f] ? e.reportError(new Y(`Enum value "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })) : l[f] = c.name;
        }
        return !1;
      }
    }
    function _N(e) {
      let t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
      return { InputObjectTypeDefinition: i, InputObjectTypeExtension: i, InterfaceTypeDefinition: i, InterfaceTypeExtension: i, ObjectTypeDefinition: i, ObjectTypeExtension: i };
      function i(a) {
        var s;
        let o = a.name.value;
        r[o] || (r[o] = /* @__PURE__ */ Object.create(null));
        let u = (s = a.fields) !== null && s !== void 0 ? s : [], l = r[o];
        for (let c of u) {
          let f = c.name.value;
          DN(n[o], f) ? e.reportError(new Y(`Field "${o}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: c.name })) : l[f] ? e.reportError(new Y(`Field "${o}.${f}" can only be defined once.`, { nodes: [l[f], c.name] })) : l[f] = c.name;
        }
        return !1;
      }
    }
    function DN(e, t) {
      return je(e) || Ge(e) || Ze(e) ? e.getFields()[t] != null : !1;
    }
    function vN(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: () => !1, FragmentDefinition(n) {
        let r = n.name.value;
        return t[r] ? e.reportError(new Y(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })) : t[r] = n.name, !1;
      } };
    }
    function Om(e) {
      let t = [], n = /* @__PURE__ */ Object.create(null);
      return { ObjectValue: { enter() {
        t.push(n), n = /* @__PURE__ */ Object.create(null);
      }, leave() {
        let r = t.pop();
        r || Wt(), n = r;
      } }, ObjectField(r) {
        let i = r.name.value;
        n[i] ? e.reportError(new Y(`There can be only one input field named "${i}".`, { nodes: [n[i], r.name] })) : n[i] = r.name;
      } };
    }
    function bN(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition(n) {
        let r = n.name;
        return r && (t[r.value] ? e.reportError(new Y(`There can be only one operation named "${r.value}".`, { nodes: [t[r.value], r] })) : t[r.value] = r), !1;
      }, FragmentDefinition: () => !1 };
    }
    function yN(e) {
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
    function NN(e) {
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
    function CN(e) {
      return { OperationDefinition(t) {
        var n;
        let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = jl(r, (a) => a.variable.name.value);
        for (let [a, s] of i) s.length > 1 && e.reportError(new Y(`There can be only one variable named "$${a}".`, { nodes: s.map((o) => o.variable.name) }));
      } };
    }
    function TN(e) {
      let t = {};
      return { OperationDefinition: { enter() {
        t = {};
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      }, ListValue(n) {
        let r = Al(e.getParentInputType());
        if (!ct(r)) return ei(e, n), !1;
      }, ObjectValue(n) {
        let r = tt(e.getInputType());
        if (!Ze(r)) return ei(e, n), !1;
        let i = zr(n.fields, (a) => a.name.value);
        for (let a of Object.values(r.getFields())) if (!i[a.name] && Qp(a)) {
          let s = J(a.type);
          e.reportError(new Y(`Field "${r.name}.${a.name}" of required type "${s}" was not provided.`, { nodes: n }));
        }
        r.isOneOf && wN(e, n, r, i, t);
      }, ObjectField(n) {
        let r = tt(e.getParentInputType());
        if (!e.getInputType() && Ze(r)) {
          let i = Jr(n.name.value, Object.keys(r.getFields()));
          e.reportError(new Y(`Field "${n.name.value}" is not defined by type "${r.name}".` + Ar(i), { nodes: n }));
        }
      }, NullValue(n) {
        let r = e.getInputType();
        Ue(r) && e.reportError(new Y(`Expected value of type "${J(r)}", found ${gt(n)}.`, { nodes: n }));
      }, EnumValue: (n) => ei(e, n), IntValue: (n) => ei(e, n), FloatValue: (n) => ei(e, n), StringValue: (n) => ei(e, n), BooleanValue: (n) => ei(e, n) };
    }
    function ei(e, t) {
      let n = e.getInputType();
      if (!n) return;
      let r = tt(n);
      if (!$i(r)) {
        let i = J(n);
        e.reportError(new Y(`Expected value of type "${i}", found ${gt(t)}.`, { nodes: t }));
        return;
      }
      try {
        if (r.parseLiteral(t, void 0) === void 0) {
          let i = J(n);
          e.reportError(new Y(`Expected value of type "${i}", found ${gt(t)}.`, { nodes: t }));
        }
      } catch (i) {
        let a = J(n);
        i instanceof Y ? e.reportError(i) : e.reportError(new Y(`Expected value of type "${a}", found ${gt(t)}; ` + i.message, { nodes: t, originalError: i }));
      }
    }
    function wN(e, t, n, r, i) {
      var a;
      let s = Object.keys(r);
      if (s.length !== 1) {
        e.reportError(new Y(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] }));
        return;
      }
      let o = (a = r[s[0]]) === null || a === void 0 ? void 0 : a.value, u = !o || o.kind === v.NULL, l = o?.kind === v.VARIABLE;
      if (u) {
        e.reportError(new Y(`Field "${n.name}.${s[0]}" must be non-null.`, { nodes: [t] }));
        return;
      }
      if (l) {
        let c = o.name.value;
        i[c].type.kind !== v.NON_NULL_TYPE && e.reportError(new Y(`Variable "${c}" must be non-nullable to be used for OneOf Input Object "${n.name}".`, { nodes: [t] }));
      }
    }
    function AN(e) {
      return { VariableDefinition(t) {
        let n = nn(e.getSchema(), t.type);
        if (n !== void 0 && !en(n)) {
          let r = t.variable.name.value, i = gt(t.type);
          e.reportError(new Y(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: t.type }));
        }
      } };
    }
    function SN(e) {
      let t = /* @__PURE__ */ Object.create(null);
      return { OperationDefinition: { enter() {
        t = /* @__PURE__ */ Object.create(null);
      }, leave(n) {
        let r = e.getRecursiveVariableUsages(n);
        for (let { node: i, type: a, defaultValue: s, parentType: o } of r) {
          let u = i.name.value, l = t[u];
          if (l && a) {
            let c = e.getSchema(), f = nn(c, l.type);
            if (f && !LN(c, f, l.defaultValue, a, s)) {
              let p = J(f), m = J(a);
              e.reportError(new Y(`Variable "$${u}" of type "${p}" used in position expecting type "${m}".`, { nodes: [l, i] }));
            }
            Ze(o) && o.isOneOf && wl(f) && e.reportError(new Y(`Variable "$${u}" is of type "${f}" but must be non-nullable to be used for OneOf Input Object "${o}".`, { nodes: [l, i] }));
          }
        }
      } }, VariableDefinition(n) {
        t[n.variable.name.value] = n;
      } };
    }
    function LN(e, t, n, r, i) {
      if (Ue(r) && !Ue(t)) {
        if (!(n != null && n.kind !== v.NULL) && i === void 0) return !1;
        let a = r.ofType;
        return ji(e, t, a);
      }
      return ji(e, t, r);
    }
    var FN = Object.freeze([jy]), xm = Object.freeze([Em, bN, Vy, pN, vm, xy, AN, lN, Iy, vN, Py, ym, tN, qy, CN, Gy, Hy, Dm, Rm, ky, Im, TN, oN, SN, Yy, Om, ...FN]), IN = Object.freeze([$y, yN, NN, EN, _N, mN, gN, vm, Dm, Rm, rN, _m, Im, Om, Sm]), km = class {
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
    }, RN = class extends km {
      constructor(e, t, n) {
        super(e, n), this._schema = t;
      }
      get [Symbol.toStringTag]() {
        return "SDLValidationContext";
      }
      getSchema() {
        return this._schema;
      }
    }, ON = class extends km {
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
          let n = [], r = new mm(this._schema);
          Sr(e, gm(r, { VariableDefinition: () => !1, Variable(i) {
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
    function Mm(e, t, n = xm, r, i = new mm(e)) {
      var a;
      let s = (a = r?.maxErrors) !== null && a !== void 0 ? a : 100;
      t || Re(!1, "Must provide document."), fy(e);
      let o = Object.freeze({}), u = [], l = new ON(e, t, i, (f) => {
        if (u.length >= s) throw u.push(new Y("Too many validation errors, error limit reached. Validation aborted.")), o;
        u.push(f);
      }), c = Kp(n.map((f) => f(l)));
      try {
        Sr(t, gm(i, c));
      } catch (f) {
        if (f !== o) throw f;
      }
      return u;
    }
    function xN(e, t, n = IN) {
      let r = [], i = new RN(e, t, (s) => {
        r.push(s);
      }), a = n.map((s) => s(i));
      return Sr(e, Kp(a)), r;
    }
    function kN(e) {
      let t = xN(e);
      if (t.length !== 0) throw new Error(t.map((n) => n.message).join(`

`));
    }
    function MN(e) {
      return { Field(t) {
        let n = e.getFieldDef(), r = n?.deprecationReason;
        if (n && r != null) {
          let i = e.getParentType();
          i != null || Wt(), e.reportError(new Y(`The field ${i.name}.${n.name} is deprecated. ${r}`, { nodes: t }));
        }
      }, Argument(t) {
        let n = e.getArgument(), r = n?.deprecationReason;
        if (n && r != null) {
          let i = e.getDirective();
          if (i != null) e.reportError(new Y(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t }));
          else {
            let a = e.getParentType(), s = e.getFieldDef();
            a != null && s != null || Wt(), e.reportError(new Y(`Field "${a.name}.${s.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t }));
          }
        }
      }, ObjectField(t) {
        let n = tt(e.getParentInputType());
        if (Ze(n)) {
          let r = n.getFields()[t.name.value], i = r?.deprecationReason;
          i != null && e.reportError(new Y(`The input field ${n.name}.${r.name} is deprecated. ${i}`, { nodes: t }));
        }
      }, EnumValue(t) {
        let n = e.getEnumValue(), r = n?.deprecationReason;
        if (n && r != null) {
          let i = tt(e.getInputType());
          i != null || Wt(), e.reportError(new Y(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, { nodes: t }));
        }
      } };
    }
    function Um(e, t) {
      rr(e) && rr(e.__schema) || Re(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${J(e)}.`);
      let n = e.__schema, r = Xr(n.types, (L) => L.name, (L) => p(L));
      for (let L of [...ho, ...po]) r[L.name] && (r[L.name] = L);
      let i = n.queryType ? c(n.queryType) : null, a = n.mutationType ? c(n.mutationType) : null, s = n.subscriptionType ? c(n.subscriptionType) : null, o = n.directives ? n.directives.map(B) : [];
      return new Ol({ description: n.description, query: i, mutation: a, subscription: s, types: Object.values(r), directives: o, assumeValid: t?.assumeValid });
      function u(L) {
        if (L.kind === qe.LIST) {
          let j = L.ofType;
          if (!j) throw new Error("Decorated type deeper than introspection query.");
          return new At(u(j));
        }
        if (L.kind === qe.NON_NULL) {
          let j = L.ofType;
          if (!j) throw new Error("Decorated type deeper than introspection query.");
          let $ = u(j);
          return new Ce(ny($));
        }
        return l(L);
      }
      function l(L) {
        let j = L.name;
        if (!j) throw new Error(`Unknown type reference: ${J(L)}.`);
        let $ = r[j];
        if (!$) throw new Error(`Invalid or incomplete schema, unknown type: ${j}. Ensure that a full introspection query is used in order to build a client schema.`);
        return $;
      }
      function c(L) {
        return Zb(l(L));
      }
      function f(L) {
        return ey(l(L));
      }
      function p(L) {
        if (L != null && L.name != null && L.kind != null) switch (L.kind) {
          case qe.SCALAR:
            return m(L);
          case qe.OBJECT:
            return _(L);
          case qe.INTERFACE:
            return w(L);
          case qe.UNION:
            return S(L);
          case qe.ENUM:
            return F(L);
          case qe.INPUT_OBJECT:
            return C(L);
        }
        let j = J(L);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${j}.`);
      }
      function m(L) {
        return new ar({ name: L.name, description: L.description, specifiedByURL: L.specifiedByURL });
      }
      function g(L) {
        if (L.interfaces === null && L.kind === qe.INTERFACE) return [];
        if (!L.interfaces) {
          let j = J(L);
          throw new Error(`Introspection result missing interfaces: ${j}.`);
        }
        return L.interfaces.map(f);
      }
      function _(L) {
        return new fn({ name: L.name, description: L.description, interfaces: () => g(L), fields: () => x(L) });
      }
      function w(L) {
        return new Lr({ name: L.name, description: L.description, interfaces: () => g(L), fields: () => x(L) });
      }
      function S(L) {
        if (!L.possibleTypes) {
          let j = J(L);
          throw new Error(`Introspection result missing possibleTypes: ${j}.`);
        }
        return new lo({ name: L.name, description: L.description, types: () => L.possibleTypes.map(c) });
      }
      function F(L) {
        if (!L.enumValues) {
          let j = J(L);
          throw new Error(`Introspection result missing enumValues: ${j}.`);
        }
        return new Fr({ name: L.name, description: L.description, values: Xr(L.enumValues, (j) => j.name, (j) => ({ description: j.description, deprecationReason: j.deprecationReason })) });
      }
      function C(L) {
        if (!L.inputFields) {
          let j = J(L);
          throw new Error(`Introspection result missing inputFields: ${j}.`);
        }
        return new Pa({ name: L.name, description: L.description, fields: () => H(L.inputFields), isOneOf: L.isOneOf });
      }
      function x(L) {
        if (!L.fields) throw new Error(`Introspection result missing fields: ${J(L)}.`);
        return Xr(L.fields, (j) => j.name, U);
      }
      function U(L) {
        let j = u(L.type);
        if (!Qr(j)) {
          let $ = J(j);
          throw new Error(`Introspection must provide output type for fields, but received: ${$}.`);
        }
        if (!L.args) {
          let $ = J(L);
          throw new Error(`Introspection result missing field args: ${$}.`);
        }
        return { description: L.description, deprecationReason: L.deprecationReason, type: j, args: H(L.args) };
      }
      function H(L) {
        return Xr(L, (j) => j.name, O);
      }
      function O(L) {
        let j = u(L.type);
        if (!en(j)) {
          let xe = J(j);
          throw new Error(`Introspection must provide input type for arguments, but received: ${xe}.`);
        }
        let $ = L.defaultValue != null ? Ir(jb(L.defaultValue), j) : void 0;
        return { description: L.description, type: j, defaultValue: $, deprecationReason: L.deprecationReason };
      }
      function B(L) {
        if (!L.args) {
          let j = J(L);
          throw new Error(`Introspection result missing directive args: ${j}.`);
        }
        if (!L.locations) {
          let j = J(L);
          throw new Error(`Introspection result missing directive locations: ${j}.`);
        }
        return new sr({ name: L.name, description: L.description, isRepeatable: L.isRepeatable, locations: L.locations.slice(), args: H(L.args) });
      }
    }
    function UN(e, t, n) {
      var r, i, a, s;
      let o = [], u = /* @__PURE__ */ Object.create(null), l = [], c, f = [];
      for (let y of t.definitions) if (y.kind === v.SCHEMA_DEFINITION) c = y;
      else if (y.kind === v.SCHEMA_EXTENSION) f.push(y);
      else if (Ga(y)) o.push(y);
      else if (Ml(y)) {
        let ee = y.name.value, X = u[ee];
        u[ee] = X ? X.concat([y]) : [y];
      } else y.kind === v.DIRECTIVE_DEFINITION && l.push(y);
      if (Object.keys(u).length === 0 && o.length === 0 && l.length === 0 && f.length === 0 && c == null) return e;
      let p = /* @__PURE__ */ Object.create(null);
      for (let y of e.types) p[y.name] = F(y);
      for (let y of o) {
        var m;
        let ee = y.name.value;
        p[ee] = (m = Pm[ee]) !== null && m !== void 0 ? m : ke(y);
      }
      let g = { query: e.query && w(e.query), mutation: e.mutation && w(e.mutation), subscription: e.subscription && w(e.subscription), ...c && $([c]), ...$(f) };
      return { description: (r = c) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value, ...g, types: Object.values(p), directives: [...e.directives.map(S), ...l.map(G)], extensions: /* @__PURE__ */ Object.create(null), astNode: (a = c) !== null && a !== void 0 ? a : e.astNode, extensionASTNodes: e.extensionASTNodes.concat(f), assumeValid: (s = n?.assumeValid) !== null && s !== void 0 ? s : !1 };
      function _(y) {
        return ct(y) ? new At(_(y.ofType)) : Ue(y) ? new Ce(_(y.ofType)) : w(y);
      }
      function w(y) {
        return p[y.name];
      }
      function S(y) {
        let ee = y.toConfig();
        return new sr({ ...ee, args: ir(ee.args, j) });
      }
      function F(y) {
        if (fm(y) || oy(y)) return y;
        if (hn(y)) return U(y);
        if (je(y)) return H(y);
        if (Ge(y)) return O(y);
        if (Zt(y)) return B(y);
        if (Ut(y)) return x(y);
        if (Ze(y)) return C(y);
        Wt(!1, "Unexpected type: " + J(y));
      }
      function C(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[X.name]) !== null && ee !== void 0 ? ee : [];
        return new Pa({ ...X, fields: () => ({ ...ir(X.fields, (M) => ({ ...M, type: _(M.type) })), ...oe(re) }), extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function x(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[y.name]) !== null && ee !== void 0 ? ee : [];
        return new Fr({ ...X, values: { ...X.values, ...de(re) }, extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function U(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[X.name]) !== null && ee !== void 0 ? ee : [], M = X.specifiedByURL;
        for (let ue of re) {
          var P;
          M = (P = Bm(ue)) !== null && P !== void 0 ? P : M;
        }
        return new ar({ ...X, specifiedByURL: M, extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function H(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[X.name]) !== null && ee !== void 0 ? ee : [];
        return new fn({ ...X, interfaces: () => [...y.getInterfaces().map(w), ...ce(re)], fields: () => ({ ...ir(X.fields, L), ...Z(re) }), extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function O(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[X.name]) !== null && ee !== void 0 ? ee : [];
        return new Lr({ ...X, interfaces: () => [...y.getInterfaces().map(w), ...ce(re)], fields: () => ({ ...ir(X.fields, L), ...Z(re) }), extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function B(y) {
        var ee;
        let X = y.toConfig(), re = (ee = u[X.name]) !== null && ee !== void 0 ? ee : [];
        return new lo({ ...X, types: () => [...y.getTypes().map(w), ...Ie(re)], extensionASTNodes: X.extensionASTNodes.concat(re) });
      }
      function L(y) {
        return { ...y, type: _(y.type), args: y.args && ir(y.args, j) };
      }
      function j(y) {
        return { ...y, type: _(y.type) };
      }
      function $(y) {
        let ee = {};
        for (let re of y) {
          var X;
          let M = (X = re.operationTypes) !== null && X !== void 0 ? X : [];
          for (let P of M) ee[P.operation] = xe(P.type);
        }
        return ee;
      }
      function xe(y) {
        var ee;
        let X = y.name.value, re = (ee = Pm[X]) !== null && ee !== void 0 ? ee : p[X];
        if (re === void 0) throw new Error(`Unknown type: "${X}".`);
        return re;
      }
      function Q(y) {
        return y.kind === v.LIST_TYPE ? new At(Q(y.type)) : y.kind === v.NON_NULL_TYPE ? new Ce(Q(y.type)) : xe(y);
      }
      function G(y) {
        var ee;
        return new sr({ name: y.name.value, description: (ee = y.description) === null || ee === void 0 ? void 0 : ee.value, locations: y.locations.map(({ value: X }) => X), isRepeatable: y.repeatable, args: ne(y.arguments), astNode: y });
      }
      function Z(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var X;
          let P = (X = M.fields) !== null && X !== void 0 ? X : [];
          for (let ue of P) {
            var re;
            ee[ue.name.value] = { type: Q(ue.type), description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, args: ne(ue.arguments), deprecationReason: _o(ue), astNode: ue };
          }
        }
        return ee;
      }
      function ne(y) {
        let ee = y ?? [], X = /* @__PURE__ */ Object.create(null);
        for (let M of ee) {
          var re;
          let P = Q(M.type);
          X[M.name.value] = { type: P, description: (re = M.description) === null || re === void 0 ? void 0 : re.value, defaultValue: Ir(M.defaultValue, P), deprecationReason: _o(M), astNode: M };
        }
        return X;
      }
      function oe(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var X;
          let P = (X = M.fields) !== null && X !== void 0 ? X : [];
          for (let ue of P) {
            var re;
            let _e = Q(ue.type);
            ee[ue.name.value] = { type: _e, description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, defaultValue: Ir(ue.defaultValue, _e), deprecationReason: _o(ue), astNode: ue };
          }
        }
        return ee;
      }
      function de(y) {
        let ee = /* @__PURE__ */ Object.create(null);
        for (let M of y) {
          var X;
          let P = (X = M.values) !== null && X !== void 0 ? X : [];
          for (let ue of P) {
            var re;
            ee[ue.name.value] = { description: (re = ue.description) === null || re === void 0 ? void 0 : re.value, deprecationReason: _o(ue), astNode: ue };
          }
        }
        return ee;
      }
      function ce(y) {
        return y.flatMap((ee) => {
          var X, re;
          return (X = (re = ee.interfaces) === null || re === void 0 ? void 0 : re.map(xe)) !== null && X !== void 0 ? X : [];
        });
      }
      function Ie(y) {
        return y.flatMap((ee) => {
          var X, re;
          return (X = (re = ee.types) === null || re === void 0 ? void 0 : re.map(xe)) !== null && X !== void 0 ? X : [];
        });
      }
      function ke(y) {
        var ee;
        let X = y.name.value, re = (ee = u[X]) !== null && ee !== void 0 ? ee : [];
        switch (y.kind) {
          case v.OBJECT_TYPE_DEFINITION: {
            var M;
            let Se = [y, ...re];
            return new fn({ name: X, description: (M = y.description) === null || M === void 0 ? void 0 : M.value, interfaces: () => ce(Se), fields: () => Z(Se), astNode: y, extensionASTNodes: re });
          }
          case v.INTERFACE_TYPE_DEFINITION: {
            var P;
            let Se = [y, ...re];
            return new Lr({ name: X, description: (P = y.description) === null || P === void 0 ? void 0 : P.value, interfaces: () => ce(Se), fields: () => Z(Se), astNode: y, extensionASTNodes: re });
          }
          case v.ENUM_TYPE_DEFINITION: {
            var ue;
            let Se = [y, ...re];
            return new Fr({ name: X, description: (ue = y.description) === null || ue === void 0 ? void 0 : ue.value, values: de(Se), astNode: y, extensionASTNodes: re });
          }
          case v.UNION_TYPE_DEFINITION: {
            var _e;
            let Se = [y, ...re];
            return new lo({ name: X, description: (_e = y.description) === null || _e === void 0 ? void 0 : _e.value, types: () => Ie(Se), astNode: y, extensionASTNodes: re });
          }
          case v.SCALAR_TYPE_DEFINITION: {
            var Xe;
            return new ar({ name: X, description: (Xe = y.description) === null || Xe === void 0 ? void 0 : Xe.value, specifiedByURL: Bm(y), astNode: y, extensionASTNodes: re });
          }
          case v.INPUT_OBJECT_TYPE_DEFINITION: {
            var Ct;
            let Se = [y, ...re];
            return new Pa({ name: X, description: (Ct = y.description) === null || Ct === void 0 ? void 0 : Ct.value, fields: () => oe(Se), astNode: y, extensionASTNodes: re, isOneOf: PN(y) });
          }
        }
      }
    }
    var Pm = zr([...ho, ...po], (e) => e.name);
    function _o(e) {
      return Ha(Il, e)?.reason;
    }
    function Bm(e) {
      return Ha(am, e)?.url;
    }
    function PN(e) {
      return !!Ha(sm, e);
    }
    function Vm(e, t) {
      e != null && e.kind === v.DOCUMENT || Re(!1, "Must provide valid Document AST."), t?.assumeValid !== !0 && t?.assumeValidSDL !== !0 && kN(e);
      let n = UN({ description: void 0, types: [], directives: [], extensions: /* @__PURE__ */ Object.create(null), extensionASTNodes: [], assumeValid: !1 }, e, t);
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
      let r = [...n.directives, ...qi.filter((i) => n.directives.every((a) => a.name !== i.name))];
      return new Ol({ ...n, directives: r });
    }
    function ti(e) {
      let t = Object.keys(e), n = t.length, r = new Array(n);
      for (let i = 0; i < n; ++i) r[i] = e[t[i]];
      return r;
    }
    function Ye(e, t) {
      return BN(t, $m(e.string));
    }
    function BN(e, t) {
      if (!t || t.trim() === "" || t.trim() === ":" || t.trim() === "{") return ql(e, (r) => !r.isDeprecated);
      let n = e.map((r) => ({ proximity: VN($m(r.label), t), entry: r }));
      return ql(ql(n, (r) => r.proximity <= 2), (r) => !r.entry.isDeprecated).sort((r, i) => (r.entry.isDeprecated ? 1 : 0) - (i.entry.isDeprecated ? 1 : 0) || r.proximity - i.proximity || r.entry.label.length - i.entry.label.length).map((r) => r.entry);
    }
    function ql(e, t) {
      let n = e.filter(t);
      return n.length === 0 ? e : n;
    }
    function $m(e) {
      return e.toLowerCase().replaceAll(/\W/g, "");
    }
    function VN(e, t) {
      let n = $N(t, e);
      return e.length > t.length && (n -= e.length - t.length - 1, n += e.indexOf(t) === 0 ? 0 : 0.5), n;
    }
    function $N(e, t) {
      let n, r, i = [], a = e.length, s = t.length;
      for (n = 0; n <= a; n++) i[n] = [n];
      for (r = 1; r <= s; r++) i[0][r] = r;
      for (n = 1; n <= a; n++) for (r = 1; r <= s; r++) {
        let o = e[n - 1] === t[r - 1] ? 0 : 1;
        i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + o), n > 1 && r > 1 && e[n - 1] === t[r - 2] && e[n - 2] === t[r - 1] && (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + o));
      }
      return i[a][s];
    }
    var KN = (e) => ` {
   $1
}`, Do = (e, t, n) => {
      if (!t) return n ?? e;
      let r = tt(t);
      return je(r) || Ze(r) || ct(r) || Pn(r) ? e + KN() : n ?? e;
    }, Km = (e, t, n) => {
      if (ct(t)) {
        let r = tt(t.ofType);
        return e + `[${Do("", r, "$1")}]`;
      }
      return Do(e, t, n);
    }, jN = (e) => {
      let t = e.args.filter((n) => n.type.toString().endsWith("!"));
      if (t.length) return e.name + `(${t.map((n, r) => `${n.name}: $${r + 1}`)}) ${Do("", e.type, `
`)}`;
    }, jm;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(jm || (jm = {}));
    var Gl;
    (function(e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(Gl || (Gl = {}));
    var qm;
    (function(e) {
      e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(qm || (qm = {}));
    var vo;
    (function(e) {
      e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(vo || (vo = {}));
    var An;
    (function(e) {
      function t(r, i) {
        return r === Number.MAX_VALUE && (r = vo.MAX_VALUE), i === Number.MAX_VALUE && (i = vo.MAX_VALUE), { line: r, character: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.uinteger(i.line) && k.uinteger(i.character);
      }
      e.is = n;
    })(An || (An = {}));
    var rt;
    (function(e) {
      function t(r, i, a, s) {
        if (k.uinteger(r) && k.uinteger(i) && k.uinteger(a) && k.uinteger(s)) return { start: An.create(r, i), end: An.create(a, s) };
        if (An.is(r) && An.is(i)) return { start: r, end: i };
        throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${a}, ${s}]`);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && An.is(i.start) && An.is(i.end);
      }
      e.is = n;
    })(rt || (rt = {}));
    var bo;
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
    })(bo || (bo = {}));
    var Gm;
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
    })(Gm || (Gm = {}));
    var Hl;
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
    })(Hl || (Hl = {}));
    var Hm;
    (function(e) {
      function t(r, i) {
        return { range: r, color: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && rt.is(i.range) && Hl.is(i.color);
      }
      e.is = n;
    })(Hm || (Hm = {}));
    var Wm;
    (function(e) {
      function t(r, i, a) {
        return { label: r, textEdit: i, additionalTextEdits: a };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && k.string(i.label) && (k.undefined(i.textEdit) || Hi.is(i)) && (k.undefined(i.additionalTextEdits) || k.typedArray(i.additionalTextEdits, Hi.is));
      }
      e.is = n;
    })(Wm || (Wm = {}));
    var Ym;
    (function(e) {
      e.Comment = "comment", e.Imports = "imports", e.Region = "region";
    })(Ym || (Ym = {}));
    var zm;
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
    })(zm || (zm = {}));
    var Wl;
    (function(e) {
      function t(r, i) {
        return { location: r, message: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && bo.is(i.location) && k.string(i.message);
      }
      e.is = n;
    })(Wl || (Wl = {}));
    var Xm;
    (function(e) {
      e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
    })(Xm || (Xm = {}));
    var Jm;
    (function(e) {
      e.Unnecessary = 1, e.Deprecated = 2;
    })(Jm || (Jm = {}));
    var Qm;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && k.string(r.href);
      }
      e.is = t;
    })(Qm || (Qm = {}));
    var yo;
    (function(e) {
      function t(r, i, a, s, o, u) {
        let l = { range: r, message: i };
        return k.defined(a) && (l.severity = a), k.defined(s) && (l.code = s), k.defined(o) && (l.source = o), k.defined(u) && (l.relatedInformation = u), l;
      }
      e.create = t;
      function n(r) {
        var i;
        let a = r;
        return k.defined(a) && rt.is(a.range) && k.string(a.message) && (k.number(a.severity) || k.undefined(a.severity)) && (k.integer(a.code) || k.string(a.code) || k.undefined(a.code)) && (k.undefined(a.codeDescription) || k.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (k.string(a.source) || k.undefined(a.source)) && (k.undefined(a.relatedInformation) || k.typedArray(a.relatedInformation, Wl.is));
      }
      e.is = n;
    })(yo || (yo = {}));
    var Gi;
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
    })(Gi || (Gi = {}));
    var Hi;
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
    })(Hi || (Hi = {}));
    var Yl;
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
    })(Yl || (Yl = {}));
    var Wi;
    (function(e) {
      function t(n) {
        let r = n;
        return k.string(r);
      }
      e.is = t;
    })(Wi || (Wi = {}));
    var Zm;
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
        return Hi.is(s) && (Yl.is(s.annotationId) || Wi.is(s.annotationId));
      }
      e.is = i;
    })(Zm || (Zm = {}));
    var zl;
    (function(e) {
      function t(r, i) {
        return { textDocument: r, edits: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && ec.is(i.textDocument) && Array.isArray(i.edits);
      }
      e.is = n;
    })(zl || (zl = {}));
    var Xl;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "create", uri: r };
        return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "create" && k.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Wi.is(i.annotationId));
      }
      e.is = n;
    })(Xl || (Xl = {}));
    var Jl;
    (function(e) {
      function t(r, i, a, s) {
        let o = { kind: "rename", oldUri: r, newUri: i };
        return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (o.options = a), s !== void 0 && (o.annotationId = s), o;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "rename" && k.string(i.oldUri) && k.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || k.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || k.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Wi.is(i.annotationId));
      }
      e.is = n;
    })(Jl || (Jl = {}));
    var Ql;
    (function(e) {
      function t(r, i, a) {
        let s = { kind: "delete", uri: r };
        return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && i.kind === "delete" && k.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || k.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || k.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Wi.is(i.annotationId));
      }
      e.is = n;
    })(Ql || (Ql = {}));
    var Zl;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => k.string(i.kind) ? Xl.is(i) || Jl.is(i) || Ql.is(i) : zl.is(i)));
      }
      e.is = t;
    })(Zl || (Zl = {}));
    var eg;
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
    })(eg || (eg = {}));
    var tg;
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
    })(tg || (tg = {}));
    var ec;
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
    })(ec || (ec = {}));
    var ng;
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
    })(ng || (ng = {}));
    var tc;
    (function(e) {
      e.PlainText = "plaintext", e.Markdown = "markdown";
      function t(n) {
        let r = n;
        return r === e.PlainText || r === e.Markdown;
      }
      e.is = t;
    })(tc || (tc = {}));
    var Wa;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(n) && tc.is(r.kind) && k.string(r.value);
      }
      e.is = t;
    })(Wa || (Wa = {}));
    var rg;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(rg || (rg = {}));
    var Yi;
    (function(e) {
      e.PlainText = 1, e.Snippet = 2;
    })(Yi || (Yi = {}));
    var ig;
    (function(e) {
      e.Deprecated = 1;
    })(ig || (ig = {}));
    var ag;
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
    })(ag || (ag = {}));
    var ni;
    (function(e) {
      e.asIs = 1, e.adjustIndentation = 2;
    })(ni || (ni = {}));
    var sg;
    (function(e) {
      function t(n) {
        let r = n;
        return r && (k.string(r.detail) || r.detail === void 0) && (k.string(r.description) || r.description === void 0);
      }
      e.is = t;
    })(sg || (sg = {}));
    var og;
    (function(e) {
      function t(n) {
        return { label: n };
      }
      e.create = t;
    })(og || (og = {}));
    var ug;
    (function(e) {
      function t(n, r) {
        return { items: n || [], isIncomplete: !!r };
      }
      e.create = t;
    })(ug || (ug = {}));
    var No;
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
    })(No || (No = {}));
    var lg;
    (function(e) {
      function t(n) {
        let r = n;
        return !!r && k.objectLiteral(r) && (Wa.is(r.contents) || No.is(r.contents) || k.typedArray(r.contents, No.is)) && (n.range === void 0 || rt.is(n.range));
      }
      e.is = t;
    })(lg || (lg = {}));
    var cg;
    (function(e) {
      function t(n, r) {
        return r ? { label: n, documentation: r } : { label: n };
      }
      e.create = t;
    })(cg || (cg = {}));
    var dg;
    (function(e) {
      function t(n, r, ...i) {
        let a = { label: n };
        return k.defined(r) && (a.documentation = r), k.defined(i) ? a.parameters = i : a.parameters = [], a;
      }
      e.create = t;
    })(dg || (dg = {}));
    var hg;
    (function(e) {
      e.Text = 1, e.Read = 2, e.Write = 3;
    })(hg || (hg = {}));
    var fg;
    (function(e) {
      function t(n, r) {
        let i = { range: n };
        return k.number(r) && (i.kind = r), i;
      }
      e.create = t;
    })(fg || (fg = {}));
    var pg;
    (function(e) {
      e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
    })(pg || (pg = {}));
    var mg;
    (function(e) {
      e.Deprecated = 1;
    })(mg || (mg = {}));
    var gg;
    (function(e) {
      function t(n, r, i, a, s) {
        let o = { name: n, kind: r, location: { uri: a, range: i } };
        return s && (o.containerName = s), o;
      }
      e.create = t;
    })(gg || (gg = {}));
    var Eg;
    (function(e) {
      function t(n, r, i, a) {
        return a !== void 0 ? { name: n, kind: r, location: { uri: i, range: a } } : { name: n, kind: r, location: { uri: i } };
      }
      e.create = t;
    })(Eg || (Eg = {}));
    var _g;
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
    })(_g || (_g = {}));
    var Dg;
    (function(e) {
      e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
    })(Dg || (Dg = {}));
    var Co;
    (function(e) {
      e.Invoked = 1, e.Automatic = 2;
    })(Co || (Co = {}));
    var vg;
    (function(e) {
      function t(r, i, a) {
        let s = { diagnostics: r };
        return i != null && (s.only = i), a != null && (s.triggerKind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && k.typedArray(i.diagnostics, yo.is) && (i.only === void 0 || k.typedArray(i.only, k.string)) && (i.triggerKind === void 0 || i.triggerKind === Co.Invoked || i.triggerKind === Co.Automatic);
      }
      e.is = n;
    })(vg || (vg = {}));
    var bg;
    (function(e) {
      function t(r, i, a) {
        let s = { title: r }, o = !0;
        return typeof i == "string" ? (o = !1, s.kind = i) : Gi.is(i) ? s.command = i : s.edit = i, o && a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && k.string(i.title) && (i.diagnostics === void 0 || k.typedArray(i.diagnostics, yo.is)) && (i.kind === void 0 || k.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Gi.is(i.command)) && (i.isPreferred === void 0 || k.boolean(i.isPreferred)) && (i.edit === void 0 || Zl.is(i.edit));
      }
      e.is = n;
    })(bg || (bg = {}));
    var yg;
    (function(e) {
      function t(r, i) {
        let a = { range: r };
        return k.defined(i) && (a.data = i), a;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.defined(i) && rt.is(i.range) && (k.undefined(i.command) || Gi.is(i.command));
      }
      e.is = n;
    })(yg || (yg = {}));
    var Ng;
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
    })(Ng || (Ng = {}));
    var Cg;
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
    })(Cg || (Cg = {}));
    var Tg;
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
    })(Tg || (Tg = {}));
    var wg;
    (function(e) {
      e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
    })(wg || (wg = {}));
    var Ag;
    (function(e) {
      e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
    })(Ag || (Ag = {}));
    var Sg;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
      }
      e.is = t;
    })(Sg || (Sg = {}));
    var Lg;
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
    })(Lg || (Lg = {}));
    var Fg;
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
    })(Fg || (Fg = {}));
    var Ig;
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
    })(Ig || (Ig = {}));
    var Rg;
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
    })(Rg || (Rg = {}));
    var nc;
    (function(e) {
      e.Type = 1, e.Parameter = 2;
      function t(n) {
        return n === 1 || n === 2;
      }
      e.is = t;
    })(nc || (nc = {}));
    var rc;
    (function(e) {
      function t(r) {
        return { value: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && (i.tooltip === void 0 || k.string(i.tooltip) || Wa.is(i.tooltip)) && (i.location === void 0 || bo.is(i.location)) && (i.command === void 0 || Gi.is(i.command));
      }
      e.is = n;
    })(rc || (rc = {}));
    var Og;
    (function(e) {
      function t(r, i, a) {
        let s = { position: r, label: i };
        return a !== void 0 && (s.kind = a), s;
      }
      e.create = t;
      function n(r) {
        let i = r;
        return k.objectLiteral(i) && An.is(i.position) && (k.string(i.label) || k.typedArray(i.label, rc.is)) && (i.kind === void 0 || nc.is(i.kind)) && i.textEdits === void 0 || k.typedArray(i.textEdits, Hi.is) && (i.tooltip === void 0 || k.string(i.tooltip) || Wa.is(i.tooltip)) && (i.paddingLeft === void 0 || k.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || k.boolean(i.paddingRight));
      }
      e.is = n;
    })(Og || (Og = {}));
    var xg;
    (function(e) {
      function t(n) {
        return { kind: "snippet", value: n };
      }
      e.createSnippet = t;
    })(xg || (xg = {}));
    var kg;
    (function(e) {
      function t(n, r, i, a) {
        return { insertText: n, filterText: r, range: i, command: a };
      }
      e.create = t;
    })(kg || (kg = {}));
    var Mg;
    (function(e) {
      function t(n) {
        return { items: n };
      }
      e.create = t;
    })(Mg || (Mg = {}));
    var Ug;
    (function(e) {
      e.Invoked = 0, e.Automatic = 1;
    })(Ug || (Ug = {}));
    var Pg;
    (function(e) {
      function t(n, r) {
        return { range: n, text: r };
      }
      e.create = t;
    })(Pg || (Pg = {}));
    var Bg;
    (function(e) {
      function t(n, r) {
        return { triggerKind: n, selectedCompletionInfo: r };
      }
      e.create = t;
    })(Bg || (Bg = {}));
    var Vg;
    (function(e) {
      function t(n) {
        let r = n;
        return k.objectLiteral(r) && Gl.is(r.uri) && k.string(r.name);
      }
      e.is = t;
    })(Vg || (Vg = {}));
    var $g;
    (function(e) {
      function t(a, s, o, u) {
        return new qN(a, s, o, u);
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
    })($g || ($g = {}));
    var qN = class {
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
        if (r === 0) return An.create(0, e);
        for (; n < r; ) {
          let a = Math.floor((n + r) / 2);
          t[a] > e ? r = a : n = a + 1;
        }
        let i = n - 1;
        return An.create(i, e - t[i]);
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
    var ic = class {
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
          return typeof t == "string" ? (a = new RegExp(t, r ? "i" : "g").test(this._sourceText.slice(this._pos, this._pos + t.length)), i = t) : t instanceof RegExp && (a = this._sourceText.slice(this._pos).match(t), i = a?.[0]), a != null && (typeof t == "string" || a instanceof Array && this._sourceText.startsWith(a[0], this._pos)) ? (n && (this._start = this._pos, i && i.length && (this._pos += i.length)), a) : !1;
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
    function GN(e, t) {
      let n = e.match;
      return e.match = (r) => {
        let i = !1;
        return n && (i = n(r)), i && t.every((a) => a.match && !a.match(r));
      }, e;
    }
    function ac(e, t) {
      return { style: t, match: (n) => n.kind === e };
    }
    function be(e, t) {
      return { style: t || "punctuation", match: (n) => n.kind === "Punctuation" && n.value === e };
    }
    var HN = (e) => e === " " || e === "	" || e === "," || e === `
` || e === "\r" || e === "\uFEFF" || e === " ", WN = { Name: /^[_A-Za-z][_0-9A-Za-z]*/, Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/, Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/, String: /^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/, Comment: /^#.*/ }, YN = { Document: [Oe("Definition")], Definition(e) {
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
    }, ShortQuery: ["SelectionSet"], Query: [St("query"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], Mutation: [St("mutation"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], Subscription: [St("subscription"), it(He("def")), it("VariableDefinitions"), Oe("Directive"), "SelectionSet"], VariableDefinitions: [be("("), Oe("VariableDefinition"), be(")")], VariableDefinition: ["Variable", be(":"), "Type", it("DefaultValue")], Variable: [be("$", "variable"), He("variable")], DefaultValue: [be("="), "Value"], SelectionSet: [be("{"), Oe("Selection"), be("}")], Selection(e, t) {
      return e.value === "..." ? t.match(/[\s\u00a0,]*(on\b|@|{)/, !1) ? "InlineFragment" : "FragmentSpread" : t.match(/[\s\u00a0,]*:/, !1) ? "AliasedField" : "Field";
    }, AliasedField: [He("property"), be(":"), He("qualifier"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Field: [He("property"), it("Arguments"), Oe("Directive"), it("SelectionSet")], Arguments: [be("("), Oe("Argument"), be(")")], Argument: [He("attribute"), be(":"), "Value"], FragmentSpread: [be("..."), He("def"), Oe("Directive")], InlineFragment: [be("..."), it("TypeCondition"), Oe("Directive"), "SelectionSet"], FragmentDefinition: [St("fragment"), it(GN(He("def"), [St("on")])), "TypeCondition", Oe("Directive"), "SelectionSet"], TypeCondition: [St("on"), "NamedType"], Value(e) {
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
    }, NumberValue: [ac("Number", "number")], StringValue: [{ style: "string", match: (e) => e.kind === "String", update(e, t) {
      t.value.startsWith('"""') && (e.inBlockstring = !t.value.slice(3).endsWith('"""'));
    } }], BooleanValue: [ac("Name", "builtin")], NullValue: [ac("Name", "keyword")], EnumValue: [He("string-2")], ListValue: [be("["), Oe("Value"), be("]")], ObjectValue: [be("{"), Oe("ObjectField"), be("}")], ObjectField: [He("attribute"), be(":"), "Value"], Type(e) {
      return e.value === "[" ? "ListType" : "NonNullType";
    }, ListType: [be("["), "Type", be("]"), it(be("!"))], NonNullType: ["NamedType", it(be("!"))], NamedType: [zN("atom")], Directive: [be("@", "meta"), He("meta"), it("Arguments")], DirectiveDef: [St("directive"), be("@", "meta"), He("meta"), it("ArgumentsDef"), St("on"), Oe("DirectiveLocation", be("|"))], InterfaceDef: [St("interface"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], Implements: [St("implements"), Oe("NamedType", be("&"))], DirectiveLocation: [He("string-2")], SchemaDef: [St("schema"), Oe("Directive"), be("{"), Oe("OperationTypeDef"), be("}")], OperationTypeDef: [He("keyword"), be(":"), He("atom")], ScalarDef: [St("scalar"), He("atom"), Oe("Directive")], ObjectTypeDef: [St("type"), He("atom"), it("Implements"), Oe("Directive"), be("{"), Oe("FieldDef"), be("}")], FieldDef: [He("property"), it("ArgumentsDef"), be(":"), "Type", Oe("Directive")], ArgumentsDef: [be("("), Oe("InputValueDef"), be(")")], InputValueDef: [He("attribute"), be(":"), "Type", it("DefaultValue"), Oe("Directive")], UnionDef: [St("union"), He("atom"), Oe("Directive"), be("="), Oe("UnionMember", be("|"))], UnionMember: ["NamedType"], EnumDef: [St("enum"), He("atom"), Oe("Directive"), be("{"), Oe("EnumValueDef"), be("}")], EnumValueDef: [He("string-2"), Oe("Directive")], InputDef: [St("input"), He("atom"), Oe("Directive"), be("{"), Oe("InputValueDef"), be("}")], ExtendDef: [St("extend"), "ExtensionDefinition"], ExtensionDefinition(e) {
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
    function St(e) {
      return { style: "keyword", match: (t) => t.kind === "Name" && t.value === e };
    }
    function He(e) {
      return { style: e, match: (t) => t.kind === "Name", update(t, n) {
        t.name = n.value;
      } };
    }
    function zN(e) {
      return { style: e, match: (t) => t.kind === "Name", update(t, n) {
        var r;
        !((r = t.prevState) === null || r === void 0) && r.prevState && (t.name = n.value, t.prevState.prevState.type = n.value);
      } };
    }
    function Kg(e = { eatWhitespace: (t) => t.eatWhile(HN), lexRules: WN, parseRules: YN, editorConfig: {} }) {
      return { startState() {
        let t = { level: 0, step: 0, name: null, kind: null, type: null, rule: null, needsSeparator: !1, prevState: null };
        return Ya(e.parseRules, t, v.DOCUMENT), t;
      }, token(t, n) {
        return XN(t, n, e);
      } };
    }
    function XN(e, t, n) {
      var r;
      if (t.inBlockstring) return e.match(/.*"""/) ? (t.inBlockstring = !1, "string") : (e.skipToEnd(), "string");
      let { lexRules: i, parseRules: a, eatWhitespace: s, editorConfig: o } = n;
      if (t.rule && t.rule.length === 0 ? oc(t) : t.needsAdvance && (t.needsAdvance = !1, uc(t, !0)), e.sol()) {
        let c = o?.tabSize || 2;
        t.indentLevel = Math.floor(e.indentation() / c);
      }
      if (s(e)) return "ws";
      let u = QN(i, e);
      if (!u) return e.match(/\S+/) || e.match(/\s/), Ya(sc, t, "Invalid"), "invalidchar";
      if (u.kind === "Comment") return Ya(sc, t, "Comment"), "comment";
      let l = jg({}, t);
      if (u.kind === "Punctuation") {
        if (/^[{([]/.test(u.value)) t.indentLevel !== void 0 && (t.levels = (t.levels || []).concat(t.indentLevel + 1));
        else if (/^[})\]]/.test(u.value)) {
          let c = t.levels = (t.levels || []).slice(0, -1);
          t.indentLevel && c.length > 0 && c.at(-1) < t.indentLevel && (t.indentLevel = c.at(-1));
        }
      }
      for (; t.rule; ) {
        let c = typeof t.rule == "function" ? t.step === 0 ? t.rule(u, e) : null : t.rule[t.step];
        if (t.needsSeparator && (c = c?.separator), c) {
          if (c.ofRule && (c = c.ofRule), typeof c == "string") {
            Ya(a, t, c);
            continue;
          }
          if (!((r = c.match) === null || r === void 0) && r.call(c, u)) return c.update && c.update(t, u), u.kind === "Punctuation" ? uc(t, !0) : t.needsAdvance = !0, c.style;
        }
        JN(t);
      }
      return jg(t, l), Ya(sc, t, "Invalid"), "invalidchar";
    }
    function jg(e, t) {
      let n = Object.keys(t);
      for (let r = 0; r < n.length; r++) e[n[r]] = t[n[r]];
      return e;
    }
    var sc = { Invalid: [], Comment: [] };
    function Ya(e, t, n) {
      if (!e[n]) throw new TypeError("Unknown rule: " + n);
      t.prevState = Object.assign({}, t), t.kind = n, t.name = null, t.type = null, t.rule = e[n], t.step = 0, t.needsSeparator = !1;
    }
    function oc(e) {
      e.prevState && (e.kind = e.prevState.kind, e.name = e.prevState.name, e.type = e.prevState.type, e.rule = e.prevState.rule, e.step = e.prevState.step, e.needsSeparator = e.prevState.needsSeparator, e.prevState = e.prevState.prevState);
    }
    function uc(e, t) {
      var n;
      if (qg(e) && e.rule) {
        let r = e.rule[e.step];
        if (r.separator) {
          let { separator: i } = r;
          if (e.needsSeparator = !e.needsSeparator, !e.needsSeparator && i.ofRule) return;
        }
        if (t) return;
      }
      for (e.needsSeparator = !1, e.step++; e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length); ) oc(e), e.rule && (qg(e) ? !((n = e.rule) === null || n === void 0) && n[e.step].separator && (e.needsSeparator = !e.needsSeparator) : (e.needsSeparator = !1, e.step++));
    }
    function qg(e) {
      let t = Array.isArray(e.rule) && typeof e.rule[e.step] != "string" && e.rule[e.step];
      return t && t.isList;
    }
    function JN(e) {
      for (; e.rule && !(Array.isArray(e.rule) && e.rule[e.step].ofRule); ) oc(e);
      e.rule && uc(e, !1);
    }
    function QN(e, t) {
      let n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        let i = t.match(e[n[r]]);
        if (i && i instanceof Array) return { kind: n[r], value: i[0] };
      }
    }
    function To(e, t) {
      let n = e.split(`
`), r = Kg(), i = r.startState(), a = "", s = new ic("");
      for (let o = 0; o < n.length; o++) {
        for (s = new ic(n[o]); !s.eol() && (a = r.token(s, i), t(s, i, a, o) !== "BREAK"); ) ;
        t(s, i, a, o), i.kind || (i = r.startState());
      }
      return { start: s.getStartOfToken(), end: s.getCurrentPosition(), string: s.current(), state: i, style: a };
    }
    var Rr;
    (function(e) {
      e.TYPE_SYSTEM = "TYPE_SYSTEM", e.EXECUTABLE = "EXECUTABLE", e.UNKNOWN = "UNKNOWN";
    })(Rr || (Rr = {}));
    var ZN = [v.SCHEMA_DEFINITION, v.OPERATION_TYPE_DEFINITION, v.SCALAR_TYPE_DEFINITION, v.OBJECT_TYPE_DEFINITION, v.INTERFACE_TYPE_DEFINITION, v.UNION_TYPE_DEFINITION, v.ENUM_TYPE_DEFINITION, v.INPUT_OBJECT_TYPE_DEFINITION, v.DIRECTIVE_DEFINITION, v.SCHEMA_EXTENSION, v.SCALAR_TYPE_EXTENSION, v.OBJECT_TYPE_EXTENSION, v.INTERFACE_TYPE_EXTENSION, v.UNION_TYPE_EXTENSION, v.ENUM_TYPE_EXTENSION, v.INPUT_OBJECT_TYPE_EXTENSION], eC = (e) => {
      let t = Rr.UNKNOWN;
      if (e) try {
        Sr(io(e), { enter(n) {
          if (n.kind === "Document") {
            t = Rr.EXECUTABLE;
            return;
          }
          return ZN.includes(n.kind) ? (t = Rr.TYPE_SYSTEM, Vi) : !1;
        } });
      } catch {
        return t;
      }
      return t;
    };
    function tC(e, t) {
      return t?.endsWith(".graphqls") ? Rr.TYPE_SYSTEM : eC(e);
    }
    function nC(e, t, n = 0) {
      let r = null, i = null, a = null, s = To(e, (o, u, l, c) => {
        if (!(c !== t.line || o.getCurrentPosition() + n < t.character + 1)) return r = l, i = Object.assign({}, u), a = o.current(), "BREAK";
      });
      return { start: s.start, end: s.end, string: a || s.string, state: i || s.state, style: r || s.style };
    }
    function Gg(e, t, n, r, i) {
      let a = nC(e, t, 1);
      if (!a) return null;
      let s = a.state.kind === "Invalid" ? a.state.prevState : a.state;
      if (!s) return null;
      let o = iC(n, a.state), u = i?.mode || tC(e, i?.uri);
      return { token: a, state: s, typeInfo: o, mode: u };
    }
    function Hg(e, t, n) {
      return n === $a.name && e.getQueryType() === t ? $a : n === Ka.name && e.getQueryType() === t ? Ka : n === ja.name && tn(t) ? ja : "getFields" in t ? t.getFields()[n] : null;
    }
    function Wg(e, t) {
      let n = [], r = e;
      for (; r?.kind; ) n.push(r), r = r.prevState;
      for (let i = n.length - 1; i >= 0; i--) t(n[i]);
    }
    function rC(e) {
      let t;
      return Wg(e, (n) => {
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
    function iC(e, t) {
      let n, r, i, a, s, o, u, l, c, f, p;
      return Wg(t, (m) => {
        var g;
        switch (m.kind) {
          case z.QUERY:
          case "ShortQuery":
            f = e.getQueryType();
            break;
          case z.MUTATION:
            f = e.getMutationType();
            break;
          case z.SUBSCRIPTION:
            f = e.getSubscriptionType();
            break;
          case z.INLINE_FRAGMENT:
          case z.FRAGMENT_DEFINITION:
            m.type && (f = e.getType(m.type));
            break;
          case z.FIELD:
          case z.ALIASED_FIELD: {
            !f || !m.name ? s = null : (s = c ? Hg(e, c, m.name) : null, f = s ? s.type : null);
            break;
          }
          case z.SELECTION_SET:
            c = tt(f);
            break;
          case z.DIRECTIVE:
            i = m.name ? e.getDirective(m.name) : null;
            break;
          case z.INTERFACE_DEF:
            m.name && (u = null, p = new Lr({ name: m.name, interfaces: [], fields: {} }));
            break;
          case z.OBJECT_TYPE_DEF:
            m.name && (p = null, u = new fn({ name: m.name, interfaces: [], fields: {} }));
            break;
          case z.ARGUMENTS: {
            if (m.prevState) switch (m.prevState.kind) {
              case z.FIELD:
                r = s && s.args;
                break;
              case z.DIRECTIVE:
                r = i && i.args;
                break;
              case z.ALIASED_FIELD: {
                let C = (g = m.prevState) === null || g === void 0 ? void 0 : g.name;
                if (!C) {
                  r = null;
                  break;
                }
                let x = c ? Hg(e, c, C) : null;
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
          case z.ARGUMENT:
            if (r) {
              for (let C = 0; C < r.length; C++) if (r[C].name === m.name) {
                n = r[C];
                break;
              }
            }
            o = n?.type;
            break;
          case z.VARIABLE_DEFINITION:
          case z.VARIABLE:
            f = o;
            break;
          case z.ENUM_VALUE:
            let _ = tt(o);
            a = _ instanceof Fr ? _.getValues().find((C) => C.value === m.name) : null;
            break;
          case z.LIST_VALUE:
            let w = Al(o);
            o = w instanceof At ? w.ofType : null;
            break;
          case z.OBJECT_VALUE:
            let S = tt(o);
            l = S instanceof Pa ? S.getFields() : null;
            break;
          case z.OBJECT_FIELD:
            let F = m.name && l ? l[m.name] : null;
            o = F?.type, s = F, f = s ? s.type : null;
            break;
          case z.NAMED_TYPE:
            m.name && (f = e.getType(m.name));
            break;
        }
      }), { argDef: n, argDefs: r, directiveDef: i, enumValue: a, fieldDef: s, inputType: o, objectFieldDefs: l, parentType: c, type: f, interfaceDef: p, objectTypeDef: u };
    }
    var aC = { ALIASED_FIELD: "AliasedField", ARGUMENTS: "Arguments", SHORT_QUERY: "ShortQuery", QUERY: "Query", MUTATION: "Mutation", SUBSCRIPTION: "Subscription", TYPE_CONDITION: "TypeCondition", INVALID: "Invalid", COMMENT: "Comment", SCHEMA_DEF: "SchemaDef", SCALAR_DEF: "ScalarDef", OBJECT_TYPE_DEF: "ObjectTypeDef", OBJECT_VALUE: "ObjectValue", LIST_VALUE: "ListValue", INTERFACE_DEF: "InterfaceDef", UNION_DEF: "UnionDef", ENUM_DEF: "EnumDef", ENUM_VALUE: "EnumValue", FIELD_DEF: "FieldDef", INPUT_DEF: "InputDef", INPUT_VALUE_DEF: "InputValueDef", ARGUMENTS_DEF: "ArgumentsDef", EXTEND_DEF: "ExtendDef", EXTENSION_DEFINITION: "ExtensionDefinition", DIRECTIVE_DEF: "DirectiveDef", IMPLEMENTS: "Implements", VARIABLE_DEFINITIONS: "VariableDefinitions", TYPE: "Type", VARIABLE: "Variable" }, z = Object.assign(Object.assign({}, v), aC), we;
    (function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
    })(we || (we = {}));
    var lc = { command: "editor.action.triggerSuggest", title: "Suggestions" }, sC = (e) => {
      let t = [];
      if (e) try {
        Sr(io(e), { FragmentDefinition(n) {
          t.push(n);
        } });
      } catch {
        return [];
      }
      return t;
    };
    function oC(e, t, n, r, i, a) {
      var s;
      let o = Object.assign(Object.assign({}, a), { schema: e }), u = Gg(t, n, e, r, a);
      if (!u) return [];
      let { state: l, typeInfo: c, mode: f, token: p } = u, { kind: m, step: g, prevState: _ } = l;
      if (m === z.DOCUMENT) return f === Rr.TYPE_SYSTEM ? uC(p) : f === Rr.EXECUTABLE ? lC(p) : cC(p);
      if (m === z.EXTEND_DEF) return dC(p);
      if (((s = _?.prevState) === null || s === void 0 ? void 0 : s.kind) === z.EXTENSION_DEFINITION && l.name) return Ye(p, []);
      if (_?.kind === v.SCALAR_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(hn).map((S) => ({ label: S.name, kind: we.Function })));
      if (_?.kind === v.OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((S) => je(S) && !S.name.startsWith("__")).map((S) => ({ label: S.name, kind: we.Function })));
      if (_?.kind === v.INTERFACE_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ge).map((S) => ({ label: S.name, kind: we.Function })));
      if (_?.kind === v.UNION_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Zt).map((S) => ({ label: S.name, kind: we.Function })));
      if (_?.kind === v.ENUM_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter((S) => Ut(S) && !S.name.startsWith("__")).map((S) => ({ label: S.name, kind: we.Function })));
      if (_?.kind === v.INPUT_OBJECT_TYPE_EXTENSION) return Ye(p, Object.values(e.getTypeMap()).filter(Ze).map((S) => ({ label: S.name, kind: we.Function })));
      if (m === z.IMPLEMENTS || m === z.NAMED_TYPE && _?.kind === z.IMPLEMENTS) return pC(p, l, e, t, c);
      if (m === z.SELECTION_SET || m === z.FIELD || m === z.ALIASED_FIELD) return hC(p, c, o);
      if (m === z.ARGUMENTS || m === z.ARGUMENT && g === 0) {
        let { argDefs: S } = c;
        if (S) return Ye(p, S.map((F) => {
          var C;
          return { label: F.name, insertText: Km(F.name + ": ", F.type), insertTextMode: ni.adjustIndentation, insertTextFormat: Yi.Snippet, command: lc, labelDetails: { detail: " " + String(F.type) }, documentation: (C = F.description) !== null && C !== void 0 ? C : void 0, kind: we.Variable, type: F.type };
        }));
      }
      if ((m === z.OBJECT_VALUE || m === z.OBJECT_FIELD && g === 0) && c.objectFieldDefs) {
        let S = ti(c.objectFieldDefs), F = m === z.OBJECT_VALUE ? we.Value : we.Field;
        return Ye(p, S.map((C) => {
          var x;
          return { label: C.name, detail: String(C.type), documentation: (x = C?.description) !== null && x !== void 0 ? x : void 0, kind: F, type: C.type, insertText: Km(C.name + ": ", C.type), insertTextMode: ni.adjustIndentation, insertTextFormat: Yi.Snippet, command: lc };
        }));
      }
      if (m === z.ENUM_VALUE || m === z.LIST_VALUE && g === 1 || m === z.OBJECT_FIELD && g === 2 || m === z.ARGUMENT && g === 2) return fC(p, c, t, e);
      if (m === z.VARIABLE && g === 1) {
        let S = tt(c.inputType), F = zg(t, e, p);
        return Ye(p, F.filter((C) => C.detail === S?.name));
      }
      if (m === z.TYPE_CONDITION && g === 1 || m === z.NAMED_TYPE && _ != null && _.kind === z.TYPE_CONDITION) return mC(p, c, e);
      if (m === z.FRAGMENT_SPREAD && g === 1) return gC(p, c, e, t, Array.isArray(i) ? i : sC(i));
      let w = Xg(l);
      return w.kind === z.FIELD_DEF ? Ye(p, Object.values(e.getTypeMap()).filter((S) => Qr(S) && !S.name.startsWith("__")).map((S) => ({ label: S.name, kind: we.Function, insertText: a?.fillLeafsOnComplete ? S.name + `
` : S.name, insertTextMode: ni.adjustIndentation }))) : w.kind === z.INPUT_VALUE_DEF && g === 2 ? Ye(p, Object.values(e.getTypeMap()).filter((S) => en(S) && !S.name.startsWith("__")).map((S) => ({ label: S.name, kind: we.Function, insertText: a?.fillLeafsOnComplete ? S.name + `
$1` : S.name, insertTextMode: ni.adjustIndentation, insertTextFormat: Yi.Snippet }))) : m === z.VARIABLE_DEFINITION && g === 2 || m === z.LIST_TYPE && g === 1 || m === z.NAMED_TYPE && _ && (_.kind === z.VARIABLE_DEFINITION || _.kind === z.LIST_TYPE || _.kind === z.NON_NULL_TYPE) ? DC(p, e) : m === z.DIRECTIVE ? vC(p, l, e) : m === z.DIRECTIVE_DEF ? bC(p, l, e) : [];
    }
    var cc = [{ label: "type", kind: we.Function }, { label: "interface", kind: we.Function }, { label: "union", kind: we.Function }, { label: "input", kind: we.Function }, { label: "scalar", kind: we.Function }, { label: "schema", kind: we.Function }], Yg = [{ label: "query", kind: we.Function }, { label: "mutation", kind: we.Function }, { label: "subscription", kind: we.Function }, { label: "fragment", kind: we.Function }, { label: "{", kind: we.Constructor }];
    function uC(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...cc]);
    }
    function lC(e) {
      return Ye(e, Yg);
    }
    function cC(e) {
      return Ye(e, [{ label: "extend", kind: we.Function }, ...Yg, ...cc]);
    }
    function dC(e) {
      return Ye(e, cc);
    }
    function hC(e, t, n) {
      var r;
      if (t.parentType) {
        let { parentType: i } = t, a = [];
        return "getFields" in i && (a = ti(i.getFields())), tn(i) && a.push(ja), i === ((r = n?.schema) === null || r === void 0 ? void 0 : r.getQueryType()) && a.push($a, Ka), Ye(e, a.map((s, o) => {
          var u;
          let l = { sortText: String(o) + s.name, label: s.name, detail: String(s.type), documentation: (u = s.description) !== null && u !== void 0 ? u : void 0, deprecated: !!s.deprecationReason, isDeprecated: !!s.deprecationReason, deprecationReason: s.deprecationReason, kind: we.Field, labelDetails: { detail: " " + s.type.toString() }, type: s.type };
          return n?.fillLeafsOnComplete && (l.insertText = jN(s), l.insertText || (l.insertText = Do(s.name, s.type, s.name + (e.state.needsAdvance ? "" : `
`))), l.insertText && (l.insertTextFormat = Yi.Snippet, l.insertTextMode = ni.adjustIndentation, l.command = lc)), l;
        }));
      }
      return [];
    }
    function fC(e, t, n, r) {
      let i = tt(t.inputType), a = zg(n, r, e).filter((s) => s.detail === i?.name);
      if (i instanceof Fr) {
        let s = i.getValues();
        return Ye(e, s.map((o) => {
          var u;
          return { label: o.name, detail: String(i), documentation: (u = o.description) !== null && u !== void 0 ? u : void 0, deprecated: !!o.deprecationReason, isDeprecated: !!o.deprecationReason, deprecationReason: o.deprecationReason, kind: we.EnumMember, type: i };
        }).concat(a));
      }
      return i === bt ? Ye(e, a.concat([{ label: "true", detail: String(bt), documentation: "Not false.", kind: we.Variable, type: bt }, { label: "false", detail: String(bt), documentation: "Not true.", kind: we.Variable, type: bt }])) : a;
    }
    function pC(e, t, n, r, i) {
      if (t.needsSeparator) return [];
      let a = n.getTypeMap(), s = ti(a).filter(Ge), o = s.map(({ name: p }) => p), u = /* @__PURE__ */ new Set();
      To(r, (p, m) => {
        var g, _, w, S, F;
        if (m.name && (m.kind === z.INTERFACE_DEF && !o.includes(m.name) && u.add(m.name), m.kind === z.NAMED_TYPE && ((g = m.prevState) === null || g === void 0 ? void 0 : g.kind) === z.IMPLEMENTS)) {
          if (i.interfaceDef) {
            if (!((_ = i.interfaceDef) === null || _ === void 0) && _.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (w = i.interfaceDef) === null || w === void 0 ? void 0 : w.toConfig();
            i.interfaceDef = new Lr(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Lr({ name: m.name, fields: {} })] }));
          } else if (i.objectTypeDef) {
            if (!((S = i.objectTypeDef) === null || S === void 0) && S.getInterfaces().find(({ name: U }) => U === m.name)) return;
            let C = n.getType(m.name), x = (F = i.objectTypeDef) === null || F === void 0 ? void 0 : F.toConfig();
            i.objectTypeDef = new fn(Object.assign(Object.assign({}, x), { interfaces: [...x.interfaces, C || new Lr({ name: m.name, fields: {} })] }));
          }
        }
      });
      let l = i.interfaceDef || i.objectTypeDef, c = (l?.getInterfaces() || []).map(({ name: p }) => p), f = s.concat([...u].map((p) => ({ name: p }))).filter(({ name: p }) => p !== l?.name && !c.includes(p));
      return Ye(e, f.map((p) => {
        let m = { label: p.name, kind: we.Interface, type: p };
        return p?.description && (m.documentation = p.description), m;
      }));
    }
    function mC(e, t, n, r) {
      let i;
      if (t.parentType) if (Pn(t.parentType)) {
        let a = ty(t.parentType), s = n.getPossibleTypes(a), o = /* @__PURE__ */ Object.create(null);
        for (let u of s) for (let l of u.getInterfaces()) o[l.name] = l;
        i = s.concat(ti(o));
      } else i = [t.parentType];
      else {
        let a = n.getTypeMap();
        i = ti(a).filter((s) => tn(s) && !s.name.startsWith("__"));
      }
      return Ye(e, i.map((a) => {
        let s = tt(a);
        return { label: String(a), documentation: s?.description || "", kind: we.Field };
      }));
    }
    function gC(e, t, n, r, i) {
      if (!r) return [];
      let a = n.getTypeMap(), s = rC(e.state), o = _C(r);
      i && i.length > 0 && o.push(...i);
      let u = o.filter((l) => a[l.typeCondition.name.value] && !(s && s.kind === z.FRAGMENT_DEFINITION && s.name === l.name.value) && tn(t.parentType) && tn(a[l.typeCondition.name.value]) && Sl(n, t.parentType, a[l.typeCondition.name.value]));
      return Ye(e, u.map((l) => ({ label: l.name.value, detail: String(a[l.typeCondition.name.value]), documentation: `fragment ${l.name.value} on ${l.typeCondition.name.value}`, labelDetails: { detail: `fragment ${l.name.value} on ${l.typeCondition.name.value}` }, kind: we.Field, type: a[l.typeCondition.name.value] })));
    }
    var EC = (e, t) => {
      var n, r, i, a, s, o, u, l, c, f;
      if (((n = e.prevState) === null || n === void 0 ? void 0 : n.kind) === t) return e.prevState;
      if (((i = (r = e.prevState) === null || r === void 0 ? void 0 : r.prevState) === null || i === void 0 ? void 0 : i.kind) === t) return e.prevState.prevState;
      if (((o = (s = (a = e.prevState) === null || a === void 0 ? void 0 : a.prevState) === null || s === void 0 ? void 0 : s.prevState) === null || o === void 0 ? void 0 : o.kind) === t) return e.prevState.prevState.prevState;
      if (((f = (c = (l = (u = e.prevState) === null || u === void 0 ? void 0 : u.prevState) === null || l === void 0 ? void 0 : l.prevState) === null || c === void 0 ? void 0 : c.prevState) === null || f === void 0 ? void 0 : f.kind) === t) return e.prevState.prevState.prevState.prevState;
    };
    function zg(e, t, n) {
      let r = null, i, a = /* @__PURE__ */ Object.create({});
      return To(e, (s, o) => {
        var u;
        if (o?.kind === z.VARIABLE && o.name && (r = o.name), o?.kind === z.NAMED_TYPE && r) {
          let l = EC(o, z.TYPE);
          l?.type && (i = t.getType(l?.type));
        }
        if (r && i && !a[r]) {
          let l = n.string === "$" || ((u = n?.state) === null || u === void 0 ? void 0 : u.kind) === "Variable" ? r : "$" + r;
          a[r] = { detail: i.toString(), insertText: l, label: "$" + r, rawInsert: l, type: i, kind: we.Variable }, r = null, i = null;
        }
      }), ti(a);
    }
    function _C(e) {
      let t = [];
      return To(e, (n, r) => {
        r.kind === z.FRAGMENT_DEFINITION && r.name && r.type && t.push({ kind: z.FRAGMENT_DEFINITION, name: { kind: v.NAME, value: r.name }, selectionSet: { kind: z.SELECTION_SET, selections: [] }, typeCondition: { kind: z.NAMED_TYPE, name: { kind: v.NAME, value: r.type } } });
      }), t;
    }
    function DC(e, t, n) {
      let r = t.getTypeMap(), i = ti(r).filter(en);
      return Ye(e, i.map((a) => ({ label: a.name, documentation: a?.description || "", kind: we.Variable })));
    }
    function vC(e, t, n, r) {
      var i;
      if (!((i = t.prevState) === null || i === void 0) && i.kind) {
        let a = n.getDirectives().filter((s) => yC(t.prevState, s));
        return Ye(e, a.map((s) => ({ label: s.name, documentation: s?.description || "", kind: we.Function })));
      }
      return [];
    }
    function bC(e, t, n, r) {
      let i = n.getDirectives().find((a) => a.name === t.name);
      return Ye(e, i?.args.map((a) => ({ label: a.name, documentation: a.description || "", kind: we.Field })) || []);
    }
    function yC(e, t) {
      if (!e?.kind) return !1;
      let { kind: n, prevState: r } = e, { locations: i } = t;
      switch (n) {
        case z.QUERY:
          return i.includes(se.QUERY);
        case z.MUTATION:
          return i.includes(se.MUTATION);
        case z.SUBSCRIPTION:
          return i.includes(se.SUBSCRIPTION);
        case z.FIELD:
        case z.ALIASED_FIELD:
          return i.includes(se.FIELD);
        case z.FRAGMENT_DEFINITION:
          return i.includes(se.FRAGMENT_DEFINITION);
        case z.FRAGMENT_SPREAD:
          return i.includes(se.FRAGMENT_SPREAD);
        case z.INLINE_FRAGMENT:
          return i.includes(se.INLINE_FRAGMENT);
        case z.SCHEMA_DEF:
          return i.includes(se.SCHEMA);
        case z.SCALAR_DEF:
          return i.includes(se.SCALAR);
        case z.OBJECT_TYPE_DEF:
          return i.includes(se.OBJECT);
        case z.FIELD_DEF:
          return i.includes(se.FIELD_DEFINITION);
        case z.INTERFACE_DEF:
          return i.includes(se.INTERFACE);
        case z.UNION_DEF:
          return i.includes(se.UNION);
        case z.ENUM_DEF:
          return i.includes(se.ENUM);
        case z.ENUM_VALUE:
          return i.includes(se.ENUM_VALUE);
        case z.INPUT_DEF:
          return i.includes(se.INPUT_OBJECT);
        case z.INPUT_VALUE_DEF:
          switch (r?.kind) {
            case z.ARGUMENTS_DEF:
              return i.includes(se.ARGUMENT_DEFINITION);
            case z.INPUT_DEF:
              return i.includes(se.INPUT_FIELD_DEFINITION);
          }
      }
      return !1;
    }
    function Xg(e) {
      return e.prevState && e.kind && [z.NAMED_TYPE, z.LIST_TYPE, z.TYPE, z.NON_NULL_TYPE].includes(e.kind) ? Xg(e.prevState) : e;
    }
    xo(K0());
    function Pt(e, t) {
      e.push(t);
    }
    function dc(e, t) {
      Ue(t) ? (dc(e, t.ofType), Pt(e, "!")) : ct(t) ? (Pt(e, "["), dc(e, t.ofType), Pt(e, "]")) : Pt(e, t.name);
    }
    function wo(e, t, n) {
      let r = [], i = "type" in e ? e.type : e;
      return "type" in e && e.description && (Pt(r, e.description), Pt(r, `

`)), Pt(r, NC(i, t)), n ? (Pt(r, `
`), Pt(r, n)) : !hn(i) && "description" in i && i.description ? (Pt(r, `
`), Pt(r, i.description)) : "ofType" in i && !hn(i.ofType) && "description" in i.ofType && i.ofType.description && (Pt(r, `
`), Pt(r, i.ofType.description)), r.join("");
    }
    function NC(e, t) {
      let n = [];
      return t && Pt(n, "```graphql\n"), dc(n, e), t && Pt(n, "\n```"), n.join("");
    }
    var CC = { Int: { type: "integer" }, String: { type: "string" }, Float: { type: "number" }, ID: { type: "string" }, Boolean: { type: "boolean" }, DateTime: { type: "string" } }, TC = class {
      constructor() {
        this.set = /* @__PURE__ */ new Set();
      }
      mark(e) {
        return this.set.has(e) ? !1 : (this.set.add(e), !0);
      }
    };
    function hc(e, t) {
      var n, r;
      let i = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null), s = "type" in e ? e.type : e, o = Ue(s) ? s.ofType : s, u = Ue(s);
      if (hn(o)) !((n = t?.scalarSchemas) === null || n === void 0) && n[o.name] ? i = JSON.parse(JSON.stringify(t.scalarSchemas[o.name])) : i.type = ["string", "number", "boolean", "integer"], u || (Array.isArray(i.type) ? i.type.push("null") : i.type ? i.type = [i.type, "null"] : i.enum ? i.enum.push(null) : i.oneOf ? i.oneOf.push({ type: "null" }) : i = { oneOf: [i, { type: "null" }] });
      else if (Ut(o)) i.enum = o.getValues().map((c) => c.name), u || i.enum.push(null);
      else if (ct(o)) {
        u ? i.type = "array" : i.type = ["array", "null"];
        let { definition: c, definitions: f } = hc(o.ofType, t);
        if (i.items = c, f) for (let p of Object.keys(f)) a[p] = f[p];
      } else if (Ze(o) && (u ? i.$ref = `#/definitions/${o.name}` : i.oneOf = [{ $ref: `#/definitions/${o.name}` }, { type: "null" }], !((r = t?.definitionMarker) === null || r === void 0) && r.mark(o.name))) {
        let c = o.getFields(), f = { type: "object", properties: {}, required: [] };
        f.description = wo(o), t?.useMarkdownDescription && (f.markdownDescription = wo(o, !0));
        for (let p of Object.keys(c)) {
          let m = c[p], { required: g, definition: _, definitions: w } = hc(m, t);
          if (f.properties[p] = _, g && f.required.push(p), w) for (let [S, F] of Object.entries(w)) a[S] = F;
        }
        a[o.name] = f;
      }
      "defaultValue" in e && e.defaultValue !== void 0 && (i.default = e.defaultValue);
      let { description: l } = i;
      return i.description = wo(e, !1, l), t?.useMarkdownDescription && (i.markdownDescription = wo(e, !0, l)), { required: u, definition: i, definitions: a };
    }
    function wC(e, t) {
      var n;
      let r = { $schema: "http://json-schema.org/draft-04/schema", type: "object", properties: {}, required: [], additionalProperties: !1 }, i = Object.assign(Object.assign({}, t), { definitionMarker: new TC(), scalarSchemas: Object.assign(Object.assign({}, CC), t?.scalarSchemas) });
      if (e) for (let [a, s] of Object.entries(e)) {
        let { definition: o, required: u, definitions: l } = hc(s, i);
        r.properties[a] = o, u && ((n = r.required) === null || n === void 0 || n.push(a)), l && (r.definitions = Object.assign(Object.assign({}, r?.definitions), l));
      }
      return r;
    }
    var Jg = class {
      constructor(e, t) {
        this.containsPosition = (n) => this.start.line === n.line ? this.start.character <= n.character : this.end.line === n.line ? this.end.character >= n.character : this.start.line <= n.line && this.end.line >= n.line, this.start = e, this.end = t;
      }
      setStart(e, t) {
        this.start = new ri(e, t);
      }
      setEnd(e, t) {
        this.end = new ri(e, t);
      }
    }, ri = class {
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
    function AC(e, t, n, r, i) {
      let a = xm.filter((s) => !(s === ym || s === Em || r));
      return n && Array.prototype.push.apply(a, n), Mm(e, t, a).filter((s) => {
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
    function SC(e, t) {
      let n = /* @__PURE__ */ Object.create(null);
      for (let r of t.definitions) if (r.kind === "OperationDefinition") {
        let { variableDefinitions: i } = r;
        if (i) for (let { variable: a, type: s } of i) {
          let o = nn(e, s);
          o ? n[a.name.value] = o : s.kind === v.NAMED_TYPE && s.name.value === "Float" && (n[a.name.value] = em);
        }
      }
      return n;
    }
    function LC(e, t) {
      let n = t ? SC(t, e) : void 0, r = [];
      return Sr(e, { OperationDefinition(i) {
        r.push(i);
      } }), { variableToType: n, operations: r };
    }
    var Qg = { Error: "Error", Warning: "Warning" }, fc = { [Qg.Error]: 1, [Qg.Warning]: 2 }, Ao = (e, t) => {
      if (!e) throw new Error(t);
    };
    function FC(e, t = null, n, r, i) {
      var a, s;
      let o = null, u = "";
      i && (u = typeof i == "string" ? i : i.reduce((c, f) => c + gt(f) + `

`, ""));
      let l = u ? `${e}

${u}` : e;
      try {
        o = io(l);
      } catch (c) {
        if (c instanceof Y) {
          let f = e0((s = (a = c.locations) === null || a === void 0 ? void 0 : a[0]) !== null && s !== void 0 ? s : { line: 0 }, l);
          return [{ severity: fc.Error, message: c.message, source: "GraphQL: Syntax", range: f }];
        }
        throw c;
      }
      return IC(o, t, n, r);
    }
    function IC(e, t = null, n, r) {
      if (!t) return [];
      let i = AC(t, e, n, r).flatMap((s) => Zg(s, fc.Error, "Validation")), a = Mm(t, e, [MN]).flatMap((s) => Zg(s, fc.Warning, "Deprecation"));
      return i.concat(a);
    }
    function Zg(e, t, n) {
      if (!e.nodes) return [];
      let r = [];
      for (let [i, a] of e.nodes.entries()) {
        let s = a.kind !== "Variable" && "name" in a && a.name !== void 0 ? a.name : "variable" in a && a.variable !== void 0 ? a.variable : a;
        if (s) {
          Ao(e.locations, "GraphQL validation error requires locations.");
          let o = e.locations[i], u = RC(s), l = o.column + (u.end - u.start);
          r.push({ source: `GraphQL: ${n}`, message: e.message, severity: t, range: new Jg(new ri(o.line - 1, o.column - 1), new ri(o.line - 1, l)) });
        }
      }
      return r;
    }
    function e0(e, t) {
      let n = Kg(), r = n.startState(), i = t.split(`
`);
      Ao(i.length >= e.line, "Query text must have more lines than where the error happened");
      let a = null;
      for (let l = 0; l < e.line; l++) for (a = new ic(i[l]); !a.eol() && n.token(a, r) !== "invalidchar"; ) ;
      Ao(a, "Expected Parser stream to be available.");
      let s = e.line - 1, o = a.getStartOfToken(), u = a.getCurrentPosition();
      return new Jg(new ri(s, o), new ri(s, u));
    }
    function RC(e) {
      let t = e.loc;
      return Ao(t, "Expected ASTNode to have a location."), t;
    }
    function OC(e, t, n, r, i) {
      let a = Object.assign(Object.assign({}, i), { schema: e }), s = Gg(t, n, e);
      if (!s) return "";
      let { typeInfo: o, token: u } = s, { kind: l, step: c } = u.state;
      if (l === "Field" && c === 0 && o.fieldDef || l === "AliasedField" && c === 2 && o.fieldDef || l === "ObjectField" && c === 0 && o.fieldDef) {
        let f = [];
        return zi(f, a), xC(f, o, a), Xi(f, a), Ji(f, a, o.fieldDef), f.join("").trim();
      }
      if (l === "Directive" && c === 1 && o.directiveDef) {
        let f = [];
        return zi(f, a), n0(f, o), Xi(f, a), Ji(f, a, o.directiveDef), f.join("").trim();
      }
      if (l === "Variable" && o.type) {
        let f = [];
        return zi(f, a), ii(f, o, a, o.type), Xi(f, a), Ji(f, a, o.type), f.join("").trim();
      }
      if (l === "Argument" && c === 0 && o.argDef) {
        let f = [];
        return zi(f, a), kC(f, o, a), Xi(f, a), Ji(f, a, o.argDef), f.join("").trim();
      }
      if (l === "EnumValue" && o.enumValue && "description" in o.enumValue) {
        let f = [];
        return zi(f, a), MC(f, o, a), Xi(f, a), Ji(f, a, o.enumValue), f.join("").trim();
      }
      if (l === "NamedType" && o.type && "description" in o.type) {
        let f = [];
        return zi(f, a), ii(f, o, a, o.type), Xi(f, a), Ji(f, a, o.type), f.join("").trim();
      }
      return "";
    }
    function zi(e, t) {
      t.useMarkdown && dt(e, "```graphql\n");
    }
    function Xi(e, t) {
      t.useMarkdown && dt(e, "\n```");
    }
    function xC(e, t, n) {
      t0(e, t, n), r0(e, t, n, t.type);
    }
    function t0(e, t, n) {
      if (!t.fieldDef) return;
      let r = t.fieldDef.name;
      r.slice(0, 2) !== "__" && (ii(e, t, n, t.parentType), dt(e, ".")), dt(e, r);
    }
    function n0(e, t, n) {
      if (!t.directiveDef) return;
      let r = "@" + t.directiveDef.name;
      dt(e, r);
    }
    function kC(e, t, n) {
      if (t.directiveDef ? n0(e, t) : t.fieldDef && t0(e, t, n), !t.argDef) return;
      let { name: r } = t.argDef;
      dt(e, "("), dt(e, r), r0(e, t, n, t.inputType), dt(e, ")");
    }
    function r0(e, t, n, r) {
      dt(e, ": "), ii(e, t, n, r);
    }
    function MC(e, t, n) {
      if (!t.enumValue) return;
      let { name: r } = t.enumValue;
      ii(e, t, n, t.inputType), dt(e, "."), dt(e, r);
    }
    function ii(e, t, n, r) {
      r && (r instanceof Ce ? (ii(e, t, n, r.ofType), dt(e, "!")) : r instanceof At ? (dt(e, "["), ii(e, t, n, r.ofType), dt(e, "]")) : dt(e, r.name));
    }
    function Ji(e, t, n) {
      if (!n) return;
      let r = typeof n.description == "string" ? n.description : null;
      r && (dt(e, `

`), dt(e, r)), UC(e, t, n);
    }
    function UC(e, t, n) {
      if (!n) return;
      let r = n.deprecationReason;
      r && (dt(e, `

`), dt(e, "Deprecated: "), dt(e, r));
    }
    function dt(e, t) {
      e.push(t);
    }
    var PC = xo(H0()), i0 = (e, t) => {
      let { schema: n, documentAST: r, introspectionJSON: i, introspectionJSONString: a, buildSchemaOptions: s, documentString: o } = e;
      if (n) return n;
      if (a) {
        let u = JSON.parse(a);
        return Um(u, s);
      }
      if (o && t) {
        let u = t(o);
        return Vm(u, s);
      }
      if (i) return Um(i, s);
      if (r) return Vm(r, s);
      throw new Error("no schema supplied");
    }, BC = /* @__PURE__ */ new Map(), VC = class {
      _parser = io;
      _schemas = [];
      _schemaCache = BC;
      _schemaLoader = i0;
      _parseOptions = void 0;
      _customValidationRules = void 0;
      _externalFragmentDefinitionNodes = null;
      _externalFragmentDefinitionsString = null;
      _completionSettings;
      constructor({ parser: e, schemas: t, parseOptions: n, externalFragmentDefinitions: r, customValidationRules: i, fillLeafsOnComplete: a, completionSettings: s }) {
        this._schemaLoader = i0, t && (this._schemas = t, this._cacheSchemas()), e && (this._parser = e), this._completionSettings = { ...s, fillLeafsOnComplete: s?.fillLeafsOnComplete ?? a }, n && (this._parseOptions = n), i && (this._customValidationRules = i), r && (Array.isArray(r) ? this._externalFragmentDefinitionNodes = r : this._externalFragmentDefinitionsString = r);
      }
      _cacheSchemas() {
        for (let e of this._schemas) this._cacheSchema(e);
      }
      _cacheSchema(e) {
        let t = this._schemaLoader(e, this.parse.bind(this));
        return this._schemaCache.set(e.uri, { ...e, schema: t });
      }
      getSchemaForFile(e) {
        if (!this._schemas?.length) return;
        if (this._schemas.length === 1) return this._schemaCache.get(this._schemas[0].uri);
        let t = this._schemas.find((n) => n.fileMatch ? n.fileMatch.some((r) => (0, PC.default)(r)(e)) : !1);
        if (t)
          return this._schemaCache.get(t.uri) || this._cacheSchema(t).get(t.uri);
      }
      getExternalFragmentDefinitions() {
        if (!this._externalFragmentDefinitionNodes && this._externalFragmentDefinitionsString) {
          let e = [];
          try {
            Sr(this._parser(this._externalFragmentDefinitionsString), { FragmentDefinition(t) {
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
      getCompletion = (e, t, n) => {
        let r = this.getSchemaForFile(e);
        return !t || t.length < 1 || !r?.schema ? [] : oC(r.schema, t, n, void 0, this.getExternalFragmentDefinitions(), { uri: e, ...this._completionSettings });
      };
      getDiagnostics = (e, t, n) => {
        let r = this.getSchemaForFile(e);
        return !t || t.trim().length < 2 || !r?.schema ? [] : FC(t, r.schema, n ?? this._customValidationRules, !1, this.getExternalFragmentDefinitions());
      };
      getHover = (e, t, n, r) => {
        let i = this.getSchemaForFile(e);
        if (i && t?.length > 3) return OC(i.schema, t, n, void 0, { useMarkdown: !0, ...r });
      };
      getVariablesJSONSchema = (e, t, n) => {
        let r = this.getSchemaForFile(e);
        if (r && t.length > 3) try {
          let i = this.parse(t), a = LC(i, r.schema);
          if (a?.variableToType) return wC(a.variableToType, { ...n, scalarSchemas: r.customScalarSchemas });
        } catch {
        }
        return null;
      };
    };
    function a0(e) {
      return { startLineNumber: e.start.line + 1, startColumn: e.start.character + 1, endLineNumber: e.end.line + 1, endColumn: e.end.character + 1 };
    }
    function s0(e) {
      return new ri(e.lineNumber - 1, e.column - 1);
    }
    function $C(e, t) {
      let n = { label: e.label, insertText: e?.insertText, sortText: e.sortText, filterText: e?.filterText, documentation: e.documentation, detail: e.detail, range: t ? a0(t) : void 0, kind: e.kind };
      return e.insertTextFormat && (n.insertTextFormat = e.insertTextFormat), e.insertTextMode && (n.insertTextMode = e.insertTextMode), e.command && (n.command = { ...e.command, id: e.command.command }), e.labelDetails && (n.labelDetails = e.labelDetails), n;
    }
    function KC(e) {
      return { startLineNumber: e.range.start.line + 1, endLineNumber: e.range.end.line + 1, startColumn: e.range.start.character + 1, endColumn: e.range.end.character, message: e.message, severity: 5, code: e.code || void 0 };
    }
    var jC = class {
      _ctx;
      _languageService;
      _formattingOptions;
      constructor(e, t) {
        this._ctx = e, this._languageService = new VC(t.languageConfig), this._formattingOptions = t.formattingOptions;
      }
      async doValidation(e) {
        try {
          let t = this._getTextModel(e)?.getValue();
          return t ? this._languageService.getDiagnostics(e, t).map(KC) : [];
        } catch (t) {
          return console.error(t), [];
        }
      }
      async doComplete(e, t) {
        try {
          let n = this._getTextModel(e)?.getValue();
          if (!n) return [];
          let r = s0(t);
          return this._languageService.getCompletion(e, n, r).map((i) => $C(i));
        } catch (n) {
          return console.error(n), [];
        }
      }
      async doHover(e, t) {
        try {
          let n = this._getTextModel(e)?.getValue();
          if (!n) return null;
          let r = s0(t);
          return { content: this._languageService.getHover(e, n, r), range: a0(e0({ column: r.character, line: r.line }, n)) };
        } catch (n) {
          return console.error(n), null;
        }
      }
      async doGetVariablesJSONSchema(e) {
        let t = this._getTextModel(e), n = t?.getValue();
        if (!t || !n) return null;
        let r = this._languageService.getVariablesJSONSchema(e, n, { useMarkdownDescription: !0 });
        return r ? (r.$id = "monaco://variables-schema.json", r.title = "GraphQL Variables", r) : null;
      }
      async doFormat(e) {
        let t = this._getTextModel(e), n = t?.getValue();
        if (!t || !n) return null;
        let r = await Promise.resolve().then(() => (G2(), yc)), i = await Promise.resolve().then(() => xo(H2()));
        return r.format(n, { parser: "graphql", plugins: [i], ...this._formattingOptions?.prettierConfig });
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
      gb((e, t) => new jC(e, t));
    };
  })()), y0;
}
BT();
