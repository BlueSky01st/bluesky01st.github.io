/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8837e4ca430064f386491f727514a914"],["/about/index.html","0f6d652efcf12fbf6257c68a96577131"],["/archives/2020/05/index.html","311fad2804784072c13768ea11c007de"],["/archives/2020/06/index.html","7aff3f53f259d8d2629042aca62429e2"],["/archives/2020/07/index.html","e024cbe56e5dd0ad84bfb63f057e8ab9"],["/archives/2020/index.html","0a2e7cc16d07ce105d6784da3ea3ea5f"],["/archives/2020/page/2/index.html","effa87806859147b5c1235f5fd1182bc"],["/archives/2021/08/index.html","7cbab499be505929cb5c05ce3c67f7aa"],["/archives/2021/index.html","08d5e2cb8476ee13dd0a0819b7be587b"],["/archives/index.html","246dc3fb31867e17fec4bc740c9964d4"],["/archives/page/2/index.html","a0e9ad33fbd2c6396cbb1d4dd16a3e36"],["/artitalk/index.html","fbceb254f964dbbd54651e5fc1c88b4b"],["/categories/Hexo/index.html","852ae16acd11158268a1e3b0ede8738c"],["/categories/Linux/index.html","2c2cf238f6c99623b4c0ebc70d7b1205"],["/categories/Markdown/index.html","9739d687d663d4321235bcfe2fc72ac7"],["/categories/Python/index.html","301323e7c97d16a185e3d8613647b84f"],["/categories/index.html","8446fc97c96a82d6520e112fdf6ee7a7"],["/categories/杂/index.html","abac81d5856d52b58c04f2f45d58b74d"],["/contact/index.html","c10396de169ee66e8959a4a7a6c1ee8f"],["/css/gitment.css","8954d4d1c84cc73ea69b435353daaedb"],["/css/matery.css","57d471201a6e69a005dd4b73a0f36604"],["/css/my-gitalk.css","fc4191e8ea37cfee870e3e843e2fefd2"],["/css/my.css","5486bb9e44a742639bac5c3196750d1e"],["/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/favicon.png","115234b82e061e315349520bc312ace9"],["/friends/index.html","474c61576ff94096aa6235824aa8e48e"],["/index.html","62ca760bd72d6d6c971e8cee1ad554ea"],["/js/matery.js","4c35015ef438e741854f6a4b7629c476"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","ade900a330196b8f5808ff8a60d9f929"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/all.css","b34171d7b1bb278aefc876660a6e5c7e"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","9895864226ca33590d12deaceb29d88f"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","e987f220eb7ab80a6e3a571cfecb97af"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","6ae08ac7c36b7a65449def48e1fa8624"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","ae76f83708ae62e5a96d38e808392505"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/jsdelivrpic.js","9327e295c21b53170c1b0e92ef048d86"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","0680544a30f4bde21b00ff0448be5bbd"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","ac1aea1b091aec325997d30025aeec97"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/load.gif","5cce4f682882c3e2aa25d297afd8b179"],["/medias/128.png","267967fd83dffa5955ac015325ad68e1"],["/medias/144.png","c65985cf0a48b06aac698628d5fec389"],["/medias/180.png","8a9a14005515da9144e10d754070fb46"],["/medias/192.png","3936bd45e1b786f69a946c95bbf3cd8d"],["/medias/36.png","ad940eca5226cc8619ce8f64d849f1c2"],["/medias/48.png","92aa4352906bc0a939f564e02c2218b3"],["/medias/512.png","16fd4ff2de7f4572c3aa67cbe4e90404"],["/medias/72.png","99802d1749fcf5d85589a84bc4552a13"],["/medias/96.png","115234b82e061e315349520bc312ace9"],["/medias/apple-touch-icon.png","8a9a14005515da9144e10d754070fb46"],["/medias/avatar.jpg","8a9a14005515da9144e10d754070fb46"],["/medias/banner/0.jpg","f8588884272f2b8648dd92453deb9321"],["/medias/banner/1.jpg","fafe68ee4e2ee9bd9105b258b2fa1c2e"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","5dfeb9f853d6f9fb3f2263f9b9647fa5"],["/medias/banner/4.jpg","132d9323ef7caad97c34429b2827d249"],["/medias/banner/5.jpg","3e652baf53a27ff4e10ba0dc9b590085"],["/medias/banner/6.jpg","1b5d6e4bf3bcba71a6db21bf7ac2718b"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","d2c6dc47305afa77e4abd31ece0c1c92"],["/medias/featureimages/1.jpg","8517106ac5762d99cc026513676efd43"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","0d403e3c36e1f1271c59b890a32ad41c"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","04ae72de6da90833582a48df44336e7e"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/24.jpg","378d0125031e6f2c4b6c6ae25dac7412"],["/medias/featureimages/25.jpg","2a5e394df9e861217de47a28baf0f04c"],["/medias/featureimages/26.jpg","9d6615bc3c6f235cc1406273be208b9a"],["/medias/featureimages/27.jpg","fafe68ee4e2ee9bd9105b258b2fa1c2e"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","0a1a49570293f1a9c4908440d8c9d99d"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.png","285014326bc9a1f65772a8d5e1465e71"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/page/2/index.html","57bc982ca4c96a7138ab40776544e19f"],["/posts/2afd864b.html","3516317992b8d9cced5247371e80a700"],["/posts/441a0256.html","be9e03b255e16933d812a14512a4a749"],["/posts/65dc6fb7.html","ef5bfec0a8047dd191f7325cd3cfc7ef"],["/posts/75f63b3d.html","f90e198136b6888f4eb306be7ca15527"],["/posts/934c955c.html","47447bd05fd75b4ed0dddcfcfceed07a"],["/posts/ba45cc7d.html","5760d0e0497203c2f0dcfc3e6b71f2b1"],["/posts/d76019f8.html","ee94314d073f4e741e8ba187898d1cc8"],["/posts/df8687fa.html","89d9c83106e9242a9c4834a384bbb0cc"],["/posts/ea7ab40c.html","1982f9e3326ad17478826a4705394c03"],["/sw-register.js","e4645e46ad6b476defb9801df5e7d7b3"],["/tags/Blog/index.html","4ba57760f8d8f2cb30adf2f71fdc1416"],["/tags/Hexo/index.html","4a915b31b49e75b047a9fe9e499a5b6f"],["/tags/Linux/index.html","e22a1733983de8743146138f0d2945c4"],["/tags/Markdown/index.html","69c68c12ffb6bb846fcf6bf2409379a0"],["/tags/Matery/index.html","b7c5773a660cdb9f68541f8228402af2"],["/tags/Python/index.html","abcdfcaf8814e856e222f026a52502e4"],["/tags/index.html","e2ecacebdd12c9877509c9e94fc9a237"],["/tags/requests/index.html","610ce98c6a52863cb0b1260de3b8bddc"],["/tags/外挂/index.html","ccee9ca9474d78d9a02bcf3a78f1174b"],["/tags/杂/index.html","91bc0932f88d75e0e5561013611b17aa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
