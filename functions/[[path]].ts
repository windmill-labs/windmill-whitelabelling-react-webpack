export async function onRequest(
  context: EventContext<unknown, string, unknown>
) {
  try {
    // Contents of context object
    const {
      request, // same as existing Worker API
      next, // used for middleware or to fetch assets
    } = context;

    const url = new URL(request.url);
    if (
      url.pathname.endsWith(".json") ||
      request.headers.get("Accept") == "application/json"
    ) {
      url.hostname = "app.windmill.dev";
      const res = await fetch(url.toString(), {
        method: request.method,
        body: request.body,
        headers: request.headers,
        redirect: "manual",
      });
      return res;
    } else {
      return next();
    }
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
}
