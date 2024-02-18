const express = require('express')
const { PORT } =require('./config/serverConfig');
const apiRoutes = require
const app= express();

const prepareAndStartServer = () => {
	app.listen(PORT,() => {
		console.log(`Server Started on ${PORT}`);
	})
}

prepareAndStartServer();