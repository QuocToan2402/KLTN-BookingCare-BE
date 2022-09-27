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
let getAllUser = () => {
	//
	return new Promise(async (resolve, reject) => {
		try {
			let users = db.User.findAll({
				where: {
					delete: 0,
				},
				raw: true,
			});
			resolve(users);
		} catch (e) {
			reject(e);
		}
	});
};
let getUserInfoById = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = db.User.findOne({
				where: {
					id: userId,
					delete: 0,
				},
				raw: true,
			});
			if (user) {
				resolve(user);
			} else {
				resolve({});
			}
		} catch (e) {
			reject(e);
		}
	});
};
let updateUserData = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: {
					id: data.id,
				},
			});
			if (user) {
				user.email = data.email;
				user.username = data.username;
				user.firstName = data.firstName;
				user.lastName = data.lastName;
				user.phonenumber = data.phonenumber;
				user.address = data.address;

				await user.save();

				let allUsers = await db.User.findAll({
					where: {
						delete: 0,
					},
				});
				resolve(allUsers);
			} else {
				resolve();
			}
		} catch (e) {
			reject(e);
		}
	});
};
let deleteUserById = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: {
					id: userId,
				},
			});
			if (user) {
				user.delete = 1;

				await user.save();

				let listUsers = await db.User.findAll({
					where: {
						delete: 0,
					},
				});
				resolve(listUsers);
			} else {
				resolve();
			}
		} catch (e) {
			reject(e);
		}
	});
};
module.exports = {
	createNewUser: createNewUser,
	getAllUser: getAllUser,
	getUserInfoById: getUserInfoById,
	updateUserData: updateUserData,
	deleteUserById: deleteUserById,
};
