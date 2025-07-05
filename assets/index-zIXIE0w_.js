class V extends Error {
  constructor(e, s) {
    super(e), this.name = "ParseError", this.type = s.type, this.field = s.field, this.value = s.value, this.line = s.line;
  }
}
function A(t) {
}
function et(t) {
  if (typeof t == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: e = A, onError: s = A, onRetry: i = A, onComment: l } = t;
  let r = "", d = !0, u, E = "", f = "";
  function $(a) {
    const h = d ? a.replace(/^\xEF\xBB\xBF/, "") : a, [m, P] = st(`${r}${h}`);
    for (const D of m)
      W(D);
    r = P, d = !1;
  }
  function W(a) {
    if (a === "") {
      U();
      return;
    }
    if (a.startsWith(":")) {
      l && l(a.slice(a.startsWith(": ") ? 2 : 1));
      return;
    }
    const h = a.indexOf(":");
    if (h !== -1) {
      const m = a.slice(0, h), P = a[h + 1] === " " ? 2 : 1, D = a.slice(h + P);
      S(m, D, a);
      return;
    }
    S(a, "", a);
  }
  function S(a, h, m) {
    switch (a) {
      case "event":
        f = h;
        break;
      case "data":
        E = `${E}${h}
`;
        break;
      case "id":
        u = h.includes("\0") ? void 0 : h;
        break;
      case "retry":
        /^\d+$/.test(h) ? i(parseInt(h, 10)) : s(
          new V(`Invalid \`retry\` value: "${h}"`, {
            type: "invalid-retry",
            value: h,
            line: m
          })
        );
        break;
      default:
        s(
          new V(
            `Unknown field "${a.length > 20 ? `${a.slice(0, 20)}…` : a}"`,
            { type: "unknown-field", field: a, value: h, line: m }
          )
        );
        break;
    }
  }
  function U() {
    E.length > 0 && e({
      id: u,
      event: f || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: E.endsWith(`
`) ? E.slice(0, -1) : E
    }), u = void 0, E = "", f = "";
  }
  function T(a = {}) {
    r && a.consume && W(r), d = !0, u = void 0, E = "", f = "", r = "";
  }
  return { feed: $, reset: T };
}
function st(t) {
  const e = [];
  let s = "", i = 0;
  for (; i < t.length; ) {
    const l = t.indexOf("\r", i), r = t.indexOf(`
`, i);
    let d = -1;
    if (l !== -1 && r !== -1 ? d = Math.min(l, r) : l !== -1 ? d = l : r !== -1 && (d = r), d === -1) {
      s = t.slice(i);
      break;
    } else {
      const u = t.slice(i, d);
      e.push(u), i = d + 1, t[i - 1] === "\r" && t[i] === `
` && i++;
    }
  }
  return [e, s];
}
class X extends Event {
  /**
   * Constructs a new `ErrorEvent` instance. This is typically not called directly,
   * but rather emitted by the `EventSource` object when an error occurs.
   *
   * @param type - The type of the event (should be "error")
   * @param errorEventInitDict - Optional properties to include in the error event
   */
  constructor(e, s) {
    var i, l;
    super(e), this.code = (i = s == null ? void 0 : s.code) != null ? i : void 0, this.message = (l = s == null ? void 0 : s.message) != null ? l : void 0;
  }
  /**
   * Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Node.js when you `console.log` an instance of this class.
   *
   * @param _depth - The current depth
   * @param options - The options passed to `util.inspect`
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @returns A string representation of the error
   */
  [Symbol.for("nodejs.util.inspect.custom")](e, s, i) {
    return i(Y(this), s);
  }
  /**
   * Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Deno when you `console.log` an instance of this class.
   *
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @param options - The options passed to `Deno.inspect`
   * @returns A string representation of the error
   */
  [Symbol.for("Deno.customInspect")](e, s) {
    return e(Y(this), s);
  }
}
function nt(t) {
  const e = globalThis.DOMException;
  return typeof e == "function" ? new e(t, "SyntaxError") : new SyntaxError(t);
}
function F(t) {
  return t instanceof Error ? "errors" in t && Array.isArray(t.errors) ? t.errors.map(F).join(", ") : "cause" in t && t.cause instanceof Error ? `${t}: ${F(t.cause)}` : t.message : `${t}`;
}
function Y(t) {
  return {
    type: t.type,
    message: t.message,
    code: t.code,
    defaultPrevented: t.defaultPrevented,
    cancelable: t.cancelable,
    timeStamp: t.timeStamp
  };
}
var tt = (t) => {
  throw TypeError(t);
}, Q = (t, e, s) => e.has(t) || tt("Cannot " + s), n = (t, e, s) => (Q(t, e, "read from private field"), s ? s.call(t) : e.get(t)), c = (t, e, s) => e.has(t) ? tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), o = (t, e, s, i) => (Q(t, e, "write to private field"), e.set(t, s), s), w = (t, e, s) => (Q(t, e, "access private method"), s), p, _, y, I, R, L, b, N, g, C, k, x, M, v, B, q, H, Z, j, z, O, J, K;
class G extends EventTarget {
  constructor(e, s) {
    var i, l;
    super(), c(this, v), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, c(this, p), c(this, _), c(this, y), c(this, I), c(this, R), c(this, L), c(this, b), c(this, N, null), c(this, g), c(this, C), c(this, k, null), c(this, x, null), c(this, M, null), c(this, q, async (r) => {
      var d;
      n(this, C).reset();
      const { body: u, redirected: E, status: f, headers: $ } = r;
      if (f === 204) {
        w(this, v, O).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (E ? o(this, y, new URL(r.url)) : o(this, y, void 0), f !== 200) {
        w(this, v, O).call(this, `Non-200 status code (${f})`, f);
        return;
      }
      if (!($.get("content-type") || "").startsWith("text/event-stream")) {
        w(this, v, O).call(this, 'Invalid content type, expected "text/event-stream"', f);
        return;
      }
      if (n(this, p) === this.CLOSED)
        return;
      o(this, p, this.OPEN);
      const W = new Event("open");
      if ((d = n(this, M)) == null || d.call(this, W), this.dispatchEvent(W), typeof u != "object" || !u || !("getReader" in u)) {
        w(this, v, O).call(this, "Invalid response body, expected a web ReadableStream", f), this.close();
        return;
      }
      const S = new TextDecoder(), U = u.getReader();
      let T = !0;
      do {
        const { done: a, value: h } = await U.read();
        h && n(this, C).feed(S.decode(h, { stream: !a })), a && (T = !1, n(this, C).reset(), w(this, v, J).call(this));
      } while (T);
    }), c(this, H, (r) => {
      o(this, g, void 0), !(r.name === "AbortError" || r.type === "aborted") && w(this, v, J).call(this, F(r));
    }), c(this, j, (r) => {
      typeof r.id == "string" && o(this, N, r.id);
      const d = new MessageEvent(r.event || "message", {
        data: r.data,
        origin: n(this, y) ? n(this, y).origin : n(this, _).origin,
        lastEventId: r.id || ""
      });
      n(this, x) && (!r.event || r.event === "message") && n(this, x).call(this, d), this.dispatchEvent(d);
    }), c(this, z, (r) => {
      o(this, L, r);
    }), c(this, K, () => {
      o(this, b, void 0), n(this, p) === this.CONNECTING && w(this, v, B).call(this);
    });
    try {
      if (e instanceof URL)
        o(this, _, e);
      else if (typeof e == "string")
        o(this, _, new URL(e, it()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw nt("An invalid or illegal string was specified");
    }
    o(this, C, et({
      onEvent: n(this, j),
      onRetry: n(this, z)
    })), o(this, p, this.CONNECTING), o(this, L, 3e3), o(this, R, (i = s == null ? void 0 : s.fetch) != null ? i : globalThis.fetch), o(this, I, (l = s == null ? void 0 : s.withCredentials) != null ? l : !1), w(this, v, B).call(this);
  }
  /**
   * Returns the state of this EventSource object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
   *
   * Note: typed as `number` instead of `0 | 1 | 2` for compatibility with the `EventSource` interface,
   * defined in the TypeScript `dom` library.
   *
   * @public
   */
  get readyState() {
    return n(this, p);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return n(this, _).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return n(this, I);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return n(this, k);
  }
  set onerror(e) {
    o(this, k, e);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return n(this, x);
  }
  set onmessage(e) {
    o(this, x, e);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return n(this, M);
  }
  set onopen(e) {
    o(this, M, e);
  }
  addEventListener(e, s, i) {
    const l = s;
    super.addEventListener(e, l, i);
  }
  removeEventListener(e, s, i) {
    const l = s;
    super.removeEventListener(e, l, i);
  }
  /**
   * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
   *
   * @public
   */
  close() {
    n(this, b) && clearTimeout(n(this, b)), n(this, p) !== this.CLOSED && (n(this, g) && n(this, g).abort(), o(this, p, this.CLOSED), o(this, g, void 0));
  }
}
p = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
B = function() {
  o(this, p, this.CONNECTING), o(this, g, new AbortController()), n(this, R)(n(this, _), w(this, v, Z).call(this)).then(n(this, q)).catch(n(this, H));
}, q = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Z = function() {
  var t;
  const e = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...n(this, N) ? { "Last-Event-ID": n(this, N) } : void 0 },
    cache: "no-store",
    signal: (t = n(this, g)) == null ? void 0 : t.signal
  };
  return "window" in globalThis && (e.credentials = this.withCredentials ? "include" : "same-origin"), e;
}, j = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
O = function(t, e) {
  var s;
  n(this, p) !== this.CLOSED && o(this, p, this.CLOSED);
  const i = new X("error", { code: e, message: t });
  (s = n(this, k)) == null || s.call(this, i), this.dispatchEvent(i);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
J = function(t, e) {
  var s;
  if (n(this, p) === this.CLOSED)
    return;
  o(this, p, this.CONNECTING);
  const i = new X("error", { code: e, message: t });
  (s = n(this, k)) == null || s.call(this, i), this.dispatchEvent(i), o(this, b, setTimeout(n(this, K), n(this, L)));
}, K = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
G.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
G.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
G.CLOSED = 2;
function it() {
  const t = "document" in globalThis ? globalThis.document : void 0;
  return t && typeof t == "object" && "baseURI" in t && typeof t.baseURI == "string" ? t.baseURI : void 0;
}
export {
  X as ErrorEvent,
  G as EventSource
};
