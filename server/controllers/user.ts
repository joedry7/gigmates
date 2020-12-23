import { Request, Response } from 'express';
import users from '../../db/models/users';

export default {

  getUser: (req: Request, res: Response) => {
    const { id } = req.params;
    users.getUser(Number(id))
      .then((user) => {
        res.send(user);
      })
      .catch(() => {
        res.status(500).send(`An error occurred fetching user: ${id}`);
      });
  },

  addUser: (req: Request, res: Response) => {
    const user = req.body;
    users.addUser(user)
      .then((newUser) => {
        res.send(newUser);
      })
      .catch(() => {
        res.status(500).send('An error occurred adding this user');
      });
  },

  deleteUser: (req: Request, res: Response) => {
    const { id } = req.params;
    users.deleteUser(Number(id))
      .then((user) => {
        res.send(user);
      })
      .catch(() => {
        res.status(500).send(`An error occurred deleting user: ${id}`);
      });
  },

};
