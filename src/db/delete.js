const { User } = require('./model');

(async () => {
  const deleteUser = await User.destroy({
    where: {
      id: 3
    }
  })

  console.log('deleteUser', deleteUser);
})();