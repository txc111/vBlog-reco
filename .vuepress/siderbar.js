const { generateSideBarConfig } = require('./utils');
const JAVASCRIPT_PATH = '/blogs/javascript';
const PERFORM_PATH = '/blogs/perform';
const CSS_PATH = '/blogs/css';
const OTHERS_PATH = '/blogs/others';

module.exports = {
  [JAVASCRIPT_PATH]: [
    generateSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    generateSideBarConfig('JS-TS', JAVASCRIPT_PATH + '/js-typescript'),
  ],
  [PERFORM_PATH]: [generateSideBarConfig('前端性能相关', PERFORM_PATH)],
  [CSS_PATH]: [generateSideBarConfig('CSS 技巧', CSS_PATH)],
  [OTHERS_PATH]: [
    generateSideBarConfig('环境配置', OTHERS_PATH + '/env-config'),
    generateSideBarConfig('环境配置', OTHERS_PATH + '/rules-good-practice'),
  ],
};
