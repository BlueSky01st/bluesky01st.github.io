/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","2a8e1d381cecdcf251964ad377d4bfd0"],["/about/index.html","252239f334db48fdac6209b65e2eb946"],["/archives/2020/05/index.html","232de48ce7b59e1186e8b14a42e892f9"],["/archives/2020/06/index.html","6aedf8568267839192627abb20c76869"],["/archives/2020/07/index.html","133b74c4ee2bbf68f51e73956d4e1166"],["/archives/2020/index.html","996004102c4e9ad962e3878fc4fcaccb"],["/archives/2020/page/2/index.html","194152fa0bfda4ed351fb506faa52001"],["/archives/2021/08/index.html","233471ac5f0ab090b6b804cb110c3004"],["/archives/2021/index.html","5698f04d10ae24468f31f1bb7a3f741f"],["/archives/index.html","92439c36836761d33f02a88b57658e17"],["/archives/page/2/index.html","362cbb6dbbe98ddf826ba4ca9f053533"],["/artitalk/index.html","5e06ba6c6c15c7299ccf18da8f1089ea"],["/categories/Hexo/index.html","b6dcba23b11f70dfa9e5bd4410c3e931"],["/categories/Linux/index.html","6380d48c2dcc1c156ff717634acb9a05"],["/categories/Markdown/index.html","049e44a1f99ea0670951c131cdea9383"],["/categories/Python/index.html","c9c09371721392f8edda7d5316886fe7"],["/categories/index.html","6fcf01e709fe208db6291341944e5685"],["/categories/杂/index.html","5ac3985e709d3f868da7d560a9f3e363"],["/contact/index.html","af70c76a9784b1c2d22375444cc3beec"],["/css/gitment.css","8c64dd3911102c074a5f77fad53cf128"],["/css/matery.css","671d8b28c4033cf499a6ada099d60158"],["/css/my-gitalk.css","08f685c003025b64ba208684635f6570"],["/css/my.css","7b0d769fe37de4975a3623259b1612c2"],["/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/favicon.png","115234b82e061e315349520bc312ace9"],["/friends/index.html","3188d083b4af915b6b278c21a5da08aa"],["/index.html","74a37a579329b65a6b1304c1c72db2ba"],["/js/matery.js","4c35015ef438e741854f6a4b7629c476"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","61451b127cca628cf50621311f9507b3"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/all.css","7416a44a7388cd77144912ed487be0cc"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","c25fc2382a027bd31e03dc97cb133d0f"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","34cca0a25cbadcdbaffad26d5aae609e"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","8ba6a0e6cddb83620b6d1b588bfcaf7e"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","ae76f83708ae62e5a96d38e808392505"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/checkbox.js","07b077fb45e0268f2074d708eea6f456"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/jsdelivrpic.js","9327e295c21b53170c1b0e92ef048d86"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","fc2f8a7c5c640558b6945eb9cbecfd51"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","ac1aea1b091aec325997d30025aeec97"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/manifest.json","6b8deb1de67c9c94989830da120bf308"],["/medias/128.png","267967fd83dffa5955ac015325ad68e1"],["/medias/144.png","c65985cf0a48b06aac698628d5fec389"],["/medias/180.png","8a9a14005515da9144e10d754070fb46"],["/medias/192.png","3936bd45e1b786f69a946c95bbf3cd8d"],["/medias/36.png","ad940eca5226cc8619ce8f64d849f1c2"],["/medias/48.png","92aa4352906bc0a939f564e02c2218b3"],["/medias/512.png","16fd4ff2de7f4572c3aa67cbe4e90404"],["/medias/72.png","99802d1749fcf5d85589a84bc4552a13"],["/medias/96.png","115234b82e061e315349520bc312ace9"],["/medias/apple-touch-icon.png","8a9a14005515da9144e10d754070fb46"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","f8588884272f2b8648dd92453deb9321"],["/medias/banner/1.jpg","fafe68ee4e2ee9bd9105b258b2fa1c2e"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","132d9323ef7caad97c34429b2827d249"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/6.jpg","1b5d6e4bf3bcba71a6db21bf7ac2718b"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/24.jpg","378d0125031e6f2c4b6c6ae25dac7412"],["/medias/featureimages/25.jpg","2a5e394df9e861217de47a28baf0f04c"],["/medias/featureimages/26.jpg","9d6615bc3c6f235cc1406273be208b9a"],["/medias/featureimages/27.jpg","fafe68ee4e2ee9bd9105b258b2fa1c2e"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.png","285014326bc9a1f65772a8d5e1465e71"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/page/2/index.html","4050ebac8d4d8e186026f9f759eb4595"],["/posts/2afd864b.html","51a4580d321646d4500a277df38e5735"],["/posts/441a0256.html","c4011e7daa49fe13eeaae29b70e3a483"],["/posts/65dc6fb7.html","09f77992c84d8846edba1390878b24d8"],["/posts/75f63b3d.html","109740591fb289a407d373a02d403818"],["/posts/ba45cc7d.html","10dd7b5d56dd3467c4aede2cd62b22d8"],["/posts/d76019f8.html","cdc8228c2364993defbc7460dea87b73"],["/posts/df8687fa.html","6bb79d22d26ff2f66d7cc88e522607c5"],["/posts/ea7ab40c.html","1650e2fbd58e75c4688c9092e2879b4d"],["/tags/Blog/index.html","0dd7fd52ddd2e98fdeb7493cd1db6d14"],["/tags/Hexo/index.html","91531d469f567ea8bd0b0e7b883682b7"],["/tags/Linux/index.html","036cd1bfb8aeaeab372308d2589577fb"],["/tags/Markdown/index.html","1ae215018061ab8e0ba40895b4febf3f"],["/tags/Python/index.html","c859dc38e254a4a738a3d13b39decc82"],["/tags/index.html","263a818caf0f90fe0e696e5a21dcdbd4"],["/tags/requests/index.html","114f5c896fc17716eafb1b974813c3f4"],["/tags/杂/index.html","0eb78dfc8efb64479871a10e1f74238a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







