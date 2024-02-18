const express = require('express')
const { PORT } =require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const app= express();

const prepareAndStartServer = () => {

	app.use('/api')
	app.listen(PORT,() => {
		console.log(`Server Started on ${PORT}`);
	})
}

prepareAndStartServer();