/*
 * @Anthor: liumengwei
 * @Date: 2020-03-19 15:59:27
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 17:15:44
 * @Description: 针对运行环境的常用操作
 */

const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === 'dev',
  isProd: ENV === 'production',
  isTest: ENV === 'test'
}


