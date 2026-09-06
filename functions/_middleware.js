/**
 * Canonical host: www → apex (301).
 * Runs on Cloudflare Pages after the request reaches this project.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
