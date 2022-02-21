/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01c4544a1b1601618e8d9a377fe978f1"
  },
  {
    "url": "assets/css/0.styles.146ab50a.css",
    "revision": "954b23464df2f6295afb4eb4e33792d0"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.e8632ad7.js",
    "revision": "00dbfdbb67eda451ad6f3f5200d292ee"
  },
  {
    "url": "assets/js/10.0912dc6a.js",
    "revision": "a81ce0072baeea8b198eb57971d4c00c"
  },
  {
    "url": "assets/js/11.1d9971b4.js",
    "revision": "b019643a680f3e109fa32249c10f5754"
  },
  {
    "url": "assets/js/12.6a12837b.js",
    "revision": "03673530781ed9a9c144fd1851b3b56e"
  },
  {
    "url": "assets/js/13.7429bfad.js",
    "revision": "452aec82aeca1ae48c69252241e2545b"
  },
  {
    "url": "assets/js/14.b8f4e20b.js",
    "revision": "58265ddcdbb70a18fe18a7fcff327f49"
  },
  {
    "url": "assets/js/15.0f70c6b1.js",
    "revision": "def00680c99f11e1314749c511b4bbc7"
  },
  {
    "url": "assets/js/16.d34fca0f.js",
    "revision": "969a3403b183f68db6b18a13215eeebb"
  },
  {
    "url": "assets/js/17.b4543e4f.js",
    "revision": "bc8c9b012ee8388b36af401fb53131c5"
  },
  {
    "url": "assets/js/18.4ed51c5c.js",
    "revision": "ce61fdd7ac5ee0de3926a92c3dbc0701"
  },
  {
    "url": "assets/js/19.16b9472e.js",
    "revision": "31309c6572c4859593ab3909af675e9f"
  },
  {
    "url": "assets/js/20.21c6d2d6.js",
    "revision": "90f067f850bcdf6cf16546a427ff4b39"
  },
  {
    "url": "assets/js/3.590c4de2.js",
    "revision": "cbe1d765e82fbfa237e9d38a3f0eb000"
  },
  {
    "url": "assets/js/4.af4a980f.js",
    "revision": "53f34c967a31119a0514dc90835f0894"
  },
  {
    "url": "assets/js/5.b36b7bc4.js",
    "revision": "a0ae629c52dcbce9b38c185969937e68"
  },
  {
    "url": "assets/js/6.ba5f9fe7.js",
    "revision": "c7f26eb3575041324e13c9ddaea13b62"
  },
  {
    "url": "assets/js/7.cdbf692a.js",
    "revision": "95fed3c0c2f57a76676aed4786b40c84"
  },
  {
    "url": "assets/js/8.a8ec54c1.js",
    "revision": "f601c43bd6163ce81e4c147abe2e6132"
  },
  {
    "url": "assets/js/9.b2e86829.js",
    "revision": "8e6182d1251864c109923790204334aa"
  },
  {
    "url": "assets/js/app.391cde32.js",
    "revision": "a5b993f4b6da14ebc6f4031c24b75a92"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "6d415148af1d1477e8b68e71581df06f"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "3ff799257c752db4635353cacffc6b1d"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "99db8a3479bd8e2711512ea6d296a4d1"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "9c2ff94ef350407345003bfed85d4d3c"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "ab4cca0b8534dd48bf8ebfe11d141eca"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "a38f32d480ebc50803b372d14fd66df1"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "c0e8c89d73a26b6ffdb938f068ad8c59"
  },
  {
    "url": "blogs/perform/perform.html",
    "revision": "d32164a822b64bea3d943aa79c6da918"
  },
  {
    "url": "categories/index.html",
    "revision": "f507e8ffe28b4668aef0c009a9c4bd49"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "03f2a0b05cf3fd96eb9f92ab2bdd9c62"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "bd8faecaa0f5eed6790de5461acdfe0e"
  },
  {
    "url": "categories/Perform/index.html",
    "revision": "1abc0add9d722d2061acce9d28fca618"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e9731f678d5bdb316b3454821c98f5fb"
  },
  {
    "url": "js/mouse-click-animate.js",
    "revision": "9704f2f28da8685380b527b08976c8a1"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Cli/index.html",
    "revision": "a8e60caccc4f8172fbc7e9cacf168033"
  },
  {
    "url": "tag/index.html",
    "revision": "30c2fdbe3eb46e097ef2db43b1384fd9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b29ba58cf434d10b384367b116a251e0"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "2a22b9d48c023b58aa4f11334a51f63c"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "91e07fb84d8aa020af82c9787a833f6e"
  },
  {
    "url": "tag/性能优化/index.html",
    "revision": "7b8b0e04fe8d299fe911f6c5dc12bf4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3348892c39c9418ae0302515f2cbe768"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
