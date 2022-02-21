const { generateSideBarConfig } = require('./utils');
const JAVASCRIPT_PATH = '/blogs/javascript';
const PERFORM_PATH = '/blogs/perform';
const OTHERS_PATH = '/blogs/others';
// const CSS_PATH = '/blogs/css';

module.exports = {
  [JAVASCRIPT_PATH]: [
    generateSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    generateSideBarConfig('JS-TS', JAVASCRIPT_PATH + '/js-typescript'),
  ],
  // [PERFORM_PATH]: [generateSideBarConfig('前端性能相关', PERFORM_PATH)],
  // [CSS_PATH]: [generateSideBarConfig('CSS 技巧', CSS_PATH)],
  [OTHERS_PATH]: [
    generateSideBarConfig('环境配置', OTHERS_PATH + '/env-config'),
    generateSideBarConfig('环境配置', OTHERS_PATH + '/rules-good-practice'),
  ],
  [PERFORM_PATH]:[generateSideBarConfig('性能优化', PERFORM_PATH)]
};
