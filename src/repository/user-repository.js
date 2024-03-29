//😁user Repository

const { where } = require('sequelize');
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
					id: userId,
				}
			});
			return true;
		}catch(error){
			console.log("Something went wrong on repository layers");
			throw error;
		}
	}

	async getById(userId){
		try{
         const user = await User.findByPk(userId,{
			attributes:[
				'email',
				'id'
			]
		 });
		 return user;
		}catch(error){
           console.log("Something went wrong on repository layer");
		   throw error;
		}
	}

	async getByEmail(userEmail){
		try{
        const user = await User.findOne({
			where: {
				email: userEmail
			}
		});
		return user;
		}catch(error){
			console.log("Something went wromg on repository layer");
			throw error
		}
	}
}

module.exports = UserRepository;