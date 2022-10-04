import express from 'express';
import bodyParser from 'body-parser'; //lay thong so tu client gui len server
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectToDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();

let app = express();
//fix cors issue
//app.use(cors({ origin: true }));
// Add headers before the routes are defined
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
	//res.setHeader('Access-Control-Allow-Origin', '*');
	//res.setHeader('Access-Control-Allow-Methods', '*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	// Pass to next layer of middleware
	next();
});
/* app.use(cors());

app.get('/api/login', function (req, res, next) {
	res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(3000, function () {
	console.log('CORS-enabled web server listening on port 80');
}); */
//app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }));

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
//Khai bao cho express biet tat ca cac link dung trong initWebRoutes
initWebRoutes(app);

connectToDB();

//port == undefined => port = 4000
let port = process.env.PORT || 4000;

app.listen(port, () => {
	//callback
	console.log('server is running at port: ' + port);
});
