const express = require('express')
const { PORT } =require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const {User} = require('./models/index');

const app= express();

const prepareAndStartServer = () => {
	app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT,() => {
		console.log(`Server Started on ${PORT}`);
		const incomingpassword = '123456';
		const 
	})
}

prepareAndStartServer();