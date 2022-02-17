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
    "revision": "d8e12784153711861629596ba0839105"
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
    "url": "assets/js/12.e824b4a9.js",
    "revision": "aa2a6c8d36a7be9d4b6b9733f59b3d4f"
  },
  {
    "url": "assets/js/13.562f5509.js",
    "revision": "d2babf21e688af5bc97d89cc099fbd39"
  },
  {
    "url": "assets/js/14.fcf48cae.js",
    "revision": "a7995352efbf679816b5a205670dd1d7"
  },
  {
    "url": "assets/js/15.586fb737.js",
    "revision": "99c26a98a17aece6d4f55c84d1898373"
  },
  {
    "url": "assets/js/16.dc06464e.js",
    "revision": "0b62e41650dcb04a52da9c9ee8c9d879"
  },
  {
    "url": "assets/js/17.78438384.js",
    "revision": "42ade4a5a6f7e05ce18f99d9907b0c8f"
  },
  {
    "url": "assets/js/18.90271800.js",
    "revision": "819bda7ff6223eb10225b20b8c5f14e9"
  },
  {
    "url": "assets/js/19.9645f985.js",
    "revision": "804b5b7fbe3071ef44c0efa8804d2de5"
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
    "url": "assets/js/9.83dae2a1.js",
    "revision": "930de6ae55bcffe27d0aa20727f9f2a6"
  },
  {
    "url": "assets/js/app.96b20309.js",
    "revision": "e131a3a7e278b47fb6b179dad9a6af5a"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "11e0455744e8e441a101cae8e7ea62e5"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "87d18e68ede57766080b11ef1850a688"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "60113b5f232fb6df1f811e70b5e29f96"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "cad01b3fc1a6b8c5fcc1c20c9c1a3e11"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "29ac4bac35bfbbf4671ef1d3448e28a9"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "11ed7cd98cd74e118b71a24ca3fa3c89"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "eb9a840e967510af8dfa1286c711d807"
  },
  {
    "url": "categories/index.html",
    "revision": "33b9e550c0576b10c38f1d62a023da07"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9de1c53a5da934bb8b2fa8604bb326eb"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "7498d11c0c5e01e1338313aff3e96016"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a0c310e8ea0e548abec952ee0d4370a4"
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
    "revision": "6290a233a116183d87662289c001734d"
  },
  {
    "url": "tag/index.html",
    "revision": "a29d42a2a0a06456218b35e79799f8ed"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d956006625428dcf31018248b08727cc"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "a17d574490134f7c2d156b4a35f723e2"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "598f21dc8e6c7b7872a01e5dc0bce6ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "ddc631d1d722aa2a627a2c368739d55a"
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
