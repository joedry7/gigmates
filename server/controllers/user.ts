import { Request, Response } from 'express';
import users from '../../db/models/users';

export default {

  getUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await users.getUser(Number(id));
    try { res.send(user); }
    catch (err) { res.status(500).send(`An error occurred fetching user: ${id}`); }
  },

  addUser: async (req: Request, res: Response) => {
    const userInfo = req.body;
    const user = await users.addUser(userInfo);
    try { res.send(user); }
    catch (err) { res.status(500).send('An error occurred adding this user'); }
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await users.deleteUser(Number(id));
    try { res.send(user); }
    catch (err) { res.status(500).send(`An error occurred deleting user: ${id}`); }
  },

};
