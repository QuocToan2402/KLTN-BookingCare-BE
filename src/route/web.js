//Moi lan truy cap link thi vao file nay dau tien
import express from 'express';

let route = express.Router();

let initWebRoutes = (app) => {
	route.get('/', (req, res) => {
		return res.send('Server started!!');
	});
	return app.use('/', route);
};
module.exports = initWebRoutes;
