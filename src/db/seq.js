/*
 * @Anthor: liumengwei
 * @Date: 2020-03-18 14:20:02
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 17:51:05
 * @Description: 描述
 */
const Sequelize = require('sequelize');
const { SQL_CONF } = require('../conf/db');
const { isProd, isTest } = require('../utils/env');

const { database, user, password, host, dialect } = SQL_CONF;

let config = {
  host,
  dialect
}

// 连接池配置 -- 线上使用，线下并不需要
if (isProd) {
  config.pool = {
    max: 5, // 最大的链接数量
    min: 0,
    idle: 10000 // 10s没有使用就释放连接出来
  }
}

// 针对单元测试时，不打印sql语句
if (isTest) {
  config.logging = () => { }
}

const seq = new Sequelize(database, user, password, config);

module.exports = seq;

