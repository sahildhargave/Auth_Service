const UserRepository = require('../repository/user-repository');

class UserService{
	constructor(){
		this.UserRepository = new UserRepository();

	}

	async create(data){
		try{
           const user = await this.UserRepository.create(data);
		   
		}catch(error){
			console.log("Error in user service while creating a user");
			throw error;
		}
	}
}