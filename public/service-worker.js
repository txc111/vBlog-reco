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
    "revision": "d97948313c5a1870a978b533930d5727"
  },
  {
    "url": "assets/css/0.styles.71d3942e.css",
    "revision": "94b3efefe54dbc4905a5d7ceb2f56e6f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.822bbb7c.js",
    "revision": "14ae9f1b1b6cdf8bfcfee68ffd3b7e0c"
  },
  {
    "url": "assets/js/10.628ec995.js",
    "revision": "7d8b00b56746f6fa1f30e3dec1b64c22"
  },
  {
    "url": "assets/js/11.1b4d2f98.js",
    "revision": "d10ec524b7ab84ff65bbb4143612f260"
  },
  {
    "url": "assets/js/12.ee27ec02.js",
    "revision": "0d69a27e6e053a59858b35ec994b8305"
  },
  {
    "url": "assets/js/13.65f1346a.js",
    "revision": "f81d2bdb830e62df49cbc16f162507c4"
  },
  {
    "url": "assets/js/14.5783adb6.js",
    "revision": "ddc60384cbdb2f9e040db018b8e1acda"
  },
  {
    "url": "assets/js/15.f8458d4d.js",
    "revision": "2074ad726bae2e39eac49f7d91b76a50"
  },
  {
    "url": "assets/js/16.4f651139.js",
    "revision": "316eefa386a681ea5a94c5b14da7129e"
  },
  {
    "url": "assets/js/17.124c9444.js",
    "revision": "379f0e62b720548eeeff9b65916abe08"
  },
  {
    "url": "assets/js/18.e6a0b70b.js",
    "revision": "01f9dbe6c4fe2c3805ce56afba9e6987"
  },
  {
    "url": "assets/js/19.bcec17f8.js",
    "revision": "2c47d074b3d3aa32cc66736b2609430a"
  },
  {
    "url": "assets/js/3.64484de6.js",
    "revision": "49cf51a9603a65519260c1ea4055c689"
  },
  {
    "url": "assets/js/4.ebb703e9.js",
    "revision": "9797745270a02a9c42883017da59de24"
  },
  {
    "url": "assets/js/5.5af10254.js",
    "revision": "e548fceec42166322cb831cd74bc2b52"
  },
  {
    "url": "assets/js/6.0af45244.js",
    "revision": "eb5504c81bbc02d38d27d87937cf31be"
  },
  {
    "url": "assets/js/7.e4980ec4.js",
    "revision": "208cdc0ae69a5c04b58128ab6fe01e58"
  },
  {
    "url": "assets/js/8.7dfc803f.js",
    "revision": "5f654ea85d43b14ce146002db9494584"
  },
  {
    "url": "assets/js/9.498f5156.js",
    "revision": "a345e7204d820c31953f605763fd04a3"
  },
  {
    "url": "assets/js/app.6a90f8cc.js",
    "revision": "ab13fd249dd153de95e02de5a46ff810"
  },
  {
    "url": "avatar.png",
    "revision": "a5261c266c62de8a3b365d1371a1bb80"
  },
  {
    "url": "blogs/css/guide.html",
    "revision": "a117ebdd60e7ffaf4d3f7a4afb7bac3f"
  },
  {
    "url": "blogs/javascript/js-base/gulp-test.html",
    "revision": "6a05b6b8ab96f285ff56f2b3120c96ce"
  },
  {
    "url": "blogs/javascript/js-base/scenario.html",
    "revision": "09986a8c3052d13b0b6e583c6ae3351b"
  },
  {
    "url": "blogs/javascript/js-base/snippets.html",
    "revision": "892ee5bea4806cb13b00a55ea9aae736"
  },
  {
    "url": "blogs/javascript/js-base/webpack-register-vue-component.html",
    "revision": "bc8750ed2249914dada6a9cc6c1b70f9"
  },
  {
    "url": "blogs/javascript/js-typescript/ts-base1.html",
    "revision": "f626c93a148904e9bfb756295a7c3fb7"
  },
  {
    "url": "blogs/perform/airbng-guide.html",
    "revision": "a0865b578236bd2dff16d121c1a785ed"
  },
  {
    "url": "categories/guide/index.html",
    "revision": "3ffc90f6f2cea348c120564f7ac5a3a2"
  },
  {
    "url": "categories/index.html",
    "revision": "cf38db8837cbdb3f3a6584e0c830fb50"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "061e473414df09a39e5ad77bc1b219d9"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "7115776693fa67eab2e2c4fd8204601e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "18f36337c07992e4990fd41412c806b1"
  },
  {
    "url": "js/mouse-click-animate.js",
    "revision": "b886467864d6c72f123b56526c99c4a6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Cli/index.html",
    "revision": "52d54a4a6fe27da37fcfc3822b53be88"
  },
  {
    "url": "tag/guide/index.html",
    "revision": "b60f94160761e0d61aa8adff688fa529"
  },
  {
    "url": "tag/index.html",
    "revision": "fbf06b1209d1f08e4a3205ad99e25d15"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e2cf3ed8f8930b6b24e98856a99a3a41"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "2820c1063a95256f749b2063af20bb6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "62781d017b850f302eedc233f606d44c"
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
