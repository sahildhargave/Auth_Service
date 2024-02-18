const express = require('express')
const { PORT } =require('./config/serverConfig');

const app= express();

const prepareAndStartServer = () => {
	app.listen(,() => {
		console.log(`Server Started`);
	})
}

prepareAndStartServer();