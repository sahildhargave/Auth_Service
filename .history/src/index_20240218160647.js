const express = require('express')
const { PORT } =require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const app= express();

const prepareAndStartServer = () => {
	app.use
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use('/api', apiRoutes);
	app.listen(PORT,() => {
		console.log(`Server Started on ${PORT}`);
	})
}

prepareAndStartServer();