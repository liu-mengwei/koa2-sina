/**
 * @author liumengwei
 * @description app实例入口
 */

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const errRoutes = require('./routes/views/error')

const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const { REDIS_CONF } = require('./conf/db')
const { isProd } = require('./utils/env')

// error handler 页面打印错误
const errConfig = {};
if (isProd) {
  errConfig = {
    redirect: '/error'
  }
}
onerror(app, errConfig)

// middlewares
// post form可以通过它来解析出来
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

// 解析出来的json是字符串型的，变成对象形式
app.use(json())

// 日志功能
app.use(logger())

// 使用户可以访问静态目录 例如http://localhost:3000/stylesheets/style.css
app.use(require('koa-static')(__dirname + '/public'))

// 页面 必须先注册这个功能才能使用 否则识别不了ejs语法
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// // logger 中间件的演示
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// session配置
app.keys = ['']
app.use(session({
  key: 'weibo.sid', // cookie名称 sid和sess 其实存的值是一样的，一个是cookie用的，一个是服务器的session用的
  prefix: 'weibo:sess', // 存储在redis中的名称
  // ttl: 24 * 60 * 60 * 1000,  // 可不写，这个是session过期时间，默认和cookie过期时间相同
  cookie: {
    path: '/',
    httpOnly: true, // 只能由服务器传给客户端，客户端是不能改这个值的
    maxAge: 24 * 60 * 60 * 1000 // 过期时间
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}` // all代表了url 端口号都包含
  }) // session存储在那里
}))


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(errRoutes.routes(), errRoutes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
