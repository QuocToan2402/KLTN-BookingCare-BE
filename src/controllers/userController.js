import { json } from 'body-parser';
import db from '../models/index';
import userService from '../services/userService';

let handleLogin = async (req, res) => {
	try {
		let username = req.body.username;
		let password = req.body.password;
		//check exist
		if (!username || !password) {
			return res.status(500).json({
				errCode: 1,
				message: 'missing input parameter',
			});
		}
		//Get user by username & compare password
		let userData = await userService.handleUserLogin(username, password);

		//success & return info
		//access token: JWT

		return res.status(200).json({
			errCode: userData.errCode,
			errMessage: userData.errMessage,
			//userData,
			user: userData.User ? userData.User : {},
		});
	} catch (e) {
		console.log(e);
	}
};
module.exports = {
	handleLogin: handleLogin,
};
