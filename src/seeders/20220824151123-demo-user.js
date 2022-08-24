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
				firstName: 'John',
				lastName: 'Doe',
				email: 'example@example.com',
				createdAt: new Date(),
				updatedAt: new Date(),
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
