/*
 * @Anthor: liumengwei
 * @Date: 2020-03-19 15:05:16
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 17:17:24
 * @Description: 数据库配置
 */

const { isProd } = require('../utils/env');

let REDIS_CONF = {
  host: '127.0.0.1',
  port: 6379
}

let SQL_CONF = {
  host: '127.0.0.1',
  dialect: 'mysql',
  database: 'koa_sina',
  user: 'root',
  password: '1mengxiang'
}

// 正式环境配置
if (isProd) {
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }

  SQL_CONF = {
    host: '127.0.0.1',
    dialect: 'mysql',
    database: 'koa_sina',
    user: 'root',
    password: '1mengxiang'
  }
}

module.exports = {
  REDIS_CONF,
  SQL_CONF
}
