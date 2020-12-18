const users = require('../../db/models/users');

module.exports = {

  getUser: (req, res) => {
    const id = req.params.id;
    users.getUser(id)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send(`An error occurred fetching user: ${id}`);
      })
  },

  addUser: (req, res) => {
    const user = req.body;
    users.addUser(user)
      .then((newUser) => {
        res.send(newUser);
      })
      .catch((err) => {
        res.status(500).send(`An error occurred adding this user`);
      })
  }

}