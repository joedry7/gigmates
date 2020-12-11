const router = require('express').Router();
const controller = require('../controllers/user');

router.get('/:id', controller.getUser);

module.exports = router;