const sidebar = require('./siderbar.js');

module.exports = {
  title: '小霸王',
  description: 'LEARNING MACHINE',
  dest: 'docs',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/mouse-click-animate.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'light',
    subSidebar: 'auto',
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/hitler617',
            icon: 'reco-github',
          },
        ],
      },
    ],
    sidebar,
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '目录索引',
      },
      tag: {
        location: 3,
        text: '标签索引',
      },
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/avatar.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'scottt',
    authorAvatar: '/avatar.png',
    record: 'xc_111',
    startYear: '2019',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-comments'],
    ['vuepress-plugin-boxx'],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功!',
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
  ],
};
