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
    "revision": "46a854eea32cad5ff90f1e25f0e47b79"
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
    "url": "assets/js/15.4595ce56.js",
    "revision": "08669e2b56420c73555be11aae9da401"
  },
  {
    "url": "assets/js/16.6321075e.js",
    "revision": "9a7d3d6d69115222f22ab6b8e51eeb93"
  },
  {
    "url": "assets/js/17.9104e2be.js",
    "revision": "f4808833860fdf9962ce10437b4d0bfe"
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
    "url": "assets/js/app.085fd6aa.js",
    "revision": "27a891def39ca3fc1580874c7558540b"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "1e377f2ace92ca93faf8759222da90c8"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "eedad56a3f7b564f29950610fbbf3e8f"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "62c56bd188a98f3f107c6771be1a8229"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "7e63080531f5d34ef016f84aca71f27d"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "0fbf8a6ddf58c0d7b9c15f3ccc91170a"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "304f6083ff2f33fb814a55c6eec5c865"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "a872c8530e9b5948da23c67e2e2f4a5e"
  },
  {
    "url": "categories/index.html",
    "revision": "cd85c8918aebe81960f769dcfcbea705"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fe7cfc3c8c3c71c80e215481f3ce9329"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "668a8d773ad2da2c90d2cac35763cd42"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1d5c57d55013adea426ba3e2c2394b20"
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
    "revision": "625d110804c6ecfee3935ab9c9ff5402"
  },
  {
    "url": "tag/index.html",
    "revision": "6ad94624bfebf1024049dcd513bc02fb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6f38684d22f20a9329a4494bd5c33716"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "76ddfa255cffe78409061c579eaed05b"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "c873ec29e21aa399754838196deffef4"
  },
  {
    "url": "timeline/index.html",
    "revision": "2f1d622288e8fe6f7a08ad8a64002831"
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
