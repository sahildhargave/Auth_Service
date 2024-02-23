//👍🙌🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️
const validateUserAuth = (req, res, next) => {
	if(!req.body.email || !req.body.password){
		return res.status(400).json({
			success: false,
			data: {},
			message: 'Somethings went wrong',
			err: 'Email or password missing in the signup request'
		})
	}
	next();
}

module.exports = {
	validateUserAuth
}