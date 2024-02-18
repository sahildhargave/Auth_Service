const express = require('express')
const { PORT } =require('./config/serverConfig');
const 
const app= express();

const prepareAndStartServer = () => {
	app.listen(PORT,() => {
		console.log(`Server Started on ${PORT}`);
	})
}

prepareAndStartServer();