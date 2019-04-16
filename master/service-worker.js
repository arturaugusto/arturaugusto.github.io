"use strict";
var precacheConfig = [
  [
    "https://arturaugusto.github.io/master/static/favicons/apple-touch-icon.5e61838f35fb03808eefac14cd0126b1.png",
    "5e61838f35fb03808eefac14cd0126b1"
  ],
  [
    "https://arturaugusto.github.io/master/static/favicons/apple-touch-icon.5e61838f35fb03808eefac14cd0126b1.png",
    "5e61838f35fb03808eefac14cd0126b1"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/200_118_versaopositiva.81ede6a4a184b81dbcc2c09630b00d7e.png",
    "81ede6a4a184b81dbcc2c09630b00d7e"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/phone.1d344979a449f9fd561b27d22376876c.png",
    "1d344979a449f9fd561b27d22376876c"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/section_wave.01c6ae1ca21d669e88d0934d72a63ff3.png",
    "01c6ae1ca21d669e88d0934d72a63ff3"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/thumb_tablet_full.3a0690753c08ca9bab22e46de657a1ee.png",
    "3a0690753c08ca9bab22e46de657a1ee"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/thumb_certificado_full.8665e56f7947f696dcb39780614d3ec4.png",
    "8665e56f7947f696dcb39780614d3ec4"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/thumb_ocorrencias_full.29015fac520f0230303c209756826573.png",
    "29015fac520f0230303c209756826573"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/thumb_orcamento_full.ffacb39190177a3d86ade27e8e0e1549.png",
    "ffacb39190177a3d86ade27e8e0e1549"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/section_wave.01c6ae1ca21d669e88d0934d72a63ff3.png",
    "01c6ae1ca21d669e88d0934d72a63ff3"
  ],
  [
    "https://arturaugusto.github.io/master/static/img/phone.1d344979a449f9fd561b27d22376876c.png",
    "1d344979a449f9fd561b27d22376876c"
  ],
  [
    "https://arturaugusto.github.io/master/static/js/app.7c8ca1944cb8c59588eac085ce0dffce.js",
    "7c8ca1944cb8c59588eac085ce0dffce"
  ],
  [
    "https://arturaugusto.github.io/master/static/js/vendor.1651b447159dbe639871e54b438a223d.js",
    "1651b447159dbe639871e54b438a223d"
  ],
  [
    "https://arturaugusto.github.io/master/static/css/app.a10857a89dc497fb66e8984e68a8ed2b.css",
    "a10857a89dc497fb66e8984e68a8ed2b"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_512x512.3c5483b4bcb425460fcaf7a7947238fb.png",
    "3c5483b4bcb425460fcaf7a7947238fb"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_384x384.40aeddc16dfff1807f01b2fd08a90b1f.png",
    "40aeddc16dfff1807f01b2fd08a90b1f"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_256x256.605cc4e41d0096a165b945fd49c1e095.png",
    "605cc4e41d0096a165b945fd49c1e095"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_192x192.1848b4f56b60a7278caf4f53d74ca23a.png",
    "1848b4f56b60a7278caf4f53d74ca23a"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_128x128.8a1167debc7ef92c91a97a0ea0a1ae3d.png",
    "8a1167debc7ef92c91a97a0ea0a1ae3d"
  ],
  [
    "https://arturaugusto.github.io/master/static/icons/icon_96x96.194df5b915f74a37da85389be782ee19.png",
    "194df5b915f74a37da85389be782ee19"
  ],
  [
    "https://arturaugusto.github.io/master/manifest.c4e5dc75453f40d989933044522f1ab2.json",
    "c4e5dc75453f40d989933044522f1ab2"
  ],
  [
    "https://arturaugusto.github.io/master/index.html",
    "98ff06c1638b4b2fa2b96a6af45a0c89"
  ]
],
  cacheName = "sw-precache-v3-ipt-procal-" + (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var a = new URL(e);
    return "/" === a.pathname.slice(-1) && (a.pathname += t), a.toString()
  },
  cleanResponse = function(e) {
    return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
      return new Response(t, {
        headers: e.headers,
        status: e.status,
        statusText: e.statusText
      })
    }) : Promise.resolve(e)
  },
  createCacheKey = function(e, t, a, c) {
    var s = new URL(e);
    return c && s.pathname.match(c) || (s.search += (s.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(a)), s.toString()
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function(e) {
      return a.match(e)
    })
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return a.hash = "", a.search = a.search.slice(1).split("&").map(function(e) {
      return e.split("=")
    }).filter(function(e) {
      return t.every(function(t) {
        return !t.test(e[0])
      })
    }).map(function(e) {
      return e.join("=")
    }).join("&"), a.toString()
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
    var t = e[0],
      a = e[1],
      c = new URL(t, self.location),
      s = createCacheKey(c, hashParamName, a, /\.\w{8}\./);
    return [c.toString(), s]
  }));

function setOfCachedUrls(e) {
  return e.keys().then(function(e) {
    return e.map(function(e) {
      return e.url
    })
  }).then(function(e) {
    return new Set(e)
  })
}
self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(cacheName).then(function(e) {
    return setOfCachedUrls(e).then(function(t) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a) {
        if (!t.has(a)) {
          var c = new Request(a, {
            credentials: "same-origin"
          });
          return fetch(c).then(function(t) {
            if (!t.ok) throw new Error("Request for " + a + " returned a response with status " + t.status);
            return cleanResponse(t).then(function(t) {
              return e.put(a, t)
            })
          })
        }
      }))
    })
  }).then(function() {
    return self.skipWaiting()
  }))
}), self.addEventListener("activate", function(e) {
  var t = new Set(urlsToCacheKeys.values());
  e.waitUntil(caches.open(cacheName).then(function(e) {
    return e.keys().then(function(a) {
      return Promise.all(a.map(function(a) {
        if (!t.has(a.url)) return e.delete(a)
      }))
    })
  }).then(function() {
    return self.clients.claim()
  }))
}), self.addEventListener("fetch", function(e) {
  if ("GET" === e.request.method) {
    var t, a = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
    (t = urlsToCacheKeys.has(a)) || (a = addDirectoryIndex(a, "index.html"), t = urlsToCacheKeys.has(a));
    !t && "navigate" === e.request.mode && isPathWhitelisted([], e.request.url) && (a = new URL("https://arturaugusto.github.io/master/index.html", self.location).toString(), t = urlsToCacheKeys.has(a)), t && e.respondWith(caches.open(cacheName).then(function(e) {
      return e.match(urlsToCacheKeys.get(a)).then(function(e) {
        if (e) return e;
        throw Error("The cached response that was expected is missing.")
      })
    }).catch(function(t) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
    }))
  }
});
