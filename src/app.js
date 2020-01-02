const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler 页面打印错误
onerror(app)

// middlewares
// post form可以通过它来解析出来
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
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

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
