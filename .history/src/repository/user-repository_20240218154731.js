//😁user Repository

const { User} = require('../models/index');

class UserRepository{
	async create(data){
		try{
          const user = await User.create(data);
		  return user;
		}catch(error){
			console.log("Somethings went wrong on repository layer");
			throw error;
		}
	}
	
	async destory(userId){
		try{
			await User.destory({
				where:{
					id: userId
				}
			})
		}
	}
}

module.exports = UserRepository;