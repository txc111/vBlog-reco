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
    "revision": "5b894f42192b119ce0ee19d295d5d71b"
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
    "url": "assets/js/12.46985815.js",
    "revision": "66b23b611549704b1ac018e99e1a26a7"
  },
  {
    "url": "assets/js/13.f08b460a.js",
    "revision": "edbdc6c5555d64a5bf54d7c24ffefeb5"
  },
  {
    "url": "assets/js/14.fcf48cae.js",
    "revision": "a7995352efbf679816b5a205670dd1d7"
  },
  {
    "url": "assets/js/15.ba161d04.js",
    "revision": "0d8c4f34504bf0f6bdac7dd7d3d54f0a"
  },
  {
    "url": "assets/js/16.6321075e.js",
    "revision": "9a7d3d6d69115222f22ab6b8e51eeb93"
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
    "url": "assets/js/app.d0a67849.js",
    "revision": "0b3dfcb23e7f170cd1c8c71959785de1"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "705494a9436c480fa322d084274b8a35"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "078e48d414459618ffb98cb8fa1b171f"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "a46e83b440356ac4cb9090f498df9c10"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "57a1066239e4fea48c16f82321da6d62"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "fa0cb76975072d292f606d9d559c3d54"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "a8bad9adf508ce9c33547cbf1f525f20"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "98e11b5c7e77e7de7ab4b6c6de04a882"
  },
  {
    "url": "categories/index.html",
    "revision": "5fff5e79b63848845358318806ba6b79"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b190e04d546b9cd6acc2b27c3a036d9d"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "bf07e4be979fcb6efbc698da805a36ca"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8f5605ba06dfa7acedf4165b5736fcba"
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
    "revision": "7ad52f01b27391c945df6e94a77dd63f"
  },
  {
    "url": "tag/index.html",
    "revision": "b1429fe3bb9ace27521e2c9aa3b87df3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f1c2c423763db6de397c7b498202d55f"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "39d4da66d05cf261ad0ca24b89935034"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "8b30140a9c99abb492be52b1e0c3a529"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a80b63e60801719a158891947e165bb"
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
