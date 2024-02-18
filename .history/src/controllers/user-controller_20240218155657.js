

const UserService = require('../services/user-service');

const UserService = new UserService();

const create = async (req,res) => {
	try{
     const response = await UserService.create({
		email: req.bidy.email,
		password: req.body.password
	 });
	 return res.status(201).json({
		message: 'Successfully created user'
		success: true,
		data: response,
		
	 })
	}catch(error){
		console.log(error);
		return res.status(500).json({
			message:"Something went wrong",
			data:{},
			success: false,
			err: error
		})
	}
}