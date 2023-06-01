const router = require('express').Router();
const userController = require('../controllers/UserController.js');

router.post('/register', userController.register)

module.exports = router;