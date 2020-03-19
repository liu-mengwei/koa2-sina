/**
 * @description 创建redis客户端
 * @author liumengwei
 */

let { REDIS_CONF } = require('../conf/db');
let redis = require('redis');

let redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', (err) => {
  console.error(err);
})


/**
 * set
 * @param {string} key 键
 * @param {string|object} val 值
 * @param {number} expire 过期时间
 */
function set(key, val, expire = 60 * 60) {
  // 如果类型是对象，转成字符串，redis不支持对象类型
  if (typeof val === 'object') {
    val = JSON.stringify(val);
  }

  redisClient.set(key, val);
  redisClient.expire(key, expire); //设置过期时间
}


/**
 * get
 * @param {string} key 键
 * @returns {Promise} 返回一个promise
 */
function get(key, val) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
      }
      if (val === null) {
        resolve(null);
      }

      // 尝试转成对象
      try {
        resolve(JSON.parse(val));
      } catch (error) {
        resolve(val);
      }
    })
  })
}


module.exports = {
  get,
  set
};