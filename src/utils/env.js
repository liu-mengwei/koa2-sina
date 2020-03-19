/**
 * @description 针对运行环境的常用操作
 * @author liumemngwei
 */

const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === 'dev',
  isProd: ENV === 'production'
}


