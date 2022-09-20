import db from '../models/index';
import bcrypt from 'bcryptjs';

var salt = bcrypt.genSaltSync(10); // create hash function

let createNewUser = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPasswordFromBcrypt = await hashUserPassword(data.password);
			await db.User.create({
				email: data.email,
				username: data.username,
				password: hashPasswordFromBcrypt,
				firstName: data.firstName,
				lastName: data.lastName,
				image: data.image,
				address: data.address,
				gender: data.gender,
				phonenumber: data.phonenumber,
				positionId: data.positionId,
				roleId: data.roleId,
				delete: false,
			});
			resolve('create succeed!');
		} catch (e) {
			reject(e);
		}
	});
};
let hashUserPassword = (password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPassword = await bcrypt.hashSync(password, salt);
			resolve(hashPassword);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	createNewUser: createNewUser,
};
