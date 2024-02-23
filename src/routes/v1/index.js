//😁😂🤣

const express = require('express');
const {AuthRequestValidatorMiddleware, AuthRequestValidators} = require("../../middlewares/index");
const UserController = require("../../controllers/user-controller")

const router = express.Router();

router.post(
	'/signup', 
	AuthRequestValidators.validateUserAuth,
	UserController.create
	);
router.post(
	'/signin' ,
	AuthRequestValidators.validateUserAuth,
	UserController.signIn
	);

router.get(
	'/isAuthenticated',
	UserController.isAuthenticated,
)

//router.get('/dummy',(req, res) => {
//	return res.status(200).json({message: 'OK'});
//})


module.exports = router;