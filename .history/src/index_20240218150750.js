const express = require('express')
const app= express();

const prepareAndStartServer = () => {
	app.listen(3000,() => {
		console.log(`Server Starte`)
	})
}