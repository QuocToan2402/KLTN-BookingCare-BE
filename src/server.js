import express from 'express';
import bodyParser from 'body-parser'; //lay thong so tu client gui len server
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

//port == undefined => port = 4000
let port = process.env.PORT || 3000;

app.listen(port, () => {
	//callback
	console.log('server is running at port: ' + port);
});
