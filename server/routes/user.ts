import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/:id', controller.getUser);
router.post('/', controller.addUser);
router.delete('/:id', controller.deleteUser);

export default router;
