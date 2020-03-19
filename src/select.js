const { Blog, User } = require('./model');

(async () => {
  // const data = await Blog.findAndCountAll({
  //   limit: 2,
  //   where: {
  //     userId: 1
  //   }
  // })

  // 连表查询
  const detailData = await Blog.findAndCountAll({
    order: [['id', 'desc']],
    attributes: ['title', 'content'],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName']
      }
    ]
  })

  const detailData2 = await User.findAndCountAll({
    order: [['id', 'desc']],
    include: [
      {
        model: Blog
      }
    ]
  })

  console.log('detailData2', detailData2);
})();