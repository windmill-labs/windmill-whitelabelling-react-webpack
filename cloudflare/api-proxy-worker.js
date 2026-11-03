// Proxies windmill-sdk-example.com/api/* to app.windmill.dev. Deployed by hand as the Cloudflare
// Worker `worker-purple-sound-d30b` on the route `windmill-sdk-example.com/api/*`; the static site
// itself is GitHub Pages (gh-pages), which is why functions/ is not what serves /api.
// app.windmill.dev scopes its cookies to Domain=windmill.dev, which a browser on this host
// rejects, so each Set-Cookie is forwarded on its own with the Domain attribute dropped.
// Reading them through headers.get() would join them into one comma-separated value that
// browsers parse as a single cookie.
export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      url.protocol = "https:";
      url.hostname = "app.windmill.dev";
      url.port = "";
      const res = await fetch(url.toString(), {
        method: request.method,
        body: request.body,
        headers: request.headers,
        redirect: "manual",
      });
      const headers = new Headers(res.headers);
      headers.delete("set-cookie");
      for (const cookie of res.headers.getSetCookie()) {
        headers.append("set-cookie", cookie.replace(/;\s*Domain=[^;]*/gi, ""));
      }
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers,
      });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};
