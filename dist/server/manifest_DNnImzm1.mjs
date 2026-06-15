import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BvRpWg5T.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_BjDLxeEP.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_m4GsNhfF.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/","cacheDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/node_modules/.astro/","outDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/dist/","srcDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/","publicDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/public/","buildClientDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/dist/client/","buildServerDir":"file:///C:/Users/Connect/AppData/Local/Temp/main-website-pr/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.COue7W0v.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DNnImzm1.mjs","C:/Users/Connect/AppData/Local/Temp/main-website-pr/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPaqdqXF.mjs","C:/Users/Connect/AppData/Local/Temp/main-website-pr/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/components/App.tsx":"_astro/App.LsG8exS0.js","@astrojs/react/client.js":"_astro/client.DQ9k0hRN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.COue7W0v.css","/scripts/music.js","/_astro/App.LsG8exS0.js","/_astro/client.DQ9k0hRN.js","/_astro/index.DCOp_-GS.js","/assets/img/cmpI2p.svg","/assets/img/ecoEncryptsim.svg","/assets/img/ecoIndependent.svg","/assets/img/ecoMeile.png","/assets/img/ecoNorse.svg","/assets/img/ecoRyn.png","/assets/img/ecoSentinelShield.svg","/assets/img/ecoValt.svg","/assets/img/logoCosmos.svg","/assets/img/logoFetch.svg","/assets/img/logoGalaxy.svg","/assets/img/logoTrgc.svg","/assets/img/meshBg.png","/assets/img/noiseBg.png","/assets/img/og-cover.png","/assets/img/payApple.svg","/assets/img/payBitcoin.svg","/assets/img/payCoinbase.svg","/assets/img/payEthereum.svg","/assets/img/payGoogle.svg","/assets/img/payMoonpay.svg","/assets/img/payStripe.svg","/assets/img/payUsdc.svg","/assets/img/payX402.svg","/assets/img/screenNode1.jpg","/assets/img/screenNode2.jpg","/assets/img/screenNode3.jpg","/assets/img/screenPlan1.png","/assets/img/screenPlan2.jpg","/assets/img/screenPlan3.png","/assets/media/ambient-music.mp3","/assets/media/heroVideo.mp4","/assets/fonts/0379f2f3-8f0f-4787-b5f3-9d6d2a51e55d.woff2","/assets/fonts/051260e9-c47c-46f1-b540-d7e168a42e9e.ttf","/assets/fonts/0e0ea688-2a75-4eec-8d60-407245c5174a.ttf","/assets/fonts/0ee5322e-81ba-4144-be8a-58989a14b719.ttf","/assets/fonts/1a784e20-b705-4a5f-8259-e99d8931e75a.woff2","/assets/fonts/1b4003a9-af03-4b31-bf9e-73fb18de0e31.woff2","/assets/fonts/24df3833-5d23-414a-a9cd-e86f1f1302eb.ttf","/assets/fonts/2e095894-b81b-4e9b-a634-4dedc9ea0e57.woff2","/assets/fonts/31ad5034-c9d4-4d9a-a2a1-83265f5b1dde.woff2","/assets/fonts/38f1f132-f287-4496-b82c-f8b4aa538193.woff2","/assets/fonts/39ad8604-e56f-4ea8-a3e5-f1c945e7eaa6.woff2","/assets/fonts/3eaa24ca-c770-44cb-977e-93a0794e9362.woff2","/assets/fonts/45239905-96e1-4ff4-a44e-414c28873776.ttf","/assets/fonts/4aaf464f-25f4-4452-80e2-f9edfd523ef0.woff2","/assets/fonts/51ab3ba4-dde0-4044-957b-8f32d9c99bab.woff2","/assets/fonts/51efd61a-3a24-4aff-b9d5-4e4b159f6575.woff2","/assets/fonts/56d3fa8c-b059-47b6-b79d-0cf61c625342.ttf","/assets/fonts/61d98bcb-3103-4282-b83c-3e6dd4a61d2c.woff2","/assets/fonts/68b9b0f5-b62f-42bd-b00e-4ce3fa4be408.ttf","/assets/fonts/85bda36c-4ddb-4112-bf16-8fd10ba174bd.woff2","/assets/fonts/9120b550-0280-4dad-811c-2feee27e6697.woff2","/assets/fonts/951e4220-9132-4fa8-b9f0-91d07ded5c4b.woff2","/assets/fonts/a0260e55-4029-4143-b3cb-d7cb57bcb588.woff2","/assets/fonts/a0afe384-f3f9-43a4-b0a9-fb18684dc862.ttf","/assets/fonts/a5947b91-9133-4b7b-9d3f-9fbf1670317e.ttf","/assets/fonts/a89bf234-db5c-42da-ae42-61182c9247d1.woff2","/assets/fonts/aa114df1-f2a3-4547-a708-0e1bda441dfc.ttf","/assets/fonts/adb9b5a5-6116-46ad-888b-e20370a99338.woff2","/assets/fonts/b0dba3d6-f31e-417e-af55-23c6219c3db0.woff2","/assets/fonts/b2aadfdd-8e95-45ac-9920-d156f3f1745f.woff2","/assets/fonts/b8221ca6-8cc7-4550-8dc5-eaa73aad5c98.woff2","/assets/fonts/b913dec8-44e3-4100-bbc6-f9d440083bdd.woff2","/assets/fonts/bcc1831f-7644-4c42-8f0a-660966c0d5f4.woff2","/assets/fonts/c778bfae-b6a6-4fdf-8990-2b9f9b2083ec.woff2","/assets/fonts/ca155c20-03dc-418b-be3c-71c30d75961c.ttf","/assets/fonts/ca3cbefd-ca74-4d9f-af5c-a96912932ba7.woff2","/assets/fonts/d3835081-8789-4264-9ac0-d8d2f7d8b482.woff2","/assets/fonts/db2c83b5-34b4-4695-9d54-b678e59238fd.woff2","/assets/fonts/e304390f-cafc-4959-b41e-c4e2ffd4f92d.ttf","/assets/fonts/eb9a321b-7261-41bb-b9c9-7e4589358f0a.woff2"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"9PLNP6rr4O29jYuYvKHwCO4QetVAUB64fsjQKfjg1ic=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\Connect\\AppData\\Local\\Temp\\main-website-pr\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
