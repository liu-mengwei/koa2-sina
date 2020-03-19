const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  host: 'localhost',
  dialect: 'mysql'
};

// 连接池配置 -- 线上使用，线下并不需要
// config.pool = {
//   max: 5, // 最大的链接数量
//   min: 0,
//   idle: 10000 // 10s没有使用就释放连接出来
// }

const seq = new Sequelize('koa_sina', 'root', '1mengxiang', config);

module.exports = seq;

