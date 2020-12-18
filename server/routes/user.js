const router = require('express').Router();
const controller = require('../controllers/user');

router.get('/:id', controller.getUser);
router.post('/', controller.addUser);

module.exports = router;