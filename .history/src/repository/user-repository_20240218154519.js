//😁user Repository

const { User} = require('../models/index');

class UserRepository{
	async create(data){
		try{
          const user = await User.create(data)
		}catch(error){
			console.log("Somethings went wrong on repository layer");
			throw error;
		}
	}
}