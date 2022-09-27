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
let displayCRUD = async (req, res) => {
	try {
		let data = await CRUDService.getAllUser();
		//console.log(data);
		return res.render('displayCRUD.ejs', {
			dataTable: data,
		});
	} catch (e) {
		console.log(e);
	}
};
let editCRUD = async (req, res) => {
	try {
		let userId = req.query.id;
		if (userId) {
			let userData = await CRUDService.getUserInfoById(userId);
			//check user
			return res.render('editCRUD.ejs', {
				user: userData,
			});
		} else {
			return res.send('User not found!!!');
		}
	} catch (e) {
		console.log(e);
	}
};
let putCRUD = async (req, res) => {
	try {
		let data = req.body;
		let allUsers = await CRUDService.updateUserData(data);
		return res.render('displayCRUD.ejs', {
			dataTable: allUsers,
		});
	} catch (e) {
		console.log(e);
	}
};
let deleteCRUD = async (req, res) => {
	try {
		let userId = req.query.id;
		if (userId) {
			let listUsers = await CRUDService.deleteUserById(userId);
			return res.render('displayCRUD.ejs', {
				dataTable: listUsers,
			});
		} else {
			return res.send('User not found!');
		}
	} catch (e) {
		console.log(e);
	}
};
module.exports = {
	getHomePage: getHomePage,
	getCRUD: getCRUD,
	postCRUD: postCRUD,
	displayCRUD: displayCRUD,
	editCRUD: editCRUD,
	putCRUD: putCRUD,
	deleteCRUD: deleteCRUD,
};
