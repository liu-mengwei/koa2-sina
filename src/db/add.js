/*
 * @Anthor: liumengwei
 * @Date: 2020-03-18 16:57:14
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 17:33:27
 * @Description: 描述
 */

const { User, Blog } = require('./model');

(async () => {
  const userData = await User.create({
    userName: 'liumengwei',
    password: 'liumengwei123',
    nickName: '刘梦伟'
  })

  const liuUserId = userData.dataValues.id;

  const blogData = await Blog.create({
    title: '我就是我',
    content: '如果世界听不明白，对影子表白',
    userId: liuUserId
  })

  console.log('userData', userData.dataValues);
})()


