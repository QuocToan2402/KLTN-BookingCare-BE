'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			firstName: {
				type: Sequelize.STRING,
			},
			lastName: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			gender: {
				type: Sequelize.BOOLEAN,
			},
			phonenumber: {
				type: Sequelize.STRING,
			},
			positionId: {
				type: Sequelize.STRING,
			},
			roleId: {
				type: Sequelize.STRING,
			},
			delete: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			deleteAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
