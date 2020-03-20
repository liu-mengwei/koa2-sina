/*
 * @Anthor: liumengwei
 * @Date: 2020-03-20 16:01:23
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 16:17:27
 * @Description: 测试http请求
 */

const server = require('./server');

test('测试get json', async () => {

  try {
    let res = await server.get('/json');
    expect(res.body.title).toBe('koa2 json')
  } catch (error) {
    console.log(error);
  }
})
