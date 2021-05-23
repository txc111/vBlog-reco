const { generateSideBarConfig } = require('./utils');
const JAVASCRIPT_PATH = '/blogs/javascript';
const PERFORM_PATH = '/blogs/perform';
const CSS_PATH = '/blogs/css';
// const NET_PATH = '/blogs/net';

module.exports = {
  [JAVASCRIPT_PATH]: [
    generateSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    generateSideBarConfig('JS-TS', JAVASCRIPT_PATH + '/js-typescript')
  ],
  [PERFORM_PATH]: [generateSideBarConfig('前端性能相关', PERFORM_PATH)],
  [CSS_PATH]: [generateSideBarConfig('CSS 技巧', CSS_PATH)]
  // [NET_PATH]: [
  //   generateSideBarConfig('TCP 协议', NET_PATH + '/tcp'),
  //   generateSideBarConfig('HTTP 协议', NET_PATH + '/http')
  // ],
};
