const seq = require('./seq');
const model = require('./model');

// 测试链接 -- 会一直保持链接，只能在开发环境这样用，生产环境要用连接池
seq.authenticate().then(res => {
  console.log('success');
}).catch(() => {
  console.log('error');
})

seq.sync({ force: true }).then(res => {
  console.log('同步成功');
  process.exit();
}).catch(() => {
  console.log('同步失败');
})