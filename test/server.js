/*
 * @Anthor: liumengwei
 * @Date: 2020-03-20 15:58:26
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 16:07:39
 * @Description: 测试http服务
 */

const request = require('supertest');
const app = require('../src/app').callback();

module.exports = request(app)




