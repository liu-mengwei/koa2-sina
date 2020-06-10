/**
 * @author liumengwei
 * @description 路由
 */

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'

  throw new Error()
})

router.get('/json', async (ctx, next) => {
  let session = ctx.session;

  if (session.views === null) {
    session.views = 0
  }

  session.views++;
  
  ctx.body = {
    title: 'koa2 json',
    views: ctx.session.views
  }
})

router.get('/profile/:userName/:className', async (ctx, next) => {
  const { userName, className } = ctx.params;
  ctx.body = {
    title: 'heiheihei',
    userName,
    className
  }
})

router.post('/testpost', async (ctx, next) => {
  const { user, age } = ctx.request.body;
  ctx.body = {
    user,
    age
  }
})



module.exports = router
