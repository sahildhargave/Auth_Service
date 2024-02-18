const UserRepository = require('../repository/user-repository');

class UserService{
	constructor(){
		this.UserRepository = new UserRepository();

	}

	async create(data){
		try{
           const user = await this.UserRepository.create(data);
		   return user;
		}catch(error){
			console.log("Error in user service while creating a user");
			throw error;
		}
	}
}

module.exports = UsserService;