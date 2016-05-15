/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/people/person_1.jpg","a5724995d33af1a333aa12878c1ea7b0"],["images/people/person_10.jpg","987b301ad5bed9dd0787e322c7dcd071"],["images/people/person_11.jpg","48ea1d3af00b6da0686ad4e86e88b9dc"],["images/people/person_12.jpg","c22b2f4ac6b72bc9111230df1546c236"],["images/people/person_13.jpg","c170cbef9b16a6c9d4e8e3e9942a255c"],["images/people/person_14.jpg","4aade69487f2cbe0161f13f3f104ded2"],["images/people/person_15.jpg","d909f9d56e54de951073ac9cfffe152f"],["images/people/person_16.jpg","4257ec0e49ab12b55a8f1d83e485d12a"],["images/people/person_18.jpg","b4e4b033230d8401ba917c7e72977811"],["images/people/person_19.jpg","a34b1bf9f078da1a71f8e5918201c4d3"],["images/people/person_2.jpg","871105674ffecf14bbb7f5af950448f2"],["images/people/person_20.jpg","e05e85d76599d2891e7104fa1eb0275c"],["images/people/person_21.jpg","a29d4f7e4c33f24710441264981dfbcf"],["images/people/person_22.jpg","0a6d0b02505db543c7381c3c28ad81f0"],["images/people/person_23.jpg","35092b445cd41b6c402352d4df391f46"],["images/people/person_24.jpg","1fcb2fa086c1dd480521edb223951048"],["images/people/person_25.jpg","83bc73704d43555e2aec80ea2b3bfb3a"],["images/people/person_26.jpg","41130535e8305f50215b7841f8bd7719"],["images/people/person_27.jpg","4fe832114374b3003ab472e77d63ebf8"],["images/people/person_28.jpg","3d131876d1a5a91436fb81ba3f84429b"],["images/people/person_29.jpg","1d5db67bc45638bb174013f25646db9c"],["images/people/person_3.jpg","807202ddeca3092343de4d28c5b26727"],["images/people/person_31.jpg","1d4b33850c0e6519fc7cf19e53de94b1"],["images/people/person_32.jpg","45f67705154341457ce7e7ef76e886b8"],["images/people/person_33.jpg","d57c9a506fadffb12f849ce6bcb3be0a"],["images/people/person_34.jpg","dc4c37b5c0501e754e6e4fb4ad7075f5"],["images/people/person_35.jpg","4a28f0651e09e633b9be1f69d5b1c37e"],["images/people/person_36.jpg","3abc6beaaee79e6586abcf394bf6a67e"],["images/people/person_37.jpg","788deb3dac5dec205631d1e063c314ae"],["images/people/person_38.jpg","4372671bbe89bc75b93f0d1c5e7da291"],["images/people/person_39.jpg","1b9e1a5a615f5391ba87638326de9928"],["images/people/person_4.jpg","e849cd51d12b18703722c7257576728a"],["images/people/person_40.jpg","68fbf6f58b7ffaf13fa1083482378738"],["images/people/person_41.jpg","4f944db63f84278ff3893a185af9b06d"],["images/people/person_42.jpg","dfd3c586c6d314e6010cf8098895a45e"],["images/people/person_43.jpg","be1cccdbf33f1e8ec39246163a59ba74"],["images/people/person_44.jpg","6d0f4d7e8605a38290afc98e4b94c296"],["images/people/person_45.jpg","a40eaa1ab9b70b7b5433c3bde97484ca"],["images/people/person_48.jpg","a1b9b2d015613d56a148a21447dd51fb"],["images/people/person_49.jpg","27141981be66c02fab713c2c778245c1"],["images/people/person_5.jpg","5a29e4ec10631180edb57594ab0b509d"],["images/people/person_50.jpg","baaca9f8051d7d9611abfe5704b789c7"],["images/people/person_51.jpg","fefab4ac252d6bc5893bdd2489b82af9"],["images/people/person_52.jpg","5f0c2e70aae80e7ac2b7fd355469ffc9"],["images/people/person_53.jpg","d7382cdb3e2354288ca543285411ba1e"],["images/people/person_54.jpg","3f7b4de1b42d21ebb0f9e6b47133a72d"],["images/people/person_55.jpg","b3c70236d32b5f51947470b5e2aec449"],["images/people/person_56.jpg","b0ba448f946c491637ab307eb521d873"],["images/people/person_57.jpg","ef101fda247941d7a4183b4d42fa81de"],["images/people/person_58.jpg","2295e6b5cd51b637de4e1f8f2c544bfd"],["images/people/person_59.jpg","928b1caffa9969ad6a2b8318aebb5b11"],["images/people/person_6.jpg","6bad1a0ea3e50d93283cababf5f543bc"],["images/people/person_60.jpg","8764ed1df6c29617ef51a0777730e3d5"],["images/people/person_61.jpg","ca34b36a591742e53099e56f644352ad"],["images/people/person_62.jpg","7d5bf4c0f263d532e6dd14a2340065c2"],["images/people/person_63.jpg","314d6f7462859b9c4f3b3b8156435de5"],["images/people/person_64.jpg","f3b3a23c609ae32601d1becd14129aee"],["images/people/person_65.jpg","6004f93819b3e0f22cc3dd9595503d01"],["images/people/person_66.jpg","d4725a4f275c4566b8e371e7836a1943"],["images/people/person_67.jpg","6d7d7bf2b2e7da7955b6553d7cce5f7e"],["images/people/person_68.jpg","4925aefc280145c96694b33a6f01df7b"],["images/people/person_69.jpg","4f10f4ff8da36c723776791b18dfcc85"],["images/people/person_7.jpg","a36ef0a5afbd6b95037e6022ffbad096"],["images/people/person_70.jpg","e57bafee1373c72e297fc550d48ec868"],["images/people/person_71.jpg","e45370f30acc2763882325486207810b"],["images/people/person_72.jpg","c971e0a1dede2d7c4973f9b74e9f3da6"],["images/people/person_73.jpg","775812e19fbfae2414c599aac157297b"],["images/people/person_74.jpg","e4d9f8c47c1ea9d653a8ef4c55246271"],["images/people/person_75.jpg","4d656720b3b22ad0c27cbad3923653b6"],["images/people/person_76.jpg","2d51ea16a39496f3026f7cbd0ecdaa15"],["images/people/person_77.jpg","30e7f843f7939fdb6dc80fdd49debad9"],["images/people/person_78.jpg","bc3849b937e7b6b26aeda1f7b01929eb"],["images/people/person_79.jpg","416c305968bad57062d2729e1eb0130a"],["images/people/person_8.jpg","253ae55964c5fe89350f809440fbf3d9"],["images/people/person_80.jpg","e6d33cf80f9bda4e0b53cf466831f24f"],["images/people/person_81.jpg","fdc02983e0d3a1360291e136b4a2de65"],["images/people/person_82.jpg","6fad139098d3485bf42fd42414c2e2d1"],["images/people/person_83.jpg","430f9496353469571df1a89b57e9ee49"],["images/people/person_84.jpg","d5f7de6a461b4f011eaf37d2b712c3c9"],["images/people/person_85.jpg","4e008fcf6180d0a06bbd6696a22de61c"],["images/people/person_86.jpg","597ff84164cd6258287ce85cb11d39da"],["images/people/person_87.jpg","fbd083cb6360627a094b379e678d2390"],["images/people/person_9.jpg","711763e018e38df38cc14663801302a2"],["images/touch/apple-touch-icon.png","bb9f87dd29dc5d1ef574670bdcf7d9f0"],["images/touch/chrome-touch-icon-192x192.png","d5afdfd5b3d921a842069e71824fd950"],["images/touch/icon-128x128.png","bc3a3da2e668e867cf1e377d29b07cea"],["images/touch/ms-touch-icon-144x144-precomposed.png","592760a573fb7fdf77346e014159d9cd"],["index.html","3eb4d3ba83503e0b6fa71a27b9bdebc3"],["manifest.json","16cdf8af79ee8d1247d1d8a8a248bc0d"],["scripts/main.min.js","a4ac5369273e67cf5cc3fd35199de185"],["scripts/sw/runtime-caching.js","3989a1e979584ea67134459273e31bdb"],["scripts/sw/sw-toolbox.js","42dd9073ba0a0c8e0ae2230432870678"],["styles/main.css","fceb676c6f895b2e90166b7a4c1fe677"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-star-wars-offline-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

