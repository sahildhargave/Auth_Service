const express = require('express')
const { PORT } =require('./config/ser')
const app= express();

const prepareAndStartServer = () => {
	app.listen(3000,() => {
		console.log(`Server Started`);
	})
}

prepareAndStartServer();