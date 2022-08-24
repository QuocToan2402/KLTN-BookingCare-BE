import express from 'express';
import bodyParser from 'body-parser'; //lay thong so tu client gui len server
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectToDB from './config/connectDB';
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
//Khai bao cho express biet tat ca cac link dung trong initWebRoutes
initWebRoutes(app);

connectToDB();

//port == undefined => port = 4000
let port = process.env.PORT || 3000;

app.listen(port, () => {
	//callback
	console.log('server is running at port: ' + port);
});
