const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');


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

	async signIn(email, plainPassword){
		try{
         const user = await this.UserRepository.getByEmail(email);
		 const passwordsMatch = this.checkPassword(
			plainPassword,
            user.password
		 )
		 if(!passwordsMatch){
			console.log("Password doesn't match")
			throw {error: "Incorrect password"};
		 }
		 // step 3 => if paswords match then create a token and send it to the user

		 const newJWT = this.createToken({
			email: user.email,
			id: user.id
		 });
		
        return newJWT;

		}catch(error){
			console.log("Something went wrong in the sign in process");
			throw error
		}
	}

	createToken(user){
       try{
         const result = jwt.sign(user, JWT_KEY,{ expiresIn: '1h'});

		 return result;
	   }catch(error){
		console.log("Something went wrong in token")
		throw error;
	   }
	}

	verifyToken(token){
		try{
         const response = jwt.verify(token, JWT_KEY);
		 return response;
		}catch(error){
			console.log("Something went wrong in token")
            throw error;
		}
	}

	checkPassword(userInputPlainPassword, encryptedPassword){
		try{
           return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);

		}catch(error){
			console.log("Something went wrong in token")
            throw error;
		}
	}
}

module.exports = UserService;