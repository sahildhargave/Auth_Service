

cosnt UserService = require('../services/user-service');

cosnt create = async (req,res) => {
	try{

	}catch(error){
		console.log(error);
		return res.status(500).json({
			message:"Something went wrong",
			data:{},
			Actions.Toast.success('')
		})
	}
}