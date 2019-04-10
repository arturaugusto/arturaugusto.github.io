"use strict";
var precacheConfig = [
  [
    "https://arturaugusto.github.io/static/favicons/apple-touch-icon.5e61838f35fb03808eefac14cd0126b1.png",
    "5e61838f35fb03808eefac14cd0126b1"
  ],
  [
    "https://arturaugusto.github.io/static/favicons/apple-touch-icon.5e61838f35fb03808eefac14cd0126b1.png",
    "5e61838f35fb03808eefac14cd0126b1"
  ],
  [
    "https://arturaugusto.github.io/static/img/200_118_versaopositiva.81ede6a4a184b81dbcc2c09630b00d7e.png",
    "81ede6a4a184b81dbcc2c09630b00d7e"
  ],
  [
    "https://arturaugusto.github.io/static/img/phone.6a51df6c66cea3e1e515141c0ac272d0.png",
    "6a51df6c66cea3e1e515141c0ac272d0"
  ],
  [
    "https://arturaugusto.github.io/static/img/phone.6a51df6c66cea3e1e515141c0ac272d0.png",
    "6a51df6c66cea3e1e515141c0ac272d0"
  ],
  [
    "https://arturaugusto.github.io/static/js/app.ea06c2e05d90f7ec6f20d5d5e22ae234.js",
    "ea06c2e05d90f7ec6f20d5d5e22ae234"
  ],
  [
    "https://arturaugusto.github.io/static/js/vendor.4bcd1648adafcbc3acf3cb3f7162ba98.js",
    "4bcd1648adafcbc3acf3cb3f7162ba98"
  ],
  [
    "https://arturaugusto.github.io/static/css/app.fd8d0ef65eeeec17008a330835d3efa1.css",
    "fd8d0ef65eeeec17008a330835d3efa1"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_512x512.3c5483b4bcb425460fcaf7a7947238fb.png",
    "3c5483b4bcb425460fcaf7a7947238fb"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_384x384.40aeddc16dfff1807f01b2fd08a90b1f.png",
    "40aeddc16dfff1807f01b2fd08a90b1f"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_256x256.605cc4e41d0096a165b945fd49c1e095.png",
    "605cc4e41d0096a165b945fd49c1e095"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_192x192.1848b4f56b60a7278caf4f53d74ca23a.png",
    "1848b4f56b60a7278caf4f53d74ca23a"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_128x128.8a1167debc7ef92c91a97a0ea0a1ae3d.png",
    "8a1167debc7ef92c91a97a0ea0a1ae3d"
  ],
  [
    "https://arturaugusto.github.io/static/icons/icon_96x96.194df5b915f74a37da85389be782ee19.png",
    "194df5b915f74a37da85389be782ee19"
  ],
  [
    "https://arturaugusto.github.io/manifest.2229f14ca58db999c5fcdc6337cf8d9c.json",
    "2229f14ca58db999c5fcdc6337cf8d9c"
  ],
  [
    "https://arturaugusto.github.io/index.html",
    "d7be80f73ec1ff187c8e8ecc69079357"
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
    !t && "navigate" === e.request.mode && isPathWhitelisted([], e.request.url) && (a = new URL("https://{{site_name}}/index.html", self.location).toString(), t = urlsToCacheKeys.has(a)), t && e.respondWith(caches.open(cacheName).then(function(e) {
      return e.match(urlsToCacheKeys.get(a)).then(function(e) {
        if (e) return e;
        throw Error("The cached response that was expected is missing.")
      })
    }).catch(function(t) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
    }))
  }
});
