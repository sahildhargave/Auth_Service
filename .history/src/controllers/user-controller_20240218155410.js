

const UserService = require('../services/user-service');

const userS
const create = async (req,res) => {
	try{

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