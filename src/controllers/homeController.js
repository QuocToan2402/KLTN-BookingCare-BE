import { json } from 'body-parser';
import db from '../models/index';
import CRUDService from '../services/CRUDServices';

let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		return res.render('homePage.ejs', {
			data: JSON.stringify(data),
		});
	} catch (e) {
		console.log(e);
	}
};

let getCRUD = async (req, res) => {
	try {
		let data = await db.User.findAll();
		return res.render('crud.ejs', {
			data: JSON.stringify(data),
		});
	} catch (e) {
		console.log(e);
	}
};
let postCRUD = async (req, res) => {
	try {
		let ResMessage = await CRUDService.createNewUser(req.body);
		console.log(ResMessage);
		return res.send(ResMessage);
	} catch (e) {
		console.log(e);
	}
};
module.exports = {
	getHomePage: getHomePage,
	getCRUD: getCRUD,
	postCRUD: postCRUD,
};
