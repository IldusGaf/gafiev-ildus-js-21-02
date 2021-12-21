const router = require('express').Router();
const userService = require('../services/usersService');

router.get('', userService.getUserList);
router.get('/:id', userService.getUser);
router.post('/create', userService.addUser);
router.put('/:id', userService.updateUser);

module.exports = router;
