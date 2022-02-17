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
    "revision": "e2eb6768b7f83efb71e60ddeb5c44ddc"
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
    "url": "assets/js/11.ed402ea8.js",
    "revision": "31b2ffef356bb7c67b9ac88a42dbe2e7"
  },
  {
    "url": "assets/js/12.ea2305de.js",
    "revision": "701d399a64bea375587fc5ccc0c4f412"
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
    "url": "assets/js/app.c8569716.js",
    "revision": "dd2eccfa96d406e5d0ac9aa3a5f600c6"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "9e98adb22ba80c80669970b04124732d"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "0f48c8c44142cbf0e226e6aa07f16583"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "a856c79c9f68aa3a996ccdb111356c91"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "b8926d9e664b6c3a7a224279ca7fb760"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "41cd9004e1998ea2dbdb256e1acb2297"
  },
  {
    "url": "blogs/others/env-config/repos-manage.html",
    "revision": "7b5c4f12d24ff980294850cdb23432c0"
  },
  {
    "url": "blogs/others/rules-good-practice/airbng-guide.html",
    "revision": "56addc198579a7890b2fabece201f908"
  },
  {
    "url": "categories/index.html",
    "revision": "5f764bbc44cf77848f2f42c3f336c72c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1a42b51126a30f84f08d09a95bf3e2c9"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "41d9cb8d98291b5be439b8aa9305562c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "7069ab3bfe635420b209960d21e1e0ae"
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
    "revision": "1c3395febb47f4f8934ebeabf1fbac5e"
  },
  {
    "url": "tag/index.html",
    "revision": "efdb012400cd0f737178aae1c272d12d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "be4305ed6df8b455f90fd44f3aa83eef"
  },
  {
    "url": "tag/代码规范/index.html",
    "revision": "ccaede7e4864706f6f78ddfe25a612a0"
  },
  {
    "url": "tag/开发环境配置/index.html",
    "revision": "ce8c375ee0895ac1efb6e7efebe88beb"
  },
  {
    "url": "timeline/index.html",
    "revision": "19cf3a4a5ddbd3289fb4affe29065cfb"
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
