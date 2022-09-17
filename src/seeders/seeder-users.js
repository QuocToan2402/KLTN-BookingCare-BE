'use strict';

module.exports = {
	//chay bt them du lieu vao
	up: (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert('Users', [
			{
				email: 'toanpham0224@gmail.com',
				username: 'admin',
				password: 'admin123',
				firstName: 'Toan',
				lastName: 'Pham',
				image: 'image_address',
				address: 'HCM',
				gender: 'M',
				phonenumber: '123456789',
				positionId: 'P0',
				roleId: 'R1',
				delete: 0,
				createdAt: new Date(),
				updatedAt: null,
				deleteAt: null,
			},
		]);
	},
	//dung khi rollback
	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
