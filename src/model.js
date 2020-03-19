const Sequelize = require('sequelize');
const seq = require('./seq');

// 定义模型
const User = seq.define('user', {
  // id 不需要定义，为自增主键
  userName: {
    type: Sequelize.STRING, // 数据库对应的为varchar(255) 采用默认的即可，不需要关心空间，而且这个实际占用的大小是可变的，不会一定占用255
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// 创建外键
Blog.belongsTo(User, {
  // Blog.userId -> User.id  默认会关联到这个表的主键上 是多对一的关系
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  // 相同的意思
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}