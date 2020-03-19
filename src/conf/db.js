/**
 * @description 数据库配置
 * @author liumengwei
 */

const { isProd } = require('../utils/env');

let REDIS_CONF = {
  host: '127.0.0.1',
  port: 6379
}

// 正式环境配置
// if (isProd) {
//   REDIS_CONF = {
//     host: '127.0.0.1',
//     port: 6379
//   }
// }

module.exports = {
  REDIS_CONF
}
