import db from '../models/index';
import bcrypt from 'bcryptjs';

let checkUserUsername = (username) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: { username: username },
			});
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (e) {
			reject(e);
		}
	});
};
/* let compareUserPassword = () => {
	//
	return new Promise(async (resolve, reject) => {
		try {
		} catch (e) {
			reject(e);
		}
	});
}; */
let handleUserLogin = (username, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			let isExist = await checkUserUsername(username);
			if (isExist) {
				//exist user
				//compare
				let user = await db.User.findOne({
					where: { username: username },
					attributes: ['email', 'username', 'password', 'roleId'],
					raw: true,
				});
				if (user) {
					let check = await bcrypt.compareSync(password, user.password);
					if (check) {
						userData.errCode = 0;
						userData.errMessage = 'Success!';
						delete user.password;
						//userData = user;
						userData.User = user;
					} else {
						userData.errCode = 3;
						userData.errMessage = 'Wrong password!';
					}
				} else {
					userData.errCode = 2;
					userData.errMessage = `Can't find user!`;
				}
			} else {
				userData.errCode = 1;
				userData.errMessage = `Username isn't exist in out system. Please check and try again!`;
				//return error
			}
			resolve(userData);
		} catch (e) {
			reject(e);
		}
	});
};
module.exports = {
	handleUserLogin: handleUserLogin,
};
