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
    "revision": "2947ae7440bdcc1da01331ec9041c0d0"
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
    "url": "assets/js/17.7cd07179.js",
    "revision": "182f7f9b8e053a2d21aeda1ff3631918"
  },
  {
    "url": "assets/js/18.f107283d.js",
    "revision": "449e7de96eabbd4725dd521f8253b315"
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
    "url": "assets/js/app.8e09b917.js",
    "revision": "4ec5e2cedfccfb89d165d3b6d82b505a"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "cd5b96c989e05fb05eac251f86a3a01c"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "4c8aa35e126370d9ba9424908083237e"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "e5f6a0304e6c378096a00b18b6374db3"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "fc4ca707664982290fb5f67728f3f54f"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "6169d34776064b32a0c1c45ee0a83e58"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "c1f34d8b46a48c66b1fc019200ecf620"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "e52b372f3e992fd11363232a79acda0f"
  },
  {
    "url": "categories/index.html",
    "revision": "53a284a37ce87488788c3a8abdb8a4a7"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1460c61401791ce226c396929f43fd6b"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "194c5cee22e3606c7922ad492c8f06bd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "84715ccaae112cf6137736a076ce37ca"
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
    "revision": "3c1403284fcec6a1ec06c6d010fa1cdd"
  },
  {
    "url": "tag/index.html",
    "revision": "2a10b903c08e0231c09b9222d3bd2548"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5e6d44508419955e2ed7927a70691f88"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "90b805e2ba8175c7258167ba959bc12e"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "131b21bbc24960de0c0c6a00f432346f"
  },
  {
    "url": "timeline/index.html",
    "revision": "149fda057e02ecae60e66bfd71fbc78b"
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
