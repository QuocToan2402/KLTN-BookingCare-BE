//Moi lan truy cap link thi vao file nay dau tien
import express from 'express';
import homeController from '../controllers/homeController';

let route = express.Router();

let initWebRoutes = (app) => {
	route.get('/', homeController.getHomePage);

	//rest api(get,post, delete)
	route.get('/example', (req, res) => {
		return res.send('Success route to example link!');
	});

	return app.use('/', route);
};
module.exports = initWebRoutes;
