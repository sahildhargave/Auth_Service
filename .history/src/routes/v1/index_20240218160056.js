//😁😂🤣

const express = require('express');

const UserController = require("../../controllers/user-controller")

const router = express.Router();

router.post('/suignup', UserController.create);

module.exports = router;