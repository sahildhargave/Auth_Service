const express = require('express')
const { PORT } =require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const app= express();

const prepareAndStartServer = () => {
	app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, async() => {
		console.log(`Server Started on ${PORT}`);
		

	})
}

prepareAndStartServer();