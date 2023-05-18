const express = require('express');
const {usersController} = require('../controller/usersController')

const router = express.Router();

router.get('/users', usersController);

// export default router;
module.exports = router;